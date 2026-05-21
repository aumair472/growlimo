import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionDMAC({ service, slug, onSelectPlan }) {
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
    ctaSection = {},
    ctaButtonText = 'Get Your Free Audit →',
    faqs = [],
    images = [],
    schema,
    trustBar,
    industriesSection = {},
    internalLinks = [],
    areaServedName
  } = service;

  const areaServed = areaServedName || 'California';

  // Find the first valid non-empty section index
  const firstNonEmptyIndex = contentSections.findIndex(
    sec => sec && Object.keys(sec).length > 0
  );

  // 1. Safe Image Mapping using Keyword Matching
  const imageMap = {
    hero: images?.find(img => img.includes('hero')) || '/images/services/hero-digital-marketing-agency-california.webp',
    strategy: images?.find(img => img.includes('strategy')) || '/images/services/digital-marketing-agency-california-strategy.webp',
    result1: images?.find(img => img.includes('results-1')) || '/images/services/digital-marketing-agency-california-results-1.webp',
    result2: images?.find(img => img.includes('results-2')) || '/images/services/digital-marketing-agency-california-results-2.webp',
    banner: images?.find(img => img.includes('banner')) || '/images/services/digital-marketing-agency-california-banner.webp',
  };

  // 2. Parsers
  const parseFlexibleContent = (item) => {
    if (!item) return null;
    const separators = [':', '—', '-']; // Checking colon first for correct location/city title splitting
    for (const sep of separators) {
      const index = item.indexOf(sep);
      if (index > 0) {
        return {
          title: item.substring(0, index).trim(),
          desc: item.substring(index + 1).trim()
        };
      }
    }
    return {
      title: item,
      desc: ''
    };
  };

  const parseTrustCard = (item) => {
    if (!item) return { value: '', label: '' };
    const words = item.trim().split(/\s+/);
    if (item.startsWith('⭐')) {
      return {
        value: words.slice(0, 2).join(' '),
        label: words.slice(2).join(' ')
      };
    }
    if (/^[\$\d]/.test(words[0])) {
      return {
        value: words[0],
        label: words.slice(1).join(' ')
      };
    }
    if (words.length > 2) {
      return {
        value: words.slice(0, words.length - 1).join(' '),
        label: words[words.length - 1]
      };
    }
    return {
      value: words[0],
      label: words.slice(1).join(' ') || 'Certified'
    };
  };

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

  const parseCaseStudy = (bullet) => {
    if (!bullet) return { author: '', stat: '', story: '' };
    const firstDashIndex = bullet.indexOf('—');
    const colonIndex = bullet.indexOf(':', firstDashIndex);
    if (firstDashIndex !== -1 && colonIndex !== -1) {
      const author = bullet.substring(0, firstDashIndex).trim().replace(/^Case Study \d+:\s*/, '');
      const stat = bullet.substring(firstDashIndex + 1, colonIndex).trim();
      const story = bullet.substring(colonIndex + 1).trim();
      return { author, stat, story };
    }
    return { author: '', stat: '', story: bullet };
  };

  // Non-truncating challenge/strategy splitter for case studies
  const parseCaseStudyStory = (story) => {
    let challengeText = story;
    let strategyText = '';
    const splitKeywords = [
      'GrowLimo performed a full technical SEO audit',
      'GrowLimo rebuilt the campaign with individual ad groups',
      'GrowLimo built a 6-month content roadmap'
    ];
    for (const keyword of splitKeywords) {
      const kwIndex = story.toLowerCase().indexOf(keyword.toLowerCase());
      if (kwIndex !== -1) {
        challengeText = story.substring(0, kwIndex).trim();
        strategyText = story.substring(kwIndex).trim();
        break;
      }
    }
    return { challengeText, strategyText };
  };

  // Dynamic trustBar Metric Parser
  const trustBarItems = trustBar ? trustBar.split('|').map(item => item.trim()) : [];

  // 3. Smart Splitting of Industries and Locations using City Keywords
  const cityKeywords = [
    'Los Angeles',
    'San Diego',
    'San Francisco',
    'Sacramento',
    'Orange County',
    'San Jose',
    'Fresno',
    'Long Beach',
    'Inland Empire'
  ];

  const industriesList = industriesSection?.list?.filter(
    item => !cityKeywords.some(city => item.includes(city))
  ) || [];

  const locationsList = industriesSection?.list?.filter(
    item => cityKeywords.some(city => item.includes(city))
  ) || [];

  // 4. Numbered Service Sections Extraction (skipped individually, grouped in Services Intro)
  const numberedServices = contentSections.filter(
    sec => sec && sec.heading && /^\d+\.\s/.test(sec.heading)
  ) || [];

  // 5. Structure Validation & Exhaustive Content Coverage Check (Development Only)
  const verifyContentCoverage = (data) => {
    const renderedPaths = [];
    const missingPaths = [];

    const checkField = (path, value) => {
      if (value !== undefined && value !== null && (Array.isArray(value) ? value.length > 0 : Object.keys(value).length > 0 || value !== '')) {
        renderedPaths.push(path);
      } else {
        missingPaths.push(path);
      }
    };

    checkField('metaTitle', data.metaTitle);
    checkField('metaDescription', data.metaDescription);
    checkField('h1', data.h1);
    checkField('subheadline', data.subheadline);
    checkField('heroContent[0]', data.heroContent?.[0]);
    checkField('heroContent[1]', data.heroContent?.[1]);
    checkField('areaServedName', data.areaServedName);
    checkField('trustBar', data.trustBar);
    checkField('contentSections', data.contentSections);
    checkField('processSection', data.processSection);
    checkField('processSection.title', data.processSection?.title);
    checkField('processSection.intro', data.processSection?.intro);
    checkField('processSection.steps', data.processSection?.steps);
    checkField('ctaSection', data.ctaSection);
    checkField('ctaSection.heading', data.ctaSection?.heading);
    checkField('ctaSection.paragraphs', data.ctaSection?.paragraphs);
    checkField('ctaButtonText', data.ctaButtonText);
    checkField('faqs', data.faqs);
    checkField('internalLinks', data.internalLinks);
    checkField('images', data.images);
    checkField('schema', data.schema);
    checkField('industriesSection', data.industriesSection);
    checkField('industriesSection.heading', data.industriesSection?.heading);
    checkField('industriesSection.intro', data.industriesSection?.intro);
    checkField('industriesSection.list', data.industriesSection?.list);

    data.contentSections?.forEach((sec, idx) => {
      if (sec && Object.keys(sec).length > 0) {
        checkField(`contentSections[${idx}].heading`, sec.heading);
        if (sec.paragraphs) checkField(`contentSections[${idx}].paragraphs`, sec.paragraphs);
        if (sec.bullets) checkField(`contentSections[${idx}].bullets`, sec.bullets);
        if (sec.closingText) checkField(`contentSections[${idx}].closingText`, sec.closingText);
        if (sec.list) checkField(`contentSections[${idx}].list`, sec.list);
      }
    });

    console.log('[GrowLimo Dev Coverage Check] Rendered JSON paths:', renderedPaths);
    if (missingPaths.length > 0) {
      console.warn('[GrowLimo Dev Coverage Check] Missing/Unrendered JSON paths:', missingPaths);
    }
  };

  const validateSectionStructure = (sec, index) => {
    if (!sec.heading) {
      console.warn(`[GrowLimo Dev Warning] Section at index ${index} is missing a 'heading' property.`, sec);
    }
    if (!sec.paragraphs && !sec.bullets && !sec.list) {
      console.warn(`[GrowLimo Dev Warning] Section at index ${index} ("${sec.heading || 'Untitled'}") has no rendering content.`, sec);
    }
  };

  if (process.env.NODE_ENV !== 'production') {
    verifyContentCoverage(service);
  }

  // 6. Section Classifiers
  const isCaseStudiesSection = (sec) => {
    const heading = sec.heading?.toLowerCase() || '';
    return heading.includes('results we\'ve delivered') || heading.includes('case studies') || heading.includes('case study');
  };

  const isTestimonialsSection = (sec) => {
    const heading = sec.heading?.toLowerCase() || '';
    return heading.includes('businesses say') || heading.includes('testimonials') || heading.includes('reviews');
  };

  const isServicesIntroSection = (sec) => {
    const heading = sec.heading?.toLowerCase() || '';
    return heading.includes('our full-service') || heading.includes('digital marketing solutions');
  };

  const isAboutCredentialsSection = (sec) => {
    const heading = sec.heading?.toLowerCase() || '';
    return heading.includes('why growlimo has the expertise') || heading.includes('credentials') || heading.includes('certifications');
  };

  // 7. Distinct Layout Renderers
  const renderMarketRealityIntro = (sec, index) => {
    return (
      <section key={`${sec.heading || 'intro'}-${index}`} className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7]">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="text-left mb-12">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">MARKET REALITY</span>
            <h2 className="text-[30px] md:text-[38px] font-extrabold font-sora leading-[1.15] text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
              {sec.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6 text-left">
              {heroContent && heroContent.map((item, idx) => (
                <p key={idx} className="font-sans text-[17px] leading-[1.8] text-[#1A2438] font-semibold">{item}</p>
              ))}
              {sec.paragraphs && sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="font-sans text-[16px] leading-[1.8] text-[#3D5A73]">{para}</p>
              ))}
            </div>
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-[24px] overflow-hidden shadow-2xl border-4 border-[#E3EEF7] relative group">
                <img src={imageMap.strategy} alt={`GrowLimo custom marketing strategy in ${areaServed}`} className="w-full h-auto object-cover transition-transform duration-[600ms] group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderServicesIntro = (sec, index) => {
    return (
      <section key={`${sec.heading || 'services'}-${index}`} className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="max-w-[880px] mx-auto">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans mb-3">CORE SOLUTIONS</span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.18] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 text-[#F0F4FF]">
              {sec.heading}
            </h2>
            {sec.paragraphs && sec.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="font-sans text-[16px] leading-[1.8] mb-8 font-normal text-[#8FA8C8]">{para}</p>
            ))}

            {numberedServices.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {numberedServices.map((serviceSec, sIdx) => {
                  return (
                    <div key={sIdx} className="bg-[#1A2438]/50 border border-[rgba(255,255,255,0.06)] rounded-[20px] p-8 shadow-lg hover:border-[#00C68A]/40 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <h4 className="font-sora text-[17px] font-bold text-white mb-3 flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[rgba(0,198,138,0.1)] border border-[rgba(0,198,138,0.2)] text-[#00C68A] flex items-center justify-center text-xs">0{sIdx + 1}</span>
                          {serviceSec.heading?.replace(/^\d+\.\s/, '')}
                        </h4>
                        <div className="space-y-3">
                          {serviceSec.paragraphs && serviceSec.paragraphs.map((para, pIdx) => (
                            <p key={pIdx} className="font-sans text-[14.5px] leading-relaxed text-[#8FA8C8]">
                              {para}
                            </p>
                          ))}
                        </div>
                        {serviceSec.bullets && serviceSec.bullets.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {serviceSec.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex gap-2 items-start text-left">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00C68A] shrink-0 mt-2" />
                                <span className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        {serviceSec.list && serviceSec.list.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {serviceSec.list.map((item, lIdx) => (
                              <div key={lIdx} className="flex gap-2 items-start text-left">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00C68A] shrink-0 mt-2" />
                                <span className="font-sans text-[13.5px] leading-relaxed text-[#8FA8C8]">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        {serviceSec.closingText && (
                          <p className="font-sans text-[13.5px] italic text-[#00C68A] mt-4">
                            "{serviceSec.closingText}"
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

  const renderCaseStudies = (sec, index) => {
    return (
      <div key={`${sec.heading || 'casestudies'}-${index}`}>
        <section className="bg-[#0C1220] pt-[120px] pb-[60px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
              CASE STUDIES
            </span>
            <h2 className="text-[34px] md:text-[44px] lg:text-[48px] font-extrabold font-sora text-white leading-tight mb-6 tracking-tight max-w-[820px] mx-auto">
              {sec.heading}
            </h2>
            {sec.paragraphs && sec.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="font-sans text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[800px] mx-auto mb-4">{para}</p>
            ))}
          </div>
        </section>

        {sec.bullets && sec.bullets.map((bullet, bIdx) => {
          const { author, stat, story } = parseCaseStudy(bullet);
          const { challengeText, strategyText } = parseCaseStudyStory(story);
          const isAlternate = bIdx % 2 === 1;
          const bgClass = isAlternate ? 'bg-[#0A101D]' : 'bg-[#0C1220]';

          const imageSrc = bIdx === 0 ? imageMap.result1 : bIdx === 1 ? imageMap.result2 : imageMap.banner;

          return (
            <section key={bIdx} className={`${bgClass} py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]`}>
              <div className="absolute top-0 left-[12%] w-[40%] h-[40%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[120px] pointer-events-none" />

              <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#00C68A] text-[12px] font-extrabold uppercase tracking-[3px] font-sans">CASE STUDY 0{bIdx + 1}</span>
                  <div className="h-[1px] w-12 bg-[#00C68A]/30" />
                </div>

                <h3 className="text-[26px] md:text-[34px] lg:text-[40px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-8 tracking-tight max-w-[1000px] text-left">
                  {author} — {stat}
                </h3>

                <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] mb-12 group">
                  <img src={imageSrc} alt={`${author} result map`} className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-103 brightness-[0.8]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/90 via-[#080D18]/30 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="bg-[#162035]/35 backdrop-blur-sm border border-[rgba(255,255,255,0.04)] rounded-[20px] p-8 text-left hover:border-[#00C68A]/20 transition-all duration-300 shadow-lg">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-[1.5px] mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />THE CHALLENGE
                    </span>
                    <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">{challengeText}</p>
                  </div>

                  <div className="bg-[#162035]/35 backdrop-blur-sm border border-[rgba(0,198,138,0.12)] rounded-[20px] p-8 text-left hover:border-[#00C68A]/30 transition-all duration-300 shadow-lg">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C68A]/10 border border-[#00C68A]/20 text-[#00C68A] text-[11px] font-bold uppercase tracking-[1.5px] mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C68A] animate-pulse" />WHAT GROWLIMO CHANGED
                    </span>
                    <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#F0F4FF] font-medium">
                      {strategyText || 'GrowLimo deployed specialized SEO architectures and certified campaign optimizations to boost dynamic visibility.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    );
  };

  const renderTestimonials = (sec, index) => {
    return (
      <section key={`${sec.heading || 'testimonials'}-${index}`} className="bg-[#0A101D] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
            CLIENT REVIEWS
          </span>
          <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-12 tracking-tight max-w-[800px] mx-auto">
            {sec.heading}
          </h2>
          {sec.paragraphs && sec.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="font-sans text-[16px] leading-[1.8] text-[#8FA8C8] max-w-[800px] mx-auto mb-6">{para}</p>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sec.bullets && sec.bullets.map((bullet, bIdx) => {
              const { quote, name, location } = parseTestimonial(bullet);
              return (
                <div key={bIdx} className="bg-[#162035]/40 border border-[rgba(255,255,255,0.06)] rounded-[24px] p-8 text-left flex flex-col justify-between hover:-translate-y-1 transition-transform">
                  <p className="font-sans text-[15px] italic text-[#8FA8C8] mb-8 leading-relaxed">"{quote}"</p>
                  <div>
                    <div className="flex text-[#00C68A] mb-2">★★★★★</div>
                    <p className="font-sans text-[14px] font-bold text-white">{name}</p>
                    <p className="font-sans text-[12px] text-[#3D5A73]">{location}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  const renderAboutCredentials = (sec, index) => {
    return (
      <section key={`${sec.heading || 'about'}-${index}`} className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="max-w-[880px] mx-auto">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans mb-3">EXPERTISE</span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.18] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 text-[#F0F4FF]">
              {sec.heading}
            </h2>
            <div className="space-y-6 mb-10">
              {sec.paragraphs && sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="font-sans text-[16px] leading-[1.8] font-normal text-[#8FA8C8]">{para}</p>
              ))}
            </div>

            {sec.bullets && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {sec.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-3 bg-[#162035]/35 border border-[rgba(255,255,255,0.04)] rounded-[14px] px-5 py-3.5 hover:border-[#00C68A]/30 transition-all duration-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00C68A]" />
                    <span className="text-white font-sans text-[14.5px] font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            )}

            {sec.closingText && (
              <div className="bg-[rgba(0,198,138,0.04)] border border-[rgba(0,198,138,0.15)] rounded-[20px] p-6 sm:p-8 mt-6">
                <p className="font-sans text-[15px] leading-[1.8] text-[#8FA8C8] italic">
                  "{sec.closingText}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

  const renderFallbackSection = (sec, index) => {
    const isDark = index % 2 === 1;
    const bgClass = isDark ? 'bg-[#0A101D] text-[#8FA8C8]' : 'bg-[#FFFFFF] text-[#3D5A73]';
    const titleClass = isDark ? 'text-[#F0F4FF]' : 'text-[#0B1829]';
    const borderClass = isDark ? 'border-[rgba(255,255,255,0.04)]' : 'border-[#E3EEF7]';

    return (
      <section key={`${sec.heading || 'fallback'}-${index}`} className={`${bgClass} py-[96px] relative z-10 border-t ${borderClass} text-left`}>
        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="max-w-[880px] mx-auto">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans mb-3">ADDITIONAL INFO</span>
            <h2 className={`text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.18] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 ${titleClass}`}>
              {sec.heading}
            </h2>
            {sec.paragraphs && sec.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="font-sans text-[16px] leading-[1.8] mb-6">{para}</p>
            ))}

            {sec.bullets && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {sec.bullets.map((bullet, bIdx) => {
                  const parsed = parseFlexibleContent(bullet);
                  if (!parsed) return null;
                  if (!parsed.desc) {
                    return (
                      <div key={bIdx} className={`rounded-[16px] p-5 border ${isDark ? 'bg-[#162035]/50 border-[rgba(255,255,255,0.06)]' : 'bg-[#F8FAFC] border-[#E3EEF7]'} hover:shadow-lg transition-all duration-300 flex items-start gap-3`}>
                        <span className="w-2 h-2 rounded-full bg-[#00C68A] shrink-0 mt-2" />
                        <p className="font-sans text-[15px] leading-relaxed">{parsed.title}</p>
                      </div>
                    );
                  }
                  return (
                    <div key={bIdx} className={`rounded-[16px] p-6 border ${isDark ? 'bg-[#162035]/50 border-[rgba(255,255,255,0.06)]' : 'bg-[#F8FAFC] border-[#E3EEF7]'} hover:shadow-lg transition-all duration-300`}>
                      <h4 className={`font-sora text-[16px] font-bold mb-2 ${isDark ? 'text-white' : 'text-[#0B1829]'}`}>{parsed.title}</h4>
                      <p className="font-sans text-[14px] leading-relaxed">{parsed.desc}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {sec.list && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {sec.list.map((item, lIdx) => {
                  const parsed = parseFlexibleContent(item);
                  if (!parsed) return null;
                  if (!parsed.desc) {
                    return (
                      <div key={lIdx} className={`rounded-[16px] p-5 border ${isDark ? 'bg-[#162035]/50 border-[rgba(255,255,255,0.06)]' : 'bg-[#F8FAFC] border-[#E3EEF7]'} hover:shadow-lg transition-all duration-300 flex items-start gap-3`}>
                        <span className="w-2 h-2 rounded-full bg-[#00C68A] shrink-0 mt-2" />
                        <p className="font-sans text-[15px] leading-relaxed">{parsed.title}</p>
                      </div>
                    );
                  }
                  return (
                    <div key={lIdx} className={`rounded-[16px] p-6 border ${isDark ? 'bg-[#162035]/50 border-[rgba(255,255,255,0.06)]' : 'bg-[#F8FAFC] border-[#E3EEF7]'} hover:shadow-lg transition-all duration-300`}>
                      <h4 className={`font-sora text-[16px] font-bold mb-2 ${isDark ? 'text-white' : 'text-[#0B1829]'}`}>{parsed.title}</h4>
                      <p className="font-sans text-[14px] leading-relaxed">{parsed.desc}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {sec.closingText && (
              <p className="font-sans text-[15px] italic mt-8 leading-[1.8]">
                {sec.closingText}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  };

  const renderDynamicSection = (section, index) => {
    if (!section || Object.keys(section).length === 0) return null;

    if (process.env.NODE_ENV !== 'production') {
      validateSectionStructure(section, index);
    }

    // Numbered sections are rendered as a custom grid inside their parent intro section
    if (section.heading && /^\d+\.\s/.test(section.heading)) {
      return null;
    }

    if (isCaseStudiesSection(section)) {
      return renderCaseStudies(section, index);
    }

    if (isTestimonialsSection(section)) {
      return renderTestimonials(section, index);
    }

    if (isServicesIntroSection(section)) {
      return renderServicesIntro(section, index);
    }

    if (index === firstNonEmptyIndex && firstNonEmptyIndex !== -1) {
      return renderMarketRealityIntro(section, index);
    }

    if (isAboutCredentialsSection(section)) {
      return renderAboutCredentials(section, index);
    }

    return renderFallbackSection(section, index);
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

      {/* Hero Section */}
      <section className="bg-[#080D18] text-white pt-[120px] pb-[80px] relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.05)] blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[120px] pointer-events-none animate-pulse duration-[10000ms]" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                {areaServed.toUpperCase()} DIGITAL MARKETING AGENCY
              </span>

              <h1 className="text-3xl md:text-[42px] lg:text-[46px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[16px] sm:text-[17px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[660px]">
                {subheadline}
              </p>

              <div className="flex flex-wrap gap-4 w-full">
                {[
                  { value: '🏆 Performance-Driven', label: 'Revenue Outcomes' },
                  { value: '📍 California Market', label: 'City-Level Strategies' },
                  { value: '📈 $2.3M+', label: 'Tracked Revenue Generated' }
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

            <div className="lg:col-span-6 w-full">
              <div className="bg-[#1A2438]/85 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[24px] p-7 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-[90px] h-[90px] bg-[#00C68A]/5 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] mb-3 text-left border-b border-[rgba(255,255,255,0.06)] pb-2.5">
                  Get Your Free Marketing Audit
                </h3>
                <p className="text-[13px] text-[#8FA8C8] text-left mb-5">
                  We'll analyze your organic search positions, paid media, and competitors at no commitment.
                </p>
                <Form slug={slug} compact={true} variant="contact" ctaButtonText={ctaButtonText} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats / Trust Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[400px]">
          <img src={imageMap.hero} alt={`${areaServed} digital marketing system`} className="w-full h-full object-cover brightness-[0.35]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D18] via-transparent to-[#FFFFFF]" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto px-4 max-w-[1200px]">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                {trustBarItems.map((item, idx) => {
                  const card = parseTrustCard(item);
                  return (
                    <div key={idx} className="bg-[#0C1220]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-4px] hover:border-[#00C68A]/40 justify-center min-h-[140px]">
                      <div className="text-[22px] sm:text-[26px] md:text-[30px] font-extrabold font-sora text-[#00C68A] mb-2 leading-none">{card.value}</div>
                      <p className="text-[#F0F4FF] text-[11.5px] sm:text-[12px] md:text-[13px] leading-relaxed font-sans font-medium">{card.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Sections Loop */}
      {contentSections.map((section, index) => renderDynamicSection(section, index))}

      {/* Top-Level Industries Section (Vertical Expertise) */}
      {industriesSection && (
        <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans mb-3">VERTICAL EXPERTISE</span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.18] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 text-[#0B1829]">
              {industriesSection.heading || `${areaServed} Industries We Specialize In`}
            </h2>
            {industriesSection.intro && (
              <p className="font-sans text-[16px] leading-[1.8] mb-8 font-normal text-[#3D5A73] max-w-[800px]">{industriesSection.intro}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {industriesList.map((bullet, idx) => {
                const parsed = parseFlexibleContent(bullet);
                if (!parsed) return null;
                return (
                  <div key={idx} className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[16px] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-sora text-[15px] font-bold text-[#0B1829] mb-3 pb-2 border-b border-[#E3EEF7]">{parsed.title}</h4>
                      <p className="font-sans text-[13.5px] leading-relaxed text-[#3D5A73]">{parsed.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Top-Level Process Section */}
      {processSection && processSection.steps && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans mb-3">METHODOLOGY</span>
            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.18] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 text-[#F0F4FF] max-w-[800px]">
              {processSection.title}
            </h2>
            {processSection.intro && (
              <p className="font-sans text-[16px] leading-[1.8] mb-12 font-normal text-[#8FA8C8] max-w-[800px]">{processSection.intro}</p>
            )}

            <div className="space-y-6 max-w-[900px]">
              {processSection.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start bg-[#162035]/50 border border-[rgba(255,255,255,0.04)] rounded-[20px] p-6 sm:p-8 hover:border-[#00C68A]/30 transition-colors">
                  <div className="w-[48px] h-[48px] rounded-[14px] bg-[rgba(0,198,138,0.1)] border border-[rgba(0,198,138,0.2)] text-[#00C68A] font-sora font-extrabold text-[18px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-sora text-[18px] font-bold text-white mb-2">{step.title}</h4>
                    <p className="font-sans text-[15px] leading-relaxed text-[#8FA8C8]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Top-Level Locations Section (Splitted City Locations) */}
      {locationsList.length > 0 && (
        <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans mb-3">{areaServed.toUpperCase()} CITY-LEVEL EXPERTISE</span>
                <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.18] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 text-[#0B1829]">
                  {areaServed} City-Level Digital Marketing Expertise
                </h2>
                <p className="font-sans text-[16px] leading-[1.8] mb-8 font-normal text-[#3D5A73]">
                  GrowLimo serves key metropolitan areas across {areaServed}. We build localized search strategies and customized regional advertising campaigns tailored to the distinct competitive environments of each city.
                </p>
                <div className="rounded-[20px] overflow-hidden shadow-lg border-4 border-[#E3EEF7] mt-8 hidden lg:block">
                  <img src={imageMap.result2} alt={`${areaServed} digital marketing map locations`} className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[24px] p-8 space-y-5 shadow-sm">
                  {locationsList.map((bullet, idx) => {
                    const parsed = parseFlexibleContent(bullet);
                    if (!parsed) return null;
                    return (
                      <div key={idx} className="flex gap-4 items-start border-b border-[#E3EEF7] pb-4 last:border-0 last:pb-0">
                        <div className="w-[32px] h-[32px] rounded-full bg-[#00C68A]/10 text-[#00C68A] flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <div>
                          <h4 className="font-sora text-[15px] font-bold text-[#0B1829] mb-1">{parsed.title}</h4>
                          <p className="font-sans text-[14px] leading-relaxed text-[#3D5A73]">{parsed.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {faqs && faqs.length > 0 && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
          <div className="container mx-auto px-4 max-w-[800px] text-center">
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">CLARITY</span>
            <h2 className="text-[26px] md:text-[36px] font-extrabold font-sora text-white mb-10 tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-4 text-left">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#162035]/60 border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden transition-all duration-300 hover:border-[#00C68A]/30">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex justify-between items-center bg-transparent cursor-pointer"
                  >
                    <span className="font-sora font-bold text-[15px] text-[#F0F4FF] pr-4">{faq.question}</span>
                    <span className={`text-[#00C68A] transition-transform duration-300 shrink-0 ${activeFaq === index ? 'rotate-180' : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-6 pt-1 border-t border-[rgba(255,255,255,0.04)]">
                      <p className="font-sans text-[14.5px] text-[#8FA8C8] leading-[1.8]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links Navigation Cards */}
      {internalLinks && internalLinks.length > 0 && (
        <section className="bg-[#0C1220] py-[80px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
          <div className="container mx-auto px-4 max-w-[1000px]">
            <span className="text-[#00C68A] text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">EXPLORE MORE SERVICES</span>
            <h3 className="font-sora font-bold text-[22px] text-white mb-8">{areaServed} Digital Marketing Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {internalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.to || '#'}
                  className="bg-[#162035]/40 border border-[rgba(255,255,255,0.06)] rounded-[16px] px-6 py-5 text-center text-[#8FA8C8] hover:text-[#00C68A] hover:border-[#00C68A]/40 transition-all duration-300 shadow-md hover:shadow-[0_4px_20px_rgba(0,198,138,0.1)] hover:-translate-y-0.5 font-sora font-semibold text-[14px]"
                >
                  {link.anchor}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {ctaSection && (
        <section className="bg-[#0A101D] py-[100px] relative z-10 border-t border-[#00C68A]/20">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,198,138,0.05)] to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 max-w-[1000px] text-center relative z-20">
            <h2 className="text-[32px] md:text-[42px] font-extrabold font-sora text-white mb-6 tracking-tight leading-tight">
              {ctaSection.heading}
            </h2>
            {ctaSection.paragraphs && ctaSection.paragraphs.map((para, idx) => (
              <p key={idx} className="font-sans text-[17px] text-[#8FA8C8] mb-6 max-w-[760px] mx-auto leading-[1.8]">
                {para}
              </p>
            ))}
            <div className="mt-10">
              <Link href="/contact/" className="inline-flex items-center justify-center bg-gradient-to-r from-[#DD6613] to-[#FB923C] hover:from-[#C55A10] hover:to-[#F97316] text-white font-sora font-bold text-[15px] py-[16px] px-[36px] rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(221,102,19,0.3)] hover:shadow-[0_6px_25px_rgba(221,102,19,0.4)] hover:-translate-y-1">
                {ctaButtonText}
              </Link>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
