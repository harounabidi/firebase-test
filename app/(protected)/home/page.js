'use client'

import Arrows from '@components/icons/arrows'
import Bank from '@components/icons/bank'
import BellOutline from '@components/icons/bell-outline'
import ChevronDown from '@components/icons/chevron-down'
import ChevronRight from '@components/icons/chevron-right'
import Euro from '@components/icons/euro'
import Message from '@components/icons/message'
import UK from '@components/icons/uk'
import USA from '@components/icons/usa'
import vercel from '@public/images/vercel.webp'
import Image from 'next/image'
import Chart from '@components/icons/chart'
import { useState } from 'react'
import FeedbackSheet from '@components/ui/feedback-sheet'
import FeedbackModal from '@components/ui/feedback-modal'

export default function Page() {
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)

  return (
    <div className="py-10">
      <h1 className="px-4">Totla balance</h1>
      <h2 className="px-4 text-4xl font-semibold">1,366.75 EUR</h2>

      <div className="flex items-center gap-2 px-4 py-5">
        <button className="rounded-full bg-stone-900 px-4 py-1 text-sm font-semibold text-white transition-colors duration-150 hover:bg-stone-700">
          Send
        </button>
        <button className="rounded-full bg-stone-100 px-4 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-stone-200">
          Add money
        </button>
        <button className="rounded-full bg-stone-100 px-4 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-stone-200">
          Request
        </button>
      </div>

      <div className="no-scrollbar flex items-center gap-4 overflow-x-auto px-4">
        <div className="flex min-w-64 cursor-pointer flex-col gap-12 rounded-2xl bg-stone-100 p-4 hover:bg-stone-200">
          <div className="flex items-center gap-2">
            <Euro size="2.5em" />
            <span className="text-lg font-semibold">EUR</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Bank size="1.2em" className="stroke-[1.5px]" />
              <span className="text-sm">·· 87300</span>
            </div>
            <span className="text-xl font-semibold">1,366.75</span>
          </div>
        </div>

        <div className="flex min-w-64 cursor-pointer flex-col gap-12 rounded-2xl bg-stone-100 p-4 hover:bg-stone-200">
          <div className="flex items-center gap-2">
            <USA size="2.5em" />
            <span className="text-lg font-semibold">USD</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Bank size="1.2em" className="stroke-[1.5px]" />
              <span className="text-sm">·· 35400</span>
            </div>
            <span className="text-xl font-semibold">0.00</span>
          </div>
        </div>

        <div className="flex min-w-64 cursor-pointer flex-col gap-12 rounded-2xl bg-stone-100 p-4 hover:bg-stone-200">
          <div className="flex items-center gap-2">
            <UK size="2.5em" />
            <span className="text-lg font-semibold">GBP</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Bank size="1.2em" className="stroke-[1.5px]" />
              <span className="text-sm">·· 56300</span>
            </div>
            <span className="text-xl font-semibold">0.00</span>
          </div>
        </div>
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
        <div className="mt-4 flex flex-col gap-6 sm:flex-row">
          <div className="flex flex-row gap-5">
            <div className="h-full space-y-6 border-b border-r border-b-stone-200 border-r-stone-200">
              <Chart />
              <div className="flex flex-row items-start justify-between">
                <p className="text-sm text-stone-500">Sept 24</p>
                <p className="text-sm text-stone-500">Today</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between">
              <p className="text-sm text-stone-500">0.93</p>
              <p className="text-sm text-stone-500">0.91</p>
              <p className="text-sm text-stone-500">0.89</p>
            </div>
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
        <li
          onClick={() => setFeedbackOpen(!feedbackOpen)}
          className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100 lg:hidden"
        >
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

        <li
          onClick={() => setFeedbackModalOpen(true)}
          className="hidden cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100 lg:flex"
        >
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

      <FeedbackSheet menuOpen={feedbackOpen} setMenuOpen={setFeedbackOpen} />
      <FeedbackModal open={feedbackModalOpen} setOpen={setFeedbackModalOpen} />
    </div>
  )
}
