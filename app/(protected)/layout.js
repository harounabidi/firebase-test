'use client'

import { useRouter } from 'next/navigation'
import { useAuthContext } from '@providers/auth-provider'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import UserOutline from '@components/icons/user-outline'
import SettingsOutline from '@components/icons/settings-outline'
import { getAuth } from 'firebase/auth'
import firebase from '@firebase/config'
import User from '@components/icons/user'
import useClickOutsideHandler from '@hooks/useClickOutside'
import LogoutOutline from '@components/icons/logout-outline'
import Sidebar from '@components/layout/sidebar'
import QuestionOutline from '@components/icons/question-outline'
import BellOutline from '@components/icons/bell-outline'

export default function Layout({ children }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user == null) router.push('/')
  }, [router, user])

  return (
    <main className="flex gap-8 lg:mx-36">
      <Sidebar />
      <div className="w-full py-20 lg:px-44">
        <nav className="relative flex h-14 w-full items-center justify-end gap-4 px-6 lg:px-0">
          <button
            onClick={toggleDropdown}
            className="flex cursor-pointer items-center justify-center rounded-full bg-stone-100 stroke-[1.5px] p-2"
          >
            <BellOutline color="#78716c" size="30" />
          </button>

          <button
            onClick={toggleDropdown}
            className="flex cursor-pointer items-center justify-center rounded-full bg-stone-100 p-2"
          >
            <User color="#78716c" size="30" />
          </button>

          {dropdownOpen && (
            <UserDropdown
              user={user}
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
            />
          )}
        </nav>
        {children}
      </div>
    </main>
  )
}

function UserDropdown({ user, dropdownOpen, setDropdownOpen }) {
  const menuRef = useRef()
  useClickOutsideHandler(menuRef, dropdownOpen, setDropdownOpen)
  const router = useRouter()

  const handleLogout = () => {
    const auth = getAuth(firebase)
    setDropdownOpen(false)
    auth.signOut()
    router.refresh()
  }

  if (!user) return null

  return (
    <div
      ref={menuRef}
      className="absolute right-2 top-16 z-10 mt-2 w-96 rounded-lg border-[.5px] bg-white p-8 py-4 shadow-lg"
    >
      <span className="block w-full px-4 py-3 pb-5 text-center font-semibold">
        {`${user.firstName} ${user.lastName}` || user.email || user.phoneNumber}
      </span>
      <Link
        href="/profile"
        onClick={() => setDropdownOpen(false)}
        className="flex items-center gap-2 rounded-lg border border-transparent stroke-[1.5px] px-4 py-4 text-sm text-stone-600 transition-all duration-300 hover:border-stone-800 hover:stroke-[2px] hover:font-medium hover:text-stone-950"
      >
        <UserOutline size="20" />
        <span>Profile</span>
      </Link>

      <Link
        href="/settings"
        onClick={() => setDropdownOpen(false)}
        className="flex items-center gap-2 rounded-lg border border-transparent stroke-[1.5px] px-4 py-4 text-sm text-stone-600 transition-all duration-300 hover:border-stone-800 hover:stroke-[2px] hover:font-medium hover:text-stone-950"
      >
        <SettingsOutline size="20" />
        <span>Settings</span>
      </Link>

      <Link
        href="/help"
        onClick={() => setDropdownOpen(false)}
        className="flex items-center gap-2 rounded-lg border border-transparent stroke-[1.5px] px-4 py-4 text-sm text-stone-600 transition-all duration-300 hover:border-stone-800 hover:stroke-[2px] hover:font-medium hover:text-stone-950"
      >
        <QuestionOutline size="20" />
        <span>Help</span>
      </Link>

      <button
        onClick={handleLogout}
        className="flex w-full items-center gap-2 rounded-lg border border-transparent stroke-[1.5px] px-4 py-4 text-sm text-stone-600 transition-all duration-300 hover:border-stone-800 hover:stroke-[2px] hover:font-medium hover:text-stone-950"
      >
        <LogoutOutline size="20" />
        <span>Logout</span>
      </button>
    </div>
  )
}
