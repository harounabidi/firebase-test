import Link from "next/link"
import Hamberger from "@components/icons/hamberger"

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className='z-50 flex w-full items-center justify-between py-5 md:px-12'>
      <Link href='/' aria-label='logo' className='text-lg hidden md:block'>
        Logo
      </Link>

      <div className='z-50 md:hidden flex flex-row items-center gap-3'>
        <Hamberger
          size='2em'
          className='z-[30] cursor-pointer'
          toggle={menuOpen}
          toggled={setMenuOpen}
          duration='.3'
          rounded
        />
      </div>

      <div className='flex gap-2'>
        <Link
          href='/signin'
          aria-label='logo'
          className=' px-5 py-3 font-inter max-md:hidden text-sm  font-semibold rounded-full'>
          Sign in
        </Link>

        <Link
          href='/signup'
          aria-label='logo'
          className='bg-stone-900 font-inter transition-colors duration-300 hover:bg-stone-700 text-sm text-white font-semibold px-5 py-3 rounded-full'>
          Sign up
        </Link>
      </div>
    </nav>
  )
}
