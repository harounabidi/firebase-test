"use client"

import ChevronLeft from "@components/icons/chevron-left"
import Google from "@components/icons/google"
import Loading from "@components/icons/loading"
import signIn from "@firebase/signin"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSignInForm = async (event) => {
    event.preventDefault()

    setLoading(true)

    const { data, error } = await signIn(email, password)

    if (error) {
      setLoading(false)
      return console.log(error)
    }

    setLoading(false)

    console.log(data)

    return router.push("/")
  }

  return (
    <section className='py-10 px-6 flex flex-col gap-6 lg:p-36 w-full'>
      <div className='w-full flex md:hidden'>
        <Link
          href='/'
          className='transition-colors border border-stone-300 hover:border-stone-600 hover:bg-stone-100 rounded-full py-1 px-3'>
          <ChevronLeft color='black' size='30' />
        </Link>
      </div>

      <div className='w-full lg:max-w-96'>
        <h1 className='font-black max-md:text-center mb-10 text-2xl'>
          Sign in to Klark
        </h1>

        <div className=''>
          <button className='bg-white border-stone-300 border my-5 flex items-center justify-center font-semibold rounded-full h-14 w-full hover:border-stone-600 transition-colors duration-300'>
            <Google />
            <span className='ml-4 text-sm'>Sign in with Google</span>
          </button>

          <div className='flex items-center justify-center gap-2'>
            <hr className='w-full border-stone-300' />
            <span className='text-stone-500 text-nowrap text-sm text-center w-full'>
              or sign in with email
            </span>
            <hr className='w-full border-stone-300' />
          </div>
        </div>

        <form onSubmit={handleSignInForm} className='flex my-5 flex-col gap-6'>
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
            <div className='w-full flex justify-between'>
              <span className='font-semibold'>Password</span>
              <Link
                className='underline transition-colors duration-300 hover:text-stone-600 text-sm'
                href='/password'>
                Forgot?
              </Link>
            </div>
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
            {loading ? <Loading /> : "Sign in"}
          </button>
        </form>
        <div className='w-full text-center'>
          <span>
            Don&apos;t have an account?{" "}
            <Link
              href='/signup'
              className='text-stone-900 underline transition-colors duration-300 hover:text-stone-600'>
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}
