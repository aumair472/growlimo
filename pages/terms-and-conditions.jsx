import SEO from '../components/SEO';
import { getSEOConfig } from '../lib/config';

export default function TermsAndConditionsPage() {
  const seo = getSEOConfig('/terms-and-conditions');

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url={seo.canonical}
      />
      <div className="bg-[#080D18] min-h-screen font-sans">
        
        {/* HERO SECTION */}
        <section className="bg-[#080D18] text-white pt-[140px] pb-[60px] relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(221,102,19,0.04)] blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-10 max-w-[900px] relative z-10">
            <div className="text-center mb-8">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans">
                LEGAL AGREEMENT
              </span>
              
              <h1 className="text-[42px] md:text-[52px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-4 tracking-tight">
                Terms & Conditions
              </h1>
              
              <p className="text-[16px] text-[#8FA8C8] mb-6">
                Effective Date: March 15, 2026
              </p>
              
              <p className="text-[18px] text-[#8FA8C8] leading-[1.7] max-w-[700px] mx-auto">
                Please read these terms carefully before using our services. By accessing growlimo.com, you agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="bg-white py-[96px]">
          <div className="container mx-auto px-4 md:px-10 max-w-[900px]">
            
            {/* Table of Contents */}
            <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[16px] p-8 mb-12">
              <h2 className="font-sora font-bold text-[20px] text-[#0B1829] mb-6">
                Table of Contents
              </h2>
              <div className="space-y-3">
                {[
                  'Acceptance of Terms',
                  'Services Provided',
                  'Intellectual Property',
                  'Limitation of Liability',
                  'Governing Law'
                ].map((item, idx) => (
                  <a 
                    key={idx}
                    href={`#section-${idx + 1}`}
                    className="flex items-center gap-3 text-[#0B1829] hover:text-[#00C68A] transition-colors duration-200"
                  >
                    <span className="text-[#00C68A]">→</span>
                    <span className="text-[15px] font-medium">{idx + 1}. {item}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Section 1 */}
            <div id="section-1" className="mb-12">
              <h2 className="font-sora font-extrabold text-[32px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                1. Acceptance of Terms
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[16px] text-[#0B1829] leading-[1.8] mb-6">
                  By accessing and using growlimo.com, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our website or services.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-12">
              <h2 className="font-sora font-extrabold text-[32px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                2. Services Provided
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[16px] text-[#0B1829] leading-[1.8] mb-6">
                  GrowLimo provides digital marketing services, including but not limited to SEO, PPC, social media management, and web design. All services are subject to a separate service agreement where applicable.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="mb-12">
              <h2 className="font-sora font-extrabold text-[32px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                3. Intellectual Property
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[16px] text-[#0B1829] leading-[1.8] mb-6">
                  The content, graphics, design, and other materials on this website are protected by intellectual property laws. You may not use, reproduce, or distribute any part of this site without our express written permission.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="mb-12">
              <h2 className="font-sora font-extrabold text-[32px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                4. Limitation of Liability
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[16px] text-[#0B1829] leading-[1.8] mb-6">
                  GrowLimo will not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services or website. Marketing results may vary based on market conditions.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="mb-12">
              <h2 className="font-sora font-extrabold text-[32px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                5. Governing Law
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[16px] text-[#0B1829] leading-[1.8] mb-6">
                  These terms are governed by the laws of the State of Delaware, United States, without regard to its conflict of law principles.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
