import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import TestimonialCard from '../components/TestimonialCard'

export default function Home() {
  const features = [
    {
      icon: '🚗',
      title: 'Smart Ride Matching',
      description: 'Our AI algorithm matches you with the perfect ride partner based on your route, schedule, and preferences.',
    },
    {
      icon: '💰',
      title: 'Save Up to 70%',
      description: 'Split fuel and toll costs with other riders. Save significantly on every journey you make.',
    },
    {
      icon: '📍',
      title: 'Real-Time Tracking',
      description: 'Live GPS tracking keeps you informed about driver location and estimated arrival time.',
    },
    {
      icon: '🔒',
      title: 'Secure & Safe',
      description: 'Verified profiles, secure payments, and emergency hotline for your complete peace of mind.',
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up with your email or phone number in just 2 minutes.',
    },
    {
      number: '02',
      title: 'Set Your Route',
      description: 'Enter your starting point and destination with preferred time.',
    },
    {
      number: '03',
      title: 'Find Your Match',
      description: 'See matching riders and choose your preferred travel companion.',
    },
    {
      number: '04',
      title: 'Travel & Save',
      description: 'Complete your ride and automatically split costs with matched riders.',
    },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'College Student',
      image: 'P',
      quote: 'Routo has saved me thousands on commute costs! Super reliable and safe.',
    },
    {
      name: 'Rahul Patel',
      role: 'IT Professional',
      image: 'R',
      quote: 'Amazing platform. Found my regular ride buddy and we save 60% daily!',
    },
    {
      name: 'Simran Singh',
      role: 'Business Owner',
      image: 'S',
      quote: 'As a frequent traveler, Routo makes my daily commute affordable and stress-free.',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose Routo?</h2>
            <p className="section-description">Everything you need for smart, affordable, and safe ride-sharing</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">How It Works</h2>
            <p className="section-description">Simple 4 steps to start sharing and saving</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card text-center">
                  <div className="text-5xl font-bold text-primary-600 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-600 hidden md:block"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What Our Users Say</h2>
            <p className="section-description">Join thousands of happy riders saving money daily</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-teal to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Saving?</h2>
            <p className="text-xl text-white/90 mb-8">Join the ride-sharing revolution and save money on every journey</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Download Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
