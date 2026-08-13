import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionWDCA({ service, slug }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'Web Developer California | Best Web Developers - GrowLimo',
    metaDescription = 'Web Developer California - Looking for the best web developers in California? GrowLimo is a web developer & UI/UX developer offering custom website building services. Free audit.',
    h1 = 'Web Developer in California',
    subheadline = "A slow, generic website costs you customers before they ever see what you sell. GrowLimo is a web developer California businesses turn to when a template site starts holding the business back. As a web development agency California companies hire for custom engineering instead of theme-based builds, and the web development company California teams trust with CRM and API integrations, we build custom web applications with React, Next.js, and Node.js for companies across Los Angeles, San Diego, and San Francisco, rather than reselling plugins and pre-made themes.",
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
      desc: "We engineer custom web applications using React, Next.js, and Node.js for fast load times and clean, modular code structures that scale as your user base grows, rather than the bloated plugin stacks that create both slow pages and security gaps.",
      badge: 'React / Next.js / Node.js'
    },
    {
      title: 'EHR/CRM & API System Integrations',
      desc: "A website that doesn't talk to your business systems is only doing half the job. We connect web systems directly to databases, CRM platforms, and e-commerce tools through secure, encrypted API connections that automate workflows and eliminate sync errors, backed by automated test scripts, daily latency monitoring, and error-handling pipelines so integrations stay reliable long after launch day.",
      badge: 'Automated Workflows & Endpoints'
    },
    {
      title: 'Advanced Code Performance & Security Standards',
      desc: "Every build is held to strict performance and security standards, including SSL, configured firewalls, and code optimized to pass Google's Core Web Vitals, with automated unit tests and security updates keeping the platform clear of vulnerabilities over time.",
      badge: 'Core Web Vitals & OWASP Security'
    }
  ];

  // "Developer vs Agency vs Company" Search Intent Paragraphs
  const devVsAgencyVsCompanyParagraphs = [
    'Search phrasing here ranges from broad to specific, but the underlying want rarely changes. Some business owners search web developer CA or web developer in CA from a phone, comparing options quickly before a longer read. Others search more formally for a web development agency in California with a documented process, or shorten it to web development agency CA or web development agency in CA.',
    "Businesses that want a vetted, accountable business behind the build search for a web development company in California with real client references, or the shorthand web development company CA. Businesses further along in scoping a project search web development services California or web development services in California, wanting a clear menu of what's included, from custom e-commerce engineering to API integrations to technical site speed audits, before ever getting on a call.",
    'Some searches combine the disciplines directly. A web design and development company California business owners hire wants one team responsible for both how the site looks and how it performs, not a design studio handing code off to a separate developer. A web designer and developer California search reflects the same want from the other direction. At GrowLimo, design and engineering sit on the same team, so a UI/UX decision never gets lost in translation on the way to production code.',
    "Businesses earlier in the process, comparing DIY platforms against a real build, search website builder services California, or website building services California and website building services in California when narrowing by location. A drag-and-drop builder can get a page online quickly, but it can't pass Core Web Vitals cleanly, integrate with a CRM, or scale past a few hundred products, which is usually the point a business searching those terms is about to hit."
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
      title: 'Next.js and React Development',
      desc: 'High-performance static and server-rendered applications built for fast load speeds, smooth navigation, and strong SEO rankings. We use incremental static regeneration to compile database-driven pages dynamically, combining speed with up-to-date content, and optimize bundling, code-splitting, and lazy-loading to keep download sizes lean.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'API and Systems Integrations',
      desc: 'Connecting websites to CRM, billing, inventory, and practice management databases through secure API pipelines that automate processes, eliminate manual data entry errors, and route leads in under five seconds, backed by authorization protocols that verify credentials before any data transfers.',
      icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      title: 'Custom E-Commerce Engineering',
      desc: 'Custom e-commerce systems with secure payment checkouts, dynamic inventory syncing, automated discount rules, shopping cart recovery automation, and structured customer notifications, connected to leading payment processors with encryption and compliance standards built in.',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'Technical Site Speed Audits',
      desc: 'Debugging slow database queries, minifying bloated scripts, optimizing asset loading, and tuning server response times to improve Core Web Vitals and organic rankings, tracing script execution blockages and auditing database indexes to keep the site functional under heavy traffic. Businesses combining a rebuild with an organic growth strategy can pair this work with our SEO services in California.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      link: { text: 'SEO services in California', href: '/seo-services-california/' }
    }
  ];

  // Modern Web Engineering and Architecture (single prose paragraph)
  const modernEngineeringParagraph = "Bloated websites take too long to load, especially on mobile connections, because standard content management systems often ship excessive scripts and styles. We build on headless architecture instead, separating backend data from frontend rendering so visual rendering never has to wait on a heavy database query. Next.js and React let us deploy server-rendered pages that pass Core Web Vitals cleanly, with fluid page transitions closer to a native app than a typical website. Every build uses global CDN deployment so pages load fast from any California city, modular code standards for easy feature additions, pre-fetching for instant navigation, and TypeScript for type safety and fewer runtime errors.";

  // 4 Development Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Technical Specifications Planning',
      desc: 'Analyzing business requirements, designing database architecture, mapping user stories, and selecting the technology stack for a scalable, secure setup from day one.'
    },
    {
      step: '02',
      title: 'Database and API Architecture',
      desc: 'Building schemas, custom endpoints, and authentication protocols to protect data and enable secure syncing.'
    },
    {
      step: '03',
      title: 'Frontend and Backend Development',
      desc: 'Writing clean code, connecting the interface to backend databases, and running integration tests on every data pipeline.'
    },
    {
      step: '04',
      title: 'Deployment and QA Testing',
      desc: 'Including security checks, site speed optimization, deployment to hosting environments, and log monitoring to prevent downtime after launch.'
    }
  ];

  // Industries Served Data
  const industriesList = [
    { name: 'Technology Startups', desc: 'Need SaaS platforms and complex React and Next.js applications.' },
    { name: 'Multi-Location Groups', desc: 'Need centralized API database routing and geo-targeted local landing pages.' },
    { name: 'E-Commerce Brands', desc: 'Need custom checkouts and inventory syncing.' },
    { name: 'Healthcare Practices', desc: 'Need EHR and HIPAA-compliant booking flows.' },
    { name: 'Legal Firms', desc: 'Need high-trust portal design and fast lead intake pipelines.' },
    { name: 'Professional Services', desc: 'Need custom client portals and automated scheduling.' }
  ];

  // "Why 100-Plus California Businesses Trust GrowLimo" paragraph (pre-links, mid-text, post-links)
  const trustParagraphPre = 'GrowLimo has built custom web applications for more than 100 California clients and maintains a 4.9-star Google rating, with no long-term contracts locking clients in. Rather than a single generalist wearing every hat, builds are handled by engineers and UI/UX developers working from the same technical specification, so design decisions and engineering constraints are resolved together instead of in separate handoffs. You can review verified client outcomes across our broader marketing and development work on our ';
  const trustParagraphMid = ' and learn more about the team on our ';
  const trustParagraphPost = '.';

  // FAQs List (7 items)
  const faqs = service.faqs || [
    {
      question: 'Which programming languages and frameworks do you use?',
      answer: 'Primarily React, Next.js, Node.js, and TypeScript, chosen for performance, type safety, and long-term maintainability over legacy CMS plugin stacks.'
    },
    {
      question: "Will the custom application pass Google's Core Web Vitals?",
      answer: 'Yes. Every build is engineered against Core Web Vitals thresholds from the start, using headless architecture, code-splitting, and CDN deployment rather than optimizing after the fact.'
    },
    {
      question: 'Can you integrate our custom CRM or database system?',
      answer: 'Yes. We build secure API connections to CRM, billing, inventory, and practice management systems, with automated testing and error-handling pipelines to keep integrations reliable after launch.'
    },
    {
      question: 'Can you fix a slow website built by another developer?',
      answer: 'Yes. Technical site speed audits identify slow database queries, bloated scripts, and unoptimized assets, with a clear remediation plan before any rebuild decision is made.'
    },
    {
      question: 'Do you offer UI/UX design services as part of a build?',
      answer: 'Yes. Design and engineering are handled by the same team through one process, from user research and wireframing through prototyping and accessibility-first design.'
    },
    {
      question: 'Will we own the custom source code after launch?',
      answer: 'Yes. Clients retain ownership of the custom source code built for their project.'
    },
    {
      question: 'Do you require a long-term contract?',
      answer: 'No. GrowLimo operates without long-term lock-in contracts on web development engagements.'
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
              Three things separate the best web developers in California from agencies that just resell a theme: custom engineering instead of pre-made templates, real system integrations instead of duct-taped plugins, and code held to a performance and security standard most shops don't bother meeting.
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
      {/* SECTION 2B: DEVELOPER VS AGENCY VS COMPANY (Search Intent Prose) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[840px] mb-10">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              HOW BUSINESSES SEARCH
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Web Developer vs. Web Development Agency vs. Web Development Company in California
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 max-w-[1200px]">
            {devVsAgencyVsCompanyParagraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
                {p}
              </p>
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
              Code that runs fast still fails if the interface confuses the person using it. As a UI/UX developer team embedded inside the same build process as our engineers, we design the experience and build it in the same breath, with no handoff gap between what a designer imagines and what actually ships. The process covers user research and journey mapping, wireframing and information architecture, interaction and visual design, prototyping and usability testing, reusable design systems, and accessibility-first design built to WCAG standards from the first wireframe rather than retrofitted after launch.
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
                    {srv.link ? (
                      <>
                        {srv.desc.split(srv.link.text)[0]}
                        <Link href={srv.link.href} className="text-[#00C68A] font-semibold hover:underline">
                          {srv.link.text}
                        </Link>
                        {srv.desc.split(srv.link.text)[1]}
                      </>
                    ) : (
                      srv.desc
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: MODERN WEB ENGINEERING AND ARCHITECTURE */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            Modern Web Engineering and Architecture
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8] bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
            {modernEngineeringParagraph}
          </p>

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
              Each industry requires a different approach from a developer who understands the difference, not a single template stretched across every use case.
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
      {/* SECTION 7B: WHY 100-PLUS CALIFORNIA BUSINESSES TRUST GROWLIMO */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[70px] md:py-[90px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-10 max-w-[700px]">
            {trustPills.map((pill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[12px] px-4 py-3 shadow-md hover:border-[#00C68A]/40 transition-all duration-200"
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

          <div className="text-left max-w-[840px] mb-4">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              TRACK RECORD
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Why 100-Plus California Businesses Trust GrowLimo
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
              {trustParagraphPre}
              <Link href="/case-studies/" className="text-[#00C68A] font-semibold hover:underline">
                case studies page
              </Link>
              {trustParagraphMid}
              <Link href="/about/" className="text-[#00C68A] font-semibold hover:underline">
                About page
              </Link>
              {trustParagraphPost}
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
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
              Stop fighting a slow, bloated template site. Request your free California technical review to see exactly where your current site is losing you customers, and what a custom-engineered rebuild would fix first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Request your free California technical review
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
