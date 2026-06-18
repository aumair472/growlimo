import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionGAMC({ service, slug, onSelectPlan }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [expandedCities, setExpandedCities] = useState({});
  const router = useRouter();

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
    ctaButtonText = 'Claim Your Free Google Ads Audit →',
    faqs = [],
    internalLinks = [],
    images = [],
    schema
  } = service;

  // Safe image pointers
  const heroImg = images[0] || '/images/services/hero-google-ads-management-california.webp';
  const strategyImg = images[1] || '/images/services/google-ads-management-california-strategy.webp';
  const resultsImg1 = images[2] || '/images/services/google-ads-management-california-results-1.webp';
  const resultsImg2 = images[3] || '/images/services/google-ads-management-california-results-2.webp';
  const bannerImg = images[4] || '/images/services/google-ads-management-california-banner.webp';

  const toggleCity = (idx) => {
    setExpandedCities(prev => ({
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

  // Section references from JSON
  const whyFailSec = contentSections[0] || {};
  const servicesIntroSec = contentSections[1] || {};

  // Numbered Services 1-7 are contentSections[2] to [8]
  const numberedServices = contentSections.slice(2, 9);

  // Case Studies Intro (index 9) & Individual Case Studies (indices 10, 11, 12)
  const caseStudiesIntroSec = contentSections[9] || {};
  const caseStudy1 = parseCaseStudy(contentSections[10]);
  const caseStudy2 = parseCaseStudy(contentSections[11]);
  const caseStudy3 = parseCaseStudy(contentSections[12]);
  const caseStudies = [caseStudy1, caseStudy2, caseStudy3].filter(Boolean);

  // Industries (index 13), Cities (index 14), Partner/Author (index 15)
  const industriesSec = contentSections[13] || {};
  const citiesSec = contentSections[14] || {};
  const partnerSec = contentSections[15] || {};

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

        <div className="container mx-auto px-4 md:px-10 max-w-[1100px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side: Headline & Trust Info */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                GOOGLE PARTNER CERTIFIED PPC AGENCY
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
                  { value: 'Google Partner', label: 'Certified Team' },
                  { value: '$1.2M+', label: 'Spend Managed' },
                  { value: '4.9★ Rating', label: 'Month-to-Month' },
                  { value: 'No Lock-In Contracts', label: 'Cancel Any Time' }
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
              <div className="bg-[#1A2438]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-5 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/5 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-bold text-[15px] text-[#F0F4FF] mb-3 text-left border-b border-[rgba(255,255,255,0.06)] pb-2">
                  Get Your Free California Google Ads Audit
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
            alt="GrowLimo California Google Ads PPC Agency"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          {/* Deep dark gradient overlays */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080D18] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none" />

          {/* 3 Floating Stat Cards on Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 max-w-[1100px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { value: '5.8x', text: 'Average Client ROAS Across Industries' },
                  { value: '$1.2M+', text: 'California Google Ads Budget Managed' },
                  { value: '100%', text: 'Partner Certified Strategy & No Lock-In Contracts' }
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

      {/* SECTION 3: WHY CAMPAIGNS FAIL (White Bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-left mb-12">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              MARKET REALITY
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
              {whyFailSec.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left 60%: Text content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <p className="font-sans text-[15px] leading-[1.8] text-[#1A2438] font-semibold">
                {heroContent[1]}
              </p>

              {whyFailSec.paragraphs && whyFailSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}

              {whyFailSec.closingText && (
                <div className="border-l-4 border-[#00C68A] pl-5 py-2 my-6 bg-[#00C68A]/5 rounded-r-[8px]">
                  <p className="font-sans text-[15px] leading-[1.8] font-bold text-[#0B1829]">
                    {whyFailSec.closingText}
                  </p>
                </div>
              )}
            </div>

            {/* Right 40%: Key bullets styled inside a card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm">
                <h3 className="font-sora font-bold text-[17px] text-[#0B1829] mb-6 text-left border-b border-[#E3EEF7] pb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DD6613] inline-block" />
                  7 Lethal PPC Mistakes We Eliminate
                </h3>
                <div className="space-y-5">
                  {whyFailSec.bullets && whyFailSec.bullets.map((bullet, idx) => {
                    const parts = bullet.split(':');
                    const title = parts[0] ? parts[0].trim() : '';
                    const desc = parts[1] ? parts[1].trim() : '';

                    return (
                      <div key={idx} className="flex gap-4 items-start text-left">
                        <div className="w-[24px] h-[24px] rounded-full bg-[rgba(221,102,19,0.08)] border border-[rgba(221,102,19,0.15)] flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-[10px] h-[10px] text-[#DD6613]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-sans text-[14.5px] font-bold text-[#0B1829] leading-tight mb-1">
                            {title}
                          </h4>
                          {desc && (
                            <p className="font-sans text-[13px] leading-relaxed text-[#3D5A73]">
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

      {/* SECTION 4: CAPABILITIES INTRO (Dark Bg) */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left 45%: Image */}
            <div className="lg:col-span-5">
              <div className="rounded-[20px] overflow-hidden shadow-xl border-4 border-[#1A2438] relative group">
                <img
                  src={strategyImg}
                  alt="California Google Ads Strategy Planning Session"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right 55%: Text content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                CAMPAIGN ARCHITECTURE
              </span>
              <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#F0F4FF] tracking-tight border-l-4 border-[#00C68A] pl-4">
                {servicesIntroSec.heading}
              </h2>
              {servicesIntroSec.paragraphs && servicesIntroSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: ALTERNATING SOLUTION PILLARS */}
      {numberedServices.map((serviceSec, sIdx) => {
        const isWhiteBg = sIdx % 2 === 0;
        const bgClass = isWhiteBg ? 'bg-[#FFFFFF] border-t border-[#E3EEF7]' : 'bg-[#0C1220] border-t border-[rgba(255,255,255,0.04)]';
        const numBadge = `0${sIdx + 1}`;
        const displayHeading = serviceSec.heading;

        return (
          <div key={sIdx}>
            <section className={`${bgClass} py-[96px] relative z-10 text-left`}>
              <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
                <div className="max-w-[860px] mx-auto">

                  {/* Number & Eyebrow */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] flex items-center justify-center font-sora font-extrabold text-[14px]">
                      {numBadge}
                    </span>
                    <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                      PPC PERFORMANCE CAPABILITY
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

                  {/* Checklist if bullets exist */}
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

                  {/* Service Specific Callout */}
                  {serviceSec.closingText && (
                    <div className={`mt-8 p-6 rounded-[16px] border-l-4 border-[#00C68A] text-left ${isWhiteBg ? 'bg-[#F8FAFC]' : 'bg-[#1A2438]/60'}`}>
                      <p className={`font-sans text-[15px] leading-[1.8] font-bold italic ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                        "{serviceSec.closingText}"
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </section>

            {/* FULL-SCREEN METRIC DASHBOARDS PLACED IN-BETWEEN */}

            {/* SEO/Ads search dashboard after Service 2 (Performance Max, sIdx === 1) */}
            {sIdx === 1 && resultsImg1 && (
              <section className="relative w-full py-16 bg-[#080D18] flex justify-center border-t border-[rgba(255,255,255,0.04)]">
                <div className="container max-w-[900px] px-4">
                  <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                    <img
                      src={resultsImg1}
                      alt="Google Ads ROAS & Performance Optimizer Dashboard"
                      className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02] brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-6 right-6 text-left">
                      <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">ROAS OPTIMIZATION</p>
                      <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Consistently Delivering 5.8x Average Return Across California Markets</h4>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* YouTube/Display creative overlay after Service 5 (YouTube & Display, sIdx === 4) */}
            {sIdx === 4 && resultsImg2 && (
              <section className="relative w-full py-16 bg-[#080D18] flex justify-center border-t border-[rgba(255,255,255,0.04)]">
                <div className="container max-w-[900px] px-4">
                  <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                    <img
                      src={resultsImg2}
                      alt="California YouTube Advertising & Display Placements Dashboard"
                      className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02] brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-6 right-6 text-left">
                      <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">CREATIVE RETARGETING</p>
                      <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Capturing Pre-qualified Search Intent and Warm Re-engagement Placements</h4>
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
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px] text-center">
          <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
            REAL PPC RESULTS
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

            <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

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
              <div className="relative w-full h-[320px] md:h-[500px] rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] mb-12 group">
                <img
                  src={cs.image || bannerImg}
                  alt={cleanTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] brightness-[0.8] group-hover:brightness-90"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {cs.bullets && cs.bullets.map((bullet, bIdx) => {
                  const { label, value } = parseBulletMetric(bullet);
                  return (
                    <div
                      key={bIdx}
                      className="relative group bg-[#162035]/50 backdrop-blur-md border border-[rgba(0,198,138,0.15)] hover:border-[#00C68A] rounded-[20px] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,198,138,0.08)] text-left"
                    >
                      <div className="absolute -inset-px rounded-[20px] bg-gradient-to-r from-[#00C68A]/0 via-[#00C68A]/8 to-[#00C68A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="text-[20px] sm:text-[22px] font-extrabold font-sora text-[#00C68A] tracking-tight mb-2.5 leading-tight">
                        {value}
                      </div>
                      <div className="text-[#8FA8C8] text-[13px] leading-relaxed font-sans font-medium">
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
                    <span className="text-[10px] uppercase font-extrabold text-[#00C68A] tracking-[1.5px] block mb-1">CLIENT AUDITED</span>
                    <span className="text-[15px] font-bold text-[#F0F4FF] font-sora block">{cs.client}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-8 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-1">MARKET</span>
                    <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                      {idx === 0 ? 'San Diego Metro Area' : idx === 1 ? 'Los Angeles Metro Area' : 'Sacramento Central Valley'}
                    </span>
                  </div>

                  <div className="flex flex-col border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.08)] pt-4 md:pt-0 md:pl-8">
                    <span className="text-[10px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-1">INDUSTRY SEGMENT</span>
                    <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                      {idx === 0 ? 'Home Services (Plumbing)' : idx === 1 ? 'Healthcare (Medical Spa)' : 'Home Services (HVAC)'}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        );
      })}

      {/* SECTION 7: INDUSTRIES WE SERVE PLAYBOOK (White Bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-left mb-12">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              VERTICAL STRATEGIES
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
              {industriesSec.heading}
            </h2>
            {industriesSec.paragraphs && industriesSec.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73] mt-4 max-w-[800px]">
                {para}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesSec.bullets && industriesSec.bullets.map((bullet, idx) => {
              const separatorIdx = bullet.indexOf(':');
              const indTitle = separatorIdx !== -1 ? bullet.substring(0, separatorIdx).trim() : bullet;
              const indDesc = separatorIdx !== -1 ? bullet.substring(separatorIdx + 1).trim() : '';

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
                      <h3 className="font-sora font-bold text-[15px] text-[#0B1829] leading-tight">
                        {indTitle}
                      </h3>
                    </div>

                    <p className="font-sans text-[13.5px] leading-relaxed text-[#3D5A73]">
                      {indDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 8: TARGET CITIES ACCORDION (Dark Bg) */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left 40%: Headline & description */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                REGIONAL targeting
              </span>
              <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                {citiesSec.heading}
              </h2>
              {citiesSec.paragraphs && citiesSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                  {para}
                </p>
              ))}
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

      {/* SECTION 9: EEAT BIO / SPECIALISTS (White bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left 60%: Strategist Bio */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                CERTIFIED GOOGLE PARTNER
              </span>
              <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
                {partnerSec.heading}
              </h2>
              {partnerSec.paragraphs && partnerSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>

            {/* Right 40%: Certifications Badge block */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[24px] p-8 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-sora font-extrabold text-[18px] text-[#0B1829] mb-3">GrowLimo Certified PPC Authority</h3>
                <p className="font-sans text-[13.5px] leading-relaxed text-[#3D5A73] mb-6 max-w-[280px]">
                  Passing all Google Ads certification standards, audit checks, and performance thresholds.
                </p>
                <div className="w-full space-y-2.5">
                  {['Google Search Certification', 'Google Display Certification', 'Google Shopping Certification', 'Google Video Certification'].map((badge, bIdx) => (
                    <div key={bIdx} className="bg-white border border-[#E3EEF7] rounded-[10px] py-2 px-4 text-left flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#00C68A]" />
                      <span className="font-sans text-[13px] font-bold text-[#0B1829]">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10: 5-PHASE PROCESS STEPPER TIMELINE */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="max-w-[800px] mb-16">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              CAMPAIGN LIFECYCLE
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-tight text-white tracking-tight border-l-4 border-[#00C68A] pl-4">
              {processSection.title}
            </h2>
            <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mt-4">
              {processSection.intro}
            </p>
          </div>

          <div className="relative border-l border-[rgba(255,255,255,0.08)] ml-4 md:ml-6 space-y-12 pb-4">
            {processSection.steps && processSection.steps.map((step, idx) => (
              <div key={idx} className="relative pl-10 md:pl-14 group">

                {/* Stepper Pin */}
                <div className="absolute left-[-17px] top-0.5 w-[34px] h-[34px] rounded-full bg-[#080D18] border-2 border-[#00C68A] flex items-center justify-center font-sora font-extrabold text-[12px] text-[#00C68A] shadow-[0_0_15px_rgba(0,198,138,0.2)] transition-all duration-300 group-hover:scale-110">
                  {idx + 1}
                </div>

                <div className="max-w-[760px] bg-[#1A2438]/40 border border-[rgba(255,255,255,0.04)] hover:border-[#00C68A]/25 rounded-[20px] p-6 sm:p-8 transition-all duration-300 shadow-md">
                  <h3 className="font-sora font-extrabold text-[17px] text-[#F0F4FF] mb-3 leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[14.5px] leading-relaxed text-[#8FA8C8]">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 11: EXPANDABLE FAQS ACCORDION */}
      <section className="bg-[#080D18] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-center mb-16">
            <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora text-[#F0F4FF] leading-tight tracking-tight max-w-[800px] mx-auto">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-4">
            {faqs && faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-[#202B41] transition-colors duration-200 cursor-pointer"
                  >
                    <span className="font-sora font-bold text-[15px] sm:text-[16px] text-[#F0F4FF] pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-[#8FA8C8] shrink-0">
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#00C68A]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100 border-t border-[rgba(255,255,255,0.04)]' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6">
                      <p className="font-sans text-[14.5px] leading-[1.7] text-[#8FA8C8]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <section className="relative w-full py-[120px] bg-[#0C1220] overflow-hidden text-center z-10 border-t border-[rgba(255,255,255,0.04)]">
        {/* Glow Spheres */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#00C68A]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-[800px] relative z-10">
          <h2 className="text-[26px] sm:text-[34px] md:text-[36px] font-extrabold font-sora text-white leading-tight tracking-tight mb-6">
            {ctaSection.heading}
          </h2>

          {ctaSection.paragraphs && ctaSection.paragraphs.slice(0, 2).map((para, idx) => (
            <p key={idx} className="font-sans text-[15px] sm:text-[17px] leading-[1.8] text-[#8FA8C8] mb-6 max-w-[660px] mx-auto">
              {para}
            </p>
          ))}

          <button
            onClick={() => router.push('/contact/')}
            className="inline-flex items-center justify-center font-sora font-extrabold text-[15px] text-white tracking-[0.5px] py-4.5 px-8 rounded-full bg-gradient-to-r from-[#DD6613] to-[#FB923C] shadow-lg hover:shadow-[0_8px_25px_rgba(221,102,19,0.3)] transition-all duration-300 hover:scale-[1.03] cursor-pointer mb-8"
          >
            {ctaButtonText}
          </button>

          <p className="font-sans text-[12.5px] font-semibold text-[#00C68A] tracking-[1px] uppercase">
            {ctaSection.paragraphs && ctaSection.paragraphs[2]}
          </p>
        </div>
      </section>

      {/* SECTION 13: INTERNAL LINKS */}
      <section className="bg-[#080D18] py-12 relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="font-sans text-[13px] font-bold text-[#8FA8C8] uppercase tracking-[1.5px] mr-2">Related Solutions:</span>
            {internalLinks && internalLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.to}
                className="bg-[#1A2438] border border-[rgba(255,255,255,0.05)] hover:border-[#00C68A]/30 text-[#8FA8C8] hover:text-white rounded-full py-2 px-5 font-sans text-[13.5px] font-medium shadow-sm transition-all duration-200"
              >
                {link.anchor}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
