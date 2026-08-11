export default function DSSpecialtyPlaybooksGrid() {
  const playbooks = [
    { name: 'General & Family Dentistry', desc: 'Local map pack dominance for "dentist near me" and "family dentist [city]" searches, with primary focus on GBP optimization, review volume, and insurance keyword targeting.' },
    { name: 'Cosmetic Dentistry', desc: 'High-value treatment page SEO for veneers, teeth whitening, smile makeovers, and tooth bonding, with before/after gallery schema and dentist credential display.' },
    { name: 'Dental Implants', desc: 'Cost transparency content and comparison pages (implants vs. dentures vs. bridges) built to capture high-intent patients researching treatment pricing.' },
    { name: 'Orthodontics & Invisalign', desc: 'Invisalign-specific landing pages, cost comparison content, adult vs. teen orthodontics, and "Invisalign provider near me" local SEO.' },
    { name: 'Pediatric & Special Needs Dentistry', desc: 'Parent-oriented content strategy, first dental visit guides, children\'s dental anxiety management, and family-oriented local SEO targeting.' }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            SPECIALTY PLAYBOOKS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Dental SEO Strategies Tailored by Specialty
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            We calibrate custom campaigns for every vertical of dental care, targeting specific patient search habits:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {playbooks.map((pb, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-5 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center text-[#00C68A] mb-3 font-bold text-[14px]">
                  0{idx + 1}
                </div>
                <h3 className="font-sora font-bold text-[15.5px] text-[#F0F4FF] mb-2 leading-snug">
                  {pb.name}
                </h3>
                <p className="font-sans text-[12.5px] leading-relaxed text-[#8FA8C8]">
                  {pb.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
