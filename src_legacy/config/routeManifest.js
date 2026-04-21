export const STATIC_PUBLIC_ROUTES = [
  '/',
  '/about',
  '/blog',
  '/case-studies',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
];

export const CALIFORNIA_SERVICE_ROUTES = [
  '/seo-services-california',
  '/digital-marketing-agency-california',
  '/google-ads-management-california',
  '/ppc-services-california',
  '/social-media-marketing-services-california',
  '/facebook-ads-management-california',
  '/meta-ads-agency-california',
  '/web-developer-california',
  '/web-design-services-california',
  '/email-marketing-services-california',
  '/healthcare-seo-services-california',
  '/healthcare-digital-marketing-agency-california',
  '/healthcare-google-ads-management-california',
  '/healthcare-ppc-services-california',
  '/healthcare-facebook-ads-management-california',
  '/healthcare-meta-ads-agency-california',
  '/dentist-seo-services-california',
  '/dentist-digital-marketing-agency-california',
  '/dentist-google-ads-management-california',
  '/dentist-ppc-services-california',
  '/dentist-facebook-ads-management-california',
  '/dentist-meta-ads-agency-california',
];

export const TEXAS_SERVICE_ROUTES = [
  '/seo-services-texas',
  '/digital-marketing-agency-texas',
  '/google-ads-management-texas',
  '/ppc-services-texas',
  '/social-media-marketing-services-texas',
  '/facebook-ads-management-texas',
  '/meta-ads-agency-texas',
  '/web-developer-texas',
  '/web-design-services-texas',
  '/email-marketing-services-texas',
  '/healthcare-seo-services-texas',
  '/healthcare-digital-marketing-agency-texas',
  '/healthcare-google-ads-management-texas',
  '/healthcare-ppc-services-texas',
  '/healthcare-facebook-ads-management-texas',
  '/healthcare-meta-ads-agency-texas',
  '/dentist-seo-services-texas',
  '/dentist-digital-marketing-agency-texas',
  '/dentist-google-ads-management-texas',
  '/dentist-ppc-services-texas',
  '/dentist-facebook-ads-management-texas',
  '/dentist-meta-ads-agency-texas',
];

export const DYNAMIC_PUBLIC_ROUTES = [
  '/blog/:slug',
  '/case-studies/:slug',
];

export const REDIRECT_ROUTES = [
  { path: '/services', to: '/healthcare-digital-marketing-agency-texas/' },
  { path: '/services/healthcare-seo', to: '/healthcare-seo-services-texas/' },
  { path: '/services/medical-ppc', to: '/healthcare-ppc-services-texas/' },
  {
    path: '/services/marketing-automation',
    to: '/healthcare-digital-marketing-agency-texas/',
  },
  { path: '/services/medical-website-design', to: '/web-design-services-texas/' },
  {
    path: '/services/reputation-management',
    to: '/healthcare-digital-marketing-agency-texas/',
  },
  { path: '/dental-marketing', to: '/dentist-digital-marketing-agency-texas/' },
  {
    path: '/urgent-care-marketing',
    to: '/healthcare-digital-marketing-agency-texas/',
  },
  {
    path: '/home-health-care-marketing',
    to: '/healthcare-digital-marketing-agency-california/',
  },
  { path: '/medical-lab-marketing', to: '/healthcare-seo-services-texas/' },
  { path: '/pt-chiropractic-marketing', to: '/healthcare-ppc-services-california/' },
  {
    path: '/std-testing-marketing',
    to: '/healthcare-digital-marketing-agency-texas/',
  },
  { path: '/cardiology-marketing', to: '/healthcare-digital-marketing-agency-texas/' },
];

export const ADMIN_ROUTES = [
  '/admin',
  '/admin/login',
  '/admin/blog',
];

export const PUBLIC_ROUTES = [
  ...STATIC_PUBLIC_ROUTES,
  ...CALIFORNIA_SERVICE_ROUTES,
  ...TEXAS_SERVICE_ROUTES,
];

export const REDIRECT_PATHS = new Set(REDIRECT_ROUTES.map((route) => route.path));
export const PRERENDER_EXCLUDED_ROUTES = new Set([
  ...ADMIN_ROUTES,
  ...REDIRECT_PATHS,
]);
export const SITEMAP_EXCLUDED_ROUTES = new Set(PRERENDER_EXCLUDED_ROUTES);
export const ROBOTS_DISALLOW_PATHS = [...ADMIN_ROUTES];

export function normalizeRoute(route = '/') {
  if (!route) return '/';
  const normalized = route.startsWith('/') ? route : `/${route}`;
  return normalized !== '/' ? normalized.replace(/\/+$/, '') : normalized;
}

export function getStaticPublicRoutes() {
  return [...new Set(PUBLIC_ROUTES.map(normalizeRoute))];
}

export function getPrerenderStaticRoutes() {
  return getStaticPublicRoutes().filter((route) => !PRERENDER_EXCLUDED_ROUTES.has(route));
}

export function normalizeBlogCacheEntries(entries = []) {
  return entries
    .map((entry) => {
      if (!entry) return null;
      if (typeof entry === 'string') return { slug: entry };
      if (typeof entry === 'object' && entry.slug) return entry;
      return null;
    })
    .filter(Boolean);
}

export function getSitemapMeta(route) {
  if (route === '/') {
    return { changefreq: 'weekly', priority: 1.0 };
  }

  if (route === '/contact') {
    return { changefreq: 'monthly', priority: 0.8 };
  }

  if (route === '/blog' || route.startsWith('/blog/')) {
    return { changefreq: 'weekly', priority: 0.8 };
  }

  if (route === '/case-studies' || route.startsWith('/case-studies/')) {
    return { changefreq: 'monthly', priority: 0.7 };
  }

  return { changefreq: 'monthly', priority: 0.8 };
}
