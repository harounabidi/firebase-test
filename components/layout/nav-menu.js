'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import useClickOutsideHandler from '@hooks/useClickOutside'
import MenuItems from './menu-items'

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
      className={`fixed inset-x-0 inset-y-0 top-16 h-dvh w-full origin-left transform overflow-hidden bg-background pt-5 transition-all duration-200 ease-in-out md:hidden md:w-80 ${
        open ? 'opacity-1 translate-x-0' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex h-full flex-col">
        <MenuItems pathname={pathname} onItemClick={() => setOpen(false)} />
      </div>
    </div>,
    document.body
  )
}
