import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionDMAC({ service, slug }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'Meta Ads Agency California | Meta Ads Services - GrowLimo',
    metaDescription = 'Meta Ads Agency California - Meta Blueprint certified Meta advertising agency delivering 5.4x avg ROAS. GrowLimo is a top rated Meta ads agency in California. Free audit today.',
    h1 = 'Meta Ads Agency in California',
    subheadline = "Most California businesses running Meta Ads are running campaigns. A top rated meta ads agency California trusts builds systems instead, and the distinction matters: a campaign gets switched on, delivers a few weeks of results, fatigues, and collapses. A system has cold prospecting audiences feeding warm retargeting pools, creative refreshed before it ever fatigues, and Conversions API tracking every purchase and lead with server-side precision. GrowLimo is a Meta Blueprint-certified meta ads agency in California managing accounts across e-commerce, healthcare, real estate, home services, fitness, automotive, education, and B2B, averaging a 5.4x ROAS across every account we run.",
    schema
  } = service;

  // Most Agencies vs GrowLimo — 5 matched comparison rows
  const comparisonRows = [
    { most: 'A single Conversions campaign targeting a broad interest-based audience', growlimo: 'Full-funnel campaign architecture with distinct awareness, consideration, and conversion stages' },
    { most: 'Two or three static ads left unchanged for months', growlimo: 'Three to five creative variants per ad set continuously refreshed before fatigue sets in' },
    { most: 'Browser-only pixel tracking with no Conversions API', growlimo: 'Conversions API with server-side tracking to recover iOS-blocked conversion data' },
    { most: 'No remarketing for warm audiences', growlimo: 'Multi-layer retargeting segmented by behavior and recency' },
    { most: 'Monthly reports showing reach and impressions but no ROAS', growlimo: 'Monthly reporting anchored to ROAS and cost-per-acquisition rather than vanity metrics' }
  ];

  // "Vs" Search Intent Paragraphs
  const vsParagraphs = [
    "Search phrasing shifts more than intent. Some business owners look for meta ads agency CA or meta ads agency in CA when comparing options quickly from a phone, while others search meta ads services California or meta ads services in California hoping for a menu of what's included before ever talking to a strategist. The shorthand versions, meta ads services CA and meta ads services in CA, pull the same underlying want.",
    'Businesses ready to hand off day-to-day execution search meta ads management California or meta ads management in California, shortened to meta ads management CA or meta ads management in CA when typing fast. Others want a vetted, accountable business behind the work, searching for a meta ads company California can show references for, a meta ads company in California with a real office and team, or the shorthand meta ads company CA.',
    'Businesses that want a smaller, senior-led relationship look for a meta ads firm California owners can call directly, or a meta ads firm in California with a named strategist rather than a support queue. Businesses that want a single expert opinion rather than a full retainer search for a meta ads expert California can bring in for a technical audit, a meta ads consultant California can retain for quarterly strategy reviews, or a meta ads specialist California team can assign permanently once they\'re ready to scale. All of these paths lead to the same Meta Blueprint-certified team at GrowLimo.'
  ];

  // Our Services (4 items)
  const services = [
    {
      title: 'Full-Funnel Campaign Strategy',
      paragraph: "We design three-stage funnels for every client: a top-of-funnel stage using Awareness or Reach to introduce cold audiences through high-impact video and carousel creative, a middle-of-funnel stage using Traffic or Engagement to warm interested audiences with value-led content, and a bottom-of-funnel stage using Conversions or Lead Generation to close audiences who've moved through the first two stages."
    },
    {
      title: 'Creative Production at Scale',
      paragraph: "Static images, carousels, video scripts, and Reels-format ads are produced in batches of three to five variants per ad set, reviewed against Meta's advertising policies before launch to avoid disapproval delays."
    },
    {
      title: 'Advantage+ and Audience Architecture',
      paragraph: 'We manage Advantage+ Shopping and Advantage+ Audience campaigns alongside manual lookalike and first-party data targeting, so automation is guided by strategy rather than left to run unsupervised.'
    },
    {
      title: 'Conversions API and Server-Side Tracking',
      paragraph: 'Every account gets Conversions API implementation with event deduplication and domain verification in Business Manager, recovering conversion data that browser-only pixel tracking loses after iOS privacy changes.'
    }
  ];

  // Case Studies (2 paragraphs)
  const caseStudies = [
    {
      title: 'San Diego Cosmetic Dental Practice',
      paragraph: "A San Diego cosmetic dental practice was generating new patient leads through Google Ads at $145 each and had never run Meta Ads. A Lead Gen campaign targeting appearance-conscious adults with household income signals, offering a free smile assessment through Meta's native instant form, produced 94 monthly leads at $18 per lead, a 34 percent lead-to-appointment conversion rate, and more than $31,000 in monthly revenue attributed to Meta."
    },
    {
      title: 'San Francisco Project Management SaaS',
      paragraph: 'A San Francisco project management SaaS company had strong Google Ads performance for bottom-of-funnel searches but needed to reach operations managers who weren\'t yet actively searching. A campaign combining job title targeting, company size signals, and a competitor-user technology audience, backed by a 90-second product walkthrough, generated 47 demo bookings a month at $43 per demo with 71 percent ICP-quality leads and roughly $280,000 in new pipeline by month three.'
    }
  ];

  // Industries
  const industries = [
    { name: 'E-Commerce & DTC Brands', desc: 'E-commerce and DTC brands need Advantage+ Shopping and dynamic product ads.' },
    { name: 'Healthcare & Medical Aesthetics', desc: 'Healthcare and medical aesthetics practices need HIPAA-compliant lead forms and consent management, covered in more depth on our healthcare Meta Ads management and dentist Meta Ads management pages for California.' },
    { name: 'Real Estate, Home Services, Fitness, B2B/SaaS, Education & Automotive', desc: 'Real estate, home services, fitness, B2B and SaaS, education, and automotive businesses each carry distinct audience architecture and creative requirements that generic campaigns miss.' }
  ];

  // Regional Markets (6)
  const regionalCities = [
    { city: 'Los Angeles', note: 'Los Angeles is California\'s largest and most visually sophisticated consumer market, responding to high-production creative with neighborhood-level targeting.' },
    { city: 'San Diego', note: 'San Diego blends local service, healthcare, and outdoor lifestyle demographics.' },
    { city: 'San Francisco & Bay Area', note: 'San Francisco and the Bay Area carry a high-income, tech-heavy professional base that benefits from LinkedIn integration.' },
    { city: 'Sacramento', note: 'Sacramento covers government, healthcare, and family-oriented demand with seasonal creative for Central Valley patterns.' },
    { city: 'Orange County', note: 'Orange County supports an affluent consumer base where premium messaging performs.' },
    { city: 'Fresno & Central Valley', note: 'Fresno and the Central Valley offer significantly lower CPMs and strong cost-per-lead efficiency.' }
  ];

  // FAQs (7 items)
  const faqs = [
    {
      question: 'What is a Meta Ads agency?',
      answer: 'A Meta Ads agency plans, builds, and manages paid advertising across all of Meta\'s platforms, including Facebook, Instagram, Messenger, and the Audience Network, under one integrated account and funnel strategy rather than treating each placement separately.'
    },
    {
      question: 'How much does a Meta Ads agency charge in California?',
      answer: 'Cost depends on ad spend level and creative production needs. A free audit gives you a specific recommendation based on your industry, current account performance, and goals.'
    },
    {
      question: 'What is the difference between a Meta Ads agency and a Facebook Ads manager?',
      answer: 'FB_LINK'
    },
    {
      question: 'Does GrowLimo handle Advantage+ campaigns on Meta?',
      answer: 'Yes. We manage Advantage+ Shopping and Advantage+ Audience campaigns alongside manual, strategy-driven targeting, so automation supports the funnel rather than replacing oversight of it.'
    },
    {
      question: 'How does GrowLimo handle iOS tracking issues on Meta Ads?',
      answer: "Every account gets Conversions API implementation with server-side event tracking and deduplication, recovering conversion data that browser-only pixel tracking loses after Apple's privacy changes."
    },
    {
      question: 'What Meta Ads placements does GrowLimo manage?',
      answer: 'Facebook and Instagram feeds, Stories, Reels, Messenger, and the Audience Network, selected and combined based on where your specific audience actually spends time.'
    },
    {
      question: 'Does GrowLimo produce Meta Ads creative?',
      answer: 'Yes. Static images, carousels, video scripts, and Reels-format creative are produced in-house as part of Meta Ads management, not billed as a separate service.'
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
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(24,119,242,0.04)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 bg-[rgba(24,119,242,0.12)] border border-[rgba(24,119,242,0.30)] text-[#1877F2] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 leading-none font-sans">
                <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-pulse" />
                META BLUEPRINT CERTIFIED AGENCY
              </div>

              <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.75] mb-8">
                {subheadline}
              </p>

              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                Get Your Free Meta Ads Audit →
              </Link>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#1877F2]/10 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                  Get Your Free Meta Ads Audit
                </h3>
                <p className="text-[13px] text-[#8FA8C8] mb-4">
                  See what a full-funnel system looks like for your business.
                </p>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Claim Your Free Meta Ads Audit →"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: STATE OF META ADVERTISING IN 2026 */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            MARKET REALITIES
          </span>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            The State of Meta Advertising for California Businesses in 2026
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8] bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
            Meta's platforms, including Facebook, Instagram, Messenger, and the Audience Network, reach more California adults daily than any other single digital channel, with over 73% of the state's adult population active on Meta. The problem is that plenty of California businesses are still running a strategy built for a version of the platform that no longer exists. Apple's iOS privacy changes permanently altered pixel-based tracking, meaning agencies that haven't implemented Meta's Conversions API are optimizing against a fraction of what's actually happening. Meta's push toward AI-automated campaign types like Advantage+ Shopping has made the platform more powerful and considerably less transparent, which raises rather than lowers the need for expert oversight. And creative has become the primary targeting lever: in an era of broad targeting and AI-driven delivery, the visual, the hook, and the copy are what determine which audience the algorithm finds. Stale creative doesn't just underperform, it actively trains the algorithm to find the wrong people.
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHAT A REAL META ADS AGENCY DELIVERS (Comparison) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              CAMPAIGN VS. SYSTEM
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              What a Real Meta Ads Agency Delivers vs. What Most California Agencies Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
            <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6">
              <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#8FA8C8] mb-4 block">Most California Agencies</span>
              <div className="space-y-3">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-sora font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">✕</span>
                    <span className="font-sans text-[14px] text-[#8FA8C8] leading-relaxed">{row.most}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#162035] border border-[#00C68A]/30 rounded-[18px] p-6">
              <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#00C68A] mb-4 block">GrowLimo</span>
              <div className="space-y-3">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-[#00C68A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-sans text-[14px] text-[#F0F4FF] leading-relaxed font-medium">{row.growlimo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-[14px] bg-[#162035] border-l-4 border-[#00C68A] text-left">
            <p className="font-sans text-[14.5px] font-medium text-[#F0F4FF] leading-relaxed">
              The difference between a campaign and a system is often the difference between a 1.4x ROAS and a 6.8x ROAS.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: META ADS AGENCY VS MANAGEMENT VS COMPANY VS FIRM */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-10">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              HOW BUSINESSES SEARCH
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Meta Ads Agency vs. Meta Ads Management vs. Meta Ads Company vs. Meta Ads Firm in California
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 max-w-[1200px]">
            {vsParagraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
                {p}
              </p>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR META ADVERTISING AGENCY SERVICES (4 Cards) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              INTEGRATED SYSTEM
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Our Meta Advertising Agency Services for California Businesses
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              GrowLimo delivers a complete, integrated Meta Ads system across Facebook, Instagram, Messenger, Audience Network, Reels, and Stories, calibrated to your specific business model and acquisition economics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 text-left"
              >
                <h3 className="font-sora font-bold text-[19px] text-[#F0F4FF] leading-snug mb-3">
                  {srv.title}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                  {srv.paragraph}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              REAL REVENUE METRICS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Meta Ads Case Studies From California Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
              >
                <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-full inline-block mb-4">
                  {cs.title}
                </span>
                <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                  {cs.paragraph}
                </p>
              </div>
            ))}
          </div>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
            Additional verified results, including a Los Angeles skincare brand's move from 1.4x to 6.8x ROAS, are on our{' '}
            <Link href="/case-studies/" className="text-[#00C68A] font-semibold hover:underline">case studies page</Link>.
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: INDUSTRIES SERVED */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              VERTICAL EXPERIENCE
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Industries Our Meta Ads Agency Serves in California
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              Meta Ads strategy, creative format, and campaign objective vary significantly by industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
              >
                <h3 className="font-sora font-bold text-[17px] text-[#F0F4FF] mb-2">
                  {ind.name}
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">
                  {idx === 1 ? (
                    <>
                      Healthcare and medical aesthetics practices need HIPAA-compliant lead forms and consent management, covered in more depth on our{' '}
                      <Link href="/healthcare-facebook-ads-management-california/" className="text-[#00C68A] font-semibold hover:underline">healthcare Meta Ads management</Link>{' '}
                      and{' '}
                      <Link href="/dentist-facebook-ads-management-california/" className="text-[#00C68A] font-semibold hover:underline">dentist Meta Ads management</Link>{' '}
                      pages for California.
                    </>
                  ) : (
                    ind.desc
                  )}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: MAJOR CALIFORNIA MARKETS */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              GEO-TARGETED STRATEGIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Meta Ads Agency Services Across Every Major California Market
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              A Los Angeles audience responds to different creative and offers than a Sacramento or Bay Area audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalCities.map((reg, idx) => (
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
      {/* SECTION 9: WHY GROWLIMO IS A TOP RATED META ADS AGENCY */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
            <div className="inline-flex items-center gap-2 bg-[rgba(24,119,242,0.12)] border border-[rgba(24,119,242,0.30)] text-[#1877F2] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[4px] px-[14px] mb-4">
              META BLUEPRINT CERTIFIED
            </div>

            <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Why GrowLimo Is a Top Rated Meta Ads Agency
            </h2>

            <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
              GrowLimo's Meta Ads team is led by certified specialists whose entire professional focus is paid social performance. This page is reviewed by Usama Zulfiqar, Senior Meta Ads Strategist at GrowLimo, who has managed California Meta campaigns since before the iOS 14.5 update and holds Meta Blueprint Certified Media Buying Professional certification. Total managed Meta Ads spend across California clients exceeds $800,000. It was last updated in August 2026 with current Advantage+ Shopping and server-side Conversions API setup standards. Read more about our team on our{' '}
              <Link href="/about/" className="text-[#00C68A] font-semibold hover:underline">About page</Link>.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: OUR PROCESS */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            HOW WE WORK
          </span>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            Our Meta Ads Agency Process
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8]">
            Every engagement begins with a free technical and strategic audit of your existing account, or a California competitive intelligence analysis through Meta's Ad Library if you're starting fresh. From there we build a complete strategy document covering funnel stages, audience segments, creative briefs, and a Conversions API implementation plan for your approval, followed by creative production, technical setup with event deduplication and domain verification, and a full pre-launch QA check. Once live, weekly optimization cycles rotate creative before frequency triggers fatigue and rebalance budget toward the highest-ROAS campaigns, with monthly reporting and quarterly reviews on scaling and expansion into new California markets.
          </p>

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
              Meta Ads Agency California FAQs
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
                        {faq.answer === 'FB_LINK' ? (
                          <>
                            In practice, very little. Meta Ads is the umbrella term for advertising across Facebook, Instagram, Messenger, and the Audience Network, managed through the same Ads Manager account. Businesses that specifically want to see our Facebook-first breakdown can visit our{' '}
                            <Link href="/facebook-ads-management-california/" className="text-[#00C68A] font-semibold hover:underline">Facebook Ads management page for California</Link>; the underlying team and process are the same.
                          </>
                        ) : (
                          faq.answer
                        )}
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

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
              Get Started With California's Top Rated Meta Ads Agency
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[760px] mx-auto mb-8">
              Whether you're an e-commerce brand stuck at 2x ROAS, a service business paying premium rates per lead on Google when Meta could deliver them for less, or a B2B company that has never tested paid social,{' '}
              <Link href="/contact/" className="text-[#00C68A] font-semibold hover:underline">get your free Meta Ads audit</Link>{' '}
              and see what a full-funnel system looks like for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                Get Your Free Meta Ads Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
