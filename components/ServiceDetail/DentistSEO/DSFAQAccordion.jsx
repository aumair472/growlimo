import { useState } from 'react';

export default function DSFAQAccordion() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'How long does dental SEO take to work in California?',
      answer: 'California dentists typically see local map pack ranking improvements within 4–8 weeks of Google Business Profile optimization and citation building. Organic keyword rankings for competitive terms like "dentist Los Angeles" or "Invisalign San Diego" typically take 5–9 months of consistent execution. Less competitive markets like Fresno or Sacramento may see meaningful improvement within 3–5 months.'
    },
    {
      question: 'How much does dental SEO cost in California?',
      answer: "Dental SEO in California typically ranges from $800 to $4,000/month depending on market competitiveness, the number of treatment pages required, and whether multi-location SEO is needed. GrowLimo's dental SEO services start at $797/month for single-location practices in less competitive markets, with DSO and multi-location programs quoted individually."
    },
    {
      question: 'What dental SEO keywords should California dentists target?',
      answer: 'Three keyword tiers: high-intent local searches ("dentist near me," "emergency dentist [city]," "dentist that accepts [insurance]"), treatment-specific searches ("dental implants cost [city]," "Invisalign [city]"), and patient education searches ("how long does a root canal take," "dental implants vs dentures") that build topical authority while capturing patients early in their decision process.'
    },
    {
      question: 'Why is dental SEO considered YMYL content?',
      answer: "Dental content falls under Google's YMYL classification because it directly impacts patient wellbeing. Google applies heightened scrutiny, requiring demonstrated clinical expertise, accurate procedural information, credentialed author attribution, and strong trust signals — meaning dental practices can't rank with thin, uncredentialed content. It needs to be written or reviewed under a licensed dentist's byline."
    },
    {
      question: 'Does GrowLimo work with dental service organizations (DSOs) in California?',
      answer: 'Yes. We have specific expertise in multi-location dental SEO for California DSOs — building individual location pages, managing separate Google Business Profiles per location, building individual citation profiles, and running consolidated reporting across every California location while maintaining a unified brand authority strategy.'
    },
    {
      question: 'What is the most important factor in dental local SEO in California?',
      answer: 'Three factors matter most: a fully optimized Google Business Profile with consistent NAP, correct dental categories, and active review management; consistent citations across dental-specific directories (Healthgrades, Zocdoc, Yelp, 1-800-Dentist); and a high volume of genuine Google reviews averaging above 4.5 stars. Together, these three determine Map Pack ranking position for most California dental searches.'
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
            Dentist SEO Services in California FAQs
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
