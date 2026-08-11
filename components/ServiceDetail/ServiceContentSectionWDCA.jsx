import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionWDCA({ service, slug }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'Web Developer California | Best Web Developers | GrowLimo',
    metaDescription = 'Web Developer California - Looking for the best web developers in California? GrowLimo is a web developer & UI/UX developer offering custom website building services. Free audit.',
    h1 = 'Web Developer in California',
    subheadline = 'A slow, generic website costs you customers before they ever see what you sell. GrowLimo is a web developer in California built for businesses that have outgrown templates and bloated plugins — a team of engineers and UI/UX developers who build custom web applications, not cookie-cutter sites, for companies across Los Angeles, San Diego, and San Francisco. Whether you need website building services from the ground up, a UI/UX developer to redesign how customers experience your product, or a technical partner to fix a slow site someone else built, this is where California businesses come when the current site is holding the business back.',
    schema
  } = service;

  // Trust Pills Data
  const trustPills = [
    { label: '100+ California Clients', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: '4.9-star Google Rating', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { label: 'No Lock-In Contracts', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
  ];

  // Why GrowLimo 3 Pillars
  const whyGrowLimoPillars = [
    {
      title: 'Custom Web Application Engineering',
      desc: "We don't rely on bloated plugins, pre-made themes, or cookie-cutter templates that slow performance down. We engineer custom web applications using modern, fast frameworks — React, Next.js, and Node.js — for lightning-fast load times, clean code structures, and platform performance built around your exact business requirements in the California market. Custom architecture prevents the security leaks that come bundled with generic plugin stacks and scales smoothly as your user base grows. We follow modular development principles, separating concerns so features can be added and updated without breaking what's already running.",
      badge: 'React / Next.js / Node.js'
    },
    {
      title: 'EHR/CRM & API System Integrations',
      desc: 'A website that doesn\'t talk to your business systems is only doing half the job. We connect your web systems directly to your databases, CRM, and e-commerce platforms — billing tools, CRM lead flows, custom API endpoints — through secure, encrypted connections that automate workflows and eliminate sync errors. We write automated test scripts to verify endpoints stay active, monitor API latency daily, and configure error-handling pipelines, retry queues, and diagnostic logging so integrations stay reliable, not just functional on launch day.',
      badge: 'Automated Workflows & Endpoints'
    },
    {
      title: 'Advanced Code Performance & Security Standards',
      desc: "Every build meets strict speed, performance, and compliance standards: secure database access, SSL certificates, configured firewalls, and code optimized to pass Google's Core Web Vitals, with minimal Time to First Byte and genuinely responsive pages. We follow industry best practices to protect customer data and deploy automated unit tests, continuous integration checks, and security updates so the platform stays clear of vulnerabilities long after launch.",
      badge: 'Core Web Vitals & OWASP Security'
    }
  ];

  // UI/UX Visual Steps (6 steps)
  const uiuxSteps = [
    {
      number: '01',
      title: 'User Research & Journey Mapping',
      desc: 'Understanding how your California customers actually navigate toward a decision, not how we assume they do.'
    },
    {
      number: '02',
      title: 'Wireframing & Information Architecture',
      desc: 'Structuring pages and flows around the actions that matter most to your business, before a single pixel is polished.'
    },
    {
      number: '03',
      title: 'Interaction & Visual Design',
      desc: 'Building interfaces that feel native to how people already use the web, reducing the friction between arrival and action.'
    },
    {
      number: '04',
      title: 'Prototyping & Usability Testing',
      desc: 'Validating flows with real interaction patterns before development time is spent building the wrong thing.'
    },
    {
      number: '05',
      title: 'Design Systems',
      desc: 'Reusable, documented component libraries that keep new pages and features visually consistent as the site grows.'
    },
    {
      number: '06',
      title: 'Accessibility-First Design',
      desc: 'Interfaces built to WCAG standards from the first wireframe, not retrofitted after launch.'
    }
  ];

  // Website Building Services Cards (4 cards)
  const websiteBuildingServices = [
    {
      title: 'Next.js & React Development',
      desc: 'High-performance static and server-rendered applications built for fast load speeds, smooth navigation, and strong SEO rankings. We use incremental static regeneration to compile database-driven pages dynamically, combining speed with up-to-date content, and optimize webpack bundles, code-splitting, and lazy-loading to keep download sizes lean.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'API & Systems Integrations',
      desc: 'Connecting websites to CRM, billing, inventory, and practice management databases through secure API pipelines that automate processes, eliminate manual data entry errors, and route leads in under five seconds. We write secure serverless endpoints and authorization protocols that verify credentials before any file or customer data transfers.',
      icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      title: 'Custom E-Commerce Engineering',
      desc: 'Custom e-commerce systems with secure payment checkouts, dynamic inventory syncing, automated discount rules, shopping cart recovery automation, and structured customer notifications built to drive repeat purchases — connected to leading payment processors with encryption and compliance standards built in.',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'Technical Site Speed Audits',
      desc: 'Debugging slow database queries, minifying bloated scripts, optimizing asset loading, and tuning server response times to improve Core Web Vitals and organic rankings — tracing script execution blockages, auditing database indexes, and compiling assets to keep the site functional under heavy traffic.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    }
  ];

  // Technical Deep-Dive Tabs (6 tabs)
  const deepDiveTabs = [
    {
      id: 'headless',
      shortLabel: 'Headless Architecture',
      heading: 'Modern Web Engineering: Headless Architecture & Performance',
      paragraphs: [
        'Bloated websites take too long to load, especially on mobile connections — standard content management systems often ship excessive scripts and styles that slow everything down. We build on modern headless architecture instead, separating backend data from frontend rendering so visual rendering never has to wait on a heavy database query.',
        'Separating the interface from the backend lets us compile static pages that load in milliseconds. Next.js and React let us deploy server-rendered pages that pass Core Web Vitals cleanly, giving both users and search engines the fast experience each one rewards, with fluid page transitions that feel closer to a native app than a website. We optimize bundling, code-splitting, and asset prefetching so navigation carries zero friction, clean up external dependencies to prevent mobile lag, and build in TypeScript for type safety and fewer runtime errors.'
      ],
      bullets: [
        'Next.js Framework: Server-side rendering and static page generation for fast mobile speeds.',
        'React UI Components: Flexible, reusable user interface elements built for mobile screens.',
        'Tailored Code Base: Writing only the code your site needs, avoiding bloated third-party scripts.',
        'Global CDN Deployment: Deploying pages to edge networks so they load fast from any city.',
        'Modular Code Standards: Writing structured code components that enable easy feature additions.',
        'Pre-fetching Technology: Loading linked page resources in the background for instant navigation.',
        'TypeScript Integration: Verifying type constraints at compile time to eliminate runtime crashes.'
      ]
    },
    {
      id: 'integrations',
      shortLabel: 'CRM/EHR & API Integrations',
      heading: 'Secure CRM, EHR & API Database Integrations',
      paragraphs: [
        "A website shouldn't operate in isolation. To actually improve business efficiency, your site has to sync with billing, scheduling, inventory, and database systems — so we build secure API connections that automate data transfer and eliminate manual entry work for your staff. We connect contact forms and scheduling links directly to databases like Dentrix, Eaglesoft, Salesforce, or custom SQL systems, routing data securely while keeping customer information protected and compliance standards met, with redaction filters for sensitive parameters before anything is saved.",
        'That keeps the backend clean and customer records synced without manual entry errors — fail-safes and sync queues prevent data loss during hosting interruptions, automated unit tests verify API connections continuously, and webhook listeners process real-time status updates as they happen.'
      ],
      bullets: [
        'Secure Data Encryption: Encrypting all data in transit via SSL and modern protocols.',
        'Real-Time Syncing: Booking calendars and user entries synced to databases instantly.',
        'Retry Protocols: Designing retry pipelines so no form entry is lost to network hiccups.',
        'Custom API Endpoints: Building tailored endpoints to support unique database integrations.',
        'Database Optimization: Structuring data queries to maintain fast server response times.',
        'Third-Party Syncing: Secure pipelines to systems like Stripe, Zapier, or custom EHRs.'
      ]
    },
    {
      id: 'seo',
      shortLabel: 'Local Technical SEO',
      heading: 'Hyper-Localized Technical SEO Architecture Across California',
      paragraphs: [
        'Search engines evaluate code quality directly. Clean crawl paths, structured URL hierarchies, and schema markup tell search engines exactly what you offer and where you serve customers — flawed technical architecture makes even great content struggle to rank. We build directory frameworks that search bots index cleanly, with site structures configured to target neighborhood queries in Beverly Hills and Pasadena for Los Angeles clients, database routing tuned for San Diego, and mobile booking integrations built for San Francisco\'s tech-forward audience.',
        'We customize page routing, schema markup, and geographic data to match the exact California markets you serve, verify that page metadata renders server-side so crawlers can parse local information without delay, and build dynamic XML sitemaps so new pages get indexed quickly. Structuring code to follow search engine guidelines is what turns technical architecture into organic local search volume.'
      ],
      closingText: 'Optimizing site code for local markets helps you rank for the exact terms your California customers search.'
    },
    {
      id: 'speed',
      shortLabel: 'Speed & Core Web Vitals',
      heading: 'Site Speed Auditing & Core Web Vitals Remediation',
      paragraphs: [
        'A slow website is a business actively losing customers. Our technical audits inspect database queries, analyze image file sizes, and review server response times, using profiling tools to isolate slow-loading assets and script blockers and debugging database indexing issues on both read and write events.',
        'We resolve code-blocking issues, minify JavaScript, set up caching, and optimize image assets so your site passes Core Web Vitals — lowering ad click costs and lifting organic rankings — while optimizing font loading and script parsing order so pages stay functional from the first millisecond. Server configurations get tuned, performance traces run server-side, and routing paths get optimized so content loads instantly for every visitor.'
      ],
      bullets: [
        'Database Query Tuning: Optimizing slow database calls to speed up page generation.',
        'Script Minification: Compressing JavaScript and CSS files to reduce data transfer.',
        'Image Asset Optimization: Compressing and converting media to WebP formats.',
        'Cache Configuration: Deploying server caching to load returning pages instantly.',
        'Server Response Optimization: Tuning server parameters to minimize TTFB (Time to First Byte).',
        'Asset Preloading: Scheduling critical fonts and scripts to load first to optimize LCP.'
      ],
      closingText: 'Improving Core Web Vitals scores protects your ad budget and helps you rank higher on search engines.'
    },
    {
      id: 'accessibility',
      shortLabel: 'Accessibility & Security',
      heading: 'Accessibility, WCAG Compliance & Security Standards',
      paragraphs: [
        'We build to WCAG and accessibility standards so sites work for people using screen readers, keyboard navigation, and assistive technology — clean header structures, properly contrasted elements, and clearly labeled forms — which also protects your business from ADA-related legal exposure.',
        'We secure applications against the OWASP Top 10, configure SSL encryption, and implement secure user authentication to protect customer data, with automated dependency updates keeping software packages free of known vulnerabilities and secure API authorization tokens preventing data scraping. Compliance audits eliminate security risk before it becomes a legal one, with session expiration testing and automated vulnerability scanning built into the process, not bolted on after the fact.'
      ]
    },
    {
      id: 'analytics',
      shortLabel: 'Analytics & Attribution',
      heading: 'Web Analytics & Event Attribution',
      paragraphs: [
        'We configure Google Analytics 4 with custom tracking codes to measure conversions and build live dashboards tracking visitors, conversion rates, API performance, and database write metrics, giving full visibility into both technical performance and campaign success. Event tracking on form submissions, script interactions, and link clicks maps the actual conversion path, API response times get traced to catch technical bottlenecks early, and custom tracking scripts log interactions cleanly without capturing anything they shouldn\'t.'
      ]
    }
  ];

  // 4 Development Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Technical Specifications Planning',
      desc: 'We analyze your business requirements, design the database architecture, map user stories, and select the technology stack for a scalable, secure setup from day one.'
    },
    {
      step: '02',
      title: 'Database & API Architecture',
      desc: 'Our team builds database schemas, designs custom API endpoints, and sets up authentication protocols to protect your data and enable secure syncing across systems.'
    },
    {
      step: '03',
      title: 'Frontend & Backend Development',
      desc: 'We write clean code for the application, connect the interface to backend databases, test API responses, and run integration tests to verify every data pipeline.'
    },
    {
      step: '04',
      title: 'Deployment & QA Testing',
      desc: 'Security checks, site speed optimization, deployment to hosting environments like Vercel or AWS, domain configuration, and log monitoring to prevent downtime after launch.'
    }
  ];

  // Industries Served Data
  const industriesList = [
    { name: 'Technology Startups', desc: 'SaaS platforms & complex React/Next.js dynamic web apps' },
    { name: 'Multi-Location Groups', desc: 'Centralized API database routing & geo-targeted local landing pages' },
    { name: 'E-Commerce Brands', desc: 'Custom checkouts, inventory syncing & high-conversion storefronts' },
    { name: 'Healthcare Practices', desc: 'EHR/HIPAA compliant booking flows & practice management integrations' },
    { name: 'Legal Firms', desc: 'High-trust portal design & fast lead intake pipelines' },
    { name: 'Professional Services', desc: 'Custom portal tools, client portals & automated scheduling' }
  ];

  // FAQs List (12 items)
  const faqs = service.faqs || [
    {
      question: 'Which programming languages and frameworks do you use?',
      answer: 'We build websites and applications using React, Next.js, Node.js, and standard web technologies, selecting the stack based on your specific project requirements.'
    },
    {
      question: 'Will the custom application pass Google\'s Core Web Vitals?',
      answer: 'Yes. Every application is built to meet strict performance standards, with code execution and media assets optimized to pass Google\'s speed tests.'
    },
    {
      question: 'Can you integrate our custom CRM or database system?',
      answer: 'Yes. We write secure API integrations connecting your website to e-commerce, CRM, or database systems to automate your data workflows.'
    },
    {
      question: 'How do you handle website security and data protection?',
      answer: 'We follow secure coding guidelines, encrypt data in transit using SSL, configure secure database access, and set up user authentication protocols to protect user data.'
    },
    {
      question: 'Will we own the custom source code after launch?',
      answer: 'Yes. Once the project is complete, you own the custom code, databases, and application assets. We deploy the site to your hosting accounts.'
    },
    {
      question: 'Can you fix a slow website built by another developer?',
      answer: 'Yes. We run technical speed audits to identify bottlenecks in your code and databases, then implement the fixes needed to resolve them.'
    },
    {
      question: 'Do you offer UI/UX design services as part of a build?',
      answer: 'Yes. Our UI/UX developer process covers user research, wireframing, interaction and visual design, prototyping, usability testing, and accessibility-first design — handled by the same team that builds the final product, not handed off between separate agencies.'
    },
    {
      question: 'What\'s included in your website building services?',
      answer: 'Strategy and UX planning, custom Next.js/React development, API and CRM integrations, e-commerce engineering where needed, technical SEO architecture, site speed optimization, accessibility and security compliance, and analytics setup — as one connected build, not separate line items from separate vendors.'
    },
    {
      question: 'Do you provide ongoing technical support after launch?',
      answer: 'Yes. We offer technical support packages that include code updates, database backups, security monitoring, and server performance checks.'
    },
    {
      question: 'Can you build multilingual web applications?',
      answer: 'Yes. We develop applications that support multiple languages, setting up database tables and routing configurations for international users.'
    },
    {
      question: 'How long does a custom web application take to develop?',
      answer: 'Timelines vary by project size. Small applications typically take 6 to 10 weeks; larger custom platforms can take several months.'
    },
    {
      question: 'Do you require a long-term contract?',
      answer: 'No. We build custom applications on a flat-rate project fee structure. Once launched, you own the source code and assets completely.'
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
        {/* Glow ambient shapes */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left 7 Columns: Headline, Copy & Trust Bar */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 leading-none font-sans">
                <span className="w-2 h-2 rounded-full bg-[#00C68A] animate-pulse" />
                CALIFORNIA WEB DEVELOPMENT AGENCY
              </div>

              <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.75] mb-8">
                {subheadline}
              </p>

              {/* 3 Trust Bar Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-2">
                {trustPills.map((pill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[12px] px-4 py-3 shadow-md hover:border-[#00C68A]/40 transition-all duration-200"
                  >
                    <svg className="w-5 h-5 text-[#00C68A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pill.icon} />
                    </svg>
                    <span className="text-[#F0F4FF] font-sans text-[13px] font-semibold leading-snug">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Lead Form Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                  Get Your Free Technical Review
                </h3>
                <p className="text-[13px] text-[#8FA8C8] mb-4">
                  Identify database bottlenecks, code latency, & API issues on your current site.
                </p>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Claim Your Free Technical Review →"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHY GROWLIMO (3 Pillars) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[840px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              ENGINEERING EXCELLENCE
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Why GrowLimo Is Among the Best Web Developers in California
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
              Three things separate the best web developers in California from the agencies that just resell a theme: custom engineering instead of pre-made templates, real system integrations instead of duct-taped plugins, and code held to a performance and security standard most shops don't bother meeting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyGrowLimoPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#00C68A]/40 hover:shadow-[0_10px_30px_rgba(0,198,138,0.12)] flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center font-sora font-extrabold text-[15px] text-[#00C68A]">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-[1.5px] bg-[#080D18] border border-[rgba(255,255,255,0.08)] text-[#00C68A] px-3 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] leading-snug mb-4">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: UI/UX DEVELOPER SERVICES (6 Visual Steps) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[840px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              USER EXPERIENCE & INTERFACE DESIGN
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              UI/UX Developer Services — Designing Interfaces That Convert
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
              Code that runs fast still fails if the interface confuses the person using it. As a UI/UX developer team embedded inside the same build process as our engineers, we design the experience and build it in the same breath — no handoff gap between what a designer imagines and what actually ships. Our UI/UX developer process covers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uiuxSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-7 transition-all duration-300 hover:border-[#00C68A]/40 hover:bg-[#162035]/60 hover:-translate-y-1 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[20px] font-extrabold font-sora text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      {step.number}
                    </span>
                    <h3 className="font-sora font-bold text-[17px] text-[#F0F4FF] leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Outro Callout */}
          <div className="mt-10 p-6 rounded-[16px] bg-[#162035] border-l-4 border-[#00C68A] text-left">
            <p className="font-sans text-[15px] leading-[1.75] font-semibold text-[#F0F4FF]">
              💡 Because the same team designs and builds, a UI/UX developer decision never gets lost in translation on the way to production code.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WEBSITE BUILDING SERVICES (4 Cards) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[840px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              FULL-STACK CAPABILITIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Website Building Services for California Businesses
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
              Full website building services, end to end — not a single service in isolation, but the complete stack a California business actually needs to compete online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websiteBuildingServices.map((srv, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,198,138,0.12)] text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center text-[#00C68A] mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={srv.icon} />
                    </svg>
                  </div>
                  <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] leading-snug mb-3">
                    {srv.title}
                  </h3>
                  <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: TECHNICAL DEEP-DIVE (Interactive 6-Tab Container) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[840px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              TECHNICAL SPECIFICATIONS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Modern Web Engineering & Architecture Deep-Dive
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              Explore our technical breakdown across architecture, CRM/EHR integrations, localized SEO, speed remediation, security standards, and web analytics.
            </p>
          </div>

          {/* Tab Navigation Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-[rgba(255,255,255,0.08)] pb-4">
            {deepDiveTabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`cursor-pointer px-5 py-3 rounded-xl font-sora font-semibold text-[13px] md:text-[14px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A] ${
                    isActive
                      ? 'bg-[#00C68A] text-[#080D18] shadow-[0_4px_16px_rgba(0,198,138,0.3)] font-bold'
                      : 'bg-[#0C1220] text-[#8FA8C8] hover:text-[#F0F4FF] hover:bg-[#162035] border border-[rgba(255,255,255,0.06)]'
                  }`}
                >
                  {tab.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Tab Content Box */}
          <div className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left transition-all duration-300">
            <h3 className="text-[22px] md:text-[28px] font-extrabold font-sora text-[#F0F4FF] leading-snug mb-6">
              {deepDiveTabs[activeTab].heading}
            </h3>

            <div className="space-y-4 mb-8">
              {deepDiveTabs[activeTab].paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                  {p}
                </p>
              ))}
            </div>

            {/* Bullets if present */}
            {deepDiveTabs[activeTab].bullets && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {deepDiveTabs[activeTab].bullets.map((b, bIdx) => (
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

            {/* Closing text highlight */}
            {deepDiveTabs[activeTab].closingText && (
              <div className="mt-6 border-l-4 border-[#00C68A] pl-4 py-2 bg-[#00C68A]/5 rounded-r-lg">
                <p className="font-sans text-[14.5px] font-semibold text-[#00C68A]">
                  {deepDiveTabs[activeTab].closingText}
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: DEVELOPMENT PROCESS (4 Steps Timeline) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[840px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              HOW WE WORK
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Our Proven Web Development Process
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              A disciplined four-phase engineering workflow designed for predictable timelines, secure system integrations, and sub-second performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left flex flex-col justify-between relative transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
              >
                <div>
                  <div className="text-[32px] font-extrabold font-sora text-[#00C68A] mb-4 leading-none">
                    {step.step}
                  </div>
                  <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] leading-snug mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: INDUSTRIES SERVED */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[840px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              MARKET EXPERTISE
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Industries We Serve as a California Web Developer
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
              Technology startups, multi-location groups, e-commerce brands, healthcare practices, legal firms, and service providers — each with different database, integration, and performance requirements, and each requiring a different approach from a web developer who understands the difference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesList.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:bg-[#162035]/50 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center text-[#00C68A] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sora font-bold text-[17px] text-[#F0F4FF] mb-1">
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
      {/* SECTION 8: FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px]">

          <div className="text-left max-w-[800px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Web Developer California FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sora font-bold text-[16px] md:text-[17px] text-[#F0F4FF] leading-snug">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full bg-[#080D18] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
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
      {/* SECTION 9: FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[90px] md:py-[110px] relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C68A]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 md:px-10 max-w-[960px] relative z-10 text-center">
          <div className="bg-[#1A2438] border border-[rgba(0,198,138,0.25)] rounded-[24px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />

            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] mb-4 inline-block font-sans">
              READY FOR A FASTER, CUSTOM WEBSITE?
            </span>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
              Get Started With California's Trusted Web Developer
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[720px] mx-auto mb-8">
              Stop fighting a slow, bloated template site. Request your free California technical review to see exactly where your current site is losing you customers — database response times, code structure, API performance, and a clear plan to fix what's broken.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Claim Your Free Strategic Review
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
