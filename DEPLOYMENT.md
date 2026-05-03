# Deployment Guide

This project is configured for easy deployment to multiple platforms. Choose your preferred deployment method below.

## Prerequisites

- Node.js 18+ and npm
- Environment variables configured (see `.env.example`)
- Git repository initialized

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Fill in your credentials:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anon key
- `VITE_GOOGLE_ANALYTICS_ID` - Google Analytics ID (optional)
- `VITE_SENTRY_DSN` - Sentry error tracking (optional)

## Local Deployment

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
npm run preview
```

## Vercel Deployment

1. **Connect Repository**
   - Push code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

2. **Configure Environment Variables**
   - Add all variables from `.env.example` in Vercel dashboard
   - Project Settings > Environment Variables

3. **Deploy**
   - Vercel automatically deploys on push to `main` branch
   - Staging deploys for pull requests

4. **Custom Domain**
   - In Vercel dashboard > Domains
   - Add your custom domain

## Netlify Deployment

1. **Connect Repository**
   - Push code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Connect to Git"
   - Select your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment Variables**
   - Site settings > Build & deploy > Environment
   - Add all variables from `.env.example`

4. **Deploy**
   - Netlify automatically builds and deploys on push
   - Preview deploys for pull requests

## GitHub Actions CI/CD

The project includes automated CI/CD pipeline (`.github/workflows/ci-cd.yml`):

- **On every push/PR**: Run linting, type checking, and tests
- **On merge to main**: Build and deploy to Vercel/Netlify

### Setup GitHub Actions

1. Create GitHub secrets:
   - `VERCEL_TOKEN` - From Vercel account settings
   - `VERCEL_ORG_ID` - From Vercel account settings
   - `VERCEL_PROJECT_ID` - From Vercel project settings
   - `NETLIFY_AUTH_TOKEN` - From Netlify account settings
   - `NETLIFY_SITE_ID` - From Netlify site settings

2. Push to trigger automatic deployment

## Docker Deployment

### Build Docker Image
```bash
docker build -t flowbotiq .
```

### Run Container
```bash
docker run -p 3000:80 flowbotiq
```

## Performance Optimization

### Before Deployment

1. **Code Splitting**
   - Review `vite.config.ts` for optimization
   - Large bundles? Enable dynamic imports

2. **Minification**
   - Already enabled in production build
   - Check bundle size: `npm run build`

3. **Security**
   - Review `vercel.json` and `netlify.toml` headers
   - Ensure CORS is properly configured

### After Deployment

1. **Monitor Performance**
   - Enable Google Analytics (add `VITE_GOOGLE_ANALYTICS_ID`)
   - Enable error tracking (add `VITE_SENTRY_DSN`)

2. **Check Health**
   - Use Lighthouse in DevTools
   - Monitor Core Web Vitals in Google Analytics

3. **Update Dependencies**
   - Regularly run `npm update`
   - Test before deploying to production

## Troubleshooting

### Build Failing in CI/CD
1. Check logs in GitHub Actions / Vercel / Netlify dashboard
2. Ensure all environment variables are set
3. Run `npm run build` locally to debug

### Environment Variables Not Loading
1. Verify `.env` file is in root directory
2. Variables must start with `VITE_` for Vite
3. Restart dev server after changing `.env`

### Blank Page After Deployment
1. Check browser console for errors
2. Check network tab for failed requests
3. Verify `vercel.json` or `netlify.toml` SPA rewrites are correct

## Useful Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Run type checking
npm run typecheck

# Run linter
npm run lint

# Format code
npm run lint -- --fix
```

## Additional Resources

- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Supabase Documentation](https://supabase.io/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
