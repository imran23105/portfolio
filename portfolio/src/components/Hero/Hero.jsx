import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaDownload } from 'react-icons/fa';
import { STATS } from '../../utils/constants';
import { useEffect, useRef, useState } from 'react';

const AnimatedNumber = ({ value, suffix, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = typeof value === 'number' ? value : parseFloat(value);
    const duration = 1800;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {Number.isInteger(value) ? Math.floor(count) : count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsInView(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/imran23105', label: 'GitHub' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://instagram.com/mr.immu.0', label: 'Instagram' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 80 }}
    >
      {/* Background Blobs */}
      <div
        className="blob"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
          top: '-100px',
          right: '-100px',
          animation: 'blob-move 8s infinite',
        }}
      />
      <div
        className="blob"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
          bottom: '-50px',
          left: '-100px',
          animation: 'blob-move 10s infinite reverse',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'rgba(168,85,247,0.1)',
                  border: '1px solid rgba(168,85,247,0.3)',
                  color: '#c084fc',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                Available for Hire
              </span>
            </motion.div>

            {/* Small Intro */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg mb-2"
            >
              I am <span style={{ color: '#a855f7' }}>Imran</span>
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl xl:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Web{' '}
              <span className="text-gradient">Developer</span>
              <br />+<br />
              <span className="text-gradient">UI Designer</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              I create modern websites with exceptional user experiences and
              beautiful interfaces that leave a lasting impression.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-white flex items-center gap-2"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline text-white"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hire Me
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all"
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
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex flex-col items-center gap-8"
          >
            {/* Image Card */}
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  filter: 'blur(30px)',
                  opacity: 0.5,
                  transform: 'scale(1.1)',
                  animation: 'glow-pulse 3s ease-in-out infinite',
                }}
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div
                  className="w-64 h-80 sm:w-72 sm:h-88 rounded-3xl overflow-hidden"
                  style={{
                    transform: 'rotate(-3deg)',
                    border: '2px solid rgba(168,85,247,0.4)',
                    boxShadow: '0 25px 60px rgba(168,85,247,0.3)',
                  }}
                >
                  <img
                    src="/imran-profile.png"
                    alt="Imran - Web Developer"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: 'grayscale(30%) brightness(0.85) saturate(0.8) contrast(1.05)' }}
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, transparent 50%, rgba(10,0,21,0.8) 100%)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2"
                style={{ boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
              >
                <p className="text-xs text-zinc-400">Open to Work</p>
                <p className="text-sm font-bold text-gradient">Full-time / Freelance</p>
              </motion.div>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 w-full"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-4 text-center"
                >
                  <p
                    className="text-2xl sm:text-3xl font-black text-gradient"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      isInView={statsInView}
                    />
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
