export default function PPCIndustriesGrid() {
  const industries = [
    { name: 'Home Services', desc: 'HVAC, plumbing, roofing, electrical, pest control, landscaping — Emergency keyword bidding with dayparting, call tracking for phone-heavy industries, hyper-local geo-targeting by neighborhood, and seasonal bid adjustments for California\'s regional climate patterns.' },
    { name: 'Healthcare & Medical', desc: 'Dental, med spas, plastic surgeons, urgent care, chiropractors — HIPAA-aware ad copy, appointment booking conversion tracking, procedure-specific landing pages with before/after galleries, and remarketing for long consideration-cycle treatments.' },
    { name: 'Legal Services', desc: 'Personal injury, immigration, family law, criminal defense — The highest-CPC niche in California PPC. Quality Score optimization to reduce effective CPC, branded keyword protection, and intake form conversion optimization with attorney credibility signals.' },
    { name: 'Real Estate', desc: 'Agents, brokers, new developments, property management — Neighborhood-specific geo-targeting, mobile-optimized lead form extensions, and remarketing built for California\'s long real estate consideration cycle.' },
    { name: 'E-Commerce', desc: 'Fashion, beauty, health products, home goods, supplements — Shopping with priority bidding architecture, dynamic remarketing with product-specific creative, Meta Ads integration, and Performance Max management.' },
    { name: 'Automotive', desc: 'Dealerships, detailing, repair shops — Vehicle make/model-specific ad groups, local inventory ad integration, service appointment tracking, and local extension optimization.' },
    { name: 'B2B & SaaS', desc: 'Bay Area and statewide — Low-volume, high-value keyword strategy targeting decision-maker queries, LinkedIn Ads integration for ABM-style targeting, and demo-booking landing page optimization.' },
    { name: 'Education & Coaching', desc: 'Online courses, tutoring, certification programs — Enrollment-focused landing pages, interest-based audience targeting across Google and Meta, and lead nurture email integration for multi-touch conversion.' }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            VERTICAL DYNAMICS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Industries Our California PPC Agency Serves
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            PPC strategy is never one-size-fits-all. Keyword intent, bidding dynamics, compliance requirements, and landing page architecture shift meaningfully across verticals:
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2vm4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
