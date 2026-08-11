export default function MetaTeamCredibility() {
  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

        <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
          <div className="inline-flex items-center gap-2 bg-[rgba(6,104,225,0.12)] border border-[rgba(6,104,225,0.30)] text-[#4285F4] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[4px] px-[14px] mb-4">
            META BLUEPRINT CERTIFIED TEAM
          </div>

          <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Why GrowLimo Is a Top Rated Meta Ads Agency
          </h2>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-6">
            GrowLimo's Meta Ads team is led by certified specialists whose entire professional focus is paid social performance — not generalist marketers splitting attention across every channel. Our lead strategist holds Meta Blueprint Certified Media Buying Professional certification, has managed California Meta campaigns since before the iOS 14.5 update, and has personally navigated every major platform shift — from Pixel to CAPI, from manual campaigns to Advantage+, from interest targeting to broad AI delivery — with real client accounts and real money on the line.
          </p>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-8">
            Total managed Meta Ads spend across California clients exceeds $800,000. We maintain active participation in Meta's partner training programs, implement platform updates as they become available, and test new features on internal accounts before recommending them to clients.
          </p>

          {/* Editorial Info Component */}
          <div className="bg-[#0C1220] border border-[rgba(0,198,138,0.2)] rounded-[16px] p-6 space-y-3 font-sans text-[14px]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#F0F4FF]">
              <strong className="text-[#00C68A] font-sora">Reviewed by:</strong>
              <span>
                <a
                  href="https://www.linkedin.com/in/usama-zulfiqar-3a301a242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00C68A] font-semibold underline hover:text-[#0FB786] transition-colors cursor-pointer"
                >
                  Usama Zulfiqar
                </a>
                , Senior Meta Ads Strategist at GrowLimo — 7+ years managing California Meta Ads accounts, Meta Blueprint certified.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#8FA8C8] border-t border-[rgba(255,255,255,0.06)] pt-3">
              <strong className="text-[#00C68A] font-sora">Last updated:</strong>
              <span>August 2026 — Updated with latest Advantage+ Shopping & CAPI server-side event setup.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
