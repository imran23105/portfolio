import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Seo from '../seo/Seo'
import { localBusinessSchema } from '../utils/schema'
import MiniHero from '../components/MiniHero/MiniHero'
import { HiCheckCircle, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { MdVerified } from 'react-icons/md'
import { FaAward, FaHandshake, FaWhatsapp, FaPhone } from 'react-icons/fa'


const milestones = [
  { year: '1994', event: 'Established by Prem Singh Ambavta' },
  { year: '2014', event: 'Opened office in Sector 85, Faridabad' },
  { year: '2016', event: 'Expanded to commercial property services' },
  { year: '2018', event: '500+ clients milestone achieved' },
  { year: '2020', event: 'Launched investment advisory division' },
  { year: '2023', event: '1000+ happy clients and counting' },
  { year: '2025', event: 'Premium digital platform launched' },
]

const values = [
  {
    icon: <MdVerified className="text-3xl" />,
    title: 'Transparency',
    desc: 'We believe in complete honesty in every transaction.',
  },
  {
    icon: <FaHandshake className="text-3xl" />,
    title: 'Trust',
    desc: 'Built over three decades of reliable service and satisfied clients.',
  },
  {
    icon: <FaAward className="text-3xl" />,
    title: 'Excellence',
    desc: 'We strive to exceed expectations in every engagement.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Prem Associates | Trusted Property Dealer in Faridabad"
        description="Learn about Prem Associates, your trusted real estate consultant offering plots, residential and commercial properties in Faridabad."
        canonical="https://premassociates.in/about"
        schema={localBusinessSchema}
      />

      <MiniHero
        subtitle="Who We Are"
        title="About Prem Associates"
        breadcrumb={['Home', 'About Us']}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
      />

      {/* ─── Story Section ─── */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-subtitle mb-3">Our Story</p>
              <h2 className="section-title mb-6">
                30+ Years of Trust in<br />
                <span className="gradient-text">Faridabad Real Estate</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Prem Associates was established in 1994 by Prem Singh Ambavta with a simple mission — to make real estate transactions in Faridabad transparent, trustworthy and hassle-free. Starting from a small office in Sector 85, we have grown to become one of the most respected property consultants in the region.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                For over three decades, we have helped more than 1,000 families find their dream homes, and hundreds of investors make smart property decisions. Our deep understanding of the Faridabad market, combined with our commitment to legal compliance, sets us apart.
              </p>
              <ul className="space-y-3">
                {[
                  'RERA Compliant Properties',
                  '100% Legal Documentation',
                  'Dedicated Post-Sale Support',
                  'Transparent Pricing — No Hidden Charges',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <HiCheckCircle className="text-primary-500 text-xl shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary mt-8 inline-flex">
                Talk To Us <HiOutlineArrowNarrowRight />
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden h-96 lg:h-[520px]">
                <img
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80"
                  alt="Prem Associates Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              </div>
              {/* Stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 card-glass p-5 rounded-2xl"
              >
                <p className="font-display text-3xl font-bold text-primary-400">1000+</p>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 card-glass p-5 rounded-2xl"
              >
                <p className="font-display text-3xl font-bold text-gold-400">30+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="section-subtitle mb-3">Our Core Values</p>
            <h2 className="section-title">What We Stand For</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-8 rounded-2xl text-center hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-600/10 border border-primary-500/20 rounded-2xl flex items-center justify-center text-primary-500 mx-auto mb-5">
                  {icon}
                </div>
                <h3 className="font-display text-xl text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="section-subtitle mb-3">Our Journey</p>
            <h2 className="section-title">Milestones Over the Years</h2>
          </motion.div>
          <div className="relative max-w-2xl mx-auto">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            {milestones.map(({ year, event }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-center mb-10 ${
                  i % 2 === 0 ? 'flex-row-reverse text-right' : 'text-left'
                }`}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="card-glass p-5 rounded-2xl">
                    <p className="text-primary-400 font-bold text-lg">{year}</p>
                    <p className="text-gray-300 text-sm mt-1">{event}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-dark-900 z-10" />
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leadership & Founders ─── */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-subtitle mb-3">Our Leadership</p>
            <h2 className="section-title">Meet the Founders</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
              The visionary minds driving Prem Associates toward excellence, integrity, and client satisfaction in Faridabad's real estate ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Owner/Founder Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col sm:flex-row gap-6 items-center sm:items-start group hover:shadow-luxury"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shrink-0 relative">
                <img 
                  src="/prem-singh-ambavta.jpg" 
                  alt="Prem Singh Ambavta" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-700" />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-primary-600/20 text-primary-400 px-2.5 py-1 rounded-lg">Owner & Founder</span>
                <h3 className="font-display text-2xl font-bold text-white mt-2.5 mb-1">Prem Singh Ambavta</h3>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">Founder & Owner (Since 1994)</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  Prem Singh Ambavta is the foundational pillar of Prem Associates, leading the real estate advisory since 1994. Built on principles of legal integrity, clear land titles, and absolute transparency, he has guided thousands of clients in securing prime properties and investments in Faridabad.
                </p>
              </div>
            </motion.div>

            {/* Director & Co-Founder Card - Rahul Singh Ambavta */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-glass p-8 rounded-3xl border border-white/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col sm:flex-row gap-6 items-center sm:items-start group hover:shadow-luxury"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shrink-0 relative">
                <img 
                  src="/rahul-singh-ambavta.jpg" 
                  alt="Rahul Singh Ambavta" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-700" />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-primary-600/20 text-primary-400 px-2.5 py-1 rounded-lg">Director & Co-Founder</span>
                <h3 className="font-display text-2xl font-bold text-white mt-2.5 mb-1">Rahul Singh Ambavta</h3>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">Co-Founder & Director</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">
                  Rahul Singh Ambavta drives strategic expansion, developer collaborations, and digital modernization at Prem Associates. Dedicated to client success, he focuses on onboarding premium real estate projects and ensuring top-tier service delivery across Faridabad.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
