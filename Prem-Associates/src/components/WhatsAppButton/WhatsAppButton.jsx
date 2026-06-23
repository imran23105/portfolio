import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phoneNumber = '919990713111'
  const message = 'Hello Prem Associates, I am interested in property consulting / plots sale.'
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-2xl hover:bg-green-600 transition-colors duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact Prem Associates on WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30 group-hover:hidden" />

      {/* Tooltip */}
      <span className="absolute right-16 bg-dark-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl border border-white/5 pointer-events-none">
        Chat on WhatsApp
      </span>

      <FaWhatsapp className="text-3xl" />
    </motion.a>
  )
}
