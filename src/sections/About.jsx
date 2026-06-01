import { motion } from 'framer-motion'
import { MapPin, Music2, Sparkles } from 'lucide-react'
import aboutImage from '../assets/images/about-image.png'

const highlights = [
  {
    icon: Music2,
    title: 'Performance First',
    description: 'Every session is shaped to build stage confidence, musicality, and presence.',
  },
  {
    icon: Sparkles,
    title: 'Creative Discipline',
    description: 'Technique, timing, and expression come together through focused training.',
  },
  {
    icon: MapPin,
    title: 'Nerul, Navi Mumbai',
    description: 'A local studio with the energy and polish of a premium entertainment brand.',
  },
]

const fadeUp = {
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#E11D48]/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#EF4444]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#EF4444]">
            About 8 Royal Entertainment Dance Studio
          </p>

          <h2 className="max-w-3xl text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Built for dancers who want more than steps.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-white/68 sm:text-lg">
            <p>
              8 Royal Entertainment Dance Studio is a professional dance academy,
              wedding choreography company, and live performance team based in Nerul,
              Navi Mumbai.
            </p>
            <p>
              The studio is driven by passion, discipline, creativity, and the rush of
              live performance. From first-time learners to stage-ready performers, we
              train dancers to move with confidence, precision, and personality.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-[#E11D48]/40 hover:bg-white/[0.05]"
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-[#E11D48]/15 text-[#EF4444]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{item.description}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:min-h-[520px]"
        >
          <img
            src={aboutImage}
            alt="8 Royal Entertainment dance studio"
            className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-[1.5rem] object-cover"
          />
          <div className="absolute inset-4 rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(5,5,5,0.08)_0%,rgba(5,5,5,0.18)_42%,rgba(5,5,5,0.82)_100%),radial-gradient(circle_at_70%_18%,rgba(225,29,72,0.22),transparent_34%)]" />
          <div className="absolute bottom-9 left-9 right-9 rounded-3xl border border-white/10 bg-[#050505]/70 p-6 backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#EF4444]">
              ASHT 2K26
            </p>
           
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
