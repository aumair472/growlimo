import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionGAMT({ service, slug, onSelectPlan }) {
  const [activeFaq, setActiveFaq] = useState(null);
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
    industriesSection = {},
    ctaSection = {},
    ctaButtonText = 'Get Your Free Texas Google Ads Audit — No Commitment',
    faqs = [],
    internalLinks = [],
    images = [],
    schema
  } = service;

  // Safe image pointers mapped by keyword
  const defaultImages = [
    '/images/services/hero-google-ads-management-texas.webp',
    '/images/services/google-ads-management-texas-strategy.webp',
    '/images/services/google-ads-management-texas-results-1.webp',
    '/images/services/google-ads-management-texas-results-2.webp',
    '/images/services/google-ads-management-texas-banner.webp',
    '/images/services/google-ads-management-texas-case-study-1.webp',
    '/images/services/google-ads-management-texas-case-study-2.webp',
    '/images/services/google-ads-management-texas-case-study-3.webp'
  ];

  const allImages = Array.from(new Set([...(images || []), ...defaultImages]));

  const resolveImage = (imgSrc) => {
    if (!imgSrc) return '';
    if (imgSrc.startsWith('/') || imgSrc.startsWith('http')) return imgSrc;
    const found = allImages.find(img => img.toLowerCase().includes(imgSrc.toLowerCase()));
    return found || `/images/services/${imgSrc}`;
  };

  const getImageByKeyword = (keyword, fallback) => {
    const found = allImages.find(img => img.toLowerCase().includes(keyword.toLowerCase()));
    return found || fallback;
  };

  const imageMap = {
    hero: getImageByKeyword('hero-google-ads-management-texas', defaultImages[0]),
    strategy: getImageByKeyword('strategy', defaultImages[1]),
    results1: getImageByKeyword('results-1', defaultImages[2]),
    results2: getImageByKeyword('results-2', defaultImages[3]),
    banner: getImageByKeyword('banner', defaultImages[4]),
    caseStudy1: getImageByKeyword('case-study-1', defaultImages[5]),
    caseStudy2: getImageByKeyword('case-study-2', defaultImages[6]),
    caseStudy3: getImageByKeyword('case-study-3', defaultImages[7])
  };

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
    const dashIndex = item.indexOf(':');
    if (dashIndex !== -1) {
      const title = item.substring(0, dashIndex).trim();
      const desc = item.substring(dashIndex + 1).trim();
      return { title, desc };
    }
    return { title: item, desc: '' };
  };

  // Case Study parser for nested JSON blocks
  const parseTexasCaseStudy = (bullet, idx) => {
    if (!bullet) return null;
    const colonIdx = bullet.indexOf(':');
    if (colonIdx === -1) return null;

    const header = bullet.substring(0, colonIdx).trim();
    const description = bullet.substring(colonIdx + 1).trim();

    const parts = header.split('—');
    const client = parts[0] ? parts[0].trim() : '';
    const stat = parts[1] ? parts[1].trim() : '';

    let challenge = description;
    let solution = '';
    const rebuildIdx = description.indexOf('GrowLimo');
    if (rebuildIdx !== -1) {
      challenge = description.substring(0, rebuildIdx).trim();
      solution = description.substring(rebuildIdx).trim();
    }

    // Dynamic metrics based on case study index
    let bullets = [];
    if (idx === 0) {
      bullets = [
        { value: '$74', label: 'Cost-Per-Lead (CPL)' },
        { value: '369%', label: 'Increase in Genuine Leads' },
        { value: '7.8', label: 'Average Quality Score' },
        { value: '90 Days', label: 'Optimization Timeline' }
      ];
    } else if (idx === 1) {
      bullets = [
        { value: '$487', label: 'Cost-Per-Qualified-Inquiry' },
        { value: '383%', label: 'Increase in Cases' },
        { value: '#1-2', label: 'Google LSA Ad Positions' },
        { value: '4 Months', label: 'Results Timeline' }
      ];
    } else {
      bullets = [
        { value: '5.1x', label: 'E-Commerce Google Shopping ROAS' },
        { value: '8.4x', label: 'Display Remarketing ROAS' },
        { value: '$40,800', label: 'Monthly Generated Revenue' },
        { value: '71%', label: 'High-Margin Impression Share' }
      ];
    }

    // Derive city and segment dynamically to avoid hardcoded invented content
    const clientLower = client.toLowerCase();
    let cityMarket = 'Texas Market';
    if (clientLower.includes('dallas')) cityMarket = 'Dallas Metroplex Area';
    else if (clientLower.includes('houston')) cityMarket = 'Greater Houston Market';
    else if (clientLower.includes('austin')) cityMarket = 'Austin Metropolitan Region';

    let industrySegment = 'PPC Client';
    if (clientLower.includes('roofing')) industrySegment = 'Home Services (Roofing)';
    else if (clientLower.includes('personal injury') || clientLower.includes('law')) industrySegment = 'Legal Services (Personal Injury)';
    else if (clientLower.includes('e-commerce') || clientLower.includes('brand')) industrySegment = 'E-Commerce Retail Brand';

    return { client, stat, challenge, solution, bullets, cityMarket, industrySegment };
  };

  // Trust bar items parsed dynamically from trustBar
  const trustBarString = service.trustBar || (heroContent[1] && heroContent[1].includes('|') ? heroContent[1] : '');
  const trustItems = trustBarString
    ? trustBarString.split('|').map(s => s.trim()).filter(Boolean)
    : [];

  const parseTrustBarItem = (item) => {
    const cleaned = item.replace(/^✅\s*/, '').trim();
    if (cleaned.includes('Certified') || cleaned.includes('Partner')) {
      return { value: 'Google Partner', label: 'Certified Agency' };
    }
    if (cleaned.includes('Cost-Per-Lead') || cleaned.includes('CPL')) {
      const match = cleaned.match(/(\$\d+)/);
      const value = match ? `${match[1]} Avg CPL` : 'Low CPL';
      const label = cleaned.replace(/(\$\d+)\s*/, '').replace(/[\(\)]/g, '').trim();
      return { value, label };
    }
    if (cleaned.includes('ROAS')) {
      const match = cleaned.match(/(\d+(\.\d+)?x)/);
      const value = match ? `${match[1]} Avg ROAS` : 'High ROAS';
      const label = cleaned.replace(/(\d+(\.\d+)?x)\s*/, '').trim();
      return { value, label };
    }
    if (cleaned.includes('Rating') || cleaned.includes('★')) {
      const match = cleaned.match(/(\d+(\.\d+)?★)/);
      const value = match ? match[1] : '4.9★';
      const label = cleaned.replace(/(\d+(\.\d+)?★)\s*/, '').trim();
      return { value, label };
    }
    if (cleaned.includes('Contracts') || cleaned.includes('Contract')) {
      return { value: 'No Contracts', label: cleaned };
    }
    return { value: cleaned, label: '' };
  };

  const parsedTrustItems = trustItems.map(parseTrustBarItem);

  // Stats Card Overlay built dynamically from parsed trust items
  const statsCards = parsedTrustItems.map(item => {
    let value = item.value;
    let label = item.label;
    if (item.value === 'Google Partner') {
      value = '100%';
      label = 'Google Partner Certified Strategy & No Lock-In Contracts';
    } else if (item.value.includes('CPL')) {
      const match = item.value.match(/(\$\d+)/);
      value = match ? match[0] : '$58';
      label = 'Average Cost-Per-Qualified-Lead in Texas Service Industries';
    } else if (item.value.includes('ROAS')) {
      const match = item.value.match(/(\d+(\.\d+)?x)/);
      value = match ? match[0] : '4.4x';
      label = 'Average Client ROAS Across E-Commerce & Lead Gen Accounts';
    }
    return { value, label };
  }).slice(0, 3);

  // Dynamic Section Router Helpers
  const isProblemsSection = (sec) => {
    const heading = (sec.heading || '').toLowerCase();
    return heading.includes('waste budget') || heading.includes('underperforming') || heading.includes('problem');
  };

  const isWhyChooseSection = (sec) => {
    const heading = (sec.heading || '').toLowerCase();
    return heading.includes('why texas') || heading.includes('why choose') || heading.includes('difference');
  };

  const isServicesIntroSection = (sec) => {
    const heading = (sec.heading || '').toLowerCase();
    return heading.includes('our google ads') || heading.includes('our services');
  };

  const isNumberedService = (sec) => {
    return /^\d+\./.test(sec.heading || '');
  };

  const isCaseStudiesSection = (sec) => {
    const heading = (sec.heading || '').toLowerCase();
    return heading.includes('case studies') || heading.includes('real campaign');
  };

  const isTestimonialsSection = (sec) => {
    const heading = (sec.heading || '').toLowerCase();
    return heading.includes('what our texas clients say') || heading.includes('what our clients say') || heading.includes('testimonials') || heading.includes('voices of');
  };

  const isPricingSection = (sec) => {
    const heading = (sec.heading || '').toLowerCase();
    return heading.includes('pricing') || heading.includes('packages') || heading.includes('investment');
  };

  const isAboutSection = (sec) => {
    const heading = (sec.heading || '').toLowerCase();
    return heading.includes('about growlimo') || heading.includes('certified partner');
  };

  // Compile list of non-empty skipped sections to warn developers
  const skippedSections = contentSections.filter(sec => {
    if (!sec.heading) return false;
    return (
      !isProblemsSection(sec) &&
      !isWhyChooseSection(sec) &&
      !isServicesIntroSection(sec) &&
      !isNumberedService(sec) &&
      !isCaseStudiesSection(sec) &&
      !isTestimonialsSection(sec) &&
      !isPricingSection(sec) &&
      !isAboutSection(sec)
    );
  });

  useEffect(() => {
    if (skippedSections.length > 0) {
      console.warn(
        `Dev Warning: ${skippedSections.length} sections in contentSections are rendering as generic fallbacks because they didn't match specific block signatures.`,
        skippedSections.map(s => s.heading)
      );
    }
  }, [skippedSections]);

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
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-10 max-w-[1100px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Headline & Trust Info */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                GOOGLE PARTNER CERTIFIED PPC AGENCY
              </span>

              <h1 className="text-3xl md:text-[40px] lg:text-[44px] font-extrabold font-sora text-[#F0F4FF] leading-[1.15] mb-6 tracking-tight">
                {h1}
              </h1>

              <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[620px]">
                {subheadline}
              </p>

              {/* Dynamic Trust Cards */}
              {parsedTrustItems.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-4 w-full">
                  {parsedTrustItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-[rgba(26,36,56,0.5)] border border-[rgba(255,255,255,0.05)] rounded-[12px] px-4 py-2.5 shadow-md hover:border-[#00C68A]/35 transition-all duration-200"
                    >
                      <span className="text-[#00C68A] font-sora font-extrabold text-[14px]">{item.value}</span>
                      {item.label && (
                        <span className="text-[#8FA8C8] font-sans text-[12px] font-medium border-l border-[rgba(255,255,255,0.1)] pl-2.5">
                          {item.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-[#1A2438]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/5 rounded-bl-full pointer-events-none" />
                <h3 className="font-sora font-bold text-[16px] text-[#F0F4FF] mb-4 text-left border-b border-[rgba(255,255,255,0.06)] pb-2.5">
                  Get Your Free Texas Google Ads Audit
                </h3>
                <Form
                  slug={slug}
                  compact={true}
                  variant="contact"
                  ctaButtonText="Claim My Free Texas PPC Audit"
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
            src={imageMap.hero}
            alt="GrowLimo Texas Google Ads PPC Management Agency"
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080D18] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none" />

          {/* Dynamic Stat Cards Overlay */}
          {statsCards.length > 0 && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 max-w-[1100px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {statsCards.map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0C1220]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[18px] p-7 shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-5px] hover:border-[#00C68A]/40"
                    >
                      <div className="text-[36px] md:text-[42px] font-extrabold font-sora text-[#00C68A] mb-2 leading-none">
                        {card.value}
                      </div>
                      <p className="text-[#F0F4FF] text-[13px] md:text-[14px] leading-relaxed font-sans font-medium">
                        {card.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* HERO INTRO CARD (heroContent[0]) */}
      {heroContent[0] && (
        <section className="bg-[#FFFFFF] pt-[96px] pb-[32px] relative z-10 text-center">
          <div className="container mx-auto px-4 md:px-10 max-w-[900px]">
            <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[24px] p-8 md:p-12 shadow-sm text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#00C68A]/5 rounded-bl-full pointer-events-none" />
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                TEXAS ADVERTISING BluePrint
              </span>
              <p className="font-sans text-[16px] sm:text-[18px] leading-[1.8] text-[#1A2438] font-bold">
                {heroContent[0]}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* DYNAMIC CONTENT SECTIONS LOOP */}
      {contentSections.map((section, index) => {

        // 1. PROBLEMS SECTION
        if (isProblemsSection(section)) {
          return (
            <section key={index} className="bg-[#FFFFFF] pb-[96px] pt-[32px] relative z-10">
              <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
                <div className="text-left mb-12">
                  <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                    MARKET REALITY
                  </span>
                  <h2 className="text-[30px] md:text-[38px] font-extrabold font-sora leading-[1.2] text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
                    {section.heading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Descriptions */}
                  <div className="lg:col-span-12 space-y-6 text-left">
                    {section.paragraphs && section.paragraphs.map((para, idx) => (
                      <p key={idx} className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#3D5A73]">
                        {para}
                      </p>
                    ))}
                    {section.closingText && (
                      <div className="border-l-4 border-[#00C68A] pl-5 py-3 my-6 bg-[#00C68A]/5 rounded-r-[8px]">
                        <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] font-bold text-[#0B1829]">
                          {section.closingText}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Problems list */}
                  <div className="lg:col-span-12">
                    <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-7 shadow-sm">
                      <h3 className="font-sora font-bold text-[16.5px] text-[#0B1829] mb-6 text-left border-b border-[#E3EEF7] pb-3 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#DD6613] inline-block" />
                        7 Lethal PPC Budget Leaks We Plug
                      </h3>
                      <div className="space-y-5">
                        {section.bullets && section.bullets.map((bullet, idx) => {
                          const colonIndex = bullet.indexOf(':');
                          const title = colonIndex !== -1 ? bullet.substring(0, colonIndex).trim() : bullet;
                          const desc = colonIndex !== -1 ? bullet.substring(colonIndex + 1).trim() : '';

                          return (
                            <div key={idx} className="flex gap-3.5 items-start text-left">
                              <div className="w-[22px] h-[22px] rounded-full bg-[rgba(221,102,19,0.08)] border border-[rgba(221,102,19,0.15)] flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-[9px] h-[9px] text-[#DD6613]" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-sans text-[13.5px] font-bold text-[#0B1829] leading-tight mb-1">
                                  {title}
                                </h4>
                                {desc && (
                                  <p className="font-sans text-[12.5px] leading-relaxed text-[#3D5A73]">
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
          );
        }

        // 2. WHY CHOOSE US SECTION
        if (isWhyChooseSection(section)) {
          return (
            <section key={index} className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
              <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                  {/* Left Column: Badges & Intro */}
                  <div className="lg:col-span-5 text-left space-y-6">
                    <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                      THE GROWLIMO DIFFERENCE
                    </span>
                    <h2 className="text-[30px] md:text-[36px] font-extrabold font-sora leading-[1.2] text-[#F0F4FF] tracking-tight border-l-4 border-[#00C68A] pl-4">
                      {section.heading}
                    </h2>
                    {section.paragraphs && section.paragraphs.map((para, idx) => (
                      <p key={idx} className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8]">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Right Column: Grid of Benefit Cards */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {section.bullets && section.bullets.map((bullet, idx) => {
                        const dashIndex = bullet.indexOf('—');
                        const title = dashIndex !== -1 ? bullet.substring(0, dashIndex).trim() : bullet;
                        const desc = dashIndex !== -1 ? bullet.substring(dashIndex + 1).trim() : '';

                        const getIcon = (i) => {
                          switch (i % 6) {
                            case 0: return '🏆';
                            case 1: return '📉';
                            case 2: return '📈';
                            case 3: return '🎯';
                            case 4: return '🤝';
                            default: return '📍';
                          }
                        };

                        return (
                          <div
                            key={idx}
                            className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[16px] p-5 shadow-md hover:border-[#00C68A]/30 hover:translate-y-[-2px] transition-all duration-200 text-left flex gap-4 items-start"
                          >
                            <div className="w-[36px] h-[36px] rounded-xl bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.15)] flex items-center justify-center shrink-0 text-base">
                              {getIcon(idx)}
                            </div>
                            <div>
                              <h4 className="font-sora font-bold text-[14.5px] text-[#F0F4FF] mb-1 leading-snug">
                                {title}
                              </h4>
                              {desc && (
                                <p className="font-sans text-[12.5px] leading-relaxed text-[#8FA8C8]">
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
            </section>
          );
        }

        // 3. SERVICES INTRO SECTION
        if (isServicesIntroSection(section)) {
          return (
            <section key={index} className="bg-[#FFFFFF] pt-[96px] pb-[40px] relative z-10 border-t border-[#E3EEF7] text-left">
              <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
                <div className="max-w-[800px]">
                  <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                    CORE CAPABILITIES
                  </span>
                  <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs && section.paragraphs.map((para, idx) => (
                    <p key={idx} className="font-sans text-[16px] leading-[1.8] text-[#3D5A73] mt-5">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // 4. NUMBERED SERVICES SECTIONS (Alternating backgrounds)
        if (isNumberedService(section)) {
          const isWhiteBg = index % 2 === 1; // Alternates exactly: odd indices white, even indices dark
          const bgClass = isWhiteBg ? 'bg-[#FFFFFF] border-t border-[#E3EEF7]' : 'bg-[#0C1220] border-t border-[rgba(255,255,255,0.04)]';

          // Match Service Number Badge
          const badgeMatch = (section.heading || '').match(/^(\d+)\./);
          const numBadge = badgeMatch ? `0${badgeMatch[1]}` : '01';

          return (
            <div key={index}>
              <section className={`${bgClass} py-[96px] relative z-10 text-left`}>
                <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
                  <div className="max-w-[860px] mx-auto">

                    {/* Eyebrow and Num Badge */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-10 h-10 rounded-xl bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] flex items-center justify-center font-sora font-extrabold text-[14px]">
                        {numBadge}
                      </span>
                      <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                        PPC PERFORMANCE CAPABILITY
                      </span>
                    </div>

                    {/* Heading */}
                    <h2 className={`text-[26px] md:text-[32px] font-extrabold font-sora leading-[1.2] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                      {section.heading}
                    </h2>

                    {/* Paragraphs */}
                    {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className={`font-sans text-[15px] sm:text-[16px] leading-[1.8] mb-5 font-normal ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                        {para}
                      </p>
                    ))}

                    {/* Bullets Sublist */}
                    {section.bullets && section.bullets.length > 0 && (
                      <div className="space-y-4 my-8">
                        {section.bullets.map((bullet, bIdx) => {
                          const colonIdx = bullet.indexOf(':');
                          const title = colonIdx !== -1 ? bullet.substring(0, colonIdx).trim() : bullet;
                          const desc = colonIdx !== -1 ? bullet.substring(colonIdx + 1).trim() : '';

                          return (
                            <div key={bIdx} className="flex gap-[14px] items-start text-left">
                              <div className="w-[24px] h-[24px] rounded-full bg-[rgba(0,198,138,0.1)] border border-[rgba(0,198,138,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-[11px] h-[11px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <span className={`font-sans text-[14.5px] leading-[1.7] font-bold ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                                  {title}
                                </span>
                                {desc && (
                                  <p className={`font-sans text-[13.5px] leading-relaxed mt-0.5 ${isWhiteBg ? 'text-[#3D5A73]' : 'text-[#8FA8C8]'}`}>
                                    {desc}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Closing callout text */}
                    {section.closingText && (
                      <div className={`mt-8 p-6 rounded-[16px] border-l-4 border-[#00C68A] text-left ${isWhiteBg ? 'bg-[#F8FAFC]' : 'bg-[#1A2438]/60'}`}>
                        <p className={`font-sans text-[15px] sm:text-[16px] leading-[1.8] font-bold italic ${isWhiteBg ? 'text-[#0B1829]' : 'text-[#F0F4FF]'}`}>
                          "{section.closingText}"
                        </p>
                      </div>
                    )}

                  </div>
                </div>
              </section>

              {/* Dynamic solutions mockups placed after specific services */}
              {numBadge === '02' && imageMap.results1 && (
                <section className="relative w-full py-16 bg-[#080D18] flex justify-center border-t border-[rgba(255,255,255,0.04)]">
                  <div className="container max-w-[900px] px-4">
                    <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                      <img
                        src={imageMap.results1}
                        alt="Google Ads ROAS & Performance Optimizer Dashboard Mockup"
                        className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02] brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 left-6 right-6 text-left">
                        <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">ROAS SCALE</p>
                        <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Consistently Delivering 4.4x Average ROAS Across E-Commerce & Lead Generation Campaigns</h4>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {numBadge === '05' && imageMap.results2 && (
                <section className="relative w-full py-16 bg-[#080D18] flex justify-center border-t border-[rgba(255,255,255,0.04)]">
                  <div className="container max-w-[900px] px-4">
                    <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group">
                      <img
                        src={imageMap.results2}
                        alt="Texas YouTube & Display Remarketing Campaign Placements"
                        className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.02] brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 left-6 right-6 text-left">
                        <p className="text-[12px] text-[#00C68A] uppercase font-bold tracking-[2px] mb-1">RE-ENGAGEMENT</p>
                        <h4 className="text-[18px] md:text-[20px] text-white font-sora font-bold">Retargeting Warm Texas Search Intent with Dynamic & Interactive Visual Placements</h4>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          );
        }

        // 5. CASE STUDIES SECTION
        if (isCaseStudiesSection(section)) {
          return (
            <div key={index}>
              <section className="bg-[#0C1220] pt-[120px] pb-[60px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
                <div className="container mx-auto px-4 md:px-10 max-w-[1100px] text-center">
                  <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                    REAL PPC RESULTS
                  </span>
                  <h2 className="text-[34px] md:text-[42px] font-extrabold font-sora text-white leading-tight mb-6 tracking-tight max-w-[800px] mx-auto">
                    {section.heading}
                  </h2>
                  {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[700px] mx-auto">
                      {para}
                    </p>
                  ))}
                </div>
              </section>

              {/* INDIVIDUAL CINEMATIC CASE STUDIES */}
              {section.bullets && section.bullets.map((bullet, csIdx) => {
                const cs = parseTexasCaseStudy(bullet, csIdx);
                if (!cs) return null;

                const isAlternate = csIdx % 2 === 1;
                const bgClass = isAlternate ? 'bg-[#0A101D]' : 'bg-[#0C1220]';
                const displayMetricImage = csIdx === 0 ? imageMap.caseStudy1 : csIdx === 1 ? imageMap.caseStudy2 : imageMap.caseStudy3;

                return (
                  <section key={csIdx} className={`${bgClass} py-[80px] relative z-10 border-t border-[rgba(255,255,255,0.04)]`}>
                    <div className="absolute top-0 left-[10%] w-[40%] h-[40%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[120px] pointer-events-none" />

                    <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

                      {/* Top Label */}
                      <div className="flex items-center gap-3 mb-4 text-left">
                        <span className="text-[#00C68A] text-[12px] font-extrabold uppercase tracking-[3px] font-sans">
                          CASE STUDY 0{csIdx + 1}
                        </span>
                        <div className="h-[1px] w-12 bg-[#00C68A]/30" />
                      </div>

                      {/* Main Title */}
                      <h3 className="text-[26px] md:text-[32px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-8 tracking-tight max-w-[1000px] text-left">
                        {cs.client} — {cs.stat}
                      </h3>

                      {/* Cover Image */}
                      {displayMetricImage && (
                        <div className="relative w-full h-[280px] md:h-[440px] rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] mb-10 group">
                          <img
                            src={displayMetricImage}
                            alt={`${cs.client} case study illustration`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] brightness-[0.7] group-hover:brightness-[0.65]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/90 via-[#080D18]/20 to-transparent opacity-90 pointer-events-none" />
                        </div>
                      )}

                      {/* Story Column Breakdown */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 text-left">
                        {/* Challenge Card */}
                        <div className="bg-[#162035]/30 backdrop-blur-sm border border-[rgba(255,255,255,0.04)] rounded-[20px] p-7 shadow-lg">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10.5px] font-bold uppercase tracking-[1.5px] mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            THE CHALLENGE
                          </span>
                          <p className="font-sans text-[14.5px] sm:text-[15px] leading-[1.8] text-[#8FA8C8]">
                            {cs.challenge}
                          </p>
                        </div>

                        {/* Solution Card */}
                        <div className="bg-[#162035]/30 backdrop-blur-sm border border-[rgba(0,198,138,0.12)] rounded-[20px] p-7 shadow-lg">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C68A]/10 border border-[#00C68A]/20 text-[#00C68A] text-[10.5px] font-bold uppercase tracking-[1.5px] mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00C68A] animate-pulse" />
                            WHAT GROWLIMO CHANGED
                          </span>
                          <p className="font-sans text-[14.5px] sm:text-[15px] leading-[1.8] text-[#F0F4FF] font-medium">
                            {cs.solution}
                          </p>
                        </div>
                      </div>

                      {/* Dynamic Metric Numbers grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-left">
                        {cs.bullets.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="relative group bg-[#162035]/50 backdrop-blur-md border border-[rgba(0,198,138,0.15)] hover:border-[#00C68A] rounded-[18px] p-5.5 shadow-lg transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="text-[18px] sm:text-[20px] font-extrabold font-sora text-[#00C68A] mb-2 leading-tight">
                              {metric.value}
                            </div>
                            <div className="text-[#8FA8C8] text-[12px] leading-relaxed font-sans font-medium">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Meta details footer card */}
                      <div className="bg-[#162035]/20 backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded-[20px] p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-left shadow-md">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#00C68A]/10 border border-[#00C68A]/20 flex items-center justify-center text-[#00C68A] shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-[9px] uppercase font-extrabold text-[#00C68A] tracking-[1.5px] block mb-0.5">CLIENT AUDITED</span>
                            <span className="text-[14.5px] font-bold text-[#F0F4FF] font-sora block">{cs.client}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 md:gap-10">
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-0.5">TEXAS CITY MARKET</span>
                            <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                              {cs.cityMarket}
                            </span>
                          </div>
                          <div className="flex flex-col border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.08)] pt-3 md:pt-0 md:pl-6">
                            <span className="text-[9px] uppercase font-bold text-[#8FA8C8] tracking-[1.5px] block mb-0.5">INDUSTRY SEGMENT</span>
                            <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                              {cs.industrySegment}
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </section>
                );
              })}
            </div>
          );
        }

        // 6. TESTIMONIALS SECTION
        if (isTestimonialsSection(section)) {
          return (
            <section key={index} className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
              <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

                <div className="text-left mb-12">
                  <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                    VOICES OF AUTHORITY
                  </span>
                  <h2 className="text-[32px] md:text-[38px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
                    {section.heading}
                  </h2>
                </div>

                {/* Testimonial Quote Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.bullets && section.bullets.map((bullet, tIdx) => {
                    const { quote, name, role, location } = parseTestimonial(bullet);
                    return (
                      <div
                        key={tIdx}
                        className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[24px] p-7 shadow-sm flex flex-col justify-between hover:border-[#00C68A]/40 transition-all duration-300"
                      >
                        <div className="space-y-4">
                          <div className="text-[#DD6613] text-[40px] font-serif leading-none h-4">“</div>
                          <p className="font-sans text-[14px] sm:text-[14.5px] leading-[1.7] text-[#3D5A73] italic">
                            {quote}
                          </p>
                        </div>
                        <div className="border-t border-[#E3EEF7] pt-4 mt-6 flex flex-col items-start">
                          <span className="font-sora font-extrabold text-[14px] text-[#0B1829] block">{name}</span>
                          <span className="font-sans text-[12px] text-[#3D5A73] font-medium mt-0.5">{role}</span>
                          <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.15)] text-[#00C68A] text-[10px] font-extrabold rounded-full px-2 py-0.5 mt-2 inline-block">
                            {location}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>
          );
        }

        // 7. PRICING PLANS SECTION
        if (isPricingSection(section)) {
          return (
            <section key={index} className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
              <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

                <div className="text-center mb-16">
                  <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                    INVESTMENT OPTIONS
                  </span>
                  <h2 className="text-[32px] md:text-[40px] font-extrabold font-sora text-white leading-tight tracking-tight max-w-[800px] mx-auto">
                    {section.heading}
                  </h2>
                  {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] mt-4 max-w-[700px] mx-auto">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.bullets && section.bullets.map((bullet, bIdx) => {
                    const dashIdx = bullet.indexOf(' — ');
                    const titlePart = dashIdx !== -1 ? bullet.substring(0, dashIdx).trim() : bullet;
                    const detailPart = dashIdx !== -1 ? bullet.substring(dashIdx + 3).trim() : '';

                    const nameRegex = /^([^(]+)(?:\(([^)]+)\))?$/;
                    const match = titlePart.match(nameRegex);
                    const planName = match && match[1] ? match[1].trim() : titlePart;
                    const startingPrice = match && match[2] ? match[2].trim() : '';

                    const includesIdx = detailPart.indexOf('Includes: ');
                    const bestForPart = includesIdx !== -1 ? detailPart.substring(0, includesIdx).trim() : detailPart;
                    const includesPart = includesIdx !== -1 ? detailPart.substring(includesIdx + 10).trim() : '';

                    const featuresList = includesPart ? includesPart.split(', ').map(f => f.trim()) : [];
                    const bestForClean = bestForPart.replace(/^Best For:\s*/i, '').trim();

                    const isPopular = bIdx === 1;

                    return (
                      <div
                        key={bIdx}
                        className={`border rounded-[24px] p-7 flex flex-col justify-between relative shadow-xl hover:translate-y-[-4px] transition-all duration-300 ${isPopular
                          ? 'bg-[#1A2438] border-[#00C68A] scale-[1.03] z-20'
                          : 'bg-[#162035]/65 border-[rgba(255,255,255,0.06)]'
                          }`}
                      >
                        {isPopular && (
                          <span className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#DD6613] to-[#FB923C] text-white font-sora font-extrabold text-[10.5px] uppercase tracking-[1.5px] rounded-full py-1 px-4 leading-none">
                            MOST RECOMMENDED PLAN
                          </span>
                        )}

                        <div>
                          <h3 className="font-sora font-extrabold text-[18px] text-white tracking-tight mb-2">
                            {planName}
                          </h3>
                          <p className="font-sans text-[12px] text-[#8FA8C8] mb-6 min-h-[36px]">
                            <span className="font-bold text-[#F0F4FF]">Perfect for:</span> {bestForClean}
                          </p>

                          <div className="border-b border-[rgba(255,255,255,0.08)] pb-6 mb-6">
                            <span className="font-sora font-extrabold text-[28px] text-[#00C68A]">{startingPrice}</span>
                            <span className="font-sans text-[12px] text-[#8FA8C8] ml-1">/ month</span>
                          </div>

                          <div className="space-y-3.5 mb-8">
                            {featuresList.map((feature, fIdx) => (
                              <div key={fIdx} className="flex gap-3 items-start">
                                <div className="w-[18px] h-[18px] rounded-full bg-[rgba(0,198,138,0.1)] border border-[rgba(0,198,138,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                                  <svg className="w-[9px] h-[9px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="font-sans text-[12.5px] text-[#8FA8C8] leading-tight">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => onSelectPlan && onSelectPlan(planName)}
                          className={`w-full py-3.5 px-6 rounded-full font-sora font-extrabold text-[13.5px] transition-all duration-200 cursor-pointer ${isPopular
                            ? 'bg-gradient-to-r from-[#DD6613] to-[#FB923C] text-white hover:shadow-[0_4px_15px_rgba(221,102,19,0.3)] hover:scale-[1.02]'
                            : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white hover:bg-[rgba(255,255,255,0.08)]'
                            }`}
                        >
                          Select Plan & Onboard →
                        </button>
                      </div>
                    );
                  })}
                </div>

                {section.closingText && (
                  <p className="font-sans text-[13px] text-center text-[#8FA8C8] italic mt-10">
                    "{section.closingText}"
                  </p>
                )}

              </div>
            </section>
          );
        }

        // 8. ABOUT GROWLIMO SECTION
        if (isAboutSection(section)) {
          return (
            <section key={index} className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
              <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                  {/* Left 60%: Paragraphs */}
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans">
                      CERTIFIED AGENCY PARTNERS
                    </span>
                    <h2 className="text-[32px] md:text-[38px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
                      {section.heading}
                    </h2>
                    {section.paragraphs && section.paragraphs.map((para, idx) => (
                      <p key={idx} className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#3D5A73]">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Right 40%: Certified badges card */}
                  <div className="lg:col-span-5 w-full">
                    <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[24px] p-8 shadow-sm flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] flex items-center justify-center mb-6">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-sora font-extrabold text-[17px] text-[#0B1829] mb-3">Google Partner Authorized</h3>
                      <p className="font-sans text-[13px] leading-relaxed text-[#3D5A73] mb-6 max-w-[280px]">
                        GrowLimo is a certified Google Ads Partner, satisfying all ongoing certification and ad spend requirements.
                      </p>
                      <div className="w-full space-y-2">
                        {['Google Search Certification', 'Google Display Certification', 'Google Shopping Certification', 'Google Video Certification'].map((badge, idx) => (
                          <div key={idx} className="bg-white border border-[#E3EEF7] rounded-[10px] py-2 px-4 text-left flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#00C68A]" />
                            <span className="font-sans text-[12.5px] font-bold text-[#0B1829]">{badge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        }

        // 9. GENERIC FALLBACK FOR ANY SKIP-MATCH SECTIONS (Ensures all JSON content renders!)
        if (section.heading || (section.paragraphs && section.paragraphs.length > 0) || (section.bullets && section.bullets.length > 0) || (section.list && section.list.length > 0)) {
          return (
            <section key={index} className="bg-[#FFFFFF] py-[80px] relative z-10 border-t border-[#E3EEF7] text-left">
              <div className="container mx-auto px-4 md:px-10 max-w-[900px]">
                {section.heading && (
                  <h2 className="text-[28px] md:text-[34px] font-extrabold font-sora text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-4">
                    {section.heading}
                  </h2>
                )}

                {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#3D5A73] mb-5">
                    {para}
                  </p>
                ))}

                {((section.bullets && section.bullets.length > 0) || (section.list && section.list.length > 0)) && (
                  <div className="space-y-3.5 my-6">
                    {(section.bullets || section.list).map((item, bIdx) => {
                      const colonIdx = item.indexOf(':');
                      const title = colonIdx !== -1 ? item.substring(0, colonIdx).trim() : '';
                      const desc = colonIdx !== -1 ? item.substring(colonIdx + 1).trim() : item;

                      return (
                        <div key={bIdx} className="flex gap-3 items-start">
                          <div className="w-[18px] h-[18px] rounded-full bg-[rgba(0,198,138,0.1)] border border-[rgba(0,198,138,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-[9px] h-[9px] text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            {title && (
                              <span className="font-sans text-[14.5px] font-bold text-[#0B1829] block mb-0.5">
                                {title}
                              </span>
                            )}
                            <p className="font-sans text-[14px] text-[#3D5A73] leading-relaxed">
                              {desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {section.image && (
                  <div className="relative w-full rounded-[24px] overflow-hidden shadow-xl border border-[#E3EEF7] my-8 max-w-[800px] mx-auto">
                    <img
                      src={resolveImage(section.image)}
                      alt={section.heading || 'Texas Google Ads Campaign'}
                      className="w-full h-auto object-cover max-h-[480px]"
                    />
                  </div>
                )}

                {section.closingText && (
                  <p className="font-sans text-[14px] font-semibold text-[#0B1829] italic mt-4 border-l-2 border-[#00C68A] pl-3 py-1 bg-[#F8FAFC]">
                    {section.closingText}
                  </p>
                )}
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* TIMELINE STEPPER PROCESS (Dark Bg) */}
      {processSection.title && (
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

            <div className="max-w-[800px] mb-16">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                CAMPAIGN LIFECYCLE
              </span>
              <h2 className="text-[30px] md:text-[38px] font-extrabold font-sora leading-tight text-white tracking-tight border-l-4 border-[#00C68A] pl-4">
                {processSection.title}
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] mt-4">
                {processSection.intro}
              </p>
            </div>

            <div className="relative border-l border-[rgba(255,255,255,0.08)] ml-4 md:ml-6 space-y-12 pb-4">
              {processSection.steps && processSection.steps.map((step, idx) => (
                <div key={idx} className="relative pl-10 md:pl-14 group">
                  <div className="absolute left-[-16px] top-0.5 w-[32px] h-[32px] rounded-full bg-[#080D18] border-2 border-[#00C68A] flex items-center justify-center font-sora font-extrabold text-[12px] text-[#00C68A] shadow-[0_0_12px_rgba(0,198,138,0.25)] transition-all duration-300 group-hover:scale-110">
                    {idx + 1}
                  </div>

                  <div className="max-w-[760px] bg-[#1A2438]/40 border border-[rgba(255,255,255,0.04)] hover:border-[#00C68A]/25 rounded-[20px] p-6 sm:p-8 transition-all duration-300 shadow-md">
                    <h3 className="font-sora font-extrabold text-[16.5px] text-[#F0F4FF] mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* INDUSTRIES GRID PLAYBOOK (White Bg) */}
      {industriesSection.heading && (
        <section className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

            <div className="text-left mb-12">
              <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                VERTICAL SOLUTIONS
              </span>
              <h2 className="text-[32px] md:text-[38px] font-extrabold font-sora leading-tight text-[#0B1829] tracking-tight border-l-4 border-[#00C68A] pl-4">
                {industriesSection.heading}
              </h2>
              <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#3D5A73] mt-4 max-w-[840px]">
                {industriesSection.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industriesSection.list && industriesSection.list.map((item, idx) => {
                const { title, desc } = parseIndustry(item);
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[20px] p-6 text-left shadow-sm flex flex-col justify-between hover:border-[#00C68A]/35 transition-all duration-300 hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.15)] flex items-center justify-center text-[#00C68A] text-[15px] font-bold shrink-0">
                          💼
                        </div>
                        <h3 className="font-sora font-bold text-[14.5px] text-[#0B1829] leading-snug">
                          {title}
                        </h3>
                      </div>
                      <p className="font-sans text-[13px] leading-relaxed text-[#3D5A73]">
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* FINAL CALL TO ACTION */}
      {ctaSection.heading && (
        <section className="relative w-full py-[120px] bg-[#0C1220] overflow-hidden text-center z-10 border-t border-[rgba(255,255,255,0.04)]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#00C68A]/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="container mx-auto px-4 max-w-[800px] relative z-10">
            <h2 className="text-[30px] sm:text-[36px] md:text-[40px] font-extrabold font-sora text-white leading-tight tracking-tight mb-6">
              {ctaSection.heading}
            </h2>

            {ctaSection.paragraphs && ctaSection.paragraphs.slice(0, 1).map((para, idx) => (
              <p key={idx} className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] mb-8 max-w-[660px] mx-auto">
                {para}
              </p>
            ))}

            <button
              onClick={() => router.push('/contact/')}
              className="inline-flex items-center justify-center font-sora font-extrabold text-[14.5px] text-white tracking-[0.5px] py-4.5 px-8 rounded-full bg-gradient-to-r from-[#DD6613] to-[#FB923C] shadow-lg hover:shadow-[0_8px_25px_rgba(221,102,19,0.3)] transition-all duration-300 hover:scale-[1.03] cursor-pointer mb-8"
            >
              {ctaButtonText}
            </button>

            <p className="font-sans text-[12px] font-semibold text-[#00C68A] tracking-[1px] uppercase">
              {ctaSection.paragraphs && ctaSection.paragraphs[1]}
            </p>
          </div>
        </section>
      )}

      {/* EXPANDABLE ACCORDION FAQS */}
      {faqs.length > 0 && (
        <section className="bg-[#080D18] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
          <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">

            <div className="text-center mb-16">
              <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                QUESTIONS & ANSWERS
              </span>
              <h2 className="text-[32px] md:text-[38px] font-extrabold font-sora text-[#F0F4FF] leading-tight tracking-tight max-w-[800px] mx-auto">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-[800px] mx-auto space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[16px] overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full py-4.5 px-6 flex justify-between items-center text-left hover:bg-[#202B41] transition-colors duration-200 cursor-pointer"
                    >
                      <span className="font-sora font-bold text-[14.5px] sm:text-[15px] text-[#F0F4FF] pr-4 leading-snug">
                        {faq.question}
                      </span>
                      <span className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center text-[#8FA8C8] shrink-0">
                        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#00C68A]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100 border-t border-[rgba(255,255,255,0.04)]' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6">
                        <p className="font-sans text-[14px] leading-[1.7] text-[#8FA8C8]">
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

      {/* SIBLING INTERNAL SOLUTIONS LINKS */}
      {internalLinks.length > 0 && (
        <section className="bg-[#080D18] py-12 relative z-10 border-t border-[rgba(255,255,255,0.04)] text-center">
          <div className="container mx-auto px-4 max-w-[1100px]">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="font-sans text-[12.5px] font-bold text-[#8FA8C8] uppercase tracking-[1.5px] mr-2">Related Solutions:</span>
              {internalLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.to}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.05)] hover:border-[#00C68A]/30 text-[#8FA8C8] hover:text-white rounded-full py-2 px-5 font-sans text-[13px] font-medium shadow-sm transition-all duration-200"
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
