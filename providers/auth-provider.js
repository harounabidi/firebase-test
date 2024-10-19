"use client"

import LoadingDots from "@components/icons/loading-dots"
import firebase from "@firebase/config"
import { onAuthStateChanged, getAuth } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"

const auth = getAuth(firebase)

const AuthContext = createContext({})

export const useAuthProvider = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
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
    <AuthContext.Provider value={{ user, loading }}>
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
