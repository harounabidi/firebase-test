import Link from "next/link"

export default function Hero() {
  return (
    <div className='lg:px-20 px-6 items-center w-full flex flex-col'>
      <span className='bg-pink-200 font-semibold font-source px-3.5 py-1.5 rounded-full'>
        Trusted by over 1 million customers
      </span>

      <h1 className='font-source lg:w-2/3 text-5xl md:text-7xl py-8 text-center'>
        Banking reimagined for the digital age
      </h1>

      <p className='text-center font-source lg:text-lg font-medium lg:max-w-2xl text-gray-600'>
        Experience seamless, secure, and smart banking right from your
        smartphone. No branches, no queues, just effortless financial
        management.
      </p>

      <Link
        href='/signup'
        className='bg-stone-900 mt-8 text-white font-semibold hover:bg-stone-700 rounded-full h-14 px-6 transition-colors duration-300 flex items-center justify-center'>
        Get started
      </Link>
    </div>
  )
}
