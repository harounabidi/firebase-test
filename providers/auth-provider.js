"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import firebase from "@/firebase/config"
import LoadingDots from "@components/icons/loading-dots"

const auth = getAuth(firebase)

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
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
