import { useEffect } from 'react'
import ga4 from '../../utils/ga4'

/**
 * Analytics Component
 * 
 * Manages privacy-first analytics initialization.
 * Supports Google Consent Mode v2 and Plausible Analytics.
 */
function Analytics() {
  if (typeof window !== 'undefined' && window.__PRERENDER_INJECTED) return null;
  
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN
  const analyticsEnabled = import.meta.env.VITE_ANALYTICS_ENABLED !== 'false'

  const loadAnalytics = () => {
    if (!analyticsEnabled) return;

    // 1. Initialize GA4 immediately (Consent Mode v2)
    // This allows cookieless pings even before user consent
    ga4.init()

    // 2. Check for existing consent and update if granted
    const consent = localStorage.getItem('cookie_consent') || localStorage.getItem('analytics_consent')
    const isAccepted = consent === 'accepted'

    if (isAccepted) {
      ga4.updateConsent(true)
    }

    // 3. Plausible Analytics (Standard implementation)
    if (plausibleDomain && isAccepted) {
      if (document.querySelector(`script[data-domain="${plausibleDomain}"]`)) {
        return
      }

      const script = document.createElement('script')
      script.defer = true
      script.setAttribute('data-domain', plausibleDomain)
      script.src = 'https://plausible.io/js/script.js'
      document.head.appendChild(script)
    }
  }

  useEffect(() => {
    loadAnalytics()

    const handleConsent = () => {
      loadAnalytics()
    }

    window.addEventListener('analytics-consent-given', handleConsent)

    return () => {
      window.removeEventListener('analytics-consent-given', handleConsent)
    }
  }, [plausibleDomain, analyticsEnabled])

  return null
}

export default Analytics


