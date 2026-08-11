import { useState } from 'react';
import Link from 'next/link';

export default function PPC8ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const servicesTabs = [
    {
      id: 'search',
      label: 'Google Ads Search',
      heading: 'Google Ads Search Campaign Management',
      paragraphs: [
        'Search campaigns capture the highest-intent traffic in digital marketing — people actively searching for exactly what you sell, right now. For California businesses where timing matters (emergency plumber, urgent dental care, same-day HVAC repair), Search is the most direct path from ad spend to revenue.',
        'We build campaigns with keyword clusters mapped to dedicated ad groups, ad copy written to mirror each query, and landing pages built around the specific intent behind each cluster — layered with negative keywords pulled from your search term report, industry exclusions, and competitor brand terms, plus ad schedule bid adjustments tuned to your real conversion windows.'
      ],
      link: { text: 'Explore Full Google Ads Management Services →', url: '/google-ads-management-california/' }
    },
    {
      id: 'pmax',
      label: 'Performance Max',
      heading: 'Performance Max Campaign Management',
      paragraphs: [
        'Performance Max deploys across Search, Display, YouTube, Gmail, Discover, and Maps simultaneously, using machine learning to chase conversions across every surface at once. Managed well, it\'s one of the strongest tools in a California advertiser\'s arsenal.',
        'Managed poorly, it becomes an unaccountable drain with no visibility into where the money went. We build PMax campaigns around properly structured asset groups, rich audience signals from your real customer data, strong creative across every format, and conversion goals precise enough that Google\'s algorithm knows exactly what success looks like — while keeping parallel Search campaigns running to protect your highest-value branded and exact-match queries from PMax\'s broad targeting.'
      ]
    },
    {
      id: 'remarketing',
      label: 'Remarketing & Retargeting',
      heading: 'Remarketing & Retargeting Campaigns',
      paragraphs: [
        'Remarketing targets the 95–98% of your California visitors who didn\'t convert the first time, following them across Search, Display, and YouTube with relevant messaging as they keep browsing. These are your warmest prospects — they already know the brand and just need the right nudge.',
        'We segment audiences by actual behavior (viewed a specific service page, spent 60-plus seconds on site, started a form but didn\'t finish) and match each segment to messaging built for its stage in the buying journey.'
      ]
    },
    {
      id: 'shopping',
      label: 'Google Shopping',
      heading: 'Google Shopping Campaigns for California E-Commerce',
      paragraphs: [
        'For California e-commerce, Shopping is often the single highest-ROAS channel available, since shoppers see the product, price, and brand before they ever click.',
        'We run a full feed optimization workflow — front-loaded keyword titles, accurate pricing and availability, custom labels for bid segmentation, and regular disapproval monitoring — using a priority-bidding structure that separates brand, generic, and competitor queries. That typically lifts Shopping ROAS 30–50% over a single flat campaign.'
      ]
    },
    {
      id: 'meta',
      label: 'Meta Ads (FB & IG)',
      heading: 'Meta Ads Management (Facebook & Instagram) for California',
      paragraphs: [
        'Meta reaches over 70% of California\'s adult population across Facebook and Instagram, making it one of the strongest awareness and demand-generation tools available for consumer-facing businesses.',
        'Meta typically captures interest-stage audiences rather than bottom-of-funnel buyers, but it\'s exceptionally effective for brand recognition, retargeting warm audiences, and native lead-form generation.'
      ],
      link: { text: 'Explore Full Facebook Ads Management Services →', url: '/facebook-ads-management-california/' }
    },
    {
      id: 'bing',
      label: 'Microsoft / Bing Ads',
      heading: 'Microsoft / Bing Ads for California Businesses',
      paragraphs: [
        'Google dominates California search, which is exactly why Bing gets overlooked — and why that oversight creates an opening.',
        'Bing\'s California audience skews toward higher-income households (37% higher average income than Google\'s), CPCs run 20–35% lower than equivalent Google keywords, and competition is noticeably thinner in most niches. For healthcare, legal, financial services, and B2B especially, Bing can deliver exceptional cost-per-lead at a fraction of Google\'s price.'
      ]
    },
    {
      id: 'youtube',
      label: 'YouTube Advertising',
      heading: 'YouTube Advertising for California Businesses',
      paragraphs: [
        'YouTube is the second-largest search engine in the world, and California\'s engagement with it ranks among the highest of any state.',
        'Pre-roll and skippable in-stream ads let California businesses reach in-market segments, custom intent audiences, and customer match lists with precision most platforms can\'t match.'
      ]
    },
    {
      id: 'landing',
      label: 'Landing Pages & CRO',
      heading: 'PPC Landing Page Design & Conversion Rate Optimization',
      paragraphs: [
        'The most technically flawless PPC campaign in California still underperforms without a landing page built to convert paid traffic specifically.',
        'We design dedicated pages for every major campaign — single-focus, headline matched to the ad\'s exact message, real social proof, sub-2-second mobile load times, and one CTA instead of several competing for attention. Our California PPC landing pages average a 12–18% conversion rate against an industry average of 2–5%.'
      ]
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-12">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            FULL-SPECTRUM SERVICES
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Our PPC Services for California Businesses
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            GrowLimo runs full-spectrum PPC services across every major paid advertising platform. We determine which channel mix delivers the best ROAS for your specific California market and industry, then build, manage, and optimize each one to the same standard.
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

          <div className="space-y-4 font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-6">
            {servicesTabs[activeTab].paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>

          {servicesTabs[activeTab].link && (
            <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
              <Link
                href={servicesTabs[activeTab].link.url}
                className="inline-flex items-center gap-2 text-[#00C68A] hover:text-[#0FB786] font-sora font-bold text-[14px] underline transition-colors cursor-pointer"
              >
                {servicesTabs[activeTab].link.text}
              </Link>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
