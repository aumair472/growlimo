import React from 'react';

export default function ServiceBreakdown({ servicesBreakdown }) {
  if (!servicesBreakdown || !servicesBreakdown.length) return null;

  return (
    <section className="bg-[#080D18] py-[96px] px-4 md:px-[40px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
      <div className="container mx-auto max-w-[1100px]">
        <div className="max-w-[860px] mx-auto text-center mb-[48px]">
          <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-[10px] block font-sans">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#F0F4FF] tracking-tight leading-tight">
            What We Do For You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] max-w-6xl mx-auto">
          {servicesBreakdown.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A2438] border border-[rgba(255,255,255,0.07)] p-[28px] rounded-[14px] h-full flex flex-col relative overflow-hidden hover:border-[rgba(0,198,138,0.30)] hover:bg-[#1F2B3E] transition-all duration-200 group"
            >
              {/* Top green accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00C68A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />

              <div className="w-[44px] h-[44px] rounded-full bg-[rgba(0,198,138,0.10)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center text-[#00C68A] mb-[16px]">
                <svg className="w-[20px] h-[20px] transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <h3 className="font-sora font-bold text-[16px] text-[#F0F4FF] mb-[8px]">
                {item.title}
              </h3>
              <p className="font-sans text-[14px] text-[#8FA8C8] leading-[1.65] flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
