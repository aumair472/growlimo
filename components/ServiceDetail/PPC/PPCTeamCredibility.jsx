export default function PPCTeamCredibility() {
  const certBadges = [
    'Google Search Certification',
    'Google Display Certification',
    'Google Shopping Certification',
    'Google Video Certification',
    'Performance Max Certification'
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

        <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left">
          <div className="inline-flex items-center gap-2 bg-[rgba(66,133,244,0.12)] border border-[rgba(66,133,244,0.30)] text-[#4285F4] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[4px] px-[14px] mb-4">
            GOOGLE PARTNER AGENCY
          </div>

          <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Why GrowLimo Is the Best PPC Service Agency in California
          </h2>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-6">
            Every campaign is run by an in-house certified specialist — never outsourced to a white-label provider, never handed to a junior analyst learning on your budget. Our lead PPC strategist holds Google Ads Search, Display, Shopping, Video, and Performance Max certifications and has personally managed more than $1.2 million in California ad spend across home services, healthcare, legal, e-commerce, automotive, and B2B SaaS over the past seven years.
          </p>

          <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mb-8">
            We hold Google Partner agency status, a designation that requires meeting Google's certification requirements, managed spend thresholds, and performance benchmarks — giving our clients access to beta advertising features before public release and a direct escalation path through Google's partner support channel.
          </p>

          {/* 5 Certification Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {certBadges.map((badge, bIdx) => (
              <div key={bIdx} className="bg-[#0C1220] border border-[rgba(66,133,244,0.2)] p-3 rounded-xl flex items-center gap-2 text-[#F0F4FF] font-sans text-[12px] font-semibold">
                <svg className="w-4 h-4 text-[#4285F4] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* Editorial Info Component */}
          <div className="bg-[#0C1220] border border-[rgba(0,198,138,0.2)] rounded-[16px] p-6 space-y-3 font-sans text-[14px]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#F0F4FF]">
              <strong className="text-[#00C68A] font-sora">Reviewed by:</strong>
              <span>
                <a
                  href="https://www.linkedin.com/in/leadgeneration-google-ads-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00C68A] font-semibold underline hover:text-[#0FB786] transition-colors cursor-pointer"
                >
                  Muhammad Usman
                </a>
                , Senior PPC Strategist at GrowLimo — 7+ years managing California PPC accounts, Google Ads/Performance Max certified.
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-[#8FA8C8] border-t border-[rgba(255,255,255,0.06)] pt-3">
              <strong className="text-[#00C68A] font-sora">Last updated:</strong>
              <span>August 2026 — Updated with latest California PPC benchmarks & multi-channel strategy.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
