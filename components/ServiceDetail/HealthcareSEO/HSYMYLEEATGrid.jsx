export default function HSYMYLEEATGrid() {
  const pillars = [
    {
      letter: 'E',
      name: 'Experience',
      desc: 'First-hand clinical experience visible through case outcomes, patient recovery examples, and procedural detail only a practitioner would actually know.'
    },
    {
      letter: 'E',
      name: 'Expertise',
      desc: 'Medical degrees, board certifications, hospital affiliations, and specialty credentials appearing on author bio pages and linked from every piece of clinical content.'
    },
    {
      letter: 'A',
      name: 'Authoritativeness',
      desc: 'Backlinks from medical associations, California health department resources, accredited hospital networks, Healthgrades, and Zocdoc.'
    },
    {
      letter: 'T',
      name: 'Trustworthiness',
      desc: 'Accurate practice information, visible licensing, HTTPS security, genuine patient reviews, transparent pricing, and a HIPAA-aware privacy policy.'
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

        <div className="text-left max-w-[880px] mb-12">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            SEARCH ENGINE ALGORITHMS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            YMYL, E-E-A-T, and What They Mean for Your California Healthcare Practice's Rankings
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.8] mb-4">
            Two frameworks govern how Google evaluates healthcare websites, and understanding them explains why a decent-looking practice site can still be invisible in search.
          </p>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.8] mb-4">
            <strong className="text-[#F0F4FF]">YMYL (Your Money Your Life)</strong> is Google's classification for content categories where low-quality information could cause real harm. Healthcare sits at the very top of it — a healthcare page has to clear a far higher bar to reach page one than an equivalent page about home renovation or travel.
          </p>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.8]">
            <strong className="text-[#00C68A]">E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)</strong> is the framework Google uses to judge how credible a page's content actually is. For healthcare pages, all four dimensions have to be explicitly demonstrated, not assumed:
          </p>
        </div>

        {/* 4 E-E-A-T Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-xl bg-[rgba(66,133,244,0.12)] border border-[rgba(66,133,244,0.25)] text-[#4285F4] font-sora font-extrabold text-[18px] flex items-center justify-center shrink-0">
                  {p.letter}
                </span>
                <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF]">
                  {p.name}
                </h3>
              </div>
              <p className="font-sans text-[14.5px] leading-relaxed text-[#8FA8C8]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-[16px] bg-[#162035] border-l-4 border-[#00C68A] text-left">
          <p className="font-sans text-[14.5px] font-semibold text-[#00C68A]">
            💡 This isn't optional in healthcare SEO. It's the baseline requirement for competitive rankings, and we build it into every element of your strategy — content architecture, author bio structure, off-page citation building, and review generation alike.
          </p>
        </div>

      </div>
    </section>
  );
}
