import { motion } from 'framer-motion'
import { Clapperboard, Gem, UsersRound } from 'lucide-react'

const programs = [
  {
    icon: UsersRound,
    title: 'Dance Classes',
    description: 'High-energy training programs for dancers who want style, stamina, and stage-ready confidence.',
    items: ['Hip Hop', 'Bollywood', 'Locking', 'Popping', 'Tollywood', 'Freestyle'],
  },
  {
    icon: Gem,
    title: 'Wedding Choreography',
    description: 'Premium choreography for unforgettable wedding celebrations, from intimate couple entries to full family acts.',
    items: ['Couple Performances', 'Family Performances', 'Sangeet Choreography'],
  },
  {
    icon: Clapperboard,
    title: 'Live Entertainment',
    description: 'Professional performance direction and dance acts crafted for stages, brands, and cultural celebrations.',
    items: ['Stage Shows', 'Corporate Events', 'Cultural Events'],
  },
]

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { y: 34, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#E11D48]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#EF4444]">
            Programs
          </p>
          <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Training, choreography, and entertainment with royal impact.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">
            Choose a path built for movement, memories, and the kind of performance
            energy people remember.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {programs.map((program, index) => {
            const Icon = program.icon

            return (
              <motion.article
                key={program.title}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(225,29,72,0.22),transparent_38%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#E11D48]/30 bg-[#E11D48]/12 text-[#EF4444] shadow-[0_0_30px_rgba(225,29,72,0.2)]">
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-black tracking-[0.2em] text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-black uppercase tracking-[-0.04em] text-white">
                    {program.title}
                  </h3>
                  <p className="mt-4 min-h-24 text-sm leading-7 text-white/58">
                    {program.description}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {program.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Programs
