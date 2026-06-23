import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiLocationMarker, HiHome, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { MdBathtub, MdKingBed, MdSquareFoot } from 'react-icons/md'
import { FiExternalLink } from 'react-icons/fi'

export default function PropertyCard({ property, index = 0 }) {
  const {
    image,
    title,
    price,
    area,
    location,
    bedrooms,
    bathrooms,
    type,
    badge,
  } = property

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="property-card group card-glass overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:shadow-luxury"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 md:h-52">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="property-img w-full h-full object-cover transition-transform duration-700"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {badge && (
            <span className="bg-primary-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
              {badge}
            </span>
          )}
          <span className="bg-dark-800/80 backdrop-blur-sm text-gray-300 text-xs px-2.5 py-1 rounded-lg">
            {type}
          </span>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
          <Link
            to="/properties"
            className="flex items-center gap-2 text-white text-sm font-medium"
          >
            View Details <FiExternalLink />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-white text-lg leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-primary-400 font-bold text-base whitespace-nowrap">
            {price}
          </p>
        </div>

        <p className="flex items-center gap-1 text-gray-400 text-sm mb-4">
          <HiLocationMarker className="text-primary-500 shrink-0" />
          {location}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-400 border-t border-white/5 pt-4">
          {area && (
            <span className="flex items-center gap-1">
              <MdSquareFoot className="text-primary-500" />
              {area}
            </span>
          )}
          {bedrooms && (
            <span className="flex items-center gap-1">
              <MdKingBed className="text-primary-500" />
              {bedrooms} Bed
            </span>
          )}
          {bathrooms && (
            <span className="flex items-center gap-1">
              <MdBathtub className="text-primary-500" />
              {bathrooms} Bath
            </span>
          )}
          <Link
            to="/properties"
            className="ml-auto flex items-center gap-1 text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300"
          >
            Details <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
