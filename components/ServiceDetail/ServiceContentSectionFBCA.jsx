import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionFBCA({ service, slug }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openProblem, setOpenProblem] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle = 'Facebook Ads Management & Marketing Services CA | GrowLimo',
    metaDescription = 'Facebook Ads Management California - GrowLimo delivers professional Facebook marketing services and Facebook Ads management in California - Meta Blueprint certified, 6.8x avg ROAS. Free audit.',
    h1 = 'Facebook Ads Management in California',
    subheadline = "Facebook and Instagram together reach over 73% of California's adult population — more people, more often, than any TV network, radio station, or print publication in the state. That reach is exactly why so many California businesses assume Facebook Ads should be easy money, and exactly why so many of them are disappointed. Reach doesn't build revenue on its own. The gap between a campaign that bleeds budget and one that consistently returns 4x, 6x, or 8x comes down to strategy, creative, audience architecture, and how relentlessly the account gets optimized. GrowLimo provides professional Facebook marketing services and Facebook Ads management in California through a Meta Blueprint-certified team that has built and managed paid social for 80+ California businesses, from local service companies in San Diego to e-commerce brands in Los Angeles to B2B firms in the Bay Area.",
    schema
  } = service;

  // Stat Bar Data (5 Pills)
  const statBar = [
    { value: '80+', label: 'California Clients', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { value: 'Meta Blueprint', label: 'Certified Specialists', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { value: '6.8x', label: 'Average Campaign ROAS', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    { value: '4.9★', label: 'Client Rating', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { value: 'Full Creative', label: 'Production Included', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' }
  ];

  // Section 3: 7 Problem / Solution Pairs
  const problemSolutionPairs = [
    {
      problem: 'Targeting audiences that are too broad or too narrow',
      desc: "California's size makes audience sizing deceptively hard. \"California adults interested in fitness\" is too broad — budget gets diluted across millions of low-probability prospects. An 8,000-person hyper-specific audience is too small for Meta's algorithm to exit the learning phase and optimize delivery.",
      fix: 'We build layered audience architectures — cold, warm custom, and lookalike — each sized to sit in the range where Meta\'s algorithm can actually work.'
    },
    {
      problem: 'Creative fatigue killing performance within weeks',
      desc: 'The most common reason a California Facebook campaign goes from 4x ROAS in week one to 1.2x by week six is creative fatigue — California audiences see hundreds of ads a day, and repeated exposure to the same creative kills performance fast.',
      fix: 'We run a systematic creative rotation schedule, testing new variations before the existing ones fatigue, so performance holds steady instead of spiking and crashing.'
    },
    {
      problem: 'No campaign funnel structure — running a single objective',
      desc: 'Many California businesses run one campaign objective, usually Conversions or Traffic, aimed at cold audiences, and expect immediate sales.',
      fix: 'A properly structured account uses Awareness or Reach to introduce cold audiences to the brand, Consideration campaigns to warm them up, and Conversion campaigns to close the audiences who are now familiar with you.'
    },
    {
      problem: 'Ignoring first-party data for audience building',
      desc: 'Businesses sitting on customer email lists, phone databases, or website visitor data are leaving real value on the table by not uploading it into Meta\'s Custom Audiences.',
      fix: 'A lookalike audience built from your best 500 California customers will consistently beat an interest-based cold audience, often by 2–4x in conversion rate.'
    },
    {
      problem: 'Weak ad creative that doesn\'t stop the scroll',
      desc: 'Most California Facebook Ads get stopped by the same generic stock photos and vague value propositions audiences have learned to ignore.',
      fix: 'We build creative that leads with the hook — a provocative question, a compelling before/after, a specific result, a direct price anchor — in the first three seconds, before the scroll wins.'
    },
    {
      problem: 'No post-iOS tracking solution in place',
      desc: 'Since iOS 14.5, a meaningful share of Meta pixel data simply isn\'t tracked, which leaves the algorithm optimizing against incomplete signals.',
      fix: 'We implement Meta\'s Conversions API (CAPI) as a server-side layer that operates independently of browser privacy restrictions, recovering a substantial portion of that lost conversion data.'
    },
    {
      problem: 'Sending paid traffic to a website with no conversion architecture',
      desc: 'Meta traffic landing on a slow homepage with no clear CTA and no mobile optimization wastes every dollar behind it.',
      fix: 'We build dedicated landing pages for every major campaign — fast, mobile-first, and built around a single conversion action matched to the ad\'s exact message and audience.'
    }
  ];

  // Section 4: 8 Services Tabbed Interface
  const servicesTabs = [
    {
      id: 'strategy',
      label: 'Campaign Strategy',
      heading: '1. Campaign Strategy',
      paragraphs: [
        'Every engagement starts with a full California market and competitor analysis, mapping your audience across Meta\'s targeting dimensions — demographics, interests, behaviors, job titles, income, life events — into a funnel architecture covering all three stages of the buyer journey.',
        'Cold audiences meet awareness-stage creative. Warm audiences, the people who\'ve engaged with content or visited your site, get retargeted with conversion-focused messaging. Hot audiences, past customers and highest-intent visitors, get upsell and re-engagement campaigns. You approve the full strategy before a dollar is spent.'
      ]
    },
    {
      id: 'creative',
      label: 'Ad Creative Production',
      heading: '2. Ad Creative Production',
      paragraphs: [
        'Creative is the single biggest variable in Facebook Ads performance — two campaigns with the same California audience and the same budget can produce a 10x swing in ROAS purely on creative quality.',
        'Our team produces every asset in-house: static images built for scroll-stopping impact, carousel ads, video scripts and storyboards built around Meta\'s 3-second hook window, and Story and Reels formats built for vertical mobile placements. We produce 3–5 creative variants per ad set and rotate new ones in before the existing set fatigues.'
      ]
    },
    {
      id: 'audience',
      label: 'Audience Building',
      heading: '3. Audience Building',
      paragraphs: [
        'Campaign performance has a ceiling, and audience quality sets it. We build multi-layered California audiences from every available data source:'
      ],
      bullets: [
        'Custom Audiences: Built from your email list, phone database, website visitors segmented by page and time on site, and page engagers',
        'Lookalike Audiences: California-specific lookalikes built from your highest-value customers at 1%, 2%, and 5% and tested against each other',
        'Interest & Behavior Audiences: Layered interest and demographic targeting for cold prospecting, always benchmarked against lookalike performance',
        'Retargeting Audiences: Segmented by behavior, from add-to-cart abandonment to 75%-plus video views'
      ]
    },
    {
      id: 'leadgen',
      label: 'Lead Generation',
      heading: '4. Lead Generation Campaigns',
      paragraphs: [
        'For California service businesses, contractors, healthcare practices, real estate agents, and B2B companies, Meta\'s native Lead Gen objective is one of the most cost-effective tools available — users submit contact information without ever leaving the app, removing the friction of an external landing page.',
        'We build custom instant forms that qualify leads before they hit your pipeline, connect them to your CRM (Salesforce, HubSpot, Zoho, or anything Zapier-compatible), and trigger automated email and SMS follow-up the moment a lead comes in, because speed-to-contact is the single biggest lever in California lead conversion.'
      ]
    },
    {
      id: 'remarketing',
      label: 'Remarketing Campaigns',
      heading: '5. Remarketing Campaigns',
      paragraphs: [
        'Remarketing is consistently the highest-ROAS layer in a well-structured Meta account.',
        'We segment audiences by recency and behavior — someone who visited your pricing page yesterday sees different messaging than someone who visited the homepage three weeks ago and never came back — so every retargeting dollar goes to the highest-probability prospect with the most relevant message.'
      ]
    },
    {
      id: 'advantage',
      label: 'Advantage+ Management',
      heading: '6. Advantage+ Management',
      paragraphs: [
        'Meta\'s Advantage+ Shopping and Audience campaigns use machine learning to automate targeting and delivery at scale, and they can produce excellent results for California e-commerce and DTC brands when the creative, conversion events, and first-party data feeding them are set up correctly.',
        'We run Advantage+ alongside manual campaigns, continuously rebalancing budget between automated and manual structures based on which is actually performing.'
      ]
    },
    {
      id: 'capi',
      label: 'Conversions API & Pixel',
      heading: '7. Conversions API & Pixel',
      paragraphs: [
        'Accurate tracking is the foundation everything else stands on.',
        'Browser pixel data alone significantly undercounts conversions post-iOS, so we implement CAPI as a server-side layer that recovers much of that lost signal, alongside domain verification, aggregated event measurement, and event deduplication — a technical setup a surprising number of agencies skip entirely.'
      ]
    },
    {
      id: 'landing',
      label: 'Landing Page Design',
      heading: '8. Landing Page Design',
      paragraphs: [
        'Facebook traffic behaves differently than Google Search traffic — a Facebook user didn\'t go looking for you, your ad interrupted their scroll.',
        'The landing page has to work harder: validate the ad\'s promise instantly, build trust fast, and create enough desire to convert someone who wasn\'t actively shopping. We build Facebook-specific pages with sub-2-second mobile load times, an above-the-fold hook that mirrors the ad headline, social proof, and one frictionless CTA.'
      ]
    }
  ];

  // Section 5: 3 Case Studies
  const caseStudies = [
    {
      title: 'LA E-Commerce',
      subtitle: '6.8x ROAS (LA Skincare Brand)',
      challenge: 'A Los Angeles direct-to-consumer skincare brand came to us spending $4,000/month at a 1.4x ROAS — one Conversions campaign aimed at a broad "women 25–45 interested in beauty" audience, three static ads unchanged in four months, no remarketing, no Advantage+ Shopping test, and a misconfigured pixel tracking page views as purchases.',
      solution: 'We rebuilt the account with a Broad Advantage+ Shopping campaign for prospecting, a manual campaign built on lookalikes from the brand\'s 3,200-customer email list, and remarketing segmented by product page visits, add-to-cart, and initiated checkout, backed by 12 new creative variants across static, carousel, and video.',
      metrics: [
        { value: '1.4x → 6.8x', label: 'ROAS Increase in 90 Days' },
        { value: '$5.6k → $27.2k', label: 'Monthly Meta Ads Revenue' },
        { value: '11.2x ROAS', label: 'Cart Remarketing ROAS' },
        { value: '$4.20 CPL', label: 'Subscription Box Lead Cost' }
      ]
    },
    {
      title: 'San Diego Real Estate',
      subtitle: '$96,000 Commission Revenue',
      challenge: 'A San Diego luxury real estate agent was relying entirely on referrals, which had declined sharply over 18 months, with no digital lead generation system in place.',
      solution: 'We built a Lead Gen campaign targeting San Diego homeowners with $150,000+ household income and property-upgrade interest signals, offering a free "2026 San Diego Luxury Home Value Report" through Meta\'s instant lead form, routed straight into Salesforce with same-day email and SMS follow-up, alongside a lookalike campaign built from the agent\'s 180 past clients.',
      metrics: [
        { value: '140 Leads', label: 'Qualified Leads in 90 Days' },
        { value: '$31 CPL', label: 'Average Cost-Per-Lead' },
        { value: '4 Listings', label: 'Listings Secured ($1.2M avg)' },
        { value: '$96,000', label: 'Est. Commission ($4,340 spend)' }
      ]
    },
    {
      title: 'Sacramento Gym',
      subtitle: '14.8x ROAS (3-Location Franchise)',
      challenge: 'A three-location Sacramento gym was spending $1,200/month boosting Facebook Page posts — the least efficient form of Meta advertising — with no way to attribute memberships to the spend.',
      solution: 'We migrated everything into Ads Manager, built a proper campaign structure, and ran a Lead Gen campaign offering a 14-day free trial to adults 22–55 within 8 miles of each location, paired with retargeting to website visitors and Reels viewers, using real member results and facility photography instead of stock images.',
      metrics: [
        { value: '67 Members', label: 'New Memberships in 60 Days' },
        { value: '$54 Cost', label: 'Average Cost per Membership' },
        { value: '14.8x ROAS', label: 'Lifetime Member Value ROAS' },
        { value: '$1,200/mo', label: 'Same Budget as Boosted Posts' }
      ]
    }
  ];

  // Section 6: 8 Industries Grid
  const industries = [
    { name: 'E-Commerce & Direct-to-Consumer', desc: 'Advantage+ Shopping campaigns, dynamic product ads, abandoned cart retargeting, post-purchase upsell sequences, and subscription funnels — strongest ROI for California brands with margins above 40%.' },
    { name: 'Real Estate', desc: 'Buyer and seller lead generation, listing-specific video ads, neighborhood-targeted prospecting, open house promotion, and CRM integration for automatic routing and follow-up.' },
    { name: 'Healthcare & Medical Aesthetics', desc: 'HIPAA-compliant ad copy, procedure-specific campaigns, before/after creative for cosmetic services, and appointment-booking lead gen with proper consent management.' },
    { name: 'Home Services', desc: 'Radius-targeted local awareness, seasonal promotion for HVAC and landscaping, instant-quote lead generation, and before/after project photography for roofing, remodeling, and pest control.' },
    { name: 'Fitness & Wellness', desc: 'Membership acquisition with free trial offers, class enrollment ads, video content promotion, and local radius targeting across California metro areas.' },
    { name: 'Restaurants & Hospitality', desc: 'Local awareness with menu highlights, event promotion, reservation integration, food photography-led creative, and lookalikes from loyalty databases.' },
    { name: 'Education & Coaching', desc: 'Course enrollment lead generation, webinar registration, free resource funnels, and retargeting for audiences who engaged but haven\'t enrolled.' },
    { name: 'Automotive', desc: 'Vehicle-specific dynamic ads, dealership local awareness, test drive lead gen, and service department promotion targeting existing owners.' }
  ];

  // Section 7: 6 Regional City Cards
  const regionalCities = [
    { city: 'Los Angeles', note: 'The largest California Meta Ads market — entertainment, fashion, beauty, food, fitness, luxury services. Neighborhood-level geo-targeting (Beverly Hills, Silver Lake, Culver City, Pasadena) with creative built around Southern California\'s consumer aesthetic.' },
    { city: 'San Diego', note: 'Strong local services, real estate, healthcare, and military-community demographics, with geo-targeted campaigns across La Jolla, Mission Valley, Chula Vista, and North County.' },
    { city: 'San Francisco & Bay Area', note: 'Tech professionals, high-income households, and B2B demographics — often paired with LinkedIn Ads in an integrated strategy.' },
    { city: 'Sacramento', note: 'Government workers, healthcare professionals, family-oriented demographics, and a strong home services market, with seasonal creative for Central Valley climate and local community campaigns.' },
    { city: 'Orange County', note: 'An affluent consumer market — premium brands, cosmetic services, real estate, luxury retail — where higher household income supports higher acquisition costs at strong LTV-to-CAC ratios.' },
    { city: 'Fresno & Central Valley', note: 'Lower CPMs and CPCs than coastal markets, creating strong cost-per-lead efficiency for local service and retail businesses.' }
  ];

  // Section 9: 3 Testimonials
  const testimonials = [
    {
      quote: "GrowLimo took our LA skincare brand from a stagnating 1.4x ROAS to a consistent 6.8x ROAS in less than three months. Their creative rotation strategy is incredible — our ads never get stale.",
      author: "Sarah Jenkins",
      role: "Founder",
      company: "Aura Skincare",
      location: "Los Angeles, CA"
    },
    {
      quote: "The native lead forms we built with GrowLimo have completely changed our San Diego real estate business. We got 140 highly qualified seller leads in 90 days and closed 4 luxury listings.",
      author: "Marcus Reynolds",
      role: "Principal Agent",
      company: "Reynolds Luxury Group",
      location: "San Diego, CA"
    },
    {
      quote: "We were wasting $1,200/month boosting posts with zero conversion tracking. GrowLimo built a proper membership funnel that doubled our monthly member sign-ups in Sacramento.",
      author: "Dave Miller",
      role: "Owner",
      company: "Peak Fitness",
      location: "Sacramento, CA"
    }
  ];

  // Section 10: 6 Timeline Phases
  const processPhases = [
    { phase: 'Phase 1', timeline: 'Week 1', title: 'Free Facebook Ads Audit & Market Analysis', desc: 'A full review of your existing Meta Ads account — campaign structure, audience architecture, creative performance history, conversion tracking accuracy, Pixel/CAPI configuration — or, for new accounts, a competitive analysis of your California competitors\' strategies through Meta\'s Ad Library.' },
    { phase: 'Phase 2', timeline: 'Week 1–2', title: 'Strategy, Audience Design & Creative Brief', desc: 'A complete campaign strategy: funnel architecture, audience segments, objectives by funnel stage, placement recommendations, and a detailed creative brief for every format required. You approve it before production or build begins.' },
    { phase: 'Phase 3', timeline: 'Week 2–3', title: 'Creative Production', desc: 'Static images, carousel designs, video scripts, and copy variations — 3 to 5 variants per ad set for immediate A/B testing, reviewed against Meta\'s advertising policies before submission to avoid disapproval delays.' },
    { phase: 'Phase 4', timeline: 'Week 3', title: 'Campaign Build, Pixel/CAPI Setup & Launch', desc: 'Every campaign, ad set, and ad built in Ads Manager per the approved architecture, with Pixel and CAPI verified, landing pages QA-checked for mobile performance and event firing, and a full pre-launch checklist before anything goes live.' },
    { phase: 'Phase 5', timeline: 'Ongoing', title: 'Weekly Optimization & Creative Rotation', desc: 'Weekly reviews of performance data, underperforming ad sets paused, new creative rotated in before fatigue, audience targeting adjusted against real delivery data, new offers and CTAs tested, frequency monitored to prevent burnout, and budget rebalanced by ROAS.' },
    { phase: 'Phase 6', timeline: 'Ongoing', title: 'Monthly Reporting & Quarterly Scaling Reviews', desc: 'Monthly reports covering reach, impressions, link clicks, CTR, CPC, leads or purchases, cost-per-result, and ROAS in plain English, plus quarterly reviews on scaling top performers, expanding to new California city audiences, or adding new campaign types.' }
  ];

  // Section 11: 7 FAQs
  const faqs = [
    {
      question: 'How much does Facebook Ads management cost in California?',
      answer: "Facebook Ads management fees in California typically range from $500 to $3,500/month depending on campaign complexity and the number of ad sets. GrowLimo's management starts at $497/month on top of your ad spend budget, with no long-term contracts required."
    },
    {
      question: 'How quickly will Facebook Ads generate results for my California business?',
      answer: "Campaigns typically enter Meta's learning phase within 24–48 hours of launch and can generate initial leads or sales within the first few days. Full optimization usually takes 4–6 weeks, as the algorithm exits the learning phase and delivery stabilizes."
    },
    {
      question: 'What is the difference between Facebook Ads and Google Ads for California businesses?',
      answer: 'Google Ads captures existing demand — people already searching for your product or service. Facebook Ads creates and captures demand, reaching people before they actively search, based on demographics, interests, behaviors, and life events. Both matter; the strongest California strategies use both together.'
    },
    {
      question: 'Does GrowLimo manage Instagram Ads as well as Facebook?',
      answer: 'Yes. Facebook and Instagram Ads run through the same Meta Ads platform. We manage campaigns across Facebook Feed, Instagram Feed, Stories, Reels, Facebook Marketplace, and the Audience Network within a single integrated strategy.'
    },
    {
      question: 'What budget do I need to start Facebook Ads in California?',
      answer: 'California businesses can run effective campaigns starting at $1,000–$1,500/month in ad spend. Highly competitive markets like Los Angeles, or industries with high acquisition costs, may need $2,500–$5,000/month to exit the learning phase quickly and generate meaningful optimization data.'
    },
    {
      question: 'Does GrowLimo create the Facebook ad creative and copy?',
      answer: 'Yes. We provide full creative production — ad copywriting, static image design, carousel design, and video scripting. Creative is the single biggest variable in Facebook Ads performance, and our team produces and A/B tests it continuously.'
    },
    {
      question: 'What industries does GrowLimo run Facebook Ads for in California?',
      answer: 'E-commerce, real estate, healthcare, dental, home services, automotive, restaurants, fitness, education, legal services, and B2B lead generation.'
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
      {/* SECTION 1: HERO (Trust & Authority + Social Proof) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] text-white pt-[90px] md:pt-[110px] pb-[70px] md:pb-[90px] relative overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(24,119,242,0.04)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left 7 Columns: Headline & 5 Stat Pills */}
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

              {/* 5 Stat Bar Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 w-full mb-6">
                {statBar.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-3 shadow-md hover:border-[#00C68A]/40 transition-all duration-200"
                  >
                    <span className="text-[#00C68A] font-sora font-extrabold text-[17px] mb-0.5 leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[#F0F4FF] font-sans text-[11px] font-medium leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                Get Your Free Facebook Ads Audit →
              </Link>
            </div>

            {/* Right 5 Columns: Lead Form Card */}
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
      {/* SECTION 2: WHY FACEBOOK ADS IS NON-NEGOTIABLE FOR CA BUSINESSES */}
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
              With more than 39 million residents and some of the highest consumer spending per capita in the country, California is one of the most valuable advertising markets in the world — and Meta's platform lets you target the exact people most likely to buy, based on demographics, interests, behaviors, life events, and purchase history, rather than hoping the right person happens to be watching.
            </p>

            <p className="bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              The real advantage of Facebook Ads is <strong className="text-[#00C68A]">demand creation</strong>, not demand capture. Google Ads reaches people who are already searching for what you sell — an essential channel, but a reactive one. Facebook Ads reaches people before they search, building the awareness and desire that eventually turns into direct search intent. The strongest California marketing strategies run both: Google Ads to capture existing demand, Facebook Ads to create new demand. Businesses running both consistently outperform businesses running either channel alone.
            </p>

            <p className="bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              The landscape has also gotten more complicated. Apple's iOS privacy changes cut into Meta's tracking accuracy, the platform has pushed hard toward Advantage+ automation, and creative fatigue — the rapid decay in ad performance once an audience has seen the same creative too many times — is now a constant, not an occasional problem. Managing all of that well takes active, hands-on management. It's not something a boosted post or a stale ad set left running for weeks can do for you.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHY MOST FACEBOOK MARKETING SERVICES FALL SHORT (7 Alternating Pairs) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-left max-w-[860px] mb-12">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              ACCOUNT AUDIT DIAGNOSTICS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Why Most Facebook Marketing Services Fall Short
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
              After auditing dozens of California Facebook Ads accounts across industries and spend levels, the same structural failures keep showing up. Here's what we find, and what we do about each one:
            </p>
          </div>

          <div className="space-y-4">
            {problemSolutionPairs.map((pair, idx) => {
              const isOpen = openProblem === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[18px] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenProblem(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-sora font-extrabold text-[13px] flex items-center justify-center shrink-0">
                        ✕
                      </span>
                      <h3 className="font-sora font-bold text-[16px] md:text-[18px] text-[#F0F4FF] leading-snug">
                        Problem {idx + 1}: {pair.problem}
                      </h3>
                    </div>
                    <span className={`w-8 h-8 rounded-full bg-[#162035] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-left border-t border-[rgba(255,255,255,0.05)] space-y-4">
                      <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                        <strong className="text-red-400">What happens:</strong> {pair.desc}
                      </p>
                      <div className="p-4 rounded-xl bg-[#162035] border-l-4 border-[#00C68A] text-[#F0F4FF] font-sans text-[14.5px]">
                        <strong className="text-[#00C68A]">GrowLimo's Fix:</strong> {pair.fix}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: OUR SERVICES (8 Services Tabbed Interface) */}
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
              GrowLimo runs Facebook and Instagram Ads end to end — strategy, creative production, campaign build, ongoing optimization, and transparent reporting.
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
                      : 'bg-[#162035] text-[#8FA8C8] hover:text-[#F0F4FF] border border-[rgba(255,255,255,0.06)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left transition-all duration-300">
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

            {servicesTabs[activeTab].bullets && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {servicesTabs[activeTab].bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex gap-3 items-start bg-[#0C1220] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
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
      {/* SECTION 5: CASE STUDIES (3 Cards with Prominent Hard Numbers) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              REAL REVENUE METRICS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Facebook Ads Management Case Studies From California
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
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
                      <div key={mIdx} className="bg-[#162035] p-3.5 rounded-xl border border-[rgba(255,255,255,0.05)]">
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
                      <strong className="text-[#F0F4FF]">Before GrowLimo:</strong> {cs.challenge}
                    </p>
                    <p className="text-[#8FA8C8]">
                      <strong className="text-[#00C68A]">What Changed:</strong> {cs.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: INDUSTRIES SERVED (8 Icon Grid) */}
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
              Facebook Ads strategy is highly industry-specific — what works for an LA e-commerce brand looks nothing like what works for a San Diego dental practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center text-[#00C68A] mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
      {/* SECTION 7: CALIFORNIA CITIES (6 Regional Cards) */}
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
              California's regional diversity means a Los Angeles audience behaves nothing like a Sacramento or Fresno one. Our geo-targeting reflects that market by market:
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

            <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-8">
              Every campaign is built, managed, and optimized by Meta Blueprint certified specialists — the highest standard of validation Meta offers for Facebook and Instagram media buyers, covering advertising APIs, campaign design, audience building, catalog management, and conversion event tracking. We don't hand your budget to junior account managers or generalist social media posters. Your media spend is treated like a performance investment portfolio, tracked and optimized daily.
            </p>

            {/* Editorial Info Component */}
            <div className="bg-[#0C1220] border border-[rgba(0,198,138,0.2)] rounded-[16px] p-6 space-y-3 font-sans text-[14px]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#F0F4FF]">
                <strong className="text-[#00C68A] font-sora">Reviewed by:</strong>
                <span>
                  <a
                    href="https://www.linkedin.com/in/usama-zulfiqar-3a301a242/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00C68A] font-semibold underline hover:text-[#0FB786] transition-colors cursor-pointer"
                  >
                    Usama Zulfiqar
                  </a>
                  , Senior Meta Ads Strategist at GrowLimo — 7+ years managing California Facebook and Instagram campaigns, Meta Blueprint certified.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#8FA8C8] border-t border-[rgba(255,255,255,0.06)] pt-3">
                <strong className="text-[#00C68A] font-sora">Last updated:</strong>
                <span>Q2 2026 — Updated with latest Advantage+ benchmarks & CAPI protocols.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: TESTIMONIALS (3-Column Card Layout) */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              What California Businesses Say About Our Facebook Marketing Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex gap-1 text-[#00C68A] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="font-sans text-[15px] leading-[1.8] text-[#F0F4FF] italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="border-t border-[rgba(255,255,255,0.08)] pt-4">
                  <span className="font-sora font-bold text-[16px] text-[#F0F4FF] block">
                    {t.author}
                  </span>
                  <span className="font-sans text-[13px] text-[#8FA8C8] block">
                    {t.role}, {t.company} — <strong className="text-[#00C68A] font-normal">{t.location}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: OUR PROCESS (6 Phases Timeline) */}
      {/* ========================================================================= */}
      <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left max-w-[860px] mb-14">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              PHASED CAMPAIGN ROADMAP
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
              Our Facebook Ads Management Process
            </h2>
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
      {/* SECTION 11: FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
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
              STOP BLEEDING AD BUDGET
            </span>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
              Get Started With Professional Facebook Marketing Services in California
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[760px] mx-auto mb-6">
              Stop wasting ad budget on set-and-forget boosted posts or broad interest targeting that doesn't convert. Get a free, comprehensive Meta Ads audit from our Blueprint-certified specialists — we'll review your account structure, creative performance, and pixel tracking, and show you exactly where you're losing budget and how to reach a 4x to 8x ROAS.
            </p>

            <p className="font-sans text-[13px] text-[#00C68A] font-semibold mb-8 max-w-[760px] mx-auto">
              📍 Serving California Statewide | Meta Blueprint Certified | 80+ CA Clients | 6.8x Avg ROAS | Month-to-Month, No Lock-In
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
