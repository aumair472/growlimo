import Link from 'next/link';

export default function DSFinalCTA() {
  return (
    <section className="bg-[#0C1220] py-[90px] md:py-[110px] relative overflow-hidden z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C68A]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 md:px-10 max-w-[960px] relative z-10 text-center">
        <div className="bg-[#162035] border border-[rgba(0,198,138,0.25)] rounded-[24px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4285F4]/10 rounded-bl-full pointer-events-none" />

          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] mb-4 inline-block font-sans">
            BUILD YOUR DENTAL PATIENT PIPELINE
          </span>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
            Get Started With California's Trusted Dental SEO Company
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[760px] mx-auto mb-6">
            Stop losing prospective patients to local competitors who outrank you in the Map Pack. Every day your practice isn't on Page 1 is new patient revenue going somewhere else. Our specialist California dental SEO team is ready to build your custom patient pipeline, starting with a free, comprehensive practice audit.
          </p>

          <p className="font-sans text-[13px] text-[#00C68A] font-semibold mb-8 max-w-[840px] mx-auto">
            📍 Serving all of California — Los Angeles | San Diego | San Francisco | Sacramento | San Jose | Orange County | Fresno | Long Beach | Oakland | Anaheim | Riverside | Irvine
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact/"
              className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
            >
              Get My Free Dental SEO Audit →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
