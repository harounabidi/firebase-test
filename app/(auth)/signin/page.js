"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import ChevronLeft from "@components/icons/chevron-left"
import Google from "@components/icons/google"
import Loading from "@components/icons/loading"
import signIn from "@firebase/signin"

export default function Page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()

  const handleSignInForm = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError("")

    const { result, error } = await signIn(email, password)

    if (error) {
      setLoading(false)
      // Set a user-friendly error message based on the error code
      switch (error.code) {
        case "auth/user-not-found":
          setError(
            "No account found with this email. Please check your email or sign up."
          )
          break
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.")
          break
        case "auth/invalid-email":
          setError("Invalid email address. Please enter a valid email.")
          break
        case "auth/too-many-requests":
          setError("Too many failed login attempts. Please try again later.")
          break
        default:
          setError("An error occurred during sign in. Please try again.")
      }
      return
    }

    setLoading(false)
    router.push("/")
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

        {error && (
          <div
            className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4'
            role='alert'>
            <span className='block sm:inline'>{error}</span>
          </div>
        )}

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
