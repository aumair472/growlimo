export default function PPCCaseStudies() {
  const caseStudies = [
    {
      title: 'San Diego Plumbing Company',
      subtitle: '323% More Leads, Same Budget',
      challenge: 'A family-owned San Diego plumbing business arrived after six months at $3,200/month with a $187 cost-per-lead and just 17 leads a month — one ad group with 60-plus broad-match keywords, zero negative keywords, no call tracking, and every click landing on a homepage with five competing CTAs.',
      solution: 'We rebuilt the account into eight tightly themed ad groups, added a 340-term negative keyword list, launched three dedicated landing pages (emergency plumbing, drain cleaning, water heater) with call tracking via dynamic number insertion, and rewrote ad copy with service-specific headlines and urgency triggers.',
      metrics: [
        { value: '$187 → $44', label: 'Cost-Per-Lead (76% Drop)' },
        { value: '17 → 72 Leads', label: 'Monthly Leads (323% Lift / 4.2x)' },
        { value: '4/10 → 8/10', label: 'Quality Score Improvement' },
        { value: '$3,200/mo', label: 'Identical Ad Budget Throughout' }
      ]
    },
    {
      title: 'Los Angeles Medical Spa',
      subtitle: 'ROAS From 1.6x to 7.1x',
      challenge: 'A Los Angeles medical spa was running $5,000/month through a previous agency at a 1.6x ROAS, with every treatment crammed into a single ad group, generic ad copy, six competing CTAs on the landing page, and no remarketing.',
      solution: 'We rebuilt around individual ad groups per high-margin treatment, wrote copy leading with verified social proof (a 4.9-star Google rating, 500-plus procedures performed), designed three service-specific landing pages each with a single consultation-booking CTA, and launched remarketing segmented by the page each visitor viewed.',
      metrics: [
        { value: '1.6x → 7.1x', label: 'Return on Ad Spend (ROAS)' },
        { value: '$8k → $35.5k', label: 'Monthly Ad Revenue' },
        { value: '+214%', label: 'Consultation Bookings Lift' },
        { value: '+$27.5k/mo', label: 'Additional Monthly Revenue' }
      ]
    },
    {
      title: 'Orange County Law Firm',
      subtitle: 'Cutting Cost Per Lead by 61%',
      challenge: 'An Orange County personal injury firm was spending $12,000/month, generating 22 intake consultations at a $545 cost-per-lead, while national aggregator sites and competitors bid freely on the firm\'s own branded terms. The ad copy was compliance-safe but forgettable — nothing separating the firm from the nine others on the same results page.',
      solution: 'We ran a full auction insights analysis, refocused keyword targeting on the highest-converting case types, launched competitor and branded-term defense campaigns, rewrote ad copy around concrete credibility markers (years in practice, case results, free consultation, no-win-no-fee), and built case-type landing pages with attorney bios and client testimonials.',
      metrics: [
        { value: '$545 → $213', label: 'Cost per Intake (61% Drop)' },
        { value: '22 → 56 Consults', label: 'Monthly Consultations' },
        { value: '48% → 94%', label: 'Branded Impression Share' },
        { value: '+$180,000', label: 'Est. Addl Monthly Revenue' }
      ]
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            VERIFIABLE PROOF POINTS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            California PPC Case Studies From a Proven PPC Company
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            The most credible evidence of PPC management quality isn't the pitch — it's specific, verifiable numbers from real accounts. Three examples:
          </p>
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
