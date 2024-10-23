'use client'

import User from '@components/icons/user'
import { useAuthContext } from '@providers/auth-provider'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const { user } = useAuthContext()
  const router = useRouter()

  const [email, setEmail] = useState(user?.email)
  const [firstName, setFirstName] = useState(user?.firstName)
  const [lastName, setLastName] = useState(user?.lastName)

  return (
    <div className="py-10">
      <button className="mb-8 flex cursor-pointer items-center justify-center rounded-full bg-stone-200 p-2">
        <User color="#a8a29d" size="50" />
      </button>

      <input
        className="h-14 w-full rounded-lg border border-stone-300 px-5"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        required
        type="text"
        name="firstName"
        id="firstName"
      />

      <input
        className="mt-4 h-14 w-full rounded-lg border border-stone-300 px-5"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        required
        type="text"
        name="lastName"
        id="lastName"
      />

      {user?.isEmailVerified ? (
        <p
          className="text-green-500"
          style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}
        >
          email is verified
        </p>
      ) : (
        <p
          className="text-red-500"
          style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}
        >
          * email is not verified
        </p>
      )}

      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <input
          className="h-14 w-full rounded-lg border border-stone-300 px-5"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          type="email"
          name="email"
          id="email"
        />

        <button className="flex h-14 min-w-40 items-center justify-center gap-2 rounded-lg bg-stone-900 p-3 px-4 font-semibold text-white transition-colors hover:bg-stone-700 max-sm:w-full">
          Verify email
        </button>
      </div>

      {/* <p>{user?.status}</p> */}

      {/* <button
        onClick={handleLogout}
        className='flex text-white px-4 font-semibold items-center gap-2 bg-red-300 p-3 rounded-full mt-8 transition-colors hover:bg-red-400'>
        <LogoutOutline size='20' />
        <span>Logout</span>
      </button> */}
    </div>
  )
}
