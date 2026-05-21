import Link from 'next/link';

export default function ServiceInvestSection({ investSection }) {
  if (!investSection) return null;
  
  const isArray = Array.isArray(investSection);
  const bullets = isArray ? investSection : (investSection.bullets || []);
  const heading = isArray ? 'High-Yield Growth Investment' : (investSection.heading || 'High-Yield Growth Investment');
  const intro = isArray ? 'Elevate your brand with data-backed campaigns designed to dominate search engine results.' : (investSection.intro || 'Elevate your brand with data-backed campaigns designed to dominate search engine results.');
  const closingText = isArray ? '' : investSection.closingText;

  return (
    <section className="bg-[#FFFFFF] py-[96px] relative z-10 text-left border-t border-[#E3EEF7]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
        <div className="max-w-[860px] mx-auto text-center mb-16">
          
          {/* Eyebrow */}
          <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2px] mb-4 block font-sans">
            INVESTMENT & VALUE
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#0B1829] tracking-tight leading-tight">
            {heading}
          </h2>

          {intro && (
            <p className="font-sans text-[16px] text-[#3D5A73] mt-4 max-w-xl mx-auto leading-relaxed">
              {intro}
            </p>
          )}
        </div>

        <div className="max-w-[560px] mx-auto">
          {/* Pricing/investment card */}
          <div className="bg-[#FFFFFF] border border-[#E3EEF7] rounded-[16px] p-8 md:p-10 shadow-lg hover:border-[#00C68A] hover:shadow-[0_8px_32px_rgba(0,198,138,0.08)] transition-all duration-300 group">
            <h3 className="font-sora font-bold text-[20px] text-[#0B1829] mb-2 leading-snug">
              ROI-Led Scale Campaign
            </h3>
            
            <div className="text-[36px] font-extrabold font-sora text-[#00C68A] mb-4 leading-none">
              Custom Strategy
            </div>
            
            <p className="font-sans text-[15px] text-[#3D5A73] mb-8 leading-relaxed">
              A localized, fully managed marketing deployment engineered for maximum client acquisition.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-8">
              {bullets.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="w-[20px] h-[20px] rounded-full bg-[rgba(0,198,138,0.10)] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-[10px] h-[10px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-sans text-[14px] text-[#3D5A73] font-medium leading-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact/"
              className="block text-center bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-3.5 px-8 rounded-[10px] text-[15px] transition-all duration-200 shadow-md shadow-[#DD6613]/10 transform hover:scale-[1.01] border-none w-full"
            >
              Book Free Consultation
            </Link>
          </div>
          
          {closingText && (
            <p className="font-sans text-[14px] text-[#3D5A73] leading-relaxed text-center mt-6">
              {closingText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
