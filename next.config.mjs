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

  // ✅ FIX 4: Redirect non-www → www (canonical domain enforcement)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'growlimo.com' }],
        destination: 'https://www.growlimo.com/:path*',
        permanent: true, // 308 in Next.js
      },
    ];
  },
}

export default nextConfig
