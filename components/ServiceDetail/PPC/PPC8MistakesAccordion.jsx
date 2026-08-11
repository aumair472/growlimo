import { useState } from 'react';

export default function PPC8MistakesAccordion() {
  const [openMistake, setOpenMistake] = useState(null);

  const mistakes = [
    {
      title: 'Broad match keywords without negative keyword protection',
      desc: 'The single biggest source of wasted budget. Ads show for searches with nothing to do with the business.',
      fix: 'We build negative keyword architectures of 300–500+ terms from day one.'
    },
    {
      title: 'Bloated ad groups killing Quality Score',
      desc: 'Ad groups with 20 to 50-plus loosely related keywords prevent message-match alignment — and a high Quality Score is what lowers your actual CPC by 30–50%.',
      fix: 'We rebuild with 3–5 tightly related keywords per group.'
    },
    {
      title: 'No conversion tracking in place',
      desc: 'Running California PPC without proper conversion tracking is driving blind.',
      fix: 'We implement Google Tag Manager, call tracking with dynamic number insertion, form submission events, and e-commerce purchase tracking before launch, not after.'
    },
    {
      title: 'Sending expensive traffic to the homepage',
      desc: 'A homepage has to serve every visitor at once. A PPC landing page only has to serve one, with one message and one CTA.',
      fix: 'Routing $40-per-click traffic to a generic homepage is one of the most common and most expensive mistakes we fix.'
    },
    {
      title: 'No remarketing campaigns running',
      desc: 'The average California business website converts just 2–5% of first-time visitors.',
      fix: 'Without remarketing, the other 95–98% represent paid clicks that generate zero second-chance revenue.'
    },
    {
      title: 'Zero ad copy testing',
      desc: 'A single static ad variation means flying blind on messaging permanently.',
      fix: 'We run a minimum of three ad copy variants per group, testing headlines, descriptions, and CTAs against each other continuously.'
    },
    {
      title: 'Ignoring device and location bid adjustments',
      desc: 'San Francisco users may convert three times better than Fresno for the same service. Mobile may convert at half the rate of desktop.',
      fix: 'We build granular bid adjustments by city, zip code, device, time of day, and day of week.'
    },
    {
      title: 'Smart campaigns without a data foundation',
      desc: "Google's automated bidding is genuinely powerful — after 30 to 50 conversions a month, minimum. Turning on Smart Bidding for a new account with zero conversion history is a near-guaranteed way to overspend.",
      fix: 'We collect the data first, then automate.'
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

        <div className="text-left max-w-[860px] mb-12">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            ACCOUNT DIAGNOSTICS & AUDITS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            8 PPC Mistakes Draining California Ad Budgets Right Now
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            Across Google Ads, Bing Ads, and Meta, these eight failures show up in the overwhelming majority of underperforming California accounts we review:
          </p>
        </div>

        <div className="space-y-4">
          {mistakes.map((m, idx) => {
            const isOpen = openMistake === idx;
            return (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[18px] overflow-hidden transition-all duration-200 text-left"
              >
                <button
                  onClick={() => setOpenMistake(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-sora font-extrabold text-[13px] flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="font-sora font-bold text-[16px] md:text-[18px] text-[#F0F4FF] leading-snug">
                      {m.title}
                    </h3>
                  </div>
                  <span className={`w-8 h-8 rounded-full bg-[#162035] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[rgba(255,255,255,0.05)] space-y-4">
                    <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                      <strong className="text-red-400">The Failure:</strong> {m.desc}
                    </p>
                    <div className="p-4 rounded-xl bg-[#162035] border-l-4 border-[#00C68A] text-[#F0F4FF] font-sans text-[14.5px]">
                      <strong className="text-[#00C68A]">GrowLimo Fix:</strong> {m.fix}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Highlight Callout */}
        <div className="mt-8 p-6 rounded-[16px] bg-[#162035] border-l-4 border-[#00C68A] text-left">
          <p className="font-sans text-[15px] leading-[1.75] font-semibold text-[#F0F4FF]">
            💡 Fixing these eight problems is often what takes a California PPC account from burning $3,200/month for 17 leads to generating 72 leads on the identical budget — the exact outcome we produced for a San Diego plumbing client in 60 days.
          </p>
        </div>

      </div>
    </section>
  );
}
