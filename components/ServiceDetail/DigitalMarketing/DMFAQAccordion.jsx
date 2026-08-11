import { useState } from 'react';

export default function DMFAQAccordion() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'What is a digital marketing agency?',
      answer: "A digital marketing agency is a company that manages a business's online growth channels — typically SEO, paid advertising, content, email, social media, and web design — under one coordinated strategy rather than as disconnected tactics."
    },
    {
      question: 'What digital marketing services does GrowLimo offer in California?',
      answer: 'GrowLimo offers SEO, Google Ads and PPC management, content marketing and SEO copywriting, email marketing automation, social media marketing, and conversion-focused web design for California businesses, deployed independently or as an integrated system.'
    },
    {
      question: 'How much does a digital marketing agency in California cost?',
      answer: 'Most California businesses invest 3–5% of annual revenue in digital marketing, rising to 8–10% during growth phases. A comprehensive program combining SEO and PPC with GrowLimo typically starts between $2,500 and $5,000 per month, with an exact quote after a free audit.'
    },
    {
      question: 'How long before I see results from digital marketing in California?',
      answer: 'Paid channels like Google Ads and social ads can generate leads within days of launch. SEO and content marketing typically show measurable ranking movement within 60–90 days, with substantial compounding growth by 6–12 months.'
    },
    {
      question: 'What makes GrowLimo different from other California marketing agencies?',
      answer: 'GrowLimo builds interconnected marketing systems rather than isolated service packages, tracks revenue as the primary success metric instead of impressions or clicks, and assigns certified specialists with California city-level expertise to every account.'
    },
    {
      question: 'Does GrowLimo work with small businesses in California?',
      answer: 'Yes. GrowLimo has managed California campaigns with monthly budgets ranging from $1,000 to $50,000, and engagements scale with the business rather than requiring a large budget to start.'
    },
    {
      question: 'Do I need all digital marketing services, or can I start with one?',
      answer: 'You can start with a single channel, such as SEO or Google Ads, and expand into content, email, or social media as that channel proves ROI. Most clients add channels once the first is generating consistent leads.'
    },
    {
      question: 'Do you offer a free marketing consultation for California businesses?',
      answer: 'Yes. GrowLimo provides a free, no-obligation marketing audit that reviews your organic search positions, paid media accounts, and competitors before recommending a strategy.'
    },
    {
      question: 'Is there a long-term contract required?',
      answer: 'No. GrowLimo operates month-to-month across all services and does not use contracts to retain clients.'
    },
    {
      question: 'Can digital marketing help my California business appear in AI search results like ChatGPT and Google AI Overviews?',
      answer: 'Yes. Content structured around direct answers, backed by schema markup and original data, increases the likelihood of being cited in AI-generated results from Google AI Overviews, ChatGPT, and Perplexity, in addition to ranking in traditional search.'
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
            Frequently Asked Questions
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
