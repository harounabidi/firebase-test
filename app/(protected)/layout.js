"use client"

import { useRouter } from "next/navigation"
import { useAuthContext } from "@providers/auth-provider"
import { useEffect } from "react"
import Footer from "@components/layout/footer"
import Header from "@components/layout/header"

export default function Layout({ children }) {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user == null) router.push("/")
  }, [user])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
