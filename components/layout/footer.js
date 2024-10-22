import Facebook from '@components/icons/facebook'
import Instagram from '@components/icons/Instagram'
import Twitter from '@components/icons/twitter'
import Link from 'next/link'
import logo from '@public/images/logo.png'
import Image from 'next/image'
import googlePlay from '@public/images/google-play.svg'
import appStore from '@public/images/app-store.svg'

export default function Footer() {
  return (
    <footer className="flex w-full flex-col gap-16 px-16 py-10 lg:px-48">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <Link href="https://apps.apple.com/" target="_blank">
          <Image src={appStore} width={100} alt="apple" />
        </Link>

        <Link href="https://play.google.com/store/apps" target="_blank">
          <Image src={googlePlay} width={100} alt="google play" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            aria-label="logo"
            className="text-2xl font-bold lg:mr-10"
          >
            <Image src={logo} width={100} alt="logo" className="h-auto" />
          </Link>
        </div>
        <div className="flex gap-4 lg:gap-8">
          <Link href="/about" className="font-semibold">
            About
          </Link>
          <Link href="/" className="font-semibold">
            Support
          </Link>
          <Link href="/faq" className="font-semibold">
            FAQ
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            aria-label="twitter"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-stone-500"
            target="_blank"
            href="https://x.com/KlarkApp"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            aria-label="facebook"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-stone-500"
            target="_blank"
            href="https://facebook.com"
          >
            <Facebook className="h-6 w-6" />
          </Link>
          <Link
            aria-label="instagram"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-stone-500"
            target="_blank"
            href="https://www.instagram.com/klarkapp/"
          >
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
        <div className="flex gap-4 text-stone-600">
          <span className="mr-4 text-nowrap lg:mr-8">
            © 2024 <b>Klark</b>
          </span>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <div className="flex gap-4 text-stone-600">
          <Link href="/terms">Link</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}
