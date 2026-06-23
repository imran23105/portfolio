import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaTag,
  FaCommentDots,
} from 'react-icons/fa';
import { EMAIL, PHONE, LOCATION } from '../../utils/constants';

const InputField = ({ icon, type = 'text', name, placeholder, multiline }) => {
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? 'textarea' : 'input';

  return (
    <div className="relative group">
      {/* Icon */}
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-colors duration-300 pointer-events-none"
        style={{
          top: multiline ? '18px' : '50%',
          transform: multiline ? 'none' : 'translateY(-50%)',
          color: focused ? '#a855f7' : '#52525b',
        }}
      >
        {icon}
      </div>

      <Tag
        type={!multiline ? type : undefined}
        name={name}
        placeholder={placeholder}
        rows={multiline ? 5 : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent pl-10 pr-4 py-3.5 rounded-xl text-sm text-white placeholder-zinc-600 outline-none resize-none transition-all duration-300"
        style={{
          border: focused
            ? '1px solid rgba(168,85,247,0.7)'
            : '1px solid rgba(168,85,247,0.15)',
          background: focused
            ? 'rgba(168,85,247,0.07)'
            : 'rgba(168,85,247,0.03)',
          boxShadow: focused
            ? '0 0 20px rgba(168,85,247,0.12), inset 0 1px 0 rgba(168,85,247,0.1)'
            : 'none',
        }}
        required
      />

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-4 right-4 h-px rounded-full transition-all duration-500"
        style={{
          background: focused
            ? 'linear-gradient(90deg, transparent, rgba(168,85,247,0.8), transparent)'
            : 'transparent',
        }}
      />
    </div>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    // Dynamic subject: shows sender's name in Gmail inbox
    const senderName = formData.get('name') || 'Someone';
    const senderSubject = formData.get('subject') || 'No Subject';
    formData.set('subject', `📩 New Message from ${senderName} | Portfolio`);

    // Reply-to: so you can directly reply to the sender from Gmail
    formData.set('replyto', formData.get('email') || '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        formRef.current.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        console.log(data);
        alert('Failed to send message');
      }
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: PHONE,
      href: `tel:${PHONE}`,
      color: '#22c55e',
      bg: 'rgba(34,197,94,0.12)',
      border: 'rgba(34,197,94,0.25)',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      color: '#a855f7',
      bg: 'rgba(168,85,247,0.12)',
      border: 'rgba(168,85,247,0.25)',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: LOCATION,
      href: '#',
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.12)',
      border: 'rgba(245,158,11,0.25)',
    },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/imran23105',
      label: 'GitHub',
      color: '#e2e8f0',
      bg: 'rgba(226,232,240,0.08)',
    },
    {
      icon: <FaLinkedin />,
      href: '#',
      label: 'LinkedIn',
      color: '#0ea5e9',
      bg: 'rgba(14,165,233,0.1)',
    },
    {
      icon: <FaInstagram />,
      href: 'https://instagram.com/mr.immu.0',
      label: 'Instagram',
      color: '#ec4899',
      bg: 'rgba(236,72,153,0.1)',
    },
    {
      icon: <FaTwitter />,
      href: '#',
      label: 'Twitter',
      color: '#38bdf8',
      bg: 'rgba(56,189,248,0.1)',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="blob"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          top: '30%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="blob"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
          top: '70%',
          right: '10%',
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
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: 'rgba(168,85,247,0.1)',
              border: '1px solid rgba(168,85,247,0.25)',
              color: '#c084fc',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's work <span className="text-gradient">together!</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{
                background: 'rgba(15,5,30,0.6)',
                border: '1px solid rgba(168,85,247,0.15)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(168,85,247,0.1)',
              }}
            >
              {/* Card top glow */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent)',
                }}
              />

              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                >
                  <FaPaperPlane className="text-white text-sm" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                  <p className="text-zinc-500 text-xs">I'll reply within 24 hours</p>
                </div>
              </div>

              {/* Success State */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    className="mb-6 px-5 py-4 rounded-xl flex items-center gap-3"
                    style={{
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.3)',
                    }}
                  >
                    <FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />
                    <div>
                      <p className="text-green-400 font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-green-500/70 text-xs">I'll get back to you soon. 🚀</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORM_ACCESS_KEY} />
                <input type="hidden" name="to_email" value="professional.imran023@gmail.com" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField icon={<FaUser />} name="name" placeholder="Your Name" />
                  <InputField icon={<FaEnvelope />} name="email" type="email" placeholder="Your Email" />
                </div>
                <InputField icon={<FaTag />} name="subject" placeholder="Subject" />
                <InputField icon={<FaCommentDots />} name="message" placeholder="Your Message..." multiline />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2.5 transition-all duration-300 disabled:cursor-not-allowed"
                  style={{
                    background: loading
                      ? 'rgba(124,58,237,0.4)'
                      : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                    boxShadow: loading ? 'none' : '0 0 30px rgba(168,85,247,0.4)',
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* ── Right Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 group"
                style={{
                  background: info.bg,
                  border: `1px solid ${info.border}`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-base transition-all duration-300"
                  style={{
                    background: `${info.color}20`,
                    border: `1px solid ${info.color}40`,
                    color: info.color,
                    boxShadow: `0 0 15px ${info.color}20`,
                  }}
                >
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-zinc-500 text-xs mb-0.5 uppercase tracking-wider">{info.label}</p>
                  <p className="text-white text-sm font-medium truncate">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="rounded-2xl p-5"
              style={{
                background: 'rgba(15,5,30,0.5)',
                border: '1px solid rgba(168,85,247,0.12)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p className="text-zinc-400 text-xs uppercase tracking-widest mb-4 font-medium">Follow Me</p>
              <div className="grid grid-cols-4 gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center gap-1.5 py-3 rounded-xl transition-all duration-300"
                    style={{
                      background: s.bg,
                      border: `1px solid ${s.color}25`,
                      color: s.color,
                    }}
                    aria-label={s.label}
                    title={s.label}
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span className="text-xs opacity-70">{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="rounded-2xl p-4 flex items-center gap-4"
              style={{
                background: 'rgba(34,197,94,0.06)',
                border: '1px solid rgba(34,197,94,0.2)',
              }}
            >
              <div className="relative flex-shrink-0">
                <span className="block w-3 h-3 rounded-full bg-green-400" />
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
              </div>
              <div>
                <p className="text-green-400 text-sm font-semibold">Available for Work</p>
                <p className="text-green-500/60 text-xs">Open to freelance & full-time opportunities</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
