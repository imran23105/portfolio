import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { projects, projectCategories } from '../../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div
        className="blob"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
          top: '0',
          right: '-150px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="section-title">
            My Recent <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  activeCategory === cat
                    ? 'linear-gradient(135deg, #7c3aed, #a855f7)'
                    : 'rgba(168,85,247,0.05)',
                border:
                  activeCategory === cat
                    ? 'none'
                    : '1px solid rgba(168,85,247,0.2)',
                color: activeCategory === cat ? '#fff' : '#a1a1aa',
                boxShadow:
                  activeCategory === cat
                    ? '0 0 20px rgba(168,85,247,0.4)'
                    : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: 'rgba(168,85,247,0.05)',
                  border: '1px solid rgba(168,85,247,0.1)',
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: 'rgba(10,0,21,0.75)' }}
                  >
                    <motion.a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.15 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.15 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white"
                    >
                      <FaExternalLinkAlt size={13} />
                    </motion.a>
                  </div>

                  {/* Category badge */}
                  <div
                    className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.9), rgba(168,85,247,0.9))',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md text-xs"
                        style={{
                          background: 'rgba(168,85,247,0.1)',
                          border: '1px solid rgba(168,85,247,0.2)',
                          color: '#c084fc',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 40px rgba(168,85,247,0.15)' }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
              style={{
                background: '#0d001a',
                border: '1px solid rgba(168,85,247,0.3)',
                boxShadow: '0 0 60px rgba(168,85,247,0.2)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover"
              />
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white"
                style={{ background: 'rgba(10,0,21,0.8)' }}
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gradient" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {selectedProject.title}
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        background: 'rgba(168,85,247,0.15)',
                        border: '1px solid rgba(168,85,247,0.3)',
                        color: '#c084fc',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-white flex items-center gap-2 text-sm">
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                  <a href={selectedProject.githubUrl} className="btn-outline text-white flex items-center gap-2 text-sm">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
