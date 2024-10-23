'use client'

import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import useClickOutsideHandler from '@hooks/useClickOutside'
import X from '@components/icons/X'

export default function Sheet({ open, setOpen, children }) {
  const [mounted, setMounted] = useState(false)

  const menuRef = useRef()
  useClickOutsideHandler(menuRef, open, setOpen)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return createPortal(
    <div
      ref={menuRef}
      className={`fixed inset-y-0 right-0 z-20 h-dvh w-full transform overflow-hidden bg-background pt-5 transition-all duration-200 ease-in-out md:w-1/2 lg:w-1/3 ${
        open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="flex h-full flex-col py-1">
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute right-5 top-5 cursor-pointer`}
        >
          <X size="2em" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}
