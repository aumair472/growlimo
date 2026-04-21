import { NextSeo } from 'next-seo';
import Head from 'next/head';

export default function SEO({ title, description, url, schema, image, type = 'website', disableSuffix = false }) {
  const siteName = 'GrowLimo';
  const fullTitle = (title && !disableSuffix) ? `${title} | ${siteName}` : (title || siteName);

  return (
    <>
      <NextSeo
        title={fullTitle}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title: fullTitle,
          description,
          type,
          images: [
            {
              url: image || 'https://growlimo.com/og-image.png',
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          site_name: siteName,
        }}
        twitter={{
          handle: '@growlimo',
          site: '@growlimo',
          cardType: 'summary_large_image',
        }}
      />
      {schema && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        </Head>
      )}
    </>
  );
}
