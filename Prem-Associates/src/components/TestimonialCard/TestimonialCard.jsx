import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialCard({ testimonial, index = 0 }) {
  const { name, location, review, rating, avatar } = testimonial

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glass p-7 rounded-2xl relative hover:border-primary-500/20 transition-all duration-500"
    >
      <FaQuoteLeft className="text-primary-600/30 text-4xl absolute top-5 right-5" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <HiStar key={i} className="text-gold-400 text-lg" />
        ))}
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
        "{review}"
      </p>

      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-11 h-11 rounded-full object-cover border-2 border-primary-500/30"
        />
        <div>
          <p className="font-semibold text-white text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{location}</p>
        </div>
      </div>
    </motion.div>
  )
}
