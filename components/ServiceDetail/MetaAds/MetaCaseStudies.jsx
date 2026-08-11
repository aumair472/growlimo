export default function MetaCaseStudies() {
  const caseStudies = [
    {
      title: 'Los Angeles DTC Skincare Brand',
      subtitle: 'ROAS From 1.4x to 6.8x in 90 Days',
      challenge: 'The starting point: a single Conversions campaign aimed at a broad "women 25–45 interested in beauty" audience, three static ads unchanged for four months, a misconfigured pixel recording page views as purchases, no remarketing, no CAPI, and creative frequency of 6.8 — meaning the average viewer had seen the same ad nearly seven times.',
      solution: 'We rebuilt the account from the ground up: CAPI implemented with correct event configuration, an Advantage+ Shopping campaign for prospecting, a manual campaign built on lookalikes from 3,200 existing customers, and remarketing segmented across product visitors, add-to-cart, checkout initiators, and past purchasers, backed by 12 new creative variants including UGC-style review ads that outperformed studio photography by 320%.',
      metrics: [
        { value: '1.4x → 6.8x', label: 'ROAS Lift in 90 Days' },
        { value: '$5.6k → $27.2k', label: 'Monthly Meta Revenue' },
        { value: '11.2x ROAS', label: 'Add-to-Cart Remarketing' },
        { value: '4.9x Revenue', label: 'Same $4,000/mo Ad Budget' }
      ]
    },
    {
      title: 'San Diego Dental Practice',
      subtitle: 'Meta Lead Gen at $18 Per New Patient Lead',
      challenge: 'A San Diego cosmetic dental practice was generating new patient leads through Google Ads at $145 each — profitable, but expensive to scale — and had never run Meta Ads or built any pixel data.',
      solution: 'We built a Lead Gen campaign targeting San Diego adults 28–55 with appearance-conscious interest signals and household income targeting, offering a "Free Smile Assessment" through Meta\'s native instant form, routed to the practice with a 15-minute follow-up SLA, followed by a lookalike expansion once 60 leads had been collected.',
      metrics: [
        { value: '94 Leads/mo', label: 'Average Inbound Patient Leads' },
        { value: '$18 CPL', label: 'Cost-Per-Lead (vs $145 Google)' },
        { value: '34%', label: 'Lead-to-Appointment Conv. Rate' },
        { value: '$31,000+', label: 'Monthly Revenue Attributed to Meta' }
      ]
    },
    {
      title: 'Bay Area B2B SaaS Company',
      subtitle: 'Meta Ads Generates 47 Demo Bookings Per Month',
      challenge: 'A San Francisco project management SaaS company had strong Google Ads performance for bottom-of-funnel searches but needed to reach California operations managers and project leads who weren\'t yet actively searching.',
      solution: 'We built a campaign combining job title targeting, company size behavior targeting, and technology usage signals identifying competitors\' software users, offering a "Free 30-Day Trial" through a Lead Gen form with qualification questions, backed by a 90-second product walkthrough video that achieved exceptional watch-through rates.',
      metrics: [
        { value: '47 Demos/mo', label: 'Monthly Demo Bookings' },
        { value: '$43', label: 'Cost-Per-Demo Booking' },
        { value: '71%', label: 'ICP Target Lead Quality' },
        { value: '$280,000', label: 'New ARR Pipeline in Month 3' }
      ]
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            DOCUMENTED PERFORMANCE
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Meta Ads Case Studies From California Businesses
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            Here are three verified Meta Ads case studies from California businesses demonstrating the performance difference between running campaigns and running a system:
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
