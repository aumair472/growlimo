import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionGAMC({ service, slug }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openMistake, setOpenMistake] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'Google Ads Management Services in California | GrowLimo',
    metaDescription = 'Google Ads Management Services California - certified California Google Ads specialists, 5.8x avg ROAS. Get Google Ads management services in California from GrowLimo today.',
    h1 = 'Google Ads Management in California',
    subheadline = "Ask ten California business owners why their Google Ads aren't working, and nine will point to the budget. They're almost always wrong. In the hundreds of accounts we've reviewed across this state, the budget is rarely the problem — the structure underneath it is. A campaign built on bloated ad groups, untracked conversions, and a landing page that tries to sell everything to everyone will burn through $10,000 as easily as $1,000. GrowLimo provides Google Ads management services in California built by a Google Partner-certified team that has managed over $1.2 million in California ad spend, delivering an average ROAS of 5.8x across home services, healthcare, legal, e-commerce, and B2B. As a dedicated California Google Ads specialist team, we fix what's broken before we ever ask you to spend another dollar.",
    schema
  } = service;

  // Stat Bar Data (4 Pills)
  const statBar = [
    { value: 'Google Partner', label: 'Certified Agency Team', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { value: '$1.2M+', label: 'California Spend Managed', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '4.9★', label: 'Client Rating', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { value: 'Month-to-Month', label: 'No Lock-In Contracts', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
  ];

  // Section 2: 7 Lethal PPC Mistakes
  const mistakes = [
    {
      title: 'Broad match keywords without controls',
      desc: 'Broad match without a disciplined negative keyword list is an open invitation for irrelevant traffic. We regularly find California businesses paying for clicks on searches like "free marketing templates" or "how to DIY plumbing" — nowhere near the paying customer they meant to reach.',
      fix: 'We enforce tight match types (phrase/exact) coupled with an exhaustive negative keyword list built from day one.'
    },
    {
      title: 'Bloated ad groups',
      desc: 'Ad groups carrying 20, 30, even 50-plus keywords make Quality Score optimization nearly impossible. Google rewards tightly themed ad groups of 3–5 keywords with a higher Ad Rank and a lower CPC — and most of the accounts we audit are doing the exact opposite.',
      fix: 'We restructure campaigns into Single-Theme Ad Groups (STAGs) with 3–5 tightly related keywords matching hyper-specific ad copy.'
    },
    {
      title: 'No conversion tracking',
      desc: "It's more common than it should be: a California business spending real money on Google Ads with no conversion tracking in place, which means no way to know which keyword, ad, or campaign actually produced a lead. Without that data, every \"optimization\" is a guess dressed up as a decision.",
      fix: 'We implement full GTM server-side tracking, dynamic call insertion (DCI), and GA4 conversion events before spending budget.'
    },
    {
      title: 'Sending paid traffic to the homepage',
      desc: 'A homepage has to speak to every visitor at once. A paid landing page only has to speak to one — with a single message and a single call to action. Routing expensive PPC clicks to a generic homepage is one of the most common, and most expensive, mistakes we correct.',
      fix: 'We build high-converting, single-focus landing pages tailored directly to the search query and offer.'
    },
    {
      title: 'Neglected negative keyword lists',
      desc: 'Negative keywords are the fastest lever for cutting wasted spend. A properly maintained negative keyword list typically saves California businesses 15–30% of their monthly ad budget within the first 30 days of active management.',
      fix: 'We perform weekly search term audits to continuously expand negative keyword lists and block non-converting traffic.'
    },
    {
      title: 'No ad copy testing',
      desc: "Run one version of an ad, and you'll never know what a better version would have looked like. We test a minimum of three ad variants per group on an ongoing basis, so the market — not our assumptions — decides which message wins.",
      fix: 'We maintain active Responsive Search Ad (RSA) testing schedules with continuous headline and description optimization.'
    },
    {
      title: 'Ignoring device and location bid adjustments',
      desc: 'Performance across California is anything but uniform. A campaign that targets "all of California" at the same bid wastes money in low-converting regions while underbidding in the cities that actually convert, like Los Angeles or San Diego.',
      fix: 'We calibrate bid modifiers down to zip codes, device types, and high-converting dayparting windows.'
    }
  ];

  // Section 3: 7 Services Tabbed Interface
  const servicesTabs = [
    {
      id: 'search',
      label: 'Search Campaigns',
      heading: '1. Search Campaign Strategy & Management',
      paragraphs: [
        'Search campaigns remain the foundation of Google Ads for California businesses chasing high purchase intent. We build tightly structured campaigns around your most valuable keywords, organized into themed ad groups of 3–5 terms, each paired with custom ad copy written to match the specific query behind it.',
        'That tight alignment between keyword, ad, and landing page is what drives Quality Score — and Quality Score is what quietly lowers your CPC without you ever raising a bid. Every search campaign we build includes layered negative keyword architecture, ad schedule bid adjustments tuned to your conversion windows, and device bid modifiers calibrated to how your audience actually browses.'
      ]
    },
    {
      id: 'pmax',
      label: 'Performance Max',
      heading: '2. Performance Max Campaign Management',
      paragraphs: [
        'Performance Max can be one of the strongest levers in a Google Ads account, or it can quietly absorb budget with nothing to show for it — the difference comes down to asset quality, audience signals, and how tightly conversion goals are configured.',
        'We build Performance Max campaigns with strong creative across every format, audience signals pulled from your real customer data, and conversion tracking specific enough that Google knows exactly what a valuable lead looks like. We also keep Search campaign infrastructure running alongside it, because handing full budget control to automation with no manual anchor is a strategy we\'ve watched fail too many times in California markets to recommend it.'
      ]
    },
    {
      id: 'remarketing',
      label: 'Remarketing & Retargeting',
      heading: '3. Remarketing & Retargeting Campaigns',
      paragraphs: [
        'The average California business website converts somewhere between 2% and 5% of first-time visitors. Remarketing exists for the other 95–98% — the people who looked, considered, and left.',
        'We build remarketing audiences segmented by actual behavior (visited a specific service page, spent 60-plus seconds on site, viewed pricing) and serve them ads built around their specific hesitation, across Google Search, the Display Network, and YouTube.'
      ]
    },
    {
      id: 'shopping',
      label: 'Google Shopping',
      heading: '4. Google Shopping Ads for California E-Commerce',
      paragraphs: [
        'For California e-commerce brands, Shopping often outperforms Search outright, simply because a shopper sees your price, image, and store name before they ever click.',
        'We run a full product feed optimization process — front-loaded keyword titles, accurate pricing and availability, custom labels for bid segmentation, and regular audits to catch disapprovals before they quietly erase your visibility. Layered on top is a priority-bidding structure that separates brand, generic, and competitor searches, which typically lifts ROAS 30–50% over a single flat Shopping campaign.'
      ]
    },
    {
      id: 'youtube',
      label: 'YouTube & Display',
      heading: '5. YouTube & Display Advertising',
      paragraphs: [
        'Purchase intent doesn\'t appear out of nowhere — it\'s usually preceded by familiarity. California businesses that pair YouTube pre-roll and Display advertising with their Search campaigns consistently see stronger conversion rates on Search, because the prospect already recognizes the brand by the time they click.',
        'We build audience targeting around in-market segments, custom intent signals, and customer match lists, so video budget reaches Californians who are already circling your category.'
      ]
    },
    {
      id: 'landing',
      label: 'Landing Pages',
      heading: '6. Conversion-Optimized Landing Pages',
      paragraphs: [
        'Even a flawless Google Ads campaign collapses at the landing page if that page doesn\'t convert.',
        'We design dedicated pages for every major campaign — single-focus, headline matched to the ad\'s exact message, real social proof, fast mobile-first load times, and one CTA instead of six competing for attention. Our California landing pages average a 12–18% conversion rate against an industry average closer to 2–5%.'
      ]
    },
    {
      id: 'tracking',
      label: 'Conversion Tracking',
      heading: '7. Conversion Tracking & Analytics Setup',
      paragraphs: [
        'Nothing gets optimized that isn\'t first measured.',
        'Every engagement starts with a full conversion tracking audit — Google Tag Manager configuration, Google Ads conversion actions, dynamic number insertion for call tracking, form fill tracking, and e-commerce purchase events — plus Google Analytics 4 audience segments that feed straight back into campaign targeting.'
      ]
    }
  ];

  // Section 4: 3 Case Studies
  const caseStudies = [
    {
      title: 'San Diego Plumbing Company',
      subtitle: '4.2x More Leads, Same Budget',
      challenge: 'A family-owned San Diego plumbing company spending $3,200/month, paying $187 per lead, and generating just 17 leads a month from a single ad group stuffed with 60-plus broad match keywords, zero negative keywords, and every click landing on the homepage.',
      solution: 'We rebuilt the account into 8 tightly themed ad groups, layered in a 340-term negative keyword list, built 3 dedicated landing pages for the highest-volume service categories, and added call tracking with dynamic number insertion so every phone lead traced back to its source.',
      metrics: [
        { value: '$187 → $44', label: 'Cost-Per-Lead (76% Drop)' },
        { value: '17 → 72 Leads', label: 'Monthly Leads (4.2x / +323%)' },
        { value: '4/10 → 8/10', label: 'Avg Quality Score Lift' },
        { value: '~$28,000', label: 'Est. Monthly New Revenue' }
      ]
    },
    {
      title: 'Los Angeles Medical Spa',
      subtitle: 'Google Ads ROAS of 7.1x',
      challenge: 'A $5,000/month account under a previous agency returning a 1.6x ROAS — $8,000 back for every $5,000 spent — with no audience layering, no remarketing, generic ad copy indistinguishable from competitors, and a landing page fighting itself with six competing CTAs.',
      solution: 'We rebuilt the structure around service-specific ad groups for each high-margin treatment, wrote ad copy that led with the spa\'s actual social proof (a 4.9-star rating, 500-plus treatments performed), launched a remarketing campaign with a time-limited offer for past visitors, and redesigned the landing pages around a single CTA and real before/after testimonials.',
      metrics: [
        { value: '1.6x → 7.1x', label: 'Return on Ad Spend (ROAS)' },
        { value: '$8k → $35.5k', label: 'Monthly Ad Revenue' },
        { value: '+214%', label: 'Consultation Bookings Lift' },
        { value: '$5,000/mo', label: 'Same Budget, 4.4x Revenue' }
      ]
    },
    {
      title: 'Sacramento HVAC Company',
      subtitle: 'Dominating Local Search',
      challenge: 'A Sacramento HVAC company with no Google Ads history and a modest $1,500/month budget, needing leads fast as AC repair searches spiked heading into peak summer.',
      solution: 'We built a geo-targeted campaign across a 25-mile Sacramento radius, added dayparting to prioritize business hours and emergency evening searches, and separated emergency keywords into their own high-bid campaign so urgent searches never went unanswered. A dedicated emergency-services landing page with a prominent "Call Now" CTA and trust signals like BBB accreditation rounded out the build.',
      metrics: [
        { value: '0 → 38 Leads', label: 'Monthly Inbound Leads' },
        { value: '$39 CPL', label: 'Average Cost-Per-Lead' },
        { value: '71%', label: 'Impression Share in Target Area' },
        { value: '$47,000', label: 'First 90 Days Revenue' }
      ]
    }
  ];

  // Section 5: 8 Industries Grid
  const industries = [
    { name: 'Home Services', desc: 'HVAC, plumbing, roofing, electrical, pest control — Emergency keyword bidding, local geo-targeting, call tracking.' },
    { name: 'Healthcare & Medical', desc: 'Dental, medical spa, chiropractors, urgent care — HIPAA-sensitive ad copy, appointment booking conversion tracking.' },
    { name: 'Legal Services', desc: 'Personal injury, immigration, family law — High-CPC competitive markets requiring tight Quality Score management.' },
    { name: 'Real Estate', desc: 'Agents, property managers, developers — Lead form extensions, listing-specific ad groups, neighborhood targeting.' },
    { name: 'E-Commerce', desc: 'Fashion, beauty, home goods, supplements — Shopping campaigns, dynamic remarketing, cart abandonment retargeting.' },
    { name: 'SaaS & Tech', desc: 'Bay Area B2B software companies — Bottom-of-funnel keyword focus, demo-booking conversion optimization.' },
    { name: 'Automotive', desc: 'Dealerships, detailing, repair shops — Vehicle-specific ad groups, local extension optimization.' },
    { name: 'Education & Coaching', desc: 'Online courses, tutoring centers, training programs — Enrollment-focused landing pages, interest audience targeting.' }
  ];

  // Section 6: 7 Regional Market Cards
  const regionalMarkets = [
    { city: 'Los Angeles', note: 'One of the highest-CPC markets in the country — legal, healthcare, home services, real estate, all fighting for the same clicks. We make budgets stretch further through aggressive Quality Score optimization and precision negative keyword lists.' },
    { city: 'San Diego', note: 'A strong local-service market spanning plumbing, dental, med spa, tourism, and military-adjacent demand. We geo-target down to the neighborhood — La Jolla, Chula Vista, Encinitas — rather than the metro as a whole.' },
    { city: 'San Francisco & Bay Area', note: 'The B2B SaaS and tech corridor. High-intent, lower-volume keywords that demand a demo-booking conversion focus rather than raw traffic volume.' },
    { city: 'Sacramento', note: 'Home services and healthcare dominate demand here, with sharp seasonal swings in HVAC and pest control searches. Dayparting and emergency keyword strategies do most of the heavy lifting in the Central Valley.' },
    { city: 'Orange County', note: 'A premium consumer market — cosmetic procedures, high-end real estate, luxury automotive, wellness brands — where a higher spend per customer justifies a more aggressive bid strategy.' },
    { city: 'San Jose', note: 'Tech-adjacent services, staffing, enterprise software, and B2B consulting, where campaigns live or die on bottom-of-funnel precision.' },
    { city: 'Fresno & Central Valley', note: 'Agricultural business services, local retail, and regional home services, with lower CPCs and real headroom for strong conversion performance.' }
  ];

  // Section 7: 4 Certification Badges
  const certBadges = [
    'Google Search Certification',
    'Google Display Certification',
    'Google Shopping Certification',
    'Google Video Certification'
  ];

  // Section 8: 5 Timeline Phases
  const processPhases = [
    { phase: 'Phase 1', timeline: 'Week 1', title: 'Free Account Audit', desc: "A full audit of your existing Google Ads account — or competitive landscape research if you're starting fresh — surfacing wasted spend, structural problems, Quality Score killers, missing conversion tracking, and how competitors are bidding in your California market. You get the full report whether or not you move forward with us." },
    { phase: 'Phase 2', timeline: 'Week 1–2', title: 'Strategy & Architecture', desc: "We build the keyword strategy from Google Keyword Planner data, auction insights, and your own conversion history, map keyword clusters to dedicated ad groups, draft the first round of ad copy, design the negative keyword foundation, and write the landing page brief. Nothing gets built until you've approved the strategy." },
    { phase: 'Phase 3', timeline: 'Week 2–3', title: 'Campaign Build & Launch', desc: 'Ad groups, three ad variants per group, bid strategy, city- and zip-code-level location targeting, device bid adjustments, ad schedule configuration, conversion tracking verification — all of it assembled and run through a full pre-launch QA checklist before a single dollar goes live.' },
    { phase: 'Phase 4', timeline: 'Ongoing', title: 'Weekly Optimization', desc: 'Every week: new negative keywords pulled from search term reports, underperforming ads paused, bids adjusted against real conversion data, new ad copy tested against click-through and conversion signals, and Quality Scores monitored across every ad group. Nothing runs on autopilot.' },
    { phase: 'Phase 5', timeline: 'Monthly/Quarterly', title: 'Monthly Reporting & Strategy Review', desc: "A monthly report covering impressions, clicks, CTR, average CPC, conversions, cost-per-conversion, and ROAS, with plain-language commentary on what changed and what we're testing next — plus a quarterly review to decide whether it's time to expand, reallocate budget, or add a new campaign type." }
  ];

  // Section 9: 7 FAQs
  const faqs = [
    {
      question: 'How much does Google Ads management cost in California?',
      answer: "Management fees for Google Ads in California typically range from $500 to $5,000/month depending on the number of campaigns, industries, and complexity involved. GrowLimo's management starts at $497/month, on top of your ad spend budget. Most California clients invest between $1,500 and $8,000/month in ad spend, depending on their market and lead volume goals."
    },
    {
      question: 'How quickly will I see results from Google Ads?',
      answer: "Google Ads is the fastest-moving channel in digital marketing — campaigns can start generating leads within 24 to 72 hours of launch. SEO can take three to six months to show comparable movement; Google Ads doesn't ask you to wait that long. Peak performance usually lands around the 30- to 60-day mark, once enough data has accumulated to drive real optimization."
    },
    {
      question: 'Why are Google Ads CPCs so expensive in California?',
      answer: "California is one of the most competitive advertising markets on the planet. In fields like personal injury law in Los Angeles, a single click can run $50 to $100. Market density, advertiser competition, and California's sheer consumer base all push CPCs upward. The answer isn't to avoid Google Ads — it's to manage Quality Score aggressively, which lowers your CPC regardless of how crowded the market gets."
    },
    {
      question: 'Do I need a large budget to start Google Ads in California?',
      answer: "Not always. In the right market and industry, $1,000 to $1,500/month can generate meaningful lead volume when the campaign is structured well. We'll tell you the truth during the audit — if your target market needs a budget that won't produce ROI at your current stage, we'll say so instead of taking the money."
    },
    {
      question: 'Can you take over my existing, underperforming Google Ads account?',
      answer: "Yes — and it's often where we see the fastest turnaround. An account with history has data, even if that data is mostly a list of what hasn't worked. It tells us which keywords never converted, which audiences respond, and which ad copy has already been tested. We keep the history and rebuild the structure and strategy around it."
    },
    {
      question: 'Do you require a long-term contract?',
      answer: "No. GrowLimo runs month-to-month. We'd rather earn your business every month through results, transparency, and communication than lock you into a 12-month agreement you can't get out of."
    },
    {
      question: 'What reporting will I receive?',
      answer: 'A comprehensive monthly report covering impressions, clicks, CTR, average CPC, conversions, cost-per-conversion, ROAS, and budget utilization — written in plain English, with optional access to a live dashboard if you want real-time visibility between reports.'
    }
  ];

  return (
    <div className="bg-[#080D18] font-sans selection:bg-[#00C68A]/30 selection:text-white overflow-x-hidden text-[#8FA8C8]">
      <SEO
        title={metaTitle}
        description={metaDescription}
        url={`https://growlimo.com/${slug}/`}
        disableSuffix={true}
        schema={schema}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO (Trust & Authority) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] text-white pt-[90px] md:pt-[110px] pb-[70px] md:pb-[90px] relative overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(66,133,244,0.04)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left 7 Columns: Headline & Stat Pills */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 bg-[rgba(66,133,244,0.12)] border border-[rgba(66,133,244,0.30)] text-[#4285F4] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 leading-none font-sans">
                <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse" />
                GOOGLE PARTNER CERTIFIED PPC AGENCY
              </div>

              <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.75] mb-8">
                {subheadline}
              </p>

              {/* 4 Stat Bar Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-6">
                {statBar.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-3.5 shadow-md hover:border-[#00C68A]/40 transition-all duration-200"
                  >
                    <span className="text-[#00C68A] font-sora font-extrabold text-[17px] mb-0.5 leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[#F0F4FF] font-sans text-[11.5px] font-medium leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                Claim Your Free Google Ads Audit →
              </Link>
            </div>

            {/* Right 5 Columns: Lead Form Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#4285F4]/10 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                  Get Your Free Google Ads Audit
                </h3>
                <p className="text-[13px] text-[#8FA8C8] mb-4">
                  Identify Quality Score leaks, negative keyword gaps, & wasted spend.
                </p>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Claim Your Free Audit →"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHY MOST PPC CAMPAIGNS WASTE BUDGET IN CALIFORNIA (7 Lethal Mistakes) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-left max-w-[860px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              ACCOUNT DIAGNOSTICS & AUDITS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Why Most PPC Campaigns Waste Budget in California
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] mb-6">
              California is not a forgiving market to learn Google Ads in. It's one of the most expensive markets in the country to buy a click in — in competitive industries, a single click in Los Angeles can run anywhere from $15 to well over $80, and that's before anyone knows whether the visitor converts. When the entry price is that high, there's no room for a campaign that's merely "pretty good." After auditing more than 200 Google Ads accounts belonging to California businesses, we keep finding the same handful of mistakes — whether the account was run in-house, by a freelancer, or by another agency that should have known better.
            </p>
            <h3 className="font-sora font-extrabold text-[22px] text-[#F0F4FF]">
              7 Lethal PPC Mistakes We Eliminate:
            </h3>
          </div>

          <div className="space-y-4">
            {mistakes.map((m, idx) => {
              const isOpen = openMistake === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] overflow-hidden transition-all duration-200 text-left"
                >
                  <button
                    onClick={() => setOpenMistake(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-sora font-extrabold text-[13px] flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="font-sora font-bold text-[16px] md:text-[18px] text-[#F0F4FF] leading-snug">
                        {m.title}
                      </h4>
                    </div>
                    <span className={`w-8 h-8 rounded-full bg-[#0C1220] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[rgba(255,255,255,0.05)] space-y-4">
                      <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                        <strong className="text-red-400">The Problem:</strong> {m.desc}
                      </p>
                      <div className="p-4 rounded-xl bg-[#0C1220] border-l-4 border-[#00C68A] text-[#F0F4FF] font-sans text-[14.5px]">
                        <strong className="text-[#00C68A]">GrowLimo Fix:</strong> {m.fix}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-5 rounded-[16px] bg-[#162035] border-l-4 border-[#00C68A] text-left">
            <p className="font-sans text-[14.5px] font-semibold text-[#00C68A]">
              💡 Fixing these 7 mistakes is what takes a California account from burning budget to delivering a predictable 5.8x average ROAS.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: OUR SERVICES (7 Services Tabbed Interface) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              TAILORED PPC CAPABILITIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Our Google Ads Management Services for California Businesses
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              There's no such thing as a one-size-fits-all PPC package — not in a state with this much regional and industry variation. What follows is the full range of Google Ads management services we deploy, matched to your market, your competition, and your goals.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-[rgba(255,255,255,0.08)] pb-4">
            {servicesTabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`cursor-pointer px-4 py-2.5 rounded-xl font-sora font-semibold text-[13px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A] ${
                    isActive
                      ? 'bg-[#00C68A] text-[#080D18] shadow-[0_4px_16px_rgba(0,198,138,0.3)] font-bold'
                      : 'bg-[#0C1220] text-[#8FA8C8] hover:text-[#F0F4FF] hover:bg-[#162035] border border-[rgba(255,255,255,0.06)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left transition-all duration-300">
            <h3 className="text-[22px] md:text-[28px] font-extrabold font-sora text-[#F0F4FF] leading-snug mb-4">
              {servicesTabs[activeTab].heading}
            </h3>

            <div className="space-y-4 font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
              {servicesTabs[activeTab].paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: CASE STUDIES (3 Stat-Heavy Cards) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              PROVEN METRICS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Proven Results From California's Google Ads Management Specialists
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              The clearest evidence of whether a Google Ads management agency actually knows what it's doing isn't the pitch — it's what happened to the account before and after. Here are three unfiltered examples.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-full inline-block mb-4">
                    {cs.title}
                  </span>

                  <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] leading-snug mb-6">
                    {cs.subtitle}
                  </h3>

                  {/* 4 Prominent Stat Callouts Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#0C1220] p-3.5 rounded-xl border border-[rgba(255,255,255,0.05)]">
                        <span className="font-sora font-extrabold text-[18px] text-[#00C68A] block leading-none mb-1">
                          {m.value}
                        </span>
                        <span className="font-sans text-[11px] text-[#8FA8C8] leading-tight block">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 font-sans text-[14px] leading-relaxed">
                    <p className="text-[#8FA8C8]">
                      <strong className="text-[#F0F4FF]">Starting Point:</strong> {cs.challenge}
                    </p>
                    <p className="text-[#8FA8C8]">
                      <strong className="text-[#00C68A]">What We Rebuilt:</strong> {cs.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: INDUSTRIES SERVED (8 Grid Items) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              INDUSTRY SPECIFICITY
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Industries We Serve as a California PPC Management Agency
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              PPC strategy isn't universal. Every industry in California carries its own keyword intent, bidding dynamics, and conversion requirements, and treating them all the same is how budgets get wasted. Here's where our experience runs deep:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center text-[#00C68A] mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-sora font-bold text-[17px] text-[#F0F4FF] mb-2">
                    {ind.name}
                  </h3>
                  <p className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CALIFORNIA MARKETS (7 Regional Cards) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              LOCAL COMPETITIVE LANDSCAPES
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Google Ads Management Services in Every Major California Market
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              Treating California as one market is one of the fastest ways to waste a budget. It's really dozens of distinct competitive landscapes stitched together, each with its own CPC benchmarks, search behavior, and buyer intent. Our Google Ads management services are built city by city, down to the zip code, across:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalMarkets.map((reg, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
              >
                <span className="text-[#00C68A] font-sora font-extrabold text-[18px] mb-3 block">
                  📍 {reg.city}
                </span>
                <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                  {reg.note}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: TEAM CREDIBILITY & EDITORIAL BLOCK */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
            <div className="inline-flex items-center gap-2 bg-[rgba(66,133,244,0.12)] border border-[rgba(66,133,244,0.30)] text-[#4285F4] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[4px] px-[14px] mb-4">
              GOOGLE PARTNER AGENCY
            </div>

            <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Meet Your Certified California Google Ads Specialist Team
            </h2>

            <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-6">
              Every account at GrowLimo is run by an in-house certified specialist — never handed off to a white-label provider, never dropped on a junior analyst to learn on your dime. Our lead PPC strategist holds Google Ads Search, Display, Shopping, and Video certifications and has personally managed more than $1.2M in California ad spend across home services, healthcare, legal, e-commerce, and SaaS over the past seven years.
            </p>

            <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-8">
              We operate as a Google Partner agency, which means meeting Google's certification requirements, ongoing performance standards, and managed spend thresholds — and it gives our clients access to beta Google Ads features ahead of wide release, plus a direct escalation path through Google's partner support channel.
            </p>

            {/* 4 Certification Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {certBadges.map((badge, bIdx) => (
                <div key={bIdx} className="bg-[#162035] border border-[rgba(66,133,244,0.2)] p-3 rounded-xl flex items-center gap-2 text-[#F0F4FF] font-sans text-[12.5px] font-semibold">
                  <svg className="w-4 h-4 text-[#4285F4] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Editorial Info Component */}
            <div className="bg-[#162035] border border-[rgba(0,198,138,0.2)] rounded-[16px] p-6 space-y-3 font-sans text-[14px]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#F0F4FF]">
                <strong className="text-[#00C68A] font-sora">Reviewed by:</strong>
                <span>
                  <a
                    href="https://www.linkedin.com/in/leadgeneration-google-ads-expert/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00C68A] font-semibold underline hover:text-[#0FB786] transition-colors cursor-pointer"
                  >
                    Muhammad Usman
                  </a>
                  , Senior PPC Strategist at GrowLimo — 7+ years managing California Google Ads accounts, Google Search/Display/Shopping/Video/PMax certified.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#8FA8C8] border-t border-[rgba(255,255,255,0.06)] pt-3">
                <strong className="text-[#00C68A] font-sora">Last updated:</strong>
                <span>August 2026 — Updated with latest Quality Score benchmarks & PMax bidding rules.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: PROCESS (5 Phases Timeline) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              DISCIPLINED EXECUTION
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              How Our California Google Ads Management Process Works
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              We follow a structured 5-phase process with every California Google Ads client. No shortcuts, no templates, no guessing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processPhases.map((p, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sora font-extrabold text-[15px] text-[#00C68A]">
                      {p.phase}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[1.5px] bg-[#080D18] border border-[rgba(255,255,255,0.08)] text-[#8FA8C8] px-3 py-1 rounded-full">
                      {p.timeline}
                    </span>
                  </div>

                  <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] leading-snug mb-3">
                    {p.title}
                  </h3>

                  <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px]">

          <div className="text-left max-w-[800px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Google Ads Management FAQs for California Businesses
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden transition-all duration-200 text-left"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sora font-bold text-[16px] md:text-[17px] text-[#F0F4FF] leading-snug">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full bg-[#162035] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[rgba(255,255,255,0.05)]">
                      <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[90px] md:py-[110px] relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C68A]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 md:px-10 max-w-[960px] relative z-10 text-center">
          <div className="bg-[#1A2438] border border-[rgba(0,198,138,0.25)] rounded-[24px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4285F4]/10 rounded-bl-full pointer-events-none" />

            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] mb-4 inline-block font-sans">
              STOP BLEEDING PPC BUDGET
            </span>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
              Get Started With California's Trusted Google Ads Management Agency
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[760px] mx-auto mb-6">
              Get a free, no-obligation Google Ads audit from GrowLimo's California PPC team. We'll review your existing account — or your competitors' accounts, if you're starting fresh — flag every dollar of waste, and show you exactly what a properly managed campaign looks like for your market, industry, and budget.
            </p>

            <p className="font-sans text-[13px] text-[#00C68A] font-semibold mb-8 max-w-[760px] mx-auto">
              📍 Serving All of California | Google Partner Certified | Month-to-Month, No Lock-In | Response Within 24 Hours
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                Claim Your Free Google Ads Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
