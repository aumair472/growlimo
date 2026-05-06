// ✅ Single source of truth for all URLs — NON-WWW is the canonical domain
const BASE = 'https://growlimo.com';

export const siteConfig = {
  siteName: 'GrowLimo',
  legalName: 'Growlimo Digital Marketing Agency',
  siteUrl: BASE,
  defaultImage: `${BASE}/og-image.png`,
  logoUrl: `${BASE}/logo.png`,
  phone: '+1-724-750-6935',
  email: 'info@growlimo.com',
  twitterHandle: '@growlimo',
  address: {
    streetAddress: '7917 Mountain Rd NE',
    addressLocality: 'Albuquerque',
    addressRegion: 'NM',
    postalCode: '87110',
    addressCountry: 'US',
  },
  geo: {
    latitude: 35.0911702,
    longitude: -106.5583523,
  },
  sameAs: [
    'https://www.linkedin.com/company/growlimo',
    'https://www.facebook.com/people/GrowLimo/61581846653070/',
    'https://www.instagram.com/growlimo/',
    'https://www.tiktok.com/@growlimo',
  ],
  hasMap:
    'https://www.google.com/maps/place/Growlimo+Digital+Marketing+Agency/@35.0911702,-106.5583523,17z',
};

export const seoDefaults = {
  siteName: 'GrowLimo',
  siteUrl: BASE,
  defaultTitle: 'GrowLimo | Results-Driven Digital Marketing Agency USA',
  defaultDescription:
    'GrowLimo is a top-rated digital marketing agency providing data-driven SEO, PPC, and web design solutions to scale businesses across the USA.',
  defaultH1: 'Results-Driven Digital Marketing Agency for Scalable Growth',
  defaultImage: `${BASE}/og-image.png`,
  twitterHandle: '@growlimo',
};

// ✅ Helper — always produces https://growlimo.com/path/
export const buildUrl = (path) => {
  if (path === '/') return `${BASE}/`;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return clean.endsWith('/') ? `${BASE}${clean}` : `${BASE}${clean}/`;
};

const url = buildUrl;

export const seoConfig = {
  '/': {
    title: 'Digital Marketing Agency USA | SEO, PPC & Lead Acquisition | GrowLimo',
    description:
      'GrowLimo is a leading digital marketing agency specializing in ROI-focused SEO, Google Ads, and automated lead acquisition for US businesses. 210% avg growth.',
    keywords:
      'digital marketing agency, marketing agency USA, SEO services, lead acquisition marketing, digital marketing experts',
    h1: 'Digital Marketing Agency That Grows Businesses Across The United States',
    canonical: url('/'),
    image: siteConfig.defaultImage,
    type: 'website',
  },
  '/contact': {
    title: 'Contact GrowLimo | Book a Free 30-Minute Strategy Session',
    description:
      'Contact GrowLimo to book your free 30-minute strategy session. Our SEO, PPC, and lead acquisition specialists serve businesses across the USA.',
    keywords:
      'contact digital marketing agency, schedule marketing consultation, digital marketing strategy session',
    h1: 'Book Your 30-Minute Digital Marketing Lead Strategy Session',
    canonical: url('/contact'),
    image: siteConfig.defaultImage,
    type: 'website',
  },
  '/about': {
    title: 'About GrowLimo | Results-Driven Digital Marketing Agency USA',
    description:
      'Meet GrowLimo, the digital marketing agency trusted by 500+ businesses across the US. Specialists in SEO, high-ROI PPC, and revenue growth strategies.',
    keywords:
      'digital marketing agency, marketing experts, growth marketing specialists, about growlimo',
    h1: 'The Team Behind Data-Driven Digital Growth',
    canonical: url('/about'),
    image: siteConfig.defaultImage,
    type: 'website',
  },
};

export const getSEOConfig = (path) => {
  if (seoConfig[path]) return seoConfig[path];
  return {
    title: seoDefaults.defaultTitle,
    description: seoDefaults.defaultDescription,
    keywords: '',
    h1: seoDefaults.defaultH1,
    canonical: url(path),
    image: seoDefaults.defaultImage,
    type: 'website',
  };
};
