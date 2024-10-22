import Link from 'next/link'
import Image from 'next/image'
import Hamberger from '@/components/icons/hamberger'
import logo from '@/public/images/logo.png'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="z-50 flex w-full items-center justify-between py-3">
      <div className="flex items-stretch justify-center gap-6">
        <div className="z-50 flex flex-row items-center gap-3 md:hidden">
          <Hamberger
            size="2em"
            className="z-[30] cursor-pointer"
            toggle={menuOpen}
            toggled={setMenuOpen}
            duration=".3"
            rounded
          />
        </div>

        <Link href="/" aria-label="logo">
          <Image priority src={logo} width={80} alt="logo" className="h-auto" />
        </Link>
      </div>

      <div className="flex gap-2">
        <Link
          href="/signin"
          className="rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-stone-200 max-md:hidden"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-stone-700"
        >
          Sign up
        </Link>
      </div>
    </nav>
  )
}
