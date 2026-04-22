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

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/logo.png" />

        {/* ✅ FIX: preconnect > dns-prefetch for critical third parties */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        {/* dns-prefetch as fallback for browsers that don't support preconnect */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
