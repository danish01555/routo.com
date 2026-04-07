import { motion } from 'framer-motion'
import FeatureCard from '../components/FeatureCard'
import feedback from '../photos/feedback.png'
import goshare_details from '../photos/goshare_details.png'
import profile from '../photos/profile.png'
import goshare_ride from '../photos/goshare_ride.png'
import map from '../photos/map.png'
import notification from '../photos/notification.png'
import history from '../photos/history.png'
import sos from '../photos/sos.png'

export default function Features() {
  const allFeatures = [
    {
      icon: '🚗',
      title: 'Smart Ride Matching',
      description: 'Our advanced AI algorithm analyzes your route, schedule, and preferences to match you with compatible riders, ensuring optimal travel experiences.',
    },
    {
      icon: '💰',
      title: 'Automatic Cost Splitting',
      description: 'Fuel, tolls, and parking costs are automatically calculated and equally split among all riders in the vehicle.',
    },
    {
      icon: '📍',
      title: 'Real-Time GPS Tracking',
      description: 'Live tracking keeps everyone informed. Know exactly where the driver is and get accurate ETA updates.',
    },
    {
      icon: '🔒',
      title: 'Verified Safety',
      description: 'All riders are verified with ID checks. Emergency hotline and in-app support available 24/7.',
    },
    {
      icon: '⭐',
      title: 'Rating System',
      description: 'Rate and review riders and drivers. Build trust through transparent feedback and ratings.',
    },
    {
      icon: '📱',
      title: 'Mobile App',
      description: 'Seamless mobile experience with push notifications, chat messaging, and easy booking.',
    },
    {
      icon: '🗓️',
      title: 'Recurring Rides',
      description: 'Set up recurring rides for your regular commute. Automatic matching with same-route riders.',
    },
    {
      icon: '💳',
      title: 'Secure Payments',
      description: 'Multiple payment options including digital wallets, cards, and bank transfers with full encryption.',
    },
  ]

  const detailedFeatures = [
    {
      title: 'Ride Sharing',
      icon: '🚗',
      points: [
        'Smart algorithm for optimal matching',
        'Real-time ride availability',
        'Flexible route preferences',
        'Multi-way routing support',
        'Express ride option',
      ],
    },
    {
      title: 'Cost Splitting',
      icon: '💰',
      points: [
        'Transparent cost breakdown',
        'Automatic fare calculation',
        'Multiple payment methods',
        'No hidden charges',
        'Instant payment settlement',
      ],
    },
    {
      title: 'Live Tracking',
      icon: '📍',
      points: [
        'Real-time GPS tracking',
        'Accurate ETA updates',
        'Route optimization',
        'Traffic updates',
        'Chat with driver',
      ],
    },
    {
      title: 'Secure Authentication',
      icon: '🔐',
      points: [
        'Two-factor authentication',
        'Identity verification',
        'Emergency contacts',
        'Ride history records',
        'Privacy protection',
      ],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              Powerful Features for <span className="text-primary-600">Smart Commuting</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-2 sm:px-0">
              Everything you need to share rides safely, save money, and travel efficiently
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {allFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/* image sections*/}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="section-title">Routo App Details</h2>
            <p className="section-description">See how our app's features set us apart</p>
          </motion.div>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <img src={goshare_details} alt="GoShare Details" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={goshare_ride} alt="GoShare Ride" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={map} alt="Map View" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={notification} alt="Notifications" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={history} alt="Ride History" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={sos} alt="SOS Button" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={profile} alt="User Profile" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={feedback} alt="Feedback" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>


      {/* Detailed Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Deep Dive Into Our Features</h2>
            <p className="section-description">Comprehensive tools for every aspect of your journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-secondary-900">{feature.title}</h3>
                </div>
                <ul className="space-y-4">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-primary-600 font-bold text-xl mt-0.5">✓</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Routo is Different</h2>
            <p className="section-description">See how we compare to traditional transportation</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto rounded-3xl border border-gray-200"
          >
            <table className="min-w-[640px] w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-primary-600">Routo</th>
                  <th className="text-center py-4 px-6 font-bold">Taxi</th>
                  <th className="text-center py-4 px-6 font-bold">Public Transport</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-semibold">Cost</td>
                  <td className="text-center py-4 px-6">💰</td>
                  <td className="text-center py-4 px-6">💰💰💰</td>
                  <td className="text-center py-4 px-6">💰</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-semibold">Safety</td>
                  <td className="text-center py-4 px-6">✓✓✓</td>
                  <td className="text-center py-4 px-6">✓✓</td>
                  <td className="text-center py-4 px-6">✓✓</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-semibold">Flexibility</td>
                  <td className="text-center py-4 px-6">✓✓✓</td>
                  <td className="text-center py-4 px-6">✓✓✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-semibold">Comfort</td>
                  <td className="text-center py-4 px-6">✓✓✓</td>
                  <td className="text-center py-4 px-6">✓✓✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-semibold">24/7 Support</td>
                  <td className="text-center py-4 px-6">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                  <td className="text-center py-4 px-6">✓</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-semibold">Eco-Friendly</td>
                  <td className="text-center py-4 px-6">✓✓</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6">✓✓✓</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-purple to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Experience the Difference</h2>
            <p className="text-xl text-white/90 mb-8">Start using these powerful features today</p>
            <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Started Free
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
