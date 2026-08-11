export default function DS3ProblemsCards() {
  const problems = [
    {
      num: '01',
      title: 'Problem 1: Dental content is YMYL, and most California dentists don\'t know it',
      problemDesc: 'Google classifies dental health information under its strictest quality standard — YMYL, Your Money Your Life. Treatment pages, procedure blog posts, and patient education content all get evaluated by Google\'s quality raters at the highest level of scrutiny. Generic, uncredentialed dental content — the kind produced by SEO agencies without genuine dental expertise — actively suppresses rankings by displaying exactly the low-quality signals Google\'s algorithm is trained to penalize.',
      solutionDesc: 'We write every treatment page under a licensed dentist\'s byline with clinical accuracy, real procedure depth, cost transparency, and explicit E-E-A-T credentials.'
    },
    {
      num: '02',
      title: 'Problem 2: Local map pack SEO and organic SEO are different games, and most agencies conflate them',
      problemDesc: 'The Local Map Pack is driven by Google Business Profile quality, citation consistency, review volume and recency, and proximity signals. Organic blue-link rankings below it are driven by website authority, content quality, technical SEO, and backlinks. A strategy that focuses on only one leaves real patient acquisition on the table.',
      solutionDesc: 'We build a dual-layer strategy to dominate both the Local Map Pack top 3 and organic page 1 rankings simultaneously.'
    },
    {
      num: '03',
      title: 'Problem 3: Dental SEO content cannibalization is everywhere in California',
      problemDesc: 'Most California dental websites have multiple pages competing for the same keyword — a homepage, a services page, and three blog posts all chasing "dentist Los Angeles." Google can\'t tell which page is the authority, so it ranks none of them well or rotates between them inconsistently.',
      solutionDesc: 'We restructure your site architecture so exactly one authoritative page targets each keyword, supported by structured internal links instead of internal competition.'
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px] text-left">

        <div className="max-w-[880px] mb-12">
          <span className="text-[#4285F4] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            SPECIALIST DIAGNOSIS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Why Dental SEO in California Requires a Dentist SEO Expert
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.8]">
            California's dental market is among the most competitive in the country. Los Angeles, San Diego, San Francisco, and Orange County each have thousands of practices chasing the same patient searches, and most of them are running dental SEO strategies ranging from inadequate to actively counterproductive. A generalist SEO freelancer and a genuine dentist SEO expert are not solving the same problem — here's why.
          </p>
        </div>

        {/* 3 Distinct Problem/Solution Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[22px] p-7 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[rgba(66,133,244,0.12)] border border-[rgba(66,133,244,0.25)] text-[#4285F4] font-sora font-extrabold text-[16px] flex items-center justify-center">
                    {item.num}
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-[1.5px] bg-[#0C1220] text-red-400 border border-red-500/20 px-3 py-1 rounded-full">
                    Critical Gap
                  </span>
                </div>

                <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] leading-snug mb-4">
                  {item.title}
                </h3>

                <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8] mb-6">
                  {item.problemDesc}
                </p>
              </div>

              <div className="bg-[#0C1220] p-4 rounded-xl border-l-4 border-[#00C68A]">
                <span className="text-[#00C68A] font-sora font-bold text-[13px] block mb-1">
                  ✓ The Specialist Solution:
                </span>
                <p className="font-sans text-[13px] text-[#F0F4FF] leading-snug">
                  {item.solutionDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-[16px] bg-[#162035] border-l-4 border-[#00C68A] text-left">
          <p className="font-sans text-[14.5px] font-semibold text-[#00C68A]">
            💡 We identify and resolve all three of these problems, along with the technical, content, and local SEO issues underneath them, in every California engagement.
          </p>
        </div>

      </div>
    </section>
  );
}
