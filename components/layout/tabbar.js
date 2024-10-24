'use client'

import CardOutline from '@components/icons/card-outline'
import HomeOutline from '@components/icons/home-outline'
import Payment from '@components/icons/payment'
import UsersOutline from '@components/icons/users-outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Tabbar() {
  const pathname = usePathname()
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background px-8 lg:hidden">
      <ul className="flex w-full items-end justify-between">
        <li className="w-full cursor-pointer items-center rounded-md">
          <Link
            href="/home"
            className={`flex w-full flex-col items-center stroke-[2px] px-3 py-4 text-xs transition-all duration-150 hover:stroke-[2px] hover:font-medium hover:text-stone-950 lg:flex-row lg:gap-2 ${
              pathname.split('/')[1] === 'home'
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
            href="/cards"
            className={`flex w-full flex-col items-center stroke-[2px] px-3 py-4 text-xs transition-all duration-150 hover:stroke-[2px] hover:font-medium hover:text-stone-950 lg:flex-row lg:gap-2 ${
              pathname.split('/')[1] === 'cards'
                ? 'stroke-[2px] font-medium text-stone-950'
                : 'stroke-[1.5px] text-stone-600'
            }`}
          >
            <CardOutline size="20" />
            Cards
          </Link>
        </li>

        <li className="w-full cursor-pointer items-center rounded-md">
          <Link
            href="/recipients"
            className={`flex w-full flex-col items-center stroke-[2px] px-3 py-4 text-xs transition-all duration-150 hover:stroke-[2px] hover:font-medium hover:text-stone-950 lg:flex-row lg:gap-2 ${
              pathname.split('/')[1] === 'recipients'
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
            className={`flex w-full flex-col items-center stroke-[2px] px-3 py-4 text-xs transition-all duration-150 hover:stroke-[2px] hover:font-medium hover:text-stone-950 lg:flex-row lg:gap-2 ${
              pathname.split('/')[1] === 'payments'
                ? 'stroke-[2px] font-medium text-stone-950'
                : 'stroke-[1.5px] text-stone-600'
            }`}
          >
            <Payment size="20" />
            Payments
          </Link>
        </li>
      </ul>
    </div>
  )
}
