import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionPPCTX({ service, slug, onSelectPlan }) {
  const [activeFaq, setActiveFaq] = useState(null);

  if (!service) return null;

  const {
    metaTitle,
    metaDescription,
    h1,
    subheadline,
    heroContent = [],
    contentSections = [],
    processSection = {},
    industriesSection = {},
    ctaSection = {},
    ctaButtonText = 'Get Your Free Texas PPC Audit →',
    faqs = [],
    internalLinks = [],
    images = [],
    schema,
    trustBar
  } = service;

  // Safe image array pointers
  const heroImg = images[0] || '/images/services/hero-ppc-services-texas.webp';
  const strategyImg = images[1] || '/images/services/ppc-services-texas-strategy.webp';
  const keywordImg = images[2] || '/images/services/ppc-services-texas-results-1.webp';
  const linkImg = images[3] || '/images/services/ppc-services-texas-results-2.webp';
  const bannerImg = images[4] || '/images/services/ppc-services-texas-banner.webp';

  const areaServedName = service.areaServedName || service.areaServed?.name || 'Texas';
  const locationLabel = `${areaServedName.toUpperCase()} PPC SPECIALISTS`;

  const trustBarString = trustBar || '';
  const trustItems = trustBarString
    ? trustBarString.split('|').map((s) => s.trim().replace(/^✅\s*/, '')).filter(Boolean)
    : [];

  const parseTrustBarItem = (item, idx) => {
    const cleaned = item.trim();
    const dollarMatch = cleaned.match(/\$(\d+)/);
    const roasMatch = cleaned.match(/(\d+(\.\d+)?x)/);
    if (dollarMatch) {
      return { value: `$${dollarMatch[1]}`, label: cleaned.replace(dollarMatch[0], '').replace(/[()]/g, '').trim() || 'Avg CPL' };
    }
    if (roasMatch) {
      return { value: roasMatch[1], label: cleaned.replace(roasMatch[0], '').trim() || 'ROAS' };
    }
    if (cleaned.toLowerCase().includes('certified') || cleaned.toLowerCase().includes('partner')) {
      const short = cleaned.split(' ').slice(0, 2).join(' ');
      return { value: short || 'Certified', label: cleaned };
    }
    if (cleaned.toLowerCase().includes('lock-in') || cleaned.toLowerCase().includes('contract')) {
      return { value: 'No Lock-In', label: cleaned };
    }
    const words = cleaned.split(' ');
    return { value: words.slice(0, 2).join(' ') || `${idx + 1}`, label: cleaned };
  };

  const heroTrustPills = trustItems.length >= 3
    ? trustItems.slice(0, 3).map(parseTrustBarItem)
    : [
        { value: '$54', label: 'Average Cost-Per-Lead' },
        { value: '4.6x', label: 'E-Commerce ROAS' },
        { value: 'Google Partner', label: 'Certified PPC Agency' },
      ];

  const overlayTrustCards = trustItems.length >= 3
    ? trustItems.slice(0, 3).map((item, idx) => {
        const parsed = parseTrustBarItem(item, idx);
        return { value: parsed.value, text: parsed.label };
      })
    : [
        { value: '$54', text: 'Average Cost-Per-Lead (Texas Service Industries)' },
        { value: '4.6x', text: 'Average E-Commerce ROAS Across Texas Accounts' },
        { value: 'Multi-Platform', text: 'Google, Microsoft & Meta Certified Management' },
      ];

  // Helper: Split and parse Case Studies
  const parseCaseStudy = (bullet) => {
    // Expected format: "Title — Stat: Description"
    const firstDashIndex = bullet.indexOf('—');
    const colonIndex = bullet.indexOf(':', firstDashIndex);
    if (firstDashIndex !== -1 && colonIndex !== -1) {
      const author = bullet.substring(0, firstDashIndex).trim();
      const stat = bullet.substring(firstDashIndex + 1, colonIndex).trim();
      const story = bullet.substring(colonIndex + 1).trim();
      return { author, stat, story };
    }
    return { author: '', stat: '', story: bullet };
  };

  // Helper: Split and parse Testimonials
  const parseTestimonial = (bullet) => {
    // Expected format: '"Quote text" — Author Name, Title, Location'
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

  // Helper: Split and parse Pricing
  const parsePricing = (bullet) => {
    // Expected format: "Plan Name (Price) — Best For: Audience. Includes: Features..."
    const parenStart = bullet.indexOf('(');
    const parenEnd = bullet.indexOf(')');
    const dashIndex = bullet.indexOf('—');
    const includesIndex = bullet.indexOf('Includes:');

    if (parenStart !== -1 && parenEnd !== -1 && dashIndex !== -1) {
      const name = bullet.substring(0, parenStart).trim();
      const price = bullet.substring(parenStart + 1, parenEnd).trim();

      let bestFor = '';
      if (includesIndex !== -1) {
        bestFor = bullet.substring(dashIndex + 1, includesIndex).trim().replace('Best For:', '').trim();
      } else {
        bestFor = bullet.substring(dashIndex + 1).trim();
      }

      let features = [];
      if (includesIndex !== -1) {
        features = bullet.substring(includesIndex + 9).split(',').map(f => f.trim().replace(/\.$/, ''));
      }

      return { name, price, bestFor, features };
    }
    return { name: bullet, price: '', bestFor: '', features: [] };
  };

  // Extract sections safely by indices based on JSON sequence
  const introSection = contentSections[0] || {};
  const whyChooseUsSection = contentSections[1] || {};
  const servicesIntroSection = contentSections[2] || {};

  // Numbered Services 1-7
  const numberedServices = contentSections.slice(3, 10);

  // Custom styled components content sources
  const caseStudiesSection = contentSections[10] || {};
  const testimonialsSection = contentSections[11] || {};
  const pricingSection = contentSections[12] || {};
  const aboutSection = contentSections[13] || {};

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
      <section className="bg-[#080D18] text-white pt-[120px] pb-[80px] relative overflow-hidden">
        {/* Abstract background glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1100px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side: Headline & Trust Info */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                {locationLabel}
              </span>

              <h1 className="text-4xl md:text-[50px] lg:text-[54px] font-extrabold font-sora text-[#F0F4FF] leading-[1.08] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[17px] text-[#8FA8C8] leading-[1.75] mb-8 max-w-[620px]">
                {heroContent[0]}
              </p>

              {/* Trust Pills from trustBar */}
              <div className="flex flex-wrap gap-3 mb-4 w-full">
                {heroTrustPills.map((pill, idx) => (
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

            {/* Right Side: Form */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#1A2438]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-3 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/5 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-bold text-[14px] text-[#F0F4FF] mb-2 text-left border-b border-[rgba(255,255,255,0.06)] pb-1">
                  Get Your Free Texas PPC Audit
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
            alt="GrowLimo PPC Services Texas"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          {/* Deep dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D18] via-transparent to-[#FFFFFF]" />

          {/* 3 Floating Stat Cards on Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 max-w-[1100px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {overlayTrustCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0C1220]/75 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[18px] p-7 shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#00C68A]/40"
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

      {/* SECTION 3: INTRO (white bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-left mb-12">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              INTRODUCTION
            </span>
            <h2 className="text-[32px] md:text-[42px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
              {introSection.heading || 'What PPC Advertising Is — And Why Texas Businesses Need Expert Management'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left 60%: Text content */}
            <div className="lg:col-span-12 space-y-6 text-left">
              <p className="font-sans text-[17px] leading-[1.8] text-[#1A2438] font-semibold">
                {heroContent[1]}
              </p>

              {introSection.paragraphs && introSection.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}

              {introSection.closingText && (
                <div className="border-l-4 border-[#00C68A] pl-5 py-2 my-6 bg-[#00C68A]/5 rounded-r-[8px]">
                  <p className="font-sans text-[16px] leading-[1.8] font-bold text-[#0B1829]">
                    {introSection.closingText}
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US (dark bg) */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-left mb-10">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              OUR EDGE
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              {whyChooseUsSection.heading}
            </h2>
            {whyChooseUsSection.paragraphs && whyChooseUsSection.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px]">
                {para}
              </p>
            ))}
          </div>

          {/* Bullets as a 2-column grid of styled cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {whyChooseUsSection.bullets && whyChooseUsSection.bullets.map((bullet, idx) => {
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

        </div>
      </section>

      {/* SECTION 5: TWO-COLUMN IMAGE + TEXT */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left 40%: Image */}
            <div className="lg:col-span-5">
              <div className="rounded-[20px] overflow-hidden shadow-xl border-4 border-white relative group">
                <img
                  src={strategyImg}
                  alt="GrowLimo Texas PPC Strategy Planning"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right 60%: Text intro for services */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                CORE CAPABILITIES
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
                {servicesIntroSection.heading}
              </h2>
              {servicesIntroSection.paragraphs && servicesIntroSection.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[17px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTIONS 6-12: NUMBERED SERVICES (alternating bg) */}
      {numberedServices.map((serviceSec, sIdx) => {
        const isWhiteBg = sIdx % 2 === 0; // Alternates: 0=White, 1=Dark, 2=White, 3=Dark...
        const bgClass = isWhiteBg ? 'bg-[#FFFFFF] border-t border-[#E3EEF7]' : 'bg-[#0C1220] border-t border-[rgba(255,255,255,0.04)]';
        const numBadge = `0${sIdx + 1}`;

        // Clean title: strips "1. ", "2. " prefixes from heading
        const displayHeading = serviceSec.heading.replace(/^\d+\.\s*/, '');

        return (
          <div key={sIdx}>
            <section className={`${bgClass} py-[96px] relative z-10`}>
              <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
                <div className="max-w-[860px] mx-auto">

                  {/* Number Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-sora font-extrabold text-[15px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-[6px]">
                      SERVICE {numBadge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className={`text-[30px] md:text-[36px] font-extrabold font-sora leading-tight tracking-tight mb-6 ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                    {displayHeading}
                  </h2>

                  {/* Paragraphs */}
                  {serviceSec.paragraphs && serviceSec.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className={`font-sans text-[16px] leading-[1.8] mb-6 ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}
                    >
                      {para}
                    </p>
                  ))}

                  {/* Bullets */}
                  {serviceSec.bullets && serviceSec.bullets.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                      {serviceSec.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className={`flex gap-[12px] items-start p-4 rounded-[12px] border ${isWhiteBg
                            ? 'bg-[#F8FAFC] border-[#E3EEF7] hover:border-[#00C68A]/30'
                            : 'bg-[#1A2438] border-[rgba(255,255,255,0.05)] hover:border-[#00C68A]/20'
                            } transition-all duration-200`}
                        >
                          <div className="w-[24px] h-[24px] rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-[11px] h-[11px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className={`font-sans text-[14px] leading-[1.65] font-medium ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* closingText — supports internal link paths */}
                  {serviceSec.closingText && (
                    <div className={`mt-8 p-6 rounded-[16px] border-l-4 border-[#00C68A] ${isWhiteBg ? 'bg-[#F8FAFC] border-[#E3EEF7]' : 'bg-[#1A2438]/60 border-[rgba(255,255,255,0.04)]'
                      }`}>
                      {serviceSec.closingText.includes('/google-ads-management-texas/') ? (
                        <p className={`font-sans text-[16px] leading-[1.8] font-bold ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                          <Link href="/google-ads-management-texas/" className="text-[#00C68A] hover:underline">
                            Learn More About Our Texas Google Ads Management →
                          </Link>
                        </p>
                      ) : (
                        <p className={`font-sans text-[16px] leading-[1.8] font-bold italic ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                          {serviceSec.closingText}
                        </p>
                      )}
                    </div>
                  )}

                </div>
              </div>
            </section>

            {/* IMAGE SLOTS after service 3 and service 5 */}
            {sIdx === 2 && ( // After Service 3 (Keyword Research)
              <section className="relative w-full py-16 bg-[#080D18] flex justify-center">
                <div className="container max-w-[900px] px-4">
                  <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                    <img
                      src={keywordImg}
                      alt="Texas PPC Multi-Platform Performance Dashboard"
                      className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-6 right-6 text-left">
                      <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">CROSS-PLATFORM PPC</p>
                      <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Texas CPL Comparison Across Google, Microsoft & Meta</h4>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {sIdx === 4 && ( // After Service 5 (Link Building)
              <section className="relative w-full py-16 bg-[#080D18] flex justify-center">
                <div className="container max-w-[900px] px-4">
                  <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                    <img
                      src={linkImg}
                      alt="Texas Multi-Platform PPC Campaign Management"
                      className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-6 right-6 text-left">
                      <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">PAID MEDIA OPS</p>
                      <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Integrated Google, Microsoft & Meta Campaign Orchestration</h4>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        );
      })}

      {/* CASE STUDIES */}
      <section className="bg-[#0C1220] pt-[120px] pb-[60px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] text-center">
          <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
            SUCCESS STORIES
          </span>
          <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold font-sora text-white leading-tight mb-6 tracking-tight max-w-[900px] mx-auto">
            {caseStudiesSection.heading || 'Texas PPC Case Studies'}
          </h2>
          {caseStudiesSection.paragraphs && caseStudiesSection.paragraphs.map((para, idx) => (
            <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[800px] mx-auto mb-4">
              {para}
            </p>
          ))}
        </div>
      </section>

      {(caseStudiesSection.caseStudies || []).map((cs, idx) => {
        const isWhiteBg = idx % 2 === 0;
        const bgClass = isWhiteBg ? 'bg-white' : 'bg-[#0C1220]';
        const textClass = isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]';
        const bodyClass = isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]';

        return (
          <section key={idx} className={`${bgClass} py-[96px] relative z-10 border-t ${isWhiteBg ? 'border-[#E3EEF7]' : 'border-[rgba(255,255,255,0.04)]'}`}>
            <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#00C68A] text-[12px] font-extrabold uppercase tracking-[3px] font-sans">
                  CASE STUDY 0{idx + 1}
                </span>
                <div className="h-[1px] w-12 bg-[#00C68A]/30" />
              </div>
              <h3 className={`text-[28px] md:text-[36px] font-extrabold font-sora leading-tight mb-8 tracking-tight max-w-[1000px] text-left ${textClass}`}>
                {cs.heading}
              </h3>
              {cs.image && (
                <div className="relative w-full h-[320px] md:h-[480px] rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] mb-10 group">
                  <img
                    src={cs.image}
                    alt={cs.heading}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              {cs.paragraphs && cs.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className={`font-sans text-[16px] leading-[1.8] mb-6 text-left ${bodyClass}`}>
                  {para}
                </p>
              ))}
              {cs.bullets && cs.bullets.length > 0 && (
                <div className={`rounded-[16px] p-8 mt-6 border ${isWhiteBg ? 'bg-[#F8FAFC] border-[#E3EEF7]' : 'bg-[#1A2438]/50 border-[rgba(0,198,138,0.2)]'}`}>
                  <h4 className={`font-sora font-bold text-[20px] mb-6 text-left ${textClass}`}>Results:</h4>
                  <ul className="space-y-3">
                    {cs.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-left">
                        <span className="text-[#00C68A] text-[18px] mt-1">▸</span>
                        <span className={`font-sans text-[16px] leading-[1.7] font-medium ${bodyClass}`}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Fallback: legacy bullet case studies */}
      {!caseStudiesSection.caseStudies?.length && caseStudiesSection.bullets && caseStudiesSection.bullets.map((bullet, idx) => {
        const { author, stat, story } = parseCaseStudy(bullet);
        const cleanTitle = `${author} — ${stat}`;

        // Define metadata config mapped by index
        const details = [
          {
            image: '/images/services/seo-case-study-medical.webp',
            businessType: 'Specialty Medical Clinic',
            location: 'San Diego, CA',
            industry: 'Healthcare & Wellness',
            kpis: [
              { value: 'Position #2', label: 'Google Ranking' },
              { value: '2x Inquiries', label: 'Patient Organic Leads' },
              { value: '4 Months', label: 'Time to Page 1' }
            ]
          },
          {
            image: '/images/services/seo-case-study-ecommerce.webp',
            businessType: 'Direct-To-Consumer Brand',
            location: 'Los Angeles, CA',
            industry: 'eCommerce & Retail',
            kpis: [
              { value: 'Top 3', label: 'Keyword Rankings' },
              { value: '12 Keywords', label: 'Target Terms' },
              { value: '40% Reduction', label: 'Reduced PPC Ad Spend' }
            ]
          },
          {
            image: '/images/services/seo-case-study-franchise.webp',
            businessType: 'Multi-Location Franchise',
            location: 'Northern California',
            industry: 'Local Consumer Services',
            kpis: [
              { value: 'Page 1', label: 'Local Search Presence' },
              { value: '5 Locations', label: 'Franchise Rank Coverage' },
              { value: '100%', label: 'Duplicate Penalty Recovery' }
            ]
          }
        ][idx] || {
          image: '/images/services/seo-case-study-medical.webp',
          businessType: 'California Business',
          location: 'California, US',
          industry: 'Local Services',
          kpis: []
        };

        const sentences = story.split(/(?<=\.)\s+/);
        let challenge = '';
        let strategyExecution = '';
        let results = '';

        if (idx === 0) {
          challenge = sentences.slice(0, 2).join(' ');
          strategyExecution = sentences[2] || '';
          results = sentences[3] || '';
        } else {
          challenge = sentences[0] || '';
          strategyExecution = sentences[1] || '';
          results = sentences[2] || '';
        }

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
              <h3 className="text-[28px] md:text-[36px] lg:text-[42px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-8 tracking-tight max-w-[1000px] text-left">
                {cleanTitle}
              </h3>

              {/* 3. FEATURED IMAGE */}
              <div className="relative w-full h-[320px] md:h-[520px] lg:h-[580px] rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] mb-12 group">
                <img
                  src={details.image}
                  alt={cleanTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] brightness-[0.85] group-hover:brightness-90"
                />
                {/* Dark gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/90 via-[#080D18]/25 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080D18]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 4. STORY CONTENT */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

                {/* The Challenge Column */}
                <div className="bg-[#162035]/30 backdrop-blur-sm border border-[rgba(255,255,255,0.04)] rounded-[20px] p-8 text-left hover:border-red-500/20 transition-all duration-300 shadow-lg flex flex-col">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-[1.5px] mb-5 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    THE CHALLENGE
                  </span>
                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
                    {challenge}
                  </p>
                </div>

                {/* What GrowLimo Changed Column (Strategy & Execution) */}
                <div className="bg-[#162035]/30 backdrop-blur-sm border border-[rgba(0,198,138,0.12)] rounded-[20px] p-8 text-left hover:border-[#00C68A]/30 transition-all duration-300 shadow-lg flex flex-col">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C68A]/10 border border-[#00C68A]/20 text-[#00C68A] text-[11px] font-bold uppercase tracking-[1.5px] mb-5 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C68A] animate-pulse" />
                    THE STRATEGY & EXECUTION
                  </span>
                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#F0F4FF] font-medium">
                    {strategyExecution}
                  </p>
                </div>

                {/* The Results Column */}
                <div className="bg-[#162035]/30 backdrop-blur-sm border border-[rgba(255,255,255,0.04)] rounded-[20px] p-8 text-left hover:border-[#DD6613]/20 transition-all duration-300 shadow-lg flex flex-col">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DD6613]/10 border border-[#DD6613]/20 text-[#DD6613] text-[11px] font-bold uppercase tracking-[1.5px] mb-5 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DD6613] animate-pulse" />
                    THE RESULTS
                  </span>
                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
                    {results}
                  </p>
                </div>

              </div>

              {/* 5. KPI / ROI SECTION */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {details.kpis.map((kpi, bIdx) => (
                  <div
                    key={bIdx}
                    className="relative group bg-[#162035]/50 backdrop-blur-md border border-[rgba(0,198,138,0.15)] hover:border-[#00C68A] rounded-[20px] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,198,138,0.08)] text-left"
                  >
                    <div className="absolute -inset-px rounded-[20px] bg-gradient-to-r from-[#00C68A]/0 via-[#00C68A]/8 to-[#00C68A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="text-[24px] md:text-[28px] font-extrabold font-sora text-[#00C68A] tracking-tight mb-2.5 leading-tight">
                      {kpi.value}
                    </div>
                    <div className="text-[#8FA8C8] text-[13.5px] md:text-[14px] leading-relaxed font-sans font-medium">
                      {kpi.label}
                    </div>
                  </div>
                ))}
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
                    <span className="text-[10px] uppercase font-extrabold text-[#00C68A] tracking-[1.5px] block mb-1">BUSINESS NAME</span>
                    <span className="text-[15px] font-bold text-[#F0F4FF] font-sora block">{author}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-8 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-1">LOCATION</span>
                    <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                      {details.location}
                    </span>
                  </div>

                  <div className="flex flex-col border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.08)] pt-4 md:pt-0 md:pl-8">
                    <span className="text-[10px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-1">INDUSTRY</span>
                    <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                      {details.industry}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        );
      })}

      {/* SECTION 14: TESTIMONIALS (white bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-center mb-16">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              REVIEWS
            </span>
            <h2 className="text-[32px] md:text-[42px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
              {testimonialsSection.heading || 'What Texas Businesses Say About GrowLimo\'s PPC Services'}
            </h2>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialsSection.bullets && testimonialsSection.bullets.map((bullet, idx) => {
              const { quote, name, location } = parseTestimonial(bullet);

              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm flex flex-col justify-between text-left transition-all duration-300 hover:border-[#00C68A]/35"
                >
                  <div className="space-y-4">
                    {/* Double Quotes Icon */}
                    <div className="text-[#00C68A]/20 text-[56px] leading-[0px] font-serif select-none">“</div>
                    <p className="font-sans text-[15px] leading-[1.75] italic text-[#3D5A73] relative z-10">
                      {quote.replace(/^["'“”]/, '').replace(/["'“”]$/, '')}
                    </p>
                  </div>

                  {/* Name and Location details */}
                  <div className="mt-8 pt-4 border-t border-[#E3EEF7]">
                    <h4 className="font-sora font-bold text-[14.5px] text-[#0B1829]">{name}</h4>
                    <p className="font-sans text-[12.5px] text-[#3D5A73] mt-1 font-medium">{location}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 15: FULL-WIDTH IMAGE WITH OVERLAY */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[320px]">
          <img
            src={bannerImg}
            alt="Texas PPC Results Banner — Houston Skyline"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 max-w-[1100px] text-center">
              <h2 className="text-[28px] md:text-[44px] font-extrabold font-sora text-white leading-tight mb-2 tracking-tight">
                Multi-Platform PPC Across Every Major Texas Market
              </h2>
              <p className="text-[#00C68A] font-sans font-bold text-[15px] tracking-[2.5px] uppercase">
                GROWLIMO TEXAS PAID MEDIA PERFORMANCE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: ABOUT (white bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="max-w-[860px] mx-auto text-left">

            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              ABOUT US
            </span>
            <h2 className="text-[32px] md:text-[42px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight mb-8">
              {aboutSection.heading}
            </h2>

            <div className="space-y-6">
              {aboutSection.paragraphs && aboutSection.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[16px] leading-[1.85] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 18: PROCESS (dark bg) */}
      {processSection.steps && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

            <div className="text-center mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                WORKFLOW
              </span>
              <h2 className="text-[32px] md:text-[42px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                {processSection.title}
              </h2>
              {processSection.intro && (
                <p className="font-sans text-[16px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px] mx-auto">
                  {processSection.intro}
                </p>
              )}
            </div>

            {/* Vertical timeline layout */}
            <div className="relative max-w-[860px] mx-auto mt-12 pl-6 md:pl-0">
              {/* Timeline Center Line */}
              <div className="absolute top-0 bottom-0 left-[20px] md:left-[50%] translate-x-[-50%] w-[2px] bg-[rgba(255,255,255,0.06)] pointer-events-none" />

              <div className="space-y-12">
                {processSection.steps.map((step, idx) => {
                  const isLeft = idx % 2 === 0;

                  return (
                    <div key={idx} className="relative flex flex-col md:flex-row md:items-center">

                      {/* Timeline Node Icon/Dot */}
                      <div className="absolute left-[-6px] md:left-[50%] translate-x-[-50%] z-10 w-[42px] h-[42px] rounded-full bg-[#080D18] border-2 border-[#00C68A] flex items-center justify-center shadow-lg">
                        <span className="text-[#00C68A] font-sora font-extrabold text-[13px]">{idx + 1}</span>
                      </div>

                      {/* Content Card Side placement */}
                      <div className={`w-full md:w-[45%] text-left ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
                        <div className="bg-[#1A2438] border border-[rgba(255,255,255,0.05)] rounded-[18px] p-6 shadow-md transition-all duration-300 hover:border-[#00C68A]/25 pl-10 md:pl-6">
                          <h4 className="font-sora font-bold text-[16.5px] text-[#F0F4FF] mb-2">{step.title}</h4>
                          <p className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">{step.description}</p>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>
      )}

      {/* SECTION 19: INDUSTRIES (dark bg) */}
      {industriesSection.list && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

            <div className="text-center mb-10 max-w-[800px] mx-auto">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                GEO EXPERTISE
              </span>
              <h2 className="text-[30px] md:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
                {industriesSection.heading}
              </h2>
              {industriesSection.intro && (
                <p className="font-sans text-[15.5px] leading-[1.8] text-[#8FA8C8]">
                  {industriesSection.intro}
                </p>
              )}
            </div>

            {/* Chips Grid */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-[860px] mx-auto">
              {industriesSection.list.map((ind, idx) => (
                <div
                  key={idx}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-full px-6 py-3 shadow-sm hover:border-[#00C68A]/30 transition-all duration-200 flex items-center gap-3 cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00C68A]" />
                  <span className="text-[#F0F4FF] font-sans text-[14px] font-bold">{ind}</span>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 20: CTA (dark bg) */}
      {ctaSection.heading && (
        <section className="bg-[#080D18] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] overflow-hidden">
          <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 md:px-10 max-w-[1100px] relative z-10">
            <div className="max-w-[760px] mx-auto text-center space-y-6">

              <h2 className="text-[32px] md:text-[44px] font-extrabold font-sora text-white leading-tight tracking-tight">
                {ctaSection.heading}
              </h2>

              {ctaSection.paragraphs && ctaSection.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={`font-sans text-[16px] leading-[1.8] ${idx === 1 ? 'text-[#00C68A] font-bold text-[15px]' : 'text-[#8FA8C8]'}`}
                >
                  {para}
                </p>
              ))}

              <div className="pt-6">
                <Link
                  href="/contact/"
                  className="inline-block py-4 px-8 bg-[#DD6613] hover:bg-[#FB923C] text-white font-extrabold text-[15px] rounded-[10px] transition-colors duration-200 shadow-lg"
                >
                  {ctaButtonText}
                </Link>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 21: FAQ (dark bg) - Accordion style */}
      {faqs && faqs.length > 0 && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

            <div className="text-center mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                FAQ
              </span>
              <h2 className="text-[32px] md:text-[42px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion List */}
            <div className="max-w-[800px] mx-auto space-y-4 text-left">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;

                return (
                  <div
                    key={idx}
                    className="bg-[#1A2438] border border-[rgba(255,255,255,0.05)] rounded-[14px] overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-sora font-bold text-[15px] md:text-[16px] text-[#F0F4FF] pr-4 leading-snug">
                        {faq.question}
                      </span>
                      <span className={`w-6 h-6 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    {/* Collapsible Answer */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-[rgba(255,255,255,0.05)]' : 'max-h-0'
                        }`}
                    >
                      <div className="p-6">
                        <p className="font-sans text-[14px] leading-[1.8] text-[#8FA8C8]">
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
      )}

      {/* SECTION 22: INTERNAL LINKS (dark bg) */}
      {internalLinks && internalLinks.length > 0 && (
        <section className="bg-[#0C1220] py-[64px] relative z-10 border-t border-[rgba(255,255,255,0.03)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
            <div className="max-w-[800px] mx-auto text-left">
              <span className="text-[#00C68A] text-[10px] font-bold uppercase tracking-[2px] mb-4 block font-sans">
                RELATED DIGITAL MARKETING SERVICES
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {internalLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.to}
                    className="bg-[#1A2438] border border-[rgba(255,255,255,0.05)] rounded-[12px] p-4 text-[13.5px] font-bold text-[#F0F4FF] hover:border-[#00C68A]/45 hover:text-[#00C68A] transition-all duration-200 flex items-center justify-between shadow-sm group"
                  >
                    <span>{link.anchor}</span>
                    <span className="text-[#00C68A] transition-transform duration-200 group-hover:translate-x-1 shrink-0 ml-2">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
