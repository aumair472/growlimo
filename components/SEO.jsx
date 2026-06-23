import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { siteConfig } from '../lib/config';

export default function SEO({
  title,
  description,
  url,
  schema,
  image,
  type = 'website',
  disableSuffix = false,
  noindex = false,
  isHomepage = false,
}) {
  const siteName = siteConfig.siteName;

  // ✅ FIX: Don't append suffix if title already contains brand name or pipe
  const alreadyHasBrand = title && (title.includes('| GrowLimo') || title.includes('| Growlimo'));
  const fullTitle =
    title && (disableSuffix || alreadyHasBrand)
      ? title
      : title
      ? `${title} | ${siteName}`
      : siteName;

  // ✅ FIX: Enforce non-www canonical — normalize any www URL passed in
  const normalizeUrl = (rawUrl) => {
    if (!rawUrl) return undefined;
    const withSlash = rawUrl.endsWith('/') ? rawUrl : `${rawUrl}/`;
    // Strip www. prefix so canonical is always https://growlimo.com/...
    return withSlash.replace('https://www.growlimo.com', 'https://growlimo.com');
  };
  const canonicalUrl = normalizeUrl(url);

  // ✅ FIX: Use @graph instead of root array for valid schema
  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.logoUrl,
      width: 200,
      height: 60,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      email: siteConfig.email,
      areaServed: 'US',
      availableLanguage: 'en',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    sameAs: siteConfig.sameAs,
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.siteName,
    description: description,
    publisher: { '@id': `${siteConfig.siteUrl}/#organization` },
  };

  // ✅ FIX: LocalBusiness schema — only inject on homepage
  const localBusinessSchema = isHomepage
    ? {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.siteUrl}/#localbusiness`,
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          ...siteConfig.address,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        hasMap: siteConfig.hasMap,
        sameAs: siteConfig.sameAs,
        priceRange: '$$',
        areaServed: { '@type': 'Country', name: 'United States' },
        image: siteConfig.defaultImage,
      }
    : null;

  // Build @graph array
  const graphItems = [organizationSchema, websiteSchema];
  if (localBusinessSchema) graphItems.push(localBusinessSchema);
  if (schema) {
    if (Array.isArray(schema)) graphItems.push(...schema);
    else graphItems.push(schema);
  }

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': graphItems,
  };

  return (
    <>
      <NextSeo
        title={fullTitle}
        description={description}
        canonical={canonicalUrl}
        noindex={noindex}
        nofollow={noindex}
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
              alt: title || siteName,
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
        {canonicalUrl && (
          <>
            <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
            <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>
    </>
  );
}
