import { motion } from 'framer-motion'
import { Camera, ArrowUpRight } from 'lucide-react'
import celebrityImage from'../assets/images/abhishek-sir-with-emiway.jpg'
import classImage from '../assets/images/DSC02535.JPG'
import performanceImage from '../assets/images/DSC02654.JPG'
import competitionImage from '../assets/images/DSC02735.JPG'
import weddingImage from '../assets/images/DSC03535.JPG'
import eventImage from '../assets/images/DSC03710.JPG'
import rehearsalImage from '../assets/images/DSC04008.JPG'
import winnerImage from '../assets/images/DSC04531.JPG'

const galleryItems = [ 
  {
    title: 'EMIWAY from Bantai records',
    category: 'Video song shoot',
    image: celebrityImage,
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Stage Energy',
    category: 'ASHT 2K25',
    image: classImage,
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Live Stage Moments',
    category: 'competitions',
    image: performanceImage,
    className: '',
  },
  {
    title: 'Competition Presence',
    category: 'Competitions',
    image: competitionImage,
    className: '',
  },
  {
    title: 'kids stage performance',
    category: 'ASHT 2K25',
    image: weddingImage,
    className: 'md:col-span-2',
  },
  {
    title: '8reds studentsS',
    category: 'asht 2k25',
    image: eventImage,
    className: '',
  },
  {
    title: 'asht participants on stage',
    category: 'ASHT 2k25',
    image: rehearsalImage,
    className: '',
  },
  {
    title: 'asht winners',
    category: 'ASHT 2k25',
    image: winnerImage,
    className: '',
  },
]

const revealVariants = {
  hidden: { y: 36, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}            

function GalleryCard({ item }) {
  return (
    <motion.article
      variants={revealVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
      className={`group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_24px_80px_rgba(0,0,0,0.32)] ${item.className}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover opacity-72 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(225,29,72,0.22),transparent_36%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#050505]/55 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/78 backdrop-blur-md">
          <Camera size={14} className="text-[#EF4444]" />
          {item.category}
        </div>
        <div className="flex items-end justify-between gap-4">
          <h3 className="max-w-sm text-2xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-3xl">
            {item.title}
          </h3>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition group-hover:border-[#E11D48]/60 group-hover:bg-[#E11D48]">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </motion.article>
  )
}

function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute right-[-12%] top-20 h-96 w-96 rounded-full bg-[#E11D48]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#EF4444]">
              Gallery
            </p>
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl lg:text-7xl">
              A visual portfolio of movement, moments, and stage power.
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-14 grid auto-rows-[320px] gap-5 md:grid-cols-4"
        >
          {galleryItems.map((item) => (
            <GalleryCard key={`${item.category}-${item.title}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
