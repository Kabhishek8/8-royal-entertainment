import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../assets/logo/8red.png'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/70 backdrop-blur-2xl"
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="group flex min-w-0 flex-1 items-center gap-3 sm:flex-none"
          aria-label="8 Royal Entertainment dance studio home"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 shadow-[0_0_40px_rgba(225,29,72,0.25)] transition duration-300 group-hover:border-[#E11D48]/60">
            <img src={logo} alt="8 Royal Entertainment daance studio" className="h-11 w-11 object-contain" />
          </span>
          <span className="min-w-0 leading-none sm:hidden">
            <span className="block truncate text-xs font-bold uppercase tracking-[0.24em] text-white">
              8 Royal Entertainment
            </span>
            <span className="mt-1 block truncate text-[10px] uppercase tracking-[0.22em] text-white/60">
              Dance Studio
            </span>
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-white">
              8 Royal Entertainment 
            </span>
            <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.36em] text-white/50">
              Dance studio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.22em] text-white/65 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white/80 transition hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
          >
            Enquire
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border-t border-white/10 bg-[#050505]/95 px-5 py-5 backdrop-blur-2xl md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/75 transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#programs"
              className="mt-2 rounded-2xl bg-[#E11D48] px-4 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-white shadow-[0_0_36px_rgba(225,29,72,0.34)] transition hover:bg-[#EF4444]"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar
