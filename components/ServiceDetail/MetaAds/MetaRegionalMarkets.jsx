export default function MetaRegionalMarkets() {
  const regionalMarkets = [
    { city: 'Los Angeles Meta Ads', note: 'California\'s largest and most visually sophisticated consumer market — entertainment, lifestyle, fashion, wellness, luxury services. LA audiences respond to high-production creative and aspirational messaging, with neighborhood-level targeting across Beverly Hills, West Hollywood, Santa Monica, Echo Park, and Culver City.' },
    { city: 'San Diego Meta Ads', note: 'Strong local service, healthcare, military-adjacent, and outdoor lifestyle demographics, with community-specific targeting across La Jolla, Mission Valley, North County, and Chula Vista.' },
    { city: 'San Francisco & Bay Area Meta Ads', note: 'A high-income professional demographic with a strong B2B and tech presence, benefiting from LinkedIn audience integration and premium creative calibrated for a design-literate audience.' },
    { city: 'Sacramento Meta Ads', note: 'Government, healthcare, and family-oriented demographics with strong home services demand, and seasonal creative built for Central Valley climate patterns.' },
    { city: 'Orange County Meta Ads', note: 'An affluent consumer market — cosmetic services, luxury real estate, premium wellness, high-end retail — where higher household income supports premium pricing messaging.' },
    { city: 'Fresno & Central Valley Meta Ads', note: 'Significantly lower CPMs than coastal markets, creating strong cost-per-lead efficiency for local businesses across agricultural and family-demographic audiences.' }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            LOCAL MARKET NUANCE
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Meta Ads Agency Services Across Every Major California Market
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            California's regional markets are genuinely distinct — a Los Angeles audience responds to different creative and offers than a Sacramento or Bay Area audience. We apply market-specific knowledge to every campaign:
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
