import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../../data/services';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Blob */}
      <div
        className="blob"
        style={{
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
          top: '50%',
          left: '-150px',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I Offer
          </p>
          <h2 className="section-title">
            My Quality{' '}
            <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        {/* Services Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              onClick={() =>
                setActiveIndex(activeIndex === index ? -1 : index)
              }
              className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background:
                  activeIndex === index
                    ? 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.15))'
                    : 'rgba(168,85,247,0.04)',
                border:
                  activeIndex === index
                    ? '1px solid rgba(168,85,247,0.4)'
                    : '1px solid rgba(168,85,247,0.1)',
                boxShadow:
                  activeIndex === index
                    ? '0 0 30px rgba(168,85,247,0.15)'
                    : 'none',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-5">
                  <span
                    className="text-sm font-bold tabular-nums"
                    style={{
                      color:
                        activeIndex === index ? '#a855f7' : 'rgba(168,85,247,0.4)',
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {service.id}
                  </span>
                  <span className="text-2xl">{service.icon}</span>
                  <h3
                    className="text-lg sm:text-xl font-semibold transition-colors duration-300"
                    style={{
                      color: activeIndex === index ? '#ffffff' : '#a1a1aa',
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background:
                      activeIndex === index
                        ? 'linear-gradient(135deg, #7c3aed, #a855f7)'
                        : 'rgba(168,85,247,0.1)',
                    border: '1px solid rgba(168,85,247,0.2)',
                    color: activeIndex === index ? '#fff' : '#a855f7',
                  }}
                >
                  →
                </motion.div>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-zinc-400 leading-relaxed pl-20">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
