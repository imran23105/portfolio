import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDownload,
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaServer,
} from 'react-icons/fa';
import { EMAIL } from '../../utils/constants';

const highlights = [
  { icon: <FaCode />, label: 'Clean Code', desc: 'Writing readable, maintainable & scalable code' },
  { icon: <FaPalette />, label: 'UI Design', desc: 'Pixel-perfect designs with stunning aesthetics' },
  { icon: <FaMobileAlt />, label: 'Responsive', desc: 'Mobile-first approach across all screen sizes' },
  { icon: <FaServer />, label: 'Full Stack', desc: 'End-to-end development from UI to backend' },
];

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '🚀' },
  { name: 'Tailwind', icon: '🌊' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Git', icon: '🔀' },
  { name: 'Figma', icon: '🎨' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Blobs */}
      <div
        className="blob"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
          top: '0',
          right: '-150px',
          animation: 'blob-move 8s infinite',
        }}
      />
      <div
        className="blob"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
          bottom: '0',
          left: '-100px',
          animation: 'blob-move 10s infinite reverse',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — Image + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                filter: 'blur(40px)',
                opacity: 0.25,
                transform: 'scale(0.85)',
              }}
            />

            {/* Main Image */}
            <div
              className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden"
              style={{
                border: '2px solid rgba(168,85,247,0.35)',
                boxShadow: '0 30px 70px rgba(168,85,247,0.2)',
              }}
            >
              <img
                src="/imran-profile.png"
                alt="Imran - About"
                className="w-full h-full object-cover object-top"
                style={{ filter: 'grayscale(30%) brightness(0.85) saturate(0.8) contrast(1.05)' }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 40%, rgba(10,0,21,0.75) 100%)',
                }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Imran
                </p>
                <p className="text-purple-300 text-sm">Web Developer & UI Designer</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 sm:right-4 glass-card px-4 py-3 text-center"
              style={{ boxShadow: '0 0 25px rgba(168,85,247,0.2)' }}
            >
              <p
                className="text-3xl font-black text-gradient"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                3+
              </p>
              <p className="text-zinc-400 text-xs">Years Exp.</p>
            </motion.div>

            {/* Floating Projects Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -bottom-4 -left-4 sm:left-4 glass-card px-4 py-3 text-center"
              style={{ boxShadow: '0 0 25px rgba(168,85,247,0.2)' }}
            >
              <p
                className="text-3xl font-black text-gradient"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                14+
              </p>
              <p className="text-zinc-400 text-xs">Projects Done</p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              I'm a passionate{' '}
              <span className="text-gradient">Full-Stack Developer</span>{' '}
              based in Punjab, India
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-4">
              Hello! I'm <strong className="text-white">Imran</strong>, a self-driven web developer and
              UI designer with over 3 years of experience crafting modern, performant web applications.
              I specialize in the MERN stack and have a strong passion for creating beautiful,
              user-centered interfaces.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Currently pursuing my <strong className="text-white">B.Tech in Computer Science</strong> at
              Swami Vivekanand Institute of Engineering and Technology, I balance academics with
              real-world client work. I believe great products are born at the intersection of
              clean code and stunning design.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Name', value: 'Imran' },
                { label: 'Email', value: EMAIL },
                { label: 'Location', value: 'Punjab, India' },
                { label: 'Availability', value: 'Open to Work ✅' },
                { label: 'Degree', value: 'B.Tech CSE' },
                { label: 'Freelance', value: 'Available' },
              ].map((info) => (
                <div key={info.label} className="flex flex-col gap-0.5">
                  <span className="text-purple-400 text-xs font-medium uppercase tracking-wide">
                    {info.label}
                  </span>
                  <span className="text-white text-sm font-medium">{info.value}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-white flex items-center gap-2"
              >
                <FaDownload className="text-sm" />
                Download CV
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline text-white"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: '0 0 30px rgba(168,85,247,0.15)' }}
              className="glass-card p-6 group transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(168,85,247,0.4))',
                  border: '1px solid rgba(168,85,247,0.3)',
                }}
              >
                <span className="text-purple-300">{item.icon}</span>
              </div>
              <h4 className="font-bold text-white mb-1 group-hover:text-gradient transition-all">
                {item.label}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-zinc-500 text-sm uppercase tracking-widest mb-6">
            Tech I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-300"
                style={{
                  background: 'rgba(168,85,247,0.06)',
                  border: '1px solid rgba(168,85,247,0.15)',
                  color: '#d1d5db',
                }}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
