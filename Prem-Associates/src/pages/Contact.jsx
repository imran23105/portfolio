import { motion } from 'framer-motion'
import Seo from '../seo/Seo'
import { contactSchema } from '../utils/schema'
import MiniHero from '../components/MiniHero/MiniHero'
import ContactForm from '../components/ContactForm/ContactForm'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const contactDetails = [
  {
    icon: <HiLocationMarker className="text-2xl" />,
    title: 'Visit Our Office',
    content: (
      <>
        1st Floor, Green Avenue, Shop No-5, S3,<br />
        Sector 85, Faridabad, Haryana 121007
      </>
    ),
  },
  {
    icon: <HiPhone className="text-2xl" />,
    title: 'Call / WhatsApp',
    content: (
      <>
        <a href="tel:+919990713111" className="hover:text-primary-400 block transition-colors">
          +91 99907 13111
        </a>
        <a
          href="https://wa.me/919990713111"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-400 flex items-center gap-1.5 mt-1 transition-colors"
        >
          <FaWhatsapp className="text-green-500" /> Chat on WhatsApp
        </a>
      </>
    ),
  },
  {
    icon: <HiMail className="text-2xl" />,
    title: 'Email Address',
    content: (
      <a href="mailto:info@premassociates.in" className="hover:text-primary-400 block transition-colors">
        info@premassociates.in
      </a>
    ),
  },
  {
    icon: <HiClock className="text-2xl" />,
    title: 'Business Hours',
    content: (
      <>
        Monday – Sunday<br />
        <span className="text-primary-400 font-semibold">10:00 AM – 10:00 PM</span>
      </>
    ),
  },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Prem Associates | Property Dealer Faridabad"
        description="Get in touch with Prem Associates for property consultation, plots sale and real estate services in Sector 85 Faridabad."
        canonical="https://premassociates.in/contact"
        schema={contactSchema}
      />

      <MiniHero
        subtitle="Get in Touch"
        title="Contact Our Property Experts"
        breadcrumb={['Home', 'Contact']}
        bgImage="https://images.unsplash.com/photo-1423784346385-c1d4dde9b947?w=1400&q=80"
      />

      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 card-glass p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <p className="section-subtitle mb-2">Send Message</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                  Tell Us About Your Requirements
                </h2>
                <ContactForm />
              </div>
            </motion.div>

            {/* Info Cards Section */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactDetails.map((detail, idx) => (
                  <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="card-glass p-6 flex gap-4 items-start border-white/5 hover:border-primary-500/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-600/10 border border-primary-500/20 rounded-xl flex items-center justify-center text-primary-500 shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white mb-1.5">
                        {detail.title}
                      </h3>
                      <div className="text-gray-400 text-sm leading-relaxed">
                        {detail.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Socials Connection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-glass p-6 text-center border-white/5"
              >
                <h3 className="font-display text-base font-bold text-white mb-4">
                  Connect With Us Online
                </h3>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
                    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
                    { icon: <FaWhatsapp />, href: 'https://wa.me/919990713111', label: 'WhatsApp' },
                    { icon: <FaYoutube />, href: '#', label: 'YouTube' },
                  ].map(({ icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={label}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Map embed Section ─── */}
      <section className="h-[450px] relative overflow-hidden bg-dark-900 border-t border-white/5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.2345864389025!2d77.34861537632616!3d28.344158496736238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc7a16f2c253%3A0xc3c5097f48cb9fb3!2sSector%2085%2C%20Faridabad%2C%20Haryana%20121007!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0 grayscale invert contrast-125 opacity-70 hover:opacity-100 hover:grayscale-0 hover:invert-0 hover:contrast-100 transition-all duration-700"
          allowFullScreen=""
          loading="lazy"
          title="Prem Associates Location Map"
          aria-label="Google Map showing Prem Associates Location"
        />
      </section>
    </>
  )
}
