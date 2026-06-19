class GA4 {
  constructor() {
    this.gtmId = process.env.NEXT_PUBLIC_GTM_ID;
    this.isInitialized = false;
  }

  _ensureDataLayer() {
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
    if (!this._ensureDataLayer() || this.isInitialized) {
      return;
    }

    // Set Consent Mode v2 Defaults using gtag proxy (which pushes to dataLayer)
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

    this.isInitialized = true;
  }

  updateConsent(granted) {
    if (!this._ensureDataLayer()) return;
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied'
    });
  }

  // Remove potential PII from event parameters
  _sanitizeParams(params) {
    const sanitized = { ...params };
    const piiKeys = ['name', 'email', 'phone', 'message', 'text', 'company', 'username', 'password', 'first_name', 'last_name'];
    piiKeys.forEach(key => {
      delete sanitized[key];
    });
    return sanitized;
  }

  trackPageView(url) {
    if (!this._ensureDataLayer()) return;
    // GTM tracks client-side navigation via virtual page views pushed to dataLayer
    window.dataLayer.push({
      event: 'virtual_page_view',
      page_path: url,
      page_title: typeof document !== 'undefined' ? document.title : '',
      page_location: typeof window !== 'undefined' ? window.location.href : '',
    });
  }

  trackEvent(eventName, params = {}) {
    if (!this._ensureDataLayer()) return;
    const sanitizedParams = this._sanitizeParams(params);
    window.dataLayer.push({
      event: eventName,
      event_data: sanitizedParams,
    });
  }
}

const ga4 = new GA4();
export default ga4;
