import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import { localBusinessSchema } from '../utils/schema'
import Hero from '../components/Hero/Hero'
import PropertyCard from '../components/PropertyCard/PropertyCard'
import FeatureCard from '../components/FeatureCard/FeatureCard'
import TestimonialCard from '../components/TestimonialCard/TestimonialCard'
import {
  MdVerified, MdGavel, MdTrendingUp, MdSupportAgent,
  MdApartment, MdVilla, MdStorefront, MdLandscape, MdCottage,
  MdHome, MdMonetizationOn, MdLocationOn, MdBusinessCenter,
  MdPhone
} from 'react-icons/md'
import { HiOfficeBuilding, HiOutlineArrowNarrowRight, HiOutlineExternalLink } from 'react-icons/hi'
import { FaAward, FaWhatsapp } from 'react-icons/fa'
import { allProperties } from '../utils/propertiesData'

const featuredProperties = allProperties.filter(p => 
  p.badge === 'Featured' || 
  p.badge === 'New Launch' || 
  p.badge === 'Premium' || 
  p.badge === 'Best Seller'
).slice(0, 6)

const propertyTypes = [
  { icon: <MdApartment />, label: 'Apartment', count: '50+' },
  { icon: <MdVilla />, label: 'Villa', count: '30+' },
  { icon: <MdLandscape />, label: 'Residential Plot', count: '200+' },
  { icon: <MdStorefront />, label: 'Commercial Plot', count: '80+' },
  { icon: <HiOfficeBuilding />, label: 'Office Space', count: '40+' },
  { icon: <MdCottage />, label: 'Farm House', count: '15+' },
]

const features = [
  {
    icon: <MdVerified />,
    title: 'Verified Properties',
    description: 'Every property listed is thoroughly verified for legal compliance and authenticity.',
  },
  {
    icon: <MdSupportAgent />,
    title: 'Trusted Consultants',
    description: 'Our experienced team provides honest, transparent guidance through every step.',
  },
  {
    icon: <FaAward />,
    title: 'Affordable Pricing',
    description: 'We negotiate the best deals, ensuring maximum value for your investment.',
  },
  {
    icon: <MdGavel />,
    title: 'Legal Assistance',
    description: 'Complete legal support including documentation, registration and title verification.',
  },
  {
    icon: <MdTrendingUp />,
    title: 'Best Investment',
    description: 'Strategic locations with high appreciation potential for smart investors.',
  },
  {
    icon: <HiOutlineArrowNarrowRight />,
    title: '30+ Years Experience',
    description: 'Over three decades of serving clients in Faridabad with dedication and expertise.',
  },
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Sector 85, Faridabad',
    review: 'Prem Associates helped me find the perfect plot in Sector 85. The process was completely transparent and hassle-free. Highly recommended!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
  {
    name: 'Sunita Sharma',
    location: 'Faridabad, Haryana',
    review: 'I sold my property through Prem Associates and got the best price in the market. Their team is professional and trustworthy.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=5',
  },
  {
    name: 'Amit Verma',
    location: 'Greater Faridabad',
    review: 'The legal support they provided was exceptional. Every document was handled perfectly. Will definitely use their services again!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/80?img=3',
  },
]

