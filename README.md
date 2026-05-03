# OpsForge - Business Automation & Website Development

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-tsumpbqa)

A modern, feature-rich website for an Indian SMB-focused business automation and web development agency.

## ✨ Features

### Core Features
- **React 18** + **TypeScript** - Modern, type-safe React development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing with prefetching

### Enhancements Implemented

1. **React Router Integration** - Replaced custom routing with industry-standard React Router for better performance and maintainability

2. **Supabase Integration** - Backend database for:
   - Contact form submissions
   - Newsletter subscriptions
   - Blog posts (dynamic content)
   - User management (future enterprise features)

3. **Animations** - Framer Motion for:
   - Page transitions
   - Card hover effects
   - Scroll animations
   - Micro-interactions

4. **SEO & Performance** - React Helmet for:
   - Dynamic meta tags on each page
   - Open Graph integration
   - Structured data (JSON-LD)
   - Performance monitoring

5. **Testing** - Vitest + React Testing Library:
   - Unit tests for components
   - Accessibility testing
   - CI/CD integration
   - Coverage reporting

6. **Rich Content Components**:
   - Testimonial cards with ratings
   - Newsletter signup form
   - Interactive pricing calculator
   - Resources/Downloads section

7. **UX & Accessibility**:
   - Dark mode toggle with theme persistence
   - Form validation utilities
   - ARIA labels and screen reader support
   - Skip-to-content link for keyboard navigation

8. **Analytics & Monitoring**:
   - Google Analytics integration
   - Web Vitals tracking (LCP, FID, CLS)
   - Error tracking setup (Sentry)
   - Custom event tracking

9. **Internationalization (i18n)**:
   - English & Hindi translations
   - Language switcher component
   - Persistent language preference
   - Easy to extend to more languages

10. **CI/CD & Deployment**:
    - GitHub Actions workflow for automated testing & deployment
    - Vercel configuration for serverless deployment
    - Netlify configuration for edge deployment
    - Security headers & caching strategies

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd flowbotiq

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Add your environment variables
# Edit .env with your credentials:
# - Supabase URL and keys
# - Google Analytics ID (optional)
# - Sentry DSN (optional)
```

### Development

```bash
# Start dev server
npm run dev

# Open http://localhost:5173 in browser
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Testing
npm test                 # Run tests
npm run test:ui          # Open test UI
npm run test:coverage    # Generate coverage report

# Code Quality
npm run lint             # Run ESLint
npm run typecheck        # Run TypeScript check
npm run lint -- --fix    # Auto-fix linting issues
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AnimatedCard.tsx
│   ├── PageTransition.tsx
│   ├── LanguageSwitcher.tsx
│   ├── ThemeToggle.tsx
│   ├── TestimonialCard.tsx
│   ├── NewsletterSignup.tsx
│   ├── PricingCalculator.tsx
│   ├── Resources.tsx
│   └── SkipToContent.tsx
├── pages/               # Page components (routes)
│   ├── Home.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── VideoHub.tsx
│   └── CaseStudies.tsx
├── lib/                 # Utility functions
│   ├── supabase.ts      # Database client
│   ├── seo.tsx          # SEO utilities
│   ├── animations.ts    # Animation variants
│   ├── analytics.ts     # Tracking utilities
│   └── accessibility.ts # a11y helpers
├── hooks/              # Custom React hooks
│   └── useAnalytics.ts # Analytics hook
├── context/            # React context
│   └── ThemeContext.tsx # Dark mode context
├── config/             # Configuration
│   └── analytics.ts    # Analytics setup
├── i18n/              # Internationalization
│   └── config.ts      # i18n initialization
├── locales/           # Translation files
│   ├── en.json       # English translations
│   └── hi.json       # Hindi translations
├── test/              # Test files
│   ├── setup.ts
│   ├── Home.test.tsx
│   └── Navbar.test.tsx
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vitest.config.ts` - Testing configuration
- `vercel.json` - Vercel deployment config
- `netlify.toml` - Netlify deployment config
- `.env.example` - Environment variables template

## 🌍 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- Vercel
- Netlify
- Docker
- GitHub Pages

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm run test:coverage

# Open test UI
npm run test:ui
```

## 🔐 Environment Variables

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
VITE_SENTRY_DSN=your-sentry-dsn
```

## 📦 Dependencies

### Core
- react 18
- react-dom 18
- react-router-dom (client-side routing)
- typescript 5

### UI & Styling
- tailwindcss
- framer-motion (animations)
- lucide-react (icons)

### Features
- @supabase/supabase-js (backend)
- react-helmet-async (SEO)
- i18next + react-i18next (translations)

### Development
- vite (build tool)
- vitest (testing)
- @testing-library/react (component testing)
- eslint (code quality)

## 🎨 Customization

### Colors & Branding
Edit `tailwind.config.js` to customize colors, fonts, and spacing.

### Content
All page content is in `src/pages/`. Each page has a `<SEO>` component for meta tags.

### Translations
Add new languages by:
1. Creating `src/locales/[lang].json`
2. Updating language switcher in `src/components/LanguageSwitcher.tsx`
3. Updating `src/i18n/config.ts`

## 📊 Analytics Setup

To enable analytics:

1. **Google Analytics**
   - Get ID from [analytics.google.com](https://analytics.google.com)
   - Add `VITE_GOOGLE_ANALYTICS_ID` to environment

2. **Sentry Error Tracking** (optional)
   - Get DSN from [sentry.io](https://sentry.io)
   - Add `VITE_SENTRY_DSN` to environment

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Run tests: `npm test`
4. Run linter: `npm run lint -- --fix`
5. Commit with clear messages
6. Push and create pull request

## 📝 License

Proprietary - OpsForge. All rights reserved.

## 📞 Support

For issues or questions, contact: hello@opsforge.in
