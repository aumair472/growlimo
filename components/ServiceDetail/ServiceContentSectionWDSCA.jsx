import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionWDSCA({ service, slug }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'Web Design Services & Agency California - GrowLimo',
    metaDescription = 'Web Design Services California - GrowLimo is a web design agency offering website design services in California. Expert website designer team, sub-2-second load times. Free audit today.',
    h1 = 'Web Design Services in California',
    subheadline = "Your website is the first impression most California customers will ever have of your business, and a slow, generic one loses that impression before a single word gets read. GrowLimo is a web design agency built for California businesses that need more than a template with their logo pasted on it, a website designer team that builds custom, conversion-focused sites for companies across Los Angeles, San Diego, and San Francisco. Whether you need website design services in California from scratch or a redesign of a site that's quietly bleeding leads, this is the standard a website designer should be held to.",
    schema
  } = service;

  // Trust Pills
  const trustPills = [
    { label: '100+ California Clients', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: '4.9-star Google Rating', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { label: 'No Long-Term Contracts', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
  ];

  // Why Businesses Choose GrowLimo — 3 Pillars (split from the single DOCX paragraph)
  const whyPillars = [
    {
      title: 'Conversion-Focused Design',
      badge: 'Trust & Conversion',
      desc: "We don't build generic template sites that look like every other competitor on the web. We design custom, high-converting platforms with trust signals, certifications, local reviews, and booking actions placed prominently above the fold, backed by user testing that removes the friction points making prospects leave before completing an action."
    },
    {
      title: 'Sub-2-Second Mobile Load Times',
      badge: 'Core Web Vitals',
      desc: "Over 70% of local search traffic is mobile, so every site is optimized for sub-2-second mobile load times through compressed assets, modern image formats, and clean code that passes Google's Core Web Vitals."
    },
    {
      title: 'SEO-First Technical Architecture',
      badge: 'Built-In, Not Bolted-On',
      desc: 'Search optimization gets designed into the core architecture from the start, with clean crawl paths, organized URL hierarchies, and integrated schema markup, rather than bolted on afterward.'
    }
  ];

  // "Vs" Search Intent Paragraphs
  const vsParagraphs = [
    'Some business owners search web design services California, others phrase the identical want as website design services California. Google treats "web" and "website" as interchangeable in this context, so ranking for one effectively means ranking for both. The same holds whether the query is phrased web design services in California or website design services in California, and it holds again at the shorthand level: web design services CA and website design services CA, or web design services in CA and website design services in CA, all point to the same underlying result.',
    "The same pattern shows up one level up in specificity. A web design agency California and a website design agency California describe the same kind of provider, and so do the more specific versions: web design agency in California and website design agency in California, web design agency CA and website design agency CA, web design agency in CA and website design agency in CA. What actually varies between providers isn't the term used to find them, it's whether design, development, copywriting, and CRO happen under one roof or get farmed out to separate freelancers.",
    'Business owners further along in vetting search for a web design company California with real client references, a web design company in California with a documented process, or the shorthand web design company CA, wanting confirmation there\'s an accountable business behind the work rather than a single freelancer.',
    'Individual practitioner searches follow the same logic. A website designer worth hiring in California should be able to explain how a layout decision affects conversion rate, not just how it looks. Business owners narrow that search to a website designer California can show a real portfolio for, a website designer in California with local market experience, or the shorthand website designer CA. The web designer California and web designer in California versions describe the exact same search, phrased from habit rather than a different intent.',
    'Businesses that want a smaller, senior-led relationship look for a website design firm California owners can call directly, rather than a web design firm in California with a rotating account team and no single point of contact.'
  ];

  // What We Do For You (4 cards)
  const services = [
    {
      title: 'Custom Responsive Design',
      desc: 'Beautiful, modern layouts that scale across every device, with modular UI components customized to reflect your actual local brand personality rather than a generic one borrowed from a theme library.',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      title: 'Core Web Vitals Speed Tuning',
      desc: 'Optimized source code, minified scripts, compressed media, and CDN deployment guarantee fast page loads, pass core speed benchmarks, and improve Google Quality Scores, which lowers average cost-per-click for any paid campaigns running alongside the site.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Frictionless Booking and Form Setup',
      desc: 'Online booking, interactive contact forms, and automated CRM routing make requesting service simple for local customers, with custom APIs routing data securely to platforms like Salesforce or HubSpot and notifying your team of new leads within seconds.',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      title: 'Accessibility and Policy Compliance',
      desc: 'Websites are designed to support ADA and WCAG compliance, with privacy policies, cookie consent, and data collection practices configured to current standards like CCPA, protecting the business from legal exposure while improving the experience for every visitor.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  // Industries We Serve (4 cards)
  const industries = [
    { name: 'Medical Practices', desc: 'A medical practice needs appointment booking and compliance-aware copy.' },
    { name: 'Local Service Businesses', desc: 'Medical practices, local service businesses, professional firms, and multi-location businesses each have a different customer journey, and each requires a website designer who understands the difference rather than reusing the same template across industries.' },
    { name: 'Multi-Location Businesses', desc: 'A multi-location business needs consistent, non-duplicate location pages.' },
    { name: 'Professional Services Firms', desc: 'A professional services firm needs a design that builds authority before a prospect ever picks up the phone.' }
  ];

  // Our Proven Web Design Process (4 phases)
  const processPhases = [
    { phase: 'Phase One', title: 'Strategy and UX Mapping', desc: "Analyzing your current site's performance, defining the target user flow, and designing wireframes around your business goals." },
    { phase: 'Phase Two', title: 'Custom UI Design Mockups', desc: 'Typography, color, and trust elements selected deliberately to establish a premium brand look.' },
    { phase: 'Phase Three', title: 'Development and API Integration', desc: 'Building the site in clean, fast code with CRM databases connected and tracking events configured.' },
    { phase: 'Phase Four', title: 'Launch and Speed Optimization', desc: 'Including cross-browser testing, SSL deployment, and a zero-downtime domain launch.' }
  ];

  // FAQs (8 items)
  const faqs = service.faqs || [
    {
      question: 'How long does it take to design and launch a website?',
      answer: 'A typical custom web design project takes 4 to 8 weeks, depending on the number of pages, custom features, and integration requirements.'
    },
    {
      question: "What's the difference between web design services and web development services?",
      answer: 'DEV_LINK'
    },
    {
      question: 'Will the website be optimized for mobile search traffic?',
      answer: 'Yes. Every site is built mobile-first, so it loads quickly and displays properly on every smartphone and tablet.'
    },
    {
      question: 'Do we need to write the website copy?',
      answer: "No. Our copywriting team writes the content, keeping it engaging, SEO-friendly, and compliant with your industry's regulations."
    },
    {
      question: 'Will we be able to edit the website after it launches?',
      answer: 'Yes. Sites are built on easy-to-use content management systems, with training so your team can make updates without calling us for every change.'
    },
    {
      question: 'Will the website be ADA compliant?',
      answer: 'Yes. We design and build to ADA and WCAG guidelines, reducing legal compliance risk.'
    },
    {
      question: 'Can you help migrate our content from our old website?',
      answer: 'Yes. We handle migration of your content, images, and reviews, and configure redirects to preserve your existing search rankings.'
    },
    {
      question: 'Do you require a long-term contract for design services?',
      answer: 'No. Design projects run on a flat-rate project fee, not a recurring contract.'
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
                CALIFORNIA WEB DESIGN AGENCY
              </div>

              <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.75] mb-8">
                {subheadline}
              </p>

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

            <div className="lg:col-span-5 w-full">
              <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                  Get Your Free Strategic Review
                </h3>
                <p className="text-[13px] text-[#8FA8C8] mb-4">
                  See exactly where your current site is losing visitors.
                </p>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Claim Your Free Review →"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHY BUSINESSES CHOOSE GROWLIMO (3 Pillars) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[840px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              WHY GROWLIMO
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Why Businesses Choose GrowLimo for Web Design
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyPillars.map((pillar, idx) => (
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
                  <h3 className="font-sora font-bold text-[19px] text-[#F0F4FF] leading-snug mb-4">
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
      {/* SECTION 3: WEB DESIGN VS WEBSITE DESIGN SERVICES */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-10">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              HOW BUSINESSES SEARCH
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Web Design Services vs. Website Design Services in California
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
      {/* SECTION 4: WHAT WE DO FOR YOU (4 Cards) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              FULL-STACK CAPABILITIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              What We Do For You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,198,138,0.12)] text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center text-[#00C68A] mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={srv.icon} />
                  </svg>
                </div>
                <h3 className="font-sora font-bold text-[19px] text-[#F0F4FF] leading-snug mb-3">
                  {srv.title}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: CONVERSION-RATE OPTIMIZATION AND TRUST LAYOUTS */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            CONVERSION ARCHITECTURE
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            Conversion-Rate Optimization and Trust Layouts
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8] bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
            Getting traffic to a website is only half the job. We apply proven conversion heuristics to structure layouts for maximum acquisition, studying click data and heatmaps to remove obstacles and organizing booking paths so scheduling is genuinely simple. Trust markers and professional credentials go above the fold, click-to-call phone numbers sit in the mobile header, and before-and-after galleries carry structured schema markup so content hierarchy leads the eye directly to key calls-to-action.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: HYPER-LOCALIZED SEO ARCHITECTURE */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            BUILT FOR LOCAL SEARCH
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            Hyper-Localized SEO Architecture Across California
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8] bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
            A website should be structured to support the SEO campaigns running on top of it. We build organized URL structures and schema markup that help search engines index pages and rank services for local queries, whether that means neighborhood-level location pages in Los Angeles, coastal-market promotions in San Diego, or mobile-first, tech-forward strategy in San Francisco. LocalBusiness and AggregateRating schema is installed to surface rich results directly in search, and internal link paths distribute page authority naturally across local service pages. Businesses pairing a new site with an organic growth campaign can see our dedicated{' '}
            <Link href="/seo-services-california/" className="text-[#00C68A] font-semibold hover:underline">SEO services in California</Link>.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: INDUSTRIES WE SERVE (4 Cards) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              VERTICAL EXPERTISE
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
              >
                <h3 className="font-sora font-bold text-[17px] text-[#F0F4FF] mb-2">
                  {ind.name}
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: WHAT MAKES A WEBSITE DESIGNER WORTH HIRING */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            THE HIRING BAR
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            What Makes a Website Designer Worth Hiring in California
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8] bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
            Not every website designer is solving the same problem. A freelancer working from a template can produce something that looks acceptable in a portfolio; it's a different skill entirely to design a page that survives contact with a real California market, competitive search rankings, high mobile bounce thresholds, and customers who compare several options before ever calling. A website designer worth hiring should be able to explain, specifically, how a layout decision affects conversion rate, how a design choice affects Core Web Vitals, and how the page will hold up against three or four direct competitors in your city. Every layout decision at GrowLimo gets tied back to a business outcome, an inquiry, a booking, a call, not just a visual preference.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: OUR PROVEN WEB DESIGN PROCESS (4 Phases) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[840px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              HOW WE WORK
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Our Proven Web Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processPhases.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
              >
                <div>
                  <div className="text-[13px] font-extrabold font-sora text-[#00C68A] mb-3 uppercase tracking-[1.5px]">
                    {step.phase}
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
      {/* SECTION 10: WHY 100-PLUS CALIFORNIA BUSINESSES CHOOSE GROWLIMO */}
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
              Why 100-Plus California Businesses Choose GrowLimo
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
              GrowLimo has designed and built sites for more than 100 California clients and maintains a 4.9-star Google rating, with no long-term contracts locking clients in. Design projects run on a flat-rate project fee, and once a site launches, clients own the code and assets completely. Comprehensive analytics, including Google Analytics 4 configured with conversion tracking and funnel drop-off data, connect every design decision back to inquiries, bookings, and cost per acquisition rather than vanity metrics. You can review the team's broader marketing and development background on our{' '}
              <Link href="/about/" className="text-[#00C68A] font-semibold hover:underline">About page</Link>{' '}
              and see verified outcomes on our{' '}
              <Link href="/case-studies/" className="text-[#00C68A] font-semibold hover:underline">case studies page</Link>.
            </p>
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
              Web Design Services California FAQs
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
                        {faq.answer === 'DEV_LINK' ? (
                          <>
                            Web design covers the visual layout, user experience, and conversion architecture of a site. Web development covers the underlying engineering, including custom applications, database integrations, and performance work. Businesses that need custom engineering beyond design can see our{' '}
                            <Link href="/web-developer-california/" className="text-[#00C68A] font-semibold hover:underline">web developer services in California</Link>; most projects use the same team for both.
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
              Get Started With California's Trusted Web Design Agency
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[720px] mx-auto mb-8">
              <Link href="/contact/" className="text-[#00C68A] font-semibold hover:underline">Claim your free strategic review</Link>{' '}
              to see exactly where your current site is losing visitors, and what a conversion-focused redesign would fix first.
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
