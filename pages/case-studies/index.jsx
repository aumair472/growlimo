import { useEffect, useRef } from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { ENC, handleCall } from '../../lib/contactProtection';

export default function CaseStudiesIndex({ caseStudies }) {
  const mountedAt = useRef(null);
  useEffect(() => { mountedAt.current = Date.now(); }, []);
  return (
    <>
      <SEO
        title="Marketing Case Studies | Proven Results & ROI | GrowLimo"
        description="Real digital marketing success stories showing proven ROI and lead generation results for businesses across the United States."
        url="https://growlimo.com/case-studies/"
      />

      <div className="bg-[#080D18] text-white">
        
        {/* 1. HERO SECTION (dark #080D18) */}
        <section className="bg-[#080D18] pt-[140px] pb-16 relative overflow-hidden" aria-labelledby="case-heading">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00C68A]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-4 font-sans">
              SUCCESS STORIES
            </span>
            <h1
              id="case-heading"
              className="text-4xl md:text-5xl lg:text-[56px] font-extrabold mb-5 leading-tight text-white font-sora tracking-tight max-w-4xl mx-auto"
            >
              Proven Results for Real Businesses
            </h1>
            <p className="text-[#8FA8C8] text-base md:text-[18px] max-w-2xl mx-auto font-sans leading-relaxed">
              See how we've helped clinics and businesses across the US achieve predictable revenue growth through data-driven digital marketing.
            </p>
          </div>
        </section>

        {/* 2. CASE STUDIES GRID (dark #0C1220) */}
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-b border-white/5" aria-labelledby="grid-heading">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((cs) => (
                <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="block h-full">
                  <div className="bg-[#1A2438] border border-[rgba(255,255,255,0.07)] rounded-[16px] p-8 hover:border-[rgba(0,198,138,0.35)] transition-all duration-300 flex flex-col h-full shadow-lg group">
                    
                    {/* Result Metrics Strip */}
                    <div className="flex items-baseline gap-1 text-[#00C68A] font-sora font-extrabold text-[28px] leading-tight mb-4">
                      {cs.stats[2]?.value || cs.stats[0]?.value}
                      <span className="text-xs text-[#8FA8C8] uppercase font-sans font-semibold tracking-wider ml-2">
                        {cs.stats[2]?.label || cs.stats[0]?.label}
                      </span>
                    </div>

                    {/* Client Name */}
                    <h3 className="text-xl font-bold font-sora text-[#F0F4FF] mb-3 group-hover:text-[#00C68A] transition-colors leading-snug">
                      {cs.client}
                    </h3>

                    {/* Description / Summary */}
                    <p className="text-[14px] font-sans text-[#8FA8C8] leading-relaxed mb-6 flex-grow">
                      {cs.summary}
                    </p>

                    {/* Mini Stat Grid at bottom */}
                    <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/5 mt-auto">
                      {cs.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-base font-bold font-sora text-white">{stat.value}</div>
                          <div className="text-[10px] font-semibold text-[#4A6080] uppercase tracking-wider font-sans mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CTA SECTION */}
        <section className="bg-[#080D18] py-[96px] relative z-10">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-[44px] font-extrabold font-sora mb-5 text-white tracking-tight leading-tight">
              Ready to Grow Your Business?
            </h2>
            <p className="text-[#8FA8C8] text-base md:text-lg max-w-xl mx-auto mb-10 font-sans leading-relaxed">
              Stop losing customers to competitors. Start capturing high-intent searches and scaling your revenue predictably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <Link
                href="/contact/"
                className="bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-4 px-10 rounded-full transition-all duration-200 text-center shadow-lg shadow-[#DD6613]/20 transform hover:scale-[1.02]"
              >
                Schedule a Free Consultation
              </Link>
              <button
                type="button"
                onClick={() => handleCall(ENC.US_PHONE, mountedAt.current)}
                className="bg-transparent text-white border border-white/20 hover:border-white font-bold py-4 px-10 rounded-full transition-all duration-200 text-center transform hover:scale-[1.02] cursor-pointer"
                aria-label="Call US Office"
              >
                Call +1 (667) 347-4729
              </button>
            </div>

            {/* Location directories or markets */}
            <div className="mt-12 text-sm text-[#4A6080]">
              <span className="font-semibold text-white/60 mr-3">Looking for local services? Explore our flagships in:</span>
              <Link href="/dubai/" className="hover:text-[#00C68A] transition-colors font-medium">Dubai, UAE</Link>
              <span className="mx-2.5 text-white/10">•</span>
              <Link href="/australia/" className="hover:text-[#00C68A] transition-colors font-medium">Australia (National)</Link>
              <span className="mx-2.5 text-white/10">•</span>
              <Link href="/seo-services-california/" className="hover:text-[#00C68A] transition-colors font-medium">California</Link>
              <span className="mx-2.5 text-white/10">•</span>
              <Link href="/seo-services-texas/" className="hover:text-[#00C68A] transition-colors font-medium">Texas</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export async function getStaticProps() {
  const csDir = path.join(process.cwd(), 'content/case-studies');
  const files = fs.readdirSync(csDir);

  const caseStudies = files.map((file) => {
    const filePath = path.join(csDir, file);
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  });

  return {
    props: {
      caseStudies,
    },
  };
}
