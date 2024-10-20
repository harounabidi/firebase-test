"use client"

import { useAuthContext } from "@providers/auth-provider"

export default function Page() {
  const { user } = useAuthContext()

  return (
    <div className='p-6 lg:p-36 w-full min-h-screen'>
      This page is not implemented yet
    </div>
  )
}
