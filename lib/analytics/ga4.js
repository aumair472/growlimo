class GA4 {
  constructor() {
    this.measurementId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
    this.isInitialized = false;
    this.scriptLoaded = false;
  }

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

  init() {
    if (
      !this.measurementId || 
      this.isInitialized || 
      !this._ensureGtag()
    ) {
      return;
    }

    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
      wait_for_update: 500,
    });

    window.gtag('js', new Date());
    window.gtag('config', this.measurementId, {
      send_page_view: false,
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });

    this.isInitialized = true;
    this.loadScript();
  }

  loadScript() {
    if (!this.measurementId || this.scriptLoaded) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    document.head.appendChild(script);
    this.scriptLoaded = true;
  }

  updateConsent(granted) {
    if (!this._ensureGtag()) return;
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied'
    });
  }

  trackPageView(url) {
    if (!this.isInitialized || typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
      send_to: this.measurementId
    });
  }

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
