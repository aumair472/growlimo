import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="GrowLimo" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#00C68A" />
        <meta name="msapplication-TileColor" content="#00C68A" />
        
        {/* CWV LCP: Font preloading is now handled by next/font in _app.jsx */}
        
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/logo.png" />
        
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Global Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService", "MarketingAgency"],
              "@id": "https://growlimo.com/#organization",
              "name": "Growlimo Digital Marketing Agency",
              "alternateName": "GrowLimo",
              "url": "https://growlimo.com",
              "logo": "https://growlimo.com/logo.png",
              "image": "https://growlimo.com/og-image.png",
              "telephone": "+1-724-750-6935",
              "email": "info@growlimo.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "7917 Mountain Rd NE",
                "addressLocality": "Albuquerque",
                "addressRegion": "NM",
                "postalCode": "87110",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.linkedin.com/company/growlimo",
                "https://www.facebook.com/people/GrowLimo/61581846653070/",
                "https://www.instagram.com/growlimo/",
                "https://www.tiktok.com/@growlimo"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://growlimo.com/#website",
              "url": "https://growlimo.com",
              "name": "GrowLimo",
              "publisher": {
                "@id": "https://growlimo.com/#organization"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
