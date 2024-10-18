"use client"

import { useState } from "react"

export default function Hamberger(props) {
  const { color, toggle, toggled, duration } = props

  const [isToggledInternal, toggleInternal] = useState(false)

  const isToggled = toggle ?? isToggledInternal
  const setToggled = toggled ?? toggleInternal

  const line = {
    transformOrigin: "center",
    transitionDuration: `${duration ?? 0.8}s`,
  }

  const top_line = {
    transform: "rotate(45deg) translate(0px, 5px)",
  }

  const middle_line = {
    transform: "translate(-20px, 0px)",
  }

  const bottom_line = {
    transform: "rotate(-45deg) translate(0px, -5px)",
  }

  return (
    <svg
      width={props.size ?? "2em"}
      height={props.size ?? "2em"}
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 24 24'
      fill={props.color ?? "currentColor"}
      className={props.className}
      onClick={() => setToggled(!isToggled)}>
      <g
        fill='none'
        stroke={color ?? "currentColor"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'>
        <path style={isToggled ? { ...line, ...top_line } : line} d='M5 7h14' />
        <path
          style={isToggled ? { ...line, ...middle_line } : line}
          d='M5 12h14'
        />
        <path
          style={isToggled ? { ...line, ...bottom_line } : line}
          d='M5 17h14'
        />
      </g>
    </svg>
  )
}
