import ArrowSync from '@components/icons/arrow-sync'
import CalendarOutline from '@components/icons/calendar-outline'
import ChevronRight from '@components/icons/chevron-right'
import Euro from '@components/icons/euro'
import UK from '@components/icons/uk'
import USA from '@components/icons/usa'

export default function page() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold">Payments</h1>
      <div className="flex items-center gap-2 py-5">
        <button className="rounded-full bg-stone-900 px-4 py-1 text-sm font-semibold text-white transition-colors duration-150 hover:bg-stone-700">
          Send
        </button>
        <button className="rounded-full bg-stone-200 px-4 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-stone-300">
          Request
        </button>
      </div>

      <ul className="flex flex-col gap-1 py-6">
        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 p-2">
              <CalendarOutline />
            </div>

            <div>
              <p className="font-semibold">Scheduled transfers</p>
              <p className="text-sm text-stone-500">
                Manage transfers that are due to go out.
              </p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 p-2">
              <ArrowSync />
            </div>

            <div>
              <p className="font-semibold">Direct Debits</p>
              <p className="text-sm text-stone-500">
                Set up and manage your authorised payments.
              </p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Account details</h2>

      <ul className="flex flex-col gap-1 py-6">
        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <Euro size="2.5em" />

            <div>
              <p className="font-semibold">Euro</p>
              <p className="text-sm text-stone-500">IBAN, Swift/BIC</p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <USA size="2.5em" />

            <div>
              <p className="font-semibold">US Dollar</p>
              <p className="text-sm text-stone-500">
                Routing number (ACH or ABA), Account number, Swift/BIC
              </p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <UK size="2.5em" />

            <div>
              <p className="font-semibold">British Pound</p>
              <p className="text-sm text-stone-500">
                UK sort code, Account number, IBAN
              </p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Payment tools</h2>
    </div>
  )
}
