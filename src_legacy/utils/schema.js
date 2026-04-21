/**
 * Structured data utilities for JSON-LD schemas.
 */

import { seoDefaults } from '../config/seoConfig';
import { siteConfig } from '../config/siteConfig';

const DEFAULT_SITE_URL = seoDefaults.siteUrl;

const absoluteUrl = (value = '') => {
  if (!value) return DEFAULT_SITE_URL;
  if (value.startsWith('http://') || value.startsWith('https://')) return value;
  return `${DEFAULT_SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
};

export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${DEFAULT_SITE_URL}/#organization`,
  name: siteConfig.legalName,
  alternateName: seoDefaults.siteName,
  url: DEFAULT_SITE_URL,
  logo: siteConfig.logoUrl,
  image: siteConfig.defaultImage,
  sameAs: siteConfig.sameAs,
});

export const createWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${DEFAULT_SITE_URL}/#website`,
  name: seoDefaults.siteName,
  url: DEFAULT_SITE_URL,
  publisher: { '@id': `${DEFAULT_SITE_URL}/#organization` },
});

export const createBreadcrumbSchema = (items = []) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
});

export const createArticleSchema = ({
  title,
  description,
  url,
  image,
  publishedAt,
  updatedAt,
  author,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: absoluteUrl(url),
  headline: title,
  description,
  image: image ? [absoluteUrl(image)] : [absoluteUrl('/og-image.png')],
  datePublished: publishedAt,
  dateModified: updatedAt || publishedAt,
  author: {
    '@type': 'Person',
    name: author || 'GrowLimo Team',
  },
  publisher: {
    '@type': 'Organization',
    '@id': `${DEFAULT_SITE_URL}/#organization`,
    name: seoDefaults.siteName,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo.png'),
    },
  },
});

export const createFAQSchema = (items = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items
    .map((item) => {
      const question = item.q || item.question || item.name;
      const answer = item.a || item.answer || item.text;

      if (!question || !answer) return null;

      return {
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      };
    })
    .filter(Boolean),
});

export const createServiceSchema = ({
  name,
  description,
  url,
  areaServed,
  serviceType,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  serviceType: serviceType || name,
  description,
  url: absoluteUrl(url),
  provider: {
    '@id': `${DEFAULT_SITE_URL}/#organization`,
  },
  areaServed: areaServed
    ? {
        '@type': 'State',
        name: areaServed,
      }
    : {
        '@type': 'Country',
        name: 'United States',
      },
});
