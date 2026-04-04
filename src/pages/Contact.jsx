import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobRole: '',
    about: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', jobRole: '', about: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      content: 'support@routo.in',
      description: 'We respond within 24 hours',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91 986 102 ROUTO (7686)',
      description: 'Available 24/7 for urgent matters',
    },
    {
      icon: '📍',
      title: 'Address',
      content: 'Bangalore, India',
      description: 'Tech Park, Whitefield',
    },
    {
      icon: '💬',
      title: 'Chat',
      content: 'Live Chat Support',
      description: 'Instant support via web/app',
    },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: 'f', url: '#' },
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: 'in', url: '#' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
              Get In <span className="text-primary-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{method.title}</h3>
                <p className="font-semibold text-primary-600 mb-2">{method.content}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">APPLY HERE FOR JOB</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you soon. Thank you for reaching out!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-secondary-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition-colors duration-300"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold text-secondary-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition-colors duration-300"
                    />
                  </motion.div>

                  {/* Subject */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-secondary-900 mb-2">
                      Job role you are applying for.
                    </label>
                    <input
                      type="text"
                      name="jobRole"
                      value={formData.jobRole}
                      onChange={handleChange}
                      required
                      placeholder="eg: Software Engineer, frontend developer, etc"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition-colors duration-300"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-secondary-900 mb-2">
                      About yourself
                    </label>
                    <textarea
                      name="about"
                      value={formData.about}
                      onChange={handleChange}
                      required
                      placeholder="Write about yourselfhere..."
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition-colors duration-300 resize-none"
                    ></textarea>
                  </motion.div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Quick Response</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our support team typically responds to inquiries within 24 hours. For urgent matters, please call our hotline.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 8:00 PM</li>
                  <li><span className="font-semibold">Saturday - Sunday:</span> 10:00 AM - 6:00 PM</li>
                  <li><span className="font-semibold">Emergency Support:</span> 24/7 Available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-accent-teal transition-colors duration-300"
                      title={social.name}
                    >
                      <span className="font-bold">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="card bg-primary-50">
                <p className="text-gray-700">
                  <span className="font-bold text-primary-600">Help & FAQ:</span> Check our knowledge base for instant answers to common questions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">Find quick answers to common questions</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does it take to get verified?',
                a: 'Verification typically takes 1-2 hours during business hours. For urgent cases, priority verification is available.',
              },
              {
                q: 'What if a rider cancels my ride?',
                a: 'We automatically match you with another rider. If no match is found within 30 minutes, you get a full refund.',
              },
              {
                q: 'Is my payment information secure?',
                a: 'Yes! We use bank-level encryption and PCI compliance to protect your payment details.',
              },
              {
                q: 'How can I report an issue?',
                a: 'Use the in-app support feature or contact us via email/phone. We take all concerns seriously and respond within 24 hours.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card group cursor-pointer hover:border-primary-600"
              >
                <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-white/90 mb-8">Our team is here to help you 24/7</p>
            <button className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start a Live Chat
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
