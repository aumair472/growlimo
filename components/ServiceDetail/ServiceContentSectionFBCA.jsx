import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionFBCA({ service, slug, onSelectPlan }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [expandedCities, setExpandedCities] = useState({});
  const [expandedIndustries, setExpandedIndustries] = useState({});

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
    ctaButtonText = 'Get Your Free Facebook Ads Audit →',
    faqs = [],
    internalLinks = [],
    images = [],
    schema
  } = service;

  // Safe image pointers
  const heroImg = images[0] || '/images/services/hero-facebook-ads-california.webp';
  const strategyImg = images[1] || '/images/services/facebook-ads-strategy.webp';
  const creativeImg = images[2] || '/images/services/facebook-creative-production.webp';
  const dashboardImg = images[3] || '/images/services/facebook-ads-dashboard.webp';
  const bannerImg = images[4] || '/images/services/california-facebook-results.webp';

  const toggleCity = (idx) => {
    setExpandedCities(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleIndustry = (idx) => {
    setExpandedIndustries(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Safe mapping of contentSections based on the JSON sequence
  const whyFacebookSec = contentSections[0] || {}; // Why Facebook Ads Are a Non-Negotiable...
  const problemsSec = contentSections[1] || {}; // Why Most California Facebook Ads Campaigns Underperform...
  const servicesIntroSec = contentSections[2] || {}; // Our Facebook Ads Management Services...

  // Numbered Services 1-8 are contentSections[3] to [10]
  const numberedServices = contentSections.slice(3, 11);

  // Case Studies contentSections[11], [12], [13]
  const caseStudy1Sec = contentSections[11] || {};
  const caseStudy2Sec = contentSections[12] || {};
  const caseStudy3Sec = contentSections[13] || {};

  // Industries Section is contentSections[14]
  const industriesSection = contentSections[14] || {};

  // Cities Section is contentSections[15]
  const citiesSection = contentSections[15] || {};

  // Expertise Section is contentSections[16]
  const expertiseSection = contentSections[16] || {};

  // Testimonials Section is contentSections[17]
  const testimonialsSection = contentSections[17] || {};

  // Testimonial parser: '"Quote" — Name, Role, Location'
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
      .replace(/["'“”]$/, '');

    const attribution = bullet.substring(lastDashIndex + 1).trim();

    const parts = attribution.split(',').map(part => part.trim());

    return {
      quote,
      name: parts[0] || '',
      role: parts[1] || '',
      location: parts.slice(2).join(', ') || ''
    };
  };

  // Helper to separate title and description in a colon or dash separated list item
  const parseSplitItem = (item) => {
    const separators = [':', '—'];
    for (const sep of separators) {
      const idx = item.indexOf(sep);
      if (idx !== -1) {
        const title = item.substring(0, idx).trim();
        const desc = item.substring(idx + 1).trim();
        return { title, desc };
      }
    }
    return { title: item, desc: '' };
  };

  const splitSentences = (text) => {
    if (!text) return [];
    const raw = text.split('. ');
    return raw.map((s, i) => {
      let clean = s.trim();
      if (i < raw.length - 1 && !clean.endsWith('.')) {
        clean += '.';
      }
      return clean;
    }).filter(Boolean);
  };

  const parseCaseStudySegments = (paragraphs, idx) => {
    if (!paragraphs || paragraphs.length < 2) {
      return {
        problem: paragraphs?.[0] || '',
        strategy: paragraphs?.[1] || '',
        execution: ''
      };
    }

    if (idx === 0) {
      const problem = paragraphs[0];
      const p1 = paragraphs[1];
      const sentences = splitSentences(p1);
      const strategy = sentences[0] || '';
      const execution = sentences.slice(1).join(' ') || '';
      return { problem, strategy, execution };
    }

    if (idx === 1 || idx === 2) {
      const p0 = paragraphs[0];
      const execution = paragraphs[1];
      const sentences = splitSentences(p0);
      const problem = sentences.slice(0, 2).join(' ') || '';
      const strategy = sentences.slice(2).join(' ') || '';
      return { problem, strategy, execution };
    }

    return {
      problem: paragraphs[0] || '',
      strategy: paragraphs[1] || '',
      execution: paragraphs.slice(2).join(' ') || ''
    };
  };

  const parseBulletMetric = (bullet) => {
    const colonIdx = bullet.indexOf(':');
    if (colonIdx === -1) {
      return {
        value: '✓',
        label: bullet
      };
    }
    const left = bullet.substring(0, colonIdx).trim();
    const right = bullet.substring(colonIdx + 1).trim();
    return {
      value: right,
      label: left
    };
  };

  const caseStudyMetadata = [
    {
      location: 'Los Angeles, CA',
      industry: 'E-Commerce & Beauty',
      campaignType: 'Advantage+ Shopping & Retargeting'
    },
    {
      location: 'San Diego, CA',
      industry: 'Real Estate & Luxury Sales',
      campaignType: 'Meta Lead Gen & CRM Integration'
    },
    {
      location: 'Sacramento, CA',
      industry: 'Fitness & Wellness',
      campaignType: 'Local Lead Gen & Reels Retargeting'
    }
  ];

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
        {/* Glowing background highlights */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1100px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side: Headline & Trust Info */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                CALIFORNIA META ADS SPECIALISTS
              </span>

              <h1 className="text-4xl md:text-[44px] lg:text-[48px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight animate-fade-in">
                {h1}
              </h1>

              {/* First heroContent paragraph (max 3 lines) */}
              <p className="font-sans text-[16px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[620px]">
                {subheadline}
              </p>

              {/* 3 Trust Pills */}
              <div className="flex flex-wrap gap-3 mb-4 w-full">
                {[
                  { value: '80+ California', label: 'Clients' },
                  { value: 'Meta Blueprint', label: 'Certified' },
                  { value: '4.9★', label: 'Rating' }
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

            {/* Right Side: Form */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#1A2438]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-5 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/5 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-bold text-[15px] text-[#F0F4FF] mb-3 text-left border-b border-[rgba(255,255,255,0.06)] pb-2">
                  Get Your Free Facebook Ads Audit
                </h3>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Get My Free Facebook Ads Audit →"
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
            alt="GrowLimo California Facebook Ads"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          {/* Deep dark gradient overlays */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080D18] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFFFF] to-transparent" />

          {/* 3 Floating Stat Cards on Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 max-w-[1100px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { value: '80+ CA Clients', text: 'California Businesses Scaled with Meta Ads' },
                  { value: '6.8x Avg ROAS', text: 'Proven Social Campaign Return Across Verticals' },
                  { value: 'Full Creative Included', text: 'Thumb-Stopping Video & Copy Built In-House' }
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0C1220]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[18px] p-7 shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#00C68A]/40"
                  >
                    <div className="text-[22px] md:text-[24px] font-extrabold font-sora text-[#00C68A] mb-2 leading-none">
                      {card.value}
                    </div>
                    <p className="text-[#F0F4FF] text-[13px] leading-relaxed font-sans font-medium">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY FACEBOOK ADS (white bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-left mb-12">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              DEMAND CREATION ENGINE
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
              Why Facebook Ads Are Non-Negotiable for California Businesses
            </h2>
          </div>

          <div className="text-left mb-12">
            {
              heroContent.map((para, idx) => (
                <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#3D5A73] mt-3 mb-3">
                  {para}
                </p>
              ))
            }
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left 60%: Text content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {whyFacebookSec.paragraphs && whyFacebookSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>

            {/* Right 40%: Trust highlights styled inside card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm">
                <h3 className="font-sora font-bold text-[18px] text-[#0B1829] mb-6 text-left border-b border-[#E3EEF7] pb-3">
                  California Meta Insights
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start text-left p-4 rounded-[12px] bg-[#00C68A]/5 border border-[#00C68A]/20">
                    <div className="w-[26px] h-[26px] rounded-full bg-[#00C68A] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-[12px] h-[12px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-sans text-[14px] font-bold text-[#0B1829] leading-tight mb-1">
                        Full-Funnel Demand
                      </h4>
                      <p className="font-sans text-[13px] leading-relaxed text-[#3D5A73]">
                        {heroContent[1]}
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
                        High Spending Geographies
                      </h4>
                      <p className="font-sans text-[13px] leading-relaxed text-[#3D5A73]">
                        California metro zones possess highly lucrative consumer groups, capturing prime intent based on demographic and lifestyle signals.
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
                        Algorithmic Edge
                      </h4>
                      <p className="font-sans text-[13px] leading-relaxed text-[#3D5A73]">
                        Strategic integration of first-party customer lists to prompt machine learning optimizations that consistently convert.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section >

      {/* SECTION 4: PROBLEMS WE FIX (dark bg) */}
      < section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]" >
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-left mb-10">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              COMMON BOTTLENECKS
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Why Most Campaigns Underperform
            </h2>
            {problemsSec.paragraphs && problemsSec.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px]">
                {para}
              </p>
            ))}
          </div>

          {/* Bullets as a 2-column grid of styled cards with custom icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {problemsSec.bullets && problemsSec.bullets.map((bullet, idx) => {
              const { title, desc } = parseSplitItem(bullet);

              // Custom icon map
              const getIcon = (i) => {
                switch (i) {
                  case 0: return '🎯'; // Broad
                  case 1: return '♻️'; // Creative fatigue
                  case 2: return '📊'; // Funnel
                  case 3: return '💾'; // First-party
                  case 4: return '✨'; // Weak creative
                  case 5: return '🔌'; // Tracking
                  case 6: return '📈'; // Landing page
                  default: return '🛡️';
                }
              };

              return (
                <div
                  key={idx}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-6 shadow-md transition-all duration-300 hover:border-[#00C68A]/30 hover:translate-y-[-3px] flex gap-4 items-start text-left"
                >
                  <div className="w-[38px] h-[38px] rounded-xl bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.15)] flex items-center justify-center shrink-0 text-[#00C68A] text-lg font-bold">
                    {getIcon(idx)}
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
      </section >

      {/* SECTION 5: TWO-COLUMN IMAGE + TEXT */}
      < section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]" >
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left 40%: Image */}
            <div className="lg:col-span-5">
              <div className="rounded-[20px] overflow-hidden shadow-xl border-4 border-white relative group">
                <img
                  src={strategyImg}
                  alt="GrowLimo California Facebook Ads Strategy Planning"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right 60%: Text intro for services */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                GrowLimo META ADS SOLUTIONS
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
                Our Facebook Ads Management Services
              </h2>
              {servicesIntroSec.paragraphs && servicesIntroSec.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[17px] leading-[1.8] text-[#3D5A73]">
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section >

      {/* SECTION 6-13: NUMBERED SERVICES (alternating bg) */}
      {
        numberedServices.map((serviceSec, sIdx) => {
          const isWhiteBg = sIdx % 2 === 0;
          const bgClass = isWhiteBg ? 'bg-[#FFFFFF] border-t border-[#E3EEF7]' : 'bg-[#0C1220] border-t border-[rgba(255,255,255,0.04)]';
          const numBadge = `0${sIdx + 1}`;

          // Strip "X. " prefix
          const displayHeading = serviceSec.heading.replace(/^\d+\.\s*/, '');

          return (
            <div key={sIdx}>
              <section className={`${bgClass} py-[96px] relative z-10`}>
                <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
                  <div className="max-w-[860px] mx-auto">

                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-sora font-extrabold text-[14px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-[6px]">
                        SERVICE {numBadge}
                      </span>
                    </div>

                    <h2 className={`text-[30px] md:text-[36px] font-extrabold font-sora leading-tight tracking-tight mb-6 ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                      {displayHeading}
                    </h2>

                    {serviceSec.paragraphs && serviceSec.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className={`font-sans text-[16px] leading-[1.8] mb-6 ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}
                      >
                        {para}
                      </p>
                    ))}

                    {/* Bullets (emerald checks) */}
                    {serviceSec.bullets && serviceSec.bullets.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {serviceSec.bullets.map((bullet, bIdx) => {
                          const parsed = parseSplitItem(bullet);
                          return (
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
                              <div className="flex-1 text-left">
                                {parsed.desc ? (
                                  <>
                                    <strong className={`font-sora font-semibold text-[14px] block mb-0.5 ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>{parsed.title}</strong>
                                    <span className={`font-sans text-[13px] leading-[1.6] ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>{parsed.desc}</span>
                                  </>
                                ) : (
                                  <span className={`font-sans text-[14px] leading-[1.65] font-medium ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>{bullet}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {serviceSec.closingText && (
                      <div className={`mt-8 p-6 rounded-[16px] border-l-4 border-[#00C68A] ${isWhiteBg ? 'bg-[#F8FAFC] border-[#E3EEF7]' : 'bg-[#1A2438]/60 border-[rgba(255,255,255,0.04)]'}`}>
                        <p className={`font-sans text-[16px] leading-[1.8] font-bold italic ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                          "{serviceSec.closingText}"
                        </p>
                      </div>
                    )}

                  </div>
                </div>
              </section>

              {/* IMAGE PLACEMENTS */}
              {sIdx === 1 && ( // After Service 2 (Creative Production)
                <section className="relative w-full py-16 bg-[#080D18] flex justify-center">
                  <div className="container max-w-[900px] px-4">
                    <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                      <img
                        src={creativeImg}
                        alt="California High-Converting Creative Production Studio"
                        className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-5 left-6 right-6 text-left">
                        <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">CREATIVE STUDIO</p>
                        <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Custom Carousel, Video Storyboarding & Graphic Ad Sets</h4>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {sIdx === 5 && ( // After Service 6 (Advantage+ Management)
                <section className="relative w-full py-16 bg-[#080D18] flex justify-center">
                  <div className="container max-w-[900px] px-4">
                    <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                      <img
                        src={dashboardImg}
                        alt="Meta Ads Advantage+ Reporting Dashboard"
                        className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-5 left-6 right-6 text-left">
                        <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">CAMPAIGN CONTROLS</p>
                        <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Scale Campaign Budgets with Machine Learning Guardrails</h4>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          );
        })
      }

      {/* SECTION 14: CASE STUDIES (dark bg) */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px] text-center mb-16">
          <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            CALIFORNIA EXPERTISE IN ACTION
          </span>
          <h2 className="text-[32px] md:text-[42px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
            Facebook Ads Case Studies
          </h2>
        </div>

        {[caseStudy1Sec, caseStudy2Sec, caseStudy3Sec].map((cs, idx) => {
          const displayHeading = cs.heading.replace(/^Case Study \d+:\s*/, '');
          const badgeNumber = `CASE STUDY 0${idx + 1}`;
          const segments = parseCaseStudySegments(cs.paragraphs, idx);
          const meta = caseStudyMetadata[idx] || {};
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`w-full py-20 border-t border-[rgba(255,255,255,0.03)] relative overflow-hidden ${isEven ? 'bg-[#0C1220]' : 'bg-[#090E1A]'
                }`}
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[rgba(0,198,138,0.02)] blur-[150px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[rgba(143,168,200,0.015)] blur-[130px] pointer-events-none" />

              <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
                {/* 1. TOP LABEL & 2. LARGE HEADLINE */}
                <div className="text-center max-w-[900px] mx-auto mb-10">
                  <span className="text-[#00C68A] text-[12px] font-extrabold uppercase tracking-[4px] mb-4 block filter drop-shadow-[0_0_8px_rgba(0,198,138,0.3)] font-sans">
                    {badgeNumber}
                  </span>
                  <h3 className="text-[28px] md:text-[44px] lg:text-[50px] font-extrabold font-sora text-[#F0F4FF] tracking-tight leading-[1.15]">
                    {displayHeading}
                  </h3>
                </div>

                {/* 3. FEATURED IMAGE */}
                <div className="relative w-full h-[320px] md:h-[520px] lg:h-[580px] rounded-[24px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-[rgba(255,255,255,0.06)] group mb-16">
                  <img
                    src={cs.image}
                    alt={displayHeading}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1220]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 4. CONTENT RESTRUCTURING (THE PROBLEM, THE STRATEGY, THE EXECUTION) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 text-left">
                  {/* Column 1: The Problem */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <h4 className="text-[11px] font-extrabold uppercase tracking-[2px] text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full font-sans">
                        The Problem
                      </h4>
                    </div>
                    <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                      {segments.problem}
                    </p>
                  </div>

                  {/* Column 2: The Strategy */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C68A] animate-pulse" />
                      <h4 className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#00C68A] bg-[#00C68A]/10 border border-[#00C68A]/20 px-3 py-1 rounded-full font-sans">
                        The Strategy
                      </h4>
                    </div>
                    <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                      {segments.strategy}
                    </p>
                  </div>

                  {/* Column 3: The Execution */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <h4 className="text-[11px] font-extrabold uppercase tracking-[2px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-sans">
                        The Execution
                      </h4>
                    </div>
                    <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
                      {segments.execution}
                    </p>
                  </div>
                </div>

                {/* 5. KPI / RESULTS SECTION */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 text-left">
                  {cs.bullets && cs.bullets.map((bullet, bIdx) => {
                    const parsed = parseBulletMetric(bullet);
                    const isLongValue = parsed.value.length > 10;

                    return (
                      <div
                        key={bIdx}
                        className="bg-[#162035]/40 backdrop-blur-md border border-[rgba(0,198,138,0.15)] rounded-[20px] p-6 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(0,198,138,0.1)] hover:border-[#00C68A]/40 transition-all duration-300 group hover:translate-y-[-4px] flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-8 h-8 rounded-lg bg-[#00C68A]/10 border border-[#00C68A]/25 flex items-center justify-center text-[#00C68A] mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div className={`font-sora font-extrabold text-[#F0F4FF] tracking-tight group-hover:text-white transition-colors duration-300 leading-none mb-3 ${isLongValue ? 'text-[18px] md:text-[20px]' : 'text-[30px] md:text-[34px]'
                            }`}>
                            {parsed.value}
                          </div>
                        </div>
                        <div className="font-sans text-[11.5px] font-bold leading-[1.5] text-[#8FA8C8] uppercase tracking-[0.5px]">
                          {parsed.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 6. BUSINESS INFO STRIP */}
                <div className="bg-[#162035]/25 backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-left shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#8FA8C8]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[1.5px] text-[#8FA8C8]/60 font-bold mb-0.5 font-sans">Industry</div>
                      <div className="font-sora font-semibold text-[#F0F4FF] text-[14px] md:text-[15px]">{meta.industry}</div>
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-8 bg-[rgba(255,255,255,0.08)]" />

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#8FA8C8]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[1.5px] text-[#8FA8C8]/60 font-bold mb-0.5 font-sans">Location</div>
                      <div className="font-sora font-semibold text-[#F0F4FF] text-[14px] md:text-[15px]">{meta.location}</div>
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-8 bg-[rgba(255,255,255,0.08)]" />

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#8FA8C8]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[1.5px] text-[#8FA8C8]/60 font-bold mb-0.5 font-sans">Campaign Type</div>
                      <div className="font-sora font-semibold text-[#F0F4FF] text-[14px] md:text-[15px]">{meta.campaignType}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* SECTION 15: TESTIMONIALS (white bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-center mb-16">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-[32px] md:text-[42px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
              What California Businesses Say
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialsSection.bullets && testimonialsSection.bullets.map((bullet, idx) => {
              const { quote, name, role, location } = parseTestimonial(bullet);

              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-8 shadow-sm flex flex-col justify-between text-left transition-all duration-300 hover:border-[#00C68A]/35"
                >
                  <div className="space-y-4">
                    <div className="text-[#00C68A]/20 text-[56px] leading-[0px] font-serif select-none">“</div>
                    <p className="font-sans text-[15px] leading-[1.75] italic text-[#3D5A73] relative z-10">
                      {quote}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#E3EEF7]">
                    <h4 className="font-sora font-bold text-[14.5px] text-[#0B1829]">{name}</h4>
                    <p className="font-sans text-[12.5px] text-[#3D5A73] mt-1 font-medium">
                      {[role, location].filter(Boolean).join(', ')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 16: FULL-WIDTH IMAGE WITH OVERLAY */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[400px]">
          <img
            src={bannerImg}
            alt="California Meta Ads Success Banner"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 max-w-[1100px] text-center">
              <h2 className="text-[28px] md:text-[38px] lg:text-[42px] font-extrabold font-sora text-white leading-tight mb-4 tracking-tight max-w-[900px] mx-auto">
                80+ California Businesses Scaling Revenue with Meta Ads
              </h2>
              <p className="text-[#00C68A] font-sans font-bold text-[14px] tracking-[2.5px] uppercase">
                GROWLIMO GOLDEN STATE PERFORMANCE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: INDUSTRIES (dark bg) */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-center mb-16">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              SPECIALIZED SCALING
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              California Industries We Run Facebook Ads For
            </h2>
            {industriesSection.paragraphs && industriesSection.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[800px] mx-auto">
                {para}
              </p>
            ))}
          </div>

          {/* Interactive accordion for Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto text-left">
            {industriesSection.bullets && industriesSection.bullets.map((bullet, idx) => {
              const { title, desc } = parseSplitItem(bullet);
              const isOpen = !!expandedIndustries[idx];

              return (
                <div
                  key={idx}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.05)] rounded-[16px] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleIndustry(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-sora font-bold text-[16px] text-[#F0F4FF]">
                      {title}
                    </span>
                    <span className={`w-6 h-6 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-[rgba(255,255,255,0.05)]' : 'max-h-0'}`}
                  >
                    <div className="p-6">
                      <p className="font-sans text-[13.5px] leading-[1.7] text-[#8FA8C8]">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 18: CALIFORNIA CITIES (white bg) */}
      <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

          <div className="text-center mb-16">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              LOCALIZED GEOGRAPHIC PERFORMANCE
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight">
              Facebook Ads Across California Cities
            </h2>
            {citiesSection.paragraphs && citiesSection.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#3D5A73] mt-4 max-w-[800px] mx-auto">
                {para}
              </p>
            ))}
          </div>

          {/* Interactive accordion for cities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto text-left">
            {citiesSection.bullets && citiesSection.bullets.map((bullet, idx) => {
              const { title, desc } = parseSplitItem(bullet);
              const isOpen = !!expandedCities[idx];

              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[16px] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleCity(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-sora font-bold text-[16px] text-[#0B1829]">
                      {title}
                    </span>
                    <span className={`w-6 h-6 rounded-full bg-[rgba(0,198,138,0.06)] border border-[rgba(0,198,138,0.15)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-[#E3EEF7]' : 'max-h-0'}`}
                  >
                    <div className="p-6 bg-[#FFFFFF]">
                      <p className="font-sans text-[13.5px] leading-[1.7] text-[#3D5A73]">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 19: EXPERTISE (dark bg) */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
          <div className="max-w-[860px] mx-auto text-left">

            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              TRUST & CERTIFICATIONS
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-8">
              Managed by Meta Blueprint Certified Specialists
            </h2>

            <div className="space-y-6">
              {expertiseSection.paragraphs && expertiseSection.paragraphs.map((para, idx) => (
                <p key={idx} className="font-sans text-[16px] leading-[1.85] text-[#8FA8C8]">
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 20: PROCESS TIMELINE (dark bg) */}
      {
        processSection.steps && (
          <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
            <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

              <div className="text-center mb-16">
                <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                  WORKFLOW PIPELINE
                </span>
                <h2 className="text-[32px] md:text-[42px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
                  {processSection.title || 'Our Scaling Process'}
                </h2>
                {processSection.intro && (
                  <p className="font-sans text-[16px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[700px] mx-auto">
                    {processSection.intro}
                  </p>
                )}
              </div>

              {/* Vertical timeline steps */}
              <div className="relative max-w-[800px] mx-auto text-left">
                {/* Vertical line through timeline */}
                <div className="absolute left-[20px] md:left-1/2 transform md:translate-x-[-50%] top-2 bottom-2 w-[2px] bg-[rgba(0,198,138,0.15)] hidden sm:block" />

                <div className="space-y-12">
                  {processSection.steps.map((step, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                      <div
                        key={idx}
                        className={`relative flex flex-col sm:flex-row items-start md:items-center justify-between gap-6 md:gap-12 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-[20px] md:left-1/2 transform translate-y-[8px] sm:translate-y-0 translate-x-[-50%] w-10 h-10 rounded-full bg-[#1A2438] border-2 border-[#00C68A] shadow-lg flex items-center justify-center z-20 shrink-0 font-sora font-bold text-[#00C68A] text-[14px]">
                          {idx + 1}
                        </div>

                        {/* Content block representing timeline step */}
                        <div className="w-full md:w-[45%] pl-12 sm:pl-0">
                          <div className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[18px] p-6 shadow-md hover:border-[#00C68A]/30 transition-all duration-200">
                            <h4 className="font-sora font-bold text-[16.5px] text-[#F0F4FF] mb-3 leading-snug">
                              {step.title}
                            </h4>
                            <p className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Empty spacer block to maintain symmetry on large screens */}
                        <div className="w-[45%] hidden md:block" />
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </section>
        )
      }

      {/* SECTION 21: CTA */}
      <section className="bg-[#0C1220] py-[100px] border-t border-[rgba(255,255,255,0.04)] relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(0,198,138,0.04),transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[900px] relative z-10 text-center">
          <div className="bg-gradient-to-r from-[#1A2438] to-[#121A2A] border border-[rgba(255,255,255,0.06)] rounded-[24px] p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-[#00C68A]/5 rounded-br-full pointer-events-none" />

            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[3px] mb-4 block font-sans">
              SCALE INBOUND VOLUME NOW
            </span>

            <h2 className="text-[28px] md:text-[38px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 max-w-[720px] mx-auto tracking-tight">
              {ctaSection.heading || 'Ready to Scale Your California Business?'}
            </h2>

            {ctaSection.paragraphs && ctaSection.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#8FA8C8] mb-6 max-w-[680px] mx-auto">
                {para}
              </p>
            ))}

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <Link
                href="/contact/"
                className="inline-flex justify-center items-center gap-2 py-4 px-8 bg-[#00C68A] hover:bg-[#00B07A] text-[#080D18] font-extrabold text-[15px] rounded-[10px] shadow-lg shadow-[#00C68A]/10 hover:shadow-[#00C68A]/20 transition-all duration-200 shrink-0 text-center w-full sm:w-auto"
              >
                {ctaButtonText}
              </Link>
              <a
                href="tel:+17247506935"
                className="inline-flex justify-center items-center gap-2 py-4 px-8 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.08)] text-white font-extrabold text-[15px] rounded-[10px] transition-all duration-200 shrink-0 text-center w-full sm:w-auto"
              >
                <svg className="w-4 h-4 text-[#00C68A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.384 17.791c-1.046-.743-2.42-1.37-3.474-1.488-.506-.057-1.016.143-1.37.498l-1.486 1.486c-2.482-1.259-4.524-3.3-5.783-5.783l1.486-1.486c.355-.354.555-.864.498-1.37-.118-1.054-.745-2.428-1.488-3.474-.361-.505-.964-.851-1.634-.851H4.373c-.983 0-1.848.762-1.873 1.745C2.26 10.705 5.136 16.2 9.771 20.835c4.635 4.635 10.13 7.511 15.226 7.271.983-.025 1.745-.89 1.745-1.873v-3.76c0-.67-.346-1.273-.851-1.634l-.007-.048z" />
                </svg>
                Call (724) 750-6935
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 22: FAQ ACCORDION (dark bg) */}
      <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
        <div className="container mx-auto px-4 md:px-10 max-w-[800px]">

          <div className="text-center mb-16">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
              REPEATED ENQUIRIES
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight">
              Facebook Ads California FAQs
            </h2>
          </div>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-sora font-bold text-[15.5px] text-[#F0F4FF] pr-4">
                      {faq.question}
                    </span>
                    <span className={`w-6 h-6 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[400px] border-t border-[rgba(255,255,255,0.05)]' : 'max-h-0'}`}
                  >
                    <div className="p-6 bg-[#1A2438]">
                      <p className="font-sans text-[14px] leading-[1.75] text-[#8FA8C8]">
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

      {/* SECTION 23: INTERNAL LINKS (dark bg) */}
      {
        internalLinks.length > 0 && (
          <section className="bg-[#080D18] py-[60px] border-t border-[rgba(255,255,255,0.04)] text-center relative z-10">
            <div className="container mx-auto px-4 max-w-[900px]">
              <h4 className="font-sora font-semibold text-[13px] text-[#F0F4FF] uppercase tracking-[2px] mb-6">
                More Services Across California
              </h4>
              <div className="flex flex-wrap justify-center items-center gap-3">
                {internalLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.to}
                    className="font-sans font-bold text-[13.5px] text-[#00C68A] bg-[#00C68A]/5 hover:bg-[#00C68A]/10 border border-[#00C68A]/20 hover:border-[#00C68A]/35 py-[10px] px-5 rounded-full transition-all duration-200"
                  >
                    {link.anchor}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      }

    </div >
  );
}
