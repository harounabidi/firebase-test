import CardOutline from '@components/icons/card-outline'
import HomeOutline from '@components/icons/home-outline'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/logo.png'
import { usePathname } from 'next/navigation'
import UsersOutline from '@components/icons/users-outline'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky bottom-0 top-0 hidden h-screen w-40 py-10 lg:flex lg:flex-col">
      <Link href="/" aria-label="logo" className="mb-16 px-3 lg:block">
        <Image priority src={logo} width={80} alt="logo" className="h-auto" />
      </Link>
      <ul className="flex w-full flex-row items-start justify-start space-y-2 md:flex-col">
        <li className="w-full cursor-pointer items-center rounded-md">
          <Link
            href="/home"
            className={`flex w-full flex-col items-center stroke-[2px] px-3 py-3 transition-all duration-150 hover:stroke-[2px] hover:font-medium hover:text-stone-950 lg:flex-row lg:gap-2 ${
              pathname === '/home'
                ? 'stroke-[2px] font-medium text-stone-950'
                : 'stroke-[1.5px] text-stone-600'
            }`}
          >
            <HomeOutline size="20" />
            Home
          </Link>
        </li>

        <li className="w-full cursor-pointer items-center rounded-md">
          <Link
            href="/card"
            className={`flex w-full flex-col items-center stroke-[2px] px-3 py-3 transition-all duration-150 hover:stroke-[2px] hover:font-medium hover:text-stone-950 lg:flex-row lg:gap-2 ${
              pathname === '/card'
                ? 'stroke-[2px] font-medium text-stone-950'
                : 'stroke-[1.5px] text-stone-600'
            }`}
          >
            <CardOutline size="20" />
            Card
          </Link>
        </li>

        <li className="w-full cursor-pointer items-center rounded-md">
          <Link
            href="/recipients"
            className={`flex w-full flex-col items-center stroke-[2px] px-3 py-3 transition-all duration-150 hover:stroke-[2px] hover:font-medium hover:text-stone-950 lg:flex-row lg:gap-2 ${
              pathname === '/recipients'
                ? 'stroke-[2px] font-medium text-stone-950'
                : 'stroke-[1.5px] text-stone-600'
            }`}
          >
            <UsersOutline size="20" />
            Recipients
          </Link>
        </li>

        <li className="w-full cursor-pointer items-center rounded-md">
          <Link
            href="/payments"
            className={`flex w-full flex-col items-center stroke-[2px] px-3 py-3 transition-all duration-150 hover:stroke-[2px] hover:font-medium hover:text-stone-950 lg:flex-row lg:gap-2 ${
              pathname === '/payments'
                ? 'stroke-[2px] font-medium text-stone-950'
                : 'stroke-[1.5px] text-stone-600'
            }`}
          >
            <CardOutline size="20" />
            Payments
          </Link>
        </li>
      </ul>
    </aside>
  )
}
