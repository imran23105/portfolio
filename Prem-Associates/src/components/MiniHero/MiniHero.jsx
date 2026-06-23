import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function MiniHero({ title, subtitle, breadcrumb = [], bgImage }) {
  return (
    <section
      className="relative min-h-[280px] md:min-h-[340px] flex items-end pb-10 md:pb-14 overflow-hidden"
      style={{
        backgroundImage: bgImage
          ? `url(${bgImage})`
          : 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900 to-transparent" />

      <div className="relative z-10 container-custom w-full pt-28">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-3"
            aria-label="Breadcrumb"
          >
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-600">›</span>}
                <span className={i === breadcrumb.length - 1 ? 'text-primary-400' : ''}>
                  {item}
                </span>
              </span>
            ))}
          </motion.nav>
        )}

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="section-subtitle mb-2"
        >
          {subtitle}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="section-title text-shadow-lg max-w-2xl"
        >
          {title}
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full mt-4"
        />
      </div>
    </section>
  )
}
