'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { links } from './nav-list-items'
import { animated, useTrail } from '@react-spring/web'
import { useAuthContext } from '@providers/auth-provider'

export default function MenuItems({ onItemClick, isOpen }) {
  const [animationKey, setAnimationKey] = useState(0)

  const { user } = useAuthContext()

  useEffect(() => {
    if (user) links.find((item) => item.link === '/signin').active = false
  }, [user])

  const activeLinks = links.filter((item) => item.active)

  useEffect(() => {
    if (isOpen) {
      setAnimationKey((prev) => prev + 1)
    }
  }, [isOpen])

  const trail = useTrail(activeLinks.length, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    config: { mass: 1, tension: 400, friction: 30 },
    reset: true,
    key: animationKey
  })

  return (
    <ul className="flex-grow pt-4">
      {trail.map((props, index) => {
        const item = activeLinks[index]
        return (
          <animated.li key={`${item.link}-${animationKey}`} style={props}>
            <Link
              href={item.link}
              aria-label={item.title}
              className="hover:bg-primary/5 flex w-full items-center gap-3 px-8 py-3"
              onClick={onItemClick}
            >
              {item.title}
            </Link>
          </animated.li>
        )
      })}
    </ul>
  )
}
