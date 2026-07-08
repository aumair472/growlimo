import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionTX({ service, slug, onSelectPlan }) {
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
    ctaButtonText = 'Get Your Free Texas SEO Audit →',
    faqs = [],
    internalLinks = [],
    images = [],
    schema
  } = service;

  // Safe image pointers
  const heroImg = images[0] || '/images/services/hero-seo-texas.webp';
  const strategyImg = images[1] || '/images/services/strategy-texas.webp';
  const keywordImg = images[2] || '/images/services/texas-keyword-research.webp';
  const linkImg = images[3] || '/images/services/texas-link-building.webp';
  const bannerImg = images[4] || '/images/services/texas-results-banner.webp';

  // Robust testimonial parser splitting on the LAST em dash
  const parseTestimonial = (bullet) => {
    if (!bullet) return { quote: '', name: '', role: '', location: '' };

    const lastDashIndex = bullet.lastIndexOf('—');

    if (lastDashIndex === -1) {
      return {
        quote: bullet.replace(/^["'“”]/, '').replace(/["'“”]$/, '').trim(),
        name: '',
        role: '',
        location: ''
      };
    }

    const quote = bullet
      .substring(0, lastDashIndex)
      .trim()
      .replace(/^["'“”]/, '')
      .replace(/["'“”]$/, '')
      .trim();

    const attribution = bullet.substring(lastDashIndex + 1).trim();
    const parts = attribution.split(',');

    const name = parts[0] ? parts[0].trim() : '';
    const role = parts[1] ? parts[1].trim() : '';
    const location = parts.slice(2).join(',').trim();

    return { quote, name, role, location };
  };

  // Industry parser
  const parseIndustry = (item) => {
    const dashIndex = item.indexOf('—');
    if (dashIndex !== -1) {
      const title = item.substring(0, dashIndex).trim();
      const desc = item.substring(dashIndex + 1).trim();
      return { title, desc };
    }
    return { title: item, desc: '' };
  };

  // Dynamic trust stats parser for floating cards
  const parseTrustStat = (item) => {
    const str = item.trim();
    const regex = /^([✅⭐🌟📈📞💰⏱🏆📍🔍📊⏱]*\s*\d+(?:\.\d+)?(?:%|\+|\s*★)?|✅|No\s+Lock-In|No-Lock-In)\s*(.*)$/i;
    const match = str.match(regex);
    if (match) {
      return {
        value: match[1].trim(),
        text: match[2].trim()
      };
    }
    return {
      value: str,
      text: ''
    };
  };

  // Trust bar pills parser splitting by |
  const trustItems = heroContent[1]
    ? heroContent[1].split('|').map(s => s.trim()).filter(Boolean)
    : [];

  // Prerender check to discover how many numbered services exist
  const numberedServicesList = contentSections.filter(
    s => s.heading && /^\d+\.\s/.test(s.heading)
  );

  // Prerender check to discover how many case studies exist
  const caseStudiesList = contentSections.filter(
    s => s.heading && s.heading.startsWith("Case Study")
  );

  // Dynamic Section Renderers

  // 1. UNIQUE STRATEGY SECTION
  const renderUniqueStrategy = (section, idx) => {
    return (
      <section key={idx} className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="text-left mb-12">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              TEXAS-SPECIFIC STRATEGY
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
              {section.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 60%: Text content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>

            {/* Right 40%: Key bullets styled inside a card with trust pills */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm">
                <h3 className="font-sora font-bold text-[18px] text-[#0B1829] mb-6 text-left border-b border-[#E3EEF7] pb-3">
                  Texas Search Realities
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start text-left">
                    <div className="w-[26px] h-[26px] rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-[12px] h-[12px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-sans text-[14px] font-bold text-[#0B1829] leading-tight mb-1">
                        Regional Nuance Focus
                      </h4>
                      <p className="font-sans text-[13px] leading-relaxed text-[#3D5A73]">
                        Unique strategies built for Dallas-Fort Worth sprawl, Austin tech hub, Houston B2B energy, and San Antonio demographics.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start text-left">
                    <div className="w-[26px] h-[26px] rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-[12px] h-[12px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-sans text-[14px] font-bold text-[#0B1829] leading-tight mb-1">
                        Rapid Market Growth Optimization
                      </h4>
                      <p className="font-sans text-[13px] leading-relaxed text-[#3D5A73]">
                        Active keyword adjustments answering searches from 470,000+ new residents moving to Texas annually.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // 2. PROBLEMS/BOTTLENECKS SECTION (Stuck on Page Two)
  const renderProblemsSection = (section, idx) => {
    return (
      <section key={idx} className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="text-left mb-10">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              COMMON BOTTLENECKS
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              {section.heading}
            </h2>
            {section.paragraphs && section.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px]">
                {para}
              </p>
            ))}
          </div>

          {/* Bullets as a 2-column grid of styled cards with warning icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {section.bullets && section.bullets.map((bullet, bIdx) => {
              const colonIndex = bullet.indexOf(':');
              let title = '';
              let desc = '';
              if (colonIndex !== -1) {
                title = bullet.substring(0, colonIndex).trim();
                desc = bullet.substring(colonIndex + 1).trim();
              } else {
                title = bullet;
                desc = '';
              }

              const getIcon = (i) => {
                switch (i) {
                  case 0: return '⚡'; // Slow
                  case 1: return '📝'; // Thin content
                  case 2: return '📍'; // GBP
                  case 3: return '⚔️'; // Cannibalization
                  case 4: return '🔗'; // Link profile
                  case 5: return '🏷️'; // Schema
                  default: return '🛡️'; // E-E-A-T
                }
              };

              return (
                <div
                  key={bIdx}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-6 shadow-md transition-all duration-300 hover:border-[#00C68A]/30 hover:translate-y-[-3px] flex gap-4 items-start text-left"
                >
                  <div className="w-[38px] h-[38px] rounded-xl bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.15)] flex items-center justify-center shrink-0 text-[#00C68A] text-lg font-bold">
                    {getIcon(bIdx)}
                  </div>
                  <div>
                    <h3 className="font-sora font-bold text-[16px] text-[#F0F4FF] mb-2 leading-snug">
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
    );
  };

  // 3. SERVICES INTRO SECTION
  const renderServicesIntro = (section, idx) => {
    return (
      <section key={idx} className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 40%: Image */}
            <div className="lg:col-span-5">
              <div className="rounded-[20px] overflow-hidden shadow-xl border-4 border-white relative group">
                <img
                  src={strategyImg}
                  alt="GrowLimo SEO Strategy Planning for Texas"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right 60%: Text intro for services */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                TEXAS SEO AGENCY SERVICES
              </span>
              <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // 4. NUMBERED DETAIL SERVICE SECTIONS (Alternating white/dark)
  const renderServiceDetailSection = (section, idx) => {
    const localServiceIndex = numberedServicesList.indexOf(section);
    const isWhiteBg = localServiceIndex % 2 === 0;
    const bgClass = isWhiteBg
      ? 'bg-[#FFFFFF] border-t border-[#E3EEF7]'
      : 'bg-[#0C1220] border-t border-[rgba(255,255,255,0.04)]';
    const numBadge = `0${localServiceIndex + 1}`;

    // Strip number prefix
    const displayHeading = section.heading.replace(/^\d+\.\s*/, '');

    return (
      <div key={idx}>
        <section className={`${bgClass} py-[96px] relative z-10`}>
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
            <div className="max-w-[860px] mx-auto">
              {/* Number Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-sora font-extrabold text-[14px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-[6px]">
                  SERVICE {numBadge}
                </span>
              </div>

              {/* Heading */}
              <h2 className={`text-[24px] md:text-[30px] font-extrabold font-sora leading-tight tracking-tight mb-6 ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                {displayHeading}
              </h2>

              {/* Paragraphs */}
              {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className={`font-sans text-[15px] leading-[1.8] mb-6 ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}
                >
                  {para}
                </p>
              ))}

              {/* Bullets (green check cards) */}
              {section.bullets && section.bullets.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  {section.bullets.map((bullet, bIdx) => (
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

              {/* closingText Note */}
              {section.closingText && (
                <div className={`mt-8 p-6 rounded-[16px] border-l-4 border-[#00C68A] ${isWhiteBg ? 'bg-[#F8FAFC] border-[#E3EEF7]' : 'bg-[#1A2438]/60 border-[rgba(255,255,255,0.04)]'}`}>
                  <p className={`font-sans text-[15px] leading-[1.8] font-bold italic ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                    "{section.closingText}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* IMAGE SLOTS after service 2 and service 6 */}
        {localServiceIndex === 1 && ( // After Service 2 (Keyword Research)
          <section className="relative w-full py-16 bg-[#080D18] flex justify-center">
            <div className="container max-w-[900px] px-4">
              <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                <img
                  src={keywordImg}
                  alt="Texas Keyword Research & Strategy Dashboard"
                  className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-6 right-6 text-left">
                  <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">KEYWORD TARGETING</p>
                  <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Texas Regional Search Volume Analysis Dashboard</h4>
                </div>
              </div>
            </div>
          </section>
        )}

        {localServiceIndex === 5 && ( // After Service 6 (Link Building)
          <section className="relative w-full py-16 bg-[#080D18] flex justify-center">
            <div className="container max-w-[900px] px-4">
              <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                <img
                  src={linkImg}
                  alt="Texas Local Authority Link Building Campaign"
                  className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-6 right-6 text-left">
                  <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">LOCAL CITATIONS</p>
                  <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Premium High-DA Backlink Acquisition for Texas Clients</h4>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  };

  // 5. CASE STUDIES HEADER/INTRO
  const renderCaseStudiesIntro = (section, idx) => {
    return (
      <section key={idx} className="bg-[#0C1220] pt-[120px] pb-[60px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] text-center">
          <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
            SUCCESS STORIES
          </span>
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold font-sora text-white leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
            {section.heading}
          </h2>
          {section.paragraphs && section.paragraphs.map((p, pIdx) => (
            <p key={pIdx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] max-w-[700px] mx-auto">
              {p}
            </p>
          ))}
        </div>
      </section>
    );
  };

  // 6. CINEMATIC DETAIL CASE STUDY SECTIONS
  const renderCaseStudyCard = (section, idx) => {
    const localCsIndex = caseStudiesList.indexOf(section);
    const bgStyle = localCsIndex % 2 === 1 ? 'bg-[#0A101D]' : 'bg-[#0C1220]';
    const eyebrow = `CASE STUDY 0${localCsIndex + 1}`;
    const title = section.heading;
    const image = section.image || images[localCsIndex + 2] || `/images/services/texas-seo-case-study-${localCsIndex === 0 ? 'hvac' : localCsIndex === 1 ? 'law' : 'ecommerce'}.webp`;

    return (
      <section key={idx} className={`${bgStyle} py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]`}>
        <div className="absolute top-0 left-[10%] w-[40%] h-[40%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00C68A] text-[12px] font-extrabold uppercase tracking-[3px] font-sans drop-shadow-[0_0_15px_rgba(0,198,138,0.15)]">
              {eyebrow}
            </span>
            <div className="h-[1px] w-12 bg-[#00C68A]/30" />
          </div>

          {/* Main Title */}
          <h3 className="text-[22px] md:text-[30px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-8 tracking-tight max-w-[1000px] text-left">
            {title}
          </h3>

          {/* Grid Content: Left for Image & Metrics, Right for Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Image & Metrics */}
            <div className="lg:col-span-5 space-y-6">
              {image && (
                <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              )}

              {section.bullets && section.bullets.length > 0 && (
                <div className="bg-[#162035]/30 border border-[rgba(255,255,255,0.04)] rounded-[20px] p-6 shadow-md text-left">
                  <h4 className="font-sora font-bold text-[16px] text-[#00C68A] mb-4 border-b border-[rgba(255,255,255,0.06)] pb-2">
                    Key Metrics & Achievements
                  </h4>
                  <div className="space-y-3">
                    {section.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex gap-2.5 items-start text-[14px] leading-relaxed text-[#8FA8C8]">
                        <span className="text-[#00C68A] mt-1 shrink-0">✓</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Paragraphs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // 7. CLIENT TESTIMONIALS SECTION
  const renderTestimonials = (section, idx) => {
    return (
      <section key={idx} className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="text-center mb-16">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-[26px] md:text-[36px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
              {section.heading}
            </h2>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {section.bullets && section.bullets.map((bullet, bIdx) => {
              const { quote, name, role, location } = parseTestimonial(bullet);

              return (
                <div
                  key={bIdx}
                  className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm flex flex-col justify-between text-left transition-all duration-300 hover:border-[#00C68A]/35"
                >
                  <div className="space-y-4">
                    {/* Double Quotes Icon */}
                    <div className="text-[#00C68A]/20 text-[56px] leading-[0px] font-serif select-none">“</div>
                    <p className="font-sans text-[15px] leading-[1.75] italic text-[#3D5A73] relative z-10">
                      {quote}
                    </p>
                  </div>

                  {/* Name and Location details */}
                  <div className="mt-8 pt-4 border-t border-[#E3EEF7]">
                    <h4 className="font-sora font-bold text-[14.5px] text-[#0B1829]">{name}</h4>
                    <p className="font-sans text-[12.5px] text-[#3D5A73] mt-1 font-medium">{role}, {location}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // 8. SPECIALISTS / ABOUT TEAM SECTION
  const renderAboutSection = (section, idx) => {
    return (
      <section key={idx} className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="max-w-[860px] mx-auto text-left">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              ABOUT OUR TEAM
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight mb-8">
              {section.heading}
            </h2>

            <div className="space-y-6">
              {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="font-sans text-[15px] leading-[1.85] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // 9. CITIES SECTION (Visible by default)
  const renderCitiesSection = (section, idx) => {
    return (
      <section key={idx} className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="text-center mb-16">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              LOCALIZED GEOGRAPHIC FOCUS
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              {section.heading}
            </h2>
            {section.paragraphs && section.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px] mx-auto">
                {para}
              </p>
            ))}
          </div>

          {/* Static City Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {section.bullets && section.bullets.map((bullet, bIdx) => {
              const colonIndex = bullet.indexOf(':');
              let cityName = '';
              let cityDesc = '';
              if (colonIndex !== -1) {
                cityName = bullet.substring(0, colonIndex).trim();
                cityDesc = bullet.substring(colonIndex + 1).trim();
              } else {
                cityName = bullet;
                cityDesc = '';
              }

              return (
                <div
                  key={bIdx}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.05)] rounded-[16px] p-6 shadow-sm flex flex-col gap-3 text-left transition-all duration-300 hover:border-[#00C68A]/35"
                >
                  <h4 className="font-sora font-bold text-[16px] text-[#F0F4FF]">
                    {cityName}
                  </h4>
                  {cityDesc && (
                    <p className="font-sans text-[13.5px] leading-[1.7] text-[#8FA8C8]">
                      {cityDesc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // 10. DEFAULT FALLBACK SECTION RENDERER WITH DEV WARNINGS
  const renderDefaultSection = (section, idx) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `GrowLimo Warning: Section "${section.heading}" fell back to default rendering. Check layout mapping in ServiceContentSectionTX.jsx.`,
        section
      );
    }
    const isWhiteBg = idx % 2 === 0;
    const bgClass = isWhiteBg
      ? 'bg-[#FFFFFF] border-t border-[#E3EEF7]'
      : 'bg-[#0C1220] border-t border-[rgba(255,255,255,0.04)]';

    return (
      <section key={idx} className={`${bgClass} py-[96px] relative z-10`}>
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px] text-left">
          <div className="max-w-[860px] mx-auto">
            <h2 className={`text-[24px] md:text-[30px] font-extrabold font-sora leading-tight tracking-tight mb-6 ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
              {section.heading}
            </h2>
            {section.paragraphs && section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className={`font-sans text-[15px] leading-[1.8] mb-6 ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                {p}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {section.bullets.map((b, bIdx) => (
                  <li key={bIdx} className={`font-sans text-[14px] ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>{b}</li>
                ))}
              </ul>
            )}
            {section.closingText && (
              <p className={`font-sans text-[15px] leading-[1.8] font-bold italic mt-8 p-6 border-l-4 border-[#00C68A] ${isWhiteBg ? 'bg-[#F8FAFC]' : 'bg-[#1A2438]/60'}`}>
                "{section.closingText}"
              </p>
            )}
          </div>
        </div>
      </section>
    );
  };

  // Dynamic Routing Switcher
  const renderDynamicSection = (section, idx) => {
    if (!section || !section.heading) return null;

    const heading = section.heading.trim();

    // Why SEO in Texas is Unique
    if (heading.includes("Requires a Texas-Specific Strategy")) {
      return renderUniqueStrategy(section, idx);
    }

    // Why Most Texas Businesses Are Stuck on Page Two
    if (heading.includes("Stuck on Page Two")) {
      return renderProblemsSection(section, idx);
    }

    // Services Main Section Intro
    if (heading === "Our SEO Services for Texas Businesses") {
      return renderServicesIntro(section, idx);
    }

    // Numbered SEO services 1-8
    if (/^\d+\.\s/.test(heading)) {
      return renderServiceDetailSection(section, idx);
    }

    // Case Studies Heading Intro
    if (heading.includes("Case Studies — Real Results")) {
      return renderCaseStudiesIntro(section, idx);
    }

    // Individual Cinematic Case Study Card
    if (heading.startsWith("Case Study")) {
      return renderCaseStudyCard(section, idx);
    }

    // Client Testimonials
    if (heading.includes("What Texas Businesses Say")) {
      return renderTestimonials(section, idx);
    }

    // About Team Bio
    if (heading.includes("Built by Specialists With Proven")) {
      return renderAboutSection(section, idx);
    }

    // Cities Geographic Accordion
    if (heading.includes("Across All Major Texas Cities")) {
      return renderCitiesSection(section, idx);
    }

    // Dev Warning & Fallback
    return renderDefaultSection(section, idx);
  };

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
        {/* Glowing background highlights */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1100px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side: Headline & Trust Info */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                TEXAS SEO SPECIALISTS
              </span>

              <h1 className="text-[30px] md:text-[36px] lg:text-[40px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              {/* Subheadline (HTML first paragraph) strictly on hero */}
              <p className="font-sans text-[15px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[620px]">
                {subheadline}
              </p>

            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#1A2438]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-5 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/5 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-bold text-[15px] text-[#F0F4FF] mb-3 text-left border-b border-[rgba(255,255,255,0.06)] pb-2">
                  Get Your Free Texas SEO Audit
                </h3>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Get My Free Texas SEO Audit →"
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
            alt="GrowLimo Texas SEO"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          {/* Deep dark gradient overlays */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080D18] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFFFF] to-transparent" />

          {/* Dynamic Floating Stat Cards on Overlay */}
          {trustItems.length > 0 && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 max-w-[1100px]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {trustItems.map((item, idx) => {
                    const { value, text } = parseTrustStat(item);
                    return (
                      <div
                        key={idx}
                        className="bg-[#0C1220]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[18px] p-5 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#00C68A]/40"
                      >
                        {value && (
                          <div className="text-[20px] md:text-[22px] font-extrabold font-sora text-[#00C68A] mb-1.5 leading-none">
                            {value}
                          </div>
                        )}
                        {text && (
                          <p className="text-[#F0F4FF] text-[12px] leading-snug font-sans font-semibold">
                            {text}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* NEW: HERO CONTENT INTRO BLOCK (rendered after hero/trust image area) */}
      {heroContent[0] && (
        <section className="bg-[#080D18] py-16 relative overflow-hidden border-b border-[rgba(255,255,255,0.04)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[900px] text-center relative z-10">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-4 block font-sans">
              DALLAS • HOUSTON • AUSTIN • SAN ANTONIO
            </span>
            <p className="font-sans text-[18px] md:text-[20px] leading-[1.8] text-[#F0F4FF] font-medium">
              {heroContent[0]}
            </p>
          </div>
        </section>
      )}

      {/* DYNAMIC CONTENT SECTIONS LOOP (100% index-free, dynamic router) */}
      {contentSections.map((section, idx) => renderDynamicSection(section, idx))}

      {/* SECTION 19: PROCESS (dark bg) - Rendered in correct order immediately after contentSections loop */}
      {processSection.steps && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

            <div className="text-center mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                WORKFLOW PIPELINE
              </span>
              <h2 className="text-[26px] md:text-[36px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                {processSection.title}
              </h2>
              {processSection.intro && (
                <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px] mx-auto">
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

      {/* TOP-LEVEL INDUSTRIES GRID (only industry verticals, cities removed) */}
      {industriesSection.list && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

            <div className="text-center mb-10 max-w-[800px] mx-auto">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                INDUSTRY SPECIFIC ARCHITECTURE
              </span>
              <h2 className="text-[24px] md:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
                {industriesSection.heading}
              </h2>
              {industriesSection.intro && (
                <p className="font-sans text-[15.5px] leading-[1.8] text-[#8FA8C8]">
                  {industriesSection.intro}
                </p>
              )}
            </div>

            {/* Grid of Industry Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-[1000px] mx-auto text-left">
              {industriesSection.list.map((ind, idx) => {
                const { title, desc } = parseIndustry(ind);

                return (
                  <div
                    key={idx}
                    className="bg-[#1A2438] border border-[rgba(255,255,255,0.05)] rounded-[18px] p-6 shadow-sm hover:border-[#00C68A]/30 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00C68A]" />
                        <h4 className="text-[#F0F4FF] font-sora text-[15px] font-bold uppercase tracking-wider">{title}</h4>
                      </div>
                      <p className="text-[#8FA8C8] font-sans text-[13.5px] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 21: CTA (dark bg) */}
      {ctaSection.heading && (
        <section className="bg-[#080D18] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] overflow-hidden">
          <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 md:px-10 max-w-[1100px] relative z-10">
            <div className="max-w-[760px] mx-auto text-center space-y-6">

              <h2 className="text-[26px] md:text-[36px] font-extrabold font-sora text-white leading-tight tracking-tight">
                {ctaSection.heading}
              </h2>

              {ctaSection.paragraphs && ctaSection.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={`font-sans text-[15px] leading-[1.8] ${idx === 2 ? 'text-[#00C68A] font-bold text-[15px]' : 'text-[#8FA8C8]'}`}
                >
                  {para}
                </p>
              ))}

              <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/contact/"
                  className="inline-block py-4 px-8 bg-[#DD6613] hover:bg-[#FB923C] text-white font-extrabold text-[15px] rounded-[10px] transition-all duration-200 shadow-lg shrink-0 text-center w-full sm:w-auto"
                >
                  {ctaButtonText}
                </Link>
                <a
                  href="tel:+16673474729"
                  className="inline-flex justify-center items-center gap-2 py-4 px-8 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.08)] text-white font-extrabold text-[15px] rounded-[10px] transition-all duration-200 shrink-0 text-center w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 text-[#00C68A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.79.6 1 1 0 011 1v3.9a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.9a1 1 0 011 1 11.72 11.72 0 00.6 3.79 1 1 0 01-.27 1.11z" />
                  </svg>
                  Call GrowLimo
                </a>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 22: FAQ (dark bg) - Accordion style */}
      {faqs && faqs.length > 0 && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

            <div className="text-center mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                TEXAS MARKET FREQUENT QUESTIONS
              </span>
              <h2 className="text-[26px] md:text-[36px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
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
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-[rgba(255,255,255,0.05)]' : 'max-h-0'}`}
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

      {/* SECTION 23: INTERNAL LINKS (dark bg) */}
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
