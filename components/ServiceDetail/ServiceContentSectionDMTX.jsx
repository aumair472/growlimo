import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionDMTX({ service, slug, onSelectPlan }) {
    const [activeFaq, setActiveFaq] = useState(null);

    if (!service) return null;

    const {
        metaTitle,
        metaDescription,
        h1,
        subheadline,
        heroContent = [],
        trustBar,
        contentSections = [],
        processSection = {},
        ctaSection = {},
        ctaButtonText = 'Get Your Free Texas Digital Marketing Audit →',
        faqs = [],
        internalLinks = [],
        images = [],
        schema
    } = service;

    const areaServed = 'Texas';

    // 1. Safe Image Mapping using Keyword Matching
    const imageMap = {
        hero: images?.find(img => img.includes('hero')) || '/images/services/hero-digital-marketing-agency-texas.webp',
        strategy: images?.find(img => img.includes('strategy')) || '/images/services/digital-marketing-agency-texas-strategy.webp',
        result1: images?.find(img => img.includes('results-1')) || '/images/services/digital-marketing-agency-texas-results-1.webp',
        result2: images?.find(img => img.includes('results-2')) || '/images/services/digital-marketing-agency-texas-results-2.webp',
        banner: images?.find(img => img.includes('banner')) || '/images/services/digital-marketing-agency-texas-banner.webp',
    };

    // 2. Parsers
    const parseFlexibleContent = (item) => {
        if (!item) return null;
        const separators = [':', '—', '-'];
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
        const trimmed = item.trim();
        const firstWordMatch = trimmed.match(/^([✅⭐\d.x+★%-]+)\s+(.+)$/i);
        if (firstWordMatch) {
            return {
                value: firstWordMatch[1],
                label: firstWordMatch[2]
            };
        }
        return { value: '✓', label: trimmed };
    };

    const parseTestimonial = (bullet) => {
        if (!bullet) return { quote: '', name: '', location: '' };
        const lastDashIndex = bullet.lastIndexOf('—');
        if (lastDashIndex !== -1) {
            const quote = bullet.substring(0, lastDashIndex).trim().replace(/^"|"$/g, '');
            const rest = bullet.substring(lastDashIndex + 1).trim();
            const commaIndex = rest.indexOf(',');
            if (commaIndex !== -1) {
                const name = rest.substring(0, commaIndex).trim();
                const location = rest.substring(commaIndex + 1).trim();
                return { quote, name, location };
            }
            return { quote, name: rest, location: '' };
        }
        return { quote: bullet.replace(/^"|"$/g, ''), name: '', location: '' };
    };

    // 3. Dynamic trustBar Metric Parser
    const trustBarItems = trustBar ? trustBar.split('|').map(item => item.trim()).filter(Boolean) : [];

    // 4. Smart Splitting of Industries and Locations using City Keywords
    const cityKeywords = [
        'Dallas',
        'Houston',
        'Austin',
        'San Antonio',
        'Fort Worth',
        'Lubbock',
        'Amarillo',
        'Corpus Christi',
        'Midland-Odessa',
        'Waco',
        'Tyler',
        'Beaumont',
        'Plano',
        'Frisco',
        'McKinney',
        'Irving',
        'Arlington',
        'Garland'
    ];

    // Collect all bullets from industries/locations sections dynamically to perform split
    const industriesSectionObj = contentSections.find(sec => sec.heading?.toLowerCase().includes('industries we serve'));
    const locationsSectionObj = contentSections.find(sec => sec.heading?.toLowerCase().includes('across all of texas') || sec.heading?.toLowerCase().includes('across all of California'));

    const allBullets = [
        ...(industriesSectionObj?.bullets || []),
        ...(locationsSectionObj?.bullets || [])
    ];

    const industriesList = allBullets.filter(item => {
        const trimmed = item.trim().toLowerCase();
        return !cityKeywords.some(city => trimmed.startsWith(city.toLowerCase())) && !trimmed.startsWith('smaller');
    });

    const locationsList = allBullets.filter(item => {
        const trimmed = item.trim().toLowerCase();
        return cityKeywords.some(city => trimmed.startsWith(city.toLowerCase())) || trimmed.startsWith('smaller');
    });

    // 5. Numbered Service Sections Extraction (grouped in Services Intro grid)
    const numberedServices = contentSections.filter(
        sec => sec && sec.heading && /^\d+\.\s/.test(sec.heading)
    ) || [];

    // Find first valid non-empty section index for Market Reality intro rendering
    const firstNonEmptyIndex = contentSections.findIndex(
        sec => sec && Object.keys(sec).length > 0
    );

    // 6. Structure Validation & Exhaustive Content Coverage Check (Development Only)
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

    // 7. Section Classifiers
    const isCaseStudiesIntro = (sec) => {
        const heading = sec.heading?.toLowerCase() || '';
        return heading.includes('case studies') && !heading.includes('case study 1') && !heading.includes('case study 2') && !heading.includes('case study 3');
    };

    const isCaseStudyCard = (sec) => {
        const heading = sec.heading?.toLowerCase() || '';
        return heading.includes('case study') && (heading.includes('case study 1') || heading.includes('case study 2') || heading.includes('case study 3'));
    };

    const isTestimonialsSection = (sec) => {
        const heading = sec.heading?.toLowerCase() || '';
        return heading.includes('what texas businesses say') || heading.includes('testimonials') || heading.includes('reviews');
    };

    const isServicesIntroSection = (sec) => {
        const heading = sec.heading?.toLowerCase() || '';
        return heading.includes('our digital marketing services') || heading.includes('core solutions');
    };

    const isAboutCredentialsSection = (sec) => {
        const heading = sec.heading?.toLowerCase() || '';
        return heading.includes('built on expertise') || heading.includes('credentials') || heading.includes('certifications') || heading.includes('why growlimo');
    };

    const isIndustriesSection = (sec) => {
        const heading = sec.heading?.toLowerCase() || '';
        return heading.includes('industries we serve');
    };

    const isLocationsSection = (sec) => {
        const heading = sec.heading?.toLowerCase() || '';
        return heading.includes('services across all of texas') || heading.includes('digital marketing services across all');
    };

    // 8. Layout Renderers
    const renderMarketRealityIntro = (sec, index) => {
        return (
            <section key={`${sec.heading || 'intro'}-${index}`} className="bg-[#FFFFFF] py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
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
                    {sec.bullets && sec.bullets.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            {sec.bullets.map((bullet, bIdx) => {
                                const parsed = parseFlexibleContent(bullet);
                                if (!parsed) return null;
                                return (
                                    <div key={bIdx} className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[16px] p-6 hover:shadow-lg transition-all duration-300">
                                        <h4 className="font-sora text-[16px] font-bold text-[#0B1829] mb-2">{parsed.title}</h4>
                                        <p className="font-sans text-[14px] leading-relaxed text-[#3D5A73]">{parsed.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {sec.closingText && (
                        <p className="text-[#00C68A] text-[16px] leading-[1.8] font-semibold mt-8 block">
                            {sec.closingText}
                        </p>
                    )}
                </div>
            </section>
        );
    };

    const renderServicesIntro = (sec, index) => {
        return (
            <div key={`${sec.heading || 'services'}-${index}`}>
                <section className="bg-white py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
                    <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-5">
                                <img src={imageMap.strategy} alt="Texas Digital Marketing Strategy" className="rounded-[16px] shadow-2xl w-full" />
                            </div>
                            <div className="lg:col-span-7">
                                <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans mb-3">CORE SOLUTIONS</span>
                                <h2 className="font-sora font-extrabold text-[28px] md:text-[36px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                                    {sec.heading}
                                </h2>
                                {sec.paragraphs && sec.paragraphs.map((para, idx) => (
                                    <p key={idx} className="text-[#3D5A73] text-[16px] leading-[1.8] mb-6">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 9 Banner integrated smoothly at bottom of core solutions */}
                <section className="relative w-full h-[500px] overflow-hidden">
                    <img src={imageMap.result1} alt="Texas Digital Marketing Results Dashboard" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,18,32,0.95)] to-transparent flex items-center">
                        <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                            <div className="max-w-[600px] text-left">
                                <h3 className="font-sora font-extrabold text-[36px] text-[#F0F4FF] mb-4">
                                    Multi-Channel Performance Tracking
                                </h3>
                                <p className="text-[#8FA8C8] text-[18px] leading-[1.7]">
                                    Unified Texas digital marketing dashboard tracking SEO, Google Ads, Meta Ads, reviews, and email — all channels optimized together for maximum ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };

    const renderServiceDetailSection = (sec, index) => {
        const serviceIndex = numberedServices.findIndex(s => s.heading === sec.heading);
        const serviceNumber = serviceIndex !== -1 ? serviceIndex + 1 : 1;
        const isDark = serviceIndex % 2 === 1;

        const bgClass = isDark ? 'bg-[#0C1220] text-[#8FA8C8]' : 'bg-[#FFFFFF] text-[#3D5A73]';
        const titleClass = isDark ? 'text-[#F0F4FF]' : 'text-[#0B1829]';
        const borderClass = isDark ? 'border-[rgba(255,255,255,0.04)]' : 'border-[#E3EEF7]';
        const displayHeading = sec.heading ? sec.heading.replace(/^\d+\.\s/, '') : '';
        const serviceNumberFormatted = serviceNumber < 10 ? `0${serviceNumber}` : serviceNumber;

        return (
            <section key={`${sec.heading || 'service-detail'}-${index}`} className={`${bgClass} py-[96px] relative z-10 border-t ${borderClass} text-left`}>
                {isDark && <div className="absolute top-0 left-[12%] w-[40%] h-[40%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[120px] pointer-events-none" />}
                
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <div className="max-w-[900px] mx-auto">
                        <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
                            SERVICE {serviceNumberFormatted}
                        </span>
                        
                        <h2 className={`text-[30px] md:text-[36px] font-extrabold font-sora leading-[1.2] mb-8 tracking-tight border-l-4 border-[#00C68A] pl-4 ${titleClass}`}>
                            {displayHeading}
                        </h2>

                        <div className="space-y-6 text-left mb-8">
                            {sec.paragraphs && sec.paragraphs.map((para, pIdx) => (
                                <p key={pIdx} className="font-sans text-[16px] leading-[1.8] font-normal">{para}</p>
                            ))}
                        </div>

                        {sec.image && (
                            <div className="mt-8 mb-8 rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] relative group max-w-[800px]">
                                <img src={sec.image} alt={displayHeading} className="w-full h-auto object-cover transition-transform duration-[600ms] group-hover:scale-103" />
                            </div>
                        )}

                        {sec.bullets && sec.bullets.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                {sec.bullets.map((bullet, bIdx) => {
                                    const parsed = parseFlexibleContent(bullet);
                                    if (!parsed) return null;
                                    return (
                                        <div key={bIdx} className={`rounded-[20px] p-6 border ${isDark ? 'bg-[#162035]/50 border-[rgba(255,255,255,0.04)] text-[#8FA8C8]' : 'bg-[#F8FAFC] border-[#E3EEF7] text-[#3D5A73]'} hover:shadow-lg hover:border-[#00C68A]/30 transition-all duration-300 flex items-start gap-4`}>
                                            <div className="w-[32px] h-[32px] rounded-full bg-[#00C68A]/10 text-[#00C68A] flex items-center justify-center shrink-0">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <div className="text-left flex-1">
                                                {parsed.desc ? (
                                                    <>
                                                        <h4 className={`font-sora text-[15px] font-bold mb-1.5 ${isDark ? 'text-white' : 'text-[#0B1829]'}`}>{parsed.title}</h4>
                                                        <p className="font-sans text-[14px] leading-relaxed">{parsed.desc}</p>
                                                    </>
                                                ) : (
                                                    <p className={`font-sans text-[14.5px] leading-relaxed font-semibold ${isDark ? 'text-white' : 'text-[#0B1829]'}`}>{parsed.title}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {sec.list && sec.list.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                {sec.list.map((item, lIdx) => {
                                    const parsed = parseFlexibleContent(item);
                                    if (!parsed) return null;
                                    return (
                                        <div key={lIdx} className={`rounded-[20px] p-6 border ${isDark ? 'bg-[#162035]/50 border-[rgba(255,255,255,0.04)] text-[#8FA8C8]' : 'bg-[#F8FAFC] border-[#E3EEF7] text-[#3D5A73]'} hover:shadow-lg hover:border-[#00C68A]/30 transition-all duration-300 flex items-start gap-4`}>
                                            <div className="w-[32px] h-[32px] rounded-full bg-[#00C68A]/10 text-[#00C68A] flex items-center justify-center shrink-0">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <div className="text-left flex-1">
                                                {parsed.desc ? (
                                                    <>
                                                        <h4 className={`font-sora text-[15px] font-bold mb-1.5 ${isDark ? 'text-white' : 'text-[#0B1829]'}`}>{parsed.title}</h4>
                                                        <p className="font-sans text-[14px] leading-relaxed">{parsed.desc}</p>
                                                    </>
                                                ) : (
                                                    <p className={`font-sans text-[14.5px] leading-relaxed font-semibold ${isDark ? 'text-white' : 'text-[#0B1829]'}`}>{parsed.title}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {sec.closingText && (
                            <div className={`mt-10 rounded-[20px] p-6 sm:p-8 border-l-4 border-[#00C68A] ${isDark ? 'bg-[#162035]/30 border-[rgba(255,255,255,0.04)] text-[#8FA8C8]' : 'bg-[#F8FAFC] border-[#E3EEF7] text-[#3D5A73]'}`}>
                                <p className="font-sans text-[15.5px] leading-[1.8] italic font-semibold">
                                    "{sec.closingText}"
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    };

    const renderCaseStudiesIntro = (sec, index) => {
        return (
            <section key={`${sec.heading || 'cs-intro'}-${index}`} className="bg-white py-[96px] border-t border-[#E3EEF7] text-center">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                        CASE STUDIES
                    </span>
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#0B1829] mb-6 max-w-[820px] mx-auto">
                        {sec.heading}
                    </h2>
                    {sec.paragraphs && sec.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#3D5A73] text-[16px] leading-[1.8] mb-6 max-w-[900px] mx-auto">
                            {para}
                        </p>
                    ))}
                </div>
            </section>
        );
    };

    const renderCaseStudyCard = (sec, index) => {
        const isCaseStudy1 = sec.heading?.includes('Case Study 1');
        const isCaseStudy2 = sec.heading?.includes('Case Study 2');
        const isCaseStudy3 = sec.heading?.includes('Case Study 3');

        const isDark = isCaseStudy1 || isCaseStudy3;
        const bgClass = isDark ? 'bg-[#0C1220]' : 'bg-white';
        const titleClass = isDark ? 'text-[#F0F4FF]' : 'text-[#0B1829]';
        const textClass = isDark ? 'text-[#8FA8C8]' : 'text-[#3D5A73]';
        const borderClass = isDark ? 'border-[rgba(255,255,255,0.04)]' : 'border-[#E3EEF7]';

        const imageSrc = sec.image || (isCaseStudy1 ? imageMap.result1 : isCaseStudy2 ? imageMap.result2 : imageMap.banner);

        const challengeText = sec.paragraphs?.[0] || '';
        const strategyText = sec.paragraphs?.[1] || '';

        return (
            <div key={`${sec.heading || 'cs-card'}-${index}`}>
                <section className={`${bgClass} py-[96px] relative z-10 border-t ${borderClass}`}>
                    {isDark && <div className="absolute top-0 left-[12%] w-[40%] h-[40%] rounded-full bg-[rgba(0,198,138,0.02)] blur-[120px] pointer-events-none" />}

                    <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[#00C68A] text-[12px] font-extrabold uppercase tracking-[3px] font-sans">CASE STUDY</span>
                            <div className="h-[1px] w-12 bg-[#00C68A]/30" />
                        </div>

                        <h3 className={`text-[26px] md:text-[32px] font-extrabold font-sora ${titleClass} leading-tight mb-8 tracking-tight max-w-[1000px] text-left`}>
                            {sec.heading}
                        </h3>

                        {imageSrc && (
                            <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.06)] mb-12 group">
                                <img src={imageSrc} alt={`${sec.heading} result map`} className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-103 brightness-[0.8]" />
                                {isDark && <div className="absolute inset-0 bg-gradient-to-t from-[#080D18]/90 via-[#080D18]/30 to-transparent" />}
                            </div>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            {challengeText && (
                                <div className={`${isDark ? 'bg-[#162035]/35 border-[rgba(255,255,255,0.04)] text-[#8FA8C8]' : 'bg-[#F8FAFC] border-[#E3EEF7] text-[#3D5A73]'} border rounded-[20px] p-8 text-left hover:border-[#00C68A]/20 transition-all duration-300 shadow-lg`}>
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] font-bold uppercase tracking-[1.5px] mb-5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />THE CHALLENGE
                                    </span>
                                    <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8]">{challengeText}</p>
                                </div>
                            )}

                            {strategyText && (
                                <div className={`${isDark ? 'bg-[#162035]/35 border-[rgba(0,198,138,0.12)] text-[#F0F4FF]' : 'bg-[#F8FAFC] border-[#00C68A]/20 text-[#0B1829]'} border rounded-[20px] p-8 text-left hover:border-[#00C68A]/30 transition-all duration-300 shadow-lg`}>
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C68A]/10 border border-[#00C68A]/20 text-[#00C68A] text-[11px] font-bold uppercase tracking-[1.5px] mb-5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00C68A] animate-pulse" />WHAT GROWLIMO CHANGED
                                    </span>
                                    <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] font-medium">
                                        {strategyText}
                                    </p>
                                </div>
                            )}
                        </div>

                        {sec.bullets && sec.bullets.length > 0 && (
                            <div className={`${isDark ? 'bg-[#1A2438]/50 border-[rgba(0,198,138,0.2)]' : 'bg-[#F8FAFC] border-[#E3EEF7]'} border rounded-[16px] p-8 mt-6 text-left`}>
                                <h4 className={`font-sora font-bold text-[20px] ${isDark ? 'text-[#F0F4FF]' : 'text-[#0B1829]'} mb-6`}>Results:</h4>
                                <ul className="space-y-3">
                                    {sec.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-[#00C68A] text-[18px] mt-1">▸</span>
                                            <span className={`font-sans text-[16px] leading-[1.7] font-medium ${isDark ? 'text-[#F0F4FF]' : 'text-[#0B1829]'}`}>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>

                {/* Geography banner serving all of Texas dynamically renders right after the final case study */}
                {isCaseStudy3 && (
                    <section className="relative w-full h-[500px] overflow-hidden">
                        <img src={imageMap.banner} alt="Texas Business Districts" className="w-full h-full object-cover brightness-[0.4]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center px-4">
                                <h3 className="font-sora font-extrabold text-[42px] md:text-[56px] text-white mb-6">
                                    Serving All of Texas
                                </h3>
                                <p className="text-white/90 text-[20px] md:text-[24px] max-w-[800px] mx-auto">
                                    From Dallas to Houston, Austin to San Antonio — integrated digital marketing for every Texas market.
                                </p>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        );
    };

    const renderTestimonials = (sec, index) => {
        return (
            <section key={`${sec.heading || 'testimonials'}-${index}`} className="bg-white py-[96px] relative z-10 border-t border-[#E3EEF7] text-center">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
                        CLIENT REVIEWS
                    </span>
                    <h2 className="text-[32px] md:text-[40px] text-[#0B1829] font-extrabold font-sora leading-tight mb-12 tracking-tight max-w-[800px] mx-auto">
                        {sec.heading}
                    </h2>
                    {sec.paragraphs && sec.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="font-sans text-[16px] leading-[1.8] text-[#3D5A73] max-w-[800px] mx-auto mb-6">{para}</p>
                    ))}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sec.bullets && sec.bullets.map((bullet, bIdx) => {
                            const { quote, name, location } = parseTestimonial(bullet);
                            return (
                                <div key={bIdx} className="bg-[#F8FAFC] border-l-4 border-[#00C68A] rounded-[12px] p-6 shadow-xl text-left flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                                    <p className="font-sans text-[15px] italic text-[#0B1829] mb-4 leading-relaxed">"{quote}"</p>
                                    <div>
                                        <div className="flex text-[#00C68A] mb-2">★★★★★</div>
                                        <p className="font-sans text-[14px] font-bold text-[#0B1829]">{name}</p>
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

    const renderIndustriesSection = (sec, index) => {
        return (
            <section key={`${sec.heading || 'industries'}-${index}`} className="bg-white py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans mb-3">VERTICAL EXPERTISE</span>
                    <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.18] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 text-[#0B1829]">
                        {sec.heading}
                    </h2>
                    {sec.paragraphs && sec.paragraphs.map((para, idx) => (
                        <p key={idx} className="font-sans text-[16px] leading-[1.8] mb-8 font-normal text-[#3D5A73] max-w-[800px]">
                            {para}
                        </p>
                    ))}
                    {industriesList.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    )}
                </div>
            </section>
        );
    };

    const renderLocationsSection = (sec, index) => {
        return (
            <section key={`${sec.heading || 'locations'}-${index}`} className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)] text-left">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-5">
                            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block font-sans mb-3">TEXAS CITY-LEVEL EXPERTISE</span>
                            <h2 className="text-[26px] md:text-[34px] font-extrabold font-sora leading-[1.18] mb-6 tracking-tight border-l-4 border-[#00C68A] pl-4 text-[#F0F4FF]">
                                {sec.heading}
                            </h2>
                            {sec.paragraphs && sec.paragraphs.map((para, idx) => (
                                <p key={idx} className="font-sans text-[16px] leading-[1.8] mb-8 font-normal text-[#8FA8C8]">
                                    {para}
                                </p>
                            ))}
                            <div className="rounded-[20px] overflow-hidden shadow-lg border border-[rgba(255,255,255,0.06)] mt-8 hidden lg:block">
                                <img src={imageMap.result2} alt="Texas digital marketing map locations" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            {locationsList.length > 0 && (
                                <div className="bg-[#1A2438]/50 border border-[rgba(255,255,255,0.06)] rounded-[24px] p-8 space-y-5 shadow-sm">
                                    {locationsList.map((bullet, idx) => {
                                        const parsed = parseFlexibleContent(bullet);
                                        if (!parsed) return null;
                                        return (
                                            <div key={idx} className="flex gap-4 items-start border-b border-[rgba(255,255,255,0.04)] pb-4 last:border-0 last:pb-0">
                                                <div className="w-[32px] h-[32px] rounded-full bg-[#00C68A]/10 text-[#00C68A] flex items-center justify-center shrink-0">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-sora text-[15px] font-bold text-white mb-1">{parsed.title}</h4>
                                                    <p className="font-sans text-[14px] leading-relaxed text-[#8FA8C8]">{parsed.desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
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
        const bgClass = isDark ? 'bg-[#0C1220] text-[#8FA8C8]' : 'bg-[#FFFFFF] text-[#3D5A73]';
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
                                            <div key={bIdx} className={`rounded-[16px] p-5 border ${isDark ? 'bg-[#1A2438]/50 border-[rgba(0,198,138,0.1)]' : 'bg-[#F8FAFC] border-[#E3EEF7]'} hover:shadow-lg transition-all duration-300 flex items-start gap-3`}>
                                                <span className="w-2 h-2 rounded-full bg-[#00C68A] shrink-0 mt-2" />
                                                <p className="font-sans text-[15px] leading-relaxed">{parsed.title}</p>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div key={bIdx} className={`rounded-[16px] p-6 border ${isDark ? 'bg-[#1A2438]/50 border-[rgba(0,198,138,0.1)]' : 'bg-[#F8FAFC] border-[#E3EEF7]'} hover:shadow-lg transition-all duration-300`}>
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
                                            <div key={lIdx} className={`rounded-[16px] p-5 border ${isDark ? 'bg-[#1A2438]/50 border-[rgba(0,198,138,0.1)]' : 'bg-[#F8FAFC] border-[#E3EEF7]'} hover:shadow-lg transition-all duration-300 flex items-start gap-3`}>
                                                <span className="w-2 h-2 rounded-full bg-[#00C68A] shrink-0 mt-2" />
                                                <p className="font-sans text-[15px] leading-relaxed">{parsed.title}</p>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div key={lIdx} className={`rounded-[16px] p-6 border ${isDark ? 'bg-[#1A2438]/50 border-[rgba(0,198,138,0.1)]' : 'bg-[#F8FAFC] border-[#E3EEF7]'} hover:shadow-lg transition-all duration-300`}>
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

        // Numbered service sections are rendered as alternating full-width detailed sections
        if (section.heading && /^\d+\.\s/.test(section.heading)) {
            return renderServiceDetailSection(section, index);
        }

        if (isCaseStudiesIntro(section)) {
            return renderCaseStudiesIntro(section, index);
        }

        if (isCaseStudyCard(section)) {
            return renderCaseStudyCard(section, index);
        }

        if (isTestimonialsSection(section)) {
            return renderTestimonials(section, index);
        }

        if (isServicesIntroSection(section)) {
            return renderServicesIntro(section, index);
        }

        if (isIndustriesSection(section)) {
            return renderIndustriesSection(section, index);
        }

        if (isLocationsSection(section)) {
            return renderLocationsSection(section, index);
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

            <style jsx global>{`
                ::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                }
                ::-webkit-scrollbar-track {
                    background: #0C1220;
                }
                ::-webkit-scrollbar-thumb {
                    background: #00C68A;
                    border-radius: 3px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #00b37a;
                }
            `}</style>

            {/* SECTION 1: HERO */}
            <section className="bg-[#080D18] text-white pt-[120px] pb-[80px] relative overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 md:px-10 max-w-[1200px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Left: Headline */}
                        <div className="lg:col-span-6 flex flex-col items-start text-left">
                            <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans">
                                TEXAS DIGITAL MARKETING
                            </span>

                            <h1 className="text-4xl md:text-[44px] lg:text-[48px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                                {h1}
                            </h1>

                            <p className="font-sans text-[16px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[620px]">
                                {subheadline}
                            </p>

                            {/* Trust Pills - Dynamic from trustBar */}
                            <div className="flex flex-wrap gap-3 mb-4 w-full">
                                {trustBarItems.slice(0, 3).map((item, idx) => {
                                    const pill = parseTrustCard(item);
                                    return (
                                        <div key={idx} className="flex items-center gap-3 bg-[rgba(26,36,56,0.5)] border border-[rgba(255,255,255,0.05)] rounded-[12px] px-5 py-3 shadow-md hover:border-[#00C68A]/35 transition-all duration-200">
                                            <span className="text-[#00C68A] font-sora font-extrabold text-[16px]">{pill.value}</span>
                                            <span className="text-[#8FA8C8] font-sans text-[13px] font-medium border-l border-[rgba(255,255,255,0.1)] pl-3">{pill.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:col-span-6 w-full">
                            <div className="bg-[#1A2438]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-5 shadow-2xl relative">
                                <h3 className="font-sora font-bold text-[15px] text-[#F0F4FF] mb-3 text-left border-b border-[rgba(255,255,255,0.06)] pb-2">
                                    Get Your Free Texas Digital Marketing Audit
                                </h3>
                                <Form slug={slug} compact={true} variant="contact" ctaButtonText={ctaButtonText} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: FULL-WIDTH HERO IMAGE WITH STAT CARDS */}
            <section className="relative w-full overflow-hidden">
                <div className="relative w-full h-[480px]">
                    <img src={imageMap.hero} alt="Texas Digital Marketing Agency Hero" className="w-full h-full object-cover brightness-[0.3]" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080D18] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFFFF] to-transparent" />

                    {/* Floating stat cards dynamically rendered from trustBar */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="container mx-auto px-4 max-w-[1200px]">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {trustBarItems.map((item, idx) => {
                                    const card = parseTrustCard(item);
                                    return (
                                        <div key={idx} className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[16px] p-6 shadow-2xl flex flex-col items-center text-center justify-center min-h-[140px] transition-all duration-300 hover:translate-y-[-4px]">
                                            <div className="text-[#00C68A] font-sora font-extrabold text-[24px] sm:text-[28px] md:text-[32px] mb-2 leading-none">{card.value}</div>
                                            <div className="text-[#F0F4FF] font-sans text-[11px] sm:text-[12px] md:text-[13px] font-medium leading-relaxed">{card.label}</div>
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

            {/* STANDALONE PROCESS SECTION */}
            {processSection && processSection.steps && (
                <section className="bg-white py-[96px] relative z-10 border-t border-[#E3EEF7] text-left">
                    <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                        <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#0B1829] mb-6 text-center">
                            {processSection.title}
                        </h2>
                        {processSection.intro && (
                            <p className="text-[#0B1829] text-[18px] leading-[1.8] mb-12 text-center max-w-[900px] mx-auto">
                                {processSection.intro}
                            </p>
                        )}

                        <div className="relative max-w-[900px] mx-auto">
                            {/* Vertical line */}
                            <div className="absolute left-[20px] top-[40px] bottom-[40px] w-[2px] bg-[#00C68A]/30 hidden md:block" />

                            <div className="space-y-8">
                                {processSection.steps.map((step, idx) => (
                                    <div key={idx} className="relative flex items-start gap-6 md:pl-[60px]">
                                        {/* Number circle */}
                                        <div className="absolute left-0 top-0 w-[40px] h-[40px] rounded-full bg-[#00C68A] flex items-center justify-center shadow-lg hidden md:flex">
                                            <span className="text-white font-sora font-extrabold text-[16px]">{idx + 1}</span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 bg-[#F8FAFC] border border-[#E3EEF7] rounded-[16px] p-6">
                                            <h3 className="font-sora font-bold text-[20px] text-[#0B1829] mb-4">
                                                <span className="md:hidden text-[#00C68A]">{idx + 1}. </span>
                                                {step.title}
                                            </h3>
                                            <p className="text-[#0B1829] text-[15px] leading-[1.7]">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQs Section */}
            {faqs && faqs.length > 0 && (
                <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-[rgba(255,255,255,0.04)]">
                    <div className="container mx-auto px-4 md:px-10 max-w-[900px]">
                        <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#F0F4FF] mb-12 text-center">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border border-[rgba(255,255,255,0.06)] rounded-[12px] overflow-hidden bg-[#1A2438]/50 shadow-sm transition-all duration-300 hover:border-[#00C68A]/30">
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-[#1A2438] transition-colors duration-200"
                                    >
                                        <span className="font-sora font-bold text-[16px] text-[#F0F4FF] pr-4">
                                            {faq.question}
                                        </span>
                                        <span className="text-[#00C68A] text-[24px] font-bold flex-shrink-0">
                                            {activeFaq === idx ? '−' : '+'}
                                        </span>
                                    </button>

                                    {activeFaq === idx && (
                                        <div className="px-6 py-5 bg-[#0C1220] border-t border-[rgba(255,255,255,0.06)]">
                                            <p className="text-[#8FA8C8] text-[15px] leading-[1.7]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            {ctaSection && (
                <section className="bg-white py-[96px] relative overflow-hidden z-10 border-t border-[#E3EEF7]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00C68A]/5 blur-[120px] pointer-events-none" />

                    <div className="container mx-auto px-4 md:px-10 max-w-[900px] relative z-10 text-center">
                        <h2 className="font-sora font-extrabold text-[36px] md:text-[48px] text-[#0B1829] mb-6">
                            {ctaSection.heading}
                        </h2>

                        {ctaSection.paragraphs && ctaSection.paragraphs.slice(0, 2).map((para, idx) => (
                            <p key={idx} className="text-[#0B1829] text-[18px] leading-[1.8] mb-6">
                                {para}
                            </p>
                        ))}

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#DD6613] to-[#FB923C] text-white font-sora font-bold text-[16px] rounded-[12px] hover:shadow-[0_0_30px_rgba(221,102,19,0.4)] transition-all duration-200">
                                {ctaButtonText}
                            </Link>
                        </div>

                        {ctaSection.paragraphs && ctaSection.paragraphs[2] && (
                            <p className="text-[#3D5A73] text-[14px] mt-8 leading-[1.6]">
                                {ctaSection.paragraphs[2]}
                            </p>
                        )}
                    </div>
                </section>
            )}

            {/* Related Services Internal Links Section */}
            {internalLinks && internalLinks.length > 0 && (
                <section className="bg-[#0C1220] py-[60px] border-t border-[rgba(255,255,255,0.04)] relative z-10">
                    <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                        <h3 className="font-sora font-bold text-[18px] text-[#F0F4FF] mb-6 text-center">
                            Related Services
                        </h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {internalLinks.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.to}
                                    className="px-6 py-3 bg-[#1A2438] border border-[rgba(255,255,255,0.06)] rounded-[8px] text-[#F0F4FF] text-[14px] font-medium hover:border-[#00C68A] hover:bg-[#00C68A]/5 transition-all duration-200"
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