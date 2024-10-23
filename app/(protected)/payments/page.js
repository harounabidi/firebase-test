import ArrowSync from '@components/icons/arrow-sync'
import CalendarOutline from '@components/icons/calendar-outline'
import ChartUp from '@components/icons/chart-up'
import ChevronRight from '@components/icons/chevron-right'
import Euro from '@components/icons/euro'
import UK from '@components/icons/uk'
import USA from '@components/icons/usa'

export default function page() {
  return (
    <div className="py-10">
      <h1 className="px-4 text-3xl font-semibold">Payments</h1>
      <div className="flex items-center gap-2 px-4 py-5">
        <button className="rounded-full bg-stone-900 px-4 py-1 text-sm font-semibold text-white transition-colors duration-150 hover:bg-stone-700">
          Send
        </button>
        <button className="rounded-full bg-stone-200 px-4 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-stone-300">
          Request
        </button>
      </div>

      <ul className="flex flex-col gap-1 py-6">
        <li className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 p-2">
              <CalendarOutline size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Scheduled transfers</p>
              <p className="text-sm text-stone-500">
                Manage transfers that are due to go out.
              </p>
            </div>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>

        <li className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 p-2">
              <ArrowSync size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Direct Debits</p>
              <p className="text-sm text-stone-500">
                Set up and manage your authorised payments.
              </p>
            </div>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>
      </ul>

      <h2 className="mt-8 px-4 text-xl font-semibold">Account details</h2>

      <ul className="flex flex-col gap-1 py-6">
        <li className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <Euro size="2.5em" />

            <div>
              <p className="font-semibold">Euro</p>
              <p className="text-sm text-stone-500">IBAN, Swift/BIC</p>
            </div>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>

        <li className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <USA size="2.5em" />

            <div>
              <p className="font-semibold">US Dollar</p>
              <p className="text-sm text-stone-500">
                Routing number (ACH or ABA), Account number, Swift/BIC
              </p>
            </div>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>

        <li className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <UK size="2.5em" />

            <div>
              <p className="font-semibold">British Pound</p>
              <p className="text-sm text-stone-500">
                UK sort code, Account number, IBAN
              </p>
            </div>
          </div>
          <div className="w-fit">
            <ChevronRight size="1.5em" />
          </div>
        </li>
      </ul>

      <h2 className="mt-8 px-4 text-xl font-semibold">Payment tools</h2>

      <ul className="flex flex-col gap-1 py-6">
        <li className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-4 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 stroke-[1.5px] p-2.5">
              <ChartUp size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Auto Conversions</p>
              <p className="text-sm text-stone-500">
                Convert money between your balances at your desired exchange
                rate.
              </p>
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
