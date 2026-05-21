import SEO from '../components/SEO';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <>
      <SEO
        title="Thank You | GrowLimo"
        description="Your message has been received. We'll be in touch shortly."
        url="https://growlimo.com/thank-you/"
        noindex={true}
      />
      <div className="bg-[#080D18] min-h-screen font-sans text-white">
        
        {/* HERO SECTION */}
        <section className="relative pt-[140px] pb-[120px] overflow-hidden">
          {/* Background Glow Effects */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.06)] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.04)] blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-10 max-w-[900px] relative z-10 text-center">
            
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-[120px] h-[120px] rounded-full bg-[#00C68A]/10 border-4 border-[#00C68A] flex items-center justify-center animate-pulse">
                <svg className="w-[60px] h-[60px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-[42px] md:text-[56px] font-extrabold font-sora text-[#F0F4FF] leading-[1.1] mb-6 tracking-tight">
              Success! Your Roadmap is Coming.
            </h1>

            {/* Subheading */}
            <p className="text-[18px] md:text-[20px] text-[#8FA8C8] leading-[1.7] mb-12 max-w-[700px] mx-auto">
              Thank you for reaching out. One of our growth specialists will review your practice data and contact you within <span className="text-[#00C68A] font-bold">24 hours</span> to schedule your strategy session.
            </p>

            {/* What Happens Next Section */}
            <div className="bg-[#1A2438]/60 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 mb-12 text-left">
              <h2 className="font-sora font-bold text-[24px] text-[#F0F4FF] mb-6 text-center border-b border-[rgba(255,255,255,0.06)] pb-4">
                What Happens Next
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'We Review Your Information',
                    description: 'Our team analyzes your business goals, current marketing, and competitive landscape.'
                  },
                  {
                    step: '2',
                    title: 'Strategy Call Scheduled',
                    description: "We'll contact you within 24 hours to schedule your personalized growth strategy session."
                  },
                  {
                    step: '3',
                    title: 'Custom Roadmap Delivered',
                    description: "During our call, we'll present a tailored digital marketing plan with clear ROI projections."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#00C68A] flex items-center justify-center shrink-0">
                      <span className="text-white font-sora font-extrabold text-[18px]">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sora font-bold text-[16px] text-[#F0F4FF] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-[#8FA8C8] leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#DD6613] to-[#FB923C] text-white font-sora font-bold text-[16px] rounded-[12px] hover:shadow-[0_0_30px_rgba(221,102,19,0.4)] transition-all duration-200"
              >
                Return Home
              </Link>
              <Link 
                href="/case-studies/" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1A2438] border border-[rgba(255,255,255,0.1)] text-[#F0F4FF] font-sora font-bold text-[16px] rounded-[12px] hover:border-[#00C68A] transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 justify-center items-center pt-8 border-t border-[rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00C68A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-[#8FA8C8] text-[14px] font-medium">5.0 Google Rating</span>
              </div>
              <div className="w-[1px] h-[16px] bg-[rgba(255,255,255,0.1)]" />
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#8FA8C8] text-[14px] font-medium">Google Partner Certified</span>
              </div>
              <div className="w-[1px] h-[16px] bg-[rgba(255,255,255,0.1)]" />
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-[#8FA8C8] text-[14px] font-medium">100+ Clients Served</span>
              </div>
            </div>

          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="bg-[#0C1220] py-[80px] border-t border-[rgba(255,255,255,0.04)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[900px]">
            <h2 className="font-sora font-bold text-[28px] text-[#F0F4FF] mb-10 text-center">
              What Our Clients Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote: "GrowLimo transformed our digital presence. Within 90 days we went from invisible to dominating our local market.",
                  name: "Dr. Sarah Mitchell",
                  title: "Dental Practice Owner, San Diego"
                },
                {
                  quote: "The ROI speaks for itself. Our patient inquiries tripled and our ad costs dropped by 60%.",
                  name: "Michael Chen",
                  title: "Healthcare CEO, Dallas"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-[#1A2438]/50 border-l-4 border-[#00C68A] rounded-[12px] p-6">
                  <p className="text-[#8FA8C8] text-[15px] leading-[1.7] mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-[rgba(255,255,255,0.06)] pt-4">
                    <p className="text-[#F0F4FF] text-[14px] font-bold">{testimonial.name}</p>
                    <p className="text-[#8FA8C8] text-[13px]">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
