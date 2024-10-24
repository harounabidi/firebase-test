import SettingsOutline from '@components/icons/settings-outline'
import Mask from './mask'
import Sheet from './sheet'
import Link from 'next/link'
import QuestionOutline from '@components/icons/question-outline'
import LogoutOutline from '@components/icons/logout-outline'
import User from '@components/icons/user'
import HomeOutline from '@components/icons/home-outline'
import UserOutline from '@components/icons/user-outline'
import { useRouter } from 'next/navigation'
import { getAuth } from 'firebase/auth'
import firebase from '@firebase/config'

export default function UserSheet({ userMenuOpen, setUserMenuOpen, user }) {
  const router = useRouter()
  const handleLogout = () => {
    const auth = getAuth(firebase)
    setUserMenuOpen(false)
    auth.signOut()
    router.refresh()
  }

  if (!user) return

  return (
    <>
      <Sheet open={userMenuOpen} setOpen={setUserMenuOpen}>
        <div className="overflow-y-auto px-4 pt-28">
          <div className="flex items-center justify-center">
            <div className="cursor-pointer rounded-full bg-stone-100 p-2">
              <User color="#78716c" size="45" />
            </div>
          </div>

          <span className="block w-full px-4 py-3 pb-5 text-center font-semibold">
            {`${user.firstName} ${user.lastName}` ||
              user.email ||
              user.phoneNumber}
          </span>

          <Link
            href="/home"
            onClick={() => setUserMenuOpen(false)}
            className="flex items-center gap-2 rounded-lg border border-transparent stroke-[1.5px] px-4 py-4 text-sm text-stone-600 transition-all duration-300 hover:border-stone-800 hover:stroke-[2px] hover:font-medium hover:text-stone-950"
          >
            <HomeOutline size="20" />
            <span>Home</span>
          </Link>

          <Link
            href="/profile"
            onClick={() => setUserMenuOpen(false)}
            className="flex items-center gap-2 rounded-lg border border-transparent stroke-[1.5px] px-4 py-4 text-sm text-stone-600 transition-all duration-300 hover:border-stone-800 hover:stroke-[2px] hover:font-medium hover:text-stone-950"
          >
            <UserOutline size="20" />
            <span>Profile</span>
          </Link>

          <Link
            href="/settings"
            onClick={() => setUserMenuOpen(false)}
            className="flex items-center gap-2 rounded-lg border border-transparent stroke-[1.5px] px-4 py-4 text-sm text-stone-600 transition-all duration-300 hover:border-stone-800 hover:stroke-[2px] hover:font-medium hover:text-stone-950"
          >
            <SettingsOutline size="20" />
            <span>Settings</span>
          </Link>

          <Link
            href="/help"
            onClick={() => setUserMenuOpen(false)}
            className="flex items-center gap-2 rounded-lg border border-transparent stroke-[1.5px] px-4 py-4 text-sm text-stone-600 transition-all duration-300 hover:border-stone-800 hover:stroke-[2px] hover:font-medium hover:text-stone-950"
          >
            <QuestionOutline size="20" />
            <span>Help</span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-lg border border-transparent stroke-[1.5px] px-4 py-4 text-sm text-stone-600 transition-all duration-300 hover:border-stone-800 hover:stroke-[2px] hover:font-medium hover:text-stone-950"
          >
            <LogoutOutline size="20" />
            <span>Logout</span>
          </button>
        </div>
      </Sheet>
      <Mask visible={userMenuOpen} background="bg-black/20" />
    </>
  )
}