// ─── Animated Counter ─────────────────────────────────────────────────────────

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = parseInt(target)
    const duration = 2000
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  )
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, description, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      <p className="section-subtitle mb-3">{eyebrow}</p>
      <h2 className="section-title mb-4">{title}</h2>
      {description && (
        <p className={`text-gray-400 max-w-2xl text-base leading-relaxed ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [matrixTab, setMatrixTab] = useState('flats')
  return (
    <>
      <Seo
        title="Prem Associates - Real Estate Consultant | Plots Sale in Sector 85 Faridabad"
        description="Buy and sell residential plots, commercial properties and homes with Prem Associates, trusted real estate consultant in Sector 85 Faridabad."
        canonical="https://premassociates.in/"
        schema={localBusinessSchema}
      />

      {/* ─── Hero ─── */}
      <Hero />

      {/* ─── Property Types ─── */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Try Searching For"
            title="Explore Property Types"
            description="From residential plots to luxury villas — find the perfect property type for your needs."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {propertyTypes.map(({ icon, label, count }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link
                  to="/properties"
                  className="flex flex-col items-center gap-3 p-5 card-glass rounded-2xl hover:border-primary-500/40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-4xl text-primary-500 group-hover:text-primary-400 transition-colors duration-300">
                    {icon}
                  </div>
                  <div className="text-center">
                    <p className="text-white font-medium text-sm leading-tight">{label}</p>
                    <p className="text-primary-500 text-xs mt-0.5">{count} Properties</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Properties ─── */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Handpicked For You"
              title="Featured Properties"
              description="Discover Faridabad's finest properties carefully curated for your dream home."
              center={false}
            />
            <Link to="/properties" className="btn-outline whitespace-nowrap shrink-0">
              View All <HiOutlineArrowNarrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing Matrix & Brands Section ─── */}
      <section className="section-padding bg-dark-800 relative overflow-hidden border-t border-b border-white/5">
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <SectionHeader
            eyebrow="Pricing Matrix"
            title="Configurations, Rentals & Brands"
            description="Explore flat prices, rental rates, plots, and major builder partnerships available with Prem Associates."
          />

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
            {[
              { id: 'flats', label: 'Flats & BHKs' },
              { id: 'rentals', label: 'Rent Options' },
              { id: 'plots', label: 'Land Plots (Sq.m)' },
              { id: 'builders', label: 'Partner Builders' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setMatrixTab(tab.id)}
                className={`px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  matrixTab === tab.id
                    ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105'
                    : 'bg-dark-700/80 border-white/5 text-gray-400 hover:text-white hover:bg-dark-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <AnimatePresence mode="wait">
            <motion.div
              key={matrixTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {matrixTab === 'flats' && (
                <>
                  {/* Card 1 */}
                  <div className="card-glass p-7 border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-between group hover:shadow-luxury">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-primary-600/20 text-primary-400 text-xs font-bold px-3 py-1.5 rounded-lg">1 BHK Flat</span>
                        <p className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">₹15L - ₹25L</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Comfortable, compact single-bedroom apartments ideal for individuals, young couples, or smart rental yield investments.
                      </p>
                      <ul className="space-y-2 mb-6 text-sm text-gray-300">
                        <li className="flex items-center gap-2">✔️ Typical Size: 550 - 700 sq.ft</li>
                        <li className="flex items-center gap-2">✔️ High Rental Yield Potential</li>
                        <li className="flex items-center gap-2">✔️ Available with Builder Floor options</li>
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/919990713111?text=Hi,%20I'm%20interested%20in%20a%201%20BHK%20flat%20budget%2015-25%20Lakh%20at%20Prem%20Associates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-xs py-3.5"
                    >
                      <FaWhatsapp className="text-base" /> Inquire on WhatsApp
                    </a>
                  </div>
                  {/* Card 2 */}
                  <div className="card-glass p-7 border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-between group hover:shadow-luxury">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-primary-600/20 text-primary-400 text-xs font-bold px-3 py-1.5 rounded-lg">2 BHK Flat</span>
                        <p className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">₹20L - ₹30L</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Spacious double-bedroom apartments optimized for small to medium families, with premium modular kitchens and balconies.
                      </p>
                      <ul className="space-y-2 mb-6 text-sm text-gray-300">
                        <li className="flex items-center gap-2">✔️ Typical Size: 900 - 1200 sq.ft</li>
                        <li className="flex items-center gap-2">✔️ Modern Modular layouts available</li>
                        <li className="flex items-center gap-2">✔️ Projects by Gaur, Ace, and Prateek</li>
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/919990713111?text=Hi,%20I'm%20interested%20in%20a%202%20BHK%20flat%20budget%2020-30%20Lakh%20at%20Prem%20Associates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-xs py-3.5"
                    >
                      <FaWhatsapp className="text-base" /> Inquire on WhatsApp
                    </a>
                  </div>
                  {/* Card 3 */}
                  <div className="card-glass p-7 border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-between group hover:shadow-luxury">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-primary-600/20 text-primary-400 text-xs font-bold px-3 py-1.5 rounded-lg">3 BHK Flat</span>
                        <p className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">₹35L - ₹60L</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Expansive luxury three-bedroom apartments offering modern bathrooms, ample natural light, high-end construction & premium club amenities.
                      </p>
                      <ul className="space-y-2 mb-6 text-sm text-gray-300">
                        <li className="flex items-center gap-2">✔️ Typical Size: 1350 - 1800 sq.ft</li>
                        <li className="flex items-center gap-2">✔️ Luxury amenities & multi-balconies</li>
                        <li className="flex items-center gap-2">✔️ Projects by Godrej, ATS, and Ace</li>
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/919990713111?text=Hi,%20I'm%20interested%20in%20a%203%20BHK%20flat%20budget%2035-60%20Lakh%20at%20Prem%20Associates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-xs py-3.5"
                    >
                      <FaWhatsapp className="text-base" /> Inquire on WhatsApp
                    </a>
                  </div>
                </>
              )}

              {matrixTab === 'rentals' && (
                <>
                  {/* Card 1 */}
                  <div className="card-glass p-7 border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-between group hover:shadow-luxury">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-primary-600/20 text-primary-400 text-xs font-bold px-3 py-1.5 rounded-lg">Budget Rent</span>
                        <p className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">10k - 18k / mo</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Perfect affordable options including 1 BHK and 2 BHK builder floors and apartments in popular residential hubs of Faridabad.
                      </p>
                      <ul className="space-y-2 mb-6 text-sm text-gray-300">
                        <li className="flex items-center gap-2">✔️ 1 BHK / 2 BHK Compact Floors</li>
                        <li className="flex items-center gap-2">✔️ Sector 85, 86, and 87 locations</li>
                        <li className="flex items-center gap-2">✔️ Standard fittings & amenities</li>
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/919990713111?text=Hi,%20I'm%20looking%20for%20rent%20properties%20budget%2010k-18k%20at%20Prem%20Associates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-xs py-3.5"
                    >
                      <FaWhatsapp className="text-base" /> Inquire on WhatsApp
                    </a>
                  </div>
                  {/* Card 2 */}
                  <div className="card-glass p-7 border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-between group hover:shadow-luxury">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-primary-600/20 text-primary-400 text-xs font-bold px-3 py-1.5 rounded-lg">Standard Rent</span>
                        <p className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">15k - 25k / mo</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Spacious semi-furnished 2 BHK & 3 BHK flats featuring standard club access, power backup, and gated security.
                      </p>
                      <ul className="space-y-2 mb-6 text-sm text-gray-300">
                        <li className="flex items-center gap-2">✔️ 2 BHK / 3 BHK Semi-Furnished</li>
                        <li className="flex items-center gap-2">✔️ High rise societies or builder floors</li>
                        <li className="flex items-center gap-2">✔️ Lift, parking & security included</li>
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/919990713111?text=Hi,%20I'm%20looking%20for%20rent%20properties%20budget%2015k-25k%20at%20Prem%20Associates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-xs py-3.5"
                    >
                      <FaWhatsapp className="text-base" /> Inquire on WhatsApp
                    </a>
                  </div>
                  {/* Card 3 */}
                  <div className="card-glass p-7 border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-between group hover:shadow-luxury">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-primary-600/20 text-primary-400 text-xs font-bold px-3 py-1.5 rounded-lg">Premium Rent</span>
                        <p className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">20k - 30k / mo</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        High-end fully furnished 3 BHK apartments or luxury independent builder floors in Sector 85 with all modern amenities.
                      </p>
                      <ul className="space-y-2 mb-6 text-sm text-gray-300">
                        <li className="flex items-center gap-2">✔️ Fully Furnished luxury floor/apartment</li>
                        <li className="flex items-center gap-2">✔️ Complete modular setups, wardrobes, ACs</li>
                        <li className="flex items-center gap-2">✔️ Gated premium communities</li>
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/919990713111?text=Hi,%20I'm%20looking%20for%20rent%20properties%20budget%2020k-30k%20at%20Prem%20Associates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-xs py-3.5"
                    >
                      <FaWhatsapp className="text-base" /> Inquire on WhatsApp
                    </a>
                  </div>
                </>
              )}

              {matrixTab === 'plots' && (
                <>
                  {/* Card 1 */}
                  <div className="card-glass p-7 border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-between group hover:shadow-luxury">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-primary-600/20 text-primary-400 text-xs font-bold px-3 py-1.5 rounded-lg">Commercial Plot</span>
                        <p className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">Starts ₹4,000 / m</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Superbly situated commercial plots for shops, warehouses, offices, or IT startups in the fast-growing Sector 85 IT belt.
                      </p>
                      <ul className="space-y-2 mb-6 text-sm text-gray-300">
                        <li className="flex items-center gap-2">✔️ High visibility location</li>
                        <li className="flex items-center gap-2">✔️ RERA & legal authority cleared</li>
                        <li className="flex items-center gap-2">✔️ Easy commercial registry</li>
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/919990713111?text=Hi,%20I'm%20interested%20in%20a%20Commercial%20plot%20starting%204000/meter%20at%20Prem%20Associates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-xs py-3.5"
                    >
                      <FaWhatsapp className="text-base" /> Inquire on WhatsApp
                    </a>
                  </div>
                  {/* Card 2 */}
                  <div className="card-glass p-7 border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-between group hover:shadow-luxury">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-primary-600/20 text-primary-400 text-xs font-bold px-3 py-1.5 rounded-lg">Residential Plot</span>
                        <p className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">₹5k - ₹15k / m</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Premium plots inside peaceful gated communities with electricity, water supply, sewage networks, and wider paved roads.
                      </p>
                      <ul className="space-y-2 mb-6 text-sm text-gray-300">
                        <li className="flex items-center gap-2">✔️ Ready for home construction</li>
                        <li className="flex items-center gap-2">✔️ Gated community features</li>
                        <li className="flex items-center gap-2">✔️ Close proximity to schools & markets</li>
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/919990713111?text=Hi,%20I'm%20interested%20in%20a%20Residential%20plot%20budget%205000-15000/meter%20at%20Prem%20Associates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-xs py-3.5"
                    >
                      <FaWhatsapp className="text-base" /> Inquire on WhatsApp
                    </a>
                  </div>
                  {/* Card 3 */}
                  <div className="card-glass p-7 border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-between group hover:shadow-luxury">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-primary-600/20 text-primary-400 text-xs font-bold px-3 py-1.5 rounded-lg">Builder Floor Plotting</span>
                        <p className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">Flexible Options</p>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Custom builder floor opportunities where you own a specific floor on beautifully planned blocks. Dedicated registry support.
                      </p>
                      <ul className="space-y-2 mb-6 text-sm text-gray-300">
                        <li className="flex items-center gap-2">✔️ Independent lifestyle</li>
                        <li className="flex items-center gap-2">✔️ Separate water/electricity meters</li>
                        <li className="flex items-center gap-2">✔️ Dedicated car parking slots</li>
                      </ul>
                    </div>
                    <a
                      href="https://wa.me/919990713111?text=Hi,%20I'm%20interested%20in%20builder%20floor%20options%20at%20Prem%20Associates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-xs py-3.5"
                    >
                      <FaWhatsapp className="text-base" /> Inquire on WhatsApp
                    </a>
                  </div>
                </>
              )}

              {matrixTab === 'builders' && (
                <>
                  {[
                    { name: 'Godrej Properties', desc: 'Flagship premium luxury smart homes & green spaces.', label: 'Ultra Luxury' },
                    { name: 'Gaur Group', desc: 'Vast townships, residential projects with great infrastructure.', label: 'Modern Community' },
                    { name: 'ATS Group', desc: 'Green layouts, quality construction and stunning landscape.', label: 'High Appreciation' },
                    { name: 'Ace Group', desc: 'Aesthetic elevations, modern details and prime locations.', label: 'Top Design' },
                    { name: 'Prateek Group', desc: 'Smart layouts, standard amenities and high value.', label: 'Affordable Premium' },
                    { name: 'Builder Floors', desc: 'Independent floors with custom floor layouts and high privacy.', label: 'Independent' }
                  ].map(b => (
                    <div key={b.name} className="card-glass p-6 border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-between group hover:shadow-luxury">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-display font-semibold text-lg text-white group-hover:text-primary-400 transition-colors">{b.name}</h4>
                          <span className="bg-primary-600/10 text-primary-400 text-[10px] font-bold px-2 py-1 rounded">{b.label}</span>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed mb-6">{b.desc}</p>
                      </div>
                      <a
                        href={`https://wa.me/919990713111?text=Hi,%20I'm%20interested%20in%20projects%20by%20${encodeURIComponent(b.name)}%20at%20Prem%20Associates.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline w-full justify-center text-xs py-2.5 border-white/10 text-white hover:border-primary-600 hover:text-white"
                      >
                        Enquire Projects <HiOutlineExternalLink className="text-xs" />
                      </a>
                    </div>
                  ))}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="section-padding bg-dark-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="What Makes Prem Associates Different"
            description="We offer more than just properties — we offer peace of mind, legal security, and the best investment opportunities."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-16 bg-gradient-to-r from-primary-800 via-primary-700 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { number: '500', suffix: '+', label: 'Properties Sold' },
              { number: '1000', suffix: '+', label: 'Happy Clients' },
              { number: '30', suffix: '+', label: 'Years Experience' },
            ].map(({ number, suffix, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Counter target={number} suffix={suffix} />
                <p className="text-orange-100 text-lg mt-2 font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Client Stories"
            title="What Our Clients Say"
            description="Real experiences from real clients who found their dream properties with us."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent" />
            <div className="relative z-10">
              <p className="section-subtitle mb-3">Get In Touch</p>
              <h2 className="section-title mb-4">Ready to Find Your Dream Property?</h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Contact Prem Associates today for a free consultation. Our experts are available 7 days a week, 10 AM – 10 PM.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary text-base px-8 py-4">
                  Contact Us
                </Link>
                <a href="tel:+919990713111" className="btn-outline text-base px-8 py-4">
                  Call: +91 99907 13111
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
