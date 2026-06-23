import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiPhone, HiMail, HiLocationMarker, HiClock
} from 'react-icons/hi'
import {
  FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube
} from 'react-icons/fa'
import { MdOutlineRealEstateAgent } from 'react-icons/md'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Properties', to: '/properties' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const services = [
  'Property Buying',
  'Property Selling',
  'Residential Plots',
  'Commercial Plots',
  'Investment Advice',
  'Legal Support',
]

const socials = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/919990713111', label: 'WhatsApp' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-orange-500 py-10">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-orange-100 mt-1">
              Talk to our experts today — free consultation available.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:+919990713111"
              className="btn-gold whitespace-nowrap"
            >
              <HiPhone /> Call Now
            </a>
            <a
              href="https://wa.me/919990713111"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 whitespace-nowrap"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <MdOutlineRealEstateAgent className="text-white text-xl" />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-white">
                  Prem <span className="text-primary-500">Associates</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted real estate partner in Sector 85, Faridabad. We help you buy, sell and invest in premium properties with full legal support.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 inline-block" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <HiLocationMarker className="text-primary-500 text-xl shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  1st Floor, Green Avenue, Shop No-5, S3,<br />
                  Sector 85, Faridabad,<br />
                  Haryana 121007
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <HiPhone className="text-primary-500 text-xl shrink-0" />
                <a
                  href="tel:+919990713111"
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  +91 99907 13111
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <HiMail className="text-primary-500 text-xl shrink-0" />
                <a
                  href="mailto:info@premassociates.in"
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  info@premassociates.in
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <HiClock className="text-primary-500 text-xl shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Monday – Sunday</p>
                  <p className="text-primary-400 text-sm font-medium">10:00 AM – 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {year} Prem Associates. All rights reserved.</p>
          <p>
            Real Estate Consultant | Sector 85, Faridabad, Haryana
          </p>
        </div>
      </div>
    </footer>
  )
}
