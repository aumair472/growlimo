import Link from 'next/link';

export default function DMCoreSolutionsGrid() {
  const solutions = [
    {
      num: '1',
      title: 'Search Engine Optimization (SEO) for California Businesses',
      desc: 'SEO is the compounding asset of digital marketing — done right, it delivers traffic and leads for years without paying per click. GrowLimo builds SEO across three pillars: technical SEO, on-page content optimization, and off-page authority building, starting with a deep technical audit of crawlability, Core Web Vitals, mobile performance, internal link architecture, and indexation health, then layering in keyword research calibrated to California market intent and city-level search behavior.',
      link: '/seo-services-california/'
    },
    {
      num: '2',
      title: 'Google Ads & PPC Management in California',
      desc: 'California has some of the highest cost-per-click rates in the US — in industries like personal injury law in Los Angeles or cosmetic surgery in Orange County, a single click can cost $40–$100. GrowLimo\'s Google Partner-certified PPC team manages campaigns with tight ad group architecture, aggressive negative keyword lists, and conversion-optimized landing pages that turn expensive clicks into paying customers.',
      link: '/google-ads-management-california/'
    },
    {
      num: '3',
      title: 'Content Marketing & SEO Copywriting',
      desc: 'Content is how California businesses build topical authority on Google, educate their buyers, and differentiate in crowded markets. GrowLimo produces service pages, blog articles, resource guides, case studies, and location landing pages grounded in keyword research, competitor content-gap analysis, and the E-E-A-T principles Google\'s quality rater guidelines demand in 2026.',
      link: '/content-marketing-california/'
    },
    {
      num: '4',
      title: 'Email Marketing Services & Automation',
      desc: 'Email marketing consistently delivers the highest ROI of any digital channel — an average of $36–$42 returned for every $1 spent. GrowLimo designs and manages complete email programs: welcome sequences, abandoned cart flows, post-purchase nurture, re-engagement campaigns, and regular newsletters.',
      link: '/contact/'
    },
    {
      num: '5',
      title: 'Social Media Marketing for California Businesses',
      desc: 'California\'s consumer culture is deeply social — Instagram, Facebook, LinkedIn, and TikTok are primary discovery platforms across almost every industry. GrowLimo builds audience targeting frameworks, content calendars anchored to California market seasonality, and paid social campaigns that drive measurable traffic and lead volume.',
      link: '/meta-ads-agency-california/'
    },
    {
      num: '6',
      title: 'Web Design & Conversion Rate Optimization',
      desc: 'Your website is the hub every other channel feeds into — if it\'s slow or fails to build trust within the first five seconds, every dollar spent on SEO and ads is partially wasted. GrowLimo builds fast, mobile-first, SEO-structured websites that pass Google\'s Core Web Vitals thresholds and use semantic HTML for crawler readability.',
      link: '/web-developer-california/'
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            FULL-SERVICE CAPABILITIES
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Our Full-Service Digital Marketing Solutions for California Businesses
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            Every California business has a different competitive position, audience, and growth stage. These digital marketing services are deployed independently or combined, depending on what your specific market and goals require.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[22px] p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[rgba(66,133,244,0.12)] border border-[rgba(66,133,244,0.3)] text-[#4285F4] font-sora font-extrabold text-[16px] flex items-center justify-center">
                    0{sol.num}
                  </span>
                </div>
                <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] mb-3 leading-snug">
                  {sol.title}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8] mb-6">
                  {sol.desc}
                </p>
              </div>

              <Link
                href={sol.link}
                className="cursor-pointer inline-flex items-center gap-1.5 font-sora font-extrabold text-[13.5px] text-[#00C68A] hover:text-[#0FB786] transition-colors"
              >
                Learn More About Dedicated Service →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
