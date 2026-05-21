import { useState } from 'react';
import Link from 'next/link';
import SEO from '../SEO';
import Form from '../common/Form';

export default function ServiceContentSectionPPCCA({ service, slug, onSelectPlan }) {
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
        ctaButtonText = 'Get Your Free PPC Audit →',
        faqs = [],
        internalLinks = [],
        images = [],
        schema
    } = service;

    // Safe image pointers
    const heroImg = images[0] || '/images/services/hero-ppc-services-california.webp';
    const strategyImg = images[1] || '/images/services/ppc-services-california-strategy.webp';
    const resultsImg1 = images[2] || '/images/services/ppc-services-california-results-1.webp';
    const resultsImg2 = images[3] || '/images/services/ppc-services-california-results-2.webp';
    const bannerImg = images[4] || '/images/services/ppc-services-california-banner.webp';

    // Helper function to parse testimonials
    const parseTestimonial = (bullet) => {
        const match = bullet.match(/^"(.+?)" — (.+)$/);
        if (match) {
            return {
                quote: match[1],
                attribution: match[2]
            };
        }
        return { quote: bullet, attribution: '' };
    };

    // Map sections
    const whyPPCDifferent = contentSections[0] || {};
    const eightMistakes = contentSections[1] || {};
    const servicesIntro = contentSections[2] || {};
    const googleSearchCampaigns = contentSections[3] || {};
    const performanceMax = contentSections[4] || {};
    const remarketing = contentSections[5] || {};
    const googleShopping = contentSections[6] || {};
    const metaAds = contentSections[7] || {};
    const bingAds = contentSections[8] || {};
    const youtubeAds = contentSections[9] || {};
    const landingPages = contentSections[10] || {};
    const caseStudiesIntro = contentSections[11] || {};
    const caseStudy1 = contentSections[12] || {};
    const caseStudy2 = contentSections[13] || {};
    const caseStudy3 = contentSections[14] || {};
    const industries = contentSections[15] || {};
    const locations = contentSections[16] || {};
    const expertise = contentSections[17] || {};
    const testimonials = contentSections[18] || {};

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
                                PPC MANAGEMENT CALIFORNIA
                            </span>

                            <h1 className="text-4xl md:text-[44px] lg:text-[48px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
                                {h1}
                            </h1>

                            <p className="font-sans text-[16px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[620px]">
                                {subheadline}
                            </p>

                            {/* Trust Pills */}
                            <div className="flex flex-wrap gap-3 mb-4 w-full">
                                {[
                                    { value: '5.8x', label: 'Avg ROAS' },
                                    { value: '$1.2M+', label: 'Spend Managed' },
                                    { value: '4.9★', label: 'Client Rating' }
                                ].map((pill, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-[rgba(26,36,56,0.5)] border border-[rgba(255,255,255,0.05)] rounded-[12px] px-5 py-3 shadow-md hover:border-[#00C68A]/35 transition-all duration-200">
                                        <span className="text-[#00C68A] font-sora font-extrabold text-[16px]">{pill.value}</span>
                                        <span className="text-[#8FA8C8] font-sans text-[13px] font-medium border-l border-[rgba(255,255,255,0.1)] pl-3">{pill.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:col-span-6 w-full">
                            <div className="bg-[#1A2438]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-5 shadow-2xl relative">
                                <h3 className="font-sora font-bold text-[15px] text-[#F0F4FF] mb-3 text-left border-b border-[rgba(255,255,255,0.06)] pb-2">
                                    Get Your Free California PPC Audit
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
                    <img src={heroImg} alt="California PPC Services Hero" className="w-full h-full object-cover brightness-[0.3]" />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080D18] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFFFFF] to-transparent" />

                    {/* Floating stat cards */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="container mx-auto px-4 max-w-[1200px]">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[16px] p-6 shadow-2xl">
                                    <div className="text-[#00C68A] font-sora font-extrabold text-[36px] mb-2">$1.2M+</div>
                                    <div className="text-[#F0F4FF] font-sans text-[14px] font-medium">California Ad Spend Managed</div>
                                </div>
                                <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[16px] p-6 shadow-2xl">
                                    <div className="text-[#00C68A] font-sora font-extrabold text-[36px] mb-2">5.8x</div>
                                    <div className="text-[#F0F4FF] font-sans text-[14px] font-medium">Average Client ROAS</div>
                                </div>
                                <div className="bg-[#1A2438]/90 backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[16px] p-6 shadow-2xl">
                                    <div className="text-[#00C68A] font-sora font-extrabold text-[36px] mb-2">200+</div>
                                    <div className="text-[#F0F4FF] font-sans text-[14px] font-medium">PPC Accounts Audited</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: WHY PPC IS DIFFERENT - WHITE BG */}
            <section className="bg-white py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#0B1829] mb-2 border-l-4 border-[#00C68A] pl-6">
                        {whyPPCDifferent.heading}
                    </h2>

                    <p className="font-sans border-l-4 border-[#00C68A] mb-4 mt-6 pl-2 text-[17px] leading-[1.8] text-[#1A2438] font-semibold">
                        {heroContent[1]}
                    </p>


                    {whyPPCDifferent.paragraphs && whyPPCDifferent.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#0B1829] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                    {whyPPCDifferent.bullets && whyPPCDifferent.bullets.length > 0 && (
                        <ul className="space-y-4 mb-6">
                            {whyPPCDifferent.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-[#00C68A] text-[20px] mt-1">▸</span>
                                    <span className="text-[#0B1829] text-[16px] leading-[1.8]">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            {/* SECTION 4: 8 MISTAKES - DARK BG */}
            <section className="bg-[#0C1220] py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#F0F4FF] mb-6 border-l-4 border-[#00C68A] pl-6">
                        {eightMistakes.heading}
                    </h2>
                    {eightMistakes.paragraphs && eightMistakes.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#8FA8C8] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                    {eightMistakes.bullets && eightMistakes.bullets.length > 0 && (
                        <div className="space-y-4 mb-6">
                            {eightMistakes.bullets.map((bullet, idx) => (
                                <div key={idx} className="bg-[#1A2438]/50 border border-[rgba(0,198,138,0.1)] rounded-[12px] p-5">
                                    <p className="text-[#F0F4FF] text-[16px] leading-[1.7]">{bullet}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {eightMistakes.closingText && (
                        <p className="text-[#00C68A] text-[16px] leading-[1.8] font-medium mt-6">
                            {eightMistakes.closingText}
                        </p>
                    )}
                </div>
            </section>

            {/* SECTION 5: SERVICES INTRO - WHITE BG */}
            <section className="bg-white py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                        {servicesIntro.heading}
                    </h2>
                    {servicesIntro.paragraphs && servicesIntro.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#0B1829] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                </div>
            </section>

            {/* SECTION 6: GOOGLE SEARCH CAMPAIGNS - TWO COLUMN WITH IMAGE */}
            <section className="bg-[#0C1220] py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src={strategyImg} alt="Google Search Campaign Strategy" className="rounded-[16px] shadow-2xl w-full" />
                        </div>
                        <div>
                            <h2 className="font-sora font-extrabold text-[28px] md:text-[36px] text-[#F0F4FF] mb-6 border-l-4 border-[#00C68A] pl-6">
                                {googleSearchCampaigns.heading}
                            </h2>
                            {googleSearchCampaigns.paragraphs && googleSearchCampaigns.paragraphs.map((para, idx) => (
                                <p key={idx} className="text-[#8FA8C8] text-[16px] leading-[1.8] mb-6">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: PERFORMANCE MAX - WHITE BG */}
            <section className="bg-white py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[28px] md:text-[36px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                        {performanceMax.heading}
                    </h2>
                    {performanceMax.paragraphs && performanceMax.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#0B1829] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                </div>
            </section>

            {/* SECTION 8: REMARKETING - DARK BG */}
            <section className="bg-[#0C1220] py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[28px] md:text-[36px] text-[#F0F4FF] mb-6 border-l-4 border-[#00C68A] pl-6">
                        {remarketing.heading}
                    </h2>
                    {remarketing.paragraphs && remarketing.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#8FA8C8] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                </div>
            </section>

            {/* SECTION 9: FULL-WIDTH RESULTS IMAGE 1 */}
            <section className="relative w-full h-[500px] overflow-hidden">
                <img src={resultsImg1} alt="PPC Results Dashboard" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,18,32,0.95)] to-transparent flex items-center">
                    <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                        <div className="max-w-[600px]">
                            <h3 className="font-sora font-extrabold text-[36px] text-[#F0F4FF] mb-4">
                                Real-Time Performance Tracking
                            </h3>
                            <p className="text-[#8FA8C8] text-[18px] leading-[1.7]">
                                Every click, conversion, and dollar spent tracked with precision. Weekly optimization cycles ensure your California PPC budget works harder every single week.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10: SHOPPING CAMPAIGNS - WHITE BG */}
            <section className="bg-white py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[28px] md:text-[36px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                        {googleShopping.heading}
                    </h2>
                    {googleShopping.paragraphs && googleShopping.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#0B1829] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                </div>
            </section>

            {/* SECTION 11: META & BING & YOUTUBE - DARK BG */}
            <section className="bg-[#0C1220] py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#1A2438]/50 border border-[rgba(0,198,138,0.1)] rounded-[16px] p-6">
                            <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] mb-4">
                                {metaAds.heading}
                            </h3>
                            {metaAds.paragraphs && metaAds.paragraphs.slice(0, 1).map((para, idx) => (
                                <p key={idx} className="text-[#8FA8C8] text-[15px] leading-[1.7]">
                                    {para}
                                </p>
                            ))}
                        </div>
                        <div className="bg-[#1A2438]/50 border border-[rgba(0,198,138,0.1)] rounded-[16px] p-6">
                            <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] mb-4">
                                {bingAds.heading}
                            </h3>
                            {bingAds.paragraphs && bingAds.paragraphs.slice(0, 1).map((para, idx) => (
                                <p key={idx} className="text-[#8FA8C8] text-[15px] leading-[1.7]">
                                    {para}
                                </p>
                            ))}
                        </div>
                        <div className="bg-[#1A2438]/50 border border-[rgba(0,198,138,0.1)] rounded-[16px] p-6">
                            <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] mb-4">
                                {youtubeAds.heading}
                            </h3>
                            {youtubeAds.paragraphs && youtubeAds.paragraphs.slice(0, 1).map((para, idx) => (
                                <p key={idx} className="text-[#8FA8C8] text-[15px] leading-[1.7]">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 12: LANDING PAGES - WHITE BG WITH IMAGE */}
            <section className="bg-white py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-sora font-extrabold text-[28px] md:text-[36px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                                {landingPages.heading}
                            </h2>
                            {landingPages.paragraphs && landingPages.paragraphs.map((para, idx) => (
                                <p key={idx} className="text-[#0B1829] text-[16px] leading-[1.8] mb-6">
                                    {para}
                                </p>
                            ))}
                            {landingPages.bullets && landingPages.bullets.length > 0 && (
                                <ul className="space-y-3 mb-6">
                                    {landingPages.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-[#00C68A] text-[18px] mt-1">✓</span>
                                            <span className="text-[#0B1829] text-[15px] leading-[1.7]">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {landingPages.closingText && (
                                <p className="text-[#00C68A] text-[16px] leading-[1.8] font-medium">
                                    {landingPages.closingText}
                                </p>
                            )}
                        </div>
                        <div>
                            <img src={resultsImg2} alt="PPC Landing Page Optimization" className="rounded-[16px] shadow-2xl w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 13: CASE STUDIES INTRO - DARK BG */}
            <section className="bg-[#0C1220] py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#F0F4FF] mb-6 border-l-4 border-[#00C68A] pl-6 text-center">
                        {caseStudiesIntro.heading}
                    </h2>
                    {caseStudiesIntro.paragraphs && caseStudiesIntro.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#8FA8C8] text-[16px] leading-[1.8] mb-6 text-center max-w-[900px] mx-auto">
                            {para}
                        </p>
                    ))}
                </div>
            </section>

            {/* SECTION 14: CASE STUDY 1 - WHITE BG */}
            <section className="bg-white py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h3 className="font-sora font-extrabold text-[28px] md:text-[32px] text-[#0B1829] mb-6 text-center">
                        {caseStudy1.heading}
                    </h3>
                    {caseStudy1.image && (
                        <div className="mb-8">
                            <img src={caseStudy1.image} alt="San Diego Plumbing Case Study" className="rounded-[16px] shadow-2xl w-full max-w-[800px] mx-auto" />
                        </div>
                    )}
                    {caseStudy1.paragraphs && caseStudy1.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#0B1829] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                    {caseStudy1.bullets && caseStudy1.bullets.length > 0 && (
                        <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[16px] p-8 mt-6">
                            <h4 className="font-sora font-bold text-[20px] text-[#0B1829] mb-6">Results:</h4>
                            <ul className="space-y-3">
                                {caseStudy1.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-[#00C68A] text-[18px] mt-1">▸</span>
                                        <span className="text-[#0B1829] text-[16px] leading-[1.7] font-medium">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 15: CASE STUDY 2 - DARK BG */}
            <section className="bg-[#0C1220] py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h3 className="font-sora font-extrabold text-[28px] md:text-[32px] text-[#F0F4FF] mb-6 text-center">
                        {caseStudy2.heading}
                    </h3>
                    {caseStudy2.image && (
                        <div className="mb-8">
                            <img src={caseStudy2.image} alt="LA Medical Spa Case Study" className="rounded-[16px] shadow-2xl w-full max-w-[800px] mx-auto" />
                        </div>
                    )}
                    {caseStudy2.paragraphs && caseStudy2.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#8FA8C8] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                    {caseStudy2.bullets && caseStudy2.bullets.length > 0 && (
                        <div className="bg-[#1A2438]/50 border border-[rgba(0,198,138,0.2)] rounded-[16px] p-8 mt-6">
                            <h4 className="font-sora font-bold text-[20px] text-[#F0F4FF] mb-6">Results:</h4>
                            <ul className="space-y-3">
                                {caseStudy2.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-[#00C68A] text-[18px] mt-1">▸</span>
                                        <span className="text-[#F0F4FF] text-[16px] leading-[1.7] font-medium">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 16: CASE STUDY 3 - WHITE BG */}
            <section className="bg-white py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h3 className="font-sora font-extrabold text-[28px] md:text-[32px] text-[#0B1829] mb-6 text-center">
                        {caseStudy3.heading}
                    </h3>
                    {caseStudy3.image && (
                        <div className="mb-8">
                            <img src={caseStudy3.image} alt="Orange County Law Firm Case Study" className="rounded-[16px] shadow-2xl w-full max-w-[800px] mx-auto" />
                        </div>
                    )}
                    {caseStudy3.paragraphs && caseStudy3.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#0B1829] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                    {caseStudy3.bullets && caseStudy3.bullets.length > 0 && (
                        <div className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[16px] p-8 mt-6">
                            <h4 className="font-sora font-bold text-[20px] text-[#0B1829] mb-6">Results:</h4>
                            <ul className="space-y-3">
                                {caseStudy3.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-[#00C68A] text-[18px] mt-1">▸</span>
                                        <span className="text-[#0B1829] text-[16px] leading-[1.7] font-medium">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 17: FULL-WIDTH BANNER */}
            <section className="relative w-full h-[500px] overflow-hidden">
                <img src={bannerImg} alt="California Business Districts" className="w-full h-full object-cover brightness-[0.4]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h3 className="font-sora font-extrabold text-[42px] md:text-[56px] text-white mb-6">
                            Serving All of California
                        </h3>
                        <p className="text-white/90 text-[20px] md:text-[24px] max-w-[800px] mx-auto">
                            From Los Angeles to San Francisco, San Diego to Sacramento — expert PPC management for every California market.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 18: INDUSTRIES - DARK BG */}
            <section className="bg-[#0C1220] py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#F0F4FF] mb-6 border-l-4 border-[#00C68A] pl-6">
                        {industries.heading}
                    </h2>
                    {industries.paragraphs && industries.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#8FA8C8] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                    {industries.bullets && industries.bullets.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {industries.bullets.map((bullet, idx) => (
                                <div key={idx} className="bg-[#1A2438]/50 border border-[rgba(0,198,138,0.1)] rounded-[12px] p-5">
                                    <p className="text-[#F0F4FF] text-[15px] leading-[1.7]">{bullet}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 19: LOCATIONS - WHITE BG */}
            <section className="bg-white py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                        {locations.heading}
                    </h2>
                    {locations.paragraphs && locations.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#0B1829] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                    {locations.bullets && locations.bullets.length > 0 && (
                        <ul className="space-y-4 mt-6">
                            {locations.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-3 bg-[#F8FAFC] border border-[#E3EEF7] rounded-[12px] p-5">
                                    <span className="text-[#00C68A] text-[18px] mt-1">▸</span>
                                    <span className="text-[#0B1829] text-[15px] leading-[1.7]">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            {/* SECTION 20: PROCESS - DARK BG */}
            <section className="bg-[#0C1220] py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#F0F4FF] mb-6 text-center">
                        {processSection.title}
                    </h2>
                    {processSection.intro && (
                        <p className="text-[#8FA8C8] text-[18px] leading-[1.8] mb-12 text-center max-w-[900px] mx-auto">
                            {processSection.intro}
                        </p>
                    )}

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-[20px] top-[40px] bottom-[40px] w-[2px] bg-[#00C68A]/30 hidden md:block" />

                        <div className="space-y-8">
                            {processSection.steps && processSection.steps.map((step, idx) => (
                                <div key={idx} className="relative flex items-start gap-6 md:pl-[60px]">
                                    {/* Number circle */}
                                    <div className="absolute left-0 top-0 w-[40px] h-[40px] rounded-full bg-[#00C68A] flex items-center justify-center shadow-lg hidden md:flex">
                                        <span className="text-white font-sora font-extrabold text-[16px]">{idx + 1}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-[#1A2438]/50 border border-[rgba(0,198,138,0.2)] rounded-[16px] p-6">
                                        <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] mb-4">
                                            <span className="md:hidden text-[#00C68A]">{idx + 1}. </span>
                                            {step.title}
                                        </h3>
                                        <p className="text-[#8FA8C8] text-[15px] leading-[1.7]">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 21: EXPERTISE - WHITE BG */}
            <section className="bg-white py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#0B1829] mb-6 border-l-4 border-[#00C68A] pl-6">
                        {expertise.heading}
                    </h2>
                    {expertise.paragraphs && expertise.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#0B1829] text-[16px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}
                </div>
            </section>

            {/* SECTION 22: TESTIMONIALS - DARK BG */}
            <section className="bg-[#0C1220] py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#F0F4FF] mb-12 text-center">
                        {testimonials.heading}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.bullets && testimonials.bullets.slice(0, 3).map((bullet, idx) => {
                            const { quote, attribution } = parseTestimonial(bullet);
                            return (
                                <div key={idx} className="bg-[#1A2438]/50 border-l-4 border-[#00C68A] rounded-[12px] p-6 shadow-xl">
                                    <p className="text-[#F0F4FF] text-[15px] leading-[1.7] mb-4 italic">
                                        "{quote}"
                                    </p>
                                    {attribution && (
                                        <p className="text-[#8FA8C8] text-[14px] font-medium">
                                            — {attribution}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 23: FAQ - WHITE BG */}
            <section className="bg-white py-[96px]">
                <div className="container mx-auto px-4 md:px-10 max-w-[900px]">
                    <h2 className="font-sora font-extrabold text-[32px] md:text-[40px] text-[#0B1829] mb-12 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-[#E3EEF7] rounded-[12px] overflow-hidden bg-white shadow-sm">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors duration-200"
                                >
                                    <span className="font-sora font-bold text-[16px] text-[#0B1829] pr-4">
                                        {faq.question}
                                    </span>
                                    <span className="text-[#00C68A] text-[24px] font-bold flex-shrink-0">
                                        {activeFaq === idx ? '−' : '+'}
                                    </span>
                                </button>

                                {activeFaq === idx && (
                                    <div className="px-6 py-5 bg-[#F8FAFC] border-t border-[#E3EEF7]">
                                        <p className="text-[#0B1829] text-[15px] leading-[1.7]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 24: FINAL CTA - DARK BG */}
            <section className="bg-[#0C1220] py-[96px] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00C68A]/5 blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 md:px-10 max-w-[900px] relative z-10 text-center">
                    <h2 className="font-sora font-extrabold text-[36px] md:text-[48px] text-[#F0F4FF] mb-6">
                        {ctaSection.heading}
                    </h2>

                    {ctaSection.paragraphs && ctaSection.paragraphs.map((para, idx) => (
                        <p key={idx} className="text-[#8FA8C8] text-[18px] leading-[1.8] mb-6">
                            {para}
                        </p>
                    ))}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                        <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#DD6613] to-[#FB923C] text-white font-sora font-bold text-[16px] rounded-[12px] hover:shadow-[0_0_30px_rgba(221,102,19,0.4)] transition-all duration-200">
                            {ctaButtonText}
                        </Link>
                    </div>

                    <p className="text-[#8FA8C8] text-[14px] mt-8 leading-[1.6]">
                        📍 Serving All of California — LA, San Diego, SF, Sacramento, Orange County & Beyond | Google Partner Certified | Month-to-Month, No Lock-In | Response Within 24 Hours
                    </p>
                </div>
            </section>

            {/* SECTION 25: INTERNAL LINKS FOOTER - WHITE BG */}
            {internalLinks && internalLinks.length > 0 && (
                <section className="bg-white py-[60px] border-t border-[#E3EEF7]">
                    <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">
                        <h3 className="font-sora font-bold text-[18px] text-[#0B1829] mb-6 text-center">
                            Related Services
                        </h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {internalLinks.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.to}
                                    className="px-6 py-3 bg-[#F8FAFC] border border-[#E3EEF7] rounded-[8px] text-[#0B1829] text-[14px] font-medium hover:border-[#00C68A] hover:bg-[#00C68A]/5 transition-all duration-200"
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