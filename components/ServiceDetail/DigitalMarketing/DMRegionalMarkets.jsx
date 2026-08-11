export default function DMRegionalMarkets() {
  const regionalMarkets = [
    { city: 'Los Angeles', note: 'California\'s largest and most competitive market. Quality Score optimization, neighborhood-level SEO (Beverly Hills, Culver City, Silver Lake), and conversion-focused landing pages built for LA\'s high-intent, high-competition landscape.' },
    { city: 'San Diego', note: 'A strong local services and healthcare market with military-adjacent demographics. Geo-targeted Google Ads, community-specific SEO content, and local citations from La Jolla to Chula Vista.' },
    { city: 'San Francisco & Bay Area', note: 'Dominant B2B and SaaS sector — high-intent, lower-volume keywords requiring deep funnel content and precise audience targeting, combined with LinkedIn and email nurture strategies.' },
    { city: 'Sacramento', note: 'A growing market for home services, healthcare, and government-adjacent businesses, with seasonal HVAC and pest control search patterns unique to the Central Valley climate.' },
    { city: 'Orange County', note: 'Premium consumer market — cosmetic procedures, high-end real estate, luxury automotive, and wellness brands, where higher average spend per customer justifies higher CPCs.' },
    { city: 'San Jose', note: 'Tech-adjacent services, enterprise software, and professional services dominate, requiring technical precision and bottom-of-funnel keyword focus.' },
    { city: 'Fresno & Central Valley', note: 'Lower CPCs, strong local service demand, and agricultural business services — strong ROI for modest budgets willing to dominate a less saturated market.' },
    { city: 'Long Beach & Inland Empire', note: 'Rapidly growing retail and logistics markets with under-served SEO landscapes and significant ranking opportunities for early movers.' }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            STATEWIDE COVERAGE
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            California City-Level Digital Marketing Expertise
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            California's regional markets are genuinely distinct — a Los Angeles campaign requires a different architecture, keyword bidding strategy, and offer positioning than a Sacramento or Bay Area campaign:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regionalMarkets.map((reg, idx) => (
            <div
              key={idx}
              className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
            >
              <span className="text-[#00C68A] font-sora font-extrabold text-[17px] mb-3 block">
                📍 {reg.city}
              </span>
              <p className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">
                {reg.note}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
