import Image from "next/image"
import Link from "next/link"
import logo from "@public/images/logo-white.png"

export default function layout({ children }) {
  return (
    <div className='flex relative flex-row items-stretch h-full overflow-hidden'>
      <section className='bg-stone-300 relative object-cover min-h-svh w-full lg:w-1/3 hidden md:block'>
        <Link
          href='/'
          className='absolute z-50 hidden md:block transition-all hover:opacity-60 top-6 left-6'>
          <Image src={logo} width={80} height='auto' alt='logo' />
        </Link>

        <video
          className='object-cover w-full h-full'
          playsInline
          autoPlay
          muted
          loop
          src='https://res.cloudinary.com/dlez32qbe/video/upload/v1707587525/pfe/fjo5ldlesnjeh5mlje5m.mp4'
        />
      </section>

      {children}
    </div>
  )
}
