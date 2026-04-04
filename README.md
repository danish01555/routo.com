# 🚗 Routo - Smart Ride-Sharing Platform

A modern, production-ready website for Routo, a smart ride-sharing platform for students and local commuters. Built with React.js, Tailwind CSS, and Framer Motion.

![Routo](https://img.shields.io/badge/Routo-Ride%20Sharing-FFD700)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-3.3.6-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### 🎨 Design & UX
- **Modern UI**: Clean, minimal design with premium startup vibe
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Framer Motion for delightful interactions
- **Color Scheme**: 
  - Primary: Yellow (#FFD700)
  - Secondary: Black & White
  - Accent: Teal (#1ABC9C) & Deep Purple (#4B2E83)

### 📄 Pages
- **Home**: Hero section, features showcase, how it works, testimonials
- **Features**: Detailed feature cards, comparison table, benefits
- **About**: Mission, vision, team bios, company story, milestones
- **Contact**: Contact form, multiple contact methods, FAQ section

### 🔧 Components
- **Navbar**: Sticky header with mobile hamburger menu
- **Footer**: Comprehensive footer with links and social media
- **FeatureCard**: Reusable component for showcasing features
- **TestimonialCard**: User testimonial display cards
- **HeroSection**: Eye-catching hero with animated elements

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Code editor (VS Code recommended)

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd routo-figma
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
routo-figma/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation bar
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── HeroSection.jsx     # Hero section with animations
│   │   ├── FeatureCard.jsx     # Reusable feature card
│   │   └── TestimonialCard.jsx # Testimonial display card
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Features.jsx        # Features page with details
│   │   ├── About.jsx           # About page with team
│   │   └── Contact.jsx         # Contact page with form
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & Tailwind
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite config
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
└── .gitignore                  # Git ignore rules
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **React Router 6** | Routing & navigation |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations & interactions |
| **Vite** | Fast build tool & dev server |
| **PostCSS** | CSS processing |

## 🎨 Color Palette

```
Primary Yellow:        #FFD700
Secondary Black:       #111827
Secondary White:       #FFFFFF
Accent Teal:          #1ABC9C
Accent Dark Teal:     #16A085
Accent Purple:        #4B2E83
```

## 📱 Responsive Breakpoints

The design is fully responsive with Tailwind's breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ✨ Key Features Explained

### Smart Ride Matching
AI-powered algorithm that matches riders based on route, schedule, and preferences.

### Cost Splitting
Automatic fuel and toll cost calculation and equal distribution among riders.

### Real-Time Tracking
Live GPS tracking with accurate ETAs and route optimization.

### Secure Payments
Multiple payment methods with bank-level encryption and full transparency.

## 🎯 Navigation

- **Home** (`/`) - Landing page with all key information
- **Features** (`/features`) - Detailed feature overview
- **About** (`/about`) - Company story and team
- **Contact** (`/contact`) - Contact form and support info

## 🔐 Security & Performance

✅ Responsive design optimized for all devices
✅ Fast loading with Vite bundling
✅ SEO-friendly structure
✅ Mobile-first approach
✅ Smooth animations with hardware acceleration
✅ Clean, maintainable code

## 📚 Component Documentation

### Navbar
- Sticky positioning
- Mobile hamburger menu
- Logo with gradient
- Navigation links
- CTA buttons

### FeatureCard
Props:
- `icon`: Emoji or icon
- `title`: Feature name
- `description`: Feature description
- `index`: For animation delay

### TestimonialCard
Props:
- `name`: User name
- `role`: User role
- `image`: Avatar initial
- `quote`: Testimonial text
- `index`: For animation delay

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Connect your Git repository to Netlify and it will auto-deploy.

### Traditional Hosting
```bash
npm run build
# Deploy the 'dist' folder to your web server
```

## 📈 Performance Optimization

- Lazy component loading
- Image optimization
- CSS purging with Tailwind
- Minified production builds
- Code splitting with React Router

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push
5. Create a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support & Contact

- **Email**: support@routo.in
- **Phone**: +91 986 102 7686
- **Live Chat**: Available on the website
- **GitHub Issues**: Report bugs and request features

## 🎉 Credits

- Design inspiration: Uber, Ola, modern startups
- Icons: Emoji & custom SVGs
- Animations: Framer Motion
- Styling: Tailwind CSS

## 📞 Get in Touch

For inquiries, partnerships, or support, visit our [Contact Page](http://localhost:3000/contact).

---

**Built with ❤️ by the Routo Team**

Share your rides. Save your money. Travel smart.
