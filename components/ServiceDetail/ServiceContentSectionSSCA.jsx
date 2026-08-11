import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionSSCA({ service, slug }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'SEO Services California | #1 SEO Agency & Company | GrowLimo',
    metaDescription = 'SEO Services California - GrowLimo is a top-rated SEO company and agency serving California businesses with technical, local, content & AI search optimization. Free audit.',
    h1 = 'SEO Services in California',
    subheadline = 'GrowLimo is a California SEO agency and SEO company that helps local businesses rank higher on Google and get cited in AI-generated answers — Google AI Overviews, ChatGPT, and Perplexity. As a full-service SEO firm serving Los Angeles, San Francisco, San Diego, Sacramento, and San Jose, we combine technical SEO, local SEO, content built on E-E-A-T, and AI search optimization to move California businesses to Page 1 and keep them there.',
    schema
  } = service;

  // Stat Bar Data
  const statBar = [
    { value: '10+ Years', label: 'Combined SEO Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '100+', label: 'California Businesses Ranked on Page 1', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '60–90 Days', label: 'Average Time to First Ranking Movement', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
  ];

  // What are SEO Services 4 Cards
  const whyCaCards = [
    {
      title: 'Hyper-competitive local markets',
      desc: 'In Los Angeles alone, thousands of businesses compete for the same head terms, which pushes agencies toward long-tail and hyper-local keyword strategies to win visibility faster.',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
    },
    {
      title: 'Tech-savvy, research-heavy consumers',
      desc: 'California searchers typically run multiple queries and compare several options before calling, booking, or buying — meaning a page has to earn trust, not just a click.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      title: 'High paid-search costs',
      desc: 'Legal, medical, and real estate keywords in California routinely cost $50–$200+ per click on Google Ads. Organic rankings built through SEO deliver the same traffic without the per-click cost.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Mobile-first search behavior',
      desc: 'A majority of California local searches now happen on mobile, so fast-loading, mobile-optimized pages are a baseline requirement, not an upgrade.',
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
    }
  ];

  // Term Disambiguation List
  const termDefinitions = [
    { term: 'SEO agency', def: 'A team offering a full range of SEO services (technical, content, local, link building) plus related channels like PPC and web design.' },
    { term: 'SEO company', def: 'The general business term for any organization selling SEO services, regardless of size or specialization.' },
    { term: 'SEO firm', def: 'Usually implies a smaller, senior-led practice with a more consultative, hands-on relationship.' },
    { term: 'SEO consultant', def: 'An individual expert, often brought in for strategy or audits rather than full execution.' }
  ];

  // Why GrowLimo 6 Differentiators
  const whyGrowLimoPoints = [
    'Proven Page 1 rankings for clients in Los Angeles, San Francisco, San Diego, Sacramento, and San Jose across healthcare, legal, real estate, eCommerce, and B2B',
    'Full-funnel SEO — technical health, on-page optimization, authoritative content, and white-hat link building under one strategy',
    'California market expertise — geo-specific search behavior, local competition, and Google\'s local algorithm signals',
    'No long-term lock-in contracts — clients stay for results, not because they\'re contractually stuck',
    'Transparent monthly reporting tied to rankings, organic traffic, and leads — not vanity metrics',
    'A dedicated senior SEO strategist on every account, not a rotating junior team'
  ];

  // 8 SEO Services Tabs
  const servicesTabs = [
    {
      id: 'technical',
      label: 'Technical SEO Audit',
      heading: '1. Technical SEO Audit & Optimization',
      paragraphs: [
        'The foundation everything else is built on. Before content or link building begins, we audit your website to ensure Googlebot and AI search crawlers can index and parse your content flawlessly.'
      ],
      bullets: [
        'Core Web Vitals (LCP, INP, CLS) — Google\'s page-experience signals',
        'Crawlability and indexation — making sure Googlebot (and AI crawlers) can find and read every page',
        'Site speed, especially on mobile devices',
        'Structured data / schema markup for rich results and AI citation',
        'Mobile-first optimization',
        'Duplicate content, canonical issues, and redirect chains',
        'XML sitemap and robots.txt configuration'
      ]
    },
    {
      id: 'local',
      label: 'Local SEO California',
      heading: '2. Local SEO California',
      paragraphs: [
        'When someone searches "SEO agency Los Angeles" or "dentist near me in Pasadena," Google leans on local signals to populate the Map Pack and top organic results. Our local SEO work covers:'
      ],
      bullets: [
        'Google Business Profile optimization — setup, photos, review strategy, post scheduling',
        'Local citation building — consistent NAP across 50+ California and national directories',
        'Geo-targeted landing pages for every California city or neighborhood served',
        'A systematic review-acquisition strategy',
        'Local link building from California-based sites, chambers of commerce, and news outlets'
      ]
    },
    {
      id: 'keywords',
      label: 'Keyword Research',
      heading: '3. Keyword Research & Competitive Analysis',
      paragraphs: [
        'Every high-performing California SEO campaign starts by discovering high-intent search terms your potential customers type when ready to buy:'
      ],
      bullets: [
        'High-intent commercial keywords competitors rank for that you\'re missing',
        'Long-tail and local variations with faster ranking potential',
        'Search volume and CPC data to prioritize the highest-value opportunities',
        'Competitor gap analysis',
        'Keyword mapping to the right page, preventing cannibalization'
      ]
    },
    {
      id: 'content',
      label: 'Content Strategy & E-E-A-T',
      heading: '4. Content Strategy & E-E-A-T SEO Copywriting',
      paragraphs: [
        'Google\'s E-E-A-T framework — Experience, Expertise, Authoritativeness, Trustworthiness — now weighs Experience most heavily. Content that shows genuine first-hand experience, named authors, and verifiable outcomes outranks generic, impersonal pages. Our content team produces:'
      ],
      bullets: [
        'SEO-optimized service pages targeting your core California keywords',
        'Location landing pages for every city or region you serve',
        'Authority blog content built for long-tail search and topical depth',
        'FAQ content structured to win People Also Ask boxes and AI Overview citations',
        'Case studies with real, verifiable outcomes'
      ]
    },
    {
      id: 'linkbuilding',
      label: 'Link Building',
      heading: '5. Link Building & Domain Authority Growth',
      paragraphs: [
        'Backlinks remain one of Google\'s strongest ranking signals — and in legal, healthcare, and real estate, you can\'t rank without an authoritative backlink profile. Our white-hat approach:',
        'No PBNs, link farms, or black-hat tactics — every link is built to survive algorithm updates.'
      ],
      bullets: [
        'Editorial outreach to California news outlets, blogs, and industry publications',
        'Digital PR campaigns for brand mentions and high-authority links',
        'Broken-link building on relevant California sites',
        'Guest posting with genuine editorial value',
        'Local sponsorships and partnership-based link acquisition',
        'Competitor backlink analysis'
      ]
    },
    {
      id: 'ecommerce',
      label: 'eCommerce SEO',
      heading: '6. eCommerce SEO California',
      paragraphs: [
        'High-converting eCommerce SEO strategies for California brands competing for high-volume commercial intent keywords:'
      ],
      bullets: [
        'Category page optimization for high-volume, commercial-intent keywords',
        'Product page SEO — titles, descriptions, schema, image alt text',
        'Site architecture that maximizes link equity to key product pages',
        'Google Shopping feed optimization',
        'Faceted navigation and pagination SEO to prevent index bloat'
      ]
    },
    {
      id: 'enterprise',
      label: 'Enterprise & Multi-Location',
      heading: '7. Enterprise & Multi-Location SEO',
      paragraphs: [
        'Scalable search strategies built for franchises, chain locations, and multi-region enterprises operating across California:'
      ],
      bullets: [
        'Unique, non-duplicate content for every location page',
        'Centralized reporting with per-location breakdowns',
        'Franchise SEO governance across locations',
        'Site-wide internal linking architecture'
      ]
    },
    {
      id: 'aisearch',
      label: 'AI Search Optimization',
      heading: '8. AI Search Optimization (Generative Engine Optimization)',
      paragraphs: [
        'Search no longer ends at ten blue links. Google AI Overviews, ChatGPT, Perplexity, and Gemini now answer many queries directly, pulling from — and citing — the sources they trust most. GrowLimo builds every California SEO page to earn that citation:'
      ],
      bullets: [
        'Direct-answer paragraphs positioned where AI systems extract them',
        'Content structured around how people actually phrase questions, not just head-term keywords',
        'FAQPage, Organization, LocalBusiness, and Review schema so AI systems can parse who you are and what you offer',
        'Confirming AI crawlers (Google-Extended, GPTBot, PerplexityBot, ClaudeBot) aren\'t blocked in robots.txt',
        'Original data and named authorship — the same signals that drive traditional rankings also drive AI citation',
        'Ongoing tracking of AI-generated citations, not just blue-link rankings'
      ]
    }
  ];

  // 6-step Process
  const processSteps = [
    { step: '01', title: 'Step 1: Free Comprehensive SEO Audit', desc: 'A full review of technical health, current rankings, organic traffic, competitor positioning, and keyword opportunities — no obligation to proceed.' },
    { step: '02', title: 'Step 2: Custom California SEO Strategy', desc: 'A 90-day roadmap with clear milestones, prioritized actions, target keywords, and projected outcomes — built for your market, never templated.' },
    { step: '03', title: 'Step 3: Technical Foundation & Site Health', desc: 'Resolving every issue from the audit — speed, Core Web Vitals, schema, crawl errors, indexation, mobile optimization.' },
    { step: '04', title: 'Step 4: On-Page Optimization & Content Creation', desc: 'Optimizing existing pages and creating new service, location, and authority content across the keywords your California customers search.' },
    { step: '05', title: 'Step 5: Authority Building & Link Acquisition', desc: 'A targeted link building campaign from authoritative California and industry-relevant sites.' },
    { step: '06', title: 'Step 6: Monthly Reporting, Analysis & Scaling', desc: 'A monthly report on keyword movement, organic traffic, leads, and ROI — with the strategy refined every cycle.' }
  ];

  // 3 Case Studies
  const caseStudies = [
    {
      title: 'San Diego Medical Clinic',
      subtitle: 'Page 4 to Position #2 in 4 Months',
      challenge: 'A specialty San Diego clinic was invisible on Google despite strong reviews — critical technical errors, no local citations, zero schema markup.',
      result: 'Full technical overhaul, 12 geo-targeted location pages, and a local link building campaign took the clinic to position #2 for its primary keyword; patient inquiries from organic search doubled.',
      statValue: 'Position #2',
      statLabel: 'Primary Keyword Rank (Page 4 → #2)',
      statValue2: '2x Inquiries',
      statLabel2: 'Patient Organic Leads'
    },
    {
      title: 'Los Angeles eCommerce Brand',
      subtitle: 'Top 3 for 12 Keywords in 6 Months',
      challenge: 'A well-designed LA direct-to-consumer site had no organic presence.',
      result: 'Rebuilt site architecture, optimized category and product pages, and an authority content campaign put the brand in the top 3 for 12 major keywords and cut paid ad spend by 40%.',
      statValue: 'Top 3',
      statLabel: 'Ranked for 12 Major Keywords',
      statValue2: '40% Cut',
      statLabel2: 'Reduced Google Ads Spend'
    },
    {
      title: 'Northern California Franchise',
      subtitle: 'Consistent Rankings Across 5 Locations',
      challenge: 'A 5-location franchise had inconsistent rankings and duplicate-content conflicts across location pages.',
      result: 'A unique content strategy per location, duplicate-content cleanup, and centralized reporting brought all 5 locations to Page 1 for their primary local keywords.',
      statValue: '5 Locations',
      statLabel: 'Page 1 Coverage',
      statValue2: '100%',
      statLabel2: 'Duplicate Penalty Resolution'
    }
  ];

  // 3 Pricing Tiers
  const pricingTiers = [
    {
      name: 'Local SEO Starter',
      price: '$799',
      period: '/month',
      audience: 'Single-location small businesses',
      popular: false,
      features: [
        'Technical SEO audit',
        'Google Business Profile optimization',
        '5 on-page optimizations',
        'Local citations building',
        'Monthly transparent reporting'
      ]
    },
    {
      name: 'Growth SEO',
      price: '$1,499',
      period: '/month',
      audience: 'Competitive niches, multi-service businesses',
      popular: true,
      popularLabel: 'Most Popular',
      features: [
        'Everything in Local SEO Starter',
        'Content creation (4 pages/month)',
        'Link building (8 links/month)',
        'Comprehensive competitor analysis',
        'Dedicated senior SEO strategist'
      ]
    },
    {
      name: 'Enterprise SEO',
      price: '$2,999',
      period: '/month',
      audience: 'Multi-location, eCommerce, and high-competition markets',
      popular: false,
      features: [
        'Everything in Growth SEO',
        'Dedicated senior account strategist',
        '10+ authority content pages/month',
        'Aggressive link building campaign',
        'Conversion Rate Optimization (CRO)'
      ]
    }
  ];

  // Cities List Tag Cloud
  const cities = [
    'Los Angeles',
    'San Francisco',
    'San Diego',
    'Sacramento',
    'San Jose',
    'Orange County',
    'Fresno',
    'Long Beach',
    'Oakland',
    'Riverside',
    'Anaheim',
    'Bakersfield'
  ];

  // FAQs List (11 exact items matching schema and source copy)
  const faqs = [
    {
      question: 'What are SEO services?',
      answer: 'SEO services are the technical, on-page, content, and off-page work an agency performs to improve a website\'s visibility in Google and other search engines for the terms its customers actually search.'
    },
    {
      question: 'What does an SEO agency do?',
      answer: 'An SEO agency audits a website\'s technical health, researches target keywords, optimizes on-page content, builds authoritative backlinks, and reports on rankings, traffic, and leads on an ongoing monthly basis.'
    },
    {
      question: 'How much do SEO services cost in California?',
      answer: 'GrowLimo\'s California SEO packages start at $799/month for local SEO, $1,499/month for growth SEO, and $2,999/month for enterprise and multi-location SEO. All packages include a dedicated strategist and monthly reporting.'
    },
    {
      question: 'How long does SEO take to show results in California?',
      answer: 'Most California businesses see measurable ranking improvements within 60–90 days. Highly competitive niches like legal, medical, and real estate typically take 4–6 months to reach Page 1.'
    },
    {
      question: 'What makes GrowLimo different from other California SEO agencies?',
      answer: 'Every strategy is built from scratch by a senior SEO strategist with California market expertise, combining technical SEO, content, and white-hat link building into one system — reported against real business outcomes, not vanity metrics.'
    },
    {
      question: 'Do you offer local SEO for specific California cities?',
      answer: 'Yes. GrowLimo builds dedicated, uniquely written landing pages for any California city or neighborhood — including Los Angeles, San Francisco, San Diego, Sacramento, San Jose, Fresno, Long Beach, Oakland, Anaheim, Riverside, and Bakersfield.'
    },
    {
      question: 'What\'s the difference between SEO and Google Ads?',
      answer: 'SEO earns organic rankings that keep delivering traffic without an ongoing per-click cost; Google Ads (PPC) buys immediate visibility but stops the moment spending stops. Most California businesses use SEO for compounding, long-term traffic and PPC for immediate lead flow.'
    },
    {
      question: 'Can SEO help my business show up in AI search tools like ChatGPT and Google AI Overviews?',
      answer: 'Yes. Structuring content around direct answers, adding schema markup, keeping AI crawlers unblocked, and publishing original, well-sourced content all increase the odds of being cited in AI-generated answers — this is the core of GrowLimo\'s AI search optimization service.'
    },
    {
      question: 'Do you provide monthly SEO reports?',
      answer: 'Yes. Every client receives a monthly report covering keyword rankings, organic traffic growth, backlink profile updates, and conversion data tied to business outcomes.'
    },
    {
      question: 'Can you help if my website was penalized by Google?',
      answer: 'Yes. GrowLimo performs full Google penalty audits, disavows toxic backlinks, fixes technical violations, and executes recovery strategies, with most clients seeing recovery within 3–6 months depending on the penalty type.'
    },
    {
      question: 'Do you require a long-term contract?',
      answer: 'No. All packages include a free onboarding audit, a dedicated account strategist, detailed monthly reporting, and no long-term contract.'
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
        {/* Abstract background glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left 7 Columns: Headline, Copy & Stat Bar */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 leading-none font-sans">
                <span className="w-2 h-2 rounded-full bg-[#00C68A] animate-pulse" />
                TOP-RATED CALIFORNIA SEO AGENCY & COMPANY
              </div>

              <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.75] mb-8">
                {subheadline}
              </p>

              {/* 3 Stat Bar Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-6">
                {statBar.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-4 shadow-md hover:border-[#00C68A]/40 transition-all duration-200"
                  >
                    <span className="text-[#00C68A] font-sora font-extrabold text-[20px] mb-0.5 leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[#F0F4FF] font-sans text-[12px] font-medium leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                Get My Free California SEO Audit →
              </Link>
            </div>

            {/* Right 5 Columns: Lead Form Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                  Get Your Free California SEO Audit
                </h3>
                <p className="text-[13px] text-[#8FA8C8] mb-4">
                  Discover technical errors, keyword gaps, and competitor strategies.
                </p>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Get My Free SEO Audit →"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHAT ARE SEO SERVICES & WHY CALIFORNIA NEEDS A SPECIALIZED APPROACH */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              MARKET REALITIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              What Are SEO Services, and Why Does California Need a Specialized Approach?
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
              SEO services are the ongoing technical, on-page, content, and off-page work that improves how a website ranks in Google and other search engines for the terms its customers actually type in. Done well, SEO services put a business in front of high-intent buyers at the moment they're searching — without paying per click the way Google Ads requires. California adds a layer most other states don't:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCaCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center text-[#00C68A] mb-5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                    </svg>
                  </div>
                  <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: TERM DISAMBIGUATION (Agency vs Company vs Firm vs Consultant) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[70px] md:py-[90px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-10">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              TERMINOLOGY DISAMBIGUATION
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-3">
              SEO Agency vs. SEO Company vs. SEO Firm vs. SEO Consultant — What's the Difference?
            </h2>
            <p className="font-sans text-[14.5px] leading-relaxed text-[#8FA8C8]">
              Searchers use these terms almost interchangeably, and Google treats them as close variants of the same intent — which is why this page answers all four in one place instead of repeating thin, near-duplicate sections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {termDefinitions.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-6 text-left"
              >
                <span className="inline-block text-[#00C68A] font-sora font-extrabold text-[15px] mb-2">
                  {item.term}
                </span>
                <p className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">
                  {item.def}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-[14px] bg-[#162035] border-l-4 border-[#00C68A] text-left">
            <p className="font-sans text-[14.5px] font-medium text-[#F0F4FF] leading-relaxed">
              💡 GrowLimo operates as all four in California: a full-service SEO agency and SEO company by team structure, run with the senior-led, no-lock-in approach of a boutique SEO firm, with a dedicated SEO consultant assigned to every account.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WHY GROWLIMO (6 Differentiators) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              OUR DIFFERENCE
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Why California Businesses Choose GrowLimo
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
              Most SEO agencies and SEO firms California businesses evaluate offer generic packages, templated reports, and outsourced execution. GrowLimo is built differently:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyGrowLimoPoints.map((pt, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left flex gap-4 items-start transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
              >
                <div className="w-8 h-8 rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center text-[#00C68A] shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sans text-[14.5px] leading-relaxed text-[#F0F4FF] font-medium">
                  {pt}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR SEO SERVICES IN CALIFORNIA (8 Services Tabbed Interface) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              FULL-SERVICE SEO SOLUTION
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Our SEO Services in California
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              A comprehensive SEO program covers every factor Google and AI search systems use to evaluate a page. Here's how we get California businesses to Page 1 — and keep them citable in AI-generated answers.
            </p>
          </div>

          {/* Tab Controls */}
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

            <div className="space-y-4 mb-6">
              {servicesTabs[activeTab].paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                  {p}
                </p>
              ))}
            </div>

            {/* Bullets List */}
            {servicesTabs[activeTab].bullets && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {servicesTabs[activeTab].bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex gap-3 items-start bg-[#162035] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
                    <svg className="w-5 h-5 text-[#00C68A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-sans text-[14px] text-[#F0F4FF] leading-relaxed font-medium">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: OUR CALIFORNIA SEO PROCESS (6-Step Timeline) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              EXECUTION ROADMAP
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Our California SEO Process
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              A structured, six-step process used across every California engagement:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[28px] font-extrabold font-sora text-[#00C68A] mb-3 leading-none">
                    {st.step}
                  </div>
                  <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] leading-snug mb-3">
                    {st.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: CASE STUDIES (3 Cards with Stat Callouts) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              PROVEN RESULTS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Real Results: California SEO Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-full inline-block mb-4">
                    {cs.title}
                  </span>

                  <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] leading-snug mb-6">
                    {cs.subtitle}
                  </h3>

                  {/* 2 Stat Callout Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-[#162035] p-3.5 rounded-xl border border-[rgba(255,255,255,0.05)]">
                      <span className="font-sora font-extrabold text-[18px] text-[#00C68A] block leading-none mb-1">
                        {cs.statValue}
                      </span>
                      <span className="font-sans text-[11px] text-[#8FA8C8] leading-tight block">
                        {cs.statLabel}
                      </span>
                    </div>
                    <div className="bg-[#162035] p-3.5 rounded-xl border border-[rgba(255,255,255,0.05)]">
                      <span className="font-sora font-extrabold text-[18px] text-[#00C68A] block leading-none mb-1">
                        {cs.statValue2}
                      </span>
                      <span className="font-sans text-[11px] text-[#8FA8C8] leading-tight block">
                        {cs.statLabel2}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 font-sans text-[14px] leading-relaxed">
                    <p className="text-[#8FA8C8]">
                      <strong className="text-[#F0F4FF]">Challenge:</strong> {cs.challenge}
                    </p>
                    <p className="text-[#8FA8C8]">
                      <strong className="text-[#00C68A]">Result:</strong> {cs.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: PRICING (3 Tiers) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              TRANSPARENT INVESTMENT
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              California SEO Pricing
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              All packages include a free onboarding audit, a dedicated account strategist, detailed monthly reporting, and no long-term contract.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`bg-[#162035] rounded-[24px] p-8 text-left flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular
                    ? 'border-2 border-[#00C68A] shadow-[0_10px_30px_rgba(0,198,138,0.15)]'
                    : 'border border-[rgba(255,255,255,0.08)]'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 right-6 bg-[#00C68A] text-[#080D18] font-sora font-extrabold text-[11px] uppercase tracking-[1.5px] px-3 py-1 rounded-full">
                    {tier.popularLabel}
                  </span>
                )}

                <div>
                  <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] mb-2">
                    {tier.name}
                  </h3>
                  <p className="font-sans text-[13px] text-[#8FA8C8] mb-6 min-h-[38px]">
                    Best for: {tier.audience}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[rgba(255,255,255,0.08)] flex items-baseline gap-1">
                    <span className="font-sora font-extrabold text-[36px] text-[#F0F4FF]">
                      {tier.price}
                    </span>
                    <span className="font-sans text-[14px] text-[#8FA8C8]">
                      {tier.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex gap-3 items-start text-[14px] font-sans text-[#F0F4FF]">
                        <svg className="w-4 h-4 text-[#00C68A] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact/"
                  className={`cursor-pointer w-full text-center py-3.5 rounded-xl font-sora font-extrabold text-[14px] transition-all duration-200 ${
                    tier.popular
                      ? 'bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] shadow-[0_4px_16px_rgba(0,198,138,0.3)]'
                      : 'bg-[#0C1220] hover:bg-[#080D18] text-[#F0F4FF] border border-[rgba(255,255,255,0.1)]'
                  }`}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: ABOUT / E-E-A-T AUTHORSHIP BLOCK */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              AUTHORITY & E-E-A-T
            </span>

            <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              About GrowLimo — The Experience Behind Your California SEO Strategy
            </h2>

            <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-8">
              GrowLimo is a full-service SEO company California businesses rely on in competitive US markets. Our team brings 10+ years of combined experience in technical SEO, content strategy, and authority link building, with a focus on California's search landscape. We've worked with businesses from solo practitioners to multi-location franchises, across healthcare, law, and eCommerce, and we build every strategy on Google's E-E-A-T principles so it earns lasting authority rather than a short-lived ranking bump.
            </p>

            {/* Editorial Info Component */}
            <div className="bg-[#162035] border border-[rgba(0,198,138,0.2)] rounded-[16px] p-6 space-y-3 font-sans text-[14px]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#F0F4FF]">
                <strong className="text-[#00C68A] font-sora">Reviewed by:</strong>
                <span>
                  <a
                    href="https://www.linkedin.com/in/mursaleen-hafeez-minhas-98a3933ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00C68A] font-semibold underline hover:text-[#0FB786] transition-colors cursor-pointer"
                  >
                    Mursaleen Hafeez Minhas
                  </a>
                  , Senior SEO Strategist at GrowLimo — 10+ years of expertise in Technical SEO & Search Optimization.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#8FA8C8] border-t border-[rgba(255,255,255,0.06)] pt-3">
                <strong className="text-[#00C68A] font-sora">Last updated:</strong>
                <span>August 2026 — Reviewed for modern California search standards & AI Overviews optimization.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: AREAS SERVED (City Tag Cloud) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            GEOGRAPHIC COVERAGE
          </span>

          <h2 className="text-[28px] sm:text-[34px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Areas We Serve Across California
          </h2>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-8 max-w-[800px]">
            We build dedicated, non-duplicate location pages available for any California city or neighborhood you operate in:
          </p>

          {/* Interactive Tag Cloud */}
          <div className="flex flex-wrap gap-3">
            {cities.map((city, idx) => (
              <span
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] text-[#F0F4FF] hover:border-[#00C68A]/50 hover:text-[#00C68A] font-sora font-semibold text-[14px] px-4 py-2 rounded-full transition-all duration-200 shadow-sm"
              >
                📍 {city}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px]">

          <div className="text-left max-w-[800px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden transition-all duration-200"
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
                    <div className="px-6 pb-6 pt-2 text-left border-t border-[rgba(255,255,255,0.05)]">
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
      {/* SECTION 12: FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[90px] md:py-[110px] relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C68A]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 md:px-10 max-w-[960px] relative z-10 text-center">
          <div className="bg-[#1A2438] border border-[rgba(0,198,138,0.25)] rounded-[24px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />

            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] mb-4 inline-block font-sans">
              DOMINATE ORGANIC & AI SEARCH
            </span>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
              Ready to Dominate California Search Results?
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[760px] mx-auto mb-6">
              Every day your business isn't on Page 1 is revenue going to a competitor who is. Start with a free, no-obligation California SEO audit that shows exactly where you stand and what it takes to reach the top — on Google and in AI search.
            </p>

            <p className="font-sans text-[13px] text-[#00C68A] font-semibold mb-8 max-w-[760px] mx-auto">
              Serving all of California — Los Angeles | San Francisco | San Diego | Sacramento | San Jose | Orange County | Fresno | Long Beach | Oakland | Riverside | Anaheim
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                Get My Free SEO Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
