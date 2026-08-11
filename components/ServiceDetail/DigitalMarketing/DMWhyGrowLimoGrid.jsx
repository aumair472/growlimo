export default function DMWhyGrowLimoGrid() {
  const reasons = [
    { title: 'Full-Service Digital Agency', desc: 'Six core channels managed under one revenue-tracked, integrated growth strategy.' },
    { title: 'City-Level Expertise', desc: 'Deep market knowledge across Los Angeles, San Diego, San Francisco, Sacramento, Orange County, and San Jose.' },
    { title: 'Google Partner Certified', desc: 'Certified expertise across Search, Display, Shopping, and Video campaign architecture.' },
    { title: 'Revenue-First Metrics', desc: 'Revenue and lead volume tracked as primary success benchmarks — not impressions or vanity followers.' },
    { title: 'No Lock-In Contracts', desc: 'Month-to-month flexibility across all service lines — we earn your business every 30 days.' },
    { title: 'Transparent Monthly Reporting', desc: 'Plain-English performance reports accompanied by a dedicated strategy call every cycle.' }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            THE GROWLIMO ADVANTAGE
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
            Why California Businesses Choose GrowLimo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
            >
              <div className="w-9 h-9 rounded-xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center text-[#00C68A] font-bold mb-4 text-[16px]">
                ✓
              </div>
              <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] mb-2">
                {r.title}
              </h3>
              <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
