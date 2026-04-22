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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
