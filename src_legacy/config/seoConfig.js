/**
 * SEO Configuration for GrowLimo
 *
 * Centralized SEO metadata for all static routes.
 * Each route has unique title, description, keywords, and canonical URL.
 *
 * US-focused, intent-matched metadata optimized for:
 * - Click-through rate (CTR)
 * - Search engine relevance
 * - Local/US market targeting
 */

export const seoDefaults = {
  siteName: 'GrowLimo',
  siteUrl: 'https://growlimo.com',
  defaultTitle: 'GrowLimo | Results-Driven Digital Marketing Agency USA',
  defaultDescription:
    'GrowLimo is a top-rated digital marketing agency providing data-driven SEO, PPC, and web design solutions to scale businesses across the USA.',
  defaultH1: 'Results-Driven Digital Marketing Agency for Scalable Growth',
  defaultImage: 'https://growlimo.com/og-image.png',
  twitterHandle: '@growlimo',
};

const SITE_URL = seoDefaults.siteUrl;
const DEFAULT_IMAGE = seoDefaults.defaultImage;

// CRITICAL FIX 1: Canonical helper
const url = (path) => (path === '/' ? SITE_URL : `${SITE_URL}${path}/`);

export const seoConfig = {
  // Homepage
  '/': {
    title: 'Digital Marketing Agency USA | SEO, PPC & Lead Acquisition | GrowLimo',
    description: 'GrowLimo is a leading digital marketing agency specializing in ROI-focused SEO, Google Ads, and automated lead acquisition for US businesses. 210% avg growth.',
    keywords: 'digital marketing agency, marketing agency USA, SEO services, lead acquisition marketing, digital marketing experts',
    h1: 'Digital Marketing Agency That Grows Businesses Across The United States',
    canonical: SITE_URL,
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Contact Page
  '/contact': {
    title: 'Contact Growlimo | Healthcare Marketing Agency | 30-Minute Lead Mapping Session',
    description: 'Contact Growlimo for healthcare marketing services. Book your 30-minute lead mapping session with our medical SEO, PPC, and patient acquisition specialists. Serving practices across the US.',
    keywords: 'contact healthcare marketing agency, schedule healthcare marketing consultation, medical marketing lead mapping session, healthcare marketing agency contact',
    h1: 'Book Your 30-Minute Digital Marketing Lead Strategy Session',
    canonical: url('/contact'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // About Page
  '/about': {
    title: 'About Growlimo | Results-Driven Digital Marketing Agency USA',
    description: 'Meet Growlimo, the digital marketing agency trusted by 500+ businesses across the US. Specialists in SEO, high-ROI PPC, and revenue growth strategies.',
    keywords: 'digital marketing agency, marketing experts, growth marketing specialists, about growlimo, digital marketing company',
    h1: 'The Team Behind Data-Driven Digital Growth',
    canonical: url('/about'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // CRITICAL FIX 2: Add missing configuration entries
  '/services': {
    title: 'Digital Marketing Services',
    description: 'Explore our full suite of digital marketing services, including SEO, PPC, and automation, designed to scale your business and drive measurable ROI.',
    keywords: 'digital marketing services, SEO, PPC, marketing automation, web design',
    h1: 'Digital Marketing Services Engineered for Growth',
    canonical: url('/services'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dental-marketing': {
    title: 'Dental Marketing Agency | Scale Your Practice',
    description: 'Custom dental marketing strategies to help your practice attract more high-value patients and dominate the local market. ROI-focused patient acquisition.',
    keywords: 'dental marketing, dentist marketing agency, dental patient acquisition, local SEO for dentists',
    h1: 'Dental Marketing Agency - Fill Your Schedule with High-Value Patients',
    canonical: url('/dental-marketing'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/urgent-care-marketing': {
    title: 'Urgent Care Marketing | Increase Walk-In Volume',
    description: 'Specialized urgent care marketing solutions to boost walk-in patient volume and increase visibility across your region.',
    keywords: 'urgent care marketing, medical marketing, urgent care SEO, patient acquisition',
    h1: 'Urgent Care Marketing - Drive Immediate Walk-In Volume',
    canonical: url('/urgent-care-marketing'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/home-health-care-marketing': {
    title: 'Home Health Care Marketing | Grow Your Agency',
    description: 'Strategic home health care marketing designed to connect providers with families and professional referral sources.',
    keywords: 'home health care marketing, home care marketing agency, senior care marketing',
    h1: 'Home Health Care Marketing - Secure More Referrals & Families',
    canonical: url('/home-health-care-marketing'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/medical-lab-marketing': {
    title: 'Medical Lab Marketing | Secure Provider Referrals',
    description: 'Data-driven marketing and SEO for diagnostic and medical labs to increase local visibility and secure steady physician referrals.',
    keywords: 'medical lab marketing, diagnostic laboratory marketing, physician referral marketing',
    h1: 'Medical Lab Marketing - Grow Your Physician Referral Network',
    canonical: url('/medical-lab-marketing'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/pt-chiropractic-marketing': {
    title: 'PT & Chiropractic Marketing | Patient Growth',
    description: 'Multi-channel marketing strategies for physical therapy and chiropractic clinics to fill their schedules and lower patient acquisition costs.',
    keywords: 'physical therapy marketing, chiropractic marketing agency, pt marketing strategies',
    h1: 'PT & Chiropractic Marketing - Fill Your Clinic with Quality Leads',
    canonical: url('/pt-chiropractic-marketing'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/services/healthcare-seo': {
    title: 'Healthcare SEO Services | Dominate Medical Search',
    description: 'Expert healthcare SEO services designed to improve rankings for medical practices and healthcare organizations. Dominate local search results.',
    keywords: 'healthcare SEO, medical SEO, medical practice SEO, patient acquisition',
    h1: 'Healthcare SEO Services - Rank #1 for Local Patient Searches',
    canonical: url('/services/healthcare-seo'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/services/medical-ppc': {
    title: 'Medical PPC Management | High-ROI Patient Leads',
    description: 'High-conversion medical PPC and Google Ads campaigns managed by specialized healthcare advertising experts for maximum ROI.',
    keywords: 'medical PPC, healthcare Google Ads, physician PPC, patient lead generation',
    h1: 'Medical PPC Management - High-ROI Patient Lead Acquisition',
    canonical: url('/services/medical-ppc'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/services/marketing-automation': {
    title: 'Healthcare Marketing Automation',
    description: 'Streamline the patient journey and increase retention with healthcare-specific marketing automation and CRM integration specialized for medical practices.',
    keywords: 'marketing automation healthcare, patient retention automation, medical CRM marketing',
    h1: 'Healthcare Marketing Automation - Streamline the Patient Journey',
    canonical: url('/services/marketing-automation'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/services/medical-website-design': {
    title: 'Medical Website Design | High-Conversion Clinics',
    description: 'Professional medical website design that converts visitors into appointments. Fast, secure, and user-friendly web solutions for healthcare providers.',
    keywords: 'medical website design, healthcare web development, physician website builder',
    h1: 'Medical Website Design - Engineered for Patient Conversions',
    canonical: url('/services/medical-website-design'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/services/reputation-management': {
    title: 'Healthcare Reputation Management | Protect Your Brand',
    description: 'Protect and grow your medical practice reputation with proactive review management and brand monitoring strategies tailored for healthcare providers.',
    keywords: 'healthcare reputation management, doctor review management, medical brand monitoring',
    h1: 'Healthcare Reputation Management - Protect & Grow Your Medical Brand',
    canonical: url('/services/reputation-management'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // California General Service Landing Pages
  '/seo-services-california': {
    title: 'SEO Services California | SEO Agency USA - Get Free Quote',
    description: 'SEO Services California - Improve Google rankings, drive qualified traffic & increase leads. Leading SEO services in California by a trusted USA SEO agency.',
    keywords: 'SEO services California, California SEO agency, local SEO California, SEO company California, USA SEO agency',
    h1: 'SEO Services California - Boost Your Organic Traffic & Revenue',
    canonical: url('/seo-services-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/digital-marketing-agency-california': {
    title: 'Digital Marketing Agency California, USA - Get More Leads',
    description: 'Digital Marketing Agency California - Full-service digital marketing agency in California delivering SEO, PPC, SMM & web design to boost traffic, leads & sales.',
    keywords: 'digital marketing agency California, California digital marketing, full-service marketing agency California, digital marketing USA',
    h1: 'California Digital Marketing Agency - Scale Your Business Revenue',
    canonical: url('/digital-marketing-agency-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/google-ads-management-california': {
    title: 'Google Ads Management Agency California, USA - Start Today',
    description: 'Google Ads Management Agency California - Expert Google Ads management agency in California helping businesses increase ROI, lower CPC & drive qualified leads.',
    keywords: 'Google Ads management California, Google Ads agency California, PPC management California, Google Ads expert USA',
    h1: 'California Google Ads Management - Dominate Your Local Market',
    canonical: url('/google-ads-management-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/ppc-services-california': {
    title: 'PPC Services California | Pay Per Click Agency - Call Now',
    description: 'PPC Services California - Top PPC services in California to boost your ROI with targeted pay-per-click campaigns. Expert Google and Bing ads management in USA.',
    keywords: 'PPC services California, pay per click California, PPC agency California, PPC management USA, Bing Ads California',
    h1: 'California PPC Services - ROI-Focused Paid Ad Acquisition',
    canonical: url('/ppc-services-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/social-media-marketing-services-california': {
    title: 'Social Media Marketing Services California, USA - Call Now',
    description: 'Social Media Marketing Services California - Grow your brand on Facebook, Instagram, TikTok & more. Get Social media marketing services in California, USA now.',
    keywords: 'social media marketing California, SMM services California, Instagram marketing California, TikTok marketing California',
    h1: 'California Social Media Marketing - Build Your Online Brand Authority',
    canonical: url('/social-media-marketing-services-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/facebook-ads-management-california': {
    title: 'Facebook Ads Management Agency California, USA - Start Today',
    description: 'Facebook Ads Management Agency California - Get Engagement, Clicks & Leads with targeted campaigns. Professional Facebook ads management agency in California.',
    keywords: 'Facebook Ads management California, Facebook advertising California, Facebook Ads agency USA, Facebook marketing California',
    h1: 'California Facebook Ads Management - Scale Your Growth Rapidly',
    canonical: url('/facebook-ads-management-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/meta-ads-agency-california': {
    title: 'Meta Ads Agency California | Meta Services USA - Start Today',
    description: 'Meta Ads Agency California - Top Meta Ads agency in California offering expert Facebook & Instagram ads management to increase traffic, leads & sales. Call Now!',
    keywords: 'Meta Ads agency California, Meta advertising California, Instagram Ads California, Facebook Instagram Ads USA',
    h1: 'California Meta Ads Agency - ROI-Driven Social Ad Solutions',
    canonical: url('/meta-ads-agency-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/web-developer-california': {
    title: 'Web Developer California | Website Development - Call Now',
    description: 'Web Developer California - Professional web developer in California delivering custom website design & development that boosts conversions and user experience.',
    keywords: 'web developer California, website development California, custom web development California, web developer USA',
    h1: 'California Web Development - Custom High-Performance Sites',
    canonical: url('/web-developer-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/web-design-services-california': {
    title: 'Web Design Services California | Website Design - Call Now',
    description: 'Web Design Services California - Professional web design services in California creating responsive, user-friendly and SEO-optimized websites. Get Free Quote!',
    keywords: 'web design California, website design California, web design services California, responsive web design USA',
    h1: 'California Web Design Services - Engineered for Maximum Conversion',
    canonical: url('/web-design-services-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/email-marketing-services-california': {
    title: 'Email Marketing Services California, USA - Get Free Quote',
    description: 'Email Marketing Services California - Professional email marketing services in California to nurture leads, increase engagement & boost sales. Get free quote!',
    keywords: 'email marketing California, email marketing services California, email automation California, email campaigns USA',
    h1: 'California Email Marketing - Nurture Leads & Maximize ROI',
    canonical: url('/email-marketing-services-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Texas General Service Landing Pages
  '/seo-services-texas': {
    title: 'SEO Services Texas | SEO Agency USA - Get Free Quote',
    description: 'SEO Services Texas - Improve Google rankings, drive qualified traffic & increase leads. Leading SEO services in Texas by a trusted USA SEO agency.',
    keywords: 'SEO services Texas, Texas SEO agency, local SEO Texas, SEO company Texas, USA SEO agency',
    h1: 'Texas SEO Services That Turn Searches Into Patients',
    canonical: url('/seo-services-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/digital-marketing-agency-texas': {
    title: 'Digital Marketing Agency Texas, USA - Get More Leads',
    description: 'Digital Marketing Agency Texas - Full-service digital marketing agency in Texas delivering SEO, PPC, SMM & web design to boost traffic, leads & sales.',
    keywords: 'digital marketing agency Texas, Texas digital marketing, full-service marketing agency Texas, digital marketing USA',
    h1: 'Texas Digital Marketing Agency - Drive Predictable Lead Growth',
    canonical: url('/digital-marketing-agency-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/google-ads-management-texas': {
    title: 'Google Ads Management Agency Texas, USA - Start Today',
    description: 'Google Ads Management Agency Texas - Expert Google Ads management agency in Texas helping businesses increase ROI, lower CPC & drive qualified leads.',
    keywords: 'Google Ads management Texas, Texas Google Ads, PPC management Texas, Google Ads expert USA',
    h1: 'Texas Google Ads Management - Precision Patient Acquisition',
    canonical: url('/google-ads-management-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/ppc-services-texas': {
    title: 'PPC Services Texas | Pay Per Click Agency - Call Now',
    description: 'PPC Services Texas - Top PPC services in Texas to boost your ROI with targeted pay-per-click campaigns. Expert Google and Bing ads management in USA.',
    keywords: 'PPC services Texas, pay per click Texas, PPC agency Texas, PPC management USA, Bing Ads Texas',
    h1: 'Texas PPC Services - Maximize Your Marketing ROI & Leads',
    canonical: url('/ppc-services-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/social-media-marketing-services-texas': {
    title: 'Social Media Marketing Services Texas, USA - Call Now',
    description: 'Social Media Marketing Services Texas - Grow your brand on Facebook, Instagram, TikTok & more. Get Social media marketing services in Texas, USA now.',
    keywords: 'social media marketing Texas, SMM services Texas, Instagram marketing Texas, TikTok marketing Texas',
    h1: 'Texas Social Media Marketing - Build Your Authority Online',
    canonical: url('/social-media-marketing-services-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/facebook-ads-management-texas': {
    title: 'Facebook Ads Management Agency Texas, USA - Start Today',
    description: 'Facebook Ads Management Agency Texas - Get Engagement, Clicks & Leads with targeted campaigns. Professional Facebook ads management agency in Texas.',
    keywords: 'Facebook Ads management Texas, Texas Facebook Ads, Facebook Ads agency USA, Facebook marketing Texas',
    h1: 'Texas Facebook Ads Management - Scale Your Growth Rapidly',
    canonical: url('/facebook-ads-management-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/meta-ads-agency-texas': {
    title: 'Meta Ads Agency Texas | Meta Services USA - Start Today',
    description: 'Meta Ads Agency Texas - Top Meta Ads agency in Texas offering expert Facebook & Instagram ads management to increase traffic, leads & sales. Call Now!',
    keywords: 'Meta Ads agency Texas, Texas Meta Ads, Instagram Ads Texas, Facebook Instagram Ads USA',
    h1: 'Texas Meta Ads Agency - Scalable Social Ad Strategies',
    canonical: url('/meta-ads-agency-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/web-developer-texas': {
    title: 'Web Developer Texas | Website Development - Call Now',
    description: 'Web Developer Texas - Professional web developer in Texas delivering custom website design & development that boosts conversions and user experience.',
    keywords: 'web developer Texas, website development Texas, custom web development Texas, web developer USA',
    h1: 'Texas Web Development - Engineered for High-Performance Growth',
    canonical: url('/web-developer-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/web-design-services-texas': {
    title: 'Web Design Services Texas | Website Design - Call Now',
    description: 'Web Design Services Texas - Professional web design services in Texas creating responsive, user-friendly and SEO-optimized websites. Get Free Quote!',
    keywords: 'web design Texas, website design Texas, web design services Texas, responsive web design USA',
    h1: 'Texas Web Design Services - Elevate Your Online Presence',
    canonical: url('/web-design-services-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/email-marketing-services-texas': {
    title: 'Email Marketing Services Texas, USA - Get Free Quote',
    description: 'Email Marketing Services Texas - Professional email marketing services in Texas to nurture leads, increase engagement & boost sales. Get free quote!',
    keywords: 'email marketing Texas, email marketing services Texas, email automation Texas, email campaigns USA',
    h1: 'Texas Email Marketing - Strategic Multi-Channel Lead Nurturing',
    canonical: url('/email-marketing-services-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Healthcare California Service Landing Pages
  '/healthcare-seo-services-california': {
    title: 'Healthcare SEO Services California - Get Free Quote',
    description: 'Healthcare SEO Services California - Grow patient inquiries, Google rankings & increase appointments with expert healthcare SEO services by a trusted agency.',
    keywords: 'healthcare SEO California, medical SEO California, healthcare marketing California, patient acquisition California, HIPAA-compliant SEO, medical practice growth',
    h1: 'Healthcare SEO Services in California - Dominate Local Patient Acquisition',
    canonical: url('/healthcare-seo-services-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/healthcare-digital-marketing-agency-california': {
    title: 'Healthcare Digital Marketing Agency California - Get Quote',
    description: 'Healthcare digital marketing agency California helping clinics grow visibility and patients. Partner with a healthcare digital marketing agency for growth.',
    keywords: 'healthcare marketing agency California, medical marketing California, HIPAA-compliant marketing, patient acquisition California, healthcare digital marketing',
    h1: 'Healthcare Digital Marketing Agency in California - Accelerate Practice Growth',
    canonical: url('/healthcare-digital-marketing-agency-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/healthcare-google-ads-management-california': {
    title: 'Healthcare Google Ads Management California - Get Quote',
    description: 'Healthcare Google Ads management California designed to generate patient leads and improve ROI. Trust healthcare Google Ads management experts today.',
    keywords: 'healthcare Google Ads California, medical PPC California, HIPAA-compliant PPC, healthcare advertising California, patient acquisition',
    h1: 'Healthcare Google Ads Management in California - Precision Patient Leads',
    canonical: url('/healthcare-google-ads-management-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/healthcare-ppc-services-california': {
    title: 'Healthcare PPC Services California - Get Free Quote',
    description: 'Healthcare PPC services California helping clinics drive patient traffic and increase bookings. Choose healthcare PPC services built for measurable growth.',
    keywords: 'healthcare PPC California, medical PPC California, healthcare advertising California, HIPAA-compliant PPC, patient lead generation',
    h1: 'Healthcare PPC Services in California - ROI-Driven Patient Acquisition',
    canonical: url('/healthcare-ppc-services-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/healthcare-facebook-ads-management-california': {
    title: 'Healthcare Facebook Ads Management California - Get Quote',
    description: 'Healthcare Facebook Ads management California helping clinics reach local patients and boost leads. Partner with Healthcare Facebook Ads management for growth.',
    keywords: 'healthcare Facebook Ads California, medical social media marketing California, HIPAA-compliant Facebook Ads, patient acquisition social media',
    h1: 'Healthcare Facebook Ads Management in California - Local Patient Targeting',
    canonical: url('/healthcare-facebook-ads-management-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/healthcare-meta-ads-agency-california': {
    title: 'Healthcare Meta Ads Agency California - Get Free Quote',
    description: 'Healthcare Meta Ads agency California creating high-converting campaigns to attract patients. Partner with a healthcare Meta Ads agency for growth.',
    keywords: 'healthcare Meta Ads California, medical Meta advertising California, HIPAA-compliant social ads, patient acquisition Meta',
    h1: 'Healthcare Meta Ads Agency in California - Expert Patient Marketing',
    canonical: url('/healthcare-meta-ads-agency-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Healthcare Texas Service Landing Pages
  '/healthcare-seo-services-texas': {
    title: 'Healthcare SEO Services Texas - Get Free Quote',
    description: 'Healthcare SEO Services Texas - Grow patient inquiries, rankings & increase appointments with expert healthcare SEO services by a trusted agency in Texas.',
    keywords: 'healthcare SEO Texas, medical SEO Texas, healthcare marketing Texas, patient acquisition Texas, HIPAA-compliant SEO, medical practice growth, local SEO doctors Texas',
    h1: 'Healthcare SEO Services in Texas - Dominate Medical Search Rankings',
    canonical: url('/healthcare-seo-services-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/healthcare-digital-marketing-agency-texas': {
    title: 'Healthcare Digital Marketing Agency Texas - Get Quote',
    description: 'Healthcare digital marketing agency Texas helping clinics grow visibility and patients. Partner with a healthcare digital marketing agency for growth in Texas.',
    keywords: 'healthcare marketing agency Texas, medical marketing Texas, HIPAA-compliant marketing, patient acquisition Texas, healthcare digital marketing',
    h1: 'Healthcare Digital Marketing Agency in Texas - Scale Your Patient Volume',
    canonical: url('/healthcare-digital-marketing-agency-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/healthcare-google-ads-management-texas': {
    title: 'Healthcare Google Ads Management Texas - Get Quote',
    description: 'Healthcare Google Ads management Texas designed to generate patient leads and improve ROI. Trust healthcare Google Ads management experts today.',
    keywords: 'healthcare Google Ads Texas, medical PPC Texas, HIPAA-compliant PPC, healthcare advertising Texas, patient acquisition',
    h1: 'Healthcare Google Ads Management in Texas - ROI-Driven Patient Leads',
    canonical: url('/healthcare-google-ads-management-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/healthcare-ppc-services-texas': {
    title: 'Healthcare PPC Services Texas - Get Free Quote',
    description: 'Healthcare PPC services Texas helping clinics drive patient traffic and increase bookings. Choose healthcare PPC services built for measurable growth.',
    keywords: 'healthcare PPC Texas, medical PPC Texas, healthcare advertising Texas, HIPAA-compliant PPC, patient lead generation',
    h1: 'Healthcare PPC Services in Texas - Precision Patient Acquisition',
    canonical: url('/healthcare-ppc-services-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/healthcare-facebook-ads-management-texas': {
    title: 'Healthcare Facebook Ads Management Texas - Get Quote',
    description: 'Healthcare Facebook Ads management Texas helping clinics reach local patients and boost leads. Partner with Healthcare Facebook Ads management for growth',
    keywords: 'healthcare Facebook Ads Texas, medical social media marketing Texas, HIPAA-compliant Facebook Ads, patient acquisition social media',
    h1: 'Healthcare Facebook Ads Management in Texas - Target Patients Locally',
    canonical: url('/healthcare-facebook-ads-management-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/healthcare-meta-ads-agency-texas': {
    title: 'Healthcare Meta Ads Agency Texas - Get Free Quote',
    description: 'Healthcare Meta Ads agency Texas creating high-converting campaigns to attract patients. Partner with a healthcare Meta Ads agency for growth in Texas.',
    keywords: 'healthcare Meta Ads Texas, medical Meta advertising Texas, HIPAA-compliant social ads, patient acquisition Meta',
    h1: 'Healthcare Meta Ads Agency in Texas - Expert Medical Social Marketing',
    canonical: url('/healthcare-meta-ads-agency-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Dentist California Service Landing Pages
  '/dentist-seo-services-california': {
    title: 'Dentist SEO Services California - Get Free Quote',
    description: 'Dentist SEO Services California - Grow patient inquiries, Google rankings & increase appointments with expert dentist SEO services by a trusted agency.',
    keywords: 'dentist SEO California, dental SEO California, dental marketing California, dental practice growth, patient acquisition dentist',
    h1: 'Dentist SEO Services in California - Rank Higher & Attract Patients',
    canonical: url('/dentist-seo-services-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dentist-digital-marketing-agency-california': {
    title: 'Dentist Digital Marketing Agency California - Get Quote',
    description: 'Dentist digital marketing agency California helping clinics grow visibility and patients. Partner with a dentist digital marketing agency for growth.',
    keywords: 'dental marketing agency California, dentist marketing California, dental practice marketing, patient acquisition dentist California',
    h1: 'Dentist Digital Marketing Agency in California - Complete Dental Growth',
    canonical: url('/dentist-digital-marketing-agency-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dentist-google-ads-management-california': {
    title: 'Dentist Google Ads Management California - Get Quote',
    description: 'Dentist Google Ads management California designed to generate patient leads and improve ROI. Trust dentist Google Ads management experts today.',
    keywords: 'dental Google Ads California, dentist PPC California, dental advertising California, Google Ads dentist',
    h1: 'Dentist Google Ads Management in California - Precision Dental Leads',
    canonical: url('/dentist-google-ads-management-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dentist-ppc-services-california': {
    title: 'Dentist PPC Services California - Get Free Quote',
    description: 'Dentist PPC services California helping clinics drive patient traffic and increase bookings. Choose dentist PPC services built for measurable growth.',
    keywords: 'dental PPC California, dentist pay per click California, dental advertising California, dental practice growth',
    h1: 'Dentist PPC Services in California - Increase Patient Appointments',
    canonical: url('/dentist-ppc-services-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dentist-facebook-ads-management-california': {
    title: 'Dentist Facebook Ads Management California - Get Quote',
    description: 'Dentist Facebook Ads management California helping clinics reach local patients and boost leads. Partner with Dentist Facebook Ads management for growth.',
    keywords: 'dental Facebook Ads California, dentist social media marketing California, dental practice Facebook advertising',
    h1: 'Dentist Facebook Ads Management in California - Reach Local Families',
    canonical: url('/dentist-facebook-ads-management-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dentist-meta-ads-agency-california': {
    title: 'Dentist Meta Ads Agency California - Get Free Quote',
    description: 'Dentist Meta Ads agency California creating high-converting campaigns to attract patients. Partner with a dentist Meta Ads agency for growth.',
    keywords: 'dental Meta Ads California, dentist Instagram Ads California, dental practice social media advertising',
    h1: 'Dentist Meta Ads Agency in California - Expert Dental Social Ads',
    canonical: url('/dentist-meta-ads-agency-california'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Dentist Texas Service Landing Pages
  '/dentist-seo-services-texas': {
    title: 'Dentist SEO Services Texas - Get Free Quote',
    description: 'Dentist SEO Services Texas - Grow patient inquiries, rankings & increase appointments with expert dentist SEO services by a trusted agency in Texas.',
    keywords: 'dentist SEO Texas, dental SEO Texas, dental marketing Texas, dental practice growth, patient acquisition dentist Texas',
    h1: 'Dentist SEO Services in Texas - Dominate Local Dental Search',
    canonical: url('/dentist-seo-services-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dentist-digital-marketing-agency-texas': {
    title: 'Dentist Digital Marketing Agency Texas - Get Quote',
    description: 'Dentist digital marketing agency Texas helping clinics grow visibility and patients. Partner with a dentist digital marketing agency for growth in Texas.',
    keywords: 'dental marketing agency Texas, dentist marketing Texas, dental practice marketing Texas, patient acquisition dentist',
    h1: 'Dentist Digital Marketing Agency in Texas - Grow Your Practice ROI',
    canonical: url('/dentist-digital-marketing-agency-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dentist-google-ads-management-texas': {
    title: 'Dentist Google Ads Management Texas - Get Quote',
    description: 'Dentist Google Ads management Texas designed to generate patient leads and improve ROI. Trust dentist Google Ads management experts today.',
    keywords: 'dental Google Ads Texas, dentist PPC Texas, dental advertising Texas, Google Ads dentist Texas',
    h1: 'Dentist Google Ads Management in Texas - ROI-Driven Dental Leads',
    canonical: url('/dentist-google-ads-management-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dentist-ppc-services-texas': {
    title: 'Dentist PPC Services Texas - Get Free Quote',
    description: 'Dentist PPC services Texas helping clinics drive patient traffic and increase bookings. Choose dentist PPC services built for measurable growth.',
    keywords: 'dental PPC Texas, dentist pay per click Texas, dental advertising Texas, dental practice growth Texas',
    h1: 'Dentist PPC Services in Texas - Precision Dental Patient Acquisition',
    canonical: url('/dentist-ppc-services-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dentist-facebook-ads-management-texas': {
    title: 'Dentist Facebook Ads Management Texas - Get Quote',
    description: 'Dentist Facebook Ads management Texas helping clinics reach local patients and boost leads. Partner with Dentist Facebook Ads management for growth',
    keywords: 'dental Facebook Ads Texas, dentist social media marketing Texas, dental practice Facebook advertising Texas',
    h1: 'Dentist Facebook Ads Management in Texas - Target Local Patients',
    canonical: url('/dentist-facebook-ads-management-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/dentist-meta-ads-agency-texas': {
    title: 'Dentist Meta Ads Agency Texas - Get Free Quote',
    description: 'Dentist Meta Ads agency Texas creating high-converting campaigns to attract patients. Partner with a dentist Meta Ads agency for growth in Texas.',
    keywords: 'dental Meta Ads Texas, dentist Instagram Ads Texas, dental practice social media advertising Texas',
    h1: 'Dentist Meta Ads Agency in Texas - Expert Dental Marketing',
    canonical: url('/dentist-meta-ads-agency-texas'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Case Studies Overview
  '/case-studies': {
    title: 'Digital Marketing Case Studies | Proven ROI & Growth Results',
    description: "Real digital marketing success stories from Growlimo. See how we've helped businesses across various industries grow revenue 180-300% through SEO and PPC.",
    keywords: 'digital marketing case study, SEO case study, PPC results, marketing success stories, business growth case studies',
    h1: 'Digital Marketing Case Studies - Proven results for US Businesses',
    canonical: url('/case-studies'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Blog Listing
  '/blog': {
    title: 'Digital Marketing Blog | Expert SEO & Lead Acquisition Tips',
    description: 'Expert digital marketing insights, SEO strategies, and lead acquisition tips from Growlimo. Learn from proven case studies and industry best practices.',
    keywords: 'digital marketing blog, marketing insights, SEO tips, lead acquisition strategies, business growth blog',
    h1: 'Digital Marketing Insights for Smarter Business Growth',
    canonical: url('/blog'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Privacy Policy
  '/privacy-policy': {
    title: 'Privacy Policy | HIPAA & GDPR Compliant | Growlimo Healthcare Marketing',
    description: 'Growlimo privacy policy covering data collection, cookies, GDPR/CCPA rights, HIPAA compliance, and data security for our healthcare marketing services.',
    keywords: 'growlimo privacy policy, healthcare marketing privacy, HIPAA compliance, GDPR privacy, medical marketing data protection',
    h1: 'Privacy Policy - Your Data Security is Our Top Priority',
    canonical: url('/privacy-policy'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Terms and Conditions
  '/terms-and-conditions': {
    title: 'Terms and Conditions',
    description:
      'Review GrowLimo terms and conditions for our digital marketing services, website usage, payments, intellectual property, and client responsibilities.',
    h1: 'Terms & Conditions - Our Digital Marketing Service Framework',
    canonical: url('/terms-and-conditions'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },

  // Missing Redirect Routes
  '/std-testing-marketing': {
    title: 'Sexual Health & STD Clinic Marketing | Privacy-First SEO',
    description: 'Discreet, HIPAA-compliant marketing for sexual health and STD/HIV testing clinics. Capture high-intent, same-day testing searches safely and effectively.',
    keywords: 'std testing marketing, hiv clinic SEO, sexual health marketing',
    h1: 'Sexual Health & STD Clinic Marketing - Confidential Patient Acquisition',
    canonical: url('/std-testing-marketing'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/cardiology-marketing': {
    title: 'Cardiology Patient Acquisition | SEO & PPC Specialists',
    description: 'Scale your cardiology practice with specialized medical SEO and high-intent Google Ads. Drive high-quality patient volume predictably.',
    keywords: 'cardiology marketing, cardiac SEO, cardiology patient acquisition',
    h1: 'Cardiology Marketing - High-Intent Patient Leads & Referrals',
    canonical: url('/cardiology-marketing'),
    image: DEFAULT_IMAGE,
    type: 'website',
  },
};

/**
 * Get SEO configuration for a specific route
 * @param {string} path - The route path (e.g., '/services')
 * @returns {object} SEO configuration object
 */
// CRITICAL FIX 3: Robust fallback logic
export const getSEOConfig = (path) => {
  if (seoConfig[path]) return seoConfig[path];
  console.warn(`[seoConfig] No config found for "${path}" — returning defaults`);
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

import {
  generateMetaDescription,
  getFeaturedImageUrl,
  buildCanonicalUrl,
} from '../utils/seo';

/**
 * Generate dynamic SEO for blog posts
 * @param {object} post - Blog post object with title, excerpt, slug
 * @returns {object} SEO configuration object
 */
export const getBlogPostSEO = (post) => {
  if (!post) return seoConfig['/blog'];

  const title = post.title;
  const description = generateMetaDescription(post);

  // Special case: Canonical override for specific blog post slug
  // Redirect from old URL to new preferred URL
  // Use buildCanonicalUrl to ensure proper formatting (lowercase, no trailing slash)
  const canonical = buildCanonicalUrl(`/blog/${post.slug}`);

  const image = getFeaturedImageUrl(post) || DEFAULT_IMAGE;

  return {
    title,
    description,
    h1: post.title,
    keywords:
      post.tags?.join(', ') ||
      'healthcare marketing, medical marketing, patient acquisition',
    canonical,
    image,
    type: 'article',
    article: {
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt || post.createdAt,
      author:
        typeof post.author === 'string'
          ? post.author
          : post.author?.name || 'GrowLimo Team',
      tags: post.tags || [],
    },
  };
};

/**
 * Generate dynamic SEO for case studies
 * @param {object} caseStudy - Case study object with title, description, slug
 * @returns {object} SEO configuration object
 */
export const getCaseStudySEO = (caseStudy) => {
  if (!caseStudy) return seoConfig['/case-studies'];

  const title = `${caseStudy.title} | GrowLimo Case Study`;
  const description = caseStudy.description || caseStudy.challenge || '';
  // Use buildCanonicalUrl to ensure proper formatting
  const canonical = buildCanonicalUrl(`/case-studies/${caseStudy.slug}`);
  const image = caseStudy.image || DEFAULT_IMAGE;

  return {
    title,
    description,
    h1: caseStudy.title,
    keywords:
      caseStudy.tags?.join(', ') ||
      'healthcare marketing case study, medical success story',
    canonical,
    image,
    type: 'article',
  };
};

/**
 * Generate dynamic SEO for service detail pages
 * @param {object} service - Service object with title, description, slug
 * @returns {object} SEO configuration object
 */
export const getServiceSEO = (service) => {
  // CRITICAL FIX 4: Safety fallback
  if (!service) return seoConfig['/services'] ?? seoConfig['/'];

  const path = `/services/${service.slug}`;

  // Return pre-configured SEO if it exists
  if (seoConfig[path]) {
    return seoConfig[path];
  }

  // Generate dynamic SEO for services not in config
  const title = `${service.title} for Medical Practices | GrowLimo`;
  const description = service.description || service.hero?.description || '';
  // Use buildCanonicalUrl to ensure proper formatting
  const canonical = buildCanonicalUrl(path);

  return {
    title,
    description,
    h1: service.title,
    keywords: `${service.title.toLowerCase()}, healthcare marketing, medical marketing`,
    canonical,
    image: DEFAULT_IMAGE,
    type: 'website', // MEDIUM FIX 1
  };
};

export default seoConfig;
