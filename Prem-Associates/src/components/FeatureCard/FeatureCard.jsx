import { motion } from 'framer-motion'

export default function FeatureCard({ icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="card-glass p-7 rounded-2xl group hover:border-primary-500/30 transition-all duration-500 cursor-default"
    >
      <div className="w-14 h-14 bg-primary-600/10 border border-primary-500/20 rounded-2xl flex items-center justify-center text-primary-500 text-2xl mb-5 group-hover:bg-primary-600/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}
