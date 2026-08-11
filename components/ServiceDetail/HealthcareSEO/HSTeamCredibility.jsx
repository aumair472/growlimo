export default function HSTeamCredibility() {
  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

        <div className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
          <div className="inline-flex items-center gap-2 bg-[rgba(66,133,244,0.12)] border border-[rgba(66,133,244,0.30)] text-[#4285F4] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[4px] px-[14px] mb-4">
            YMYL & E-E-A-T CLINICAL SPECIALISTS
          </div>

          <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Healthcare SEO Built by Specialists Who Understand YMYL Standards
          </h2>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-6">
            Our healthcare SEO team is led by specialists with demonstrated expertise in Google's YMYL content standards, not generalist SEO practitioners applying the same framework to a dental practice that they'd apply to a plumbing company. Our healthcare SEO lead has spent six years building patient acquisition systems specifically for California medical and dental practices, navigating the full evolution of Google's E-E-A-T requirements, and managing SEO across practices from solo practitioners to multi-location hospital networks.
          </p>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-8">
            Every piece of clinical content we produce is reviewed for medical accuracy before publication. We work with your licensed practitioners on author attribution, credential display, and clinical review notations that meet Google's 2026 YMYL quality rater guidelines, and we maintain HIPAA compliance awareness across every workflow — tracking setup, review generation, and content strategy alike.
          </p>

          {/* Editorial Info Component — Pending Review Callout Box */}
          <div className="bg-amber-500/10 border-2 border-dashed border-amber-400/50 rounded-[16px] p-6 space-y-3 font-sans text-[14px]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-amber-200">
              <strong className="text-amber-400 font-sora">Reviewed by:</strong>
              <span>
                [Insert real strategist name], Senior Healthcare SEO Strategist at GrowLimo — [X years] building California healthcare SEO campaigns. [Link to LinkedIn profile].
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-amber-300/80 border-t border-amber-400/20 pt-3">
              <strong className="text-amber-400 font-sora">Last updated:</strong>
              <span>[Insert real publish date and revision date — update whenever pricing, YMYL guidance, or strategy recommendations change].</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
