'use client'

import ChevronLeft from '@components/icons/chevron-left'
import Google from '@components/icons/google'
import Loading from '@components/icons/loading'
import signUp from '@firebase/signup'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    return router.push('/')
  }

  return (
    <section className="flex w-full flex-col gap-6 px-6 py-10 lg:p-36">
      <div className="flex w-full md:hidden">
        <Link
          href="/"
          className="rounded-full border border-stone-300 px-3 py-1 transition-colors hover:border-stone-600 hover:bg-stone-100"
        >
          <ChevronLeft color="black" size="30" />
        </Link>
      </div>

      <div className="w-full lg:max-w-96">
        <h1 className="mb-10 text-2xl font-black max-md:text-center">
          Sign up to Klark
        </h1>

        <div className="w-full">
          <button className="my-5 flex h-14 w-full items-center justify-center rounded-full border border-stone-300 bg-white font-semibold transition-colors duration-300 hover:border-stone-600">
            <Google />
            <span className="ml-4 text-sm">Sign in with Google</span>
          </button>

          <div className="flex items-center justify-center gap-2">
            <hr className="w-full border-stone-300" />
            <span className="w-full whitespace-nowrap text-center text-sm text-stone-500">
              or sign up with email
            </span>
            <hr className="w-full border-stone-300" />
          </div>
        </div>

        <form
          onSubmit={handleSignupForm}
          className="my-5 flex w-full flex-col gap-6"
        >
          <label htmlFor="email" className="space-y-1">
            <span className="font-semibold">Email</span>
            <input
              className="h-14 w-full rounded-lg border border-stone-300 px-5"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="password" className="space-y-1">
            <span className="font-semibold">Password</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 w-full rounded-lg border border-stone-300 px-5"
              required
              type="password"
              name="password"
              id="password"
            />
          </label>
          <button
            disabled
            className="flex h-14 w-full items-center justify-center rounded-lg bg-stone-900 font-semibold text-white transition-colors duration-300 hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-400"
            type="submit"
          >
            {loading ? <Loading /> : 'Sign up'}
          </button>
        </form>
        <div className="w-full text-center">
          <span>
            Already have an account?{' '}
            <Link
              href="/signin"
              className="text-stone-900 underline transition-colors duration-300 hover:text-stone-600"
            >
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}
