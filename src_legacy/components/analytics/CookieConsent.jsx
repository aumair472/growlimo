import { useState, useEffect } from 'react';

/**
 * Cookie Consent Banner Component
 *
 * Shows a cookie consent banner on first visit and stores consent in localStorage.
 * Only loads analytics if user has given consent.
 *
 * Features:
 * - Shows banner on first visit (checks localStorage)
 * - Stores consent preference in localStorage
 * - GDPR-compliant with accept/decline options
 * - Accessible with ARIA labels
 * - Responsive design
 */
function CookieConsent() {
  if (typeof window !== 'undefined' && window.__PRERENDER_INJECTED) return null;
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if consent was already given/declined
    const consent = localStorage.getItem('cookie_consent');
    const analyticsId = import.meta.env.VITE_ANALYTICS_ID;
    const analyticsEnabled = import.meta.env.VITE_ANALYTICS_ENABLED !== 'false'; // Default to true if not set

    // Only show banner if:
    // 1. No consent has been stored
    // 2. Analytics is configured (VITE_ANALYTICS_ID is set)
    // 3. Analytics is enabled
    if (!consent && analyticsId && analyticsEnabled) {
      // Performance: Delay cookie consent banner until after page load to improve TBT
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.setItem('analytics_consent', 'accepted'); // For backward compatibility
    setShow(false);

    // Trigger analytics initialization by dispatching custom event
    window.dispatchEvent(new CustomEvent('analytics-consent-given'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    localStorage.setItem('analytics_consent', 'declined'); // For backward compatibility
    setShow(false);
  };

  // Don't render until mounted (prevents hydration mismatch)
  if (!mounted || !show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-6xl mx-auto bg-slate-900 border border-slate-700 rounded-lg shadow-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <h2
              id="cookie-consent-title"
              className="text-xl md:text-2xl font-bold text-white mb-2"
            >
              Cookie & Analytics Consent
            </h2>
            <p
              id="cookie-consent-description"
              className="text-slate-300 text-sm md:text-base mb-4 md:mb-0"
            >
              We use cookies and analytics tools to improve your experience,
              analyze site traffic, and understand how you interact with our
              website. You can choose to accept or decline analytics cookies.
              Essential cookies are always enabled.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 md:ml-6 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-6 py-2.5 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Decline analytics cookies"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 bg-primary hover:bg-accent text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Accept analytics cookies"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
