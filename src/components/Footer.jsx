const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function InstagramIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

function YoutubeIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2.9 2.9 0 0 1 2.05-2.05 49.3 49.3 0 0 1 14.9 0A2.9 2.9 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2.9 2.9 0 0 1-2.05 2.05 49.3 49.3 0 0 1-14.9 0A2.9 2.9 0 0 1 2.5 17z" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/royal_entertainments_official?igsh=MTFlNzVzOWRkN2ppYg==',
    icon: InstagramIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@ROYALENTERTAINMENTDANCES-ff3ib',
    icon: YoutubeIcon,
  },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-5 pb-28 pt-16 text-white sm:px-8 sm:pb-10 lg:px-10">
      <div className="absolute left-[-10%] top-0 h-80 w-80 rounded-full bg-[#E11D48]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-black uppercase leading-none tracking-[-0.05em] sm:text-3xl">
            8 Royal Entertainment Dance Studio
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/58">
            Premium dance training, wedding choreography, and live entertainment from
            Nerul, Navi Mumbai.
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-[#EF4444]">
            Nerul, Navi Mumbai
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">
            Quick Links
          </p>
          <div className="mt-5 grid gap-3">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/65 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/45">
            Social Links
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-[#E11D48]/50 hover:bg-[#E11D48] hover:text-white"
                >
                  <Icon size={19} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6">
        <p className="text-xs font-medium text-white/42">
          © 2025 8 Royal Entertainment. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
