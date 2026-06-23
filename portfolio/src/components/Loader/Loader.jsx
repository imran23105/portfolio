import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logoImg from '../../assets/images/logo.png';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ background: '#0a0015' }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        {/* Blobs */}
        <div
          className="blob"
          style={{
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)',
            top: '20%',
            left: '20%',
            animation: 'blob-move 6s infinite',
          }}
        />
        <div
          className="blob"
          style={{
            width: 250,
            height: 250,
            background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
            bottom: '20%',
            right: '20%',
            animation: 'blob-move 8s infinite reverse',
          }}
        />

        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="relative z-10 mb-6"
        >
          <img
            src={logoImg}
            alt="Imran Logo"
            className="h-20 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 20px rgba(168,85,247,0.8))' }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-bold mb-2 z-10"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-gradient">Imran</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-zinc-400 text-sm mb-10 z-10"
        >
          Web Developer & UI Designer
        </motion.p>

        {/* Progress Bar */}
        <motion.div
          className="relative z-10 w-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)',
                width: `${progress}%`,
              }}
            />
          </div>
          <p className="text-center text-zinc-500 text-xs mt-3">{progress}%</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
