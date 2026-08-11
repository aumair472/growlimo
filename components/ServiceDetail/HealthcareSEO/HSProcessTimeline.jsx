export default function HSProcessTimeline() {
  const processPhases = [
    { phase: 'Phase 1', timeline: 'Week 1', title: 'Free Healthcare SEO Audit', desc: 'A comprehensive review of your California practice\'s SEO position — technical health, on-page optimization across all pages, GBP completeness, citation consistency, review volume, content quality against YMYL/E-E-A-T standards, and competitor ranking analysis. You receive the full written audit regardless of whether you proceed with us.' },
    { phase: 'Phase 2', timeline: 'Week 2', title: 'Healthcare SEO Strategy & Keyword Roadmap', desc: 'A complete strategy covering California keyword targets by patient intent stage, content architecture recommendations, technical fixes prioritized by ranking impact, a local SEO action plan, link building targets, and a review generation workflow. You approve the strategy before execution begins.' },
    { phase: 'Phase 3', timeline: 'Weeks 2–4', title: 'Technical Foundation', desc: 'Technical fixes implemented by priority — Core Web Vitals, schema markup across all practice pages, internal linking corrections, duplicate content resolution, and mobile rendering verification, with Search Console and GA4 configured or audited for accurate tracking.' },
    { phase: 'Phase 4', timeline: 'Month 2–3', title: 'Content Production & On-Page Optimization', desc: 'YMYL-compliant content produced for every priority page — service, condition, location, and physician bio pages — with existing pages fully optimized and every new piece written under credentialed author attribution and reviewed for clinical accuracy.' },
    { phase: 'Phase 5', timeline: 'Month 2 Onward', title: 'Local SEO & Authority Building', desc: 'GBP optimization completed and a posting cadence established, healthcare directory citation building activated across priority platforms, a review generation workflow launched, and link building outreach targeting California medical associations and healthcare publications.' },
    { phase: 'Phase 6', timeline: 'Ongoing', title: 'Monthly Reporting & Continuous Optimization', desc: 'Monthly reports covering organic traffic, keyword movement, GBP performance, citation health, and review growth, all connected back to patient inquiry volume and appointment bookings, with strategy adjusted monthly against performance data.' }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            6-PHASE CLINICAL ROADMAP
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Our Healthcare SEO Process — Built for California Medical Practices
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            A structured 6-phase process designed specifically for California medical and dental practices:
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
