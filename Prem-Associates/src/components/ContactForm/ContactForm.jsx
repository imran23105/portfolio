import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiUser, HiMail, HiPhone, HiChatAlt2 } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Buying',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-white mb-2">Thank You!</h3>
        <p className="text-gray-400">We'll get back to you within 24 hours.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary mt-6"
        >
          Send Another
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-4' : 'space-y-5'}>
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {/* Name */}
        <div className="relative">
          <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
            className="input-field pl-10"
          />
        </div>
        {/* Phone */}
        <div className="relative">
          <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="input-field pl-10"
          />
        </div>
      </div>

      {/* Email */}
      <div className="relative">
        <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="input-field pl-10"
        />
      </div>

      {/* Type */}
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="input-field"
      >
        <option value="Buying">I want to Buy a Property</option>
        <option value="Selling">I want to Sell a Property</option>
        <option value="Rent">Looking for Rental</option>
        <option value="Investment">Investment Consultation</option>
        <option value="Other">Other Inquiry</option>
      </select>

      {/* Message */}
      <div className="relative">
        <HiChatAlt2 className="absolute left-4 top-4 text-gray-500" />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your requirement..."
          rows={compact ? 3 : 4}
          className="input-field pl-10 resize-none"
        />
      </div>

      <div className="flex gap-3">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          className="btn-primary flex-1 justify-center disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </motion.button>
        <a
          href="https://wa.me/919990713111"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-xl" />
        </a>
      </div>
    </form>
  )
}
