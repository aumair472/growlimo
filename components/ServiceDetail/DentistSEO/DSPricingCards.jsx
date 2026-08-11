import Link from 'next/link';

export default function DSPricingCards() {
  const plans = [
    {
      name: 'Local Practice Starter',
      price: '$797',
      period: '/month',
      description: 'Best for single-location practices in moderate competition markets seeking local map pack and core SEO foundation.',
      recommended: false,
      features: [
        'Google Business Profile Optimization',
        'Local Citation Audit & Sync (28+ Directories)',
        'Dental Schema Markup Implementation',
        '3 Core Treatment Page Optimizations',
        'Monthly Transparent Performance Reports',
        'Month-to-Month, No Lock-In'
      ]
    },
    {
      name: 'Growth Patient Accelerator',
      price: '$1,497',
      period: '/month',
      description: 'Best for practices in hyper-competitive metros or scaling high-margin cosmetic and implant patient volume.',
      recommended: true,
      features: [
        'Everything in Local Practice Starter',
        '6 Custom YMYL Treatment Pages (1,800+ Words)',
        'Automated Review Generation Workflow Setup',
        '8 Local Healthcare & Dental Backlinks',
        'Local Competitor Content Gap Audit',
        'Dedicated Account Strategist Call'
      ]
    },
    {
      name: 'Consolidated DSO Program',
      price: '$2,997',
      period: '/month',
      description: 'Best for dental service organizations or multi-practice groups with 3+ locations across California.',
      recommended: false,
      features: [
        'Comprehensive Multi-Location Architecture',
        'Unique Neighborhood Location Landing Pages',
        'Separate GBP Optimizations Per Practice Site',
        'Consolidated Group Analytics Dashboard',
        'Location-Specific Review Capture Workflows',
        'Enterprise Technical & Off-Page Authority'
      ]
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            TRANSPARENT INVESTMENT
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            California Dental SEO Pricing
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            We offer dental-specific SEO programs calibrated for practice growth. All packages are backed by data-driven, HIPAA-aware strategies with no long-term contract locks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-[24px] p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.recommended
                  ? 'bg-[#162035] border-2 border-[#00C68A] shadow-[0_10px_30px_rgba(0,198,138,0.2)] lg:-translate-y-2'
                  : 'bg-[#0C1220] border border-[rgba(255,255,255,0.08)]'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00C68A] text-[#080D18] text-[11px] font-sora font-extrabold uppercase tracking-[2px] py-1 px-4 rounded-full shadow-md">
                  Most Popular for CA Practices
                </div>
              )}

              <div>
                <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] mb-2">
                  {plan.name}
                </h3>
                <p className="font-sans text-[13px] text-[#8FA8C8] mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-[rgba(255,255,255,0.08)]">
                  <span className="font-sora font-extrabold text-[38px] text-[#F0F4FF] tracking-tight">
                    {plan.price}
                  </span>
                  <span className="font-sans text-[#8FA8C8] text-[14px]">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 font-sans text-[13.5px] text-[#8FA8C8]">
                  {plan.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <span className="text-[#00C68A] font-bold mt-0.5 shrink-0">✓</span>
                      <span className="text-[#F0F4FF]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact/"
                className={`cursor-pointer w-full py-3.5 rounded-xl font-sora font-extrabold text-[14px] text-center transition-all duration-200 block ${
                  plan.recommended
                    ? 'bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] shadow-[0_4px_16px_rgba(0,198,138,0.3)]'
                    : 'bg-[#162035] hover:bg-[rgba(255,255,255,0.08)] text-[#F0F4FF] border border-[rgba(255,255,255,0.1)]'
                }`}
              >
                Get Started →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
