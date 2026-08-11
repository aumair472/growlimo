export default function MetaTestimonials() {
  const testimonials = [
    {
      quote: "We had tried two Meta Ads agencies in California before GrowLimo. Both gave us impressive-sounding reports with reach and impression numbers. Neither could tell us what our ROAS was. GrowLimo fixed our CAPI tracking in the first week, rebuilt our campaigns in the second, and by month three we were at 6.8x ROAS.",
      role: "Founder",
      company: "DTC Skincare Brand",
      location: "Los Angeles, CA"
    },
    {
      quote: "As a dental practice, I was skeptical Meta Ads could work for us — I assumed our patients found us on Google. GrowLimo proved me wrong. 94 new patient leads a month at $18 each, converting at 34% to actual appointments.",
      role: "Practice Owner",
      company: "Cosmetic Dental Practice",
      location: "San Diego, CA"
    },
    {
      quote: "GrowLimo understands Meta at a technical level most agencies don't. The CAPI setup, the Advantage+ structure, the creative rotation system — our SaaS company's demo pipeline from Meta has become one of our top three revenue channels.",
      role: "CEO",
      company: "B2B SaaS Company",
      location: "San Francisco, CA"
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            What California Businesses Say About Their Meta Ads Agency
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            We measure our success by the ROAS, cost-per-lead, and business growth of our California clients. Here is what businesses across California say about GrowLimo's Meta Ads management:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex gap-1 text-[#00C68A] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-sans text-[14.5px] leading-[1.8] text-[#F0F4FF] italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-[rgba(255,255,255,0.08)] pt-4">
                <span className="font-sora font-bold text-[15.5px] text-[#F0F4FF] block">
                  — {t.role}, {t.company}
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
