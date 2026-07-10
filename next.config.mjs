/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  // ✅ FIX 1: Enable Next.js image optimization (was disabled — killed LCP/CWV)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    // Allow local /blog-image/* paths
    remotePatterns: [],
  },

  // ✅ FIX 2: Security & performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
          // ✅ HSTS: enforce HTTPS for 1 year, include subdomains
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
        ],
      },
      // ✅ FIX 5: Deindex Next.js image-optimizer URLs (/_next/image?url=...)
      // Prevents duplicate asset URLs bloating the index / wasting crawl budget.
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex' },
        ],
      },
      // ✅ FIX 3: Long-term cache for static blog images
      {
        source: '/blog-image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // ✅ FIX 4: Redirect www → non-www (canonical: https://growlimo.com)
  // This enforces the primary canonical domain is NON-WWW.
  async redirects() {
    return [
      {
        // Redirect www.growlimo.com/* → growlimo.com/*
        source: '/:path*',
        has: [{ type: 'host', value: 'www.growlimo.com' }],
        destination: 'https://growlimo.com/:path*',
        permanent: true, // 308 in Next.js (treated as 301 by crawlers)
      },
      {
        source: '/services/marketing-automation/',
        destination: '/email-marketing-services-california/',
        permanent: true,
      },
      {
        source: '/web-developer-services-texas/',
        destination: '/web-developer-texas/',
        permanent: true,
      },
      {
        source: '/web-developer-services-california/',
        destination: '/web-developer-california/',
        permanent: true,
      },
      {
        source: '/social-media-marketing-california/',
        destination: '/social-media-marketing-services-california/',
        permanent: true,
      },
      {
        source: '/blog/facebook-ads-vs-google-ads/',
        destination: '/blog/facebook-ads-vs-google-ads-california/',
        permanent: true,
      },
      {
        source: '/blog/step-by-step-guide-local-search-ads-for-limo-services/',
        destination: '/blog/local-search-ads-guide-healthcare-practices/',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
