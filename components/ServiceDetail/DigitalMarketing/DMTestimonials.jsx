export default function DMTestimonials() {
  const testimonials = [
    {
      quote: "Before GrowLimo, we were spending $3,000/month on Google Ads and getting maybe 15 leads. Within 60 days of them taking over, we were getting 70+ leads on the same budget.",
      role: "Plumbing Company Owner",
      location: "San Diego, CA"
    },
    {
      quote: "GrowLimo built out our entire SEO and content strategy from scratch. Six months later we're ranking on page 1 for our most competitive keywords.",
      role: "CEO",
      company: "B2B SaaS Company",
      location: "San Francisco, CA"
    },
    {
      quote: "Six months later, our email program alone is generating 28% of our total store revenue.",
      role: "E-Commerce Founder",
      location: "Los Angeles, CA"
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
            What California Businesses Say About Working With GrowLimo
          </h2>
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
