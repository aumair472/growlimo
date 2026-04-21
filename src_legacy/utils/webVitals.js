/**
 * Core Web Vitals Monitoring
 *
 * Reports LCP, INP, CLS, FCP, and TTFB to your analytics.
 * Targets:
 *   - LCP:  < 2.5s (Good), < 4.0s (Needs Improvement)
 *   - INP:  < 200ms (Good), < 500ms (Needs Improvement)
 *   - CLS:  < 0.1 (Good), < 0.25 (Needs Improvement)
 *   - FCP:  < 1.8s (Good), < 3.0s (Needs Improvement)
 *   - TTFB: < 800ms (Good), < 1800ms (Needs Improvement)
 *
 * Usage: import { reportWebVitals } from './utils/webVitals'
 *        reportWebVitals()  // logs to console + sends to analytics
 */

const THRESHOLDS = {
  LCP: [2500, 4000],
  INP: [200, 500],
  CLS: [0.1, 0.25],
  FCP: [1800, 3000],
  TTFB: [800, 1800],
};

function getRating(name, value) {
  const [good, poor] = THRESHOLDS[name] || [Infinity, Infinity];
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

function sendToAnalytics(metric) {
  const body = {
    name: metric.name,
    value: Math.round(
      metric.name === 'CLS' ? metric.value * 1000 : metric.value
    ),
    rating: metric.rating || getRating(metric.name, metric.value),
    delta: Math.round(metric.delta),
    id: metric.id,
    navigationType: metric.navigationType,
    url: window.location.href,
  };

  // Send to GTM dataLayer if available
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'web_vitals',
      web_vital_name: body.name,
      web_vital_value: body.value,
      web_vital_rating: body.rating,
      web_vital_delta: body.delta,
      web_vital_id: body.id,
    });
  }

  // Send to your analytics endpoint if configured
  const analyticsEndpoint = import.meta.env.VITE_VITALS_ENDPOINT;
  if (analyticsEndpoint) {
    // Use sendBeacon for reliability (doesn't block unload)
    if (navigator.sendBeacon) {
      navigator.sendBeacon(analyticsEndpoint, JSON.stringify(body));
    } else {
      fetch(analyticsEndpoint, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
      }).catch(() => {}); // fail silently
    }
  }

  // Console output in development
  if (import.meta.env.DEV) {
    const color =
      body.rating === 'good'
        ? '#0c6'
        : body.rating === 'needs-improvement'
          ? '#fa3'
          : '#f33';
    console.log(
      `%c[CWV] ${body.name}: ${metric.name === 'CLS' ? metric.value.toFixed(4) : Math.round(metric.value) + 'ms'} (${body.rating})`,
      `color: ${color}; font-weight: bold;`
    );
  }
}

/**
 * Initialize Core Web Vitals reporting.
 * Call this once in your app entry point (main.jsx).
 * Uses dynamic import so the web-vitals library is tree-shaken in production if unused.
 */
export function reportWebVitals() {
  // Defer measurement to avoid impacting LCP
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => initMeasurement(), { timeout: 5000 });
  } else {
    setTimeout(initMeasurement, 3000);
  }
}

async function initMeasurement() {
  try {
    const { onLCP, onINP, onCLS, onFCP, onTTFB } = await import('web-vitals');
    onLCP(sendToAnalytics);
    onINP(sendToAnalytics);
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  } catch {
    // web-vitals library not available — fail silently
  }
}

export default reportWebVitals;
