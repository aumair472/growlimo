import { useState } from 'react';
import Head from 'next/head';

export default function ServiceFAQSection({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      
      <section className="bg-[#0C1220] py-[96px] relative z-10 text-left border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="max-w-[760px] mx-auto">
            
            {/* Eyebrow */}
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2px] mb-4 block text-center font-sans">
              QUESTIONS & ANSWERS
            </span>

            {/* H2 Title */}
            <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#F0F4FF] text-center mb-12 tracking-tight">
              Frequently Asked Questions
            </h2>

            {/* Accordion container */}
            <div className="space-y-2.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const cardClass = isOpen
                  ? 'bg-[#1F2B3E] border border-[rgba(0,198,138,0.25)] rounded-[12px] overflow-hidden transition-all duration-200 shadow-lg mb-2.5'
                  : 'bg-[#1A2438] border border-[rgba(255,255,255,0.07)] rounded-[12px] overflow-hidden transition-all duration-200 shadow-md mb-2.5';

                return (
                  <div key={index} className={cardClass}>
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors font-sans"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-[#F0F4FF] font-sora font-semibold text-[15px] pr-4 leading-snug">
                        {faq.question}
                      </h3>
                      
                      {/* Rotating Chevron Icon */}
                      <svg
                        className={`w-5 h-5 text-[#00C68A] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Expandable Content Area */}
                    <div
                      className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="px-6 pb-6 text-[#8FA8C8] font-sans text-[14px] leading-[1.7] font-normal border-t border-[rgba(255,255,255,0.04)] pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
