import { motion } from 'framer-motion'

export default function TestimonialCard({ name, role, image, quote, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-primary-600">★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-accent-teal to-accent-purple rounded-full flex items-center justify-center text-white font-bold">
          {image}
        </div>
        <div>
          <h4 className="font-bold text-secondary-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
