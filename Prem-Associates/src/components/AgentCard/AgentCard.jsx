import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function AgentCard({ agent, index = 0 }) {
  const { name, role, image, phone, email, properties } = agent

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="card-glass p-6 rounded-2xl text-center group hover:border-primary-500/30 transition-all duration-500"
    >
      <div className="relative w-20 h-20 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-dark-700" />
      </div>
      <h3 className="font-display text-lg font-semibold text-white mb-1">{name}</h3>
      <p className="text-primary-400 text-sm mb-1">{role}</p>
      {properties && (
        <p className="text-gray-500 text-xs mb-4">{properties}+ Properties</p>
      )}
      <div className="flex justify-center gap-3">
        <a
          href={`tel:${phone}`}
          className="w-9 h-9 rounded-xl bg-primary-600/10 hover:bg-primary-600 flex items-center justify-center text-primary-500 hover:text-white transition-all duration-300"
          aria-label="Call agent"
        >
          <FaPhone className="text-sm" />
        </a>
        <a
          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-xl bg-green-600/10 hover:bg-green-600 flex items-center justify-center text-green-500 hover:text-white transition-all duration-300"
          aria-label="WhatsApp agent"
        >
          <FaWhatsapp />
        </a>
        {email && (
          <a
            href={`mailto:${email}`}
            className="w-9 h-9 rounded-xl bg-blue-600/10 hover:bg-blue-600 flex items-center justify-center text-blue-400 hover:text-white transition-all duration-300"
            aria-label="Email agent"
          >
            <HiMail />
          </a>
        )}
      </div>
    </motion.div>
  )
}
