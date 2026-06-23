import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { NAV_LINKS } from '../../utils/constants';
import logoImg from '../../assets/images/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10, 0, 21, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(168,85,247,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollTo('#home')}
        >
          <img
            src={logoImg}
            alt="Imran Logo"
            className="h-10 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.6))' }}
          />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium transition-all duration-300 relative group"
              style={{
                color:
                  activeSection === link.href.replace('#', '')
                    ? '#a855f7'
                    : '#a1a1aa',
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px rounded-full transition-all duration-300"
                style={{
                  background: 'linear-gradient(90deg, #7c3aed, #a855f7)',
                  width:
                    activeSection === link.href.replace('#', '') ? '100%' : '0%',
                }}
              />
            </button>
          ))}
        </div>

        {/* Hire Me */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary text-white"
            onClick={() => scrollTo('#contact')}
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-4"
            style={{
              background: 'rgba(10, 0, 21, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: 16,
              border: '1px solid rgba(168,85,247,0.15)',
            }}
          >
            <div className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    color:
                      activeSection === link.href.replace('#', '')
                        ? '#a855f7'
                        : '#a1a1aa',
                    background:
                      activeSection === link.href.replace('#', '')
                        ? 'rgba(168,85,247,0.1)'
                        : 'transparent',
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                className="btn-primary text-white mt-2"
                onClick={() => scrollTo('#contact')}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
