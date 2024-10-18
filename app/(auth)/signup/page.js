"use client"

import Google from "@components/icons/google"
import Loading from "@components/icons/loading"
import signUp from "@firebase/signup"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSignupForm = async (event) => {
    event.preventDefault()

    setLoading(true)

    const { result, error } = await signUp(email, password)

    if (error) {
      setLoading(false)
      return console.log(error)
    }

    setLoading(false)
    console.log(result)
    return router.push("/admin")
  }

  return (
    <div className='p-10 lg:p-36 w-full'>
      <div className='w-full lg:max-w-96'>
        <h1 className='font-black text-2xl max-md:text-center mb-10'>
          Sign up to APP
        </h1>

        <div className='w-full'>
          <button className='bg-white border-stone-300 border my-5 flex items-center justify-center font-semibold rounded-full h-14 w-full hover:border-stone-600 transition-colors duration-300'>
            <Google />
            <span className='ml-4 text-sm'>Sign in with Google</span>
          </button>

          <div className='flex items-center justify-center gap-2'>
            <hr className='w-full border-stone-300' />
            <span className='text-stone-500 text-nowrap text-sm text-center w-full'>
              or sign up with email
            </span>
            <hr className='w-full border-stone-300' />
          </div>
        </div>

        <form
          onSubmit={handleSignupForm}
          className='flex my-5 w-full flex-col gap-6'>
          <label htmlFor='email' className='space-y-1'>
            <span className='font-semibold'>Email</span>
            <input
              className='border rounded-lg border-stone-300 h-14 w-full px-5'
              onChange={(e) => setEmail(e.target.value)}
              required
              type='email'
              name='email'
              id='email'
              // placeholder='Email'
            />
          </label>
          <label htmlFor='password' className='space-y-1'>
            <span className='font-semibold'>Password</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='border rounded-lg border-stone-300 h-14 w-full px-5'
              required
              type='password'
              name='password'
              id='password'
              // placeholder='Password'
            />
          </label>
          <button
            className='bg-stone-900 flex items-center justify-center font-semibold text-white hover:bg-stone-700 rounded-lg h-14 w-full transition-colors duration-300'
            type='submit'>
            {loading ? <Loading /> : "Sign up"}
          </button>
        </form>
        <div className='w-full text-center'>
          <span>
            Already have an account?{" "}
            <Link
              href='/signin'
              className='text-stone-900 underline transition-colors duration-300 hover:text-stone-600'>
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
