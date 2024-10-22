'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '@public/images/logo-white.png'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@providers/auth-provider'
import { useEffect } from 'react'

export default function Layout({ children }) {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user != null) router.push('/')
  }, [router, user])

  return (
    <div className="relative flex h-full flex-row items-stretch overflow-hidden">
      <section className="relative hidden min-h-svh w-full bg-stone-300 object-cover md:block lg:w-1/3">
        <Link
          href="/"
          className="absolute left-6 top-6 z-50 hidden transition-all hover:opacity-60 md:block"
        >
          <Image src={logo} width={80} alt="logo" className="h-auto" />
        </Link>

        <video
          className="h-full w-full object-cover"
          playsInline
          autoPlay
          muted
          loop
          src="https://res.cloudinary.com/dlez32qbe/video/upload/v1707587525/pfe/fjo5ldlesnjeh5mlje5m.mp4"
        />
      </section>

      {children}
    </div>
  )
}
