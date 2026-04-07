import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import buslogorouto from '../photos/buslogorouto.png'

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', to: '/features' },
      { name: 'Pricing', to: '#' },
      { name: 'Security', to: '#' },
      { name: 'Blog', to: '#' },
    ],
    company: [
      { name: 'About', to: '/about' },
      { name: 'Careers', to: '#' },
      { name: 'Press', to: '#' },
      { name: 'Contact', to: '/contact' },
    ],
    legal: [
      { name: 'Privacy', to: '#' },
      { name: 'Terms', to: '#' },
      { name: 'Security', to: '#' },
      { name: 'Cookies', to: '#' },
    ],
    social: [
      { icon: 'f', name: 'Facebook' },
      { icon: 'tw', name: 'Twitter' },
      { icon: 'ig', name: 'Instagram' },
      { icon: 'li', name: 'LinkedIn' },
    ],
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-secondary-900 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={buslogorouto} alt="Routo Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold">Routo</span>
            
            
          
            </Link>
            <p className="text-gray-400 text-sm">Share Rides. Save Money. Travel Smart.</p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-400 hover:text-primary-600 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.icon}
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  title={social.name}
                >
                  <span className="text-white font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Routo. All rights reserved. Powered by innovation.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary-600 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
