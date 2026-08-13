import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionSSCA({ service, slug }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'SEO Services California | #1 SEO Agency & Company - GrowLimo',
    metaDescription = 'SEO Services California - GrowLimo is a top-rated SEO company and agency serving California businesses with technical, local, content & AI search optimization. Free audit.',
    h1 = 'SEO Services California',
    subheadline = "GrowLimo is a California SEO agency and California SEO company built for businesses that need to rank on Google's first page and get cited inside AI Overviews, ChatGPT, and Perplexity answers. As a full-service SEO agency and SEO company built specifically for California's search market, we combine technical SEO, local SEO, content built on E-E-A-T, and white-hat link building into a single strategy, backed by 10+ years of combined experience and more than 100 California businesses ranked on page 1.",
    schema
  } = service;

  // Stat Bar Data
  const statBar = [
    { value: '10+ Years', label: 'Combined SEO Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '100+', label: 'California Businesses Ranked on Page 1', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '60–90 Days', label: 'Average Time to First Ranking Movement', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
  ];

  // What Are SEO Services / Why CA Needs Specialized Approach — 3 Cards
  const whyCaCards = [
    {
      title: 'Contested Search Markets',
      desc: 'Los Angeles, San Francisco, San Diego, San Jose, and Sacramento sit among the most contested search markets in the country, which means a generic SEO checklist rarely moves the needle here.',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
    },
    {
      title: 'Hyper-Local Keyword Targeting',
      desc: 'Winning page 1 in California requires hyper-local keyword targeting rather than a generic, statewide approach.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Mobile-First, Research-Heavy Buyers',
      desc: 'Fast mobile experiences matter since most California searches now happen on a phone, and content has to satisfy research-heavy Californian buyers who compare several businesses before they ever call.',
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
    }
  ];

  // Term Disambiguation List
  const termDefinitions = [
    { term: 'SEO agency', def: 'A team that runs full-scope SEO work, including technical, content, local, and link building, often alongside related channels like PPC.' },
    { term: 'SEO company', def: 'The broader business term for any organization selling SEO services, regardless of size.' },
    { term: 'SEO firm', def: 'Typically implies a smaller, senior-led practice with more direct access to the person doing the work.' },
    { term: 'SEO consultant', def: 'Usually an individual expert brought in for strategy, audits, or a second opinion rather than full execution.' }
  ];

  // Our SEO Services in California — 6 Tabs
  const servicesTabs = [
    {
      id: 'technical',
      label: 'Technical SEO Agency',
      heading: 'Technical SEO Agency California',
      paragraphs: [
        'Technical SEO is the foundation everything else is built on. Before we touch content or links, our team audits Core Web Vitals, crawlability, indexation, mobile performance, and schema markup so Googlebot and AI crawlers can index a site cleanly. Sites with unresolved technical errors rarely rank, no matter how much content or link building gets layered on top.'
      ]
    },
    {
      id: 'local',
      label: 'Local SEO Services',
      heading: 'Local SEO Services California',
      paragraphs: [
        'For businesses with a physical location or service area, local SEO services in California are usually the fastest path to revenue. That means Google Business Profile optimization, consistent local citations, review generation, and location-specific landing pages that match how Californians actually search, including "near me," by neighborhood, and by city.'
      ]
    },
    {
      id: 'ecommerce',
      label: 'Ecommerce SEO Agency',
      heading: 'Ecommerce SEO Agency California',
      paragraphs: [
        'Online retailers need a different playbook. As an ecommerce SEO agency California brands trust for organic growth, we optimize category and product pages, fix duplicate content across variants, and build the internal linking structure large catalogs need. For merchants on Shopify specifically, our Shopify SEO expert California team handles the platform\'s unique constraints, including templated URLs, app bloat slowing page speed, and thin collection pages, issues a generalist agency often misses.'
      ]
    },
    {
      id: 'b2b',
      label: 'B2B & Enterprise SEO',
      heading: 'B2B SEO Agency and Enterprise SEO Company California',
      paragraphs: [
        'Longer sales cycles change the SEO approach. As a B2B SEO agency California companies bring in for demand generation, we build content around the research-stage questions buying committees ask before they ever fill out a form. For larger organizations, our work as an enterprise SEO company California multi-location and high-competition businesses rely on includes centralized reporting across dozens of pages, duplicate-content resolution across locations, and coordination with in-house marketing and development teams.'
      ]
    },
    {
      id: 'linkbuilding',
      label: 'Link Building Agency',
      heading: 'Link Building Agency California',
      paragraphs: [
        'Authority still matters. As a link building agency California businesses use to earn coverage from relevant, regionally authoritative sites, we run outreach campaigns that prioritize topical relevance over raw domain metrics, the kind of links that move rankings and survive algorithm updates rather than the kind that trigger a manual action.'
      ]
    },
    {
      id: 'geo',
      label: 'Generative Engine Optimization',
      heading: 'Generative Engine Optimization Agency California',
      paragraphs: [
        'Traditional rankings are no longer the whole picture. As a generative engine optimization agency California businesses are increasingly hiring alongside standard SEO, we structure content, schema, and citations so it can be pulled into Google AI Overviews, ChatGPT, and Perplexity answers, not just rank on a results page fewer people scroll through. That means leading with a direct answer in the first 100 to 150 words, using clear question-and-answer formatting, and keeping content current enough that AI systems trust it as a source.'
      ]
    }
  ];

  // Proven Results — 3 Case Studies
  const caseStudies = [
    {
      title: 'San Diego Medical Clinic',
      subtitle: 'Page 4 → Position #2 in 4 Months',
      paragraph: 'A San Diego medical clinic went from page 4 to position #2 for its primary keyword in four months, doubling patient inquiries from organic search.'
    },
    {
      title: 'Los Angeles eCommerce Brand',
      subtitle: 'Top 3 for 12 Keywords in 6 Months',
      paragraph: 'A Los Angeles eCommerce brand reached the top 3 for 12 major keywords in six months and cut Google Ads spend by 40 percent.'
    },
    {
      title: 'Northern California Franchise',
      subtitle: 'Page 1 Across All 5 Locations',
      paragraph: 'A five-location Northern California franchise resolved duplicate-content conflicts across every location page and reached page 1 for its primary local keyword at all five.'
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

  // FAQs List (8 items)
  const faqs = [
    {
      question: 'What are SEO services?',
      answer: 'SEO services are the technical, on-page, content, and link-building work that improves organic, unpaid rankings on Google and AI search engines. They differ from Google Ads, which stops delivering traffic the moment you stop paying.'
    },
    {
      question: 'What does an SEO agency do?',
      answer: 'An SEO agency audits a website\'s technical health, researches the keywords a business\'s customers actually search, optimizes existing pages, builds new content, and earns links from relevant sites, then reports on rankings, traffic, and leads every month.'
    },
    {
      question: 'What\'s the difference between an SEO company and an SEO agency in California?',
      answer: 'In practice, none. Google treats the terms as close variants of the same search intent, and most businesses use them interchangeably. What actually differs between providers is scope of service, contract terms, and who does the work.'
    },
    {
      question: 'How long does SEO take to show results in California?',
      answer: 'Most California campaigns see initial ranking movement in 60 to 90 days, with meaningful traffic and lead growth building over 6 to 12 months as technical fixes, content, and links compound.'
    },
    {
      question: 'Can SEO help my business appear in AI search tools like ChatGPT and Google AI Overviews?',
      answer: 'Yes. Generative engine optimization, meaning content structured with direct answers, clear schema markup, and current, citable information, increases the odds a page gets pulled into AI Overviews, ChatGPT, and Perplexity answers, in addition to ranking in standard organic results.'
    },
    {
      question: 'Do you require a long-term contract?',
      answer: 'No. GrowLimo runs on month-to-month agreements. Clients stay because campaigns are producing rankings, traffic, and leads, not because they\'re contractually locked in.'
    },
    {
      question: 'Can you help if my website was hit by a Google penalty or algorithm update?',
      answer: 'Yes. Recovery starts with a technical and content audit to identify what triggered the drop, followed by a remediation plan addressing the specific issue, whether that\'s a manual action, a core update impact, or a technical error.'
    },
    {
      question: 'Do you offer SEO for specific California cities and neighborhoods?',
      answer: 'Yes. We build dedicated, non-duplicate location pages for any California city or neighborhood a business operates in, rather than one generic statewide page trying to rank for every market at once.'
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
      {/* SECTION 1: HERO */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] text-white pt-[90px] md:pt-[110px] pb-[70px] md:pb-[90px] relative overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

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
              SEO services are the ongoing technical, on-page, content, and off-page work that improves how a website ranks in Google, Bing, and AI-powered search engines for the exact terms real customers type in. A properly run organic search marketing agency California business owners hire doesn't just chase rankings, it builds a site's authority so it keeps ranking after algorithm updates and, increasingly, gets pulled into the AI-generated answers now appearing above traditional blue links. California adds pressure most states don't:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              SEO Agency vs. SEO Company vs. SEO Firm vs. SEO Consultant in California
            </h2>
            <p className="font-sans text-[14.5px] leading-relaxed text-[#8FA8C8]">
              Business owners searching for an SEO agency in California, an SEO company in California, or California SEO firms are usually looking for the same outcome through different language, and Google treats these terms as close variants of one intent.
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
              GrowLimo operates as all four. We're structured as a full-service SEO agency and SEO company, run with the senior-led, no-lock-in approach of a boutique SEO firm, and every California account gets a dedicated SEO expert in California who's reachable directly, not a rotating account manager. Clients searching for an SEO specialist California directory or a hands-on SEO consultant California referral work with the same senior strategist assigned to our largest enterprise accounts.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WHY GROWLIMO IS RATED AMONG THE BEST */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            OUR DIFFERENCE
          </span>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            Why GrowLimo Is Rated Among the Best SEO Agencies in California
          </h2>

          <div className="space-y-6 text-[#8FA8C8] font-sans text-[15px] sm:text-[16px] leading-[1.85]">
            <p className="bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              Most SEO agencies and SEO firms California businesses evaluate sell generic packages and outsource execution overseas. We don't. Every California engagement includes a dedicated senior strategist, full-funnel execution under one roof, and monthly reporting tied to rankings, organic traffic, and leads, not vanity metrics like impressions.
            </p>
            <p className="bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              That approach is why business owners comparing California SEO firms side by side, or researching the best SEO agency California has to offer, consistently shortlist GrowLimo alongside the top SEO companies in California. We've delivered page 1 rankings for clients in Los Angeles, San Francisco, San Diego, Sacramento, and San Jose across healthcare, legal, real estate, eCommerce, and B2B, with no long-term contracts locking anyone in. You can review the outcomes yourself on our{' '}
              <Link href="/case-studies/" className="text-[#00C68A] font-semibold hover:underline">California SEO case studies</Link>{' '}
              page before committing to anything.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR SEO SERVICES IN CALIFORNIA (6 Services Tabbed Interface) */}
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
              A complete California SEO services program covers every ranking factor Google and AI search systems evaluate, not just keywords in a title tag. Here's what's included when you work with our team.
            </p>
          </div>

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

          <div className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left transition-all duration-300">
            <h3 className="text-[22px] md:text-[28px] font-extrabold font-sora text-[#F0F4FF] leading-snug mb-4">
              {servicesTabs[activeTab].heading}
            </h3>

            <div className="space-y-4">
              {servicesTabs[activeTab].paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                  {p}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: HOW MUCH DO SEO SERVICES COST IN CALIFORNIA */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            TRANSPARENT INVESTMENT
          </span>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            How Much Do SEO Services Cost in California?
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8]">
            Pricing depends on competition level and scope, but California SEO campaigns generally range from $799 to $2,999 or more per month. For businesses that need affordable SEO services California without cutting corners on strategy, a local SEO package covering technical fixes, Google Business Profile optimization, and on-page work is usually the right entry point. Multi-location, eCommerce, and enterprise businesses typically need a broader monthly retainer to cover content volume and link building at the pace competitive markets demand. Whatever budget you're working with, the SEO company in California you hire should show you exactly what that spend buys, not a black-box retainer.
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: PROVEN RESULTS (3 Case Studies) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              PROVEN RESULTS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Proven Results From California SEO Campaigns
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-lg"
              >
                <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-full inline-block mb-4">
                  {cs.title}
                </span>
                <h3 className="font-sora font-bold text-[19px] text-[#F0F4FF] leading-snug mb-4">
                  {cs.subtitle}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                  {cs.paragraph}
                </p>
              </div>
            ))}
          </div>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
            Full details, including the technical work behind each result, are on our{' '}
            <Link href="/case-studies/" className="text-[#00C68A] font-semibold hover:underline">case studies page</Link>.
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: MEET THE SEO EXPERTS */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              AUTHORITY & E-E-A-T
            </span>

            <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Meet the SEO Experts Behind Your California Strategy
            </h2>

            <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
              GrowLimo's California strategy is led by Mursaleen Hafeez Minhas, Senior SEO Strategist, who brings more than 10 years of hands-on technical SEO and search optimization experience to every account. This page was last reviewed in August 2026 for accuracy against current Google ranking factors and AI Overview citation standards. You can read more about our team's background and approach on our{' '}
              <Link href="/about/" className="text-[#00C68A] font-semibold hover:underline">About page</Link>. It's this senior-led structure, not a call center handing you off to a junior account manager, that keeps GrowLimo rated among the top rated SEO services CA businesses refer to their own network.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: AREAS WE SERVE (City Tag Cloud) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            GEOGRAPHIC COVERAGE
          </span>

          <h2 className="text-[28px] sm:text-[34px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Areas We Serve Across California
          </h2>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-8 max-w-[800px]">
            We build dedicated, non-duplicate SEO campaigns for businesses across Los Angeles, San Francisco, San Diego, Sacramento, San Jose, Orange County, Fresno, Long Beach, Oakland, Riverside, Anaheim, and Bakersfield. Wherever you're located, our SEO agency in CA is built around your specific city's competition and search behavior, not a copy-pasted statewide template.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {cities.map((city, idx) => (
              <span
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] text-[#F0F4FF] hover:border-[#00C68A]/50 hover:text-[#00C68A] font-sora font-semibold text-[14px] px-4 py-2 rounded-full transition-all duration-200 shadow-sm"
              >
                📍 {city}
              </span>
            ))}
          </div>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] max-w-[900px]">
            Healthcare and dental practices can see our specialized{' '}
            <Link href="/healthcare-seo-services-california/" className="text-[#00C68A] font-semibold hover:underline">healthcare SEO services</Link>{' '}
            and{' '}
            <Link href="/dentist-seo-services-california/" className="text-[#00C68A] font-semibold hover:underline">dentist SEO services</Link>{' '}
            in California, built around each industry's compliance and patient-search requirements. Businesses looking for SEO services in CA alongside other channels can pair their campaign with our{' '}
            <Link href="/google-ads-management-california/" className="text-[#00C68A] font-semibold hover:underline">Google Ads management</Link>,{' '}
            <Link href="/ppc-services-california/" className="text-[#00C68A] font-semibold hover:underline">PPC services</Link>, or{' '}
            <Link href="/web-design-services-california/" className="text-[#00C68A] font-semibold hover:underline">web design services</Link>{' '}
            in California, or work with our full{' '}
            <Link href="/digital-marketing-agency-california/" className="text-[#00C68A] font-semibold hover:underline">digital marketing agency in California</Link>{' '}
            for a combined organic and paid strategy.
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px]">

          <div className="text-left max-w-[800px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Frequently Asked Questions About SEO Services in California
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
      {/* SECTION 11: FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[90px] md:py-[110px] relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C68A]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 md:px-10 max-w-[960px] relative z-10 text-center">
          <div className="bg-[#1A2438] border border-[rgba(0,198,138,0.25)] rounded-[24px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />

            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] mb-4 inline-block font-sans">
              DOMINATE ORGANIC & AI SEARCH
            </span>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
              Start Ranking on Page 1 in California
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[760px] mx-auto mb-8">
              Every day a business isn't on page 1 is a day a competitor is capturing that search instead.{' '}
              <Link href="/contact/" className="text-[#00C68A] font-semibold hover:underline">Request a free California SEO audit</Link>{' '}
              to see exactly where your site stands today and what it will take to reach the top, on Google and inside AI search.
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
