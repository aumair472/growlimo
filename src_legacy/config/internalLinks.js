/**
 * Automatic Internal Linking System
 * Generates intelligent internal links based on content relationships
 */

/**
 * All available routes in the application (from sitemap)
 */
export const sitemapRoutes = {
  // Main pages
  home: '/',
  services: '/contact',
  caseStudies: '/case-studies',
  blog: '/blog',
  about: '/contact',
  contact: '/contact',

  // Service pages (California)
  healthcareSeoCA: '/healthcare-seo-services-california',
  healthcarePpcCA: '/healthcare-ppc-services-california',
  healthcareAgencyCA: '/healthcare-digital-marketing-agency-california',
  healthcareAdsCA: '/healthcare-google-ads-management-california',
  healthcareFbAdsCA: '/healthcare-facebook-ads-management-california',
  healthcareMetaAdsCA: '/healthcare-meta-ads-agency-california',

  dentistSeoCA: '/dentist-seo-services-california',
  dentistPpcCA: '/dentist-ppc-services-california',
  dentistAgencyCA: '/dentist-digital-marketing-agency-california',
  dentistAdsCA: '/dentist-google-ads-management-california',
  dentistFbAdsCA: '/dentist-facebook-ads-management-california',
  dentistMetaAdsCA: '/dentist-meta-ads-agency-california',

  // Service pages (Texas)
  healthcareSeoTX: '/healthcare-seo-services-texas',
  healthcarePpcTX: '/healthcare-ppc-services-texas',
  healthcareAgencyTX: '/healthcare-digital-marketing-agency-texas',
  healthcareAdsTX: '/healthcare-google-ads-management-texas',
  healthcareFbAdsTX: '/healthcare-facebook-ads-management-texas',
  healthcareMetaAdsTX: '/healthcare-meta-ads-agency-texas',

  dentistSeoTX: '/dentist-seo-services-texas',
  dentistPpcTX: '/dentist-ppc-services-texas',
  dentistAgencyTX: '/dentist-digital-marketing-agency-texas',
  dentistAdsTX: '/dentist-google-ads-management-texas',
  dentistFbAdsTX: '/dentist-facebook-ads-management-texas',
  dentistMetaAdsTX: '/dentist-meta-ads-agency-texas',

  // General Services
  seoCA: '/seo-services-california',
  seoTX: '/seo-services-texas',
  ppcCA: '/ppc-services-california',
  ppcTX: '/ppc-services-texas',
  googleAdsCA: '/google-ads-management-california',
  googleAdsTX: '/google-ads-management-texas',
  fbAdsCA: '/facebook-ads-management-california',
  fbAdsTX: '/facebook-ads-management-texas',
  metaAdsCA: '/meta-ads-agency-california',
  metaAdsTX: '/meta-ads-agency-texas',

  // Case studies (actual existing case studies)
  physioGoogleAdsCaseStudy:
    '/case-studies/physiotherapy-google-ads-san-francisco',
  sportsRehabGoogleAdsCaseStudy:
    '/case-studies/sports-rehab-google-ads-fremont',
};

/**
 * Content categories for intelligent linking
 */
const contentCategories = {
  ppc: {
    services: [
      sitemapRoutes.healthcareAdsCA,
      sitemapRoutes.healthcareAdsTX,
      sitemapRoutes.googleAdsCA,
      sitemapRoutes.googleAdsTX,
    ],
    caseStudies: [
      sitemapRoutes.physioGoogleAdsCaseStudy,
      sitemapRoutes.sportsRehabGoogleAdsCaseStudy,
    ],
    keywords: [
      'ppc',
      'paid advertising',
      'google ads',
      'facebook ads',
      'cost per patient',
      'ad spend',
      'bing ads',
      'search ads',
    ],
  },
  seo: {
    services: [
      sitemapRoutes.healthcareSeoCA,
      sitemapRoutes.healthcareSeoTX,
      sitemapRoutes.seoCA,
      sitemapRoutes.seoTX,
    ],
    caseStudies: [sitemapRoutes.physioGoogleAdsCaseStudy],
    keywords: [
      'seo',
      'search engine',
      'ranking',
      'organic traffic',
      'google business',
      'local search',
      'near me',
      'backlinks',
    ],
  },
  automation: {
    services: [
      sitemapRoutes.marketingAutomation,
      sitemapRoutes.reputationManagement,
    ],
    caseStudies: [sitemapRoutes.sportsRehabGoogleAdsCaseStudy],
    keywords: [
      'automation',
      'crm',
      'email marketing',
      'reviews',
      'reputation',
      'follow-up',
    ],
  },
};

/**
 * Get related service pages based on content
 * @param {string} content - Page content or keywords
 * @param {number} limit - Maximum number of links to return
 * @returns {array} Array of related service URLs
 */
export const getRelatedServices = (content, limit = 2) => {
  const contentLower = content.toLowerCase();
  const relatedServices = new Set();

  // Check PPC-related content
  if (
    contentCategories.ppc.keywords.some((keyword) =>
      contentLower.includes(keyword)
    )
  ) {
    contentCategories.ppc.services.forEach((service) =>
      relatedServices.add(service)
    );
  }

  // Check SEO-related content
  if (
    contentCategories.seo.keywords.some((keyword) =>
      contentLower.includes(keyword)
    )
  ) {
    contentCategories.seo.services.forEach((service) =>
      relatedServices.add(service)
    );
  }

  // Check Automation-related content
  if (
    contentCategories.automation.keywords.some((keyword) =>
      contentLower.includes(keyword)
    )
  ) {
    contentCategories.automation.services.forEach((service) =>
      relatedServices.add(service)
    );
  }

  // If no matches, return default services
  if (relatedServices.size === 0) {
    return [sitemapRoutes.medicalPpc, sitemapRoutes.healthcareSeo].slice(
      0,
      limit
    );
  }

  return Array.from(relatedServices).slice(0, limit);
};

