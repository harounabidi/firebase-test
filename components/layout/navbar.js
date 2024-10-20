"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useAuthContext } from "@/providers/auth-provider"
import Hamberger from "@/components/icons/hamberger"
import User from "@/components/icons/user"
import logo from "@/public/images/logo.png"
import useClickOutsideHandler from "@hooks/useClickOutside"
import { getAuth } from "firebase/auth"
import firebase from "@firebase/config"

export default function Navbar({ menuOpen, setMenuOpen }) {
  const { user } = useAuthContext()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  return (
    <nav className='z-50 flex w-full items-center justify-between py-5 md:px-12'>
      <div className='flex justify-center items-stretch gap-6'>
        <div className='z-50 md:hidden flex flex-row items-center gap-3'>
          <Hamberger
            size='2em'
            className='z-[30] cursor-pointer'
            toggle={menuOpen}
            toggled={setMenuOpen}
            duration='.3'
            rounded
          />
        </div>

        <Link href='/' aria-label='logo'>
          <Image src={logo} width={80} height={80} alt='logo' />
        </Link>
      </div>

      <div className='flex gap-2'>
        {user ? (
          <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='w-10 h-10 cursor-pointer flex items-center justify-center bg-stone-200 rounded-full'>
              <User color='#a8a29d' />
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
              href='/signin'
              className='px-5 py-3 font-mona max-md:hidden text-sm font-semibold rounded-full'>
              Sign in
            </Link>
            <Link
              href='/signup'
              className='bg-stone-900 font-mona transition-colors duration-300 hover:bg-stone-700 text-sm text-white font-semibold px-5 py-3 rounded-full'>
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

  const handleLogout = () => {
    const auth = getAuth(firebase)
    auth.signOut()
  }

  return (
    <div
      ref={menuRef}
      className='absolute border-[.5px] right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10'>
      <span className='block px-4 py-3 font-semibold border-b w-full'>
        {user.displayName || user.email || user.phoneNumber}
      </span>
      <Link
        href='/profile'
        className='block px-4 py-4 text-sm text-stone-700 hover:bg-stone-100'>
        Profile
      </Link>
      <button
        onClick={handleLogout}
        className='block w-full text-left px-4 py-4 text-sm text-stone-700 hover:bg-stone-100'>
        Logout
      </button>
    </div>
  )
}
