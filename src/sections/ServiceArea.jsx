import { motion } from 'framer-motion'

function ServiceArea() {
  return (
    <section
      id="service-area"
      className="relative overflow-hidden bg-[#050505] px-5 py-14 text-white sm:px-8 lg:px-10"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 text-center backdrop-blur-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#EF4444]">
          Serving Across Navi Mumbai
        </p>
        <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-white/56 sm:text-base">
          Nerul, Seawoods, Belapur, CBD Belapur, Vashi, Kharghar, Sanpada,
          Juinagar and Navi Mumbai.
        </p>
      </motion.div>
    </section>
  )
}

export default ServiceArea
