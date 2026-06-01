import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import heroVideo from '../assets/videos/asht-cinematic.mp4'

const trustStats = [
  { value: '1600+', label: 'Students Trained' },
  { value: '500+', label: 'Performances' },
  { value: '100+', label: 'Events' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: 'easeOut' },
  },
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen overflow-hidden bg-[#050505] text-white"
      aria-label="8 Royal Entertainment Dance Studio hero section"
    >
      <motion.video
        initial={{ scale: 1.06 }}
        animate={{ scale: 1.14 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-20 bg-[#050505]/70" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_28%,rgba(225,29,72,0.32),transparent_34%),radial-gradient(circle_at_78%_42%,rgba(239,68,68,0.2),transparent_30%),linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.76)_42%,rgba(5,5,5,0.42)_100%)]" />
      <motion.div
        animate={{
          opacity: [0.35, 0.7, 0.35],
          x: ['-8%', '8%', '-8%'],
          y: ['0%', '4%', '0%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-10%] top-[18%] -z-10 h-72 w-72 rounded-full bg-[#E11D48]/25 blur-3xl sm:h-96 sm:w-96"
      />
      <motion.div
        animate={{ opacity: [0.18, 0.42, 0.18], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-8%] top-[12%] -z-10 h-80 w-80 rounded-full bg-[#EF4444]/18 blur-3xl"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.06)_42%,transparent_58%)] opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10"
      >
        <div className="max-w-5xl">
          <motion.p
            variants={itemVariants}
            className="mb-5 inline-flex rounded-full border border-[#E11D48]/40 bg-[#E11D48]/10 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.32em] text-rose-100 shadow-[0_0_35px_rgba(225,29,72,0.18)] sm:text-xs"
          >
            Navi Mumbai&apos;s Premium Dance &amp; Performance Company
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.085em] text-white sm:text-6xl md:text-8xl lg:text-9xl"
          >
            <span className="block">Transform Passion</span>
            <span className="block bg-gradient-to-r from-white via-white to-rose-200 bg-clip-text text-transparent drop-shadow-[0_0_38px_rgba(225,29,72,0.28)]">
              Into Performance
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-3xl text-base font-semibold leading-8 text-white/76 sm:text-lg md:text-2xl"
          >
            Professional Dance Training • Wedding Choreography • Professional shooting &amp; Event Performances
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#programs"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E11D48] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-white shadow-[0_18px_60px_rgba(225,29,72,0.38)] transition hover:-translate-y-0.5 hover:bg-[#EF4444]"
            >
              Join Classes
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            >
              Book Choreography
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 grid max-w-3xl grid-cols-3 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md"
          >
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-white/10 px-3 py-5 last:border-r-0 sm:px-6"
              >
                <p className="text-2xl font-black tracking-[-0.06em] text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/50 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
        className="absolute bottom-1 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-white/50 sm:flex"
        aria-label="Scroll to about section"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5"
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero
