import { motion } from 'framer-motion'

export default function About() {
  const team = [
    {
      name: 'Mayank singh chouhan',
      role: 'Founder & CEO',
      linkedin: 'https://www.linkedin.com/in/mayank-singh100705/',
      initial: 'MS',
     
    },
    {
      name: 'Danish Alam',
      role: 'Developer & CTO',
      linkedin: 'https://www.linkedin.com/in/danish-alam-ba03a3287',
     initial: 'DA',
    },
    {
      name: 'Harsh Anand ',
      role: 'Exeecutive Leadership',
      linkedin: 'https://www.linkedin.com/in/harsh-anand-736a31303/',
      initial: 'HA',
    },
    {
      name: 'Akshat Sajwan',
      role: 'Exeecutive Leadership',
      linkedin: 'https://www.linkedin.com/in/akshat-sajwan-9b1a4b1b2/',
      initial: 'AS',
    },
    {
      name: 'Piyush agrawal',
      role: 'Exeecutive Leadership',
      linkedin: 'https://www.linkedin.com/in/akshat-sajwan-9b1a4b1b2/',
      initial: 'PA',
    },
    {
      name: 'Rounak goyal',
      role: 'Exeecutive Leadership',
      linkedin: 'https://www.linkedin.com/in/raunak-goyal-91bb0a342/',
      initial: 'RG',
    },
     {
      name: 'Pratham Thakuran',
      role: 'Exeecutive Leadership',
      linkedin: 'https://www.linkedin.com/in/pratham-thakuran-832184325/',
      initial: 'PT',
    },
     {
      name: 'Arnav Thapliyal',
      role: 'co-founder & COO',
      linkedin: 'https://www.linkedin.com/in/arnavthapliyal/',
      initial: 'AT',
    },
   
  ]

  const values = [
    {
      title: 'Affordability',
      description: 'Making quality transportation accessible to everyone, reducing costs by up to 70%.',
      icon: '💰',
    },
    {
      title: 'Safety',
      description: 'Your security is our priority. Verified riders and drivers with 24/7 support.',
      icon: '🔒',
    },
    {
      title: 'Trust',
      description: 'Transparent pricing, honest ratings, and no hidden charges ever.',
      icon: '🤝',
    },
    {
      title: 'Sustainability',
      description: 'Reducing carbon footprint by encouraging ride-sharing and efficient transportation.',
      icon: '🌍',
    },
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
              About <span className="text-primary-600">Routo</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Revolutionizing urban mobility by connecting riders and reducing transportation costs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To make affordable, safe, and efficient transportation accessible to every student and commuter. We believe that sharing rides shouldn't just save money—it should build trust, reduce traffic, and create a better future for urban mobility.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A world where intelligent ride-sharing reduces traffic congestion, lowers transportation costs, and minimizes environmental impact. We're building the future of urban commuting where technology connects people, saves money, and creates meaningful relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">What drives everything we do at Routo</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-description">Talented individuals passionate about transforming mobility</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-accent-teal to-accent-purple rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  {member.initial}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-red-600 underline"><a href={member.linkedin} target="_blank" rel="noopener noreferrer">
  LINKEDIN PROFILE
</a></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Story</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="card space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              Routo began as a simple observation: students and working professionals were spending massive amounts on daily commutes while sitting in cars with empty seats. There had to be a better way.
            </p>
            <p>
              Founded in 2024, Routo emerged from the need for an intelligent, trustworthy platform that brings commuters together. Our team of engineers, designers, and operations experts came together with a shared mission to revolutionize urban mobility.
            </p>
            <p>
              Today, we're proud to have connected over 50,000 users who have collectively completed 100,000+ rides and saved $12 million on transportation costs. But we're just getting started. Every day, we're improving our algorithms, expanding to new cities, and making ride-sharing more accessible.
            </p>
            <p>
              Our journey is driven by our users. Every piece of feedback, every shared ride, every saved dollar—they all inspire us to build something better. Join us as we reshape the future of urban transportation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Milestones</h2>
            <p className="section-description">Key moments in our journey</p>
          </motion.div>

          <div className="relative">
            <div className="space-y-8">
              {[
                { year: '2025-26', title: 'Founded Routo', desc: 'Started with a vision to revolutionize ride-sharing' },
                { year: '2026 Q2', title: '35+ vehicle', desc: 'Reaching 100+ vehicles as soon as possible' },
                { year: '2026 Q3', title: 'Launching soon', desc: 'Connecting  soon thousands of commuters' },
                
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-600 to-accent-teal rounded-lg flex flex-col items-center justify-center text-white flex-shrink-0">
                    <div className="text-2xl font-bold">{milestone.year}</div>
                  </div>
                  <div className="flex-grow card">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-teal to-accent-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Be Part of Our Story</h2>
            <p className="text-xl text-white/90 mb-8">Join thousands transforming the future of urban mobility</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-accent-teal font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Sharing
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-accent-teal transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
