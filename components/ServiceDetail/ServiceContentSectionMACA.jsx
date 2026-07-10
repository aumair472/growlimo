import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionMACA({ service, slug, onSelectPlan }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [expandedCities, setExpandedCities] = useState({});
  const [expandedIndustries, setExpandedIndustries] = useState({});

  if (!service) return null;

  const {
    metaTitle,
    metaDescription,
    h1,
    heroContent = [],
    contentSections = [],
    processSection = {},
    ctaSection = {},
    ctaButtonText = 'Get Your Free Meta Ads Audit →',
    faqs = [],
    internalLinks = [],
    images = [],
    schema
  } = service;

  const heroImg = images[0] || '/images/services/hero-meta-ads-agency-california.webp';
  const strategyImg = images[1] || '/images/services/meta-ads-agency-california-strategy.webp';
  const results1Img = images[2] || '/images/services/meta-ads-agency-california-results-1.webp';
  const results2Img = images[3] || '/images/services/meta-ads-agency-california-results-2.webp';
  const bannerImg = images[4] || '/images/services/meta-ads-agency-california-banner.webp';

  const toggleCity = (idx) => setExpandedCities(prev => ({ ...prev, [idx]: !prev[idx] }));
  const toggleIndustry = (idx) => setExpandedIndustries(prev => ({ ...prev, [idx]: !prev[idx] }));

  // ── Parse helpers ──────────────────────────────────────────
  const parseBulletMetric = (bullet) => {
    const colonIdx = bullet.indexOf(':');
    if (colonIdx !== -1) {
      return { label: bullet.substring(0, colonIdx).trim(), value: bullet.substring(colonIdx + 1).trim() };
    }
    return { label: '', value: bullet };
  };

  const parseTestimonial = (bullet) => {
    const lastDash = bullet.lastIndexOf('—');
    if (lastDash !== -1) {
      const quote = bullet.substring(0, lastDash).trim();
      const rest = bullet.substring(lastDash + 1).trim();
      const comma = rest.indexOf(',');
      if (comma !== -1) {
        return { quote, name: rest.substring(0, comma).trim(), location: rest.substring(comma + 1).trim() };
      }
      return { quote, name: rest, location: '' };
    }
    return { quote: bullet, name: '', location: '' };
  };

  const parseCaseStudy = (sec) => {
    if (!sec) return null;
    const heading = sec.heading || '';
    const parts = heading.split(/—|–/);
    const client = (parts[0] || '').replace(/^Case Study \d+:\s*/i, '').trim();
    const stat = (parts[1] || '').trim();
    return { client, stat, paragraphs: sec.paragraphs || [], bullets: sec.bullets || [], image: sec.image || '' };
  };

  // ── Section index map ───────────────────────────────────────
  // [0]  Landscape (The State of Meta Ads)
  // [1]  vs. / What we deliver
  // [2]  Services intro
  // [3]  Full-Funnel Strategy
  // [4]  Creative Production
  // [5]  Audience Architecture
  // [6]  CAPI / Technical
  // [7]  Advantage+
  // [8]  Lead Gen
  // [9]  Retargeting & Dynamic
  // [10] Landing Page Optimization
  // [11] Case Studies intro
  // [12] Case Study 1
  // [13] Case Study 2
  // [14] Case Study 3
  // [15] Industries
  // [16] Cities
  // [17] Author / Partner
  // [18] Testimonials

  const landscapeSec = contentSections[0] || {};
  const vsSec = contentSections[1] || {};
  const servicesIntroSec = contentSections[2] || {};
  const numberedServices = contentSections.slice(3, 11); // indices 3-10 = 8 services
  const caseIntroSec = contentSections[11] || {};
  const caseStudy1 = parseCaseStudy(contentSections[12]);
  const caseStudy2 = parseCaseStudy(contentSections[13]);
  const caseStudy3 = parseCaseStudy(contentSections[14]);
  const caseStudies = [caseStudy1, caseStudy2, caseStudy3].filter(Boolean);
  const industriesSec = contentSections[15] || {};
  const citiesSec = contentSections[16] || {};
  const authorSec = contentSections[17] || {};
  const testimonialsSec = contentSections[18] || {};

  // Meta-brand accent: Facebook/Instagram blue-to-purple gradient
  const metaAccent = '#0081FB'; // Meta blue
  const metaSecond = '#9B5BF5'; // Instagram purple

  return (
    <div className="bg-[#080D18] font-sans selection:bg-[#0081FB]/30 selection:text-white overflow-x-hidden text-[#8FA8C8]">
      <SEO
        title={metaTitle}
        description={metaDescription}
        url={`https://growlimo.com/${slug}/`}
        disableSuffix={true}
        schema={schema}
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 1 · HERO
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#080D18] text-white pt-[100px] pb-[80px] relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,129,251,0.05)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full bg-[rgba(155,91,245,0.04)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Certification badge */}
              <span className="bg-[rgba(0,129,251,0.08)] border border-[rgba(0,129,251,0.22)] text-[#4DA6FF] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex items-center gap-2 font-sans leading-none">
                <span className="w-2 h-2 rounded-full bg-[#0081FB] animate-pulse" />
                META BLUEPRINT–CERTIFIED AGENCY · CALIFORNIA
              </span>

              <h1 className="text-[30px] md:text-[36px] lg:text-[40px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[15px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[620px]">
                {heroContent[0]}
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3 mb-4 w-full">
                {[
                  { value: '5.4x', label: 'Average ROAS' },
                  { value: '$800K+', label: 'Meta Spend Managed' },
                  { value: 'Meta BP', label: 'Blueprint Certified' }
                ].map((pill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[rgba(26,36,56,0.5)] border border-[rgba(255,255,255,0.05)] rounded-[12px] px-5 py-3 shadow-md hover:border-[#0081FB]/35 transition-all duration-200"
                  >
                    <span className="text-[#4DA6FF] font-sora font-extrabold text-[16px]">{pill.value}</span>
                    <span className="text-[#8FA8C8] font-sans text-[13px] font-medium border-l border-[rgba(255,255,255,0.1)] pl-3">{pill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#1A2438]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-3 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#0081FB]/5 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-bold text-[14px] text-[#F0F4FF] mb-2 text-left border-b border-[rgba(255,255,255,0.06)] pb-1">
                  Get Your Free Meta Ads Audit
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

      {/* ══════════════════════════════════════════════════════
          SECTION 2 · HERO IMAGE + STAT CARDS
      ══════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[480px]">
          <img
            src={heroImg}
            alt="GrowLimo Meta Ads Agency California"
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D18] via-transparent to-[#FFFFFF]" />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 max-w-[1200px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { value: '5.4x', text: 'Average Client ROAS Across All Campaigns' },
                  { value: '$800K+', text: 'Total Meta Ad Spend Managed' },
                  { value: '90 days', text: 'Typical Full-Funnel Ramp to Peak ROAS' }
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0C1220]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[18px] p-7 shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#0081FB]/40"
                  >
                    <div className="text-[36px] md:text-[42px] font-extrabold font-sora text-[#4DA6FF] mb-2 leading-none">
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

      {/* ══════════════════════════════════════════════════════
          SECTION 3 · LANDSCAPE — 2026 STATE OF META ADS (White)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left mb-12">
            <span className="text-[#0081FB] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              THE 2026 PLATFORM REALITY
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#0081FB] pl-4">
              {landscapeSec.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left: Paragraphs */}
            <div className="lg:col-span-7 space-y-5 text-left">

              <p className="font-sans border-l-4 border-[#0081FB] pl-2 text-[17px] leading-[1.8] text-[#1A2438] font-semibold">
                {heroContent[1]}
              </p>


              {landscapeSec.paragraphs && landscapeSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>

            {/* Right: Three platform shifts */}
            <div className="lg:col-span-5 space-y-4">
              {landscapeSec.bullets && landscapeSec.bullets.map((bullet, idx) => {
                const dashIdx = bullet.indexOf('—');
                const title = dashIdx !== -1 ? bullet.substring(0, dashIdx).trim() : bullet;
                const desc = dashIdx !== -1 ? bullet.substring(dashIdx + 1).trim() : '';
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[16px] p-5 text-left hover:border-[#0081FB]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-[rgba(0,129,251,0.10)] border border-[rgba(0,129,251,0.20)] flex items-center justify-center shrink-0 text-[#0081FB] font-sora font-extrabold text-[12px]">
                        {idx + 1}
                      </div>
                      <h3 className="font-sora font-bold text-[15px] text-[#0B1829]">{title}</h3>
                    </div>
                    {desc && <p className="font-sans text-[13.5px] leading-relaxed text-[#3D5A73] pl-10">{desc}</p>}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 · VS. COMPARISON (Dark)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-center mb-14">
            <span className="text-[#4DA6FF] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              THE AGENCY GAP
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#F0F4FF] tracking-tight max-w-[900px] mx-auto">
              {vsSec.heading}
            </h2>
            {vsSec.paragraphs && vsSec.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px] mx-auto">
                {para}
              </p>
            ))}
          </div>

          {/* Two-column vs. table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {/* Left: What most agencies deliver */}
            <div className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[20px] p-8 text-left">
              <div className="flex items-center gap-3 mb-6 border-b border-[rgba(255,255,255,0.06)] pb-5">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-sora font-bold text-[15px] text-[#F0F4FF]">What Most CA Agencies Deliver</h3>
              </div>
              <div className="space-y-3.5">
                {[
                  'A single Conversions campaign targeting a broad interest-based audience',
                  '2–3 static image ads that run unchanged for months',
                  'Browser-only pixel tracking with no Conversions API',
                  'No remarketing campaigns for warm audiences',
                  'Monthly reports showing reach, impressions, link clicks — but no ROAS',
                  'Account "optimizations" that amount to bid adjustments on stale campaigns',
                  'No connection between Meta performance data and landing page conversion rates'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: What GrowLimo delivers */}
            <div className="bg-[#1A2438] border border-[rgba(0,129,251,0.20)] rounded-[20px] p-8 text-left relative">
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#0081FB]/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 mb-6 border-b border-[rgba(0,129,251,0.12)] pb-5 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-[rgba(0,129,251,0.12)] border border-[rgba(0,129,251,0.25)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#4DA6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-sora font-bold text-[15px] text-[#F0F4FF]">What GrowLimo Delivers</h3>
              </div>
              <div className="space-y-3.5 relative z-10">
                {vsSec.bullets && vsSec.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-[rgba(0,129,251,0.12)] border border-[rgba(0,129,251,0.25)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-[#4DA6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {vsSec.closingText && (
            <div className="mt-10 max-w-[800px] mx-auto p-6 rounded-[16px] border-l-4 border-[#0081FB] bg-[#1A2438]/60 text-left">
              <p className="font-sans text-[15px] leading-[1.8] font-bold italic text-[#F0F4FF]">
                "{vsSec.closingText}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 · SERVICES INTRO (White)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">
              <div className="rounded-[20px] overflow-hidden shadow-xl border-4 border-white relative group">
                <img
                  src={strategyImg}
                  alt="GrowLimo Meta Ads Strategy California"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="lg:col-span-7 text-left space-y-5">
              <span className="text-[#0081FB] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                FULL-STACK META ADS SYSTEM
              </span>
              <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#0081FB] pl-4">
                {servicesIntroSec.heading}
              </h2>
              {servicesIntroSec.paragraphs && servicesIntroSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}

              {/* Platform icons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {['Facebook', 'Instagram', 'Messenger', 'Audience Network', 'Reels', 'Stories'].map((pl, idx) => (
                  <span
                    key={idx}
                    className="bg-[rgba(0,129,251,0.08)] border border-[rgba(0,129,251,0.18)] text-[#0081FB] text-[12px] font-bold px-4 py-2 rounded-full font-sans"
                  >
                    {pl}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTIONS 6–13 · INDIVIDUAL SERVICES (Alternating)
      ══════════════════════════════════════════════════════ */}
      {numberedServices.map((serviceSec, sIdx) => {
        const isWhiteBg = sIdx % 2 === 0;
        const bgClass = isWhiteBg
          ? 'bg-[#FFFFFF] border-t border-[#E3EEF7]'
          : 'bg-[#0C1220] border-t border-[rgba(255,255,255,0.04)]';
        const numBadge = `0${sIdx + 1}`;

        return (
          <div key={sIdx}>
            <section className={`${bgClass} py-[96px] relative z-10 text-left`}>
              <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                <div className="max-w-[860px] mx-auto">

                  {/* Number badge + eyebrow */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[rgba(0,129,251,0.08)] border border-[rgba(0,129,251,0.20)] text-[#4DA6FF] flex items-center justify-center font-sora font-extrabold text-[14px]">
                      {numBadge}
                    </span>
                    <span className="text-[#4DA6FF] text-[11px] font-bold uppercase tracking-[2.5px] font-sans">
                      META ADS SERVICE
                    </span>
                  </div>

                  <h2 className={`text-[22px] md:text-[28px] font-extrabold font-sora leading-[1.15] mb-6 tracking-tight border-l-4 border-[#0081FB] pl-4 ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                    {serviceSec.heading}
                  </h2>

                  {serviceSec.paragraphs && serviceSec.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className={`font-sans text-[15px] leading-[1.8] mb-5 ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                      {para}
                    </p>
                  ))}

                  {serviceSec.bullets && serviceSec.bullets.length > 0 && (
                    <div className="space-y-3.5 my-8">
                      {serviceSec.bullets.map((bullet, bIdx) => {
                        const colonIdx = bullet.indexOf(':');
                        const bold = colonIdx !== -1 ? bullet.substring(0, colonIdx).trim() : '';
                        const rest = colonIdx !== -1 ? bullet.substring(colonIdx + 1).trim() : bullet;
                        return (
                          <div key={bIdx} className="flex gap-[14px] items-start">
                            <div className="w-[28px] h-[28px] rounded-full bg-[rgba(0,129,251,0.10)] border border-[rgba(0,129,251,0.22)] flex items-center justify-center shrink-0 mt-0.5">
                              <svg className="w-[13px] h-[13px] text-[#4DA6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className={`font-sans text-[15px] leading-[1.7] ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                              {bold && <strong className={isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}>{bold}:</strong>} {rest}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {serviceSec.closingText && (
                    <div className={`mt-8 p-6 rounded-[16px] border-l-4 border-[#0081FB] text-left ${isWhiteBg ? 'bg-[#F0F7FF]' : 'bg-[#1A2438]/60'}`}>
                      <p className={`font-sans text-[15.5px] leading-[1.8] font-semibold italic ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                        "{serviceSec.closingText}"
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </section>

            {/* Dashboard image after service 2 (Creative Production) */}
            {sIdx === 1 && results1Img && (
              <section className="relative w-full py-14 bg-[#080D18] flex justify-center border-t border-[rgba(255,255,255,0.04)]">
                <div className="container max-w-[900px] px-4">
                  <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                    <img
                      src={results1Img}
                      alt="Meta Ads Creative Performance Dashboard California"
                      className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-6 right-6 text-left">
                      <p className="text-[12px] text-[#4DA6FF] uppercase font-bold tracking-[2px] mb-1">CREATIVE PERFORMANCE</p>
                      <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Full-Funnel Creative A/B Testing Results</h4>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Dashboard image after service 5 (CAPI) */}
            {sIdx === 4 && results2Img && (
              <section className="relative w-full py-14 bg-[#080D18] flex justify-center border-t border-[rgba(255,255,255,0.04)]">
                <div className="container max-w-[900px] px-4">
                  <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                    <img
                      src={results2Img}
                      alt="CAPI Tracking & ROAS Dashboard California"
                      className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-6 right-6 text-left">
                      <p className="text-[12px] text-[#4DA6FF] uppercase font-bold tracking-[2px] mb-1">CAPI & ROAS</p>
                      <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Conversions API Implementation & ROAS Growth</h4>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        );
      })}

      {/* ══════════════════════════════════════════════════════
          CASE STUDIES HEADER
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0C1220] pt-[120px] pb-[60px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] text-center">
          <span className="bg-[rgba(0,129,251,0.08)] border border-[rgba(0,129,251,0.22)] text-[#4DA6FF] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
            VERIFIED CLIENT RESULTS
          </span>
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold font-sora text-white leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
            {caseIntroSec.heading}
          </h2>
          {caseIntroSec.paragraphs && caseIntroSec.paragraphs.map((para, idx) => (
            <p key={idx} className="font-sans text-[15px] md:text-[18px] leading-[1.8] text-[#8FA8C8] max-w-[800px] mx-auto">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INDIVIDUAL CASE STUDIES
      ══════════════════════════════════════════════════════ */}
      {caseStudies.map((cs, idx) => {
        const cleanTitle = `${cs.client} — ${cs.stat}`;
        const isAlternate = idx % 2 === 1;
        const bgClass = isAlternate ? 'bg-[#0A101D]' : 'bg-[#0C1220]';
        const locationLabel = idx === 0 ? 'Los Angeles, CA' : idx === 1 ? 'San Diego, CA' : 'San Francisco Bay Area, CA';
        const sectorLabel = idx === 0 ? 'DTC E-Commerce' : idx === 1 ? 'Healthcare / Dental' : 'B2B SaaS';

        return (
          <section key={idx} className={`${bgClass} py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]`}>
            <div className="absolute top-0 left-[10%] w-[40%] h-[40%] rounded-full bg-[rgba(0,129,251,0.02)] blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
              {/* Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#4DA6FF] text-[12px] font-extrabold uppercase tracking-[3px] font-sans">
                  CASE STUDY 0{idx + 1}
                </span>
                <div className="h-[1px] w-12 bg-[#0081FB]/30" />
              </div>

              <h3 className="text-[22px] md:text-[30px] lg:text-[40px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-8 tracking-tight max-w-[1000px] text-left">
                {cleanTitle}
              </h3>

              {/* Featured image */}
              <div className="relative w-full h-[280px] md:h-[480px] lg:h-[540px] rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] mb-12 group">
                <img
                  src={cs.image || `/images/services/meta-ads-agency-california-case-study-${idx + 1}.webp`}
                  alt={cleanTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] brightness-[0.80]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/90 via-[#080D18]/20 to-transparent opacity-90" />
              </div>

              {/* Story columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-[#162035]/30 border border-[rgba(255,255,255,0.04)] rounded-[20px] p-8 text-left hover:border-red-500/20 transition-all duration-300">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-[1.5px] mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    THE SITUATION
                  </span>
                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
                    {cs.paragraphs[0]}
                  </p>
                </div>

                <div className="bg-[#162035]/30 border border-[rgba(0,129,251,0.12)] rounded-[20px] p-8 text-left hover:border-[#0081FB]/30 transition-all duration-300">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(0,129,251,0.10)] border border-[rgba(0,129,251,0.22)] text-[#4DA6FF] text-[11px] font-bold uppercase tracking-[1.5px] mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0081FB] animate-pulse" />
                    WHAT GROWLIMO BUILT
                  </span>
                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#F0F4FF] font-medium">
                    {cs.paragraphs[1]}
                  </p>
                </div>
              </div>

              {/* KPI grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {cs.bullets && cs.bullets.map((bullet, bIdx) => {
                  const { label, value } = parseBulletMetric(bullet);
                  return (
                    <div
                      key={bIdx}
                      className="relative group bg-[#162035]/50 border border-[rgba(0,129,251,0.15)] hover:border-[#0081FB] rounded-[20px] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 text-left"
                    >
                      <div className="text-[20px] sm:text-[22px] font-extrabold font-sora text-[#4DA6FF] tracking-tight mb-2 leading-tight">
                        {value}
                      </div>
                      <div className="text-[#8FA8C8] text-[13.5px] leading-relaxed font-sans font-medium">
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Practice info */}
              <div className="bg-[#162035]/20 border border-[rgba(255,255,255,0.06)] rounded-[20px] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,129,251,0.10)] border border-[rgba(0,129,251,0.22)] flex items-center justify-center text-[#4DA6FF] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-[#4DA6FF] tracking-[1.5px] block mb-1">CLIENT TYPE</span>
                    <span className="text-[15px] font-bold text-[#F0F4FF] font-sora">{cs.client}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-8 md:gap-12">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-1">LOCATION</span>
                    <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">{locationLabel}</span>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.08)] pt-4 md:pt-0 md:pl-8">
                    <span className="text-[10px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-1">SECTOR</span>
                    <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">{sectorLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ══════════════════════════════════════════════════════
          INDUSTRIES GRID (White)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="text-left mb-12">
            <span className="text-[#0081FB] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              VERTICAL EXPERTISE
            </span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#0081FB] pl-4">
              {industriesSec.heading}
            </h2>
            {industriesSec.paragraphs && industriesSec.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73] mt-4 max-w-[800px]">
                {para}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {industriesSec.bullets && industriesSec.bullets.map((bullet, idx) => {
              const colonIdx = bullet.indexOf(':');
              const indTitle = colonIdx !== -1 ? bullet.substring(0, colonIdx).trim() : bullet;
              const indDesc = colonIdx !== -1 ? bullet.substring(colonIdx + 1).trim() : '';
              const isExp = expandedIndustries[idx];

              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[18px] p-6 text-left flex flex-col hover:border-[#0081FB]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[rgba(0,129,251,0.10)] border border-[rgba(0,129,251,0.18)] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#0081FB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="font-sora font-bold text-[14px] text-[#0B1829] leading-tight">{indTitle}</h3>
                  </div>
                  <p className={`font-sans text-[13px] leading-relaxed text-[#3D5A73] flex-1 transition-all ${isExp ? '' : 'line-clamp-3'}`}>
                    {indDesc}
                  </p>
                  {indDesc && (
                    <button
                      onClick={() => toggleIndustry(idx)}
                      className="text-[#0081FB] hover:text-[#0069D9] font-bold text-[11px] uppercase tracking-[1.5px] flex items-center gap-1 mt-4 pt-3 border-t border-[#E3EEF7] cursor-pointer transition-colors"
                    >
                      {isExp ? 'Less' : 'More'}
                      <svg className={`w-3 h-3 transition-transform ${isExp ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CITIES (Dark)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5 space-y-5">
              <span className="text-[#4DA6FF] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                REGIONAL MARKET EXPERTISE
              </span>
              <h2 className="text-[26px] md:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                {citiesSec.heading}
              </h2>
              {citiesSec.paragraphs && citiesSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                  {para}
                </p>
              ))}
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {citiesSec.bullets && citiesSec.bullets.map((bullet, idx) => {
                  const colonIdx = bullet.indexOf(':');
                  const cityTitle = colonIdx !== -1 ? bullet.substring(0, colonIdx).trim() : bullet;
                  const cityDesc = colonIdx !== -1 ? bullet.substring(colonIdx + 1).trim() : '';
                  const isExpanded = expandedCities[idx];

                  return (
                    <div
                      key={idx}
                      className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden transition-all duration-300 hover:border-[#0081FB]/25"
                    >
                      <button
                        onClick={() => toggleCity(idx)}
                        className="w-full flex justify-between items-center px-6 py-4 cursor-pointer"
                      >
                        <span className="font-sora font-extrabold text-[15px] text-[#F0F4FF] text-left">{cityTitle}</span>
                        <svg className={`w-4 h-4 text-[#4DA6FF] shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8] px-6 pb-5 border-t border-[rgba(255,255,255,0.04)] pt-3">
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

      {/* ══════════════════════════════════════════════════════
          AUTHOR / EEAT SECTION (White)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="max-w-[860px] mx-auto">
            <span className="text-[#0081FB] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              OUR CREDENTIALS
            </span>
            <h2 className="text-[26px] md:text-[32px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight border-l-4 border-[#0081FB] pl-4 mb-8">
              {authorSec.heading}
            </h2>

            {/* Certification badge */}
            <div className="flex items-center gap-5 mb-8 bg-[#F0F7FF] border border-[rgba(0,129,251,0.18)] rounded-[16px] p-5">
              <div className="w-14 h-14 rounded-xl bg-[rgba(0,129,251,0.10)] border border-[rgba(0,129,251,0.20)] flex items-center justify-center text-[#0081FB] shrink-0 font-sora font-extrabold text-[20px]">
                BP
              </div>
              <div>
                <p className="font-sora font-bold text-[15px] text-[#0B1829]">Meta Blueprint Certified Media Buying Professional</p>
                <p className="font-sans text-[13px] text-[#3D5A73] mt-0.5">GrowLimo's lead strategist holds Meta's highest advertising certification — applied to every California client account.</p>
              </div>
            </div>

            {authorSec.paragraphs && authorSec.paragraphs.map((para, idx) => (
              <p key={idx} className={`font-sans text-[15px] leading-[1.8] mb-5 ${idx === authorSec.paragraphs.length - 1 ? 'italic text-[#5A7898] text-[14px]' : 'text-[#3D5A73]'}`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FULL-WIDTH BANNER
      ══════════════════════════════════════════════════════ */}
      {bannerImg && (
        <section className="relative w-full overflow-hidden">
          <div className="relative w-full h-[300px]">
            <img
              src={bannerImg}
              alt="Meta Ads Agency California Results"
              className="w-full h-full object-cover brightness-[0.28]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080D18]/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 max-w-[1200px] text-center">
                <h2 className="text-[22px] md:text-[34px] font-extrabold font-sora text-white leading-tight mb-2 tracking-tight">
                  Average 5.4x ROAS Across All California Meta Campaigns
                </h2>
                <p className="text-[#4DA6FF] font-sans font-bold text-[14px] tracking-[2.5px] uppercase">
                  META BLUEPRINT CERTIFIED · FULL CREATIVE INCLUDED · NO LOCK-IN
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS (White)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-[#0081FB] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              CLIENT TESTIMONIALS
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialsSec.bullets && testimonialsSec.bullets.map((bullet, idx) => {
              const { quote, name, location } = parseTestimonial(bullet);
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm flex flex-col text-left hover:border-[#0081FB]/30 transition-all duration-300"
                >
                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, sIdx) => (
                      <svg key={sIdx} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-[#0081FB]/15 text-[52px] leading-[0px] font-serif select-none mb-3">"</div>
                  <p className="font-sans text-[15px] leading-[1.8] italic text-[#3D5A73] border-l-4 border-[#0081FB] pl-4 py-1 flex-1">
                    {quote.replace(/^[""""]/, '').replace(/[""""]$/, '')}
                  </p>
                  <div className="mt-8 pt-4 border-t border-[#E3EEF7]">
                    <h4 className="font-sora font-bold text-[14px] text-[#0B1829]">{name}</h4>
                    <p className="font-sans text-[12.5px] text-[#3D5A73] mt-1 font-medium">{location}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROCESS STEPPER (Dark)
      ══════════════════════════════════════════════════════ */}
      {processSection && processSection.steps && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="text-center mb-16">
              <span className="text-[#4DA6FF] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                HOW WE WORK
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

            <div className="relative border-l border-[rgba(255,255,255,0.08)] ml-4 md:ml-10 space-y-12">
              {processSection.steps.map((step, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12 group text-left">
                  <div className="absolute left-[-15px] top-1.5 w-7 h-7 rounded-full bg-[#0C1220] border-2 border-[#0081FB] flex items-center justify-center z-20 group-hover:bg-[#0081FB] transition-all duration-300">
                    <span className="text-white text-[10px] font-extrabold font-sora">{idx + 1}</span>
                  </div>
                  <h3 className="font-sora font-extrabold text-[17px] md:text-[19px] text-[#F0F4FF] mb-3 leading-tight">
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

      {/* ══════════════════════════════════════════════════════
          CTA GRADIENT SECTION
      ══════════════════════════════════════════════════════ */}
      {ctaSection && (
        <section className="bg-gradient-to-br from-[#050C1A] via-[#0A1230] to-[#0D1635] py-[100px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center overflow-hidden">
          <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-[rgba(0,129,251,0.04)] blur-[80px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-10 max-w-[900px] relative z-10">
            <h2 className="text-[28px] md:text-[36px] font-extrabold font-sora text-white leading-tight mb-6 tracking-tight">
              {ctaSection.heading}
            </h2>
            {ctaSection.paragraphs && ctaSection.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] md:text-[17px] leading-[1.8] text-[#8FA8C8] mb-6 max-w-[700px] mx-auto">
                {para}
              </p>
            ))}
            <Link
              href="/contact/"
              className="inline-block bg-[#0081FB] hover:bg-[#0069D9] text-white font-sora font-extrabold text-[15px] tracking-[1.5px] uppercase rounded-[12px] py-4 px-9 shadow-lg hover:shadow-[#0081FB]/25 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer mt-2"
            >
              {ctaButtonText}
            </Link>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          FAQ ACCORDION (White)
      ══════════════════════════════════════════════════════ */}
      {faqs && faqs.length > 0 && (
        <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[860px]">
            <div className="text-center mb-16">
              <span className="text-[#0081FB] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                COMMON QUESTIONS
              </span>
              <h2 className="text-[26px] md:text-[32px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
                Frequently Asked Questions — Meta Ads Agency California
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#E3EEF7] rounded-[18px] bg-[#F8FAFC] overflow-hidden hover:border-[#0081FB]/30 transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full py-5 px-6 flex justify-between items-center text-left font-sora font-bold text-[15.5px] text-[#0B1829] hover:text-[#0081FB] transition-colors cursor-pointer focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <div className={`w-8 h-8 rounded-xl bg-white border border-[#E3EEF7] flex items-center justify-center text-[#3D5A73] transition-all duration-200 shrink-0 ml-4 ${isOpen ? 'rotate-180 border-[#0081FB]/30 text-[#0081FB]' : ''}`}>
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

      {/* ══════════════════════════════════════════════════════
          INTERNAL LINKS (Dark)
      ══════════════════════════════════════════════════════ */}
      {internalLinks && internalLinks.length > 0 && (
        <section className="bg-[#080D18] py-[60px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <span className="text-[#4DA6FF] text-[11px] font-bold uppercase tracking-[2.5px] mb-6 block font-sans">
              EXPLORE MORE SERVICES
            </span>
            <div className="flex flex-wrap justify-center gap-3.5">
              {internalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.to}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[14px] px-5 py-3 text-[13.5px] font-sora font-semibold text-[#8FA8C8] hover:text-white hover:border-[#0081FB]/40 transition-all duration-200"
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
