import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionHDMCA({ service, slug, onSelectPlan }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [expandedCities, setExpandedCities] = useState({});
  const [expandedSpecialties, setExpandedSpecialties] = useState({});

  if (!service) return null;

  const {
    metaTitle,
    metaDescription,
    h1,
    subheadline,
    heroContent = [],
    contentSections = [],
    processSection = {},
    ctaSection = {},
    ctaButtonText = 'Get Your Free Healthcare Marketing Audit →',
    faqs = [],
    internalLinks = [],
    images = [],
    schema
  } = service;

  // Safe image pointers
  const heroImg = images[0] || '/images/services/hero-healthcare-digital-marketing-agency-california.webp';
  const strategyImg = images[1] || '/images/services/healthcare-digital-marketing-agency-california-strategy.webp';
  const results1Img = images[2] || '/images/services/healthcare-digital-marketing-agency-california-results-1.webp';
  const results2Img = images[3] || '/images/services/healthcare-digital-marketing-agency-california-results-2.webp';
  const californiaResultsImg = images[4] || '/images/services/healthcare-digital-marketing-agency-california-banner.webp';

  const toggleCity = (idx) => {
    setExpandedCities(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleSpecialty = (idx) => {
    setExpandedSpecialties(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Helper: Split and parse Case Studies
  const parseCaseStudy = (sec) => {
    if (!sec) return null;
    const heading = sec.heading || '';
    const parts = heading.split(/—|–/);
    const clientRaw = parts[0] || '';
    const stat = parts[1] || '';
    const client = clientRaw.replace(/^Case Study \d+:\s*/i, '').trim();
    return {
      client,
      stat: stat.trim(),
      story: sec.paragraphs ? sec.paragraphs.join(' ') : '',
      bullets: sec.bullets || [],
      paragraphs: sec.paragraphs || [],
      image: sec.image || ''
    };
  };

  const parseBulletMetric = (bullet) => {
    const colonIdx = bullet.indexOf(':');
    if (colonIdx !== -1) {
      const label = bullet.substring(0, colonIdx).trim();
      const value = bullet.substring(colonIdx + 1).trim();
      return { label, value };
    }
    return { label: '', value: bullet };
  };

  // Helper: Split and parse Testimonials
  const parseTestimonial = (bullet) => {
    const lastDashIndex = bullet.lastIndexOf('—');
    if (lastDashIndex !== -1) {
      const quote = bullet.substring(0, lastDashIndex).trim();
      const rest = bullet.substring(lastDashIndex + 1).trim();
      const commaIndex = rest.indexOf(',');
      if (commaIndex !== -1) {
        const name = rest.substring(0, commaIndex).trim();
        const location = rest.substring(commaIndex + 1).trim();
        return { quote, name, location };
      }
      return { quote, name: rest, location: '' };
    }
    return { quote: bullet, name: '', location: '' };
  };

  // Section references from JSON
  const whyHarderSec = contentSections[0] || {};
  const whyIntegratedSec = contentSections[1] || {};
  const servicesIntroSec = contentSections[2] || {};
  
  // Numbered Services 1-8 are contentSections[3] to [10]
  const numberedServices = contentSections.slice(3, 11);

  // Case Studies Intro (index 11) & Individual Case Studies (indices 12, 13, 14)
  const caseStudiesIntroSec = contentSections[11] || {};
  const caseStudy1 = parseCaseStudy(contentSections[12]);
  const caseStudy2 = parseCaseStudy(contentSections[13]);
  const caseStudy3 = parseCaseStudy(contentSections[14]);
  const caseStudies = [caseStudy1, caseStudy2, caseStudy3].filter(Boolean);

  // Specialties (index 15), Cities (index 16), Partner/Author (index 17), Testimonials (index 18)
  const specialtiesSec = contentSections[15] || {};
  const citiesSec = contentSections[16] || {};
  const partnerSec = contentSections[17] || {};
  const testimonialsSec = contentSections[18] || {};

  return (
    <div className="bg-[#080D18] font-sans selection:bg-[#00C68A]/30 selection:text-white overflow-x-hidden text-[#8FA8C8]">
      <SEO
        title={metaTitle}
        description={metaDescription}
        url={`https://growlimo.com/${slug}/`}
        disableSuffix={true}
        schema={schema}
      />

      {/* SECTION 1: HERO */}
      <section className="bg-[#080D18] text-white pt-[100px] pb-[80px] relative overflow-hidden">
        {/* Abstract background glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side: Headline & Trust Info */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                CALIFORNIA HEALTHCARE MARKETING AGENCY
              </span>

              <h1 className="text-[30px] md:text-[36px] lg:text-[40px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[15px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[620px]">
                {subheadline}
              </p>

              {/* 3 Trust Pills */}
              <div className="flex flex-wrap gap-3 mb-4 w-full">
                {[
                  { value: '70+', label: 'Healthcare Clients' },
                  { value: '4.9★', label: 'Client Rating' },
                  { value: 'HIPAA', label: 'YMYL-Aware' }
                ].map((pill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[rgba(26,36,56,0.5)] border border-[rgba(255,255,255,0.05)] rounded-[12px] px-5 py-3 shadow-md hover:border-[#00C68A]/35 transition-all duration-200"
                  >
                    <span className="text-[#00C68A] font-sora font-extrabold text-[16px]">{pill.value}</span>
                    <span className="text-[#8FA8C8] font-sans text-[13px] font-medium border-l border-[rgba(255,255,255,0.1)] pl-3">{pill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#1A2438]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-3 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/5 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-bold text-[14px] text-[#F0F4FF] mb-2 text-left border-b border-[rgba(255,255,255,0.06)] pb-1">
                  Get Your Free Healthcare Marketing Audit
                </h3>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText={ctaButtonText}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: FULL-WIDTH IMAGE WITH STAT CARDS */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[480px]">
          <img
            src={heroImg}
            alt="GrowLimo California Healthcare Digital Marketing"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          {/* Deep dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D18] via-transparent to-[#FFFFFF]" />

          {/* 3 Floating Stat Cards on Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 max-w-[1200px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { value: '340%', text: 'Patient Lead Growth (LA Medical Group Case Study)' },
                  { value: '6.2x', text: 'Combined Paid Media ROAS (Cosmetic Surgery)' },
                  { value: '70+', text: 'California Healthcare Practices Served' }
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0C1220]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[18px] p-7 shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#00C68A]/40"
                  >
                    <div className="text-[36px] md:text-[42px] font-extrabold font-sora text-[#00C68A] mb-2 leading-none">
                      {card.value}
                    </div>
                    <p className="text-[#F0F4FF] text-[13px] md:text-[14px] leading-relaxed font-sans font-medium">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTRO (White Bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left mb-12">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              MARKET REALITY
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
              {whyHarderSec.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left 60%: Text content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <p className="font-sans text-[15px] leading-[1.8] text-[#1A2438] font-semibold">
                {heroContent[1]}
              </p>

              {whyHarderSec.paragraphs && whyHarderSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}

              {whyHarderSec.closingText && (
                <div className="border-l-4 border-[#00C68A] pl-5 py-2 my-6 bg-[#00C68A]/5 rounded-r-[8px]">
                  <p className="font-sans text-[15px] leading-[1.8] font-bold text-[#0B1829]">
                    {whyHarderSec.closingText}
                  </p>
                </div>
              )}
            </div>

            {/* Right 40%: Key bullets styled inside a card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm">
                <h3 className="font-sora font-bold text-[18px] text-[#0B1829] mb-6 text-left border-b border-[#E3EEF7] pb-3">
                  California Healthcare Marketing Challenges
                </h3>
                <div className="space-y-5">
                  {whyHarderSec.bullets && whyHarderSec.bullets.map((bullet, idx) => {
                    const parts = bullet.split(':');
                    const title = parts[0] ? parts[0].trim() : '';
                    const desc = parts[1] ? parts[1].trim() : '';

                    return (
                      <div key={idx} className="flex gap-4 items-start text-left">
                        <div className="w-[26px] h-[26px] rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-[12px] h-[12px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-sans text-[15px] font-bold text-[#0B1829] leading-tight mb-1">
                            {title}
                          </h4>
                          {desc && (
                            <p className="font-sans text-[13.5px] leading-relaxed text-[#3D5A73]">
                              {desc}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: WHY INTEGRATED OUTPERFORMS (Dark Bg) */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left mb-10">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              THE COMPELLING FACTOR
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#F0F4FF] tracking-tight border-l-4 border-[#00C68A] pl-4">
              {whyIntegratedSec.heading}
            </h2>
            {whyIntegratedSec.paragraphs && whyIntegratedSec.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px]">
                {para}
              </p>
            ))}
          </div>

          {/* Bullets as a 2-column grid of styled cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {whyIntegratedSec.bullets && whyIntegratedSec.bullets.map((bullet, idx) => {
              const parts = bullet.split('—');
              const title = parts[0] ? parts[0].trim() : '';
              const desc = parts[1] ? parts[1].trim() : '';

              return (
                <div
                  key={idx}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-6 shadow-md transition-all duration-300 hover:border-[#00C68A]/30 hover:translate-y-[-3px] flex gap-4 items-start text-left"
                >
                  <div className="w-[30px] h-[30px] rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-[14px] h-[14px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sora font-bold text-[16px] text-[#F0F4FF] mb-2">
                      {title}
                    </h3>
                    {desc && (
                      <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                        {desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {whyIntegratedSec.closingText && (
            <div className="mt-8 p-6 rounded-[16px] border-l-4 border-[#00C68A] bg-[#1A2438]/60 text-left">
              <p className="font-sans text-[15px] leading-[1.8] font-bold italic text-[#F0F4FF]">
                "{whyIntegratedSec.closingText}"
              </p>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 5: TWO-COLUMN STRATEGY CAPABILITIES (White Bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left 40%: Image */}
            <div className="lg:col-span-5">
              <div className="rounded-[20px] overflow-hidden shadow-xl border-4 border-white relative group">
                <img
                  src={strategyImg}
                  alt="GrowLimo Healthcare Marketing Strategy Planning"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right 60%: Text content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                CORE CAPABILITIES
              </span>
              <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
                {servicesIntroSec.heading}
              </h2>
              {servicesIntroSec.paragraphs && servicesIntroSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTIONS 6-14: NUMBERED DENTAL MARKETING SERVICES (Alternating Bg) */}
      {numberedServices.map((serviceSec, sIdx) => {
        const isWhiteBg = sIdx % 2 === 0;
        const bgClass = isWhiteBg ? 'bg-[#FFFFFF] border-t border-[#E3EEF7]' : 'bg-[#0C1220] border-t border-[rgba(255,255,255,0.04)]';
        const numBadge = `0${sIdx + 1}`;
        const displayHeading = serviceSec.heading.replace(/^\d+\.\s*/, '');

        return (
          <div key={sIdx}>
            <section className={`${bgClass} py-[96px] relative z-10 text-left`}>
              <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                <div className="max-w-[860px] mx-auto">
                  
                  {/* Number & Eyebrow */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] flex items-center justify-center font-sora font-extrabold text-[14px]">
                      {numBadge}
                    </span>
                    <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                      HEALTHCARE ACQUISITION PILLAR
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className={`text-[22px] md:text-[28px] font-extrabold font-sora leading-[1.15] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                    {displayHeading}
                  </h2>

                  {/* Paragraphs */}
                  {serviceSec.paragraphs && serviceSec.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className={`font-sans text-[15px] leading-[1.8] mb-5 font-normal ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                      {para}
                    </p>
                  ))}

                  {/* Bullet Checklist */}
                  {serviceSec.bullets && serviceSec.bullets.length > 0 && (
                    <div className="space-y-3.5 my-8">
                      {serviceSec.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex gap-[14px] items-start mb-3">
                          <div className="w-[28px] h-[28px] rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-[13px] h-[13px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className={`font-sans text-[15px] leading-[1.7] font-normal ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Service Specific Learn More Link */}
                  {serviceSec.closingText && (
                    <div className={`mt-8 p-6 rounded-[16px] border-l-4 border-[#00C68A] text-left ${isWhiteBg ? 'bg-[#F8FAFC]' : 'bg-[#1A2438]/60'}`}>
                      {serviceSec.linkTo ? (
                        <Link
                          href={serviceSec.linkTo}
                          className={`font-sans text-[15px] leading-[1.8] font-bold inline-flex items-center gap-2 transition-colors ${isWhiteBg ? 'text-[#00C68A] hover:text-[#00A572]' : 'text-[#00C68A] hover:text-[#00E6A0]'}`}
                        >
                          {serviceSec.closingText}
                        </Link>
                      ) : (
                        <p className={`font-sans text-[15px] leading-[1.8] font-bold italic ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                          "{serviceSec.closingText}"
                        </p>
                      )}
                    </div>
                  )}

                </div>
              </div>
            </section>

            {/* FULL-WIDTH STATS & DASHBOARDS PLACED IN-BETWEEN */}
            
            {/* A. Full-width SEO dashboard after Service 3 (Meta Ads for Dentists, sIdx === 2) */}
            {sIdx === 2 && results1Img && (
              <section className="relative w-full py-16 bg-[#080D18] flex justify-center border-t border-[rgba(255,255,255,0.04)]">
                <div className="container max-w-[900px] px-4">
                  <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                    <img
                      src={results1Img}
                      alt="Healthcare Marketing Performance Dashboard California"
                      className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-6 right-6 text-left">
                      <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">MULTI-CHANNEL ROI</p>
                      <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Healthcare Patient Acquisition Analytics Dashboard</h4>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* B. Full-width execution dashboard after Reputation Management (sIdx === 6) */}
            {sIdx === 6 && results2Img && (
              <section className="relative w-full py-16 bg-[#080D18] flex justify-center border-t border-[rgba(255,255,255,0.04)]">
                <div className="container max-w-[900px] px-4">
                  <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                    <img
                      src={results2Img}
                      alt="California Healthcare Marketing Campaign Execution"
                      className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-6 right-6 text-left">
                      <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">CAMPAIGN EXECUTION</p>
                      <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">YMYL Content, Paid Media & HIPAA-Aware Workflows</h4>
                    </div>
                  </div>
                </div>
              </section>
            )}

          </div>
        );
      })}

      {/* CASE STUDIES INTRO HEADER */}
      <section className="bg-[#0C1220] pt-[120px] pb-[60px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] text-center">
          <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
            SUCCESS STORIES
          </span>
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold font-sora text-white leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
            {caseStudiesIntroSec.heading}
          </h2>
          {caseStudiesIntroSec.paragraphs && caseStudiesIntroSec.paragraphs.map((para, idx) => (
            <p key={idx} className="font-sans text-[15px] md:text-[18px] leading-[1.8] text-[#8FA8C8] max-w-[800px] mx-auto">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* INDIVIDUAL CINEMATIC CASE STUDIES */}
      {caseStudies.map((cs, idx) => {
        const cleanTitle = `${cs.client} — ${cs.stat}`;
        const isAlternate = idx % 2 === 1;
        const bgClass = isAlternate ? 'bg-[#0A101D]' : 'bg-[#0C1220]';
        
        return (
          <section key={idx} className={`${bgClass} py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]`}>
            {/* Background glow effects */}
            <div className="absolute top-0 left-[10%] w-[40%] h-[40%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
              
              {/* 1. TOP LABEL */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#00C68A] text-[12px] font-extrabold uppercase tracking-[3px] font-sans">
                  CASE STUDY 0{idx + 1}
                </span>
                <div className="h-[1px] w-12 bg-[#00C68A]/30" />
              </div>
              
              {/* 2. MAIN TITLE */}
              <h3 className="text-[22px] md:text-[30px] lg:text-[34px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-8 tracking-tight max-w-[1000px] text-left">
                {cleanTitle}
              </h3>
              
              {/* 3. FEATURED IMAGE */}
              <div className="relative w-full h-[320px] md:h-[520px] lg:h-[580px] rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] mb-12 group">
                <img
                  src={cs.image || (idx === 0 ? '/images/services/healthcare-digital-marketing-agency-california-case-study-1.webp' : idx === 1 ? '/images/services/healthcare-digital-marketing-agency-california-case-study-2.webp' : '/images/services/healthcare-digital-marketing-agency-california-case-study-3.webp')}
                  alt={cleanTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] brightness-[0.85] group-hover:brightness-90"
                />
                {/* Dark gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/90 via-[#080D18]/25 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080D18]/50 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* 4. STORY CONTENT */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                
                {/* The Challenge Column */}
                <div className="bg-[#162035]/30 backdrop-blur-sm border border-[rgba(255,255,255,0.04)] rounded-[20px] p-8 text-left hover:border-red-500/20 transition-all duration-300 shadow-lg">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-[1.5px] mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    THE CHALLENGE
                  </span>
                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
                    {cs.paragraphs && cs.paragraphs[0]}
                  </p>
                </div>
                
                {/* What GrowLimo Changed Column */}
                <div className="bg-[#162035]/30 backdrop-blur-sm border border-[rgba(0,198,138,0.12)] rounded-[20px] p-8 text-left hover:border-[#00C68A]/30 transition-all duration-300 shadow-lg">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C68A]/10 border border-[#00C68A]/20 text-[#00C68A] text-[11px] font-bold uppercase tracking-[1.5px] mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C68A] animate-pulse" />
                    WHAT GROWLIMO CHANGED
                  </span>
                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#F0F4FF] font-medium">
                    {cs.paragraphs && cs.paragraphs[1]}
                  </p>
                </div>
                
              </div>
              
              {/* 5. KPI / ROI SECTION */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {cs.bullets && cs.bullets.map((bullet, bIdx) => {
                  const { label, value } = parseBulletMetric(bullet);
                  return (
                    <div
                      key={bIdx}
                      className="relative group bg-[#162035]/50 backdrop-blur-md border border-[rgba(0,198,138,0.15)] hover:border-[#00C68A] rounded-[20px] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,198,138,0.08)] text-left"
                    >
                      <div className="absolute -inset-px rounded-[20px] bg-gradient-to-r from-[#00C68A]/0 via-[#00C68A]/8 to-[#00C68A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="text-[20px] sm:text-[22px] md:text-[24px] font-extrabold font-sora text-[#00C68A] tracking-tight mb-2.5 leading-tight">
                        {value}
                      </div>
                      <div className="text-[#8FA8C8] text-[13.5px] md:text-[14px] leading-relaxed font-sans font-medium">
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* 6. PRACTICE INFO BLOCK */}
              <div className="bg-[#162035]/20 backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded-[20px] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-left shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00C68A]/10 border border-[#00C68A]/20 flex items-center justify-center text-[#00C68A] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-[#00C68A] tracking-[1.5px] block mb-1">PRACTICE NAME</span>
                    <span className="text-[15px] font-bold text-[#F0F4FF] font-sora block">{cs.client}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-8 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-1">LOCATION</span>
                    <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                      {idx === 0 ? 'Los Angeles, California' : idx === 1 ? 'Orange County, California' : 'Sacramento, California'}
                    </span>
                  </div>
                  
                  <div className="flex flex-col border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.08)] pt-4 md:pt-0 md:pl-8">
                    <span className="text-[10px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-1">SPECIALTY</span>
                    <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                      {idx === 0 ? 'Multi-Specialty Medical Group' : idx === 1 ? 'Cosmetic & Plastic Surgery' : 'Urgent Care Chain'}
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
        );
      })}

      {/* SECTION 16: DENTAL STRATEGIES BY SPECIALTY (White Bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          
          <div className="text-left mb-12">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              SPECIALTY PLAYBOOKS
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
              {specialtiesSec.heading}
            </h2>
            {specialtiesSec.paragraphs && specialtiesSec.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73] mt-4 max-w-[800px]">
                {para}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtiesSec.bullets && specialtiesSec.bullets.map((bullet, idx) => {
              const separatorIdx = bullet.indexOf(':');
              const specTitle = separatorIdx !== -1 ? bullet.substring(0, separatorIdx).trim() : bullet;
              const specDesc = separatorIdx !== -1 ? bullet.substring(separatorIdx + 1).trim() : '';
              const isExpanded = expandedSpecialties[idx];

              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-6 text-left shadow-sm flex flex-col justify-between hover:border-[#00C68A]/35 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="font-sora font-bold text-[16px] text-[#0B1829] leading-tight">
                        {specTitle}
                      </h3>
                    </div>

                    <p className={`font-sans text-[14px] leading-relaxed text-[#3D5A73] transition-all duration-300 ${isExpanded ? '' : 'line-clamp-4'}`}>
                      {specDesc}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleSpecialty(idx)}
                    className="text-[#00C68A] hover:text-[#00A572] font-sora font-extrabold text-[12px] tracking-[1.5px] uppercase flex items-center gap-1.5 mt-5 leading-none transition-colors border-t border-[#E3EEF7]/80 pt-4 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Collapse Playbook' : 'View Playbook'}</span>
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 17: TARGET CITIES ACCORDION (Dark Bg) */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 40%: Headline & description */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                LOCAL OUTREACH
              </span>
              <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                {citiesSec.heading}
              </h2>
              {citiesSec.paragraphs && citiesSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                  {para}
                </p>
              ))}
              {citiesSec.closingText && (
                <div className="border-l-4 border-[#00C68A] pl-4 py-1.5 bg-[#1A2438]/50 rounded-r-[6px]">
                  <p className="font-sans text-[14.5px] leading-relaxed font-bold text-[#F0F4FF]">
                    {citiesSec.closingText}
                  </p>
                </div>
              )}
            </div>

            {/* Right 60%: Dynamic Cities Grid Accordion */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {citiesSec.bullets && citiesSec.bullets.map((bullet, idx) => {
                  const separatorIdx = bullet.indexOf(':');
                  const cityTitle = separatorIdx !== -1 ? bullet.substring(0, separatorIdx).trim() : bullet;
                  const cityDesc = separatorIdx !== -1 ? bullet.substring(separatorIdx + 1).trim() : '';
                  const isExpanded = expandedCities[idx];

                  return (
                    <div
                      key={idx}
                      className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-5 shadow-sm transition-all duration-300 hover:border-[#00C68A]/20"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-sora font-extrabold text-[15px] text-[#F0F4FF]">
                          {cityTitle}
                        </span>
                        <button
                          onClick={() => toggleCity(idx)}
                          className="w-7 h-7 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] hover:border-[#00C68A]/30 flex items-center justify-center text-[#8FA8C8] hover:text-white transition-all cursor-pointer"
                        >
                          <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#00C68A]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[160px] opacity-100 mt-3 pt-3 border-t border-[rgba(255,255,255,0.04)]' : 'max-h-0 opacity-0'}`}>
                        <p className="font-sans text-[13px] leading-relaxed text-[#8FA8C8]">
                          {cityDesc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 18: WHY DENTISTS PARTNER WITH US (White Bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          
          <div className="text-left mb-10">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              TRUSTED EXPERTISE
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
              {partnerSec.heading}
            </h2>
            {partnerSec.paragraphs && partnerSec.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73] mt-4 max-w-[800px]">
                {para}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {partnerSec.bullets && partnerSec.bullets.map((bullet, idx) => {
              const separatorIdx = bullet.indexOf(':');
              const cardTitle = separatorIdx !== -1 ? bullet.substring(0, separatorIdx).trim() : bullet;
              const cardDesc = separatorIdx !== -1 ? bullet.substring(separatorIdx + 1).trim() : '';

              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[16px] p-6 shadow-sm flex gap-4 items-start hover:border-[#00C68A]/30 transition-all duration-300"
                >
                  <div className="w-[30px] h-[30px] rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-[14px] h-[14px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sora font-bold text-[16px] text-[#0B1829] mb-2 leading-tight">
                      {cardTitle}
                    </h3>
                    {cardDesc && (
                      <p className="font-sans text-[14.5px] leading-relaxed text-[#3D5A73]">
                        {cardDesc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {partnerSec.closingText && (
            <div className="mt-8 p-6 rounded-[16px] border-l-4 border-[#00C68A] bg-[#F8FAFC] text-left">
              <p className="font-sans text-[15px] leading-[1.8] font-bold italic text-[#0B1829]">
                "{partnerSec.closingText}"
              </p>
            </div>
          )}

        </div>
      </section>

      {/* FULL-WIDTH BANNER SKYLINE RESULTS IMAGE (Renders after Author section) */}
      {californiaResultsImg && (
        <section className="relative w-full overflow-hidden">
          <div className="relative w-full h-[320px]">
            <img
              src={californiaResultsImg}
              alt="California Results Banner Skyline"
              className="w-full h-full object-cover brightness-[0.3]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C1220]/75 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 max-w-[1200px] text-center">
                <h2 className="text-[22px] md:text-[36px] font-extrabold font-sora text-white leading-tight mb-2 tracking-tight">
                  70+ California Healthcare Practices Partnered
                </h2>
                <p className="text-[#00C68A] font-sans font-bold text-[15px] tracking-[2.5px] uppercase">
                  YMYL-COMPLIANT | HIPAA-AWARE | FULL-FUNNEL PATIENT ACQUISITION
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 19: TESTIMONIALS QUOTE CARDS GRID (White Bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          
          <div className="text-center mb-16">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              PATIENT TRUST & REVIEWS
            </span>
            <h2 className="text-[26px] md:text-[32px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
              {testimonialsSec.heading}
            </h2>
            {testimonialsSec.paragraphs && testimonialsSec.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73] mt-4 max-w-[800px] mx-auto">
                {para}
              </p>
            ))}
          </div>

          {/* Testimonial Quote Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialsSec.bullets && testimonialsSec.bullets.map((bullet, idx) => {
              const { quote, name, location } = parseTestimonial(bullet);

              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm flex flex-col justify-between text-left transition-all duration-300 hover:border-[#00C68A]/35"
                >
                  <div className="space-y-4">
                    <div className="text-[#00C68A]/20 text-[56px] leading-[0px] font-serif select-none">“</div>
                    <p className="font-sans text-[15px] leading-[1.8] italic text-[#3D5A73] relative z-10 border-l-4 border-[#00C68A] pl-4 py-1">
                      {quote.replace(/^["'“”]/, '').replace(/["'“”]$/, '')}
                    </p>
                  </div>

                  {/* Author detail */}
                  <div className="mt-8 pt-4 border-t border-[#E3EEF7]">
                    <h4 className="font-sora font-bold text-[14.5px] text-[#0B1829]">{name}</h4>
                    <p className="font-sans text-[12.5px] text-[#3D5A73] mt-1 font-medium">{location}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {testimonialsSec.closingText && (
            <div className="text-center mt-12">
              <p className="font-sans text-[15px] leading-relaxed text-[#3D5A73] font-bold">
                {testimonialsSec.closingText}
              </p>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 20: DENTAL PROCESS WORKFLOW (Dark Bg) */}
      {processSection && processSection.steps && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            
            <div className="text-center mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                OUR METHODOLOGY
              </span>
              <h2 className="text-[26px] md:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                {processSection.title}
              </h2>
              {processSection.intro && (
                <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px] mx-auto">
                  {processSection.intro}
                </p>
              )}
            </div>

            {/* Stepper Timeline */}
            <div className="relative border-l border-[rgba(255,255,255,0.08)] ml-4 md:ml-10 space-y-12">
              {processSection.steps.map((step, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12 group text-left">
                  {/* Bullet Node */}
                  <div className="absolute left-[-15px] top-1.5 w-7 h-7 rounded-full bg-[#0C1220] border-2 border-[#00C68A] flex items-center justify-center z-20 group-hover:bg-[#00C68A] transition-all duration-300">
                    <span className="text-white text-[10px] font-extrabold">{idx + 1}</span>
                  </div>
                  
                  <h3 className="font-sora font-extrabold text-[18px] md:text-[20px] text-[#F0F4FF] mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 21: CALL TO ACTION SECTION (Dark/Emerald Gradient) */}
      {ctaSection && (
        <section className="bg-gradient-to-br from-[#0C1220] via-[#0F1E36] to-[#0A261D] py-[100px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
          <div className="absolute inset-0 bg-[#00C68A]/2 opacity-25 blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 md:px-10 max-w-[900px] relative z-10">
            
            <h2 className="text-[28px] md:text-[36px] font-extrabold font-sora text-white leading-tight mb-6 tracking-tight">
              {ctaSection.heading}
            </h2>
            
            {ctaSection.paragraphs && ctaSection.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] md:text-[17px] leading-[1.8] text-[#8FA8C8] mb-8 max-w-[700px] mx-auto">
                {para}
              </p>
            ))}

            <Link
              href="/contact/"
              className="inline-block bg-[#00C68A] hover:bg-[#00B37C] text-[#080D18] font-sora font-extrabold text-[15px] tracking-[1.5px] uppercase rounded-[12px] py-4 px-9 shadow-lg hover:shadow-[#00C68A]/20 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
            >
              {ctaButtonText}
            </Link>
            
          </div>
        </section>
      )}

      {/* SECTION 22: FAQS ACCORDION (White Bg) */}
      {faqs && faqs.length > 0 && (
        <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[860px]">
            
            <div className="text-center mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                FAQS & ANSWERS
              </span>
              <h2 className="text-[26px] md:text-[32px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
                Frequently Asked Healthcare Marketing Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                
                return (
                  <div
                    key={idx}
                    className="border border-[#E3EEF7] rounded-[18px] bg-[#F8FAFC] overflow-hidden transition-all duration-300 hover:border-[#00C68A]/30"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full py-5 px-6 flex justify-between items-center text-left font-sora font-bold text-[15.5px] md:text-[16.5px] text-[#0B1829] hover:text-[#00C68A] transition-colors cursor-pointer focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <div className={`w-8 h-8 rounded-xl bg-white border border-[#E3EEF7] flex items-center justify-center text-[#3D5A73] transition-all duration-200 ${isOpen ? 'rotate-180 border-[#00C68A]/30 text-[#00C68A]' : ''}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-6 pt-2 font-sans text-[15px] leading-[1.8] text-[#3D5A73] border-t border-[#E3EEF7]/60">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 23: INTERNAL LINKS CHIPS (Dark Bg) */}
      {internalLinks && internalLinks.length > 0 && (
        <section className="bg-[#080D18] py-[60px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-6 block font-sans">
              EXPLORE MORE SERVICES
            </span>
            <div className="flex flex-wrap justify-center gap-3.5">
              {internalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.to}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[14px] px-5 py-3 text-[13.5px] font-sora font-semibold text-[#8FA8C8] hover:text-white hover:border-[#00C68A]/40 transition-all duration-200"
                >
                  {link.anchor}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
