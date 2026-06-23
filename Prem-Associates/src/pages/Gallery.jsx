import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Seo from '../seo/Seo'
import { localBusinessSchema } from '../utils/schema'
import MiniHero from '../components/MiniHero/MiniHero'
import { HiX, HiZoomIn } from 'react-icons/hi'

const galleryImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80',
    title: 'Luxury Villa Exterior',
    category: 'Villas',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1000&q=80',
    title: 'Modern Living Room',
    category: 'Interiors',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=80',
    title: 'Prime Commercial Plot',
    category: 'Commercial',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=1000&q=80',
    title: 'Residential Sector View',
    category: 'Residential',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80',
    title: 'Premium Penthouse',
    category: 'Villas',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80',
    title: 'Modern Office Lobby',
    category: 'Commercial',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=80',
    title: 'Designer Kitchen Area',
    category: 'Interiors',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80',
    title: 'Luxury Villa Swimming Pool',
    category: 'Villas',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1000&q=80',
    title: 'Strategic Development Plot',
    category: 'Residential',
  },
]

const categories = ['All', 'Villas', 'Residential', 'Commercial', 'Interiors']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImg, setSelectedImg] = useState(null)

  const filtered = galleryImages.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  )

  return (
    <>
      <Seo
        title="Gallery of Premium Properties | Prem Associates Faridabad"
        description="Browse high-resolution photographs of residential plots, luxury villas, commercial spaces, and farm houses listed with Prem Associates in Sector 85 Faridabad."
        canonical="https://premassociates.in/gallery"
        schema={localBusinessSchema}
      />

      <MiniHero
        subtitle="Visual Showcase"
        title="Luxury Properties Gallery"
        breadcrumb={['Home', 'Gallery']}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
      />

      {/* Gallery Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          {/* Category Filter Bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-dark-700 text-gray-400 hover:bg-dark-600 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-item group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-white/5"
                  onClick={() => setSelectedImg(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-img w-full h-full object-cover transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Dark overlay & Zoom button */}
                  <div className="gallery-overlay absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <HiZoomIn />
                    </div>
                    <span className="text-primary-500 font-bold text-xs uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox / Modal Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedImg(null)}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl transition-colors duration-300 z-50"
              aria-label="Close Lightbox"
            >
              <HiX />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[80vh] mx-4 overflow-hidden rounded-2xl border border-white/10 bg-dark-800"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImg.image}
                alt={selectedImg.title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="p-4 bg-dark-800 border-t border-white/5 flex justify-between items-center">
                <h3 className="font-display text-lg font-bold text-white">
                  {selectedImg.title}
                </h3>
                <span className="bg-primary-600/20 text-primary-400 text-xs font-bold px-3 py-1 rounded-lg uppercase">
                  {selectedImg.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
