import CardOutline from '@components/icons/card-outline'
import ChevronRight from '@components/icons/chevron-right'
import Plus from '@components/icons/plus'
import SpeedOutline from '@components/icons/speed-outline'
import Link from 'next/link'

export default function page() {
  return (
    <div className="py-10">
      <h1 className="px-4 text-3xl font-semibold">Cards</h1>

      <div className="my-8 flex items-center gap-4 px-4">
        <button className="flex flex-col items-center justify-center gap-2 px-4">
          <div className="w-fit rounded-full bg-stone-200 p-2">
            <SpeedOutline size="40" />
          </div>
          <p className="text-sm font-semibold">Edit limits</p>
        </button>

        <button className="flex flex-col items-center justify-center gap-2 px-4">
          <div className="w-fit rounded-full bg-stone-200 p-2">
            <Plus size="40" />
          </div>
          <p className="text-sm font-semibold">Add money</p>
        </button>
      </div>

      <div className="px-4">
        <h2 className="my-5 w-full border-b border-stone-200 py-4 text-sm font-semibold text-stone-700">
          Your cards
        </h2>
      </div>

      <div className="flex flex-col gap-1 py-6">
        <Link
          href="/cards/1234-1234-1234"
          className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-100 stroke-[1.5px] p-2">
              <Plus size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Order new card</p>
              <p className="text-sm text-stone-500">
                Get another card for this account.
              </p>
            </div>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </Link>

        <Link
          href="/cards/1234-1234-1234"
          className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-100 p-2">
              <CardOutline size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Physical card •••• 0030</p>
              <p className="text-sm text-stone-500">Ready to use</p>
            </div>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </Link>

        <Link
          href="/cards/1234-1234-1234"
          className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-100 p-2">
              <CardOutline size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Digital card ••• 9274</p>
              <p className="text-sm text-stone-500">Ready to use</p>
            </div>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-2 px-4 text-sm md:flex-row">
        <p>Is there anything we could do better?</p>
        <Link href="/feedback" className="w-fit font-semibold underline">
          Give us feedback
        </Link>
      </div>
    </div>
  )
}