/**
 * Get related case studies based on content
 * @param {string} content - Page content or keywords
 * @param {number} limit - Maximum number of links to return
 * @returns {array} Array of related case study URLs
 */
export const getRelatedCaseStudies = (content, limit = 1) => {
  const contentLower = content.toLowerCase();
  const relatedCaseStudies = new Set();

  // Check PPC-related content
  if (
    contentCategories.ppc.keywords.some((keyword) =>
      contentLower.includes(keyword)
    )
  ) {
    contentCategories.ppc.caseStudies.forEach((cs) =>
      relatedCaseStudies.add(cs)
    );
  }

  // Check SEO-related content
  if (
    contentCategories.seo.keywords.some((keyword) =>
      contentLower.includes(keyword)
    )
  ) {
    contentCategories.seo.caseStudies.forEach((cs) =>
      relatedCaseStudies.add(cs)
    );
  }

  // Check Automation-related content
  if (
    contentCategories.automation.keywords.some((keyword) =>
      contentLower.includes(keyword)
    )
  ) {
    contentCategories.automation.caseStudies.forEach((cs) =>
      relatedCaseStudies.add(cs)
    );
  }

  // If no matches, return default case study
  if (relatedCaseStudies.size === 0) {
    return [sitemapRoutes.physioGoogleAdsCaseStudy].slice(0, limit);
  }

  return Array.from(relatedCaseStudies).slice(0, limit);
};

/**
 * Get related blog posts (placeholder - will be populated when blog posts are created)
 * @param {string} content - Page content or keywords
 * @param {number} limit - Maximum number of links to return
 * @returns {array} Array of related blog post URLs
 */
export const getRelatedBlogPosts = (content, limit = 3) => {
  // Placeholder - will be populated with actual blog post URLs
  const contentLower = content.toLowerCase();
  const relatedBlogs = [];

  // Actual blog post slugs from sitemap (updated March 2026)
  const blogPosts = {
    ppc: [
      '/blog/google-ads-strategy-healthcare-practices-2026',
      '/blog/high-roi-google-ads-healthcare-marketing',
      '/blog/common-google-ads-mistakes-healthcare-medical-practices',
    ],
    seo: [
      '/blog/local-seo-checklist-us-healthcare-practices',
      '/blog/rank-medical-clinic-near-me-google-maps-healthcare-seo',
      '/blog/optimizing-google-business-profile-healthcare-practices',
    ],
    social: [
      '/blog/social-media-strategies-healthcare-patient-appointments',
      '/blog/building-strong-social-media-brand-healthcare-practices',
      '/blog/tiktok-marketing-strategies-healthcare-practices',
    ],
  };

  if (
    contentCategories.ppc.keywords.some((keyword) =>
      contentLower.includes(keyword)
    )
  ) {
    relatedBlogs.push(...blogPosts.ppc);
  }

  if (
    contentCategories.seo.keywords.some((keyword) =>
      contentLower.includes(keyword)
    )
  ) {
    relatedBlogs.push(...blogPosts.seo);
  }

  // Check for social media related content
  if (
    [
      'social media',
      'facebook',
      'instagram',
      'tiktok',
      'linkedin',
      'social ads',
    ].some((keyword) => contentLower.includes(keyword))
  ) {
    relatedBlogs.push(...blogPosts.social);
  }

  return relatedBlogs.slice(0, limit);
};

/**
 * Get all internal links for a page
 * @param {object} options - Options object
 * @param {string} options.content - Page content
 * @param {string} options.type - Page type: 'blog', 'service', 'case-study'
 * @returns {object} Object with services, caseStudies, and blogs arrays
 */
export const getInternalLinks = ({ content, type }) => {
  const links = {
    services: [],
    caseStudies: [],
    blogs: [],
  };

  switch (type) {
    case 'blog':
      links.services = getRelatedServices(content, 2);
      links.caseStudies = getRelatedCaseStudies(content, 1);
      break;

    case 'service':
      links.caseStudies = getRelatedCaseStudies(content, 2);
      links.blogs = getRelatedBlogPosts(content, 3);
      break;

    case 'case-study':
      links.services = getRelatedServices(content, 2);
      links.blogs = getRelatedBlogPosts(content, 2);
      break;

    default:
      links.services = getRelatedServices(content, 2);
      links.caseStudies = getRelatedCaseStudies(content, 1);
  }

  return links;
};

/**
 * Get human-readable title for a route
 * @param {string} route - Route path
 * @returns {string} Human-readable title
 */
export const getRouteTitle = (route) => {
  const titles = {
    [sitemapRoutes.medicalPpc]: 'Medical PPC Management',
    [sitemapRoutes.healthcareSeo]: 'Healthcare SEO Services',
    [sitemapRoutes.medicalWebDesign]: 'Medical Website Design',
    [sitemapRoutes.marketingAutomation]: 'Marketing Automation',
    [sitemapRoutes.reputationManagement]: 'Reputation Management',
    [sitemapRoutes.physioGoogleAdsCaseStudy]:
      'Physio Clinic Google Ads: 670 Leads & 17x ROAS',
    [sitemapRoutes.sportsRehabGoogleAdsCaseStudy]:
      'Sports Rehab Google Ads: 348 Leads & 8.2x ROAS',
  };

  return titles[route] || route;
};

export default {
  sitemapRoutes,
  getRelatedServices,
  getRelatedCaseStudies,
  getRelatedBlogPosts,
  getInternalLinks,
  getRouteTitle,
};
