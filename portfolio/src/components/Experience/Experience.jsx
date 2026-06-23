import { motion } from 'framer-motion';
import { experience, education } from '../../data/experience';

const TimelineItem = ({ item, index, side }) => (
  <motion.div
    initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, duration: 0.6 }}
    className="relative rounded-2xl p-5 transition-all duration-300 group"
    style={{
      background: 'rgba(168,85,247,0.04)',
      border: '1px solid rgba(168,85,247,0.1)',
    }}
    whileHover={{
      borderColor: 'rgba(168,85,247,0.35)',
      boxShadow: '0 0 25px rgba(168,85,247,0.1)',
    }}
  >
    {/* Left accent border */}
    <div
      className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
      style={{ background: item.color }}
    />

    <div className="pl-4">
      <span
        className="text-xs font-bold px-2 py-1 rounded-full"
        style={{
          background: `${item.color}20`,
          color: item.color,
          border: `1px solid ${item.color}40`,
        }}
      >
        {item.period}
      </span>
      <h3 className="font-bold text-base mt-2 mb-1 group-hover:text-gradient transition-all">
        {item.role || item.degree}
      </h3>
      <p className="text-purple-400 text-sm font-medium mb-1">
        {item.company || item.institution}
      </p>
      <p className="text-zinc-500 text-xs">{item.description || item.detail}</p>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div
        className="blob"
        style={{
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          bottom: '0',
          left: '-100px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">
                Career
              </p>
              <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                My <span className="text-gradient">Experience</span>
              </h2>
            </motion.div>
            <div className="space-y-4">
              {experience.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} side="left" />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">
                Academics
              </p>
              <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                My <span className="text-gradient">Education</span>
              </h2>
            </motion.div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <TimelineItem key={item.id} item={item} index={i} side="right" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
