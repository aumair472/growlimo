export default function MetaVersusTable() {
  const comparisonItems = [
    {
      bad: "A single Conversions campaign targeting a broad interest-based audience",
      good: "Full-funnel campaign architecture — distinct awareness, consideration, and conversion stages, each with its own audience and objective"
    },
    {
      bad: "Two or three static image ads that run unchanged for months",
      good: "Three to five creative variants per ad set, continuously refreshed before fatigue sets in"
    },
    {
      bad: "Browser-only pixel tracking with no Conversions API",
      good: "Conversions API with server-side tracking to recover iOS-blocked conversion data"
    },
    {
      bad: "No remarketing campaigns for warm audiences",
      good: "Multi-layer retargeting segmented by behavior, engagement depth, and recency"
    },
    {
      bad: "Monthly reports showing reach and impressions, but no ROAS",
      good: "Monthly reporting anchored to ROAS, cost-per-lead, and cost-per-acquisition"
    },
    {
      bad: '"Optimizations" that amount to bid adjustments on stale campaigns',
      good: "Weekly optimization cycles covering audience performance, creative rotation, bidding, and budget rebalancing"
    },
    {
      bad: "No connection between Meta performance data and landing page conversion rates",
      good: "Dedicated landing pages per campaign, built for how Meta traffic actually behaves"
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1150px]">

        <div className="text-left max-w-[860px] mb-12">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            CLEAR COMPARISON
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            What a Real Meta Ads Agency Delivers vs. What Most California Agencies Actually Deliver
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            There's a wide gap between what California businesses are promised by a Meta ads agency and what most of them actually receive. Here's the honest comparison.
          </p>
        </div>

        {/* 2-Column Comparison Table Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 text-left">

          {/* Left Column: What Most CA Agencies Deliver (Red/X) */}
          <div className="bg-[#0C1220] border border-red-500/20 rounded-[20px] p-6 md:p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(255,255,255,0.06)]">
              <span className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-extrabold flex items-center justify-center text-[16px]">
                ✕
              </span>
              <h3 className="font-sora font-extrabold text-[18px] md:text-[20px] text-red-400">
                What Most CA Agencies Deliver
              </h3>
            </div>

            <ul className="space-y-4">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] leading-relaxed text-[#8FA8C8]">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                  <span>{item.bad}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: What GrowLimo Delivers (Green/Check) */}
          <div className="bg-[#162035] border border-[#00C68A]/30 rounded-[20px] p-6 md:p-8 relative overflow-hidden shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(255,255,255,0.06)]">
              <span className="w-8 h-8 rounded-full bg-[#00C68A]/15 border border-[#00C68A]/30 text-[#00C68A] font-extrabold flex items-center justify-center text-[16px]">
                ✓
              </span>
              <h3 className="font-sora font-extrabold text-[18px] md:text-[20px] text-[#00C68A]">
                What GrowLimo Delivers
              </h3>
            </div>

            <ul className="space-y-4">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] leading-relaxed text-[#F0F4FF] font-medium">
                  <span className="text-[#00C68A] font-bold mt-0.5 shrink-0">✓</span>
                  <span>{item.good}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Closing Callout */}
        <div className="p-5 rounded-[16px] bg-[#162035] border-l-4 border-[#00C68A] text-left">
          <p className="font-sans text-[15px] font-semibold text-[#00C68A]">
            💡 The difference between a campaign and a system is the difference between 1.4x ROAS and 6.8x ROAS. That's the gap this agency exists to close.
          </p>
        </div>

      </div>
    </section>
  );
}
