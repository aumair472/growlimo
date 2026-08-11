export default function DSProcessTimeline() {
  const processPhases = [
    { phase: 'Phase 1', timeline: 'Week 1', title: 'Free Comprehensive Dental Audit', desc: 'A full analysis of your site\'s technical health (Core Web Vitals, mobile speed, schema), review quality, GBP status, citation consistency, and competitor local metrics to identify every growth opportunity.' },
    { phase: 'Phase 2', timeline: 'Week 2', title: 'Custom Dental SEO Strategy', desc: 'A 90-day SEO roadmap and keyword intent map targeting the high-margin treatment and local search queries specific to your California market.' },
    { phase: 'Phase 3', timeline: 'Weeks 2–4', title: 'Technical Foundation Setup', desc: 'Crawl error resolution, Dentist and MedicalProcedure schema implementation across all pages, mobile load time optimization, and tracking dashboard configuration.' },
    { phase: 'Phase 4', timeline: 'Month 2–3', title: 'YMYL Content Production', desc: 'Comprehensive, clinician-attributed treatment pages written and deployed for crowns, veneers, dental implants, Invisalign, emergency dental, and more.' },
    { phase: 'Phase 5', timeline: 'Month 2 Onward', title: 'Local SEO & Citation Building', desc: 'Listings claimed and synced across 28+ dental directories, with automated review requests configured to grow your local ranking indicators.' },
    { phase: 'Phase 6', timeline: 'Ongoing', title: 'Monthly Reporting & Scaling', desc: 'A detailed report tracking keyword metrics, GBP call volumes, organic visits, and new patient bookings, with continuous scaling into new opportunities.' }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            6-PHASE CLINICAL ROADMAP
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Our Dental SEO Process — From First Audit to Full Patient Pipeline
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            A structured, 6-phase process built to turn local search volume into booked patient pipeline:
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
