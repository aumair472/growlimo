import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionDSCA({ service, slug, onSelectPlan }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [expandedSpecialties, setExpandedSpecialties] = useState({});
  const [expandedCities, setExpandedCities] = useState({});

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
    ctaButtonText = 'Get Your Free Dental SEO Audit →',
    faqs = [],
    internalLinks = [],
    images = [],
    schema
  } = service;

  // Safe Image Mapping
  const heroImg = images[0] || '/images/services/hero-dentist-seo.webp';
  const strategyImg = images[1] || '/images/services/dentist-strategy.webp';
  const keywordImg = images[2] || '/images/services/dentist-keyword.webp';
  const linkBuildingImg = images[3] || '/images/services/dentist-link-building.webp';
  const resultsBannerImg = images[4] || '/images/services/dentist-results-banner.webp';

  const toggleSpecialty = (idx) => {
    setExpandedSpecialties(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleCity = (idx) => {
    setExpandedCities(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Helper: Parse Case Studies
  const parseCaseStudy = (bullet) => {
    if (!bullet) return { author: '', stat: '', story: '' };
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

  // Helper: Parse Testimonials
  const parseTestimonial = (bullet) => {
    if (!bullet) return { quote: '', name: '', location: '' };
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

  // Helper: Parse Pricing Packages
  const parsePricing = (bullet) => {
    if (!bullet) return { name: '', price: '', bestFor: '', features: [] };
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

  // Helper: General split on long dashes
  const parseSplitItem = (bullet) => {
    if (!bullet) return { title: '', desc: '' };
    const dashIndex = bullet.indexOf('—');
    if (dashIndex !== -1) {
      const title = bullet.substring(0, dashIndex).trim();
      const desc = bullet.substring(dashIndex + 1).trim();
      return { title, desc };
    }
    return { title: bullet, desc: '' };
  };

  // Section Extractions from dentist-seo-services-california.json contentSections
  const introSection = contentSections[0] || {};
  const problem1 = contentSections[1] || {};
  const problem2 = contentSections[2] || {};
  const problem3 = contentSections[3] || {};
  const servicesIntro = contentSections[4] || {};
  const numberedServices = contentSections.slice(5, 14); // Pillared core service blocks 1 to 9
  const caseStudiesSection = contentSections[14] || {};
  const testimonialsSection = contentSections[15] || {};
  const pricingSection = contentSections[16] || {};
  const specialtiesSection = contentSections[17] || {};
  const aboutSection = contentSections[18] || {};

  return (
    <div className="bg-[#080D18] font-sans selection:bg-[#00C68A]/30 selection:text-white overflow-x-hidden text-[#8FA8C8]">
      <SEO
        title={metaTitle}
        description={metaDescription}
        url={`https://growlimo.com/${slug}/`}
        disableSuffix={true}
        schema={schema}
      />

      {/* SECTION 1: HERO CONTAINER */}
      <section className="bg-[#080D18] text-white pt-[100px] pb-[80px] relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.05)] blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[120px] pointer-events-none animate-pulse duration-[10000ms]" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Heading Copy & trust indicators */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                CALIFORNIA DENTIST SEO AGENCY
              </span>

              <h1 className="text-[30px] md:text-[36px] lg:text-[40px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[15px] sm:text-[17px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[660px]">
                {subheadline}
              </p>

              {/* 3 Trust Badges Grid */}
              <div className="flex flex-wrap gap-4 w-full">
                {[
                  { value: '🦷 YMYL-Compliant', label: 'EEAT Dental Content' },
                  { value: '📍 Local Map Pack', label: 'Dominance Specialists' },
                  { value: '📈 +312% Average', label: 'Patient Inquiry Growth' }
                ].map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-[rgba(26,36,56,0.6)] border border-[rgba(255,255,255,0.06)] rounded-[14px] px-5 py-3.5 shadow-md hover:border-[#00C68A]/35 transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    <span className="text-[#00C68A] font-sora font-extrabold text-[15px]">{badge.value}</span>
                    <span className="text-[#8FA8C8] font-sans text-[12px] font-semibold mt-1 border-t border-[rgba(255,255,255,0.06)] pt-1">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#1A2438]/85 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[24px] p-7 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-[90px] h-[90px] bg-[#00C68A]/5 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] mb-3 text-left border-b border-[rgba(255,255,255,0.06)] pb-2.5">
                  Get Your Free Dental SEO Audit
                </h3>
                <p className="text-[13px] text-[#8FA8C8] text-left mb-5">
                  We'll analyze your organic search positions, keywords, site speed, and competitors at no commitment.
                </p>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Get My Free Dental Audit →"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: FLOATING STATS BANNER */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[400px]">
          <img
            src={heroImg}
            alt="California dentist patient acquisition system"
            className="w-full h-full object-cover brightness-[0.35]"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D18] via-transparent to-[#FFFFFF]" />

          {/* Floating cards */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 max-w-[1200px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { value: '312%', label: 'Average patient inquiry increase in 6 months' },
                  { value: '4.9★', label: 'Consistent 5-star patient review rating' },
                  { value: 'No Lock-In', label: 'Transparent performance-based monthly plans' }
                ].map((statCard, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0C1220]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-4px] hover:border-[#00C68A]/40"
                  >
                    <div className="text-[34px] md:text-[38px] font-extrabold font-sora text-[#00C68A] mb-2 leading-none">
                      {statCard.value}
                    </div>
                    <p className="text-[#F0F4FF] text-[13px] md:text-[14px] leading-relaxed font-sans font-medium">
                      {statCard.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY DENTAL SEO IS DIFFERENT (White Bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

          <div className="text-left mb-12">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              MARKET REALITY
            </span>
            <h2 className="text-[24px] md:text-[32px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
              {introSection.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left 60%: Text context */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <p className="font-sans text-[15px] leading-[1.8] text-[#1A2438] font-semibold">
                {heroContent[0]}
              </p>
              {introSection.paragraphs && introSection.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}
              <p className="font-sans text-[15px] leading-[1.8] text-[#3D5A73] font-bold">
                {heroContent[1]}
              </p>
            </div>

            {/* Right 40%: Problem Block */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[22px] p-7 shadow-sm">
                <h3 className="font-sora font-bold text-[17px] text-[#0B1829] mb-5 text-left border-b border-[#E3EEF7] pb-3">
                  Why Standard Dental SEO Fails
                </h3>
                <div className="space-y-4">
                  {[problem1, problem2, problem3].map((prob, idx) => {
                    const cleanTitle = prob.heading || '';
                    const cleanDesc = prob.paragraphs ? prob.paragraphs[0] : '';
                    return (
                      <div key={idx} className="flex gap-4 items-start text-left border-b border-[#E3EEF7]/60 last:border-0 pb-4 last:pb-0">
                        <div className="w-[28px] h-[28px] rounded-full bg-[rgba(239,68,68,0.1)] border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-red-500 font-sora font-extrabold text-[12px]">{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-sans text-[14.5px] font-bold text-[#0B1829] leading-tight mb-1">
                            {cleanTitle}
                          </h4>
                          <p className="font-sans text-[13px] leading-relaxed text-[#3D5A73]">
                            {cleanDesc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {problem3.closingText && (
            <div className="border-l-4 border-[#00C68A] pl-5 py-3.5 my-8 bg-[#00C68A]/5 rounded-r-[10px] text-left max-w-[900px]">
              <p className="font-sans text-[15px] leading-[1.8] font-bold text-[#0B1829]">
                {problem3.closingText}
              </p>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 4: SERVICES INTRO SOLUTIONS */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left 45%: Image banner */}
            <div className="lg:col-span-5">
              <div className="rounded-[24px] overflow-hidden shadow-2xl border-4 border-white relative group">
                <img
                  src={strategyImg}
                  alt="GrowLimo custom dentist SEO roadmap strategy"
                  className="w-full h-auto object-cover transition-transform duration-[600ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right 55%: Content copy */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                CORE SOLUTIONS
              </span>
              <h2 className="text-[24px] md:text-[32px] font-extrabold font-sora leading-[1.15] text-[#F0F4FF] tracking-tight border-l-4 border-[#00C68A] pl-4">
                {servicesIntro.heading}
              </h2>
              {servicesIntro.paragraphs && servicesIntro.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTIONS 5-13: NUMBERED DENTAL SEO SERVICE PILLARS (Alternating Themes) */}
      {numberedServices.map((servicePillar, sIdx) => {
        const isWhiteBg = sIdx % 2 === 0;
        const bgClass = isWhiteBg ? 'bg-[#FFFFFF] border-t border-[#E3EEF7]' : 'bg-[#0C1220] border-t border-[rgba(255,255,255,0.04)]';
        const numBadge = `0${sIdx + 1}`;
        const cleanHeading = servicePillar.heading.replace(/^\d+\.\s*/, '');

        return (
          <div key={sIdx}>
            <section className={`${bgClass} py-[96px] relative z-10 text-left`}>
              <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                <div className="max-w-[880px] mx-auto">

                  {/* Eyebrows & Nodes */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] flex items-center justify-center font-sora font-extrabold text-[14px]">
                      {numBadge}
                    </span>
                    <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                      CORE SEO PILLAR
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className={`text-[22px] md:text-[28px] font-extrabold font-sora leading-[1.18] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                    {cleanHeading}
                  </h2>

                  {/* Paragraphs */}
                  {servicePillar.paragraphs && servicePillar.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className={`font-sans text-[15px] leading-[1.8] mb-5 font-normal ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                      {para}
                    </p>
                  ))}

                  {/* Bullet Lists */}
                  {servicePillar.bullets && servicePillar.bullets.length > 0 && (
                    <div className="space-y-4 my-8">
                      {servicePillar.bullets.map((bullet, bIdx) => {
                        const { title, desc } = parseSplitItem(bullet);
                        return (
                          <div key={bIdx} className="flex gap-[14px] items-start">
                            <div className="w-[26px] h-[26px] rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center shrink-0 mt-0.5">
                              <svg className="w-[12px] h-[12px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              {title && (
                                <strong className={`font-sans text-[15px] font-bold leading-tight block mb-1 ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                                  {title}
                                </strong>
                              )}
                              {desc && (
                                <p className={`font-sans text-[14.5px] leading-relaxed ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                                  {desc}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Optional Highlight Closing Text */}
                  {servicePillar.closingText && (
                    <div className={`mt-8 p-6 rounded-[18px] border-l-4 border-[#00C68A] text-left ${isWhiteBg ? 'bg-[#F8FAFC]' : 'bg-[#1A2438]/60'}`}>
                      <p className={`font-sans text-[15px] leading-[1.8] font-bold italic ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                        "{servicePillar.closingText}"
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </section>

            {/* EMBEDDED DASHBOARDS */}

            {/* Dashboard 1 after Keyword Research (sIdx === 1) */}
            {sIdx === 1 && keywordImg && (
              <section className="relative w-full py-16 bg-[#080D18] flex justify-center border-t border-[rgba(255,255,255,0.04)]">
                <div className="container max-w-[920px] px-4">
                  <div className="rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                    <img
                      src={keywordImg}
                      alt="Google search patient intent search maps keywords"
                      className="w-full h-auto max-h-[460px] object-cover transition-transform duration-[600ms] group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-6 right-6 text-left">
                      <p className="text-[11px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">INTENT & KEYWORDS</p>
                      <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Dental High-Intent Keyword Matrix & Search Volume Mapping</h4>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Dashboard 2 after Link Building (sIdx === 6) */}
            {sIdx === 6 && linkBuildingImg && (
              <section className="relative w-full py-16 bg-[#080D18] flex justify-center border-t border-[rgba(255,255,255,0.04)]">
                <div className="container max-w-[920px] px-4">
                  <div className="rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                    <img
                      src={linkBuildingImg}
                      alt="High-authority backlinks for dentist practice websites"
                      className="w-full h-auto max-h-[460px] object-cover transition-transform duration-[600ms] group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-6 right-6 text-left">
                      <p className="text-[11px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">AUTHORITY BACKLINKS</p>
                      <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Dental Domain Relevance & Backlink Acquisition Flow</h4>
                    </div>
                  </div>
                </div>
              </section>
            )}

          </div>
        );
      })}

      {/* SECTION 14: CINEMATIC CASE STUDIES */}
      {caseStudiesSection && caseStudiesSection.bullets && (
        <>
          <section className="bg-[#0C1220] pt-[120px] pb-[60px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
            <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                CASE STUDIES
              </span>
              <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold font-sora text-white leading-tight mb-6 tracking-tight max-w-[820px] mx-auto">
                {caseStudiesSection.heading}
              </h2>
            </div>
          </section>

          {caseStudiesSection.bullets.map((bullet, idx) => {
            const { author, stat, story } = parseCaseStudy(bullet);
            const isAlternate = idx % 2 === 1;
            const bgClass = isAlternate ? 'bg-[#0A101D]' : 'bg-[#0C1220]';

            // Split story at key places to make custom Challenge / Solution boxes
            const storyParts = story.split(/(GrowLimo performed website technical overhaul|GrowLimo built dedicated 1,900-word veneers|GrowLimo built multi-location SEO architecture)/i);
            const challengeText = storyParts[0] || '';
            const strategyText = storyParts[1] ? storyParts[1] + (storyParts[2] || '') : '';

            // Metric lines for the case study
            const kpiMetrics = idx === 0
              ? [
                { label: '"Dentist Los Angeles" Ranking', value: 'Page 4 → Page 1, Pos #7' },
                { label: 'Google Map Pack Location position', value: 'Outside → Position #1' },
                { label: 'Monthly new patient inquiries', value: '4 → 47 monthly' }
              ]
              : idx === 1
                ? [
                  { label: 'Veneers & Implants ranking', value: 'Pos #4 & Pos #5 organic' },
                  { label: 'Monthly cosmetic consultations', value: '0 → 31 inquiries' },
                  { label: 'Estimated monthly practice revenue', value: '+$84,000+ organic' }
                ]
                : [
                  { label: 'Map Pack presence (all 6 sites)', value: 'All 6 locations in Top 3' },
                  { label: 'Total monthly inquiries from search', value: '22 → 134 across locations' },
                  { label: 'DSO Booking volume increase', value: '+510% year-over-year' }
                ];

            return (
              <section key={idx} className={`${bgClass} py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]`}>
                <div className="absolute top-0 left-[12%] w-[40%] h-[40%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

                  {/* Eyebrow index */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#00C68A] text-[12px] font-extrabold uppercase tracking-[3px] font-sans">
                      CASE STUDY 0{idx + 1}
                    </span>
                    <div className="h-[1px] w-12 bg-[#00C68A]/30" />
                  </div>

                  {/* Main case study stat title */}
                  <h3 className="text-[22px] md:text-[28px] lg:text-[34px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-8 tracking-tight max-w-[1000px] text-left">
                    {author} — {stat}
                  </h3>

                  {/* Banners */}
                  <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] mb-12 group">
                    <img
                      src={idx === 0 ? '/images/services/dentist-seo-services-california-case-study-1.webp' : idx === 1 ? '/images/services/dentist-seo-services-california-case-study-2.webp' : '/images/services/dentist-seo-services-california-case-study-3.webp'}
                      alt={author}
                      className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03] brightness-[0.8]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/90 via-[#080D18]/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080D18]/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Text descriptions blocks */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                    {/* The Challenge Column */}
                    <div className="bg-[#162035]/35 backdrop-blur-sm border border-[rgba(255,255,255,0.04)] rounded-[20px] p-8 text-left hover:border-red-500/20 transition-all duration-300 shadow-lg">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-[1.5px] mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        THE CHALLENGE
                      </span>
                      <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
                        {challengeText}
                      </p>
                    </div>

                    {/* What GrowLimo Changed Column */}
                    <div className="bg-[#162035]/35 backdrop-blur-sm border border-[rgba(0,198,138,0.12)] rounded-[20px] p-8 text-left hover:border-[#00C68A]/30 transition-all duration-300 shadow-lg">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C68A]/10 border border-[#00C68A]/20 text-[#00C68A] text-[11px] font-bold uppercase tracking-[1.5px] mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00C68A] animate-pulse" />
                        WHAT GROWLIMO CHANGED
                      </span>
                      <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#F0F4FF] font-medium">
                        {strategyText || 'Implemented full technical optimization, localized patient content mapping, multi-channel schema markups, and HIPAA-compliant automated review generation sequences.'}
                      </p>
                    </div>

                  </div>

                  {/* KPI Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {kpiMetrics.map((kpi, kIdx) => (
                      <div
                        key={kIdx}
                        className="relative group bg-[#162035]/65 backdrop-blur-md border border-[rgba(0,198,138,0.15)] hover:border-[#00C68A] rounded-[20px] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,198,138,0.08)] text-left"
                      >
                        <div className="text-[20px] sm:text-[22px] md:text-[23px] font-extrabold font-sora text-[#00C68A] tracking-tight mb-2 leading-tight">
                          {kpi.value}
                        </div>
                        <div className="text-[#8FA8C8] text-[13px] md:text-[13.5px] leading-relaxed font-sans font-medium">
                          {kpi.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Location info */}
                  <div className="bg-[#162035]/25 backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded-[20px] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-left shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#00C68A]/10 border border-[#00C68A]/20 flex items-center justify-center text-[#00C68A] shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-extrabold text-[#00C68A] tracking-[1.5px] block mb-1">PARTNER CLINIC</span>
                        <span className="text-[14.5px] font-bold text-[#F0F4FF] font-sora block">{author.replace(/General Dentist|Cosmetic Dentist|DSO/gi, '').trim()} Practice</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 md:gap-12">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-1">LOCATION</span>
                        <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                          {idx === 0 ? 'Los Angeles (Koreatown)' : idx === 1 ? 'San Diego Metro' : 'Orange County (Multi-Location)'}
                        </span>
                      </div>

                      <div className="flex flex-col border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.08)] pt-4 md:pt-0 md:pl-8">
                        <span className="text-[10px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-1">DENTAL FOCUS</span>
                        <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                          {idx === 0 ? 'Family & Preventive Care' : idx === 1 ? 'Elective Cosmetic & Restorations' : 'DSO / Family Practices'}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            );
          })}
        </>
      )}

      {/* SECTION 15: CLIENT TESTIMONIALS (White Bg) */}
      {testimonialsSection && testimonialsSection.bullets && (
        <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

            <div className="text-center mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                CLINICAL CLIENT REVIEW
              </span>
              <h2 className="text-[26px] md:text-[32px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
                {testimonialsSection.heading}
              </h2>
            </div>

            {/* Quote Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonialsSection.bullets.map((bullet, idx) => {
                const { quote, name, location } = parseTestimonial(bullet);
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm flex flex-col justify-between text-left hover:border-[#00C68A]/35 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="text-[#00C68A]/25 text-[54px] leading-[0px] font-serif select-none">“</div>
                      <p className="font-sans text-[15px] leading-[1.8] italic text-[#3D5A73] border-l-4 border-[#00C68A] pl-4 py-1.5">
                        {quote.replace(/^["'“”]/, '').replace(/["'“”]$/, '')}
                      </p>
                    </div>

                    {/* Author block */}
                    <div className="mt-8 pt-4 border-t border-[#E3EEF7]">
                      <h4 className="font-sora font-bold text-[14.5px] text-[#0B1829]">{name}</h4>
                      <p className="font-sans text-[12px] text-[#3D5A73] mt-1 font-semibold">{location}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 16: PRICING PACKAGES (Dark Bg) */}
      {pricingSection && pricingSection.bullets && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

            <div className="text-center mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                INVESTMENT & PLAN PLANS
              </span>
              <h2 className="text-[26px] md:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                {pricingSection.heading}
              </h2>
              {pricingSection.paragraphs && pricingSection.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px] mx-auto text-center">
                  {para}
                </p>
              ))}
            </div>

            {/* Pricing Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingSection.bullets.map((bullet, idx) => {
                const { name, price, bestFor, features } = parsePricing(bullet);
                const isFeatured = idx === 1; // Middle package Growth Accelerator is featured

                return (
                  <div
                    key={idx}
                    className={`relative rounded-[24px] p-8 flex flex-col justify-between text-left transition-all duration-300 hover:translate-y-[-4px] shadow-2xl ${isFeatured
                      ? 'bg-[#1A2438] border-2 border-[#00C68A] lg:scale-[1.03]'
                      : 'bg-[#162035]/65 border border-[rgba(255,255,255,0.06)]'
                      }`}
                  >
                    {isFeatured && (
                      <span className="absolute top-[-14px] left-[50%] translate-x-[-50%] bg-[#00C68A] text-[#080D18] font-sora font-extrabold text-[10px] tracking-[2px] uppercase rounded-full py-1.5 px-4">
                        RECOMMENDED PLAN
                      </span>
                    )}

                    <div>
                      <h3 className="font-sora font-extrabold text-[20px] text-white mb-2 leading-tight">
                        {name}
                      </h3>

                      <div className="flex items-baseline gap-1 my-4">
                        <span className="text-[34px] font-extrabold font-sora text-[#00C68A]">{price.split('/')[0]}</span>
                        <span className="text-[13px] text-[#8FA8C8] font-sans">/ {price.split('/')[1] || 'month'}</span>
                      </div>

                      <p className="text-[13.5px] leading-relaxed text-[#8FA8C8] border-b border-[rgba(255,255,255,0.06)] pb-4 mb-5">
                        {bestFor}
                      </p>

                      <ul className="space-y-3.5 mb-8">
                        {features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex gap-3 items-start text-[14px] leading-snug text-[#8FA8C8]">
                            <svg className="w-4 h-4 text-[#00C68A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => onSelectPlan(name)}
                      className={`w-full py-3.5 px-6 font-sora font-extrabold text-[13.5px] tracking-[1.5px] uppercase rounded-[12px] transition-all duration-300 cursor-pointer ${isFeatured
                        ? 'bg-[#00C68A] text-[#080D18] hover:bg-[#00B37C] shadow-lg hover:shadow-[#00C68A]/20'
                        : 'bg-[rgba(255,255,255,0.04)] text-white hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)]'
                        }`}
                    >
                      Select Plan & Audit →
                    </button>
                  </div>
                );
              })}
            </div>

            {pricingSection.closingText && (
              <div className="text-center mt-12">
                <p className="font-sans text-[14.5px] text-[#8FA8C8] font-bold">
                  {pricingSection.closingText}
                </p>
              </div>
            )}

          </div>
        </section>
      )}

      {/* SECTION 17: DENTAL SEO BY SPECIALTY PLAYBOOK (White Bg) */}
      {specialtiesSection && specialtiesSection.bullets && (
        <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

            <div className="text-left mb-12">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                SPECIALTY STRATEGY
              </span>
              <h2 className="text-[24px] md:text-[32px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
                {specialtiesSection.heading}
              </h2>
            </div>

            {/* Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialtiesSection.bullets.map((bullet, idx) => {
                const { title, desc } = parseSplitItem(bullet);
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
                          {title}
                        </h3>
                      </div>

                      <p className={`font-sans text-[14.2px] leading-relaxed text-[#3D5A73] transition-all duration-300 ${isExpanded ? '' : 'line-clamp-4'}`}>
                        {desc}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleSpecialty(idx)}
                      className="text-[#00C68A] hover:text-[#00B37C] font-sora font-extrabold text-[12px] tracking-[1.5px] uppercase flex items-center gap-1.5 mt-5 leading-none transition-colors border-t border-[#E3EEF7]/80 pt-4 cursor-pointer focus:outline-none"
                    >
                      <span>{isExpanded ? 'Collapse playbook' : 'View playbook'}</span>
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
      )}

      {/* SECTION 18: CHRONOLOGICAL METHODOLOGY TIMELINE (Dark Bg) */}
      {processSection && processSection.steps && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

            <div className="text-center mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                6-PHASE ROADMAP
              </span>
              <h2 className="text-[26px] md:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                {processSection.title}
              </h2>
              {processSection.intro && (
                <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px] mx-auto text-center">
                  {processSection.intro}
                </p>
              )}
            </div>

            {/* Stepper Node List */}
            <div className="relative border-l border-[rgba(255,255,255,0.08)] ml-4 md:ml-10 space-y-12">
              {processSection.steps.map((step, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12 group text-left">
                  {/* Outer circle */}
                  <div className="absolute left-[-15px] top-1.5 w-7 h-7 rounded-full bg-[#0C1220] border-2 border-[#00C68A] flex items-center justify-center z-20 group-hover:bg-[#00C68A] transition-all duration-300">
                    <span className="text-white text-[10px] font-extrabold">{idx + 1}</span>
                  </div>

                  <h3 className="font-sora font-extrabold text-[17px] md:text-[19px] text-[#F0F4FF] mb-3 leading-none">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] max-w-[900px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 19: ABOUT THE AGENCY (Dark Bg) */}
      {aboutSection && (
        <section className="bg-[#080D18] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left 60%: Paragraphs */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                  CLINICAL EEAT PARTNERS
                </span>
                <h2 className="text-[24px] md:text-[32px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                  {aboutSection.heading}
                </h2>
                {aboutSection.paragraphs && aboutSection.paragraphs.map((para, idx) => (
                  <p key={idx} className="font-sans text-[15.5px] leading-[1.8] text-[#8FA8C8]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Right 40%: Double Glow Banner with Skyline */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.06)] shadow-2xl h-[300px]">
                  <img
                    src={resultsBannerImg}
                    alt="Growlimo California dental results banner"
                    className="w-full h-full object-cover brightness-[0.35]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/90 via-[#080D18]/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-10">
                    <span className="text-[#00C68A] font-sora font-extrabold text-[36px] leading-none mb-2">60+</span>
                    <h4 className="text-white font-sora font-bold text-[14.5px] tracking-[1.5px] uppercase">
                      California Practices Partnered
                    </h4>
                    <p className="text-[12.5px] text-[#8FA8C8] mt-2 max-w-[280px]">
                      Compliant under clinical YMYL standards & HIPAA audit baselines.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 20: DYNAMIC CALL TO ACTION (Gradient overlay bg) */}
      {ctaSection && (
        <section className="bg-gradient-to-br from-[#0C1220] via-[#0F1D33] to-[#08291F] py-[100px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
          <div className="absolute inset-0 bg-[#00C68A]/2 opacity-20 blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 md:px-10 max-w-[920px] relative z-10">

            <h2 className="text-[28px] md:text-[36px] font-extrabold font-sora text-white leading-tight mb-6 tracking-tight">
              {ctaSection.heading}
            </h2>

            {ctaSection.paragraphs && ctaSection.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] md:text-[17px] leading-[1.8] text-[#8FA8C8] mb-8 max-w-[740px] mx-auto">
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

      {/* SECTION 21: ACCORDION FAQS (White Bg) */}
      {faqs && faqs.length > 0 && (
        <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[880px]">

            <div className="text-center mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                FAQS & INFORMATION
              </span>
              <h2 className="text-[26px] md:text-[32px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
                Frequently Asked Dentist SEO Questions
              </h2>
            </div>

            {/* Accordion Panels */}
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;

                return (
                  <div
                    key={idx}
                    className="border border-[#E3EEF7] rounded-[18px] bg-[#F8FAFC] overflow-hidden transition-all duration-300 hover:border-[#00C68A]/35"
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

      {/* SECTION 22: INTERNAL CHIPS (Dark Bg) */}
      {internalLinks && internalLinks.length > 0 && (
        <section className="bg-[#080D18] py-[64px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-6 block font-sans">
              EXPLORE MORE SOLUTIONS
            </span>
            <div className="flex flex-wrap justify-center gap-3.5">
              {internalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.to}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[14px] px-5 py-3 text-[13px] font-sora font-semibold text-[#8FA8C8] hover:text-white hover:border-[#00C68A]/40 transition-all duration-200"
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
