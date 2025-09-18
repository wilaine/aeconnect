// Analytics configuration
// Add your tracking IDs and analytics setup here

export const analytics = {
  // Google Analytics
  gtag: {
    id: process.env.NEXT_PUBLIC_GA_ID || '',
  },
  
  // Meta Pixel
  meta: {
    id: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
  },
  
  // LinkedIn Insight Tag
  linkedin: {
    id: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || '',
  },
}

// Event tracking helpers
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Implement your analytics tracking logic here
  if (typeof window !== 'undefined') {
    console.log('Event tracked:', eventName, properties)
    
    // Example: Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, properties)
    }
  }
}

// Page view tracking
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined') {
    console.log('Page view tracked:', path)
    
    // Example: Google Analytics
    if (window.gtag) {
      window.gtag('config', analytics.gtag.id, {
        page_path: path,
      })
    }
  }
}

// Type declarations for global analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}