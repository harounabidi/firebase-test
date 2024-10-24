'use client'

import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import useClickOutsideHandler from '@hooks/useClickOutside'
import X from '@components/icons/close'

export default function Sheet({ open, setOpen, children, title, vertical }) {
  const [mounted, setMounted] = useState(false)

  const menuRef = useRef()
  useClickOutsideHandler(menuRef, open, setOpen)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return createPortal(
    <div
      ref={menuRef}
      className={`fixed inset-y-0 right-0 z-20 h-dvh w-full transform overflow-hidden bg-background pt-5 transition-all duration-200 ease-in-out md:w-1/2 lg:w-1/3 ${
        open
          ? vertical
            ? 'max-sm:translate-y-0 md:translate-x-0'
            : 'translate-x-0'
          : vertical
            ? 'max-sm:translate-y-full md:translate-x-full'
            : 'translate-x-full'
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="absolute top-0 z-50 flex w-full items-center justify-between border-b border-stone-200 bg-background px-6 py-7">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            aria-label="close sheet"
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          >
            <X size="1em" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}
