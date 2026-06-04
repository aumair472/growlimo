import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Sora, Inter } from 'next/font/google';
import '../styles/globals.css';
import Layout from '../components/Layout';
import ga4 from '../lib/analytics/ga4';
import fbPixel from '../lib/analytics/fbPixel';
import { Analytics } from '@vercel/analytics/react';

const sora = Sora({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // 1. Initialize Analytics (Consent Mode v2)
    const initAnalytics = () => {
      if (typeof window === 'undefined') return;
      
      // GA4 Initialization
      ga4.init();
      
      // FB Pixel Initialization
      fbPixel.init();

      // Check for existing consent
      const consent = localStorage.getItem('cookie_consent') || localStorage.getItem('analytics_consent');
      if (consent === 'accepted') {
        ga4.updateConsent(true);
      }
    };

    // Defer initialization for better performance (CWV)
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initAnalytics, { timeout: 2000 });
    } else {
      setTimeout(initAnalytics, 100);
    }

    // Handle consent events
    const handleConsent = () => {
      ga4.updateConsent(true);
      fbPixel.init(); // Ensure FB is inited if it wasn't
    };

    window.addEventListener('analytics-consent-given', handleConsent);
    return () => window.removeEventListener('analytics-consent-given', handleConsent);
  }, []);

  useEffect(() => {
    // 2. Track Page Views
    const handleRouteChange = (url) => {
      ga4.trackPageView(url);
      fbPixel.trackPageView();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={`${sora.variable} ${inter.variable} font-sans overflow-x-hidden`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </div>
  );
}
