"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import firebase from "@/firebase/config"
import LoadingDots from "@components/icons/loading-dots"

const auth = getAuth(firebase)

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

async function getAccessToken(user) {
  if (!user) {
    throw new Error("No user provided")
  }
  try {
    return await user.getIdToken()
  } catch (error) {
    console.error("Error getting access token:", error)
    throw new Error("Failed to get access token")
  }
}

async function fetchUser(user) {
  if (!user) {
    throw new Error("No user provided")
  }
  try {
    const token = await getAccessToken(user)
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken: token }),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    if (!data.user) {
      throw new Error("User data not found in response")
    }
    return data.user
  } catch (error) {
    console.error("Error fetching user data:", error)
    throw new Error("Failed to authenticate with the server")
  }
}

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true)
      setError(null)
      try {
        if (firebaseUser) {
          const userData = await fetchUser(firebaseUser)
          setUser({ ...userData })
        } else {
          setUser(null)
        }
      } catch (err) {
        console.error("Error in auth state change:", err)
        setError(err.message || "An unknown error occurred")
        setUser(null)
      } finally {
        setLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])

  const value = {
    user,
    loading,
    error,
    setError,
    refreshUser: async () => {
      if (auth.currentUser) {
        try {
          setLoading(true)
          const userData = await fetchUser(auth.currentUser)
          setUser({ ...userData })
          setError(null)
        } catch (err) {
          setError(err.message || "Failed to refresh user data")
        } finally {
          setLoading(false)
        }
      }
    },
  }

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}

function Loading() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <LoadingDots />
    </div>
  )
}
