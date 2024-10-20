import Facebook from "@components/icons/facebook"
import Instagram from "@components/icons/Instagram"
import Twitter from "@components/icons/twitter"
import Link from "next/link"
import logo from "@public/images/logo.png"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className='w-full flex flex-col px-16 gap-16 lg:px-48 py-10 '>
      <div className='flex gap-4 text-sm flex-col md:flex-row items-center justify-between'>
        <div className='flex gap-4 justify-center items-center'>
          <Link
            href='/'
            aria-label='logo'
            className='text-2xl lg:mr-10 font-bold'>
            <Image src={logo} width={100} alt='logo' className='h-auto' />
          </Link>
        </div>
        <div className='flex gap-4 lg:gap-8'>
          <Link href='/about' className='font-semibold'>
            About
          </Link>
          <Link href='/' className='font-semibold'>
            Support
          </Link>
          <Link href='/faq' className='font-semibold'>
            FAQ
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
      <div className='flex text-sm flex-col md:flex-row items-center justify-between'>
        <div className='flex gap-4 text-stone-600'>
          <span className='mr-4 lg:mr-8 text-nowrap'>
            © 2024 <b>Klark</b>
          </span>
          <Link href='/terms'>Terms</Link>
          <Link href='/privacy'>Privacy</Link>
          <Link href='/contact'>Contact</Link>
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
