'use client'

import Footer from '@components/layout/footer'
import Header from '@components/layout/header'
import { useAuthContext } from '@providers/auth-provider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Layout({ children }) {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user != null) router.push('/home')
  }, [router, user])

  return (
    <main className="mt-16">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
