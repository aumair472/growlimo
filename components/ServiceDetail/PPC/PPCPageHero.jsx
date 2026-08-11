import Link from 'next/link';
import Form from '../../common/Form';

export default function PPCPageHero({ h1, subheadline, slug }) {
  const statBar = [
    { value: '$1.2M+', label: 'California Ad Spend Managed', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '5.8x', label: 'Average Client ROAS', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    { value: '200+', label: 'PPC Accounts Audited', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '4.9★', label: 'Client Rating', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' }
  ];

  return (
    <section className="bg-[#080D18] text-white pt-[90px] md:pt-[110px] pb-[70px] md:pb-[90px] relative overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(66,133,244,0.04)] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left 7 Columns */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 leading-none font-sans">
              <span className="w-2 h-2 rounded-full bg-[#00C68A] animate-pulse" />
              FULL-SPECTRUM CALIFORNIA PPC AGENCY
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
              Get Your Free PPC Audit →
            </Link>
          </div>

          {/* Right 5 Columns: Lead Form Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />
              <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                Get Your Free California PPC Audit
              </h3>
              <p className="text-[13px] text-[#8FA8C8] mb-4">
                Discover wasted spend, tracking errors, & bid inefficiencies across platforms.
              </p>
              <Form
                slug={slug}
                compact={true}
                variant="contact"
                ctaButtonText="Claim Your Free PPC Audit →"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
