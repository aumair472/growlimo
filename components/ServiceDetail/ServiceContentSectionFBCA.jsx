import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionFBCA({ service, slug }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'Facebook Ads Management & Marketing Services CA | GrowLimo',
    metaDescription = 'Facebook Ads Management California -  GrowLimo delivers professional Facebook marketing services and Facebook Ads management in California - Meta Blueprint certified, 6.8x avg ROAS. Free audit.',
    h1 = 'Facebook Ads Management in California',
    subheadline = "Facebook and Instagram together reach more than 73% of California's adult population, more people than any TV network or radio station in the state. GrowLimo provides Facebook Ads management California businesses trust, delivered by a Meta Blueprint-certified team behind Facebook marketing services California brands rely on for demand creation, not just demand capture. Whether you're comparing a Facebook Ads agency California business owners recommend directly or a Facebook Ads company California teams found through a referral, the standard should be the same: a Meta Blueprint-certified team running full-funnel campaigns, not a generalist posting boosted content.",
    schema
  } = service;

  // "Vs" Search Intent Paragraphs
  const vsParagraphs = [
    "Phrasing shifts more than intent here. Some business owners search facebook ads management in California hoping for a full-service partner, while others shorten it to facebook ads management CA or facebook ads management in CA when typing from a phone. The vetting standard shouldn't change based on how the search was typed.",
    'The vendor-type searches carry their own signals. A facebook ads agency in California should be able to show funnel-level case studies, not just a client logo wall, and whether the search is facebook ads agency CA or facebook ads agency in CA, that bar shouldn\'t move. The same applies to a facebook ads company in California: the shorthand version, facebook ads company CA, pulls the same underlying want, a team that owns strategy, creative, and optimization under one roof rather than farming pieces out to freelancers.',
    'Broader searches like facebook ads services California or facebook ads services in California, and facebook marketing services California or facebook marketing services in California, tend to come from businesses still comparing providers rather than ready to commit, which is exactly when a free audit, not a sales pitch, should be the first deliverable. A facebook marketing agency California trusts for full-funnel strategy and a facebook marketing agency in California built around Meta Blueprint certification are the same team at GrowLimo.',
    'Businesses that want a single expert rather than a full retainer often look for a facebook ads specialist California can assign to their account permanently, or a facebook ads consultant California can bring in for a one-time audit and campaign architecture review before handing off ongoing facebook ad campaign management California to a full team. Both paths lead to the same certified specialists.'
  ];

  // Section: Our Services (4 items)
  const servicesTabs = [
    {
      id: 'strategy',
      label: 'Campaign Strategy',
      heading: 'Campaign Strategy and Funnel Architecture',
      paragraphs: [
        "Every engagement starts with a full California market and competitor analysis, mapping your audience across Meta's targeting dimensions into a funnel covering all three stages of the buyer journey. Cold audiences meet awareness-stage creative, warm audiences who've engaged with content or visited your site get retargeted with conversion-focused messaging, and hot audiences, past customers and highest-intent visitors, get upsell and re-engagement campaigns."
      ]
    },
    {
      id: 'creative',
      label: 'Ad Creative Production',
      heading: 'Ad Creative Production',
      paragraphs: [
        "Static images, carousel designs, video scripts, and copy variations are produced in batches of three to five variants per ad set for immediate A/B testing, and reviewed against Meta's advertising policies before submission to avoid disapproval delays."
      ]
    },
    {
      id: 'advantage',
      label: 'Advantage+ and Audience Building',
      heading: 'Advantage+ and Audience Building',
      paragraphs: [
        "We manage Advantage+ Shopping and Advantage+ audience campaigns alongside manual lookalike and interest-based targeting built from your first-party customer data, rather than relying on Meta's automation alone."
      ]
    },
    {
      id: 'capi',
      label: 'Conversions API, Pixel, and Landing Pages',
      heading: 'Conversions API, Pixel, and Landing Pages',
      paragraphs: [
        'Every account gets verified Pixel and Conversions API setup to protect tracking accuracy after iOS privacy changes, paired with landing pages QA-checked for mobile performance and event firing before a campaign goes live.'
      ]
    }
  ];

  // Section: Case Studies (3 items, flowing paragraphs as written)
  const caseStudies = [
    {
      title: 'LA Skincare Brand',
      paragraph: "A Los Angeles direct-to-consumer skincare brand was spending $4,000 a month at a 1.4x ROAS on a single broad Conversions campaign with stale creative and a misconfigured pixel. After rebuilding around Advantage+ Shopping, lookalike audiences from a 3,200-customer email list, and remarketing segmented by funnel stage, ROAS grew to 6.8x, with monthly Meta Ads revenue rising from $5,600 to $27,200."
    },
    {
      title: 'San Diego Real Estate',
      paragraph: "A San Diego luxury real estate agent relying entirely on declining referrals launched a Lead Gen campaign offering a free market report through Meta's instant lead form, routed straight into their CRM with same-day follow-up. In 90 days, the campaign generated 140 qualified leads at $31 per lead and an estimated $96,000 in commission from a $4,340 ad spend."
    },
    {
      title: 'Sacramento Gym',
      paragraph: 'A three-location Sacramento gym was spending $1,200 a month boosting Facebook posts with no way to attribute memberships to the spend. After migrating to a proper Ads Manager structure with a 14-day free trial Lead Gen campaign and retargeting, the gym added 67 new memberships in 60 days at a 14.8x ROAS on the same budget.'
    }
  ];

  // Section: Industries
  const industries = [
    { name: 'E-Commerce & Direct-to-Consumer', desc: 'E-commerce and direct-to-consumer brands need Advantage+ Shopping, dynamic product ads, and abandoned cart retargeting.' },
    { name: 'Real Estate', desc: 'Real estate needs buyer and seller lead generation with CRM integration.' },
    { name: 'Healthcare & Medical Aesthetics', desc: 'Healthcare and medical aesthetics practices need HIPAA-compliant ad copy and consent management, covered in more depth on our healthcare Facebook Ads management and dentist Facebook Ads management pages for California.' },
    { name: 'Home Services, Fitness, Restaurants, Education & Automotive', desc: 'Home services, fitness and wellness, restaurants, education, and automotive businesses each carry their own creative and targeting requirements that a generic campaign misses.' }
  ];

  // Section: California Cities
  const regionalCities = [
    { city: 'Los Angeles', note: 'Los Angeles is the largest California Meta Ads market, spanning entertainment, fashion, beauty, and luxury services with neighborhood-level targeting.' },
    { city: 'San Diego', note: 'San Diego blends real estate, healthcare, and military-community demographics.' },
    { city: 'San Francisco & Bay Area', note: 'San Francisco and the Bay Area lean tech-professional and high-income, often paired with LinkedIn Ads.' },
    { city: 'Sacramento', note: 'Sacramento covers government, healthcare, and family-oriented demographics with a strong home services market.' },
    { city: 'Orange County', note: 'Orange County supports an affluent consumer base with higher acquisition costs at strong lifetime-value ratios.' },
    { city: 'Fresno & Central Valley', note: 'Fresno and the Central Valley offer lower CPMs and stronger cost-per-lead efficiency.' }
  ];

  // Section: Our Process (6 phases)
  const processPhases = [
    { phase: 'Phase One', desc: "Phase one is a free audit of your existing Meta Ads account, or a competitive analysis of your California competitors through Meta's Ad Library if you're starting fresh." },
    { phase: 'Phase Two', desc: 'Phase two builds the full campaign strategy, funnel architecture, audience segments, and creative brief for your approval.' },
    { phase: 'Phase Three', desc: "Phase three is creative production across static, carousel, and video formats reviewed against Meta's advertising policies." },
    { phase: 'Phase Four', desc: 'Phase four is campaign build, Pixel and Conversions API setup, and a full pre-launch checklist.' },
    { phase: 'Phase Five', desc: 'Phase five is weekly optimization, rotating creative before fatigue sets in and rebalancing budget by ROAS.' },
    { phase: 'Phase Six', desc: 'Phase six is monthly reporting on reach, CTR, cost-per-result, and ROAS, with quarterly reviews on scaling top performers.' }
  ];

  // FAQs (6 items)
  const faqs = service.faqs || [
    {
      question: 'How much does Facebook Ads management cost in California?',
      answer: 'Cost depends on ad spend level and creative production needs. A free audit gives you a specific recommendation based on your industry, goals, and current account performance.'
    },
    {
      question: 'What is the difference between Facebook Ads and Google Ads for California businesses?',
      answer: 'Facebook Ads creates demand by reaching people before they search, using interest and behavior targeting. Google Ads captures demand from people already searching for what you sell. Businesses that want to run both under one strategy can see our Google Ads management services in California.'
    },
    {
      question: 'How quickly will Facebook Ads generate results for my California business?',
      answer: 'Lead generation and e-commerce campaigns can produce results within the first one to two weeks, though performance typically stabilizes and improves over 60 to 90 days as creative and audience data accumulate.'
    },
    {
      question: 'Does GrowLimo manage Instagram Ads as well as Facebook?',
      answer: 'Yes. Every campaign we build includes Instagram placements alongside Facebook by default, managed under the same Meta Ads Manager strategy.'
    },
    {
      question: 'What budget do I need to start Facebook Ads in California?',
      answer: 'Meaningful results are achievable starting around $1,000 to $1,500 a month for a single-location or single-offer business, with budget scaling as campaigns prove ROAS.'
    },
    {
      question: 'Does GrowLimo create the Facebook ad creative and copy?',
      answer: 'Yes. Full creative production, including static images, carousels, video scripts, and copy variations, is included as part of Facebook Ads management, not billed as a separate add-on.'
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
                META BLUEPRINT CERTIFIED PAID SOCIAL AGENCY
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
                Get Your Free Facebook Ads Audit →
              </Link>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#1877F2]/10 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                  Get Your Free Meta Ads Audit
                </h3>
                <p className="text-[13px] text-[#8FA8C8] mb-4">
                  Identify creative fatigue, audience leaks, & CAPI tracking issues.
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
      {/* SECTION 2: WHY FACEBOOK ADS IS NON-NEGOTIABLE */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            STRATEGIC IMPERATIVE
          </span>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            Why Facebook Ads Management Is Non-Negotiable for California Businesses
          </h2>

          <div className="space-y-6 text-[#8FA8C8] font-sans text-[15px] sm:text-[16px] leading-[1.85]">
            <p className="bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              Meta's platform lets you target the exact people most likely to buy, based on demographics, interests, behaviors, life events, and purchase history, rather than hoping the right person happens to be watching. Google Ads reaches people who are already searching for what you sell, an essential but reactive channel. Facebook Ads reaches people before they search, building the awareness and desire that eventually turns into direct search intent. The strongest California marketing strategies run both: Google Ads to capture existing demand, Facebook Ads to create new demand.
            </p>

            <p className="bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              The landscape has also gotten more complicated. Apple's iOS privacy changes cut into Meta's tracking accuracy, the platform has pushed hard toward Advantage+ automation, and creative fatigue, the rapid decay in ad performance once an audience has seen the same creative too many times, is now a constant rather than an occasional problem. Managing all of that well takes active, hands-on management. It isn't something a boosted post or a stale ad set left running for weeks can do for you.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: FACEBOOK ADS MANAGEMENT VS AGENCY VS COMPANY VS MARKETING AGENCY */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-10">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              HOW BUSINESSES SEARCH
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Facebook Ads Management vs. Facebook Ads Agency vs. Facebook Ads Company vs. Facebook Marketing Agency in California
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
      {/* SECTION 4: OUR SERVICES (4 Tabs) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              END-TO-END PAID SOCIAL
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Our Facebook Ads Management Services
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              GrowLimo runs Facebook and Instagram Ads end to end: strategy, creative production, campaign build, ongoing optimization, and transparent reporting.
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
                      : 'bg-[#162035] text-[#8FA8C8] hover:text-[#F0F4FF] border border-[rgba(255,255,255,0.06)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left transition-all duration-300">
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
      {/* SECTION 5: CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              REAL REVENUE METRICS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Facebook Ads Management Case Studies From California
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
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
            <Link href="/case-studies/" className="text-[#00C68A] font-semibold hover:underline">
              case studies page
            </Link>
            .
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: INDUSTRIES SERVED */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              VERTICAL EXPERIENCE
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Industries We Serve With Professional Facebook Marketing Services
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              Facebook Ads strategy is highly industry-specific.
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
                  {idx === 2 ? (
                    <>
                      Healthcare and medical aesthetics practices need HIPAA-compliant ad copy and consent management, covered in more depth on our{' '}
                      <Link href="/healthcare-facebook-ads-management-california/" className="text-[#00C68A] font-semibold hover:underline">
                        healthcare Facebook Ads management
                      </Link>{' '}
                      and{' '}
                      <Link href="/dentist-facebook-ads-management-california/" className="text-[#00C68A] font-semibold hover:underline">
                        dentist Facebook Ads management
                      </Link>{' '}
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
      {/* SECTION 7: CALIFORNIA CITIES */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              GEO-TARGETED STRATEGIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Facebook Ads Management Across California Cities
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              California's regional diversity means a Los Angeles audience behaves nothing like a Sacramento or Fresno one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalCities.map((reg, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
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
      {/* SECTION 8: TEAM CREDIBILITY & EDITORIAL BLOCK */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
            <div className="inline-flex items-center gap-2 bg-[rgba(24,119,242,0.12)] border border-[rgba(24,119,242,0.30)] text-[#1877F2] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[4px] px-[14px] mb-4">
              META BLUEPRINT CERTIFIED
            </div>

            <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Meet GrowLimo's Meta Blueprint Certified Facebook Ads Specialists
            </h2>

            <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
              Every campaign is built, managed, and optimized by Meta Blueprint certified specialists, the highest standard of validation Meta offers for Facebook and Instagram media buyers, covering advertising APIs, campaign design, audience building, catalog management, and conversion event tracking. This page is reviewed by Usama Zulfiqar, Senior Meta Ads Strategist at GrowLimo, who brings more than 7 years of experience managing California Facebook and Instagram campaigns and holds Meta Blueprint certification. It was last updated in August 2026 with current Advantage+ benchmarks and Conversions API protocols. Read more about our team on our{' '}
              <Link href="/about/" className="text-[#00C68A] font-semibold hover:underline">
                About page
              </Link>
              .
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: OUR PROCESS (6 Phases) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              PHASED CAMPAIGN ROADMAP
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Our Facebook Ads Management Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processPhases.map((p, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
              >
                <span className="font-sora font-extrabold text-[15px] text-[#00C68A] mb-3 block">
                  {p.phase}
                </span>
                <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

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
              Facebook Ads Management FAQs for California Businesses
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
                        {faq.question === 'What is the difference between Facebook Ads and Google Ads for California businesses?' ? (
                          <>
                            Facebook Ads creates demand by reaching people before they search, using interest and behavior targeting. Google Ads captures demand from people already searching for what you sell. Businesses that want to run both under one strategy can see our{' '}
                            <Link href="/google-ads-management-california/" className="text-[#00C68A] font-semibold hover:underline">
                              Google Ads management services in California
                            </Link>
                            .
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
      {/* SECTION 11: FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[90px] md:py-[110px] relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C68A]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 md:px-10 max-w-[960px] relative z-10 text-center">
          <div className="bg-[#1A2438] border border-[rgba(0,198,138,0.25)] rounded-[24px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />

            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] mb-4 inline-block font-sans">
              STOP BLEEDING AD BUDGET
            </span>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
              Get Started With Professional Facebook Marketing Services in California
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[760px] mx-auto mb-8">
              Stop wasting ad budget on set-and-forget boosted posts or broad interest targeting that doesn't convert.{' '}
              <Link href="/contact/" className="text-[#00C68A] font-semibold hover:underline">
                Get your free Facebook Ads audit
              </Link>{' '}
              from our Meta Blueprint-certified specialists and see exactly where you're losing budget and how to reach a 4x to 8x ROAS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                Get Your Free Facebook Ads Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
