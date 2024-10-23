import Arrows from '@components/icons/arrows'
import BellOutline from '@components/icons/bell-outline'
import ChevronDown from '@components/icons/chevron-down'
import ChevronRight from '@components/icons/chevron-right'
import Euro from '@components/icons/euro'
import Message from '@components/icons/message'
import USA from '@components/icons/usa'
import vercel from '@public/images/vercel.webp'
import Image from 'next/image'

export default function page() {
  return (
    <div className="py-10">
      <h1 className="px-4">Totla balance</h1>
      <h2 className="px-4 text-4xl font-semibold">1,300.00 USD</h2>

      <div className="flex items-center gap-2 px-4 py-5">
        <button className="rounded-full bg-stone-900 px-4 py-1 text-sm font-semibold text-white transition-colors duration-150 hover:bg-stone-700">
          Send
        </button>
        <button className="rounded-full bg-stone-200 px-4 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-stone-300">
          Add money
        </button>
        <button className="rounded-full bg-stone-200 px-4 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-stone-300">
          Request
        </button>
      </div>

      <h2 className="mt-4 px-4 text-xl font-bold">Transactions</h2>

      <ul className="flex flex-col gap-1 py-6">
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

      <h2 className="my-4 px-4 text-xl font-bold">Transfer calculator</h2>

      <div className="mx-4 rounded-xl bg-stone-100 p-5">
        <h1 className="text-xl font-semibold">1 USD = 0.9259 EUR</h1>
        <div className="mt-4 flex flex-col gap-4 xl:flex-row">
          <div className="flex-1">
            <div className="border-rborder-stone-200 h-full w-full border-b"></div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1">
            <div className="flex h-14 w-full items-center rounded-lg bg-background">
              <input
                type="text"
                defaultValue="1,078.99"
                className="w-full rounded-lg px-4 py-4 font-semibold"
              />
              <div className="flex cursor-pointer items-center gap-2 px-4">
                <USA size="1.5em" />
                <span className="font-semibold">USD</span>
                <ChevronDown size="1.5em" />
              </div>
            </div>

            <div className="cursor-pointer rounded-full">
              <Arrows size="1.5em" />
            </div>

            <div className="flex h-14 w-full items-center rounded-lg bg-background">
              <input
                type="text"
                defaultValue="996.90"
                className="h-14 w-full rounded-lg bg-background px-4 py-4 font-semibold"
              />
              <div className="flex cursor-pointer items-center gap-2 px-4">
                <Euro size="1.5em" />
                <span className="font-semibold">EUR</span>
                <ChevronDown size="1.5em" />
              </div>
            </div>

            <div className="mt-3 flex w-full flex-col items-center rounded-xl border border-stone-200 py-4">
              <p className="text-stone-500">Included fees</p>
              <p className="text-stone-500">3.64 USD</p>
            </div>

            <button className="mt-2 w-full rounded-full bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-stone-700">
              Send
            </button>
          </div>
        </div>
      </div>

      <ul className="my-8 space-y-4">
        <li className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-100 stroke-[1.5px] p-2.5">
              <Message size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Give us feedback</p>
            </div>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>

        <li className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-100 stroke-[1.5px] p-2.5">
              <BellOutline size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Get exchange rate updates</p>
            </div>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>
      </ul>
    </div>
  )
}
