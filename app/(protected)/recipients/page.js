import ChevronRight from '@components/icons/chevron-right'
import User from '@components/icons/user'

export default function page() {
  return (
    <div className="py-10">
      <h1 className="px-4 text-3xl font-semibold">Recipients</h1>

      <form className="flex items-center px-4">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Name, email, or phone"
          className="my-4 h-12 w-full rounded-full border border-stone-500 bg-background px-6 pl-12"
        />
        <button
          type="submit"
          className="ml-2 hidden h-12 w-fit items-center justify-center text-nowrap rounded-full border border-stone-500 p-3 px-6 font-semibold md:flex"
        >
          Add recipient
        </button>
      </form>

      <div className="px-4">
        <h2 className="my-5 w-full border-b border-stone-200 py-4 text-sm font-semibold text-stone-700">
          All
        </h2>
      </div>

      <ul className="flex flex-col gap-1 py-6">
        <li className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-100 p-2">
              <User color="#d6d3d1" />
            </div>

            <div>
              <p className="font-semibold">Haroun Abidi</p>
              <p className="text-sm text-stone-500">harooonabidi@gmail.com</p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>
      </ul>
    </div>
  )
}
