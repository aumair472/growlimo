import { useState } from 'react'
import faqsData from '../../data/faqs.json'

function FAQ({ limit = null, showTitle = true }) {
  const [openItems, setOpenItems] = useState(new Set())
  const [focusedIndex, setFocusedIndex] = useState(null)

  let faqs = faqsData.faqs
  if (limit) {
    faqs = faqs.slice(0, limit)
  }

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const handleKeyDown = (e, id, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleItem(id)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const nextIndex = index < faqs.length - 1 ? index + 1 : 0
      setFocusedIndex(nextIndex)
      document.getElementById(`faq-button-${faqs[nextIndex].id}`)?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prevIndex = index > 0 ? index - 1 : faqs.length - 1
      setFocusedIndex(prevIndex)
      document.getElementById(`faq-button-${faqs[prevIndex].id}`)?.focus()
    } else if (e.key === 'Home') {
      e.preventDefault()
      setFocusedIndex(0)
      document.getElementById(`faq-button-${faqs[0].id}`)?.focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      const lastIndex = faqs.length - 1
      setFocusedIndex(lastIndex)
      document.getElementById(`faq-button-${faqs[lastIndex].id}`)?.focus()
    }
  }

  return (
    <section className="bg-dark text-white py-12 md:py-16" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-300 text-lg">
              Get the answers you need to make an informed decision
            </p>
          </div>
        )}

        <div className="max-w-3xl mx-auto" role="region" aria-labelledby="faq-heading">
          <dl className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.has(faq.id)
              return (
                <div
                  key={faq.id}
                  className="border border-slate-700 rounded-lg overflow-hidden glass-card"
                >
                  <dt>
                    <button
                      id={`faq-button-${faq.id}`}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark rounded-lg"
                      onClick={() => toggleItem(faq.id)}
                      onKeyDown={(e) => handleKeyDown(e, faq.id, index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <h3 className="font-semibold text-white text-lg pr-8">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </dt>
                  <dd>
                    <div
                      id={`faq-answer-${faq.id}`}
                      className={`px-6 pb-4 text-slate-300 transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'max-h-[500px] opacity-100'
                          : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                      role="region"
                      aria-labelledby={`faq-button-${faq.id}`}
                    >
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FAQ
