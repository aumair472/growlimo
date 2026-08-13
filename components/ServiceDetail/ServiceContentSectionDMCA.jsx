import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionDMCA({ service, slug }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'Digital Marketing Agency & Services California - GrowLimo',
    metaDescription = 'Digital Marketing Agency California - GrowLimo is a full-service digital marketing agency delivering SEO, PPC, content, email & social digital marketing services in California. Free audit.',
    h1 = 'Digital Marketing Agency in California',
    subheadline = "GrowLimo is a full-service digital marketing agency delivering digital marketing services to California businesses that are done paying for marketing that doesn't convert. As a digital marketing company California business owners trust for measurable growth, and the digital marketing firm California teams call when generic marketing stops working, we combine SEO, Google Ads, content, email, and social media into one revenue-tracked system rather than a bundle of disconnected tactics.",
    schema
  } = service;

  // "What Is a Digital Marketing Agency" service links (paragraph 2)
  const serviceLinks = [
    { text: 'search engine optimization', href: '/seo-services-california/' },
    { text: 'Google Ads and PPC management', href: '/google-ads-management-california/' },
    { text: 'content marketing and SEO copywriting', href: '/content-marketing-california/' },
    { text: 'email marketing and automation', href: '/email-marketing-services-california/' },
    { text: 'social media and paid social', href: '/social-media-marketing-services-california/' },
    { text: 'web design and conversion optimization', href: '/web-developer-california/' }
  ];

  // "Vs" Search Intent Paragraphs
  const vsParagraphs = [
    'Search behavior around this topic varies more in wording than in intent. Some business owners look specifically for a digital marketing company California can vouch for through case studies and reviews, while others search for a digital marketing company in California with a specific credential, such as Google Partner status. The shorthand versions, digital marketing company CA and digital marketing company in CA, pull up the same underlying want: a vetted, accountable partner rather than a freelancer working out of a spare bedroom.',
    'Businesses that prefer a leaner, more senior-led relationship often search for a digital marketing firm California owners recommend directly, or a digital marketing firm in California with a named strategist rather than a support-ticket queue. The same logic applies to a digital marketing firm CA or digital marketing firm in CA search: the real want is direct access to the person doing the strategy work, not a rotating point of contact. When business owners search for a digital marketing agency CA wide, or narrow it down to a digital marketing agency in CA serving their specific city, GrowLimo shows up for the same reason across every version of the query: one accountable team running every channel under a single revenue number.'
  ];

  // Our Digital Marketing Services (6 items)
  const services = [
    {
      title: 'Search Engine Optimization',
      paragraph: "SEO is the compounding asset of digital marketing: done right, it delivers traffic and leads for years without paying per click. Our approach covers technical SEO, on-page content, and off-page authority building, calibrated to California market intent and city-level search behavior. See our dedicated ",
      link: { text: 'SEO services in California', href: '/seo-services-california/' }
    },
    {
      title: 'Google Ads and PPC Management',
      paragraph: 'California has some of the highest cost-per-click rates in the country, with some legal and medical keywords running $40 to $100 per click. Our Google Partner-certified team builds tight ad group architecture, aggressive negative keyword lists, and conversion-focused landing pages so expensive clicks turn into paying customers. Learn more about our ',
      link: { text: 'Google Ads management in California', href: '/google-ads-management-california/' }
    },
    {
      title: 'Content Marketing and SEO Copywriting',
      paragraph: 'Content is how California businesses build topical authority on Google, educate buyers, and stand out in crowded markets. We produce service pages, blog articles, resource guides, and case studies grounded in keyword research and E-E-A-T standards. Explore our ',
      link: { text: 'content marketing services in California', href: '/content-marketing-california/' }
    },
    {
      title: 'Email Marketing and Automation',
      paragraph: 'Email consistently delivers the highest return of any digital channel. We build welcome sequences, abandoned cart flows, post-purchase nurture, and re-engagement campaigns designed to convert existing leads into repeat revenue. See our ',
      link: { text: 'email marketing services in California', href: '/email-marketing-services-california/' }
    },
    {
      title: 'Social Media Marketing',
      paragraph: "California's consumer culture runs on Instagram, Facebook, LinkedIn, and TikTok as primary discovery platforms. We build audience targeting frameworks, content calendars, and paid social campaigns that drive measurable traffic and leads. Review our ",
      link: { text: 'social media marketing services in California', href: '/social-media-marketing-services-california/' },
      link2: { text: 'Meta Ads management', href: '/meta-ads-agency-california/' }
    },
    {
      title: 'Web Design and Conversion Rate Optimization',
      paragraph: "Your website is the hub every other channel feeds into. If it's slow or fails to build trust in the first few seconds, every dollar spent on SEO and ads is partially wasted. We build fast, mobile-first, SEO-structured sites that pass Core Web Vitals thresholds. Learn more about our ",
      link: { text: 'web design and development services in California', href: '/web-developer-california/' }
    }
  ];

  // Results / Case Studies (3 paragraphs)
  const caseStudies = [
    {
      title: 'LA HVAC Company',
      paragraph: 'An 11-year-old family-owned Los Angeles HVAC company ranked on page 4 for its core terms with fewer than 20 organic visits per month. After a full technical SEO rebuild, new service and neighborhood pages, and a local citation campaign across 40-plus California directories, organic leads grew 323 percent and core Los Angeles terms moved to page 1.'
    },
    {
      title: 'California Medical Spa',
      paragraph: "A California medical spa spending $5,000 per month on Google Ads through a previous agency was generating only a 1.6x return. After rebuilding ad group structure, writing copy anchored in the spa's own social proof, building single-CTA landing pages, and adding call tracking, the account reached a 7.1x return on ad spend."
    },
    {
      title: 'Bay Area B2B SaaS',
      paragraph: 'A Bay Area B2B SaaS company had 210 organic visits per month, all branded traffic, and no content strategy. A six-month roadmap targeting 47 keywords and 24 published articles built with E-E-A-T depth grew organic traffic to 5,400 monthly visitors.'
    }
  ];

  // Industries
  const industries = [
    { name: 'Home Services', desc: 'Home services businesses like HVAC, plumbing, and roofing need hyper-local SEO and emergency-keyword bidding.' },
    { name: 'Healthcare & Dental', desc: 'Healthcare and dental practices need HIPAA-aware ad copy and YMYL-compliant content, covered in depth on our healthcare digital marketing and dentist digital marketing pages for California.' },
    { name: 'Legal Services', desc: 'Legal services need high-CPC Google Ads management with tight Quality Score control.' },
    { name: 'Real Estate, E-Commerce, B2B SaaS, Restaurants & Automotive', desc: 'Real estate, e-commerce, B2B SaaS, restaurants, and automotive businesses each have their own keyword intent patterns and buyer journeys that a one-size-fits-all campaign misses.' }
  ];

  // California City-Level Expertise
  const regionalCities = [
    { city: 'Los Angeles', note: 'Los Angeles requires neighborhood-level SEO and Quality Score optimization for a high-competition landscape.' },
    { city: 'San Diego', note: 'San Diego blends local services and healthcare demand with community-specific SEO.' },
    { city: 'San Francisco & Bay Area', note: 'San Francisco and the Bay Area run on B2B and SaaS-focused, lower-volume, high-intent keyword strategy.' },
    { city: 'Sacramento', note: 'Sacramento sees seasonal demand tied to home services and government-adjacent business.' },
    { city: 'Orange County', note: 'Orange County supports premium consumer spend in cosmetic, real estate, and luxury categories.' },
    { city: 'San Jose', note: 'San Jose leans technical and bottom-of-funnel.' },
    { city: 'Fresno, Central Valley & Long Beach', note: 'Fresno, the Central Valley, and Long Beach offer lower competition and strong ROI for businesses willing to move early.' }
  ];

  // FAQs (8 items)
  const faqs = [
    {
      question: 'What is a digital marketing agency?',
      answer: 'A digital marketing agency is a company that manages a business\'s online growth channels, such as SEO, paid ads, content, email, and social media, under one coordinated strategy rather than as separate, disconnected tactics.'
    },
    {
      question: 'What digital marketing services does GrowLimo offer in California?',
      answer: 'SEO, Google Ads and PPC management, content marketing, email marketing and automation, social media and paid social, and web design and conversion rate optimization, deployed independently or combined based on your goals.'
    },
    {
      question: "What's the difference between a digital marketing agency, company, and firm?",
      answer: 'In practice, very little. Google treats these terms as close variants of the same search intent. What actually differs between providers is scope of service, team structure, and how directly you work with the person doing the strategy.'
    },
    {
      question: 'How much does a digital marketing agency in California cost?',
      answer: 'Budgets across our California clients typically range from $1,000 to $50,000 per month depending on channel mix, competition, and business size. A free audit gives you a specific recommendation rather than a generic estimate.'
    },
    {
      question: 'How long before I see results from digital marketing in California?',
      answer: 'Paid channels like Google Ads can produce leads within days of launch. SEO and content typically show initial movement in 60 to 90 days, with compounding results building over 6 to 12 months.'
    },
    {
      question: 'Do I need every service, or can I start with one?',
      answer: 'You can start with one. Most engagements begin with an audit that identifies which one or two channels will move the needle fastest for your specific business before expanding into a full-funnel strategy.'
    },
    {
      question: 'Is there a long-term contract required?',
      answer: "No. GrowLimo operates month-to-month across every service line. Clients stay because campaigns are performing, not because they're contractually locked in."
    },
    {
      question: 'Can digital marketing help my California business appear in AI search results like ChatGPT and Google AI Overviews?',
      answer: 'Yes. Content structured around direct answers, current data, and clear E-E-A-T signals is more likely to be cited inside AI Overviews, ChatGPT, and Perplexity responses, in addition to ranking in standard organic results.'
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
                FULL-SERVICE DIGITAL MARKETING AGENCY
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
                Book a Free California Marketing Audit →
              </Link>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                  Get Your Free Marketing Audit
                </h3>
                <p className="text-[13px] text-[#8FA8C8] mb-4">
                  See which channels will move your revenue fastest.
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
      {/* SECTION 2: WHAT IS A DIGITAL MARKETING AGENCY */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            DEFINITION
          </span>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            What Is a Digital Marketing Agency, and What Digital Marketing Services Does It Include?
          </h2>

          <div className="space-y-6 text-[#8FA8C8] font-sans text-[15px] sm:text-[16px] leading-[1.85]">
            <p className="bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              A digital marketing agency is a company that manages a business's online growth channels under one coordinated strategy instead of as disconnected, one-off tactics. In California's saturated market, the businesses that win online treat digital marketing as a system, not a checklist, which is why a generic digital marketing services California package rarely performs as well as a channel mix built around a specific business's stage and budget.
            </p>

            <p className="bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              The core digital marketing services a full-service agency like GrowLimo provides include{' '}
              <Link href={serviceLinks[0].href} className="text-[#00C68A] font-semibold hover:underline">{serviceLinks[0].text}</Link> for compounding organic rankings,{' '}
              <Link href={serviceLinks[1].href} className="text-[#00C68A] font-semibold hover:underline">{serviceLinks[1].text}</Link> for immediate, trackable lead flow,{' '}
              <Link href={serviceLinks[2].href} className="text-[#00C68A] font-semibold hover:underline">{serviceLinks[2].text}</Link> for topical authority,{' '}
              <Link href={serviceLinks[3].href} className="text-[#00C68A] font-semibold hover:underline">{serviceLinks[3].text}</Link> for lifecycle retention,{' '}
              <Link href={serviceLinks[4].href} className="text-[#00C68A] font-semibold hover:underline">{serviceLinks[4].text}</Link> for discovery and trust, and{' '}
              <Link href={serviceLinks[5].href} className="text-[#00C68A] font-semibold hover:underline">{serviceLinks[5].text}</Link> for the site every other channel sends traffic to. Most businesses don't need every service on day one, which is why every engagement starts with a free audit rather than a fixed package.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: AGENCY VS COMPANY VS FIRM */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-10">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              HOW BUSINESSES SEARCH
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Digital Marketing Agency vs. Digital Marketing Company vs. Digital Marketing Firm in California
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
      {/* SECTION 4: WHY CALIFORNIA BUSINESSES CHOOSE GROWLIMO */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            WHY GROWLIMO
          </span>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            Why California Businesses Choose GrowLimo as Their Digital Marketing Partner
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8]">
            Finding the right digital marketing agency California has to offer starts with proof, not promises. Most agencies split your budget across freelancers or subcontractors and report on impressions instead of revenue. GrowLimo runs SEO, paid media, content, email, and social under one internal team, with every campaign tracked back to leads and revenue rather than vanity metrics. Whether you search for digital marketing services California wide or digital marketing services in California limited to your city, the deliverables should look the same: coordinated channels, transparent reporting, and no long-term contract locking you in. Smaller businesses often shorten that search to digital marketing services CA or digital marketing services in CA, but the vetting standard shouldn't change just because the query got shorter. You can review verified outcomes on our{' '}
            <Link href="/case-studies/" className="text-[#00C68A] font-semibold hover:underline">case studies page</Link> before committing to anything.
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR DIGITAL MARKETING SERVICES (6 Cards) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              FULL-STACK CAPABILITIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Our Digital Marketing Services in California
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              Every California business has a different competitive position, audience, and growth stage, so these services are deployed independently or combined depending on what your market and goals require.
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
                  <Link href={srv.link.href} className="text-[#00C68A] font-semibold hover:underline">{srv.link.text}</Link>
                  {srv.link2 && (
                    <>
                      {' '}and{' '}
                      <Link href={srv.link2.href} className="text-[#00C68A] font-semibold hover:underline">{srv.link2.text}</Link>
                    </>
                  )}
                  .
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: DIGITAL MARKETING RESULTS (Case Studies) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              REAL RESULTS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Digital Marketing Results We've Delivered for California Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
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
            Full details on these and other engagements are on our{' '}
            <Link href="/case-studies/" className="text-[#00C68A] font-semibold hover:underline">case studies page</Link>.
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: TEAM CREDIBILITY */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
            <div className="inline-flex items-center gap-2 bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.30)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[4px] px-[14px] mb-4">
              GOOGLE PARTNER & META BLUEPRINT CERTIFIED
            </div>

            <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              The Team Behind Your California Digital Marketing Strategy
            </h2>

            <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
              This page is reviewed by Muhammad Usman, Senior Digital Strategist at GrowLimo, who brings more than 7 years of digital marketing experience and holds Google Partner and Meta Blueprint certifications. It was last updated in August 2026 to reflect current California client benchmarks and channel frameworks. Read more about our team's background on our{' '}
              <Link href="/about/" className="text-[#00C68A] font-semibold hover:underline">About page</Link>.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: COST */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            INVESTMENT
          </span>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            How Much Does a Digital Marketing Agency in California Cost?
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8]">
            Cost depends heavily on channel mix and competition level. Across our California client base, monthly budgets typically range from $1,000 for a single-channel, single-location business up to $50,000 for multi-location or enterprise accounts running SEO, paid media, content, and email simultaneously. A free audit is the fastest way to find out what a digital marketing company in California would actually recommend for your specific budget, rather than guessing from a generic price list.
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: INDUSTRIES */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              VERTICAL EXPERTISE
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              California Industries We Specialize In
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              Digital marketing strategy isn't universal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      Healthcare and dental practices need HIPAA-aware ad copy and YMYL-compliant content, covered in depth on our{' '}
                      <Link href="/healthcare-digital-marketing-agency-california/" className="text-[#00C68A] font-semibold hover:underline">healthcare digital marketing</Link>{' '}
                      and{' '}
                      <Link href="/dentist-digital-marketing-agency-california/" className="text-[#00C68A] font-semibold hover:underline">dentist digital marketing</Link>{' '}
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
      {/* SECTION 10: CALIFORNIA CITY-LEVEL EXPERTISE */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              GEO-TARGETED STRATEGIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              California City-Level Digital Marketing Expertise
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              California's regional markets are genuinely distinct.
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
      {/* SECTION 12: FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[90px] md:py-[110px] relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C68A]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 md:px-10 max-w-[960px] relative z-10 text-center">
          <div className="bg-[#1A2438] border border-[rgba(0,198,138,0.25)] rounded-[24px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
              Ready to Build a Digital Marketing Engine That Grows Your California Business?
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[760px] mx-auto mb-8">
              Whether you're starting from zero or scaling an existing campaign,{' '}
              <Link href="/contact/" className="text-[#00C68A] font-semibold hover:underline">book a free California marketing audit</Link>{' '}
              to see exactly which channels will move your revenue fastest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                Book a Free California Marketing Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
