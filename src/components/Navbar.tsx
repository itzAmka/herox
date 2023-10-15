'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav
      className={`max-w-6xl mx-auto px-4 py-4 flex gap-12 items-center justify-between relative z-40 ${
        menuOpen ? '' : 'overflow-hidden'
      }`}
    >
      <div className="flex gap-12 items-center">
        <h1 className="text-xl font-bold">
          <a href="/">Herox</a>
        </h1>

        <ul
          className={`flex md:flex-row flex-col gap-12 md:static absolute top-20 right-0 md:p-0 py-4 px-6 md:shadow-none shadow-lg transition-all ${
            menuOpen ? '' : '-right-full invisible'
          }`}
        >
          <li>
            <Link href="#services" className="text-accent" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="text-accent"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#contact-us"
              className="text-accent"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="#about-us" className="text-accent" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-12">
        <button className="bg-primary text-white text-sm py-3 px-6 rounded-full transition-all hover:brightness-75">
          Register / Login
        </button>
        <button className="md:hidden block relative" onClick={toggleMenu}>
          <span className="flex flex-col gap-1">
            <span
              className={`bg-black h-1 w-8 transition-all ${
                menuOpen
                  ? 'bg-primary translate-y-2 -translate-x-0 rotate-[40deg]'
                  : ''
              }`}
            ></span>
            <span
              className={`bg-black h-1 w-8 transition-all ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`bg-black h-1 w-8 transition-all ${
                menuOpen
                  ? '-translate-y-[7px] translate-x-0 rotate-[130deg]'
                  : ''
              }`}
            ></span>
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
