'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useAuthContext } from '@providers/auth-provider'
import { useEffect, useState } from 'react'
import User from '@components/icons/user'
import Sidebar from '@components/layout/sidebar'
import BellOutline from '@components/icons/bell-outline'
import ArrowLeft from '@components/icons/arrow-left'
import Tabbar from '@components/layout/tabbar'
import NotificationsSheet from '@components/ui/notifications-sheet'
import UserSheet from '@components/ui/user-sheet'
import UserDropdown from '@components/ui/user-dropdown'

export default function Layout({ children }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const { user } = useAuthContext()
  const router = useRouter()
  const pathname = usePathname()

  const visibleBackButton = pathname.split('/').length > 2

  useEffect(() => {
    if (user == null) router.push('/')
  }, [router, user])

  return (
    <main className="flex gap-8 lg:mx-10 xl:mx-36">
      <Sidebar />
      <Tabbar />
      <div className="w-full py-6 lg:py-10 lg:pl-16 xl:pl-44">
        <nav
          className={`relative flex w-full items-center px-4 lg:h-14 lg:px-0 ${
            visibleBackButton ? 'justify-between' : 'justify-end'
          }`}
        >
          {visibleBackButton && (
            <button
              onClick={() => router.back()}
              className="flex cursor-pointer items-center justify-center rounded-full bg-stone-100 stroke-[1.5px] p-2"
            >
              <ArrowLeft color="#78716c" size="30" />
            </button>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen)
              }}
              className="flex cursor-pointer items-center justify-center rounded-full bg-stone-100 stroke-[1.5px] p-2"
            >
              <BellOutline color="#78716c" size="30" />
            </button>

            <NotificationsSheet menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <button
              onClick={() => {
                setUserMenuOpen(!userMenuOpen)
              }}
              className="flex cursor-pointer items-center justify-center rounded-full bg-stone-100 p-2 lg:hidden"
            >
              <User color="#78716c" size="30" />
            </button>

            <UserSheet
              userMenuOpen={userMenuOpen}
              setUserMenuOpen={setUserMenuOpen}
              user={user}
            />

            <button
              onClick={toggleDropdown}
              className="hidden cursor-pointer items-center justify-center rounded-full bg-stone-100 p-2 lg:flex"
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
          </div>
        </nav>
        {children}
      </div>
    </main>
  )
}
