import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/shared/ProtectedRoute';
import SkipLink from './components/common/SkipLink';
import ScrollToTop from './components/common/ScrollToTop';
import fbPixel from './utils/fbPixel';
import ga4 from './utils/ga4';

import {
  ADMIN_ROUTES,
  CALIFORNIA_SERVICE_ROUTES,
  REDIRECT_ROUTES,
  TEXAS_SERVICE_ROUTES,
} from './config/routeManifest';

// CWV JS Optimization: Defer non-critical components with dynamic imports to reduce initial bundle
const Analytics = lazy(() => import('./components/analytics/Analytics'));
const CookieConsent = lazy(() => import('./components/analytics/CookieConsent'));

// Code splitting with React.lazy
const Home = lazy(() => import('./pages/public/Home'));
const Contact = lazy(() => import('./pages/public/Contact'));
const ThankYou = lazy(() => import('./pages/public/ThankYou'));
const CaliforniaService = lazy(() => import('./pages/services/CaliforniaService'));
const TexasService = lazy(() => import('./pages/services/TexasService'));
const BlogPost = lazy(() => import('./pages/public/BlogPost'));

const Admin = lazy(() => import('./pages/admin/Admin'));
const AdminBlog = lazy(() => import('./pages/admin/AdminBlog'));
const Login = lazy(() => import('./pages/admin/Login'));

const About = lazy(() => import('./pages/public/About'));
const Blog = lazy(() => import('./pages/public/Blog'));
const CaseStudies = lazy(() => import('./pages/public/CaseStudies'));
const PrivacyPolicy = lazy(() => import('./pages/public/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/public/TermsAndConditions'));
const CaseStudyDetail = lazy(() => import('./pages/public/CaseStudyDetail'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-dark flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-slate-300">Loading...</p>
    </div>
  </div>
);

// CWV JS: Track page views with deferred execution to avoid blocking main thread
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.__PRERENDER_INJECTED) return;
    // Defer tracking to avoid blocking initial render
    if ('requestIdleCallback' in window) {
      requestIdleCallback(
        () => {
          fbPixel.trackPageView();
          ga4.trackPageView();
        },
        { timeout: 2000 }
      );
    } else {
      setTimeout(() => {
        fbPixel.trackPageView();
        ga4.trackPageView();
      }, 100);
    }

  }, [location]);

  return null;
}

// ─── Prerender Signal ──────────────────────────────────────────────────────
// Fires 'prerender-ready' after route render so the prerender worker
// snapshots the page after SEO tags and content have settled.
function PrerenderSignal() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      document.dispatchEvent(new Event('prerender-ready'));
    }, 2000); // 2000ms covers lazy chunk load + SEO tag updates

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function App() {
  useEffect(() => {
    if (window.__PRERENDER_INJECTED) return;
    // CWV JS: Defer Facebook Pixel initialization to reduce initial JS cost
    if ('requestIdleCallback' in window) {
      requestIdleCallback(
        () => {
          fbPixel.init();
          ga4.init();
        },
        { timeout: 2000 }
      );
    } else {
      setTimeout(() => {
        fbPixel.init();
        ga4.init();
      }, 100);
    }

  }, []);
  // Enable automatic scroll restoration for better UX
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  const pageRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '/blog/:slug', component: BlogPost },
    { path: '/case-studies', component: CaseStudies },
    { path: '/case-studies/:slug', component: CaseStudyDetail },
    { path: '/contact', component: Contact },
    { path: '/thank-you', component: ThankYou },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms-and-conditions', component: TermsAndConditions },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      <PrerenderSignal />
      <PageViewTracker />
      <SkipLink />
      <ScrollToTop scrollToTop={true} />
      {/* CWV JS: Lazy load non-critical components after initial render */}
      <Suspense fallback={null}>
        <Analytics />
        <CookieConsent />
      </Suspense>
      <Navbar />
      <main id="main-content" className="flex-grow bg-dark pt-16" tabIndex={-1}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {pageRoutes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            {CALIFORNIA_SERVICE_ROUTES.map((path) => (
              <Route
                key={path}
                path={path}
                element={<CaliforniaService />}
              />
            ))}

            {TEXAS_SERVICE_ROUTES.map((path) => (
              <Route key={path} path={path} element={<TexasService />} />
            ))}

            {REDIRECT_ROUTES.map(({ path, to }) => (
              <Route
                key={path}
                path={path}
                element={<Navigate to={to} replace />}
              />
            ))}

            <Route path={ADMIN_ROUTES[0]} element={<Admin />} />
            <Route path={ADMIN_ROUTES[1]} element={<Login />} />
            <Route
              path={ADMIN_ROUTES[2]}
              element={
                <ProtectedRoute>
                  <AdminBlog />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
