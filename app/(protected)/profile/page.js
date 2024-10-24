'use client'

import User from '@components/icons/user'
import Modal from '@components/ui/modal'
import PasswordModal from '@components/ui/profile-password-modal'
import PasswordSheet from '@components/ui/profile-password-sheet'
import { useAuthContext } from '@providers/auth-provider'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const { user } = useAuthContext()
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="py-10">
      <div className="mb-4 flex items-center gap-4 px-4">
        <div className="flex cursor-pointer items-center justify-center rounded-full bg-stone-200 p-2">
          <User color="#a8a29d" size="50" />
        </div>
        <button className="text-sm font-semibold underline">
          Edit account photo
        </button>
      </div>
      <div className="flex flex-col-reverse gap-4 px-4 lg:flex-row lg:justify-between">
        <h2 className="text-xl font-semibold lg:text-2xl">
          Personal informations
        </h2>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-stone-600 px-3 py-1 text-sm font-semibold max-sm:flex-1 lg:hidden"
          >
            Edit details
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden rounded-full border border-stone-600 px-3 py-1 text-sm font-semibold max-sm:flex-1 lg:flex"
          >
            Edit details
          </button>

          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-stone-600 px-3 py-1 text-sm font-semibold max-sm:flex-1 lg:hidden"
          >
            Edit details
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden rounded-full border border-stone-600 px-3 py-1 text-sm font-semibold max-sm:flex-1 lg:flex"
          >
            Edit details
          </button>
        </div>

        <PasswordSheet open={open} setOpen={setOpen} />
        <PasswordModal open={modalOpen} setOpen={setModalOpen} />
      </div>
      <div className="m-4 flex flex-col gap-4 rounded-xl border border-stone-300 p-6 text-sm lg:flex-row">
        <div className="flex flex-1 flex-col items-start gap-4">
          <div className="flex-1">
            <p className="text-stone-600">Full legal first and middle names</p>
            <p className="text-stone-600">{user?.firstName}</p>
          </div>
          <div>
            <p className="text-stone-600">Full legal last name</p>
            <p className="text-stone-600">{user?.lastName}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start gap-4">
          <div>
            <p className="text-stone-600">Date of birth</p>
            <p className="text-stone-600">-</p>
          </div>
          <div>
            <p className="text-stone-600">Phone</p>
            <p className="text-stone-600">***</p>
          </div>
        </div>
      </div>

      <h2 className="px-4 text-xl font-semibold lg:text-2xl">
        Personal address
      </h2>

      <div className="m-4 flex flex-col gap-4 rounded-xl border border-stone-300 p-6 text-sm lg:flex-row">
        <div className="flex flex-1 flex-col items-start gap-4">
          <div className="flex-1">
            <p className="text-stone-600">Address</p>
            <p className="text-stone-600">***</p>
          </div>
          <div>
            <p className="text-stone-600">Postal code</p>
            <p className="text-stone-600">***</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start gap-4">
          <div>
            <p className="text-stone-600">City</p>
            <p className="text-stone-600">***</p>
          </div>
          <div>
            <p className="text-stone-600">Country</p>
            <p className="text-stone-600">-</p>
          </div>
        </div>
      </div>
    </div>
  )
}
