export default function PPCRegionalMarkets() {
  const regionalMarkets = [
    { city: 'Los Angeles PPC', note: 'The most competitive paid search market in California across nearly every consumer vertical. Quality Score optimization to lower effective CPC, neighborhood-level geo-targeting (West Hollywood, Santa Monica, Burbank), and landing page architecture built for LA\'s high-intent, high-competition environment.' },
    { city: 'San Diego PPC', note: 'A strong local-service, healthcare, and military-adjacent consumer market. Geo-targeted campaigns across La Jolla, Chula Vista, Encinitas, El Cajon, and Mission Valley, each with neighborhood-calibrated bid adjustments.' },
    { city: 'San Francisco & Bay Area PPC', note: 'Primarily B2B, SaaS, and professional services — lower volume, higher value per conversion. Bottom-of-funnel keyword precision, LinkedIn Ads integration, and demo or consultation booking optimization.' },
    { city: 'Sacramento PPC', note: 'Government-adjacent services, home improvement, and healthcare dominate, with predictable seasonal spikes in HVAC and pest control searches. Calendar-based bid strategies and emergency keyword dayparting built for Central Valley patterns.' },
    { city: 'Orange County PPC', note: 'A premium consumer market — cosmetic procedures, luxury real estate, high-end retail, wellness — where higher customer value justifies elevated CPCs backed by strong landing page conversion architecture.' },
    { city: 'San Jose & Silicon Valley PPC', note: 'Tech companies, enterprise software, and staffing agencies. B2B keyword focus with LinkedIn integration and audience segmentation by company size and job title.' },
    { city: 'Fresno & Central Valley PPC', note: 'Lower CPCs and thinner competition create real ROI headroom for local businesses — agricultural services, regional retail, and home services all perform strongly here.' }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            LOCALIZED BIDDING
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            PPC Services Across Every Major California Market
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            California's regional markets aren't interchangeable. Los Angeles strategy looks nothing like a Bay Area B2B campaign, which looks nothing like San Diego local-service PPC. We bring city-level precision to every engagement:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionalMarkets.map((reg, idx) => (
            <div
              key={idx}
              className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
            >
              <span className="text-[#00C68A] font-sora font-extrabold text-[18px] mb-3 block">
                📍 {reg.city}
              </span>
              <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                {reg.note}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
