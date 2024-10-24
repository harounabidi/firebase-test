import Mask from './mask'
import Sheet from './sheet'

export default function NotificationsSheet({ menuOpen, setMenuOpen }) {
  return (
    <>
      <Sheet
        // vertical={true}
        open={menuOpen}
        setOpen={setMenuOpen}
        title="Notifications"
      >
        <div className="overflow-y-auto pt-20">
          <h3 className="mx-6 mb-4 border-b border-stone-200 pb-1 text-lg font-semibold">
            Inbox
          </h3>

          <ul className="space-y-6 px-6 py-3">
            <li className="cursor-pointer space-y-2">
              <div className="flex items-start justify-between">
                <p className="text-lg font-semibold text-stone-600">
                  Hello John, fees are changing
                </p>
                <p className="text-sm text-stone-500">05/16/2024</p>
              </div>
              <p className="text-sm text-stone-600">
                Fees for some routes got more expensive and others got cheaper.
                Tap to see a full list of updated fees and when they apply.
              </p>
            </li>

            <li className="cursor-pointer space-y-2">
              <div className="flex items-start justify-between">
                <p className="text-lg font-semibold text-stone-600">
                  Hello John, fees are changing
                </p>
                <p className="text-sm text-stone-500">05/16/2024</p>
              </div>
              <p className="text-sm text-stone-600">
                Fees for some routes got more expensive and others got cheaper.
                Tap to see a full list of updated fees and when they apply.
              </p>
            </li>
          </ul>
        </div>
      </Sheet>
      <Mask visible={menuOpen} background="bg-black/20" />
    </>
  )
}
