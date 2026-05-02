#!/bin/bash

# Deployment script for Flowbotiq
# Usage: ./deploy.sh [platform]
# Platforms: vercel, netlify, gh-pages

set -e

PLATFORM=${1:-vercel}

echo "🚀 Deploying Flowbotiq to $PLATFORM"

# Check if we're on main branch
if [ "$GITHUB_REF" != "refs/heads/main" ] && [ -z "$FORCE_DEPLOY" ]; then
  echo "❌ Not on main branch. Use FORCE_DEPLOY=1 to override."
  exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run tests
echo "🧪 Running tests..."
npm run test

# Build application
echo "🔨 Building application..."
npm run build

# Deploy based on platform
case $PLATFORM in
  vercel)
    echo "☁️  Deploying to Vercel..."
    if [ -z "$VERCEL_TOKEN" ]; then
      echo "❌ VERCEL_TOKEN not set"
      exit 1
    fi
    npx vercel --prod --yes
    ;;

  netlify)
    echo "☁️  Deploying to Netlify..."
    if [ -z "$NETLIFY_AUTH_TOKEN" ] || [ -z "$NETLIFY_SITE_ID" ]; then
      echo "❌ NETLIFY_AUTH_TOKEN or NETLIFY_SITE_ID not set"
      exit 1
    fi
    npx netlify-cli deploy --prod --dir=dist
    ;;

  gh-pages)
    echo "📄 Deploying to GitHub Pages..."
    npx gh-pages -d dist
    ;;

  *)
    echo "❌ Unknown platform: $PLATFORM"
    echo "Available platforms: vercel, netlify, gh-pages"
    exit 1
    ;;
esac

echo "✅ Deployment complete!"
