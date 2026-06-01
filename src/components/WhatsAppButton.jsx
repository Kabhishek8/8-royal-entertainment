import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const whatsAppUrl = 'https://wa.me/917977309533'

function WhatsAppButton() {
  return (
    <motion.a
      href={whatsAppUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with 8 Royal Entertainment on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, -7, 0] }}
      transition={{
        scale: { duration: 0.45, ease: 'easeOut', delay: 0.8 },
        opacity: { duration: 0.45, ease: 'easeOut', delay: 0.8 },
        y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
      }}
      className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_0_8px_rgba(37,211,102,0.12),0_18px_50px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#20bd5a] sm:flex"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping" />
      <MessageCircle size={30} className="relative" />
    </motion.a>
  )
}

export default WhatsAppButton
