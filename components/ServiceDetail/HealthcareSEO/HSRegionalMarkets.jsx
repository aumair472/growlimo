export default function HSRegionalMarkets() {
  const regionalMarkets = [
    { city: 'Los Angeles Healthcare SEO', note: 'The most competitive healthcare SEO market in California across virtually every specialty. Cosmetic surgery, concierge medicine, sports medicine, and luxury wellness dominate, with Beverly Hills, Santa Monica, and Brentwood requiring aggressive E-E-A-T and authority building.' },
    { city: 'San Diego Healthcare SEO', note: 'A strong market for dental, orthopedics, urgent care, and military-adjacent healthcare, with an active patient review culture — Yelp and Healthgrades carry exceptional influence here.' },
    { city: 'San Francisco & Bay Area Healthcare SEO', note: 'Tech-sector health and wellness demographics — functional medicine, integrative health, concierge primary care, and mental health practices serving a high-income, health-literate, search-sophisticated patient population.' },
    { city: 'Sacramento Healthcare SEO', note: 'Government employee healthcare demographics with a strong primary care, urgent care, and family medicine market — less saturated than coastal California, with real ranking opportunities for well-optimized practices.' },
    { city: 'Orange County Healthcare SEO', note: 'A premium aesthetic and elective medicine market — plastic surgery, dermatology, fertility clinics, and concierge medicine targeting high-income demographics.' },
    { city: 'Fresno & Central Valley Healthcare SEO', note: 'Agricultural community healthcare needs — primary care, urgent care, occupational medicine — with lower search competition than coastal markets creating faster ranking opportunities.' }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            REGIONAL PATIENT DYNAMICS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Healthcare SEO Services Across All of California
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            California's healthcare search landscape varies sharply by region — ranking for "plastic surgeon Beverly Hills" and "chiropractor Fresno" are entirely different problems, each requiring its own strategy, timeline, and budget expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionalMarkets.map((reg, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
            >
              <span className="text-[#00C68A] font-sora font-extrabold text-[17.5px] mb-3 block">
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
