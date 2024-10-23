import Image from 'next/image'
import vercel from '@public/images/vercel.webp'
import Link from 'next/link'
import Shield from '@components/icons/shield'
import ChevronRight from '@components/icons/chevron-right'
import BellOutline from '@components/icons/bell-outline'
import Appearance from '@components/icons/appearance'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-2xl font-semibold lg:text-3xl">
        Hi, How can we help?
      </h1>
      <form className="my-4 flex w-3/4 items-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for articles"
          className="my-4 h-12 w-full rounded-full border border-stone-500 bg-background px-6 pl-12"
        />
      </form>

      <div className="my-4 w-full">
        <div className="flex items-end justify-between gap-3 px-4">
          <h2 className="text-2xl font-bold">
            Need help with a recent transaction?
          </h2>
          <button className="text-nowrap text-sm font-semibold underline">
            View all
          </button>
        </div>

        <ul className="flex w-full flex-col gap-1 py-6">
          <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
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
          <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
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
          <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
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

        <h2 className="mt-8 px-4 text-2xl font-bold">Explore all topics</h2>

        <ul className="py-6">
          <li className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-stone-200 stroke-[1.5px] p-2.5">
                <Shield size="1.8em" />
              </div>

              <div>
                <p className="font-semibold">Security and privacy</p>
                <p className="text-sm text-stone-500">
                  Manage your security settings and privacy preferences
                </p>
              </div>
            </div>
            <div className="w-fit">
              <ChevronRight size="1.5em" />
            </div>
          </li>

          <li className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-stone-200 stroke-[1.5px] p-2.5">
                <BellOutline size="1.8em" />
              </div>

              <div>
                <p className="font-semibold">Notifications</p>
                <p className="text-sm text-stone-500">
                  Get notified about important updates and spot any suspicious
                  account activity.
                </p>
              </div>
            </div>
            <div className="w-fit">
              <ChevronRight size="1.5em" />
            </div>
          </li>

          <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-stone-200 stroke-[1.5px] p-2.5">
                <Appearance size="1.8em" />
              </div>

              <div>
                <p className="font-semibold">Appearance</p>
                <p className="text-sm text-stone-500">Light</p>
              </div>
            </div>
            <div className="w-fit">
              <ChevronRight size="1.5em" />
            </div>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <h3 className="text-lg font-semibold">Still need help?</h3>
        <Link
          href="/home"
          className="rounded-full border-[1.5px] border-stone-700 px-8 py-2"
        >
          Contact us
        </Link>
      </div>
    </div>
  )
}
