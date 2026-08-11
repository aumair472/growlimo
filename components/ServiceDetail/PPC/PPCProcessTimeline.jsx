export default function PPCProcessTimeline() {
  const processPhases = [
    { phase: 'Phase 1', timeline: 'Week 1', title: 'Free PPC Audit & Competitive Intelligence', desc: 'A full audit of existing accounts (or a thorough competitive analysis if starting fresh), identifying every source of wasted spend, every Quality Score problem, and every missing conversion tracking gap — or, for new accounts, mapping competitors\' bidding strategies and keyword coverage. You get the full report whether or not you proceed with us.' },
    { phase: 'Phase 2', timeline: 'Week 1–2', title: 'PPC Strategy & Architecture Design', desc: 'Keyword strategy built from Keyword Planner data, auction insights, and your own account history, mapped to tightly themed ad groups, with campaign hierarchy defined, negative keywords designed, initial ad copy drafted, and landing page briefs written. You approve the full strategy before any build begins.' },
    { phase: 'Phase 3', timeline: 'Week 2–3', title: 'Campaign Build, QA & Launch', desc: 'Ad groups, three-plus ad copy variants per group, extensions, bid strategies, city- and zip-code-level geo-targeting, device adjustments, ad scheduling, and audience layering — all verified against conversion tracking and run through a full pre-launch QA checklist before anything goes live.' },
    { phase: 'Phase 4', timeline: 'Ongoing', title: 'Weekly Optimization Cycles', desc: 'Every week: new negative keywords from search term reports, underperforming variants paused, bids adjusted on conversion and CPA data, new ad copy tested, Quality Scores reviewed across every ad group, and impression share and competitor activity monitored. Nothing sits idle.' },
    { phase: 'Phase 5', timeline: 'Monthly/Quarterly', title: 'Monthly Reporting & Quarterly Strategy Reviews', desc: 'A monthly report covering impressions, clicks, CTR, average CPC, Quality Score, conversions, cost-per-conversion, and ROAS, in plain English — plus a quarterly review to weigh new campaign types, budget reallocation, or expansion into new California markets.' }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            DISCIPLINED PROCESS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Our California PPC Management Process — Built for Maximum ROI
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            Every engagement follows a structured five-phase process with defined deliverables at each stage. No shortcuts, no templates, no campaigns left running on autopilot while budget burns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processPhases.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sora font-extrabold text-[15px] text-[#00C68A]">
                    {p.phase}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[1.5px] bg-[#162035] border border-[rgba(255,255,255,0.08)] text-[#8FA8C8] px-3 py-1 rounded-full">
                    {p.timeline}
                  </span>
                </div>

                <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] leading-snug mb-3">
                  {p.title}
                </h3>

                <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
