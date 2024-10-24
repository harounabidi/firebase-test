import { useEffect, useRef } from 'react'
import X from '@components/icons/close'

export default function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      modalRef.current?.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-20 p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-xl transform overflow-hidden rounded-xl bg-white p-6 text-left shadow-xl transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
      >
        <div className="absolute right-4 top-4">
          <button onClick={onClose} aria-label="Close modal">
            <X className="h-4 w-4" />
          </button>
        </div>
        {title && (
          <h2
            id="modal-title"
            className="mb-4 text-lg font-medium leading-6 text-gray-900"
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  )
}
