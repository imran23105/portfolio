import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    date: 'June 15, 2025',
    title: 'The Future of AI in Web Development',
    excerpt: 'Explore how artificial intelligence is reshaping the way we build and design modern web applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=350&fit=crop',
    category: 'Technology',
    readTime: '5 min read',
  },
  {
    id: 2,
    date: 'May 28, 2025',
    title: 'An In-Depth Guide to Framer Motion',
    excerpt: 'Master the art of React animations with Framer Motion. From basic transitions to complex gesture-based interactions.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=350&fit=crop',
    category: 'React',
    readTime: '8 min read',
  },
  {
    id: 3,
    date: 'May 10, 2025',
    title: 'Digital Minimalism: Clean UI Design Tips',
    excerpt: 'Discover how minimalist design principles can dramatically improve user experience and conversion rates.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=350&fit=crop',
    category: 'Design',
    readTime: '6 min read',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div
        className="blob"
        style={{
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)',
          bottom: '0',
          right: '-100px',
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
            Insights
          </p>
          <h2 className="section-title">
            Recent <span className="text-gradient">Blogs</span>
          </h2>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(168,85,247,0.04)',
                border: '1px solid rgba(168,85,247,0.1)',
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(10,0,21,0.8))' }}
                />
                <span
                  className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.9), rgba(168,85,247,0.9))',
                  }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-zinc-500 text-xs">{post.date}</p>
                  <p className="text-purple-400 text-xs">{post.readTime}</p>
                </div>
                <h3 className="font-bold text-base mb-2 leading-snug group-hover:text-gradient transition-all line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Read More{' '}
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
