import { useState } from 'react';

export default function HSFAQAccordion() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'Why is healthcare SEO different from regular SEO in California?',
      answer: "Healthcare SEO falls under Google's YMYL category — pages that could impact a person's health, safety, or finances. Google applies heightened quality scrutiny, requiring strong E-E-A-T signals: demonstrated medical expertise, accurate clinical information, author credentials, and trust signals that generic SEO agencies typically don't know how to build."
    },
    {
      question: 'How long does healthcare SEO take to show results in California?',
      answer: 'Most California healthcare practices see measurable improvements within 3–6 months. Local SEO gains — GBP rankings, local map pack visibility — often show within 4–8 weeks. Competitive clinical keyword rankings in markets like Los Angeles or San Francisco typically take 6–9 months of consistent execution.'
    },
    {
      question: 'Is healthcare SEO HIPAA compliant?',
      answer: 'Our healthcare SEO work is conducted with HIPAA compliance awareness. We do not access, use, or request patient health information in SEO campaigns, and all review generation, landing page content, and tracking implementations are designed to avoid HIPAA-restricted data handling.'
    },
    {
      question: 'What types of California healthcare practices do you work with?',
      answer: 'Medical practices, dental clinics, cosmetic surgery practices, med spas, chiropractors, urgent care centers, physical therapy clinics, mental health practices, optometrists, pediatricians, and multi-location hospital groups across California.'
    },
    {
      question: 'What is YMYL in SEO and how does it affect healthcare practices?',
      answer: 'YMYL stands for "Your Money Your Life" — Google\'s classification for content that could significantly impact a person\'s health, financial wellbeing, or safety. Healthcare websites sit among the highest YMYL categories, with quality raters applying heightened scrutiny that requires demonstrated medical expertise, accurate information, clearly credentialed authors, and strong trust signals to rank well.'
    },
    {
      question: 'How do you generate patient reviews for healthcare SEO?',
      answer: 'Through HIPAA-aware strategies including post-appointment SMS and email sequences sent only to opted-in patients, Google Business Profile review request links distributed through practice staff workflows, and reputation monitoring across Google, Healthgrades, Zocdoc, and Yelp.'
    },
    {
      question: 'Do you require a long-term SEO contract?',
      answer: "No. We operate month-to-month for all services. We recommend a minimum six-month commitment for SEO to allow meaningful ranking development, but that's a strategic recommendation, not a contractual requirement — you can pause or stop with 30 days notice at any time."
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1000px]">

        <div className="text-left max-w-[800px] mb-12">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
            Healthcare SEO Services in California FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden transition-all duration-200 text-left"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A]"
                  aria-expanded={isOpen}
                >
                  <span className="font-sora font-bold text-[16px] md:text-[17px] text-[#F0F4FF] leading-snug">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-[#0C1220] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[rgba(255,255,255,0.05)]">
                    <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
