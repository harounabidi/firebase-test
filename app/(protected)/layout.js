"use client"

import { usePathname, useRouter } from "next/navigation"
import { useAuthContext } from "@providers/auth-provider"
import { useEffect } from "react"
import Footer from "@components/layout/footer"
import Header from "@components/layout/header"
import Link from "next/link"
import UserOutline from "@components/icons/user-outline"
import SettingsOutline from "@components/icons/settings-outline"
import LogoutOutline from "@components/icons/logout-outline"
import { getAuth } from "firebase/auth"
import firebase from "@firebase/config"

export default function Layout({ children }) {
  const { user } = useAuthContext()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (user == null) router.push("/")
  }, [user])

  const handleLogout = () => {
    const auth = getAuth(firebase)
    auth.signOut()
    router.refresh()
  }

  return (
    <>
      <Header />
      <div className='flex h-full flex-col md:flex-row md:px-16'>
        <div className='lg:border-r hidden lg:flex lg:w-1/3 xl:w-1/4  py-12 pr-6 h-svh'>
          <ul className='w-full space-y-2 flex flex-row md:flex-col'>
            <li
              className={`flex cursor-pointer rounded-md px-3 hover:bg-stone-100 w-full items-center gap-2 ${
                pathname === "/profile" ? "bg-stone-100" : ""
              }`}>
              <UserOutline size='20' />
              <Link href='/profile' className='w-full py-3'>
                Profile
              </Link>
            </li>

            <li
              className={`flex cursor-pointer rounded-md px-3 hover:bg-stone-100 w-full items-center gap-2 ${
                pathname === "/settings" ? "bg-stone-100" : ""
              }`}>
              <SettingsOutline size='20' />
              <Link href='/settings' className='w-full py-3'>
                Settings
              </Link>
            </li>

            <li
              onClick={handleLogout}
              className='flex mt-auto py-3 cursor-pointer rounded-md px-3 hover:bg-stone-100 w-full items-center gap-2'>
              <LogoutOutline size='20' />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className='w-full'>{children}</div>
      </div>
      <Footer />
    </>
  )
}
