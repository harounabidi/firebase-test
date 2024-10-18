"use client"

import { useState } from "react"
import Navbar from "./navbar"
import Menu from "./nav-menu"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className='w-full bg-background px-4'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu open={menuOpen} setOpen={setMenuOpen} />
    </header>
  )
}
