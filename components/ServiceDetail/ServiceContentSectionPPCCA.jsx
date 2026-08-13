import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionPPCCA({ service, slug }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'PPC Services California | Top PPC Company - GrowLimo',
    metaDescription = 'PPC Services California - Looking for the best PPC service agency in California? GrowLimo is a trusted PPC company and PPC agency delivering 5.8x avg ROAS. Free audit today.',
    h1 = 'PPC Services in California',
    subheadline = "Pay-per-click advertising in California cuts both ways. Done right, it's the fastest lever a business has for predictable, scalable lead generation. Done wrong, it's the fastest way to burn a marketing budget with nothing to show for it. GrowLimo delivers PPC services California businesses trust across Google Ads, Meta, Microsoft Advertising, and YouTube, run by the same PPC agency California owners call after a previous account wasted months of spend, and the PPC company California teams point to when a client asks who actually knows what they're doing with a budget.",
    schema
  } = service;

  // "Vs" Search Intent Paragraphs
  const vsParagraphs = [
    'Search phrasing varies more than intent here. Some business owners look specifically for PPC services in California with full platform coverage, while others shorten it to PPC services CA or PPC services in CA when comparing options quickly on a phone. The underlying ask doesn\'t change: manage every paid channel under one accountable team.',
    'The vendor-type terms carry their own nuance. A PPC company California business owners find through a referral is usually vetted through word of mouth, while a PPC company in California found through a cold search is being evaluated on case studies and reviews alone. The shorthand searches, PPC company CA and PPC company in CA, pull the same intent from a smaller screen. The same pattern holds for agency-specific searches: a PPC agency in California should be able to show account-level proof, not just a client logo wall, and whether you search PPC agency CA or PPC agency in CA, that standard shouldn\'t change.',
    'Businesses further along in vetting often search PPC management services California specifically, wanting confirmation that ongoing optimization is included and not just campaign setup, or they search PPC management services in California to make sure whoever they hire operates in-state rather than through an overseas call center. Businesses that want a smaller, more senior-led relationship search for a PPC firm California owners can call directly, or a PPC firm in California with a named strategist assigned to their account rather than a support ticket queue. Some want strategy without full execution, and search for a PPC expert California can bring in for a single audit, a PPC consultant California can retain for a quarterly review, or a PPC specialist California team can assign permanently to their account. All three get the same senior-led attention at GrowLimo.'
  ];

  // Our PPC Services (5 items)
  const services = [
    {
      title: 'Google Ads Search Campaign Management',
      paragraph: 'Search campaigns capture the highest-intent traffic in digital advertising: people actively searching for exactly what you sell, right now. We build campaigns with keyword clusters mapped to dedicated ad groups, ad copy written to mirror each query, and landing pages built around the intent behind each cluster. For businesses that want the full depth of our Google-specific work, see our dedicated ',
      link: { text: 'Google Ads management services in California', href: '/google-ads-management-california/' }
    },
    {
      title: 'Performance Max and Google Shopping',
      paragraph: "For e-commerce and multi-product businesses, Performance Max and Shopping campaigns place products in front of shoppers across Search, Display, YouTube, and Gmail, managed against real revenue targets rather than Google's automated defaults.",
      link: null
    },
    {
      title: 'Meta Ads: Facebook and Instagram',
      paragraph: "Paid social extends reach into discovery-stage buyers who aren't actively searching yet, using detailed audience targeting and creative testing. Explore our dedicated ",
      link: { text: 'Meta Ads management in California', href: '/meta-ads-agency-california/' }
    },
    {
      title: 'Microsoft and Bing Ads',
      paragraph: 'Bing and Microsoft Advertising reach a meaningfully different, often older and higher-income audience than Google alone, frequently at a lower cost-per-click, making it an efficient supplemental channel for many California industries.',
      link: null
    },
    {
      title: 'Remarketing, YouTube, and Landing Pages',
      paragraph: "Most visitors don't convert on the first click. Remarketing keeps your business in front of people who've already shown interest, YouTube extends awareness beyond the search results page, and every campaign type is backed by dedicated landing pages and verified conversion tracking before it goes live.",
      link: null
    }
  ];

  // Case Studies (3 paragraphs)
  const caseStudies = [
    {
      title: 'San Diego Plumbing Company',
      paragraph: 'A San Diego plumbing company spending $3,200 a month was paying $187 per lead from a single bloated ad group. After a rebuild into 8 themed ad groups, a 340-term negative keyword list, and three dedicated landing pages with call tracking, cost-per-lead dropped 76 percent to $44 and monthly leads grew 4.2x, from 17 to 72, on the identical budget.'
    },
    {
      title: 'Orange County Personal Injury Law Firm',
      paragraph: "An Orange County personal injury law firm spending $12,000 a month was generating 22 consultations at a $545 cost-per-lead while national aggregator sites bid freely on the firm's own branded terms. After a full auction insights analysis, competitor and branded-term defense campaigns, and case-type landing pages built around attorney bios and client testimonials, cost per intake dropped 61 percent to $213 and monthly consultations grew to 56."
    },
    {
      title: 'Los Angeles Medical Spa',
      paragraph: 'A Los Angeles medical spa running $5,000 a month through a previous agency was returning a 1.6x ROAS. A rebuild around service-specific ad groups, social-proof-driven ad copy, and remarketing took the account to a 7.1x ROAS on the same spend.'
    }
  ];

  // Industries
  const industries = [
    { name: 'Home Services', desc: 'Home services businesses need emergency keyword bidding, dayparting, and call tracking.' },
    { name: 'Healthcare & Dental', desc: 'Healthcare and dental practices need HIPAA-aware ad copy and procedure-specific landing pages, covered in more depth on our healthcare PPC services and dentist PPC services pages for California.' },
    { name: 'Legal Services', desc: 'Legal services carry the highest CPCs in California PPC and need Quality Score optimization plus branded keyword protection.' },
    { name: 'Real Estate, E-Commerce, Automotive, B2B SaaS & Education', desc: 'Real estate, e-commerce, automotive, B2B SaaS, and education businesses each carry distinct bidding dynamics and conversion requirements that a generic campaign structure misses.' }
  ];

  // Regional Markets (7)
  const regionalCities = [
    { city: 'Los Angeles', note: 'Los Angeles is the most competitive paid search market in the state across nearly every consumer vertical, requiring aggressive Quality Score optimization and neighborhood-level geo-targeting.' },
    { city: 'San Diego', note: 'San Diego blends local-service, healthcare, and military-adjacent demand geo-targeted down to the neighborhood.' },
    { city: 'San Francisco & Bay Area', note: 'San Francisco and the Bay Area run on lower-volume, higher-value B2B and SaaS keywords with LinkedIn integration.' },
    { city: 'Sacramento', note: 'Sacramento sees predictable seasonal spikes in home services demand built around calendar-based bid strategies.' },
    { city: 'Orange County', note: 'Orange County supports a premium consumer market that justifies elevated CPCs.' },
    { city: 'San Jose', note: 'San Jose leans B2B and enterprise.' },
    { city: 'Fresno & Central Valley', note: 'Fresno and the Central Valley offer lower CPCs with real ROI headroom for local businesses.' }
  ];

  // Process (5 phases)
  const processPhases = [
    { phase: 'Phase One', desc: "Phase one is a free audit of your existing accounts, or a competitive analysis if you're starting fresh, identifying every source of wasted spend before you commit to anything." },
    { phase: 'Phase Two', desc: 'Phase two builds the keyword strategy, ad group architecture, negative keyword foundation, and landing page briefs, with nothing built until you approve the strategy.' },
    { phase: 'Phase Three', desc: 'Phase three is campaign build, QA, and launch across every platform in the mix.' },
    { phase: 'Phase Four', desc: 'Phase four is weekly optimization: new negative keywords, paused underperformers, adjusted bids, and ongoing ad copy testing.' },
    { phase: 'Phase Five', desc: 'Phase five is monthly reporting on impressions, clicks, CTR, CPC, Quality Score, conversions, and ROAS, with a quarterly review to weigh new campaign types or expansion into new California markets.' }
  ];

  // FAQs (7 items)
  const faqs = [
    {
      question: 'How much do PPC services cost in California?',
      answer: 'Ad spend across our California accounts typically ranges from $1,500 to $50,000-plus a month depending on platform mix and market, on top of a separate management fee. A free audit gives you a specific recommendation for your industry and budget.'
    },
    {
      question: "What's the difference between PPC and Google Ads?",
      answer: 'PPC, or pay-per-click, is the broader advertising model covering any platform where you pay per click, including Google Ads, Microsoft Advertising, Meta Ads, and YouTube. Google Ads is one specific platform within PPC. Businesses that only want Google-specific management can see our dedicated Google Ads management services.'
    },
    {
      question: 'What is the average ROAS for PPC campaigns in California?',
      answer: 'Our California accounts average a 5.8x return on ad spend, though results vary by industry, competition, and starting account quality.'
    },
    {
      question: 'How quickly will PPC generate leads for my California business?',
      answer: 'PPC can generate leads within days of launch, though most accounts need two to four weeks of real conversion data before bids and targeting are fully optimized.'
    },
    {
      question: 'What PPC platforms does GrowLimo manage in California?',
      answer: 'Google Ads, Microsoft and Bing Ads, Meta Ads on Facebook and Instagram, and YouTube advertising, selected and combined based on where your specific audience actually is.'
    },
    {
      question: 'Do you require a long-term contract for PPC management?',
      answer: 'No. GrowLimo operates month-to-month on every PPC account. Clients stay because the account is performing, not because of a contract.'
    },
    {
      question: 'Can GrowLimo manage my existing PPC campaigns?',
      answer: "Yes. Most engagements start with a free audit of your existing accounts across every platform you're running, identifying exactly what's causing wasted spend before we rebuild the structure."
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
                MULTI-PLATFORM PPC AGENCY
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
                Book Your Free California PPC Audit →
              </Link>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                  Get Your Free PPC Audit
                </h3>
                <p className="text-[13px] text-[#8FA8C8] mb-4">
                  See exactly where your ad budget is being wasted.
                </p>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Claim Your Free PPC Audit →"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHY PPC DEMANDS AN EXPERT AGENCY */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            STRATEGIC IMPERATIVE
          </span>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
            Why PPC Advertising in California Demands an Expert PPC Agency
          </h2>

          <div className="space-y-6 text-[#8FA8C8] font-sans text-[15px] sm:text-[16px] leading-[1.85]">
            <p className="bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              California isn't just a big market, it's the world's fifth-largest economy, home to more than 4 million registered businesses and one of the most concentrated digital advertising markets anywhere. The cost-per-click numbers make the stakes obvious: a keyword like "personal injury attorney Los Angeles" commands $60 to $120 per click, cosmetic and elective procedure keywords across Orange County and San Diego routinely hit $20 to $60 per click, and even home services categories like HVAC, plumbing, and roofing see competitive California metros running $8 to $30 per click. At those rates, every click has to earn its keep.
            </p>
            <p className="bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              We've audited more than 200 California PPC accounts from businesses that arrived after months of burning budget with other agencies or managing campaigns themselves. Nearly every account shares the same structural failures: broad match keywords without negative keyword protection, bloated ad groups killing Quality Score, no conversion tracking, expensive traffic sent to the homepage, zero remarketing, no ad copy testing, ignored device and location bid adjustments, and smart campaigns launched without a real data foundation underneath them. Eliminating that waste is what turns PPC into a predictable revenue channel instead of an expense.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: PPC SERVICES VS COMPANY VS AGENCY VS MANAGEMENT SERVICES */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-10">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              HOW BUSINESSES SEARCH
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              PPC Services vs. PPC Company vs. PPC Agency vs. PPC Management Services in California
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
      {/* SECTION 4: OUR PPC SERVICES (5 Cards) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              MULTI-PLATFORM COVERAGE
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Our PPC Services for California Businesses
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              GrowLimo runs full-spectrum PPC across every major paid advertising platform and determines which channel mix delivers the best ROAS for your specific California market and industry, then builds, manages, and optimizes each one to the same standard.
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
                  {srv.link && (
                    <Link href={srv.link.href} className="text-[#00C68A] font-semibold hover:underline">{srv.link.text}</Link>
                  )}
                  {srv.link && '.'}
                </p>
              </div>
            ))}
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
              California PPC Case Studies From a Proven PPC Company
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
            Full breakdowns of these and other California accounts are on our{' '}
            <Link href="/case-studies/" className="text-[#00C68A] font-semibold hover:underline">case studies page</Link>.
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
              Industries Our California PPC Agency Serves
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              PPC strategy is never one-size-fits-all.
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
                      Healthcare and dental practices need HIPAA-aware ad copy and procedure-specific landing pages, covered in more depth on our{' '}
                      <Link href="/healthcare-ppc-services-california/" className="text-[#00C68A] font-semibold hover:underline">healthcare PPC services</Link>{' '}
                      and{' '}
                      <Link href="/dentist-ppc-services-california/" className="text-[#00C68A] font-semibold hover:underline">dentist PPC services</Link>{' '}
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
      {/* SECTION 7: PPC ACROSS EVERY MAJOR CALIFORNIA MARKET */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              GEO-TARGETED STRATEGIES
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              PPC Services Across Every Major California Market
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              California's regional markets aren't interchangeable.
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
      {/* SECTION 8: TEAM CREDIBILITY */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              AUTHORITY & E-E-A-T
            </span>

            <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Why GrowLimo Is a Trusted PPC Agency in California
            </h2>

            <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
              Every campaign is run by an in-house certified specialist, never outsourced to a white-label provider or handed to a junior analyst learning on your budget. This page is reviewed by Muhammad Usman, Senior PPC Strategist at GrowLimo, who holds Google Ads Search, Display, Shopping, Video, and Performance Max certifications and has personally managed more than $1.2 million in California ad spend across home services, healthcare, legal, e-commerce, automotive, and B2B SaaS. It was last updated in August 2026 with current California PPC benchmarks and multi-channel strategy. Read more about our team on our{' '}
              <Link href="/about/" className="text-[#00C68A] font-semibold hover:underline">About page</Link>.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: OUR PROCESS (5 Phases) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              PHASED CAMPAIGN ROADMAP
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Our California PPC Management Process
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
              PPC Services FAQs for California Businesses
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
                        {faq.question === "What's the difference between PPC and Google Ads?" ? (
                          <>
                            PPC, or pay-per-click, is the broader advertising model covering any platform where you pay per click, including Google Ads, Microsoft Advertising, Meta Ads, and YouTube. Google Ads is one specific platform within PPC. Businesses that only want Google-specific management can see our dedicated{' '}
                            <Link href="/google-ads-management-california/" className="text-[#00C68A] font-semibold hover:underline">Google Ads management services</Link>.
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

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
              Ready to Stop Burning Budget and Start Building a Revenue System?
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[760px] mx-auto mb-8">
              Whether you're watching an existing budget disappear with little to show for it or you're ready to make paid advertising a primary growth channel,{' '}
              <Link href="/contact/" className="text-[#00C68A] font-semibold hover:underline">book your free California PPC audit</Link>{' '}
              today and see exactly what a properly managed, multi-platform campaign looks like for your market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                Book Your Free California PPC Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
