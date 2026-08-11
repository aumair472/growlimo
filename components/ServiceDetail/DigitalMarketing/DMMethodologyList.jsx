export default function DMMethodologyList() {
  const principles = [
    { title: 'Data before decisions', desc: 'Every new client relationship starts with a comprehensive audit: website technical health, existing rankings, competitor positioning, paid account history, and conversion funnel mapping.' },
    { title: 'Revenue as the north star', desc: 'Impressions, clicks, and followers are intermediate metrics. Every GrowLimo campaign is set up with revenue tracking as the primary success benchmark from day one.' },
    { title: 'California market specialization', desc: 'We don\'t manage campaigns the same way in San Diego as in Los Angeles or the Bay Area — these are distinct markets with different search intent, competitive density, and demographic profiles.' },
    { title: 'Transparency without exception', desc: 'Every campaign metric, every dollar spent, and every result is visible in plain-English monthly reports accompanied by a strategy call.' },
    { title: 'No lock-in contracts', desc: 'We operate month-to-month across all services and use results, not contracts, to retain clients.' }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            SYSTEMIC METHODOLOGY
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            How GrowLimo Approaches Digital Marketing Differently in California
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            Most digital marketing agencies in California sell packages. GrowLimo builds systems — where SEO content feeds the email list, the email list builds retargeting audiences for paid ads, and Google Ads data informs which organic keywords deserve more content investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
            >
              <span className="font-sora font-extrabold text-[16px] text-[#00C68A] block mb-3">
                0{idx + 1}.
              </span>
              <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
