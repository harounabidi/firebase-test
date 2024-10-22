"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { usePathname } from "next/navigation"
import useClickOutsideHandler from "@hooks/useClickOutside"
import MenuItems from "./menu-items"

export default function Menu({ open, setOpen }) {
  const [mounted, setMounted] = useState(false)

  const menuRef = useRef()
  useClickOutsideHandler(menuRef, open, setOpen)

  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return createPortal(
    <div
      // ref={menuRef}
      className={`fixed md:hidden inset-x-0 top-16 inset-y-0 h-dvh w-full transform overflow-hidden bg-background pt-5 transition-all duration-200 ease-in-out md:w-80 origin-left ${
        open ? "translate-x-0 opacity-1" : "-translate-x-full opacity-0"
      }`}>
      <div className='flex h-full flex-col'>
        <MenuItems pathname={pathname} onItemClick={() => setOpen(false)} />
      </div>
    </div>,
    document.body
  )
}
