export default function DSTestimonials() {
  const testimonials = [
    {
      stat: "4 → 47 Monthly Inquiries",
      quote: "Dentist Los Angeles ranking: Page 4 → Page 1, Position #7 organic. Google Map Pack: Position #1. New patient inquiries from search: 4 → 47 monthly. Google reviews: 14 → 156. Timeline: 6 months.",
      author: "Dr. S. Kang",
      role: "Koreatown Family Dentist",
      location: "Los Angeles, CA"
    },
    {
      stat: "$84,000+ Monthly Revenue Lift",
      quote: "Veneers & Implants organic ranking: Position #4 veneers, Position #5 implants. Cosmetic inquiries: 0 → 31 monthly. Estimated monthly revenue growth: $84,000+. Ad spend reduced by $1,400 monthly.",
      author: "Dr. L. Harrison",
      role: "Cosmetic Practice Owner",
      location: "San Diego, CA"
    },
    {
      stat: "22 → 134 Inquiries Across 6 Locations",
      quote: "All 6 Orange County locations in Google Map Pack for dentist [city]. Inquiries: 22 → 134 monthly. Total reviews across DSO: 89 → 498. Booking volume up 510% year-over-year.",
      author: "Dr. M. Patel",
      role: "DSO Operations Director",
      location: "Orange County, CA"
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-14">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            PRACTITIONER TESTIMONIALS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            What Our California Dental Clients Say
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            We measure our success by the patient pipeline growth of our dental practices:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 text-left flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Stat-forward Header */}
                <div className="bg-[#0C1220] p-3 rounded-xl border border-[rgba(0,198,138,0.2)] mb-4">
                  <span className="font-sora font-extrabold text-[15.5px] text-[#00C68A] block">
                    {t.stat}
                  </span>
                </div>

                <p className="font-sans text-[14.5px] leading-[1.8] text-[#F0F4FF] italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-[rgba(255,255,255,0.08)] pt-4">
                <span className="font-sora font-bold text-[16px] text-[#F0F4FF] block">
                  — {t.author}
                </span>
                <span className="font-sans text-[13px] text-[#8FA8C8] block">
                  {t.role}
                </span>
                <span className="font-sans text-[12.5px] text-[#00C68A] block font-medium mt-0.5">
                  📍 {t.location}
                </span>

                {/* Client Sign-Off Warning Badge */}
                <div className="mt-3">
                  <span className="text-[10.5px] font-mono text-amber-300 bg-amber-500/10 border border-dashed border-amber-400/50 px-2 py-0.5 rounded inline-block">
                    ⚠️ [Client Consent Flag: Named practitioner testimonial]
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
