'use client'

import CardOutline from '@components/icons/card-outline'
import ChevronRight from '@components/icons/chevron-right'
import Snow from '@components/icons/snow'
import Mask from '@components/ui/mask'
import Modal from '@components/ui/modal'
import Sheet from '@components/ui/sheet'
import Link from 'next/link'
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
        <div className="my-8 flex items-center justify-center px-4">
          <div className="card w-full lg:w-80">
            <div className="card__content relative h-52 p-20 text-center font-bold text-white transition-transform duration-1000">
              <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-pink-600 p-8">
                <h2>Front</h2>
              </div>
              <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-teal-500 p-8">
                <h2>Back</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 flex items-center justify-between px-4">
          <button
            onClick={() => setModalOpen(true)}
            className="hidden flex-col items-center justify-center gap-2 px-4 lg:flex"
          >
            <div className="w-fit rounded-full bg-stone-200 p-2.5">
              <CardOutline size="30" />
            </div>
            <p className="text-sm font-semibold">Show PIN</p>
          </button>

          <button
            onClick={() => setSheetOpen(true)}
            className="flex flex-col items-center justify-center gap-2 px-4 lg:hidden"
          >
            <div className="w-fit rounded-full bg-stone-200 p-2.5">
              <CardOutline size="30" />
            </div>
            <p className="text-sm font-semibold">Show PIN</p>
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden flex-col items-center justify-center gap-2 px-4 lg:flex"
          >
            <div className="w-fit rounded-full bg-stone-200 p-2.5">
              <CardOutline size="30" />
            </div>
            <p className="text-sm font-semibold">Card details</p>
          </button>

          <button
            onClick={() => setSheetOpen(true)}
            className="flex flex-col items-center justify-center gap-2 px-4 lg:hidden"
          >
            <div className="w-fit rounded-full bg-stone-200 p-2.5">
              <CardOutline size="30" />
            </div>
            <p className="text-sm font-semibold">Card details</p>
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden flex-col items-center justify-center gap-2 px-4 lg:flex"
          >
            <div className="w-fit rounded-full bg-stone-200 p-2.5">
              <CardOutline size="30" />
            </div>
            <p className="text-sm font-semibold">Freeze card</p>
          </button>

          <button
            onClick={() => setSheetOpen(true)}
            className="flex flex-col items-center justify-center gap-2 px-4 lg:hidden"
          >
            <div className="w-fit rounded-full bg-stone-200 stroke-[1.2px] p-2.5">
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
        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-4 transition-colors duration-150 hover:bg-stone-100">
          <p className="font-semibold">View recent card transactions</p>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-4 transition-colors duration-150 hover:bg-stone-100">
          <p className="font-semibold">Unblock PIN</p>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-4 transition-colors duration-150 hover:bg-stone-100">
          <p className="font-semibold">Manage payment methods</p>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-4 transition-colors duration-150 hover:bg-stone-100">
          <p className="font-semibold">Edit card</p>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-4 transition-colors duration-150 hover:bg-stone-100">
          <p className="font-semibold">Find an ATM</p>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-4 transition-colors duration-150 hover:bg-stone-100">
          <p className="font-semibold">Replace car</p>
          <ChevronRight size="1.5em" />
        </li>
      </ul>

      <PasswordModal open={modalOpen} setOpen={setModalOpen} />
      <PasswordSheet open={sheetOpen} setOpen={setSheetOpen} />
    </div>
  )
}

function PasswordSheet({ open, setOpen }) {
  return (
    <>
      <Sheet open={open} setOpen={setOpen}>
        <div className="flex flex-col px-6 py-28">
          <h3 className="text-center text-2xl font-semibold">
            Enter your password
          </h3>
          <p className="my-4 text-center text-sm text-stone-500">
            To access your account details, please enter your password.
          </p>

          <form>
            <label htmlFor="password" className="font-semibold">
              Your password
            </label>

            <input
              type="password"
              id="password"
              className="my-2 h-12 w-full rounded-lg border border-stone-500 bg-background px-6"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-stone-700"
            >
              Done
            </button>
          </form>

          <Link href="/" className="mt-6 text-center font-semibold underline">
            Forgot password?
          </Link>
        </div>
      </Sheet>
      <Mask visible={open} background="bg-black/20" />
    </>
  )
}

function PasswordModal({ open, setOpen }) {
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)}>
      <div className="flex flex-col px-6 py-10">
        <h3 className="text-center text-2xl font-semibold">
          Enter your password
        </h3>
        <p className="my-4 text-center text-sm text-stone-500">
          To access your account details, please enter your password.
        </p>

        <form>
          <label htmlFor="password" className="font-semibold">
            Your password
          </label>

          <input
            type="password"
            id="password"
            className="my-2 h-12 w-full rounded-lg border border-stone-500 bg-background px-6"
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-stone-700"
          >
            Done
          </button>
        </form>

        <Link href="/" className="mt-6 text-center font-semibold underline">
          Forgot password?
        </Link>
      </div>
    </Modal>
  )
}
