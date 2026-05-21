import React from 'react';
import testimonialsData from '../content/data/testimonials.json';

function Testimonials({ limit = null, showTitle = true, lightTheme = true }) {
  const allTestimonials = testimonialsData.testimonials;
  const testimonials = limit ? allTestimonials.slice(0, limit) : allTestimonials;

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getIndustryTag = (company) => {
    if (company.toLowerCase().includes('medical')) return 'Healthcare Marketing';
    if (company.toLowerCase().includes('law') || company.toLowerCase().includes('legal')) return 'Legal Marketing';
    if (company.toLowerCase().includes('home')) return 'Home Services';
    if (company.toLowerCase().includes('lifestyle') || company.toLowerCase().includes('brand')) return 'eCommerce Marketing';
    return 'Digital Marketing';
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 flex-shrink-0 ${i < rating ? 'text-[#DD6613]' : 'text-slate-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section 
      className={`${lightTheme ? 'bg-[#FFFFFF] text-[#0B1829]' : 'bg-[#080D18] text-white'} py-[96px] relative`} 
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
              Testimonials
            </span>
            <h2 
              id="testimonials-heading" 
              className={`text-[38px] font-extrabold font-sora ${lightTheme ? 'text-[#0B1829]' : 'text-[#F0F4FF]'} mb-4 tracking-tight`}
            >
              Trusted By Industry Leaders
            </h2>
            <p className={`text-[16px] font-sans ${lightTheme ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'} max-w-2xl mx-auto`}>
              Real results from real businesses in your industry
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`p-[28px] rounded-[16px] border flex flex-col justify-between transition-all duration-200 ease-in-out ${
                lightTheme 
                  ? 'bg-white border-[#E3EEF7] hover:border-[#00C68A] shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,198,138,0.10)]' 
                  : 'bg-[#1A2438] border-white/7 hover:border-[#00C68A]/35 shadow-lg'
              }`}
              role="article"
              aria-labelledby={`testimonial-${testimonial.id}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <StarRating rating={testimonial.rating} />
                  
                  {/* Industry Badge */}
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#00C68A]/10 border border-[#00C68A]/25 text-[#00C68A] font-sans">
                    {getIndustryTag(testimonial.company)}
                  </span>
                </div>

                <blockquote className="mb-8">
                  <p
                    id={`testimonial-${testimonial.id}`}
                    className={`text-[15px] leading-[1.75] italic ${
                      lightTheme ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'
                    }`}
                  >
                    "{testimonial.content}"
                  </p>
                </blockquote>
              </div>

              <div className={`flex items-center gap-4 border-t pt-6 ${
                lightTheme ? 'border-[#E3EEF7]' : 'border-white/7'
              }`}>
                {/* Avatar Initials Circle */}
                <div
                  className={`w-[44px] h-[44px] rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                    lightTheme ? 'bg-[#0B1829] text-[#00C68A]' : 'bg-[#00C68A]/20 text-[#00C68A]'
                  }`}
                  aria-hidden="true"
                >
                  {testimonial.initials || getInitials(testimonial.name)}
                </div>

                <div>
                  <p className={`text-[14px] font-bold ${lightTheme ? 'text-[#0B1829]' : 'text-white'}`}>{testimonial.name}</p>
                  <p className={`text-[12px] font-medium ${lightTheme ? 'text-[#6B8499]' : 'text-[#4A6080]'}`}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
