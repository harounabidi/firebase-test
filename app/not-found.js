import Link from 'next/link'

export default function notFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">404</h1>
      <Link href="/" className="rounded-full bg-stone-900 px-5 py-2 text-white">
        Home
      </Link>
    </div>
  )
}
