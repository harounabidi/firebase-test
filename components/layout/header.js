"use client"

import { useState } from "react"
import Navbar from "./navbar"
import Menu from "./nav-menu"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 inset-x-0 bg-background border-stone-200 z-50 w-full px-6 lg:px-36 max-md:border-b'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu open={menuOpen} setOpen={setMenuOpen} />
    </header>
  )
}
