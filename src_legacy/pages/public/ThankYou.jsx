import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import { siteConfig } from '../../config/siteConfig';
import fbPixel from '../../utils/fbPixel';

const MESSAGES = {
  contact: {
    heading: 'Thank You for Contacting Us!',
    body: 'Our team has received your message and will get back to you within 24 hours.',
  },
  service: {
    heading: 'Thank You for Your Interest!',
    body: 'Our specialists will review your request and reach out within 24 hours with a custom strategy.',
  },
  default: {
    heading: 'Thank You – Your Request Has Been Received',
    body: 'Our team will contact you within 24 hours.',
  },
};

function ThankYou() {
  const location = useLocation();
  const source = location.state?.source;
  const { heading, body } = MESSAGES[source] || MESSAGES.default;

  // ── Conversion Tracking ──
  useEffect(() => {
    // Google Analytics / Google Ads conversion
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID || undefined,
        event_category: 'form',
        event_label: source || 'general',
      });
    }

    // Meta Pixel
    fbPixel.trackEvent('Lead');
  }, [source]);

  return (
    <>
      <SEO
        title="Thank You | GrowLimo"
        description="Your request has been received. Our team will be in touch within 24 hours."
        robots="noindex, nofollow"
      />

      <div className="bg-dark text-white">
        <section className="py-24 md:py-32 relative overflow-hidden">
          {/* Background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              {/* Success icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {heading}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
                {body}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  to="/"
                  className="bg-primary hover:bg-accent text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg shadow-primary/20"
                >
                  Back to Home
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/-/g, '')}`}
                  className="border border-slate-600 hover:border-primary text-white font-semibold py-3 px-8 rounded-lg transition"
                >
                  Call {siteConfig.phone}
                </a>
              </div>

              {/* Contact info card */}
              <div className="glass-card p-6 max-w-md mx-auto">
                <p className="text-sm text-slate-400 mb-3">
                  Need immediate assistance?
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center justify-center gap-2 text-primary hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {siteConfig.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/-/g, '')}`}
                    className="flex items-center justify-center gap-2 text-primary hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ThankYou;
