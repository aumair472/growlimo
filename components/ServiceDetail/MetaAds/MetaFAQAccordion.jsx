import { useState } from 'react';

export default function MetaFAQAccordion() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'What is a Meta Ads agency?',
      answer: "A Meta Ads agency is a digital marketing agency that specializes in managing paid advertising campaigns on Meta's platforms — Facebook, Instagram, Messenger, and the Audience Network — handling strategy, audience architecture, creative production, Conversions API setup, ongoing optimization, and reporting."
    },
    {
      question: 'How much does a Meta Ads agency charge in California?',
      answer: "Meta Ads agency fees in California typically range from $500 to $4,000/month depending on the number of platforms managed, campaign complexity, and whether creative production is included. GrowLimo's management starts at $497/month on top of your ad spend, with no long-term contracts."
    },
    {
      question: 'What is the difference between a Meta Ads agency and a Facebook Ads manager?',
      answer: 'A Facebook Ads manager typically handles day-to-day operations within the platform. A full-service Meta Ads agency provides end-to-end strategy, creative production, audience architecture, Conversions API implementation, landing page optimization, and performance analysis — a complete growth system rather than a platform task.'
    },
    {
      question: 'Does GrowLimo handle Advantage+ campaigns on Meta?',
      answer: 'Yes. We manage Advantage+ Shopping, Advantage+ Audience, and Advantage+ Creative campaigns alongside manual structures, using performance data to determine the right balance for each client.'
    },
    {
      question: 'How does GrowLimo handle iOS tracking issues on Meta Ads?',
      answer: "We implement Meta's Conversions API with server-side event tracking as standard on every account, along with domain verification, aggregated event measurement, and event deduplication, recovering a significant portion of the conversion data lost to Apple's iOS privacy restrictions."
    },
    {
      question: 'What Meta Ads placements does GrowLimo manage?',
      answer: 'Facebook Feed, Instagram Feed, Facebook and Instagram Stories, Instagram Reels, Facebook Marketplace, Facebook Right Column, Messenger, and the Audience Network — with placement allocation determined by performance data, not platform preference.'
    },
    {
      question: 'Does GrowLimo produce Meta Ads creative?',
      answer: 'Yes. Creative production is included — static image design, carousel ads, video scripts, Reels-format ads, and all ad copywriting, with a minimum of 3–5 variants per ad set rotated continuously to prevent creative fatigue.'
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
            Meta Ads Agency California FAQs
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
