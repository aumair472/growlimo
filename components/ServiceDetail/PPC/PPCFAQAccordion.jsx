import { useState } from 'react';

export default function PPCFAQAccordion() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'How much do PPC services cost in California?',
      answer: "GrowLimo's PPC management starts at $497/month, on top of your ad spend budget. Most California clients invest between $1,500 and $8,000/month in ad spend depending on their platform mix, industry, and lead volume goals."
    },
    {
      question: 'What is the average ROAS for PPC campaigns in California?',
      answer: "GrowLimo's California clients average a 5.8x ROAS across managed accounts, though results vary by industry, competitive density, and how much conversion history the account already has."
    },
    {
      question: 'How quickly will PPC generate leads for my California business?',
      answer: 'PPC can generate leads within 24–72 hours of launch. Meaningful optimization gains typically appear within 30–60 days, once enough conversion data has accumulated to guide bidding and targeting decisions.'
    },
    {
      question: 'What PPC platforms does GrowLimo manage in California?',
      answer: 'Google Ads (Search, Performance Max, Shopping, Display, and YouTube), Meta Ads (Facebook and Instagram), and Microsoft/Bing Ads, deployed independently or as a combined multi-platform strategy.'
    },
    {
      question: 'Do you require a long-term contract for PPC management?',
      answer: 'No. GrowLimo operates month-to-month with no lock-in contracts, across every platform we manage.'
    },
    {
      question: 'Can GrowLimo manage my existing PPC campaigns?',
      answer: 'Yes. We audit and take over existing accounts, preserving historical performance data while rebuilding the structure, targeting, and creative around what that data tells us.'
    },
    {
      question: 'Why are PPC costs so high in California?',
      answer: "California is one of the most competitive advertising markets in the country — high business density, deep-pocketed national competitors, and a large, high-spending consumer base all push CPCs upward. The fix isn't avoiding PPC; it's managing Quality Score aggressively, which lowers your effective CPC regardless of how crowded the market gets."
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1000px]">

        <div className="text-left max-w-[800px] mb-12">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
            PPC Services FAQs for California Businesses
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden transition-all duration-200 text-left"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A]"
                  aria-expanded={isOpen}
                >
                  <span className="font-sora font-bold text-[16px] md:text-[17px] text-[#F0F4FF] leading-snug">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-[#162035] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
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
