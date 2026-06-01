import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Award, Flame, Sparkles, Trophy } from 'lucide-react'
import { useEffect, useRef } from 'react'

const achievements = [
  {
    value: 1600,
    suffix: '+',
    label: 'Students Trained',
    icon: Flame,
  },
  {
    value: 500,
    suffix: '+',
    label: 'Live Performances',
    icon: Trophy,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Events Covered',
    icon: Sparkles,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years Of Excellence',
    icon: Award,
  },
]

const cardVariants = {
  hidden: { y: 36, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const count = useMotionValue(0)
  const spring = useSpring(count, { duration: 1800, bounce: 0 })
  const rounded = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`)

  useEffect(() => {
    if (isInView) {
      count.set(value)
    }
  }, [count, isInView, value])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute left-[-10%] top-12 h-96 w-96 rounded-full bg-[#E11D48]/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-8%] h-96 w-96 rounded-full bg-[#EF4444]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#EF4444]">
            Achievements
          </p>
          <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl lg:text-7xl">
            Numbers that move with the same intensity as our stage.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon

            return (
              <motion.article
                key={achievement.label}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-sm transition hover:-translate-y-2 hover:border-[#E11D48]/40 hover:bg-white/[0.055]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(225,29,72,0.24),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-10 grid h-13 w-13 place-items-center rounded-2xl border border-[#E11D48]/30 bg-[#E11D48]/12 text-[#EF4444] shadow-[0_0_30px_rgba(225,29,72,0.18)]">
                    <Icon size={24} />
                  </div>
                  <p className="text-5xl font-black tracking-[-0.08em] text-white sm:text-6xl lg:text-5xl xl:text-6xl">
                    <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-white/52">
                    {achievement.label}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
