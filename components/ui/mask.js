'use client'

import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'

export default function Mask({ visible, background }) {
  const [mounted, setMounted] = useState(false)

  const disableScroll = useCallback(() => {
    const scrollY = window.scrollY
    const scrollX = window.scrollX
    window.onscroll = () => window.scrollTo(scrollX, scrollY)
  }, [])

  const enableScroll = useCallback(() => {
    window.onscroll = null
  }, [])

  useEffect(() => {
    setMounted(true)
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleWindowWheel = (event) => {
      if (visible) {
        event.preventDefault()
      }
    }

    if (visible) {
      disableScroll()
      document.body.style.overflow = 'hidden'
      window.addEventListener('wheel', handleWindowWheel, { passive: false })
    } else {
      enableScroll()
      document.body.style.overflow = 'unset'
    }

    return () => {
      enableScroll()
      window.removeEventListener('wheel', handleWindowWheel)
    }
  }, [visible, mounted, disableScroll, enableScroll])

  if (!mounted) return null

  return createPortal(
    <div
      className={`fixed inset-0 z-[15] flex overflow-auto ${background} transition-opacity duration-300 ${
        visible
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
    />,
    document.body
  )
}
