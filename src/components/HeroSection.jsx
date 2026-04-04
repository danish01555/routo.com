import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              <div>
                <p className="text-3xl font-bold text-primary-600">50K+</p>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-teal">100K+</p>
                <p className="text-gray-600">Rides Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-purple">$12M</p>
                <p className="text-gray-600">Saved Together</p>
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
             <svg viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg" width="390" height="844" font-family="Segoe UI, Arial, sans-serif">


  <rect width="390" height="844" fill="#F7F8FA" rx="32"/>

 
  <defs>
    <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0AB3B8"/>
      <stop offset="100%" stop-color="#0693C5"/>
    </linearGradient>
    <clipPath id="roundedClip">
      <rect width="390" height="844" rx="32"/>
    </clipPath>
  </defs>
  <g clip-path="url(#roundedClip)">

  <rect width="390" height="230" fill="url(#headerGrad)"/>

  
  <rect x="20" y="22" width="36" height="36" rx="10" fill="rgba(255,255,255,0.25)"/>
  <ellipse cx="38" cy="47" rx="10" ry="5" fill="rgba(255,255,255,0.2)"/>
  <circle cx="38" cy="40" r="7" fill="white"/>
  <circle cx="38" cy="40" r="4" fill="#0AB3B8"/>
  <rect x="34" y="46" width="8" height="3" rx="1.5" fill="white"/>

  <text x="62" y="46" font-size="22" font-weight="700" fill="white">Routo</text>

  
  <path d="M340 28 C340 22 348 18 352 18 C356 18 364 22 364 28 C364 34 366 37 367 40 L337 40 C338 37 340 34 340 28Z" stroke="white" stroke-width="1.8" fill="none"/>
  <path d="M349 42 A3 3 0 0 0 355 42" stroke="white" stroke-width="1.8" fill="none"/>
  
  <circle cx="366" cy="20" r="8" fill="#E74C3C"/>
  <text x="366" y="24" text-anchor="middle" font-size="9" font-weight="700" fill="white">3</text>

  <circle cx="385" cy="30" r="6" stroke="white" stroke-width="1.8" fill="none"/>
  <path d="M374 50 C374 44 378 41 385 41 C392 41 396 44 396 50" stroke="white" stroke-width="1.8" fill="none" stroke-linecap="round"/>

  
  <text x="20" y="110" font-size="26" font-weight="800" fill="white">Find Your Ride</text>
  <text x="20" y="132" font-size="14" fill="rgba(255,255,255,0.82)">Best transport options near you</text>

  <rect x="16" y="175" width="358" height="90" rx="18" fill="white" filter="url(#shadow)"/>
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.10)"/>
    </filter>
  </defs>

  
  <circle cx="68" cy="207" r="26" fill="#E8F7FA"/>
  <polygon points="68,195 75,218 68,214 61,218" fill="#0AB3B8"/>
  <text x="68" y="246" text-anchor="middle" font-size="12" font-weight="500" fill="#333">Track</text>

  
  <circle cx="158" cy="207" r="26" fill="#F0E8FA"/>
  <rect x="145" y="199" width="26" height="18" rx="3" fill="#8B5CF6"/>
  <rect x="148" y="204" width="10" height="4" rx="1" fill="white"/>
  <line x1="145" y1="205" x2="171" y2="205" stroke="white" stroke-width="1.5"/>
  <text x="158" y="246" text-anchor="middle" font-size="12" font-weight="500" fill="#333">Pay</text>

  
  <circle cx="248" cy="207" r="26" fill="#FDEAEA"/>
  <circle cx="248" cy="207" r="16" fill="#E53E3E"/>
  <text x="248" y="211" text-anchor="middle" font-size="7" font-weight="700" fill="white">SOS</text>
  <text x="248" y="246" text-anchor="middle" font-size="12" font-weight="500" fill="#333">SOS</text>

  
  <circle cx="338" cy="207" r="26" fill="#E8F7FA"/>
  <rect x="325" y="196" width="26" height="22" rx="3" fill="#0AB3B8"/>
  <line x1="329" y1="202" x2="335" y2="202" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="329" y1="207" x2="347" y2="207" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="329" y1="212" x2="344" y2="212" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  <text x="338" y="246" text-anchor="middle" font-size="12" font-weight="500" fill="#333">Report</text>

  <rect x="16" y="268" width="358" height="42" rx="12" fill="white"/>
  
  <line x1="36" y1="283" x2="52" y2="283" stroke="#555" stroke-width="2" stroke-linecap="round"/>
  <line x1="39" y1="289" x2="49" y2="289" stroke="#555" stroke-width="2" stroke-linecap="round"/>
  <line x1="42" y1="295" x2="46" y2="295" stroke="#555" stroke-width="2" stroke-linecap="round"/>
  <text x="60" y="294" font-size="14" fill="#555">Filters</text>
  
  <rect x="318" y="278" width="46" height="22" rx="11" fill="#E8F7FA"/>
  <text x="341" y="293" text-anchor="middle" font-size="12" font-weight="600" fill="#0693C5">Active</text>

 
  <text x="16" y="334" font-size="17" font-weight="700" fill="#1a1a1a">Nearby Transport</text>

  
  <rect x="16" y="346" width="358" height="130" rx="16" fill="white"/>
  <rect x="16" y="346" width="4" height="130" rx="2" fill="#0AB3B8"/>

  <rect x="28" y="362" width="36" height="20" rx="5" fill="#1a1a1a"/>
  <text x="46" y="376" text-anchor="middle" font-size="11" font-weight="700" fill="white">Bus</text>
  
  <rect x="70" y="362" width="72" height="20" rx="5" fill="#E8F5E9"/>
  <text x="106" y="376" text-anchor="middle" font-size="11" fill="#2E7D32">low crowd</text>
  
  <path d="M358 372 L366 380 L358 388" stroke="#aaa" stroke-width="2" stroke-linecap="round" fill="none"/>

  <text x="28" y="404" font-size="15" font-weight="800" fill="#1a1a1a">Route 24A - Indore to Vijay Nagar</text>
  <text x="28" y="422" font-size="12" fill="#888">Central Bus Stand → Vijay Nagar</text>

  <line x1="28" y1="442" x2="358" y2="442" stroke="#F0F0F0" stroke-width="1"/>
  <text x="28" y="460" font-size="12" fill="#555">₹ ₹15</text>
  <text x="108" y="460" font-size="12" fill="#555">🕐 3 min</text>
  <text x="198" y="460" font-size="12" fill="#555">📍 200m</text>


  <rect x="16" y="490" width="358" height="160" rx="16" fill="#F0FDF9"/>
  <rect x="16" y="490" width="358" height="160" rx="16" fill="none" stroke="#B2E8D8" stroke-width="1"/>

  
  <rect x="28" y="506" width="66" height="20" rx="5" fill="#0AB3B8"/>
  <text x="61" y="520" text-anchor="middle" font-size="11" font-weight="700" fill="white">GoShare</text>
  
  <circle cx="104" cy="516" r="8" fill="#0AB3B8"/>
  <path d="M100 516 L103 519 L108 513" stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none"/>
 
  <text x="118" y="521" font-size="13" fill="#F59E0B">★</text>
  <text x="132" y="521" font-size="12" fill="#555">4.5</text>
 
  <path d="M358 516 L366 524 L358 532" stroke="#aaa" stroke-width="2" stroke-linecap="round" fill="none"/>

  
  <text x="28" y="550" font-size="16">🚴</text>
  
  <rect x="52" y="536" width="88" height="20" rx="10" fill="#E8F5E9"/>
  <text x="96" y="550" text-anchor="middle" font-size="11" fill="#2E7D32">2 seats left</text>

  <text x="28" y="577" font-size="16" font-weight="800" fill="#1a1a1a">Scooty to Prem Nagar</text>
  <text x="28" y="594" font-size="12" fill="#888">Upes Parking → Prem Nagar</text>
  <text x="28" y="612" font-size="12" font-weight="500" fill="#E53E3E">⚠ Leaving in 10 min</text>

  <line x1="28" y1="626" x2="358" y2="626" stroke="#C6EAE0" stroke-width="1"/>
  <text x="28" y="643" font-size="12" fill="#444">₹ </text>
  <text x="40" y="643" font-size="14" font-weight="700" fill="#1a1a1a">₹40</text>
  <text x="72" y="643" font-size="12" font-weight="600" fill="#0AB3B8">User-set</text>
  <text x="155" y="643" font-size="12" fill="#444">🕐 6:30 PM</text>
  <text x="248" y="643" font-size="12" fill="#444">📍 300m</text>

 
  <rect x="0" y="756" width="390" height="88" fill="#1a2235"/>

  <circle cx="49" cy="782" r="20" fill="#0AB3B8"/>
  <path d="M49 770 C44 770 41 774 41 778 C41 784 49 790 49 790 C49 790 57 784 57 778 C57 774 54 770 49 770Z" fill="white"/>
  <circle cx="49" cy="778" r="3" fill="#0AB3B8"/>
  <text x="49" y="812" text-anchor="middle" font-size="10" font-weight="600" fill="#0AB3B8">Home</text>

  <circle cx="140" cy="782" r="9" stroke="#777" stroke-width="1.8" fill="none"/>
  <line x1="136" y1="782" x2="144" y2="782" stroke="#777" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="140" y1="778" x2="140" y2="786" stroke="#777" stroke-width="1.8" stroke-linecap="round"/>
  <text x="140" y="812" text-anchor="middle" font-size="10" fill="#666">Offer Ride</text>

 
  <circle cx="245" cy="782" r="9" stroke="#777" stroke-width="1.8" fill="none"/>
  <line x1="245" y1="776" x2="245" y2="782" stroke="#777" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="245" y1="782" x2="249" y2="786" stroke="#777" stroke-width="1.8" stroke-linecap="round"/>
  <text x="245" y="812" text-anchor="middle" font-size="10" fill="#666">History</text>

 
  <circle cx="341" cy="777" r="5" stroke="#777" stroke-width="1.8" fill="none"/>
  <path d="M332 790 C332 786 336 783 341 783 C346 783 350 786 350 790" stroke="#777" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <text x="341" y="812" text-anchor="middle" font-size="10" fill="#666">Profile</text>

  </g>
</svg>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
