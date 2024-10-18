import Link from "next/link"

export default function layout({ children }) {
  return (
    <div className='flex items-center '>
      <div className='bg-stone-300 relative object-cover h-screen w-full lg:w-1/3 hidden md:block'>
        <Link
          href='/'
          className='absolute z-50 hidden md:block text-white font-semibold transition-colors hover:text-stone-400 py-2 px-5 top-6 text-2xl left-10'>
          Logo
        </Link>

        {/* <video
          className='object-cover w-full h-full'
          playsInline
          autoPlay
          muted
          loop
          src='https://res.cloudinary.com/dlez32qbe/video/upload/v1707587525/pfe/arqmkgkiddqpj76vugvh.mp4'
        /> */}
      </div>
      {children}
    </div>
  )
}
