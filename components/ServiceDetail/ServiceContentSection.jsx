export default function ServiceContentSection({
  section,
  sectionIndex,
  images = [],
  contentSections = [],
  slug = ''
}) {
  const isDentist = slug ? slug.includes('dentist') : false;
  const isWhiteBg = sectionIndex % 2 === 0;
  const bgClass = isWhiteBg ? 'bg-[#FFFFFF]' : 'bg-[#0C1220]';
  const eyebrowClass = 'text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-2.5 block font-sans';
  
  const headingClass = `text-[32px] md:text-[34px] font-extrabold font-sora leading-[1.15] mb-6 tracking-tight ${
    isDentist ? 'border-l-4 border-[#00C68A] pl-4' : ''
  } ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`;
  
  const paragraphClass = `font-sans text-[16px] leading-[1.8] mb-5 font-normal ${
    isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'
  }`;

  // Safe image pointers
  const heroImg = images[0] || '/images/services/hero-dentist-marketing-california.webp';
  const strategyImg = images[1] || '/images/services/dental-marketing-strategy.webp';
  const seoRankingsImg = images[2] || '/images/services/dental-seo-rankings.webp';
  const patientReviewsImg = images[3] || '/images/services/dental-patient-reviews.webp';
  const californiaResultsImg = images[4] || '/images/services/california-dental-results.webp';

  // Helper: Split and parse Case Studies
  const parseCaseStudy = (sec) => {
    if (!sec) return null;
    const heading = sec.heading || '';
    const parts = heading.split(/—|–/);
    const clientRaw = parts[0] || '';
    const stat = parts[1] || '';
    const client = clientRaw.replace(/^Case Study \d+:\s*/i, '').trim();
    return {
      client,
      stat: stat.trim(),
      story: sec.paragraphs ? sec.paragraphs.join(' ') : '',
      bullets: sec.bullets || []
    };
  };

  // Helper: Split and parse Testimonials
  const parseTestimonial = (bullet) => {
    const lastDashIndex = bullet.lastIndexOf('—');
    if (lastDashIndex !== -1) {
      const quote = bullet.substring(0, lastDashIndex).trim();
      const rest = bullet.substring(lastDashIndex + 1).trim();
      const commaIndex = rest.indexOf(',');
      if (commaIndex !== -1) {
        const name = rest.substring(0, commaIndex).trim();
        const location = rest.substring(commaIndex + 1).trim();
        return { quote, name, location };
      }
      return { quote, name: rest, location: '' };
    }
    return { quote: bullet, name: '', location: '' };
  };

  // 1. Two-Column strategy section override for Dentist page (at section index 2)
  if (isDentist && sectionIndex === 2) {
    return (
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 40%: Strategy image wrapper */}
            <div className="lg:col-span-5">
              <div className="rounded-[20px] overflow-hidden shadow-xl border-4 border-white relative group">
                <img
                  src={strategyImg}
                  alt="GrowLimo Dentist Marketing Acquisition Strategy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right 60%: Section content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className={eyebrowClass}>
                CORE CAPABILITIES
              </span>
              <h2 className="text-[32px] md:text-[34px] font-extrabold font-sora leading-[1.15] mb-4 tracking-tight text-[#0B1829] border-l-4 border-[#00C68A] pl-4">
                {section.heading}
              </h2>
              {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="font-sans text-[16px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>
    );
  }

  // 2. Case Studies grid grouping override for Dentist page (group indices 13, 14, 15 at index 13)
  if (isDentist && sectionIndex === 13) {
    const case1 = parseCaseStudy(contentSections[13]);
    const case2 = parseCaseStudy(contentSections[14]);
    const case3 = parseCaseStudy(contentSections[15]);
    const cases = [case1, case2, case3].filter(Boolean);

    return (
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          
          <div className="text-center mb-16">
            <span className={eyebrowClass}>
              SUCCESS STORIES
            </span>
            <h2 className="text-[32px] md:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Proven Patient Growth Results Across California
            </h2>
          </div>

          {/* 3-Column Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cases.map((cs, idx) => (
              <div
                key={idx}
                className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[20px] p-8 shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-[#00C68A]/30 hover:translate-y-[-5px] text-left"
              >
                <div className="space-y-4">
                  {/* Highlighted Metric Stat */}
                  <div className="text-[19px] font-extrabold font-sora text-[#00C68A] leading-snug border-b border-[rgba(255,255,255,0.06)] pb-4">
                    {cs.stat}
                  </div>
                  
                  {/* Brief Story Description */}
                  <p className="font-sans text-[14.5px] leading-[1.7] text-[#8FA8C8]">
                    {cs.story}
                  </p>

                  {/* Bullet Metrics */}
                  {cs.bullets && cs.bullets.length > 0 && (
                    <ul className="space-y-2 mt-4 pt-4 border-t border-[rgba(255,255,255,0.04)]">
                      {cs.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#8FA8C8] font-sans font-medium">
                          <span className="shrink-0 mt-0.5">{bullet.substring(0, 2)}</span>
                          <span>{bullet.substring(2).trim()}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Patient Practice Info */}
                <div className="text-left mt-8 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  <span className="text-[11px] uppercase font-bold text-[#00C68A] tracking-[1px] block">PRACTICE</span>
                  <span className="text-[14px] font-bold text-[#F0F4FF] font-sora block mt-1">{cs.client}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }

  // Prevent duplicate rendering of the grouped case studies
  if (isDentist && (sectionIndex === 14 || sectionIndex === 15)) {
    return null;
  }

  // 3. Testimonials grid of quote cards override for Dentist page (at section index 19)
  if (isDentist && sectionIndex === 19) {
    return (
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          
          <div className="text-center mb-16">
            <span className={eyebrowClass}>
              PATIENT TRUST & REVIEWS
            </span>
            <h2 className="text-[32px] md:text-[38px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
              {section.heading}
            </h2>
            {section.paragraphs && section.paragraphs.map((para, idx) => (
               <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#3D5A73] mt-4 max-w-[800px] mx-auto">
                 {para}
               </p>
            ))}
          </div>

          {/* Testimonial Quote Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {section.bullets && section.bullets.map((bullet, idx) => {
              const { quote, name, location } = parseTestimonial(bullet);

              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm flex flex-col justify-between text-left transition-all duration-300 hover:border-[#00C68A]/35"
                >
                  <div className="space-y-4">
                    <div className="text-[#00C68A]/20 text-[56px] leading-[0px] font-serif select-none">“</div>
                    <p className="font-sans text-[15px] leading-[1.8] italic text-[#3D5A73] relative z-10 border-l-4 border-[#00C68A] pl-4 py-1">
                      {quote.replace(/^["'“”]/, '').replace(/["'“”]$/, '')}
                    </p>
                  </div>

                  {/* Author detail */}
                  <div className="mt-8 pt-4 border-t border-[#E3EEF7]">
                    <h4 className="font-sora font-bold text-[14.5px] text-[#0B1829]">{name}</h4>
                    <p className="font-sans text-[12.5px] text-[#3D5A73] mt-1 font-medium">{location}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    );
  }

  // 4. Standard Fallback rendering, but structured and styled with premium parameters
  return (
    <>
      <section className={`${bgClass} py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]`}>
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="max-w-[860px] mx-auto">

            {/* Section Eyebrow */}
            <span className={eyebrowClass}>
              SECTION {sectionIndex < 9 ? `0${sectionIndex + 1}` : sectionIndex + 1}
            </span>

            {/* H2 Title */}
            <h2 className={headingClass}>
              {section.heading}
            </h2>

            {/* Paragraphs */}
            {section.paragraphs && section.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className={paragraphClass}>
                {para}
              </p>
            ))}

            {/* Bullet Checklist */}
            {section.bullets && section.bullets.length > 0 && (
              <div className="space-y-3.5 my-8">
                {section.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex gap-[14px] items-start mb-3">
                    <div className="w-[28px] h-[28px] rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-[13px] h-[13px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`font-sans text-[15px] leading-[1.7] font-normal ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Cards Grid */}
            {section.items && section.items.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`rounded-[14px] p-7 transition-all duration-200 ${isWhiteBg
                      ? 'bg-[#FFFFFF] border border-[#E3EEF7] hover:border-[#00C68A] shadow-sm'
                      : 'bg-[#1A2438] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(0,198,138,0.30)] shadow-md'
                    }`}
                  >
                    <h3 className={`font-sora font-bold text-[17px] mb-2 leading-snug ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                      {item.title}
                    </h3>
                    <p className={`font-sans text-[14px] leading-relaxed ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Closing Pull Quote */}
            {section.closingText && (
              <div className={`mt-8 p-6 rounded-[16px] border-l-4 border-[#00C68A] ${
                isWhiteBg 
                  ? 'bg-[#F8FAFC] border-[#E3EEF7]' 
                  : 'bg-[#1A2438]/60 border-[rgba(255,255,255,0.04)]'
              }`}>
                <p className={`font-sans text-[16px] leading-[1.8] font-bold italic ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                  "{section.closingText}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC FULL-WIDTH IMAGES INSERTED BETWEEN SECTIONS */}

      {/* A. Hero Stat Cards Overlay Section (renders after section index 0) */}
      {isDentist && sectionIndex === 0 && heroImg && (
        <section className="relative w-full overflow-hidden">
          <div className="relative w-full h-[480px]">
            <img
              src={heroImg}
              alt="GrowLimo California Dentist Digital Marketing Agency"
              className="w-full h-full object-cover brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080D18] via-transparent to-[#0C1220]" />
            
            {/* 3 Floating Stat Cards on Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { value: '60+', text: 'CA Dental Practices Partnered' },
                    { value: '298%', text: 'Average Patient Growth' },
                    { value: '4.7x', text: 'Patient Acquisition ROI' }
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0C1220]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[18px] p-7 shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#00C68A]/40"
                    >
                      <div className="text-[36px] md:text-[42px] font-extrabold font-sora text-[#00C68A] mb-2 leading-none">
                        {card.value}
                      </div>
                      <p className="text-[#F0F4FF] text-[13px] md:text-[14px] leading-relaxed font-sans font-medium">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* B. Full-width SEO rankings image after Service 3 (Meta Ads for Dentists, index === 5) */}
      {isDentist && sectionIndex === 5 && seoRankingsImg && (
        <section className="relative w-full py-16 bg-[#080D18] flex justify-center">
          <div className="container max-w-[900px] px-4">
            <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
              <img
                src={seoRankingsImg}
                alt="Google Local Search Rankings for California Dental Clinics"
                className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-left">
                <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">LOCAL MAP PACK RANKINGS</p>
                <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Google My Business & Map Pack Optimization Dashboard</h4>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* C. Full-width Patient Reviews image after Service 5 (Dental Reputation Management, index === 7) */}
      {isDentist && sectionIndex === 7 && patientReviewsImg && (
        <section className="relative w-full py-16 bg-[#080D18] flex justify-center">
          <div className="container max-w-[900px] px-4">
            <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
              <img
                src={patientReviewsImg}
                alt="California Dentist Team Review Dashboard"
                className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-left">
                <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">REPUTATION & REVIEWS</p>
                <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Consistently Acquiring Five-Star Patient Reviews</h4>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* D. Full-width California results skyline image after Author section (index === 18) */}
      {isDentist && sectionIndex === 18 && californiaResultsImg && (
        <section className="relative w-full overflow-hidden">
          <div className="relative w-full h-[320px]">
            <img
              src={californiaResultsImg}
              alt="California Results Banner Skyline"
              className="w-full h-full object-cover brightness-[0.3]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C1220]/75 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 max-w-[1200px] text-center">
                <h2 className="text-[28px] md:text-[44px] font-extrabold font-sora text-white leading-tight mb-2 tracking-tight">
                  60+ California Dental Practices & DSOs Partnered
                </h2>
                <p className="text-[#00C68A] font-sans font-bold text-[15px] tracking-[2.5px] uppercase">
                  YMYL-COMPLIANT | HIPAA-AWARE | PREDICTABLE PATIENT GROWTH
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
