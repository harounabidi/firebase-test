'use client'

import Bank from '@components/icons/bank'
import CardOutline from '@components/icons/card-outline'
import ChevronRight from '@components/icons/chevron-right'
import KeyOutline from '@components/icons/key-outline'
import Pen from '@components/icons/pen'
import Redo from '@components/icons/redo'
import SettingsOutline from '@components/icons/settings-outline'
import Snow from '@components/icons/snow'
import Visa from '@components/icons/visa'
import PasswordCardModal from '@components/ui/card-password-modal'
import PasswordCardSheet from '@components/ui/card-password-sheet'
import chip from '@public/images/chip.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <div className="py-10">
      <h1 className="mb-2 px-4 text-2xl font-semibold max-sm:text-center lg:text-3xl">
        Physical card
      </h1>
      <h2 className="px-4 text-sm text-stone-700 max-sm:text-center">
        ••• 0030
      </h2>

      <div className="flex flex-col md:flex-row">
        <div className="my-8 flex items-center justify-center px-8">
          <VisaCard />
        </div>

        <div className="flex items-center justify-between px-4">
          <button
            onClick={() => setModalOpen(true)}
            className="hidden flex-col items-center justify-center gap-2 px-4 lg:flex"
          >
            <div className="w-fit rounded-full bg-stone-800 p-2.5 text-white">
              <KeyOutline size="30" />
            </div>
            <p className="text-sm font-semibold">Show PIN</p>
          </button>

          <button
            onClick={() => setSheetOpen(true)}
            className="flex flex-col items-center justify-center gap-2 px-4 lg:hidden"
          >
            <div className="w-fit rounded-full bg-stone-800 p-2.5 text-white">
              <KeyOutline size="30" />
            </div>
            <p className="text-sm font-semibold">Show PIN</p>
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden flex-col items-center justify-center gap-2 px-4 lg:flex"
          >
            <div className="w-fit rounded-full bg-stone-800 p-2.5 text-white">
              <CardOutline size="30" />
            </div>
            <p className="text-sm font-semibold">Card details</p>
          </button>

          <button
            onClick={() => setSheetOpen(true)}
            className="flex flex-col items-center justify-center gap-2 px-4 lg:hidden"
          >
            <div className="w-fit rounded-full bg-stone-800 p-2.5 text-white">
              <CardOutline size="30" />
            </div>
            <p className="text-sm font-semibold">Card details</p>
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden flex-col items-center justify-center gap-2 px-4 lg:flex"
          >
            <div className="w-fit rounded-full bg-stone-800 p-2.5 text-white">
              <Snow size="30" />
            </div>
            <p className="text-sm font-semibold">Freeze card</p>
          </button>

          <button
            onClick={() => setSheetOpen(true)}
            className="flex flex-col items-center justify-center gap-2 px-4 lg:hidden"
          >
            <div className="w-fit rounded-full bg-stone-800 stroke-[1.2px] p-2.5 text-white">
              <Snow size="30" />
            </div>
            <p className="text-sm font-semibold">Freeze card</p>
          </button>
        </div>
      </div>

      <div className="px-4">
        <h2 className="my-5 w-full border-b border-stone-200 py-4 text-sm font-semibold text-stone-700">
          Manage card
        </h2>
      </div>

      <ul className="flex flex-col gap-1 py-4">
        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="hidden rounded-full bg-stone-200 stroke-[1.5px] p-2.5 md:block">
              <Redo size="1.8em" />
            </div>

            <p className="font-semibold">View recent card transactions</p>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="hidden rounded-full bg-stone-200 stroke-[1.5px] p-2.5 md:block">
              <Redo size="1.8em" />
            </div>

            <p className="font-semibold">Unblock PIN</p>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="hidden rounded-full bg-stone-200 stroke-[1.5px] p-2.5 md:block">
              <SettingsOutline size="1.8em" />
            </div>

            <p className="font-semibold">Manage payment method</p>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="hidden rounded-full bg-stone-200 stroke-[1.5px] p-2.5 md:block">
              <Pen size="1.8em" />
            </div>

            <p className="font-semibold">Edit card</p>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="hidden rounded-full bg-stone-200 stroke-[1.5px] p-2.5 md:block">
              <Bank size="1.8em" />
            </div>

            <p className="font-semibold">Find an ATM</p>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="hidden rounded-full bg-stone-200 stroke-[1.5px] p-2.5 md:block">
              <CardOutline size="1.8em" />
            </div>

            <p className="font-semibold">Replace card</p>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>
      </ul>

      <PasswordCardModal open={modalOpen} setOpen={setModalOpen} />
      <PasswordCardSheet open={sheetOpen} setOpen={setSheetOpen} />
    </div>
  )
}

function VisaCard() {
  return (
    <div className="w-full lg:w-80">
      <div className="relative h-52 rounded-xl bg-stone-800 text-center font-bold text-white shadow-xl">
        <div className="absolute bottom-0 right-5 flex flex-col items-end text-white">
          <Image src={chip} alt="chip" width={35} height={35} />
          <Visa size="4em" />
        </div>
      </div>
    </div>
  )
}
