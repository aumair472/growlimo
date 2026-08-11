import Link from 'next/link';

export default function DMWhatIsAgency() {
  const serviceHubCards = [
    {
      title: 'Search Engine Optimization (SEO)',
      desc: 'Earning organic rankings that compound over time across California cities.',
      link: '/seo-services-california/',
      badge: 'Organic Growth'
    },
    {
      title: 'Google Ads & PPC Management',
      desc: 'Paid visibility with immediate, trackable lead flow and Quality Score optimization.',
      link: '/google-ads-management-california/',
      badge: 'Paid Search'
    },
    {
      title: 'Content Marketing & SEO Copywriting',
      desc: 'Building topical authority and answering buyer questions with E-E-A-T depth.',
      link: '/content-marketing-california/',
      badge: 'Authority Content'
    },
    {
      title: 'Email Marketing & Automation',
      desc: 'Converting existing leads and customers into repeat revenue ($36–$42 ROI).',
      link: '/contact/',
      badge: 'Lifecycle Retention'
    },
    {
      title: 'Social Media & Meta Ads',
      desc: 'Discovery and brand trust on Instagram, Facebook, LinkedIn, and TikTok.',
      link: '/meta-ads-agency-california/',
      badge: 'Paid Social'
    },
    {
      title: 'Web Design & Conversion Optimization',
      desc: 'The high-converting site hub every other marketing channel sends traffic to.',
      link: '/web-developer-california/',
      badge: 'CRO & Web'
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px] text-left">

        <div className="max-w-[880px] mb-12">
          <span className="text-[#4285F4] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            SYSTEMIC ARCHITECTURE
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            What Is a Digital Marketing Agency, and What Digital Marketing Services Does It Include?
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.8] mb-4">
            A digital marketing agency is a company that manages a business's online growth channels under one coordinated strategy, rather than as disconnected, one-off tactics. In California's saturated market, the businesses that win online are the ones treating digital marketing as a system, not a checklist.
          </p>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#F0F4FF] font-semibold">
            The core digital marketing services a full-service agency like GrowLimo provides in California include:
          </p>
        </div>

        {/* 6 Clickable Service Hub Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {serviceHubCards.map((card, idx) => (
            <Link
              key={idx}
              href={card.link}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 group shadow-lg cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                  <span className="text-[#8FA8C8] group-hover:text-[#00C68A] transition-colors text-[18px]">
                    →
                  </span>
                </div>
                <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] group-hover:text-[#00C68A] transition-colors mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                  {card.desc}
                </p>
              </div>
              <span className="mt-5 font-sora font-bold text-[13px] text-[#00C68A] flex items-center gap-1">
                Explore Dedicated Service →
              </span>
            </Link>
          ))}
        </div>

        <div className="p-5 rounded-[16px] bg-[#162035] border-l-4 border-[#00C68A] text-left">
          <p className="font-sans text-[14.5px] font-semibold text-[#8FA8C8]">
            Most California businesses don't need every service on day one — they need the right combination for their stage, budget, and competitive market. That's why every GrowLimo engagement starts with a free audit, not a fixed package.
          </p>
        </div>

      </div>
    </section>
  );
}
