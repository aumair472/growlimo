import { useState } from 'react';
import faqsData from '../content/data/faqs.json';

function FAQ({ limit = null, showTitle = true }) {
  const [openItems, setOpenItems] = useState(new Set());
  const [focusedIndex, setFocusedIndex] = useState(null);

  let faqs = faqsData.faqs;
  if (limit) {
    faqs = faqs.slice(0, limit);
  }

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const handleKeyDown = (e, id, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(id);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = index < faqs.length - 1 ? index + 1 : 0;
      setFocusedIndex(nextIndex);
      document.getElementById(`faq-button-${faqs[nextIndex].id}`)?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = index > 0 ? index - 1 : faqs.length - 1;
      setFocusedIndex(prevIndex);
      document.getElementById(`faq-button-${faqs[prevIndex].id}`)?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setFocusedIndex(0);
      document.getElementById(`faq-button-${faqs[0].id}`)?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastIndex = faqs.length - 1;
      setFocusedIndex(lastIndex);
      document.getElementById(`faq-button-${faqs[lastIndex].id}`)?.focus();
    }
  };

  return (
    <section className="bg-[#05080F] text-white py-[96px] relative z-10" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
              FAQ
            </span>
            <h2 id="faq-heading" className="text-[38px] font-extrabold font-sora text-[#F0F4FF] mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#8FA8C8] text-[16px] font-sans max-w-2xl mx-auto">
              Get the answers you need to make an informed decision
            </p>
          </div>
        )}

        <div className="max-w-3xl mx-auto" role="region" aria-labelledby="faq-heading">
          <div className="space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openItems.has(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`border rounded-[12px] mb-[10px] transition-all duration-200 ease-in-out ${
                    isOpen
                      ? 'border-[#00C68A]/25 bg-[#1F2B3E]'
                      : 'border-white/7 bg-[#1A2438]'
                  }`}
                >
                  <dt>
                    <button
                      id={`faq-button-${faq.id}`}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#00C68A]/50 focus:ring-offset-2 focus:ring-offset-[#05080F] rounded-[12px] transition-all duration-200"
                      onClick={() => toggleItem(faq.id)}
                      onKeyDown={(e) => handleKeyDown(e, faq.id, index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <h3 className="font-semibold text-[#F0F4FF] text-[15px] font-sora pr-8 leading-snug">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                        <svg
                          className={`w-5 h-5 text-[#00C68A] flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </button>
                  </dt>
                  <dd>
                    <div
                      id={`faq-answer-${faq.id}`}
                      className={`px-6 transition-all duration-200 ease-in-out ${
                        isOpen
                          ? 'max-h-[500px] opacity-100 pb-5 pt-1'
                          : 'max-h-0 opacity-0 overflow-hidden pb-0 pt-0'
                      }`}
                      role="region"
                      aria-labelledby={`faq-button-${faq.id}`}
                    >
                      <p className="text-[14px] text-[#8FA8C8] leading-[1.7] font-sans">
                        {faq.answer}
                      </p>
                    </div>
                  </dd>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
