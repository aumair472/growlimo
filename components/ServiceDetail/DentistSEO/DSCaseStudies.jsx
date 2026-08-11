export default function DSCaseStudies() {
  const caseStudies = [
    {
      title: 'Los Angeles General Dentist',
      subtitle: 'From Page 4 to Map Pack Position #1',
      challenge: 'An 11-year Koreatown dentist was invisible in local search — page 4 organic rankings, an incomplete GBP with only 14 reviews, and a site failing mobile Core Web Vitals.',
      solution: 'We ran a full technical overhaul, implemented schema, built 11 YMYL treatment pages under the dentist\'s byline, and launched a review generation workflow.',
      metrics: [
        { value: 'Page 4 → #1', label: 'Local Map Pack Position' },
        { value: '4 → 47/mo', label: 'Monthly New Patient Inquiries' },
        { value: '14 → 156', label: 'Google Business Reviews' },
        { value: 'Position #7', label: 'Organic "Dentist LA"' }
      ]
    },
    {
      title: 'San Diego Cosmetic Dentist',
      subtitle: '$84,000 Monthly Revenue Growth',
      challenge: 'A cosmetic dentist with a genuinely strong before/after portfolio ranked nowhere for veneers or implants.',
      solution: 'We built a dedicated 1,900-word veneers page and a 2,100-word implants page with cost transparency, recovery guides, case study narratives, and before/after gallery SEO.',
      metrics: [
        { value: '$84,000+', label: 'Est. Monthly Revenue Growth' },
        { value: '0 → 31/mo', label: 'Cosmetic Consultations' },
        { value: 'Position #4', label: 'Organic Veneers Ranking' },
        { value: '$1,400/mo', label: 'Google Ad Spend Reduced' }
      ]
    },
    {
      title: 'Orange County DSO',
      subtitle: '6 Locations Dominating Local Map Pack',
      challenge: 'Six locations were running near-duplicate content, three Google Business Profiles were suspended, and monthly online inquiries sat at 22 across the group.',
      solution: 'We built a full multi-location SEO architecture, recovered the suspended GBPs, created genuinely unique location pages, and launched location-specific review capture.',
      metrics: [
        { value: 'All 6 Locations', label: 'In Local Map Pack Top 3' },
        { value: '22 → 134/mo', label: 'Total Group Inquiries' },
        { value: '89 → 498', label: 'Total DSO Reviews' },
        { value: '+510% YoY', label: 'Booking Volume Expansion' }
      ]
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            CLINICAL CASE STUDIES
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Real Results: California Dental SEO Case Studies
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            We measure our success by the patient pipeline growth of our California dental practices. Here are three verified case studies demonstrating measurable results:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
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
                    <div key={mIdx} className="bg-[#0C1220] p-3.5 rounded-xl border border-[rgba(255,255,255,0.05)]">
                      <span className="font-sora font-extrabold text-[16.5px] text-[#00C68A] block leading-none mb-1">
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
