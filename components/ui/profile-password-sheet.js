import Link from 'next/link'
import Mask from './mask'
import Sheet from './sheet'

export default function PasswordSheet({ open, setOpen }) {
  return (
    <>
      <Sheet vertical={true} open={open} setOpen={setOpen}>
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
