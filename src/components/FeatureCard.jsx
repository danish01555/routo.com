import { motion } from 'framer-motion'

export default function FeatureCard({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card group cursor-pointer"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-teal rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-secondary-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
