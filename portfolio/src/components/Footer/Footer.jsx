import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from 'react-icons/fa';
import { NAV_LINKS } from '../../utils/constants';
import logoImg from '../../assets/images/logo.png';

const Footer = () => {
  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { icon: <FaGithub />, href: 'https://github.com/imran23105', label: 'GitHub' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://instagram.com/mr.immu.0', label: 'Instagram' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  ];

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ borderTop: '1px solid rgba(168,85,247,0.1)' }}
    >
      <div
        className="blob"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          bottom: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoImg}
                alt="Imran Logo"
                className="h-10 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.5))' }}
              />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              A passionate web developer crafting beautiful digital experiences that inspire and delight users around the world.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-zinc-400 text-sm hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-base transition-all"
                  style={{
                    background: 'rgba(168,85,247,0.1)',
                    border: '1px solid rgba(168,85,247,0.2)',
                    color: '#a1a1aa',
                  }}
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-zinc-500 text-sm">
              Available for freelance work
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs">Open to opportunities</span>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="border-t mb-6"
          style={{ borderColor: 'rgba(168,85,247,0.1)' }}
        />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Imran. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm flex items-center gap-1">
            Made with{' '}
            <FaHeart className="text-purple-500 text-xs" />
            {' '}by{' '}
            <span className="text-gradient font-medium">Imran</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
