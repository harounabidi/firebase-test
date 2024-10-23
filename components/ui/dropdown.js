'use client'

import { createPortal } from 'react-dom'
import { useEffect, useState, useRef } from 'react'
import useClickOutsideHandler from '@hooks/useClickOutside'

export default function Dropdown({ open, children }) {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const menuRef = useRef()

  useClickOutsideHandler(menuRef, isVisible, setIsVisible)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (open) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 200)
      return () => clearTimeout(timer)
    }
  }, [open])

  if (!mounted) return null

  if (!isVisible && !open) return null

  return createPortal(
    <div
      ref={menuRef}
      className={`absolute right-2 top-16 z-10 mt-2 w-96 rounded-lg border-[.5px] bg-white p-8 py-4 shadow-lg transition-opacity duration-200 ease-in-out ${
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {children}
    </div>,
    document.body
  )
}
