export default function DMCaseStudies() {
  const caseStudies = [
    {
      title: 'Los Angeles HVAC Company',
      subtitle: 'SEO Drives 323% Lead Growth',
      challenge: 'An 11-year-old family-owned LA HVAC company ranked on page 4 for core terms with fewer than 20 organic visits/month and relied entirely on paid referrals. GrowLimo performed a full technical SEO audit identifying critical issues: a slow-loading site (7.2 second load time), missing title tags on 14 pages, duplicate content across service pages, and zero local citations.',
      solution: 'We rebuilt the site\'s technical foundation, created individual SEO-optimized pages for every service and every Los Angeles neighborhood they served, and built a local citation profile across 40+ California business directories.',
      metrics: [
        { value: '+323%', label: 'Organic Lead Growth' },
        { value: 'Page 1', label: 'Core LA Terms Ranking' },
        { value: '40+', label: 'California Citations Built' },
        { value: 'Sub-2s', label: 'Mobile Page Speed Achieved' }
      ]
    },
    {
      title: 'San Diego Medical Spa',
      subtitle: 'Google Ads ROAS of 7.1x',
      cityFlagNote: '[City Discrepancy Flag: Label is "San Diego" here vs "Los Angeles" on PPC/Google Ads pages]',
      challenge: 'A $5,000/month Google Ads account from a previous agency generated only a 1.6x ROAS, with no audience layering, a single catch-all ad group, and landing pages with six competing CTAs.',
      solution: 'GrowLimo rebuilt the campaign with individual ad groups for each high-margin treatment, wrote ad copy anchored in the spa\'s specific social proof (4.9★ rating, 500+ treatments performed), designed service-specific landing pages with a single CTA, added a remarketing layer targeting previous site visitors with a time-sensitive consultation offer, and implemented call tracking.',
      metrics: [
        { value: '7.1x', label: 'Google Ads ROAS (from 1.6x)' },
        { value: '$5,000/mo', label: 'Managed Ad Budget' },
        { value: 'Single-CTA', label: 'Landing Page Architecture' },
        { value: '100%', label: 'Call Tracking Attribution' }
      ]
    },
    {
      title: 'Bay Area SaaS Startup',
      subtitle: 'Content Marketing Builds 5,400 Monthly Visitors',
      challenge: 'A San Francisco B2B SaaS company had 210 organic visits/month, all branded, no blog, and no keyword strategy.',
      solution: 'GrowLimo built a 6-month content roadmap targeting 47 bottom-of-funnel and middle-of-funnel keywords mapped to their buyer journey. We published 24 SEO-optimized articles, created a resource hub with downloadable templates (which built backlinks passively), implemented a strategic internal linking architecture connecting blog content to service pages, and added author bios with LinkedIn profiles for E-E-A-T compliance.',
      metrics: [
        { value: '5,400/mo', label: 'Organic Monthly Visitors' },
        { value: '47 Keywords', label: 'Targeted in 6-Mo Roadmap' },
        { value: '24 Articles', label: 'Published with EEAT Depth' },
        { value: '210 → 5,400', label: 'Traffic Expansion' }
      ]
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            PORTFOLIO EVIDENCE
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Digital Marketing Results We've Delivered for California Businesses
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            The most powerful evidence of a digital marketing agency's capability isn't their pitch deck — it's their client outcomes. Here are three verified case studies from GrowLimo's California portfolio:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-full">
                    {cs.title}
                  </span>
                  {cs.cityFlagNote && (
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 border border-dashed border-amber-400/50 px-2 py-0.5 rounded">
                      ⚠️ {cs.cityFlagNote}
                    </span>
                  )}
                </div>

                <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] leading-snug mb-6">
                  {cs.subtitle}
                </h3>

                {/* 4 Prominent Stat Callouts Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-[#0C1220] p-3.5 rounded-xl border border-[rgba(255,255,255,0.05)]">
                      <span className="font-sora font-extrabold text-[17px] text-[#00C68A] block leading-none mb-1">
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
                    <strong className="text-[#F0F4FF]">Starting Point:</strong> {cs.challenge}
                  </p>
                  <p className="text-[#8FA8C8]">
                    <strong className="text-[#00C68A]">What We Rebuilt:</strong> {cs.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
