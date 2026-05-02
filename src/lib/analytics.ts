/**
 * Analytics and monitoring utilities
 */

// Google Analytics initialization
export function initializeGoogleAnalytics(gaId: string) {
  if (!gaId) return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', gaId);
}

// Track page views
export function trackPageView(path: string, title: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
    });
  }
}

// Track custom events
export function trackEvent(
  eventName: string,
  eventCategory: string,
  eventLabel: string,
  eventValue?: number
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    });
  }
}

// Track form submissions
export function trackFormSubmission(formName: string) {
  trackEvent('form_submit', 'engagement', formName);
}

// Track CTA clicks
export function trackCTAClick(buttonName: string) {
  trackEvent('cta_click', 'engagement', buttonName);
}

// Web Vitals tracking
export function initializeWebVitals() {
  if ('web-vital' in window) return;

  // Track Largest Contentful Paint (LCP)
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if ((entry as any).name === 'largest-contentful-paint') {
        trackEvent('web_vitals', 'Core Web Vitals', 'LCP', Math.round((entry as any).renderTime || (entry as any).loadTime));
      }
    }
  });
  
  try {
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    // Browser doesn't support this API
  }

  // Track First Input Delay (FID)
  if ('PerformanceEventTiming' in window) {
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-input') {
          trackEvent('web_vitals', 'Core Web Vitals', 'FID', Math.round((entry as any).processingDuration));
        }
      }
    });
    
    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // Browser doesn't support this API
    }
  }

  // Track Cumulative Layout Shift (CLS)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
        trackEvent('web_vitals', 'Core Web Vitals', 'CLS', Math.round(clsValue * 1000));
      }
    }
  });
  
  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    // Browser doesn't support this API
  }
}

// Error tracking (to be integrated with Sentry)
export function captureException(error: Error, context?: Record<string, any>) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Exception captured:', error, context);
  }

  // Send to error tracking service (Sentry, etc.)
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    (window as any).Sentry.captureException(error, { extra: context });
  }

  // Track as event
  trackEvent('exception', 'error', error.message);
}

// Declare gtag on window
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    Sentry?: any;
  }
}
