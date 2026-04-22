import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { siteConfig } from '../lib/config';

export default function SEO({ title, description, url, schema, image, type = 'website', disableSuffix = false }) {
  const siteName = siteConfig.siteName || 'GrowLimo';
  const fullTitle = (title && !disableSuffix) ? `${title} | ${siteName}` : (title || siteName);

  // Ensure URL has a trailing slash for consistency
  const canonicalUrl = url ? (url.endsWith('/') ? url : `${url}/`) : undefined;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.siteUrl}/#organization`,
    'name': siteConfig.siteName,
    'url': siteConfig.siteUrl,
    'logo': siteConfig.logoUrl,
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': siteConfig.phone,
      'contactType': 'customer service',
      'email': siteConfig.email,
      'areaServed': 'US',
      'availableLanguage': 'en'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': siteConfig.address.streetAddress,
      'addressLocality': siteConfig.address.addressLocality,
      'addressRegion': siteConfig.address.addressRegion,
      'postalCode': siteConfig.address.postalCode,
      'addressCountry': siteConfig.address.addressCountry
    },
    'sameAs': siteConfig.sameAs
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    'url': siteConfig.siteUrl,
    'name': siteConfig.siteName,
    'description': description,
    'publisher': { '@id': `${siteConfig.siteUrl}/#organization` }
  };

  // Combine schemas
  const schemas = [organizationSchema, websiteSchema];
  if (schema) {
    if (Array.isArray(schema)) {
      schemas.push(...schema);
    } else {
      schemas.push(schema);
    }
  }

  return (
    <>
      <NextSeo
        title={fullTitle}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: fullTitle,
          description,
          type,
          images: [
            {
              url: image || siteConfig.defaultImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          site_name: siteName,
        }}
        twitter={{
          handle: siteConfig.twitterHandle,
          site: siteConfig.twitterHandle,
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </Head>
    </>
  );
}
