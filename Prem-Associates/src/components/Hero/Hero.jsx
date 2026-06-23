import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import SearchBar from '../SearchBar/SearchBar'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { MdVerified } from 'react-icons/md'

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85',
    tag: 'Residential Plots',
    title: 'Find A Home That\nFits Your Dream',
    subtitle: 'Buy, Sell and Invest in Premium Properties with Prem Associates.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
    tag: 'Luxury Villas',
    title: 'Premium Villas &\nModern Residences',
    subtitle: 'Discover exclusive properties in Sector 85, Faridabad with guaranteed legal support.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85',
    tag: 'Commercial Plots',
    title: 'Smart Commercial\nInvestments Await',
    subtitle: 'Grow your business with strategically located commercial properties in Faridabad.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[100dvh] lg:h-screen lg:min-h-[700px] lg:max-h-[950px] overflow-hidden" aria-label="Hero Section">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="absolute inset-0 w-full h-full"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 hero-overlay" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container-custom pt-20 pb-44 sm:pb-36 lg:pt-32 lg:pb-24 text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 text-primary-400 text-[11px] sm:text-sm font-medium px-3.5 py-1.5 rounded-full mb-3 sm:mb-6 backdrop-blur-sm"
          >
            <MdVerified className="text-primary-400" />
            Trusted Real Estate Consultant in Faridabad
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-shadow-lg mb-3 sm:mb-6 whitespace-pre-line"
          >
            Find A Home That{'\n'}
            <span className="gradient-text">Fits Your Dream</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="text-gray-200 text-sm sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-8 max-w-xl text-shadow"
          >
            Buy, Sell and Invest in Premium Properties with Prem Associates.
            Your trusted partner in Sector 85, Faridabad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 sm:mb-10"
          >
            <Link to="/properties" className="btn-primary text-sm sm:text-base px-5 py-2.5 sm:px-7 sm:py-3.5">
              Browse Properties <HiOutlineArrowNarrowRight className="text-xl" />
            </Link>
            <Link to="/contact" className="btn-outline text-sm sm:text-base px-5 py-2.5 sm:px-7 sm:py-3.5">
              Free Consultation
            </Link>
          </motion.div>

          {/* Stats strip (hidden on mobile, shown on desktop) */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            className="hidden md:flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10"
          >
            {[
              { number: '500+', label: 'Properties Sold' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '30+', label: 'Years Experience' },
            ].map(({ number, label }) => (
              <div key={label} className="text-center sm:text-left">
                <p className="font-display text-2xl sm:text-3xl font-bold text-primary-400">{number}</p>
                <p className="text-gray-400 text-sm">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Search Bar container - absolute bottom on all devices, styled tighter for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="absolute bottom-0 left-0 right-0 z-10 pb-4 sm:pb-6 md:pb-8"
      >
        <div className="container-custom">
          <SearchBar />
        </div>
      </motion.div>
    </section>
  )
}
