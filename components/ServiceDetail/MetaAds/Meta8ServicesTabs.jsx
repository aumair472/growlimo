import { useState } from 'react';

export default function Meta8ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const servicesTabs = [
    {
      id: 'funnel',
      label: 'Full-Funnel Strategy',
      heading: 'Full-Funnel Meta Campaign Strategy & Architecture',
      paragraphs: [
        'Meta Ads underperform when built as a single campaign chasing cold audiences with a conversion objective — California buyers rarely convert the first time they see a brand.',
        'We design three-stage funnels for every client: a top-of-funnel stage using Awareness or Reach to introduce cold audiences through high-impact video, Reels, or carousel creative; a middle-of-funnel stage using Traffic or Engagement to warm interested audiences with value-led content and testimonials; and a bottom-of-funnel stage using Conversions or Lead Generation to close the audiences who\'ve moved through the first two stages and are now familiar with the brand.'
      ]
    },
    {
      id: 'creative',
      label: 'Creative Production',
      heading: 'Meta Ad Creative Production — Static, Carousel, Video & Reels',
      paragraphs: [
        'In Meta\'s current algorithm, creative is targeting. The hook, the opening line, and the offer framing determine which segment of your California audience the algorithm finds — generic, stock-photo creative doesn\'t just underperform, it trains the algorithm to find the wrong people.',
        'Our team produces static images built for scroll-stopping impact, carousel formats for product ranges and social proof, video scripts built around the 3-second hook window, Reels formatted for vertical mobile placement, and Story ads with swipe-up CTAs. We ship 3–5 variants per ad set and rotate new ones in systematically before performance degrades.'
      ]
    },
    {
      id: 'audiences',
      label: 'Audience Architecture',
      heading: 'Audience Architecture & First-Party Data Strategy',
      paragraphs: [
        'The most valuable audiences aren\'t interest-based cold audiences — they\'re custom audiences built from people who already know your business.',
        'We build Customer List Custom Audiences from your email and phone databases, Website Custom Audiences segmented by page and recency, Video Engagement Audiences segmented by watch depth, Page Engagement Audiences from likes, comments, and shares, and California-specific 1%, 2%, and 5% Lookalike Audiences built from your best customers.'
      ]
    },
    {
      id: 'capi',
      label: 'CAPI & Tracking',
      heading: 'Conversions API (CAPI) & Technical Tracking Setup',
      paragraphs: [
        'Accurate conversion data is what fuels Meta\'s optimization algorithm — without it, you\'re paying Meta to optimize for outcomes it can\'t measure.',
        'We implement CAPI as standard on every account, sending events server-side and bypassing browser-level privacy restrictions, along with domain verification, Aggregated Event Measurement configuration, event deduplication, and match quality optimization. This technical foundation is what separates accounts that scale from accounts that plateau, and it\'s the piece most agencies skip.'
      ]
    },
    {
      id: 'advantage',
      label: 'Advantage+ Management',
      heading: 'Advantage+ Campaign Management',
      paragraphs: [
        'Meta\'s Advantage+ suite can be an exceptional performer for California e-commerce businesses with mature pixel data and strong creative libraries — or a quiet budget drain without the data to support it.',
        'We launch Advantage+ once manual campaigns have generated enough conversion signal to matter, run both structures in parallel to compare performance, and rebalance budget toward whichever is actually winning.'
      ]
    },
    {
      id: 'leadgen',
      label: 'Lead Generation',
      heading: 'Meta Lead Generation Campaigns',
      paragraphs: [
        'For service businesses, B2B companies, real estate agents, and healthcare practices where the conversion is a consultation or quote request, Meta\'s native Lead Gen campaigns are one of the most cost-effective inbound channels available — users submit information without ever leaving the app.',
        'We build custom instant forms that qualify leads before they hit your pipeline, connect to your CRM, and trigger automated follow-up at the moment of submission, because the first business to respond wins the lead most of the time.'
      ]
    },
    {
      id: 'retargeting',
      label: 'Retargeting & Dynamic Ads',
      heading: 'Meta Retargeting & Dynamic Ad Campaigns',
      paragraphs: [
        'Retargeting is the highest-ROAS layer in almost every well-structured account, because these audiences are already warm.',
        'We segment product page visitors, add-to-cart and initiate-checkout audiences, lead form abandoners, and past customers, each with messaging matched to their exact hesitation, and layer in dynamic product ads that show each visitor the specific item they viewed on your site.'
      ]
    },
    {
      id: 'landing',
      label: 'Landing Page CRO',
      heading: 'Landing Page Optimization for Meta Traffic',
      paragraphs: [
        'A Meta visitor wasn\'t looking for you — your ad interrupted their scroll, and the landing page has three to five seconds to justify that interruption.',
        'We build dedicated pages for every major campaign: sub-2-second mobile load times, an above-the-fold hook that continues the ad\'s message, social proof, a single conversion CTA, and mobile-first layout, since over 85% of California Meta traffic arrives on a phone.'
      ]
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-12">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            FULL-STACK META CAPABILITIES
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Our Meta Advertising Agency Services for California Businesses
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            GrowLimo delivers a complete, integrated Meta Ads system, engineered for California's competitive paid social landscape and calibrated to your specific business model and acquisition economics. Facebook, Instagram, Messenger, Audience Network, Reels, and Stories — one strategy, every placement.
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

        {/* Active Tab Panel */}
        <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left transition-all duration-300">
          <h3 className="text-[22px] md:text-[28px] font-extrabold font-sora text-[#F0F4FF] leading-snug mb-4">
            {servicesTabs[activeTab].heading}
          </h3>

          <div className="space-y-4 font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
            {servicesTabs[activeTab].paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
