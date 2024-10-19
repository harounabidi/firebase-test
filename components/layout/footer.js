import Facebook from "@components/icons/facebook"
import Instagram from "@components/icons/Instagram"
import Twitter from "@components/icons/twitter"
import Link from "next/link"
import logo from "@public/images/logo.png"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className='w-full flex flex-col px-16 gap-16 lg:px-48 py-10 bg-stone-100'>
      <div className='flex  justify-between'>
        <div className='flex gap-4 items-center'>
          <Link href='/' aria-label='logo' className='text-2xl mr-16 font-bold'>
            <Image src={logo} width={100} height='auto' alt='logo' />
          </Link>

          <Link href='/' className='font-semibold'>
            Support
          </Link>
          <Link href='/about' className='font-semibold'>
            About
          </Link>
          <Link href='/' className='font-semibold'>
            Support
          </Link>
        </div>
        <div className='flex gap-4'>
          <Link
            aria-label='twitter'
            rel='noopener noreferrer'
            className='hover:text-stone-500 transition-colors duration-300'
            target='_blank'
            href='https://x.com/KlarkApp'>
            <Twitter className='w-6 h-6' />
          </Link>
          <Link
            aria-label='facebook'
            rel='noopener noreferrer'
            className='hover:text-stone-500 transition-colors duration-300'
            target='_blank'
            href='https://facebook.com'>
            <Facebook className='w-6 h-6' />
          </Link>
          <Link
            aria-label='instagram'
            rel='noopener noreferrer'
            className='hover:text-stone-500 transition-colors duration-300'
            target='_blank'
            href='https://www.instagram.com/klarkapp/'>
            <Instagram className='w-6 h-6' />
          </Link>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-4 text-stone-600'>
          <span className='mr-8'>
            © 2024 <b>Klark</b>
          </span>
          <Link href='/terms'>Terms</Link>
          <Link href='/privacy'>Privacy</Link>
          <Link href='/cookies'>Cookies</Link>
        </div>

        <div className='flex gap-4 text-stone-600'>
          <Link href='/terms'>Link</Link>
          <Link href='/privacy'>Privacy</Link>
          <Link href='/cookies'>Cookies</Link>
        </div>
      </div>
    </footer>
  )
}
