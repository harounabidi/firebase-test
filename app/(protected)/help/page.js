import Image from 'next/image'
import vercel from '@public/images/vercel.webp'
import Link from 'next/link'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">Hi, How can we help?</h1>
      <form className="my-4 flex w-3/4 items-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for articles"
          className="my-4 h-12 w-full rounded-full border border-stone-500 px-6 pl-12"
        />
      </form>

      <div className="my-4 w-full">
        <div className="flex items-center justify-between px-3">
          <h2 className="text-2xl font-bold">
            Need help with a recent transaction?
          </h2>
          <button className="text-sm font-semibold underline">View all</button>
        </div>

        <ul className="flex w-full flex-col gap-1 py-6">
          <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
                src={vercel}
                alt="vercel"
              />

              <div>
                <p className="font-semibold">Vercel</p>
                <p>Oct 13</p>
              </div>
            </div>
            <p className="font-semibold">20 USD</p>
          </li>
          <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
                src={vercel}
                alt="vercel"
              />

              <div>
                <p className="font-semibold">Vercel</p>
                <p>Sept 13</p>
              </div>
            </div>
            <p className="font-semibold">20 USD</p>
          </li>
          <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
                src={vercel}
                alt="vercel"
              />

              <div>
                <p className="font-semibold">Vercel</p>
                <p>Card checked • Sep 13</p>
              </div>
            </div>
            <p className="font-semibold">0 USD</p>
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold">Explore all topics</h2>
      </div>

      <div className="flex items-center gap-2">
        <h3>Still need help?</h3>
        <Link href="/home" className="text-sm font-semibold underline">
          Contact us
        </Link>
      </div>
    </div>
  )
}
