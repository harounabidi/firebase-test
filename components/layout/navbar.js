'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuthContext } from '@/providers/auth-provider'
import Hamberger from '@/components/icons/hamberger'
import User from '@/components/icons/user'
import logo from '@/public/images/logo.png'
import useClickOutsideHandler from '@hooks/useClickOutside'
import { getAuth } from 'firebase/auth'
import firebase from '@firebase/config'
import { useRouter } from 'next/navigation'

export default function Navbar({ menuOpen, setMenuOpen }) {
  const { user } = useAuthContext()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  return (
    <nav className="z-50 flex w-full items-center justify-between py-3">
      <div className="flex items-stretch justify-center gap-6">
        <div className="z-50 flex flex-row items-center gap-3 md:hidden">
          <Hamberger
            size="2em"
            className="z-[30] cursor-pointer"
            toggle={menuOpen}
            toggled={setMenuOpen}
            duration=".3"
            rounded
          />
        </div>

        <Link href="/" aria-label="logo">
          <Image priority src={logo} width={80} alt="logo" className="h-auto" />
        </Link>
      </div>

      <div className="flex gap-2">
        {user ? (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-stone-200"
            >
              <User color="#a8a29d" />
            </button>
            {dropdownOpen && (
              <UserDropdown
                user={user}
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
              />
            )}
          </div>
        ) : (
          <>
            <Link
              href="/signin"
              className="rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-stone-200 max-md:hidden"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-stone-700"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

function UserDropdown({ user, dropdownOpen, setDropdownOpen }) {
  const menuRef = useRef()
  useClickOutsideHandler(menuRef, dropdownOpen, setDropdownOpen)
  const router = useRouter()

  const handleLogout = () => {
    const auth = getAuth(firebase)
    auth.signOut()
    router.refresh()
  }

  return (
    <div
      ref={menuRef}
      className="absolute right-0 z-10 mt-2 w-56 rounded-md border-[.5px] bg-white py-1 shadow-lg"
    >
      <span className="block w-full border-b px-4 py-3 font-semibold">
        {`${user.firstName} ${user.lastName}` || user.email || user.phoneNumber}
      </span>
      <Link
        href="/profile"
        className="block px-4 py-4 text-sm text-stone-700 hover:bg-stone-100"
      >
        Profile
      </Link>
      <Link
        href="/settings"
        className="block px-4 py-4 text-sm text-stone-700 hover:bg-stone-100"
      >
        Settings
      </Link>
      <button
        onClick={handleLogout}
        className="block w-full px-4 py-4 text-left text-sm text-stone-700 hover:bg-stone-100"
      >
        Logout
      </button>
    </div>
  )
}
