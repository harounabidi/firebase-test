"use client"

import { createContext, useState, useContext, useEffect } from "react"
import axios from "axios"

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    if (accessToken) {
      // Set up Axios interceptor for adding the access token to requests
      const interceptor = axios.interceptors.request.use(
        (config) => {
          config.headers["Authorization"] = `Bearer ${accessToken}`
          return config
        },
        (error) => Promise.reject(error)
      )

      return () => {
        // Remove the interceptor when the component unmounts or the token changes
        axios.interceptors.request.eject(interceptor)
      }
    }
  }, [accessToken])

  const login = async (idToken) => {
    try {
      const response = await axios.post(
        "https://api.klark.app/v1/auth/login/firebase",
        { idToken }
      )
      const { user, tokens } = response.data

      setUser(user)
      setAccessToken(tokens.access.token)

      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify(user))

      // Store refresh token in an HTTP-only cookie (this should be done server-side)
      // For client-side, we'll simulate it with localStorage, but this is not recommended for production
      localStorage.setItem("refreshToken", tokens.refresh.token)
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    setAccessToken(null)
    localStorage.removeItem("user")
    localStorage.removeItem("refreshToken")
    // In a real application, you should also invalidate the refresh token on the server
  }

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken")
      if (!refreshToken) {
        throw new Error("No refresh token available")
      }

      const response = await axios.post(
        "https://api.klark.app/v1/auth/refresh",
        { refreshToken }
      )
      const { access } = response.data.tokens

      setAccessToken(access.token)
      return access.token
    } catch (error) {
      console.error("Failed to refresh access token:", error)
      logout()
      throw error
    }
  }

  // Set up Axios interceptor for handling token expiration
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true

          try {
            const newAccessToken = await refreshAccessToken()
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken}`
            return axios(originalRequest)
          } catch (refreshError) {
            return Promise.reject(refreshError)
          }
        }

        return Promise.reject(error)
      }
    )

    return () => {
      axios.interceptors.response.eject(interceptor)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}
