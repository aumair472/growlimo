export default function MetaIndustriesGrid() {
  const industries = [
    { name: 'E-Commerce & DTC Brands', desc: 'Advantage+ Shopping campaigns, dynamic product ads, abandoned cart retargeting, post-purchase upsell flows, and subscription funnels — strongest ROI for California product brands with margins above 40% and existing customer data.' },
    { name: 'Healthcare & Medical Aesthetics', desc: 'HIPAA-compliant ad copy and lead forms, procedure-specific campaign architecture, before/after creative with proper consent management, and appointment-booking Lead Gen for dental, med spa, and cosmetic surgery practices.' },
    { name: 'Real Estate', desc: 'Seller and buyer lead generation, listing-specific video and carousel ads, neighborhood-targeted prospecting, open house promotion, and CRM integration for automatic follow-up.' },
    { name: 'Home Services', desc: 'Radius-targeted awareness, seasonal creative for HVAC, pest control, and landscaping, instant-quote Lead Gen, and before/after portfolio creative for remodeling and roofing.' },
    { name: 'Fitness & Wellness', desc: 'Free trial membership Lead Gen, class enrollment campaigns, transformation story video creative, and location-radius targeting across California metros.' },
    { name: 'B2B & SaaS', desc: 'Job title and company size targeting, free trial and demo-booking Lead Gen, video product walkthroughs, and LinkedIn integration for ABM approaches in the Bay Area tech corridor.' },
    { name: 'Education & Coaching', desc: 'Webinar registration, free resource funnels, course enrollment video creative, and multi-touch retargeting for long consideration cycles.' },
    { name: 'Automotive', desc: 'Vehicle-specific dynamic ads, dealership local awareness, test drive Lead Gen, and service department promotion targeting existing owners.' }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            VERTICAL DIVERSITY
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Industries Our Meta Ads Agency Serves in California
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            Meta Ads strategy, creative format, campaign objective, and audience architecture vary significantly by industry. GrowLimo has built deep Meta Ads expertise across California's most active verticals:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[rgba(6,104,225,0.12)] border border-[rgba(6,104,225,0.25)] flex items-center justify-center text-[#0668E1] mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
  );
}
