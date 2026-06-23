import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import { servicesSchema } from '../utils/schema'
import MiniHero from '../components/MiniHero/MiniHero'
import {
  MdHome, MdSell, MdLandscape, MdStorefront, MdApartment, MdTrendingUp, MdGavel
} from 'react-icons/md'
import { HiOutlineArrowNarrowRight, HiCheckCircle } from 'react-icons/hi'

const services = [
  {
    icon: <MdHome className="text-4xl" />,
    title: 'Property Buying',
    description: 'We help you find the perfect property that matches your requirements and budget. Our experts guide you through every step of the buying process.',
    features: ['Property Search & Shortlisting', 'Site Visits & Inspections', 'Price Negotiation', 'Documentation Support'],
    color: 'from-blue-600/20 to-blue-600/5',
    border: 'border-blue-500/20',
  },
  {
    icon: <MdSell className="text-4xl" />,
    title: 'Property Selling',
    description: 'Get the best price for your property with our expert marketing and negotiation services. We connect sellers with serious buyers quickly.',
    features: ['Free Property Valuation', 'Professional Photography', 'Wide Buyer Network', 'Legal Paperwork'],
    color: 'from-green-600/20 to-green-600/5',
    border: 'border-green-500/20',
  },
  {
    icon: <MdLandscape className="text-4xl" />,
    title: 'Plots Sale',
    description: 'Explore premium residential and commercial plots in prime locations of Faridabad. Verified land parcels with clear titles.',
    features: ['Verified Land Titles', 'Survey & Demarcation', 'Registry Support', 'Investment Guidance'],
    color: 'from-yellow-600/20 to-yellow-600/5',
    border: 'border-yellow-500/20',
  },
  {
    icon: <MdStorefront className="text-4xl" />,
    title: 'Commercial Property',
    description: 'Find the ideal commercial space for your business. We specialize in shops, offices, showrooms and industrial spaces.',
    features: ['Office Spaces', 'Retail Shops', 'Showrooms', 'Industrial Units'],
    color: 'from-purple-600/20 to-purple-600/5',
    border: 'border-purple-500/20',
  },
  {
    icon: <MdApartment className="text-4xl" />,
    title: 'Residential Property',
    description: 'Discover your dream home — from affordable apartments to luxury villas. We have residential options for every budget.',
    features: ['Apartments & Flats', 'Independent Houses', 'Villas & Bungalows', 'Builder Floors'],
    color: 'from-primary-600/20 to-primary-600/5',
    border: 'border-primary-500/20',
  },
  {
    icon: <MdTrendingUp className="text-4xl" />,
    title: 'Investment Advice',
    description: 'Make smart real estate investments with our expert analysis of market trends, appreciation potential and ROI projections.',
    features: ['Market Analysis', 'ROI Projections', 'Portfolio Review', 'NRI Investment Help'],
    color: 'from-orange-600/20 to-orange-600/5',
    border: 'border-orange-500/20',
  },
  {
    icon: <MdGavel className="text-4xl" />,
    title: 'Legal Support',
    description: 'Our legal experts ensure every transaction is compliant with RERA regulations, with complete documentation and title verification.',
    features: ['Title Verification', 'Sale Deed Drafting', 'Registration Support', 'RERA Compliance'],
    color: 'from-red-600/20 to-red-600/5',
    border: 'border-red-500/20',
  },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'Share your requirements with our expert consultants.' },
  { step: '02', title: 'Property Search', desc: 'We shortlist the best properties matching your needs.' },
  { step: '03', title: 'Site Visit', desc: 'Schedule visits to your preferred properties.' },
  { step: '04', title: 'Negotiation', desc: 'We negotiate the best price on your behalf.' },
  { step: '05', title: 'Legal Check', desc: 'Complete legal verification and documentation.' },
  { step: '06', title: 'Registration', desc: 'Final registration and handover of your property.' },
]

export default function Services() {
  return (
    <>
      <Seo
        title="Real Estate Services in Faridabad | Prem Associates"
        description="Explore our property buying, selling, plots sale and investment consultation services in Sector 85 Faridabad."
        canonical="https://premassociates.in/services"
        schema={servicesSchema}
      />

      <MiniHero
        subtitle="What We Offer"
        title="Our Real Estate Services"
        breadcrumb={['Home', 'Services']}
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
      />

      {/* ─── Services Grid ─── */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="section-subtitle mb-3">Complete Solutions</p>
            <h2 className="section-title mb-4">Everything You Need Under One Roof</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From buying your first home to complex commercial transactions — Prem Associates has the expertise to handle every real estate need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, description, features, color, border }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl border ${border} bg-gradient-to-br ${color} p-7 transition-all duration-500 hover:shadow-luxury group`}
              >
                <div className="text-primary-400 mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {icon}
                </div>
                <h3 className="font-display text-xl text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <HiCheckCircle className="text-primary-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="section-subtitle mb-3">How We Work</p>
            <h2 className="section-title">Our Simple 6-Step Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-7 rounded-2xl relative overflow-hidden group hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 font-display text-8xl font-black text-white/3 select-none">
                  {step}
                </div>
                <div className="relative z-10">
                  <span className="inline-block bg-primary-600/20 text-primary-400 font-bold text-sm px-3 py-1 rounded-lg mb-4">
                    Step {step}
                  </span>
                  <h3 className="font-display text-xl text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/contact" className="btn-primary text-base px-10 py-4">
              Get Started Today <HiOutlineArrowNarrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
