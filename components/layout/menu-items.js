import Link from "next/link"
import { links } from "./nav-list-items"

export default function MenuItems({ pathname, onItemClick }) {
  return (
    <ul className='pb-safe no-sidebar flex-grow overflow-y-auto pt-4'>
      {links.map((item, index) =>
        item.active ? (
          <li
            key={index}
            className={`${
              pathname === item.link ||
              (item.link === "/" &&
                (pathname === "/" || pathname === `/${locale}`)) ||
              pathname === `/${item.link}`
                ? "bg-primary/5"
                : ""
            }`}>
            <Link
              href={item.link}
              aria-label={item.title}
              className='flex w-full items-center gap-3 px-8 py-3 hover:bg-primary/5'
              onClick={onItemClick}>
              {item.title}
            </Link>
          </li>
        ) : null
      )}
    </ul>
  )
}
