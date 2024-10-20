"use client"

import User from "@components/icons/user"
import { useAuthContext } from "@providers/auth-provider"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {
  const { user } = useAuthContext()
  const router = useRouter()

  const [email, setEmail] = useState(user?.email)
  const [firstName, setFirstName] = useState(user?.firstName)
  const [lastName, setLastName] = useState(user?.lastName)

  return (
    <div className='p-6 lg:px-24 w-full lg:w-3/4  min-h-screen'>
      <h1 className='mb-6 font-mona font-semibold text-lg md:text-2xl'>
        Profile
      </h1>

      <button className='p-2 mb-8 cursor-pointer flex items-center justify-center bg-stone-200 rounded-full'>
        <User color='#a8a29d' size='50' />
      </button>

      <input
        className='border rounded-lg border-stone-300 h-14 w-full px-5'
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        required
        type='text'
        name='firstName'
        id='firstName'
      />

      <input
        className='border rounded-lg border-stone-300 h-14 w-full px-5 mt-4'
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        required
        type='text'
        name='lastName'
        id='lastName'
      />

      {user?.isEmailVerified ? (
        <p
          className='text-green-500'
          style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
          email is verified
        </p>
      ) : (
        <p
          className='text-red-500'
          style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
          * email is not verified
        </p>
      )}

      <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
        <input
          className='border rounded-lg border-stone-300 h-14 w-full px-5'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          type='email'
          name='email'
          id='email'
        />

        <button className='flex max-sm:w-full min-w-40 text-white px-4 font-semibold items-center gap-2 bg-stone-900 p-3 justify-center rounded-lg h-14 transition-colors hover:bg-stone-700'>
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
