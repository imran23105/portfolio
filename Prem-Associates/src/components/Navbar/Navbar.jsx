import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'
import { MdOutlineRealEstateAgent } from 'react-icons/md'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Properties', to: '/properties' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Non-home pages always get solid navbar
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  const solidNav = !isHome || scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          solidNav
            ? 'bg-dark-800/95 backdrop-blur-xl shadow-2xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="Prem Associates Home">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                <MdOutlineRealEstateAgent className="text-white text-xl" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white tracking-tight leading-none">
                  Prem <span className="text-primary-500">Associates</span>
                </span>
                <p className="text-xs text-gray-400 leading-none mt-0.5 hidden sm:block">Real Estate Consultant</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-primary-400 bg-primary-600/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919990713111"
                className="hidden sm:flex items-center gap-2 text-sm text-gray-300 hover:text-primary-400 transition-colors duration-300"
                aria-label="Call Prem Associates"
              >
                <HiPhone className="text-primary-500" />
                <span className="hidden md:block">+91 99907 13111</span>
              </a>

              <Link
                to="/contact"
                className="hidden lg:block btn-primary text-sm px-5 py-2.5"
              >
                List Property
              </Link>

              <button
                onClick={() => setMenuOpen(prev => !prev)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-primary-600 transition-all duration-300"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-dark-800/98 backdrop-blur-xl border-t border-white/5"
            >
              <nav className="container-custom py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map(({ label, to }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isActive
                            ? 'bg-primary-600/20 text-primary-400'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
                <div className="pt-2 border-t border-white/10 mt-2 flex flex-col gap-3">
                  <a
                    href="tel:+919990713111"
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    <HiPhone className="text-primary-500" />
                    +91 99907 13111
                  </a>
                  <Link to="/contact" className="btn-primary text-center">
                    List Property
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
