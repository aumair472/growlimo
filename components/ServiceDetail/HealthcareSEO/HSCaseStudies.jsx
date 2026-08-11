export default function HSCaseStudies() {
  const caseStudies = [
    {
      title: 'Los Angeles Orthopedic Surgeon',
      subtitle: 'Page 1 Rankings & 340% More Patient Inquiries',
      challenge: 'An 18-year board-certified orthopedic surgeon in Los Angeles was ranking page 4–6 for core queries like "orthopedic surgeon Los Angeles," with no schema markup, no credentialed bio page, service pages under 300 words, and a Google Business Profile less than 40% complete — spending $8,000/month on Google Ads to compensate for organic invisibility.',
      solution: 'We ran a full technical overhaul, implemented Physician and MedicalClinic schema, rebuilt the bio page with full credential display, rewrote every service page at 1,200–2,000 clinically accurate words under the surgeon\'s byline, created 14 new condition and symptom pages, fully optimized the GBP, and built citations across 35 California healthcare directories, backed by placements in two medical association publications and three local health news sources.',
      metrics: [
        { value: 'Page 6 → #3', label: 'Position for "orthopedic surgeon LA"' },
        { value: '180 → 2,840', label: 'Monthly Organic Visits' },
        { value: '8 → 35 Inquiries', label: 'Monthly Patient Inquiries (+340%)' },
        { value: '$8,000 → $3,500', label: 'Monthly Ad Spend Reduction' }
      ]
    },
    {
      title: 'San Diego Dental Practice Group',
      subtitle: '4 Locations Dominating Local Map Pack',
      challenge: 'A four-location San Diego dental group got most new patients from a single downtown location while three suburban locations sat invisible in local search — identical thin website templates with only the address swapped, no individually managed GBPs, and no location-specific reviews, so Google treated all four as duplicate content.',
      solution: 'We built a genuine multi-location architecture: four differentiated pages with neighborhood-specific content and local staff bios, fully optimized individual GBPs, citation profiles built separately across Healthgrades, Zocdoc, and Yelp for each location, and a location-specific review workflow.',
      metrics: [
        { value: 'All 4 Locations', label: 'In Local Map Pack for "dentist [city]"' },
        { value: '+274%', label: 'Combined Organic Inquiries' },
        { value: '47 → 312', label: 'Reviews Across All Locations' },
        { value: '+68% YoY', label: 'Organic New Patient Bookings' }
      ]
    },
    {
      title: 'Sacramento Med Spa',
      subtitle: 'SEO Replaces Paid Ads as Primary Patient Channel',
      challenge: 'A Sacramento med spa was spending $6,500/month on Google Ads with virtually no organic presence — no blog, no clinically detailed treatment pages, and a homepage that only ranked for its own brand name.',
      solution: 'We built 18 treatment-specific pages with candidate criteria, recovery expectations, and pricing ranges, launched a twice-monthly aesthetics blog, added med spa-specific schema, and ran an aggressive review generation program.',
      metrics: [
        { value: '390 → 4,100', label: 'Monthly Organic Visits' },
        { value: '11 → 58 Bookings', label: 'Monthly Consultations' },
        { value: '$6.5k → $2k', label: 'Ad Spend Reduced ($4.5k Savings)' },
        { value: '34 → 189', label: 'Google Reviews (4.9★ Average)' }
      ]
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            CLINICAL CASE STUDIES
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Healthcare SEO Results From California Medical Practices
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            We measure our success by the patient pipeline growth of our California healthcare clients. Here are three case studies demonstrating measurable results across orthopedics, dental, and medical spa practices:
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
