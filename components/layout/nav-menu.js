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
      ref={menuRef}
      className={`fixed inset-x-0 border-y border-stone-200 top-20 inset-y-0 h-dvh w-full transform overflow-hidden bg-white pt-5 transition-all duration-200 ease-in-out md:w-80 origin-left ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}>
      <div className='flex h-full flex-col'>
        <MenuItems pathname={pathname} onItemClick={() => setOpen(false)} />
      </div>
    </div>,
    document.body
  )
}
