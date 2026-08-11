export default function PPCTestimonials() {
  const testimonials = [
    {
      quote: "We had been burning $4,000 a month on Google Ads for over a year with barely 10 leads to show for it. GrowLimo audited our account in the first week, showed us exactly where the money was going, and within 60 days we were generating 55 leads on the same budget.",
      role: "HVAC Company Owner",
      location: "Sacramento, CA"
    },
    {
      quote: "As a personal injury firm in Orange County, our Google Ads were expensive and barely breaking even. GrowLimo cut our cost per intake in half and more than doubled our consultation volume.",
      role: "Managing Partner",
      company: "Orange County Law Firm",
      location: "Orange County, CA"
    },
    {
      quote: "GrowLimo doesn't just run ads — they build systems. Our med spa went from a 1.6x ROAS to over 7x in three months. I've referred three other business owners to them already.",
      role: "Medical Spa Owner",
      location: "Los Angeles, CA"
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            What California Businesses Say About This PPC Agency
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex gap-1 text-[#00C68A] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-sans text-[15px] leading-[1.8] text-[#F0F4FF] italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-[rgba(255,255,255,0.08)] pt-4">
                <span className="font-sora font-bold text-[16px] text-[#F0F4FF] block">
                  — {t.role}{t.company ? `, ${t.company}` : ''}
                </span>
                <span className="font-sans text-[13px] text-[#00C68A] block font-medium">
                  📍 {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
