import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const whatsAppUrl = 'https://wa.me/917977309533'

function MobileStickyCTA() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: 0.6 }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#050505]/92 px-4 py-3 shadow-[0_-18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:hidden"
    >
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={scrollToContact}
          className="rounded-full bg-[#E11D48] px-4 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_12px_34px_rgba(225,29,72,0.32)]"
          aria-label="Scroll to contact section to join classes"
        >
          Join Classes
        </button>
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 px-4 py-4 text-xs font-black uppercase tracking-[0.2em] text-white"
          aria-label="Open WhatsApp chat with 8 Royal Entertainment"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </motion.div>
  )
}

export default MobileStickyCTA
