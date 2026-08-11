import Link from 'next/link';
import Form from '../../common/Form';

export default function MetaPageHero({ h1, subheadline, slug }) {
  const statBar = [
    { value: '5.4x', label: 'Average Client ROAS', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    { value: '$800K+', label: 'Meta Spend Managed', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: 'Meta Blueprint', label: 'Certified Agency Team', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { value: '90-Day Ramp', label: 'To Peak ROAS Performance', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  return (
    <section className="bg-[#080D18] text-white pt-[90px] md:pt-[110px] pb-[70px] md:pb-[90px] relative overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(6,104,225,0.05)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left 7 Columns */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 bg-[rgba(6,104,225,0.12)] border border-[rgba(6,104,225,0.30)] text-[#4285F4] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 leading-none font-sans">
              <span className="w-2 h-2 rounded-full bg-[#0668E1] animate-pulse" />
              TOP RATED CALIFORNIA META ADS AGENCY
            </div>

            <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
              {h1}
            </h1>

            <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.75] mb-8">
              {subheadline}
            </p>

            {/* 4 Stat Bar Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-6">
              {statBar.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[12px] p-3.5 shadow-md hover:border-[#00C68A]/40 transition-all duration-200"
                >
                  <span className="text-[#00C68A] font-sora font-extrabold text-[17px] mb-0.5 leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[#F0F4FF] font-sans text-[11.5px] font-medium leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact/"
              className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
            >
              Get Your Free Meta Ads Audit →
            </Link>
          </div>

          {/* Right 5 Columns: Lead Form Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#0668E1]/10 rounded-bl-full pointer-events-none" />
              <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                Get Your Free Meta Ads Audit
              </h3>
              <p className="text-[13px] text-[#8FA8C8] mb-4">
                Uncover ad fatigue, CAPI tracking gaps, & ROAS scaling bottlenecks.
              </p>
              <Form
                slug={slug}
                compact={true}
                variant="contact"
                ctaButtonText="Claim Your Free Meta Audit →"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
