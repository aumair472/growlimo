import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionSEOCity({ service, slug }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [openMistake, setOpenMistake] = useState(null);

  if (!service) return null;

  const {
    metaTitle,
    metaDescription,
    h1,
    statBadge = [],
    whatIs,
    seoServicesIntro = [],
    trackRecord = [],
    whyDifferent,
    industries = [],
    segmentation,
    regionsServed,
    mistakes = [],
    caseStudies = [],
    extraTestimonial,
    caseStudiesNote,
    process = [],
    comparisonTable = [],
    pricing = [],
    faqs = [],
    ctaHeading,
    ctaParagraph,
    ctaLinkText,
    crossLinks = [],
    relatedLinks = [],
    schema
  } = service;

  return (
    <div className="bg-[#080D18] font-sans selection:bg-[#00C68A]/30 selection:text-white overflow-x-hidden text-[#8FA8C8]">
      <SEO
        title={metaTitle}
        description={metaDescription}
        url={`https://growlimo.com/${slug}/`}
        disableSuffix={true}
        schema={schema}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] text-white pt-[90px] md:pt-[110px] pb-[70px] md:pb-[90px] relative overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 leading-none font-sans">
                <span className="w-2 h-2 rounded-full bg-[#00C68A] animate-pulse" />
                GOOGLE PARTNER CERTIFIED SEO AGENCY
              </div>

              <h1 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.75] mb-8">
                {whatIs}
              </p>

              {statBadge.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-2">
                  {statBadge.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[12px] px-4 py-3 shadow-md hover:border-[#00C68A]/40 transition-all duration-200"
                    >
                      <svg className="w-5 h-5 text-[#00C68A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#F0F4FF] font-sans text-[13px] font-semibold leading-snug">
                        {stat}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative text-left">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] mb-1">
                  Get Your Free SEO Audit
                </h3>
                <p className="text-[13px] text-[#8FA8C8] mb-4">
                  See exactly where you stand and what it takes to reach Page 1.
                </p>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Claim Your Free Audit →"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: SEO SERVICES INTRO */}
      {/* ========================================================================= */}
      {seoServicesIntro.length > 0 && (
        <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              MARKET OVERVIEW
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
              SEO Services in {h1.split(':')[0].replace('SEO Agency ', '')}
            </h2>
            <div className="space-y-5">
              {seoServicesIntro.map((p, idx) => (
                <p key={idx} className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8] bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: TRACK RECORD (Stat Cards) */}
      {/* ========================================================================= */}
      {trackRecord.length > 0 && (
        <section className="bg-[#080D18] py-[70px] md:py-[90px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="text-left max-w-[860px] mb-10">
              <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                TRACK RECORD
              </span>
              <h2 className="text-[26px] sm:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                The Numbers Behind Our Work Here
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {trackRecord.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 items-start bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 text-[#00C68A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-sans text-[14.5px] text-[#F0F4FF] leading-relaxed font-medium">
                    {stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: WHY [CITY] SEO IS DIFFERENT (4 Icon Cards) */}
      {/* ========================================================================= */}
      {whyDifferent && (
        <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="text-left max-w-[860px] mb-14">
              <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                MARKET REALITIES
              </span>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                {whyDifferent.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyDifferent.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 flex gap-4 items-start"
                >
                  <div className="w-9 h-9 rounded-xl bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.25)] flex items-center justify-center font-sora font-extrabold text-[13px] text-[#00C68A] shrink-0">
                    0{idx + 1}
                  </div>
                  <p className="font-sans text-[14.5px] leading-relaxed text-[#8FA8C8]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: INDUSTRIES WE SPECIALIZE IN */}
      {/* ========================================================================= */}
      {industries.length > 0 && (
        <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="text-left max-w-[860px] mb-14">
              <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                VERTICAL EXPERTISE
              </span>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                Industries We Specialize In
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
                >
                  <h3 className="font-sora font-bold text-[17px] text-[#F0F4FF] mb-2">
                    {ind.title}
                  </h3>
                  <p className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">
                    {ind.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 6: SEGMENTATION (dl-based) OR REGIONS SERVED */}
      {/* ========================================================================= */}
      {segmentation && (
        <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="text-left max-w-[860px] mb-14">
              <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                TAILORED BY STAGE
              </span>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
                {segmentation.heading}
              </h2>
              {segmentation.intro && (
                <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
                  {segmentation.intro}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {segmentation.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[18px] p-6 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
                >
                  <h3 className="font-sora font-bold text-[16px] text-[#00C68A] mb-3">
                    {item.term}
                  </h3>
                  <p className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {regionsServed && (
        <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1000px] text-left">
            <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              LOCAL COVERAGE
            </span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
              {regionsServed.heading}
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#8FA8C8] bg-[#162035]/60 p-6 rounded-[16px] border border-[rgba(255,255,255,0.06)]">
              {regionsServed.paragraph}
            </p>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 7: COMMON MISTAKES (Accordion w/ Red Flags) */}
      {/* ========================================================================= */}
      {mistakes.length > 0 && (
        <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
            <div className="text-left max-w-[860px] mb-12">
              <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                DIAGNOSTIC
              </span>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                Common SEO Mistakes We See Here
              </h2>
            </div>
            <div className="space-y-4">
              {mistakes.map((mistake, idx) => {
                const isOpen = openMistake === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] rounded-[18px] overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenMistake(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A]"
                      aria-expanded={isOpen}
                    >
                      <span className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-sora font-extrabold text-[13px] flex items-center justify-center shrink-0">
                        ✕
                      </span>
                      <span className="font-sora font-bold text-[15px] md:text-[16px] text-[#F0F4FF] leading-snug flex-1">
                        {mistake.split('.')[0]}.
                      </span>
                      <span className={`w-7 h-7 rounded-full bg-[#162035] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 text-left border-t border-[rgba(255,255,255,0.05)]">
                        <p className="font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8] pt-4">
                          {mistake}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 8: CASE STUDIES */}
      {/* ========================================================================= */}
      {caseStudies.length > 0 && (
        <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="text-left max-w-[860px] mb-14">
              <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                PROVEN RESULTS
              </span>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                Case Study
              </h2>
            </div>
            <div className={`grid grid-cols-1 ${caseStudies.length > 1 ? 'lg:grid-cols-2' : ''} gap-8`}>
              {caseStudies.map((cs, idx) => (
                <div
                  key={idx}
                  className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-full inline-block mb-4">
                      {cs.title}
                    </span>
                    {cs.paragraph ? (
                      <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8] mb-6">
                        {cs.paragraph}{' '}
                        {cs.linkHref && (
                          <Link href={cs.linkHref} className="text-[#00C68A] font-semibold hover:underline">
                            {cs.linkText}
                          </Link>
                        )}
                      </p>
                    ) : (
                      <div className="space-y-3 font-sans text-[14px] leading-relaxed mb-6">
                        {cs.challenge && <p className="text-[#8FA8C8]"><strong className="text-[#F0F4FF]">The challenge:</strong> {cs.challenge}</p>}
                        {cs.whatWeDid && <p className="text-[#8FA8C8]"><strong className="text-[#F0F4FF]">What we did:</strong> {cs.whatWeDid}</p>}
                        {cs.result && <p className="text-[#8FA8C8]"><strong className="text-[#00C68A]">The result:</strong> {cs.result}</p>}
                      </div>
                    )}
                  </div>
                  {cs.quote && (
                    <div className="mt-4 p-5 rounded-[16px] bg-[#0C1220] border-l-4 border-[#00C68A]">
                      <p className="font-sans text-[14px] leading-[1.8] italic text-[#F0F4FF] mb-3">
                        "{cs.quote}"
                      </p>
                      <span className="font-sans text-[12.5px] text-[#00C68A] font-semibold">
                        — {cs.attribution}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {extraTestimonial && (
              <div className="mt-8 p-6 rounded-[16px] bg-[#162035] border-l-4 border-[#00C68A] max-w-[860px]">
                <p className="font-sans text-[15px] leading-[1.8] italic text-[#F0F4FF] mb-3">
                  "{extraTestimonial.quote}"
                </p>
                <span className="font-sans text-[13px] text-[#00C68A] font-semibold">
                  — {extraTestimonial.attribution}
                </span>
              </div>
            )}

            {caseStudiesNote && (
              <p className="mt-8 font-sans text-[14.5px] leading-[1.8] text-[#8FA8C8] max-w-[860px]">
                {typeof caseStudiesNote === 'string' ? caseStudiesNote : (
                  <>
                    {caseStudiesNote.text}{' '}
                    {caseStudiesNote.linkHref && (
                      <Link href={caseStudiesNote.linkHref} className="text-[#00C68A] font-semibold hover:underline">
                        {caseStudiesNote.linkText}
                      </Link>
                    )}
                  </>
                )}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 9: OUR PROCESS (6-Step Timeline) */}
      {/* ========================================================================= */}
      {process.length > 0 && (
        <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="text-left max-w-[860px] mb-14">
              <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                HOW WE WORK
              </span>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                Our SEO Process
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1"
                >
                  <div className="text-[28px] font-extrabold font-sora text-[#00C68A] mb-3 leading-none">
                    0{idx + 1}
                  </div>
                  <h3 className="font-sora font-bold text-[17px] text-[#F0F4FF] leading-snug mb-3">
                    {step.label}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 10: GROWLIMO VS TYPICAL AGENCY (Comparison Table) */}
      {/* ========================================================================= */}
      {comparisonTable.length > 0 && (
        <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
            <div className="text-left max-w-[860px] mb-12">
              <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                THE DIFFERENCE
              </span>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                GrowLimo vs. a Typical Local Agency
              </h2>
            </div>
            <div className="overflow-x-auto rounded-[20px] border border-[rgba(255,255,255,0.08)]">
              <table className="w-full border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#162035]">
                    <th className="text-left font-sora font-bold text-[13px] uppercase tracking-[1px] text-[#8FA8C8] p-5">Factor</th>
                    <th className="text-left font-sora font-bold text-[13px] uppercase tracking-[1px] text-[#8FA8C8] p-5">Typical Agency</th>
                    <th className="text-left font-sora font-bold text-[13px] uppercase tracking-[1px] text-[#00C68A] p-5 bg-[#00C68A]/5">GrowLimo</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-[#0C1220]' : 'bg-[#0C1220]/60'}>
                      <td className="font-sans text-[14px] font-semibold text-[#F0F4FF] p-5 border-t border-[rgba(255,255,255,0.05)]">{row.factor}</td>
                      <td className="font-sans text-[13.5px] text-[#8FA8C8] p-5 border-t border-[rgba(255,255,255,0.05)]">
                        <span className="inline-flex items-start gap-2">
                          <span className="text-red-400 shrink-0">✕</span>{row.typical}
                        </span>
                      </td>
                      <td className="font-sans text-[13.5px] text-[#F0F4FF] font-medium p-5 border-t border-[rgba(255,255,255,0.05)] bg-[#00C68A]/5">
                        <span className="inline-flex items-start gap-2">
                          <span className="text-[#00C68A] shrink-0">✓</span>{row.growlimo}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 11: PRICING (3 Tiers) */}
      {/* ========================================================================= */}
      {pricing.length > 0 && (
        <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="text-left max-w-[860px] mb-14">
              <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                TRANSPARENT INVESTMENT
              </span>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
                SEO Pricing
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
                All tiers include a free onboarding audit, a dedicated strategist, and monthly reporting with no long-term contract.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricing.map((tier, idx) => (
                <div
                  key={idx}
                  className={`bg-[#162035] rounded-[24px] p-8 text-left flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${
                    tier.popular
                      ? 'border-2 border-[#00C68A] shadow-[0_10px_30px_rgba(0,198,138,0.15)]'
                      : 'border border-[rgba(255,255,255,0.08)]'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3.5 right-6 bg-[#00C68A] text-[#080D18] font-sora font-extrabold text-[11px] uppercase tracking-[1.5px] px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] mb-2">
                      {tier.name}
                    </h3>
                    <p className="font-sans text-[13px] text-[#8FA8C8] mb-6 min-h-[38px]">
                      {tier.audience}
                    </p>
                    <div className="mb-6 pb-6 border-b border-[rgba(255,255,255,0.08)] flex items-baseline gap-1">
                      <span className="font-sora font-extrabold text-[32px] text-[#F0F4FF]">
                        {tier.price}
                      </span>
                      <span className="font-sans text-[14px] text-[#8FA8C8]">/month</span>
                    </div>
                  </div>
                  <Link
                    href="/contact/"
                    className={`cursor-pointer w-full text-center py-3.5 rounded-xl font-sora font-extrabold text-[14px] transition-all duration-200 ${
                      tier.popular
                        ? 'bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] shadow-[0_4px_16px_rgba(0,198,138,0.3)]'
                        : 'bg-[#0C1220] hover:bg-[#080D18] text-[#F0F4FF] border border-[rgba(255,255,255,0.1)]'
                    }`}
                  >
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 12: FAQ ACCORDION */}
      {/* ========================================================================= */}
      {faqs.length > 0 && (
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
                    className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A]"
                      aria-expanded={isOpen}
                    >
                      <span className="font-sora font-bold text-[16px] md:text-[17px] text-[#F0F4FF] leading-snug">
                        {faq.question}
                      </span>
                      <span className={`w-8 h-8 rounded-full bg-[#080D18] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-left border-t border-[rgba(255,255,255,0.05)]">
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
      )}

      {/* ========================================================================= */}
      {/* SECTION 13: FINAL CTA BANNER */}
      {/* ========================================================================= */}
      <section className="bg-[#080D18] py-[90px] md:py-[110px] relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C68A]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 md:px-10 max-w-[960px] relative z-10 text-center">
          <div className="bg-[#1A2438] border border-[rgba(0,198,138,0.25)] rounded-[24px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C68A]/10 rounded-bl-full pointer-events-none" />

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
              {ctaHeading}
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[760px] mx-auto mb-8">
              {ctaParagraph}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(0,198,138,0.3)] hover:-translate-y-0.5"
              >
                {ctaLinkText}
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <a href="tel:+16673474729" className="text-[13px] text-[#8FA8C8] hover:text-[#00C68A] font-sans font-medium transition-colors">
                📞 +1 (667) 347-4729
              </a>
              <span className="text-[#8FA8C8]/30">•</span>
              <a href="mailto:info@growlimo.com" className="text-[13px] text-[#8FA8C8] hover:text-[#00C68A] font-sans font-medium transition-colors">
                ✉️ info@growlimo.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 14: EXPLORE MORE CALIFORNIA MARKETS */}
      {/* ========================================================================= */}
      {crossLinks.length > 0 && (
        <section className="bg-[#0C1220] py-[70px] md:py-[90px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="text-left max-w-[860px] mb-10">
              <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                STATEWIDE COVERAGE
              </span>
              <h2 className="text-[24px] sm:text-[28px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                Explore More California Markets
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {crossLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 text-left transition-all duration-300 hover:border-[#00C68A]/40 hover:-translate-y-1 flex items-center justify-between group"
                >
                  <div>
                    <span className="font-sora font-bold text-[15px] text-[#F0F4FF] block group-hover:text-[#00C68A] transition-colors">
                      {link.label}
                    </span>
                    {link.note && (
                      <span className="font-sans text-[12.5px] text-[#8FA8C8] block mt-1">
                        {link.note}
                      </span>
                    )}
                  </div>
                  <svg className="w-4 h-4 text-[#00C68A] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              ))}
            </div>

            {relatedLinks.length > 0 && (
              <div className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap gap-3">
                {relatedLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="text-[13px] font-sans font-medium text-[#8FA8C8] hover:text-[#00C68A] bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-full px-4 py-2 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

    </div>
  );
}
