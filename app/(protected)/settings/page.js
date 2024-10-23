import Appearance from '@components/icons/appearance'
import BellOutline from '@components/icons/bell-outline'
import ChartUp from '@components/icons/chart-up'
import ChevronRight from '@components/icons/chevron-right'
import Globe from '@components/icons/globe'
import Shield from '@components/icons/shield'
import XCircle from '@components/icons/x-circle'

export default function page() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Settings</h1>
      <ul className="flex flex-col gap-1 py-6">
        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 stroke-[1.5px] p-2.5">
              <Shield size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Security and privacy</p>
              <p className="text-sm text-stone-500">
                Manage your security settings and privacy preferences
              </p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 stroke-[1.5px] p-2.5">
              <BellOutline size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Notifications</p>
              <p className="text-sm text-stone-500">
                Get notified about important updates and spot any suspicious
                account activity.
              </p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 stroke-[1.5px] p-2.5">
              <Appearance size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Appearance</p>
              <p className="text-sm text-stone-500">Light</p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 stroke-[1.5px] p-2.5">
              <Globe size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Language</p>
              <p className="text-sm text-stone-500">English (US)</p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 stroke-[1.5px] p-2.5">
              <ChartUp size="2em" />
            </div>

            <div>
              <p className="font-semibold">Exchange rate alerts</p>
              <p className="text-sm text-stone-500">
                Manage your exchange rate alerts.
              </p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>

        <li className="flex cursor-pointer items-center justify-between rounded-md px-3 py-3 transition-colors duration-150 hover:bg-stone-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-stone-200 stroke-[1.5px] p-2.5">
              <XCircle size="1.8em" />
            </div>

            <div>
              <p className="font-semibold">Close Klark account</p>
              <p className="text-sm text-stone-500">
                If you want to stop using Klark.
              </p>
            </div>
          </div>
          <ChevronRight size="1.5em" />
        </li>
      </ul>
    </div>
  )
}
