# Analytics Audit Documentation: Google Tag Manager & Google Analytics 4

This document outlines the GTM and GA4 tracking setup for the Growlimo website.

## 1. GTM Installation Location
Google Tag Manager is loaded dynamically using Next.js `Script` tag inside [_app.jsx](file:///d:/Client's Website/Growlimo File's/growlimo 1/growlimo 1.3/frontend - Copy/pages/_app.jsx):
- Script is injected in the main app layout.
- Container ID: `GTM-NQRJFFZJ` (populated via `NEXT_PUBLIC_GTM_ID`).
- A fallback `<noscript>` iframe snippet is located in [_document.jsx](file:///d:/Client's Website/Growlimo File's/growlimo 1/growlimo 1.3/frontend - Copy/pages/_document.jsx) inside the `<body>` element.

## 2. GA4 Configuration
- GA4 is configured **strictly inside GTM**.
- Direct loading of the standalone `gtag.js` script tag has been removed from the frontend code (previously in `lib/analytics/ga4.js`).
- Measurement ID `G-H9R39XYKXT` is managed only inside GTM to avoid duplicate tracking.
- Consent Mode v2 default settings are initialized in [ga4.js](file:///d:/Client's Website/Growlimo File's/growlimo 1/growlimo 1.3/frontend - Copy/lib/analytics/ga4.js) and pushed to the global `dataLayer` before GTM is loaded.

## 3. Route Change Tracking (Client-Side Navigation)
- Client-side navigation in this Next.js Pages Router application is tracked in `_app.jsx` using `router.events.on('routeChangeComplete')`.
- On every client-side route change, it calls `ga4.trackPageView(url)` which pushes a `virtual_page_view` event to GTM `dataLayer` containing `page_path`, `page_title`, and `page_location`.
- Personal identifiable information (PII) like names, emails, phones, and messages is automatically stripped before any data pushes.

## 4. Tracked Events
GTM triggers can be set up for the following dataLayer events:
- **`virtual_page_view`**: Triggered on every client-side page navigation.
- **Custom Events**: Any tracking events triggered from components will push `{ event: eventName, event_data: params }` to `dataLayer` (with PII parameters sanitized).

## 5. Verification Steps

### GTM Preview Mode
1. Go to Google Tag Manager and click **Preview**.
2. Enter the website URL `https://www.growlimo.com` (or local development server URL).
3. Confirm Tag Assistant connects successfully.
4. Browse the website and check that `virtual_page_view` events appear in the Tag Assistant timeline for every page transition.
5. Verify that the Consent default and update commands are logged in Tag Assistant.

### GA4 Realtime Verification
1. Open Google Analytics 4 dashboard and go to **Reports > Realtime**.
2. Perform test navigations on the site.
3. Confirm that page views and user activity are recorded in real-time under the correct page paths.

## 6. Duplicate Tracking Checklist
- [x] Check if direct `gtag.js?id=G-H9R39XYKXT` is loaded: **Removed**.
- [x] Check if another GTM container is loaded: **Only GTM-NQRJFFZJ is present**.
- [x] Check if page_view event fires twice on initial page load: **Direct page_view config was disabled, GTM controls the initialization page_view event**.
