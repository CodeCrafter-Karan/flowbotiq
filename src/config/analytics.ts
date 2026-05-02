/**
 * Analytics Configuration
 * 
 * To enable analytics:
 * 1. Add VITE_GOOGLE_ANALYTICS_ID to your .env file
 * 2. Add VITE_SENTRY_DSN to your .env file for error tracking
 */

export const analyticsConfig = {
  // Google Analytics
  googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
  
  // Sentry Error Tracking
  sentryDsn: import.meta.env.VITE_SENTRY_DSN || '',
  
  // Feature flags
  enableGoogleAnalytics: !!import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  enableSentry: !!import.meta.env.VITE_SENTRY_DSN,
  enableWebVitals: true,
};

// Sentry initialization script (add to index.html or load via npm)
export const sentryConfig = {
  dsn: analyticsConfig.sentryDsn,
  environment: import.meta.env.MODE,
  tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
  integrations: [
    // Sentry integrations would be added here
  ],
};
