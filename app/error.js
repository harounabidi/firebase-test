'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1 className="text-4xl font-semibold">Error</h1>
      <button className="ml-4 text-blue-500" onClick={reset}>
        Reset
      </button>
    </div>
  )
}
