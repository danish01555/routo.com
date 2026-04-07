import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import homepage from '../photos/homepage.png'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-white to-gray-50 overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-40 left-20 w-72 h-72 bg-accent-teal rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-secondary-900 leading-tight mb-6"
            >
              Share Rides.<br />
              <span className="text-primary-600">Save Money.</span><br />
              Travel Smart.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 mb-8"
            >
              Join thousands of students and commuters saving up to 70% on travel costs. 
              Find your perfect ride match with our smart matching algorithm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button className="btn-primary text-lg">Start Ride</button>
              <button className="btn-secondary text-lg">Join Now</button>
              <br></br>
              {/*this is playstore button*/}
             

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              <div class="flex gap-4 flex-wrap items-center">

  
  <div class="relative inline-flex flex-col cursor-pointer">
    <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-400 text-white text-xs font-semibold px-3 py-0.5 rounded-full whitespace-nowrap z-10">
      Launching Soon
    </span>
    <a href="#" class="mt-1.5 block">
      <img 
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
        alt="Download on the App Store" 
        class="h-12 w-auto"
      />
    </a>
  </div>

 
  <div class="relative inline-flex flex-col cursor-pointer">
    <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-400 text-white text-xs font-semibold px-3 py-0.5 rounded-full whitespace-nowrap z-10">
      Launching Soon
    </span>
    <a href="#" class="mt-1.5 block">
      <img 
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
        alt="Get it on Google Play" 
        class="h-12 w-auto"
      />
    </a>
  </div>

</div>
 
            </motion.div>
           
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-full min-h-[500px]"
          >
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0"
            >
              {/* Car Illustration SVG */}
              <img src={homepage} alt="Car Illustration" className="w-full h-full object-contain" />
          
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
