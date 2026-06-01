import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'

const googleMapsUrl =
  'https://maps.google.com/?q=Royal+Entertainment+Dance+Studio+art+%26+activity'

const googleMapsEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5622.912860923333!2d73.01300601210312!3d19.040604853005803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c30e395eff55%3A0xc5784b36282ae90f!2sRoyal%20Entertainment%20Dance%20Studio%20art%20%26%20activity!5e1!3m2!1sen!2sin!4v1780221163319!5m2!1sen!2sin'

function MapSection() {
  return (
    <section
      id="map"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-[#E11D48]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#EF4444]">
            Find Us
          </p>
          <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl lg:text-7xl">
            Visit our studio in Nerul, Navi Mumbai.
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 34, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-4"
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#050505]">
            <iframe
              src={googleMapsEmbedUrl}
              title="Royal Entertainment Dance Studio location on Google Maps"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full border-0 grayscale-[0.25] sm:h-[450px]"
            />
          </div>

          <div className="flex flex-col gap-4 px-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-4">
            <div className="flex items-center gap-3 text-white/62">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#E11D48]/15 text-[#EF4444]">
                <MapPin size={20} />
              </span>
              <p className="text-sm font-bold uppercase tracking-[0.2em]">
                Royal Entertainment Dance Studio art & activity
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E11D48] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-white shadow-[0_18px_60px_rgba(225,29,72,0.34)] transition hover:-translate-y-0.5 hover:bg-[#EF4444]"
            >
              Open in Google Maps
              <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MapSection
