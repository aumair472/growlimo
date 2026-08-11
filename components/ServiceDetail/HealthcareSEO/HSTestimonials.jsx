export default function HSTestimonials() {
  const testimonials = [
    {
      quote: "We were spending $8,000 a month on Google Ads because we had no organic presence. GrowLimo rebuilt our entire website's content and SEO foundation over six months — now we rank on page one for our core surgical specialties in Los Angeles, and we've cut our ad spend in half. It reads like it was written by a surgeon, because they made sure it was reviewed by one before it went live.",
      practitionerPlaceholder: "[Practitioner name to be confirmed by client]",
      role: "Orthopedic Surgeon",
      location: "Los Angeles, CA"
    },
    {
      quote: "GrowLimo's multi-location SEO work transformed our practice group. Within five months, all four of our San Diego locations were showing up in the local map pack for their respective neighborhoods. The review generation system they built was particularly impressive — 312 genuine reviews across four locations in under a year.",
      role: "Practice Manager",
      company: "Dental Group",
      location: "San Diego, CA"
    },
    {
      quote: "What I appreciated most about GrowLimo was their genuine understanding of healthcare SEO — they knew what YMYL meant, they understood HIPAA implications in digital marketing, and they built content that I was actually proud to have on our website under my name.",
      practitionerPlaceholder: "[Practitioner name to be confirmed by client]",
      role: "Medical Spa Owner",
      location: "Sacramento, CA"
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            PRACTICE TESTIMONIALS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            What California Healthcare Practices Say About Their Healthcare SEO Company
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            We measure our success by the patient pipeline growth of our clients. Here is what California healthcare providers say about GrowLimo's specialist healthcare SEO services:
          </p>
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

                <p className="font-sans text-[14.5px] leading-[1.8] text-[#F0F4FF] italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-[rgba(255,255,255,0.08)] pt-4">
                {t.practitionerPlaceholder && (
                  <div className="mb-2">
                    <span className="border border-dashed border-amber-400/50 bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded-md inline-block font-mono text-[11.5px] tracking-tight">
                      ⚠️ {t.practitionerPlaceholder}
                    </span>
                  </div>
                )}
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
