import { useCallback, useLayoutEffect } from 'react'

export default function useClickOutsideHandler(menuRef, open, setOpen) {
  const handleClickOutside = useCallback(
    (e) => {
      if (menuRef?.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    },
    [menuRef, setOpen]
  )

  useLayoutEffect(() => {
    const body = document.body
    let originalOverflow
    let originalPaddingRight

    // Function to disable body scroll
    const disableBodyScroll = () => {
      originalOverflow = body.style.overflow
      originalPaddingRight = body.style.paddingRight
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth
      body.style.overflow = 'hidden'
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    // Function to enable body scroll
    const enableBodyScroll = () => {
      body.style.overflow = originalOverflow || ''
      body.style.paddingRight = originalPaddingRight || ''
    }

    // Disable body scroll if the menu is open
    if (open) {
      disableBodyScroll()
    } else {
      enableBodyScroll()
    }

    // Add event listeners for click and scroll events
    document.addEventListener('mousedown', handleClickOutside)
    // document.addEventListener('touchend', handleClickOutside) // Changed from touchstart to touchend
    window.addEventListener('scroll', () => setOpen(false)) // Close the menu on scroll

    // Cleanup function to remove event listeners and restore body overflow
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      // document.removeEventListener('touchend', handleClickOutside) // Changed from touchstart to touchend
      window.removeEventListener('scroll', () => setOpen(false)) // Ensure scroll listener is cleaned up
      enableBodyScroll()
    }
  }, [open, setOpen, handleClickOutside])
}
