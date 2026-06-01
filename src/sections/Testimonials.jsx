import { motion } from 'framer-motion'
import { ArrowUpRight, Quote, Star } from 'lucide-react'

const googleReviewsUrl = '#'

const testimonials = [
  {
    type: 'Student Review',
    name: 'Real Student',
    quote:
      'The training environment is energetic, professional, and extremely motivating. Every session pushes us to improve and perform with confidence.',
  },
  {
    type: 'Parent Review',
    name: 'Real Parent',
    quote:
      'Our daughter has gained confidence, discipline, and amazing stage presence after joining 8 Royal.',
  },
  {
    type: 'Event Client Review',
    name: 'Real Event Client',
    quote:
      '8 Royal delivered an incredible performance for our event. Professional, energetic, and highly recommended.',
  },
]

const cardVariants = {
  hidden: { y: 34, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute left-[-12%] top-24 h-96 w-96 rounded-full bg-[#E11D48]/10 blur-3xl" />
      <div className="absolute right-[-10%] bottom-10 h-96 w-96 rounded-full bg-[#EF4444]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#EF4444]">
            Testimonials
          </p>
          <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl lg:text-7xl">
            Trusted by dancers, families, and event clients.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">
            Real feedback from people who have trained, celebrated, and performed with
            8 Royal Entertainment dance studio.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.type}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-sm transition hover:-translate-y-2 hover:border-[#E11D48]/40 hover:bg-white/[0.055]"
            >
              <div className="absolute -right-6 -top-6 text-[9rem] font-black leading-none text-white/[0.035] transition group-hover:text-[#E11D48]/10">
                <Quote size={120} />
              </div>
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#EF4444]">
                  {testimonial.type}
                </p>
                <p className="mt-8 text-lg font-medium leading-8 text-white/78">
                  “{testimonial.quote}”
                </p>
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    {testimonial.name}
                  </p>
                  <div className="flex text-[#EF4444]" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={15} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 34, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_18%_24%,rgba(225,29,72,0.2),transparent_32%),rgba(255,255,255,0.035)] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#EF4444]">
                Google Reviews
              </p>
              <div className="mt-4 flex flex-wrap items-end gap-4">
                <p className="text-6xl font-black tracking-[-0.08em] text-white sm:text-7xl">
                  4.9★
                </p>
                <div className="pb-2">
                  <div className="mb-2 flex text-[#EF4444]" aria-label="4.9 star rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/55">
                    Average Rating Based on Google Reviews
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/raRLajgg5uXL5iWcA"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E11D48] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-white shadow-[0_18px_60px_rgba(225,29,72,0.34)] transition hover:-translate-y-0.5 hover:bg-[#EF4444]"
            >
              View Google Reviews
              <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
