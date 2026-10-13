"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#testimonials", label: "Testimonials" },
]

export function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6"
      >
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-white">
          Keerthi
          <span className="bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            .dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-md font-semibold text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me Button */}
        <Link
          href="/#contact"
          className="hidden rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 px-5 py-2 text-md font-semibold text-white transition hover:opacity-90 md:inline-block"
        >
          Hire Me
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-md p-2 text-slate-200 hover:bg-white/10 md:hidden"
        >
          {open ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}

          <span className="sr-only">
            {open ? "Close menu" : "Open menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-slate-950 md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Mobile Hire Me Button */}
            <li className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 px-3 py-2 text-center font-medium text-white"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
