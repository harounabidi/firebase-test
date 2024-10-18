import Link from "next/link"
import Hamberger from "@components/icons/hamberger"

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className='z-50 flex w-full items-center justify-between py-5 md:px-12'>
      <div className='z-50 flex flex-row items-center gap-3'>
        <Hamberger
          size='2em'
          className='z-[30] cursor-pointer'
          toggle={menuOpen}
          toggled={setMenuOpen}
          duration='.3'
          rounded
        />
      </div>

      <Link
        href='/signup'
        aria-label='logo'
        className='bg-stone-900 px-5 py-3 rounded-full'>
        <h1 className='font-inter text-sm text-white font-semibold'>Sign up</h1>
      </Link>
    </nav>
  )
}
