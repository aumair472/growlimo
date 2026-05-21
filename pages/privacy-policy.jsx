import SEO from '../components/SEO';
import { getSEOConfig } from '../lib/config';

export default function PrivacyPolicyPage() {
  const seo = getSEOConfig('/privacy-policy');

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
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-10 max-w-[900px] relative z-10">
            <div className="text-center mb-8">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans">
                LEGAL INFORMATION
              </span>
              
              <h1 className="text-[42px] md:text-[52px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-4 tracking-tight">
                Privacy Policy
              </h1>
              
              <p className="text-[16px] text-[#8FA8C8] mb-6">
                Last Updated: March 15, 2026
              </p>
              
              <p className="text-[18px] text-[#8FA8C8] leading-[1.7] max-w-[700px] mx-auto">
                At GrowLimo, we are committed to protecting your privacy and ensuring the security of any personal information you share with us.
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
                  'Commitment to Privacy',
                  'Information Collection',
                  'Data Usage',
                  'GDPR & CCPA Compliance',
                  'Contact Information'
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
                1. Commitment to Privacy
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[16px] text-[#0B1829] leading-[1.8] mb-6">
                  At GrowLimo, we are committed to protecting your privacy and ensuring the security of any personal information you share with us. This Privacy Policy outlines our practices regarding information collection, usage, and protection across our digital marketing services.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-12">
              <h2 className="font-sora font-extrabold text-[32px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                2. Information Collection
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[16px] text-[#0B1829] leading-[1.8] mb-6">
                  We collect information to provide better services to all our users. The types of personal information we collect include:
                </p>
                <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[12px] p-6 mb-6">
                  <ul className="space-y-3">
                    {[
                      'Name and contact details (email, phone number)',
                      'Business and website information for audit purposes',
                      'Technical data via cookies and tracking technologies'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#00C68A] text-[18px] mt-1">✓</span>
                        <span className="text-[#0B1829] text-[15px] leading-[1.7]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="mb-12">
              <h2 className="font-sora font-extrabold text-[32px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                3. Data Usage
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[16px] text-[#0B1829] leading-[1.8] mb-6">
                  Your data is used to personalize your experience, improve our website, and provide effective marketing strategies. We do not sell your data to third parties. We use industry-standard encryption to protect your sensitive information.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="mb-12">
              <h2 className="font-sora font-extrabold text-[32px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                4. GDPR & CCPA Compliance
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[16px] text-[#0B1829] leading-[1.8] mb-6">
                  We comply with international and local data protection regulations, including GDPR for European users and CCPA for California residents, providing you with transparency and control over your data.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="mb-12">
              <h2 className="font-sora font-extrabold text-[32px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                5. Contact Information
              </h2>
              <div className="bg-[#00C68A]/5 border border-[#00C68A]/20 rounded-[16px] p-8">
                <p className="text-[16px] text-[#0B1829] leading-[1.8] mb-4">
                  For any privacy-related inquiries, please contact our compliance team:
                </p>
                <a 
                  href="mailto:privacy@growlimo.com" 
                  className="text-[#00C68A] font-bold text-[18px] hover:underline"
                >
                  privacy@growlimo.com
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
