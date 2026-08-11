export default function MetaProcessTimeline() {
  const processPhases = [
    { phase: 'Phase 1', timeline: 'Week 1', title: 'Free Meta Ads Account Audit', desc: 'A comprehensive technical and strategic audit of your existing account — campaign structure, audience architecture, creative performance history, frequency levels, CAPI/Pixel accuracy, and attribution settings — or, for new accounts, a California competitive intelligence analysis through Meta\'s Ad Library.' },
    { phase: 'Phase 2', timeline: 'Week 1–2', title: 'Strategy Design & Audience Architecture', desc: 'A complete strategy document: funnel stages, objectives per stage, audience segments with estimated California reach, creative briefs, landing page recommendations, CAPI implementation plan, and 90-day milestones. You approve every element before production begins.' },
    { phase: 'Phase 3', timeline: 'Week 2–3', title: 'Creative Production', desc: 'Static images, carousels, video scripts, and Reels-format ads — 3 to 5 variants per ad set, reviewed against Meta\'s advertising policies before launch, and approved by you before the campaign build begins.' },
    { phase: 'Phase 4', timeline: 'Week 3', title: 'Technical Setup, Campaign Build & Launch', desc: 'CAPI implemented and verified with event deduplication and AEM configuration, domain verification confirmed in Business Manager, every campaign and ad set built per the agreed architecture, and landing pages QA-tested for mobile performance and event firing before any spend goes live.' },
    { phase: 'Phase 5', timeline: 'Ongoing', title: 'Weekly Optimization Cycles', desc: 'Weekly reviews pausing underperforming ad sets, rotating in new creative before frequency triggers fatigue, adjusting targeting on real delivery data, rebalancing budget toward highest-ROAS campaigns, and monitoring frequency to prevent burnout in California\'s concentrated metro markets.' },
    { phase: 'Phase 6', timeline: 'Monthly/Quarterly', title: 'Monthly Reporting & Quarterly Scaling Reviews', desc: 'Monthly reports covering reach, impressions, frequency, CTR, CPC, conversion events, cost-per-result, and ROAS in plain English, plus quarterly reviews on scaling top performers, expanding to new California markets, and testing new campaign types.' }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            SYSTEMATIC SCALING ROADMAP
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Our Meta Ads Agency Process — From First Audit to Profitable Scale
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            A structured 6-phase approach built for California businesses seeking scalable Meta Ads performance:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processPhases.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sora font-extrabold text-[15px] text-[#00C68A]">
                    {p.phase}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[1.5px] bg-[#0C1220] border border-[rgba(255,255,255,0.08)] text-[#8FA8C8] px-3 py-1 rounded-full">
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
