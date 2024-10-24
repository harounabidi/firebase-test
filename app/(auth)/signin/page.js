'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ChevronLeft from '@components/icons/chevron-left'
import Google from '@components/icons/google'
import Loading from '@components/icons/loading'
import signIn from '@firebase/signin'

export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSignInForm = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await signIn(email, password)

    if (error) {
      setLoading(false)
      switch (error.code) {
        case 'auth/user-not-found':
          setError(
            'No account found with this email. Please check your email or sign up.'
          )
          break
        case 'auth/wrong-password':
          setError('Incorrect password. Please try again.')
          break
        case 'auth/invalid-email':
          setError('Invalid email address. Please enter a valid email.')
          break
        case 'auth/too-many-requests':
          setError('Too many failed login attempts. Please try again later.')
          break
        default:
          setError('An error occurred during sign in. Please try again.')
      }
      return
    }

    setLoading(false)
    router.push('/home')
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
          Sign in to Klark
        </h1>

        <div className="">
          <button className="my-5 flex h-14 w-full items-center justify-center rounded-full border border-stone-300 bg-white font-semibold transition-colors duration-300 hover:border-stone-600">
            <Google />
            <span className="ml-4 text-sm">Sign in with Google</span>
          </button>

          <div className="flex items-center justify-center gap-2">
            <hr className="w-full border-stone-300" />
            <span className="w-full whitespace-nowrap text-center text-sm text-stone-500">
              or sign in with email
            </span>
            <hr className="w-full border-stone-300" />
          </div>
        </div>

        {error && (
          <div
            className="relative my-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSignInForm} className="my-5 flex flex-col gap-6">
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
            <div className="flex w-full justify-between">
              <span className="font-semibold">Password</span>
              <Link
                className="text-sm underline transition-colors duration-300 hover:text-stone-600"
                href="/password"
              >
                Forgot?
              </Link>
            </div>
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
            className="flex h-14 w-full items-center justify-center rounded-lg bg-stone-900 font-semibold text-white transition-colors duration-300 hover:bg-stone-700"
            type="submit"
          >
            {loading ? <Loading /> : 'Sign in'}
          </button>
        </form>
        <div className="w-full text-center">
          <span>
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              className="text-stone-900 underline transition-colors duration-300 hover:text-stone-600"
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}
