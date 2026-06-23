import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const CircularProgress = ({ percentage, color, isInView }) => {
  const [prog, setProg] = useState(0);
  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!isInView) return;
    let frame;
    let current = 0;
    const target = percentage;
    const step = target / 50;
    const animate = () => {
      current += step;
      if (current >= target) {
        setProg(target);
        return;
      }
      setProg(Math.floor(current));
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, percentage]);

  const strokeDashoffset = circumference - (prog / 100) * circumference;

  return (
    <div className="relative w-16 h-16 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 72 72">
        {/* Track */}
        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke="rgba(168,85,247,0.1)"
          strokeWidth="5"
        />
        {/* Progress */}
        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.05s linear', filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-white">{prog}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div
        className="blob"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
          top: '50%',
          right: '-150px',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life with precision and creativity.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: `0 0 30px ${skill.color}30` }}
              className="glass-card p-5 flex flex-col items-center gap-4 transition-all duration-300 cursor-default"
              style={{ borderColor: 'rgba(168,85,247,0.1)' }}
            >
              <CircularProgress
                percentage={skill.percentage}
                color={skill.color}
                isInView={isInView}
              />
              <div className="text-center">
                <p className="text-2xl mb-1">{skill.icon}</p>
                <p className="font-semibold text-sm text-white">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
