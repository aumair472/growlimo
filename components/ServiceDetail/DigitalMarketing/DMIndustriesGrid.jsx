export default function DMIndustriesGrid() {
  const industries = [
    { name: 'Home Services', desc: 'HVAC, plumbing, roofing, electrical, landscaping, pest control — emergency keyword bidding, hyper-local SEO, GBP optimization, review generation, and call tracking.' },
    { name: 'Healthcare & Medical', desc: 'Dentists, med spas, chiropractors, urgent care, plastic surgeons — HIPAA-aware ad copy, appointment booking tracking, local SEO, and YMYL content standards.' },
    { name: 'Legal Services', desc: 'Personal injury, immigration, family law, criminal defense — high-CPC Google Ads management with tight Quality Score optimization and authoritative E-E-A-T content.' },
    { name: 'Real Estate', desc: 'Agents, brokers, property managers, developers — neighborhood-level SEO content, Google Ads lead forms, email drip campaigns, and inquiry-optimized landing pages.' },
    { name: 'E-Commerce', desc: 'Fashion, beauty, health products, home goods, supplements — Google Shopping campaign management, Klaviyo email automation, abandoned cart recovery, and product page SEO.' },
    { name: 'B2B SaaS & Tech', desc: 'Bay Area and statewide tech — bottom-of-funnel SEO content strategy, LinkedIn ad integration, HubSpot email nurture sequences, and demo-booking CRO.' },
    { name: 'Restaurants & Hospitality', desc: 'Google Business Profile management, local SEO for high-foot-traffic searches, and social media campaigns targeting California dining audiences.' },
    { name: 'Automotive', desc: 'Dealerships, detailing, repair shops — vehicle-specific Google Ads, local citation building, and review generation strategies for California automotive buyers.' }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            VERTICAL SPECIALIZATION
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            California Industries We Specialize In
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            Digital marketing strategy is not universal — every industry has distinct keyword intent patterns, regulatory considerations, competitive dynamics, and buyer journey structures:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[rgba(66,133,244,0.12)] border border-[rgba(66,133,244,0.25)] flex items-center justify-center text-[#4285F4] mb-4 font-bold text-[15px]">
                  0{idx + 1}
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
