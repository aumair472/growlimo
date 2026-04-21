class FacebookPixel {
  constructor() {
    this.pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    this.isEnabled = !!this.pixelId;
    this.isInitialized = false;
  }

  init() {
    if (
      typeof window === 'undefined' ||
      !this.isEnabled ||
      this.isInitialized
    ) {
      return;
    }

    (function initPixel(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function fbqProxy() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', this.pixelId);
    this.isInitialized = true;
  }

  trackPageView() {
    if (!this.isEnabled || !this.isInitialized || typeof window?.fbq !== 'function') {
      return;
    }
    window.fbq('track', 'PageView');
  }

  trackEvent(eventName, params = {}) {
    if (!this.isEnabled || !this.isInitialized || typeof window?.fbq !== 'function') {
      return;
    }
    window.fbq('track', eventName, params);
  }
}

const fbPixel = new FacebookPixel();
export default fbPixel;
