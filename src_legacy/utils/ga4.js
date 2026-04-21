/**
 * GA4 Privacy-First Analytics Utility (Consent Mode v2)
 * 
 * Implements Google Consent Mode v2 to balance user privacy with data accuracy.
 * - Loads scripts immediately to enable cookieless pings (behavioral modeling).
 * - Defaults all consent-sensitive storage to 'denied'.
 * - Upgrades consent status only after explicit user approval.
 */

class GA4 {
  constructor() {
    this.measurementId = import.meta.env.VITE_ANALYTICS_ID;
    this.isInitialized = false;
    this.scriptLoaded = false;
  }

  /**
   * Pre-initialize dataLayer and gtag function
   */
  _ensureGtag() {
    if (typeof window === 'undefined') return false;
    
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
    }
    return true;
  }

  /**
   * Initialize GA4 with Consent Mode v2 defaults
   */
  init() {
    if (
      !this.measurementId || 
      this.isInitialized || 
      !this._ensureGtag() || 
      window.__PRERENDER_INJECTED
    ) {
      return;
    }

    // 1. Set default consent status (Consent Mode v2)
    // All flags are 'denied' by default to ensure GDPR/ePrivacy compliance
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted', // Essential for security
      wait_for_update: 500,
    });

    // 2. Initial Configuration
    window.gtag('js', new Date());
    window.gtag('config', this.measurementId, {
      send_page_view: false, // Explicitly disable auto page_view for SPA control
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
      // Enable cookieless tracking (Consent Mode)
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    this.isInitialized = true;
    
    // Load script immediately to enable "Consent Mode" pings (cookieless)
    // This allows Google to model data without storing cookies.
    this.loadScript();

    // Check if consent was already given in a previous session
    const consent = localStorage.getItem('cookie_consent') || localStorage.getItem('analytics_consent');
    if (consent === 'accepted') {
      this.updateConsent(true);
    }
  }

  /**
   * Dynamically inject gtag.js script
   */
  loadScript() {
    if (!this.measurementId || this.scriptLoaded || window.__PRERENDER_INJECTED) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    
    // Performance: Load after initial paint but before idle to capture early pings
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        document.head.appendChild(script);
      }, { timeout: 2000 });
    } else {
      setTimeout(() => {
        document.head.appendChild(script);
      }, 500);
    }

    this.scriptLoaded = true;
  }

  /**
   * Update consent status when user interacts with banner
   * @param {boolean} granted 
   */
  updateConsent(granted) {
    if (!this._ensureGtag()) return;

    // Consent Mode v2 update
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied'
    });

    // If granted, we can also enable signals
    if (granted) {
      window.gtag('config', this.measurementId, {
        allow_google_signals: true,
        allow_ad_personalization_signals: true,
        update: true
      });
    }
  }

  /**
   * Explicitly track page views for SPA routing
   */
  trackPageView() {
    if (!this.isInitialized || typeof window.gtag !== 'function') return;

    window.gtag('event', 'page_view', {
      page_path: window.location.pathname,
      page_title: document.title,
      page_location: window.location.href,
      send_to: this.measurementId
    });
  }

  /**
   * Reusable event tracking function
   */
  trackEvent(eventName, params = {}) {
    if (!this.isInitialized || typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, {
      ...params,
      send_to: this.measurementId
    });
  }
}

const ga4 = new GA4();
export default ga4;
