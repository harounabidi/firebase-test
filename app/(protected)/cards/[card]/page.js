import ChevronRight from '@components/icons/chevron-right'

export default function page() {
  return (
    <div className="py-10">
      <h1 className="mb-2 px-4 text-2xl font-semibold max-sm:text-center lg:text-3xl">
        Physical card
      </h1>
      <h2 className="px-4 text-sm text-stone-700 max-sm:text-center">
        ••• 0030
      </h2>
      <div className="my-8 flex items-center justify-center px-4">
        <div className="card w-full lg:w-80">
          <div className="card__content relative p-20 text-center font-bold text-white transition-transform duration-1000">
            <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-pink-600 p-8">
              <h2>Front</h2>
            </div>
            <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-teal-500 p-8">
              <h2>Back</h2>
            </div>
          </div>
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
    </div>
  )
}
