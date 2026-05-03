import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent } from '../lib/analytics';

/**
 * Hook to automatically track page views on route changes
 */
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    const pageTitle = document.title;
    trackPageView(location.pathname, pageTitle);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [location]);
}

/**
 * Hook to track user engagement
 */
export function useEngagementTracking() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-event]');
      if (target) {
        const eventName = target.getAttribute('data-event');
        const eventCategory = target.getAttribute('data-event-category') || 'engagement';
        const eventLabel = target.getAttribute('data-event-label') || 'unknown';

        if (eventName) {
          trackEvent(eventName, eventCategory, eventLabel);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}
