'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">Error</h1>
      <button
        className="rounded-full bg-stone-900 px-5 py-2 text-white"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  )
}
