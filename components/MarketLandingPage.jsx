import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import SEO from './SEO';
import Form from './common/Form';
import { useCountUp } from '../hooks/useCountUp';
import { ENC, WA_MSG, handleCall, handleWhatsApp } from '../lib/contactProtection';

/* ─── Animated Stat Component ─── */
function AnimatedStat({ value, suffix = '', prefix = '', label, showDivider = true }) {
  const hasNumber = /[0-9]/.test(value);
  const numericValue = hasNumber ? parseInt(value.replace(/[^0-9]/g, '')) : 0;
  const [count, ref] = useCountUp(numericValue);

  return (
    <div
      ref={ref}
      className={`flex-1 text-center py-6 px-4 md:px-8 border-b sm:border-b-0 sm:border-r border-white/5 last:border-0 ${
        showDivider ? 'sm:border-r' : 'sm:border-r-0'
      }`}
    >
      <div className="text-[40px] font-extrabold text-[#00C68A] font-sora mb-2 tracking-tight">
        {prefix}
        {hasNumber ? count : value}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-[#4A6080] font-semibold font-sans">{label}</div>
    </div>
  );
}

/* ─── Service Card Component ─── */
function ServiceCard({ icon, title, description, bullets, ctaText, onCtaClick }) {
  return (
    <div className="bg-[#1A2438] border border-white/8 p-[28px] rounded-2xl group hover:bg-[#1F2B3E] hover:border-[#00C68A] transition-all duration-200 hover:scale-[1.02] transform flex flex-col justify-between h-full shadow-lg relative overflow-hidden">
      {/* Top green accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00C68A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left z-20" />

      <div>
        <div className="w-[52px] h-[52px] rounded-xl bg-[#00C68A]/12 border border-[#00C68A]/20 flex items-center justify-center mb-5 text-[#00C68A] transition-transform duration-200 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-[20px] font-bold text-white mb-3 font-sora tracking-tight">
          {title}
        </h3>
        <p className="text-[#8FA8C8] text-[15px] leading-relaxed mb-5 font-sans">{description}</p>
        
        {/* Bullet deliverables */}
        <ul className="space-y-2 mb-6">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#8FA8C8] font-sans">
              <span className="text-[#00C68A] mt-0.5">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onCtaClick}
        className="w-full bg-transparent hover:bg-[#00C68A]/10 text-[#00C68A] border border-[#00C68A]/30 hover:border-[#00C68A] font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-1.5 cursor-pointer mt-auto"
      >
        {ctaText} <span className="text-xs">→</span>
      </button>
    </div>
  );
}

/* ─── Differentiator Card Component ─── */
function DifferentiatorCard({ title, desc, icon }) {
  return (
    <div className="bg-[#1A2438] border border-white/8 p-6 rounded-2xl transition-all duration-200 hover:border-[#00C68A] hover:shadow-[0_4px_24px_rgba(0,198,138,0.08)] flex flex-col items-start">
      <div className="w-[44px] h-[44px] rounded-full bg-[#00C68A]/10 border border-[#00C68A]/20 flex items-center justify-center text-[#00C68A] mb-4">
        {icon || (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <h3 className="font-sora font-bold text-[16px] text-white mb-2 leading-tight">
        {title}
      </h3>
      <p className="font-sans text-[14px] text-[#8FA8C8] leading-[1.65]">
        {desc}
      </p>
    </div>
  );
}

/* ─── Process Step Component ─── */
function ProcessStep({ number, title, description }) {
  return (
    <div className="flex-1 flex flex-col items-center text-center relative px-4 z-10">
      <div className="w-[60px] h-[60px] rounded-full bg-[#00C68A] flex items-center justify-center text-[#05080F] font-extrabold text-[20px] font-sora shadow-lg shadow-[#00C68A]/15 relative z-10">
        {number}
      </div>
      <h3 className="text-[16px] font-bold text-white mt-5 mb-2 font-sora tracking-tight">{title}</h3>
      <p className="text-[13px] text-[#8FA8C8] leading-relaxed font-sans max-w-[200px]">{description}</p>
    </div>
  );
}

export default function MarketLandingPage({ config }) {
  const [openFaq, setOpenFaq] = useState(null);
  const mountedAt = useRef(null);
  useEffect(() => { mountedAt.current = Date.now(); }, []);
  
  const scrollToContact = (e) => {
    if (e) e.preventDefault();
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToResults = (e) => {
    if (e) e.preventDefault();
    document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <SEO
        title={config.metaTitle}
        description={config.metaDescription}
        url={config.canonicalUrl}
        disableSuffix={true}
        schema={config.schema}
      />

      <div className="bg-[#080D18] text-white selection:bg-[#00C68A]/30 selection:text-white overflow-x-hidden font-sans">
        
        {/* ─── 1. HERO SECTION ─── */}
        <section className="bg-[#080D18] pt-28 pb-16 md:pt-[130px] md:pb-[96px] relative overflow-hidden" aria-labelledby="hero-heading">
          {/* Subtle Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00C68A]/5 rounded-full blur-[120px] pointer-events-none z-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-16 lg:gap-8 items-center max-w-6xl mx-auto">
              
              {/* Left Content Column */}
              <div className="flex flex-col items-start text-left w-full">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C68A]/12 border border-[#00C68A]/30 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C68A] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C68A]"></span>
                  </span>
                  <span className="text-[11px] font-semibold text-[#00C68A] font-sans tracking-[2px] uppercase">
                    Google Partner · AI-Powered · Growth Specialists
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-[58px] font-extrabold mb-6 leading-[1.1] text-white font-sora tracking-tight">
                  {config.heroTitle.leading}{' '}
                  <span className="text-[#00C68A]">{config.heroTitle.highlight}</span>
                </h1>

                {/* Subheadline */}
                <p className="font-sans text-[17px] leading-[1.7] font-normal text-[#8FA8C8] max-w-[540px] mb-8">
                  {config.heroSubhead}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto items-stretch sm:items-center">
                  <button
                    onClick={scrollToContact}
                    className="bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-4 px-8 rounded-full transition-all duration-200 text-center flex items-center justify-center text-base shadow-lg shadow-[#DD6613]/20 hover:shadow-xl transform hover:scale-[1.02] cursor-pointer"
                  >
                    {config.heroCtaPrimary}
                  </button>
                  <button
                    onClick={scrollToResults}
                    className="bg-transparent text-white border border-white/20 hover:border-white font-bold py-4 px-8 rounded-full transition-all duration-200 text-center flex items-center justify-center text-base transform hover:scale-[1.02] cursor-pointer"
                  >
                    {config.heroCtaSecondary}
                  </button>
                </div>

                {/* Trust bar message */}
                <div className="text-[13px] text-[#4A6080] font-sans font-semibold tracking-wide uppercase mt-2">
                  {config.trustBarText}
                </div>
              </div>

              {/* Right Hero Image Column */}
              <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
                <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl relative bg-[#0C1220] border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hero-dashboard.webp"
                    alt="GrowLimo Command Center displaying performance analytics"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#080D18]/80 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Floating metrics pill 1 */}
                <div className="absolute -bottom-4 -left-4 z-20 p-4 rounded-xl bg-[#0C1220] border border-white/10 shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00C68A]/12 flex items-center justify-center text-[#00C68A]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white font-sora">+713%</div>
                    <div className="text-[10px] text-[#8FA8C8] uppercase tracking-wider font-semibold">Avg. Revenue Growth</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Metric Band strip */}
          <div className="max-w-5xl mx-auto mt-16 px-4">
            <div className="border-t border-white/8 pt-8">
              <div className="flex flex-col sm:flex-row items-stretch justify-center bg-[#1A2438]/50 border border-white/5 rounded-2xl p-2 sm:p-0">
                {config.metrics.map((m, idx) => (
                  <AnimatedStat
                    key={idx}
                    value={m.value}
                    prefix={m.prefix || ''}
                    suffix={m.suffix || ''}
                    label={m.label}
                    showDivider={idx < config.metrics.length - 1}
                  />
                ))}
              </div>
              {config.metricsDisclaimer && (
                <p className="text-center text-[#4A6080] text-xs font-sans mt-4 font-semibold italic">
                  {config.metricsDisclaimer}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ─── 2. PROBLEM/PAIN SECTION ─── */}
        <section className="bg-white text-[#0B1829] py-[96px] relative z-10" aria-labelledby="problem-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
                  The Competitive Landscape
                </span>
                <h2 id="problem-heading" className="text-[32px] md:text-[38px] font-extrabold text-[#0B1829] mb-4 font-sora tracking-tight">
                  {config.problemSectionTitle}
                </h2>
                <p className="text-[#3D5A73] text-[16px] max-w-2xl mx-auto font-sans leading-relaxed">
                  Local business marketing requires localized search visibility and data-driven ad structures to prevent wasted spend.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Problems List */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1829] mb-8 flex items-center gap-3 font-sora tracking-tight">
                    <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-sm font-bold shadow-sm">✕</span>
                    The Digital Challenges
                  </h3>
                  <div className="space-y-4">
                    {config.problems.map((prob, i) => (
                      <div key={i} className="bg-[#E24B4A]/[0.04] border-y border-r border-[#E3EEF7] border-l-[3px] border-l-[#E24B4A] p-5 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-start gap-3">
                          <span className="text-[#E24B4A] flex-shrink-0 mt-0.5" aria-hidden="true">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-bold text-[#0B1829] text-[15px] font-sora leading-tight mt-0.5">{prob.title}</h4>
                            <p className="text-[#3D5A73] text-[14px] font-sans leading-relaxed mt-2">{prob.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions List */}
                <div>
                  <h3 className="text-xl font-bold text-[#0B1829] mb-8 flex items-center gap-3 font-sora tracking-tight">
                    <span className="w-8 h-8 rounded-full bg-[#00C68A]/10 flex items-center justify-center text-[#00C68A] text-sm font-bold shadow-sm">✓</span>
                    The GrowLimo Solutions
                  </h3>
                  <div className="space-y-4">
                    {config.solutions.map((sol, i) => (
                      <div key={i} className="bg-[#00C68A]/[0.04] border-y border-r border-[#E3EEF7] border-l-[3px] border-l-[#00C68A] p-5 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-start gap-3">
                          <span className="text-[#00C68A] flex-shrink-0 mt-0.5" aria-hidden="true">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <div>
                            <h4 className="font-bold text-[#0B1829] text-[15px] font-sora leading-tight mt-0.5">{sol.title}</h4>
                            <p className="text-[#3D5A73] text-[14px] font-sans leading-relaxed mt-2">{sol.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── 3. SERVICES SECTION ─── */}
        <section className="bg-[#05080F] text-white py-[96px] border-t border-white/5 relative z-10" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
                Our Core Services
              </span>
              <h2 id="services-heading" className="text-[32px] md:text-[38px] font-extrabold text-[#F0F4FF] mb-4 font-sora tracking-tight">
                {config.servicesSectionTitle}
              </h2>
              <p className="text-[#8FA8C8] text-[16px] max-w-2xl mx-auto font-sans leading-relaxed">
                We engineer performance marketing and web designs built around how customers in your target market search and convert.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {config.services.map((svc, i) => {
                // Return icons based on service index
                let icon = null;
                if (i === 0) {
                  icon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
                } else if (i === 1) {
                  icon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>;
                } else if (i === 2) {
                  icon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
                } else {
                  icon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
                }

                return (
                  <ServiceCard
                    key={i}
                    icon={icon}
                    title={svc.title}
                    description={svc.desc}
                    bullets={svc.bullets}
                    ctaText={svc.ctaText}
                    onCtaClick={scrollToContact}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 4. DIFFERENTIATORS SECTION ─── */}
        <section className="bg-[#080D18] py-[96px] border-t border-white/5 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
                Why GrowLimo
              </span>
              <h2 className="text-[32px] md:text-[38px] font-extrabold text-[#F0F4FF] mb-4 font-sora tracking-tight">
                Our Agency Differentiators
              </h2>
              <p className="text-[#8FA8C8] text-[16px] max-w-2xl mx-auto font-sans leading-relaxed">
                We work as a transparent growth partner rather than a siloed agency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.differentiators.map((diff, i) => (
                <DifferentiatorCard
                  key={i}
                  title={diff.title}
                  desc={diff.desc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. PROCESS SECTION ─── */}
        <section className="bg-[#0C1220] py-[96px] border-t border-white/5 relative z-10 text-center">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
                Our Methodology
              </span>
              <h2 className="text-[32px] md:text-[38px] font-extrabold text-[#F0F4FF] mb-4 font-sora tracking-tight">
                How We Deliver Growth
              </h2>
              <p className="text-[#8FA8C8] text-[16px] max-w-xl mx-auto font-sans leading-relaxed">
                A simple, data-backed onboarding and optimization process built around revenue ROI.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto mt-12">
              {/* Connector line for desktop */}
              <div className="absolute top-[30px] left-12 right-12 h-0.5 border-t border-dashed border-[#00C68A]/30 z-0 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {config.process.map((step, idx) => (
                  <ProcessStep
                    key={idx}
                    number={step.step}
                    title={step.title}
                    description={step.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. CASE STUDIES / RESULTS SECTION ─── */}
        <section id="results-section" className="bg-[#080D18] py-[96px] border-t border-white/5 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
                Proven Track Record
              </span>
              <h2 className="text-[32px] md:text-[38px] font-extrabold text-[#F0F4FF] mb-4 font-sora tracking-tight">
                {config.caseStudiesTitle}
              </h2>
              <p className="text-[#8FA8C8] text-[16px] max-w-2xl mx-auto font-sans leading-relaxed">
                {config.caseStudiesIntro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case study 1 */}
              <div className="bg-[#1A2438] border border-white/8 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#00C68A] transition-all duration-200">
                <div className="p-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00C68A] bg-[#00C68A]/10 py-1 px-3 rounded-full">
                    Google Ads & CRO Case Study
                  </span>
                  <h3 className="text-xl font-bold text-white font-sora tracking-tight mt-4 mb-3 leading-snug">
                    San Francisco Physio Clinic: 670 Leads & 17x ROAS in 90 Days
                  </h3>
                  <p className="text-[14px] text-[#8FA8C8] font-sans leading-relaxed mb-6">
                    A prominent physical therapy and rehab clinic in a highly competitive metro area restructured their PPC campaigns. By shifting to high-intent transactional search silos and custom landing pages, they turned a $7,850 ad budget into over $140,000 in new patient revenue.
                  </p>
                  
                  {/* Stats band */}
                  <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
                    <div>
                      <div className="text-xl font-extrabold text-white font-sora">670</div>
                      <div className="text-[10px] text-[#4A6080] uppercase tracking-wider font-semibold font-sans">Leads</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-white font-sora">12.9%</div>
                      <div className="text-[10px] text-[#4A6080] uppercase tracking-wider font-semibold font-sans">Conv. Rate</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-white font-sora">17x</div>
                      <div className="text-[10px] text-[#4A6080] uppercase tracking-wider font-semibold font-sans">ROAS</div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1F2B3E] px-8 py-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs text-[#8FA8C8] font-sans">Location: San Francisco, CA</span>
                  <Link href="/case-studies/physiotherapy-google-ads-san-francisco/" className="text-xs text-[#00C68A] font-semibold hover:underline">
                    Read Full Case Study →
                  </Link>
                </div>
              </div>

              {/* Case study 2 */}
              <div className="bg-[#1A2438] border border-white/8 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#00C68A] transition-all duration-200">
                <div className="p-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00C68A] bg-[#00C68A]/10 py-1 px-3 rounded-full">
                    PPC Lead Quality Case Study
                  </span>
                  <h3 className="text-xl font-bold text-white font-sora tracking-tight mt-4 mb-3 leading-snug">
                    Fremont Sports Clinic: $75,000 Revenue at 8.2x ROAS in 90 Days
                  </h3>
                  <p className="text-[14px] text-[#8FA8C8] font-sans leading-relaxed mb-6">
                    A leading sports rehabilitation center struggled with broad clicks that did not convert. GrowLimo rebuilt their keyword structure and introduced ad-level lead filters to actively deter low-intent searchers, driving 348 qualified leads and $75,000+ in revenue.
                  </p>
                  
                  {/* Stats band */}
                  <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
                    <div>
                      <div className="text-xl font-extrabold text-white font-sora">348</div>
                      <div className="text-[10px] text-[#4A6080] uppercase tracking-wider font-semibold font-sans">Leads</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-white font-sora">$26.15</div>
                      <div className="text-[10px] text-[#4A6080] uppercase tracking-wider font-semibold font-sans">CPL</div>
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-white font-sora">8.2x</div>
                      <div className="text-[10px] text-[#4A6080] uppercase tracking-wider font-semibold font-sans">ROAS</div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1F2B3E] px-8 py-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs text-[#8FA8C8] font-sans">Location: Fremont, CA</span>
                  <Link href="/case-studies/sports-rehab-google-ads-fremont/" className="text-xs text-[#00C68A] font-semibold hover:underline">
                    Read Full Case Study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. TESTIMONIALS SECTION ─── */}
        {/*
        TODO: insert real client testimonials once local client stories exist.
        In the meantime, the section is commented out to avoid fabricated claims or mixed context.
        */}

        {/* ─── 8. PRICING / INVESTMENT SECTION ─── */}
        <section className="bg-white text-[#0B1829] py-[96px] relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
                Pricing & Investment
              </span>
              <h2 className="text-[32px] md:text-[38px] font-extrabold text-[#0B1829] mb-4 font-sora tracking-tight">
                {config.pricing?.title || 'GrowLimo Service Packages'}
              </h2>
              <p className="text-[#3D5A73] text-[16px] max-w-2xl mx-auto font-sans leading-relaxed">
                {config.pricing?.intro || 'Predictable growth investments scaled to your business stage. No hidden fees, clear monthly deliverables.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.pricing.packages.map((pkg, i) => (
                <div key={i} className="border border-[#E3EEF7] rounded-2xl p-8 flex flex-col justify-between bg-white hover:border-[#00C68A] transition-all duration-200 hover:shadow-lg relative overflow-hidden">
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-[#00C68A] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-4 rounded-bl-lg font-sans">
                      Popular
                    </div>
                  )}
                  <div>
                    <h3 className="font-sora font-bold text-[18px] text-[#0B1829] mb-2">{pkg.name}</h3>
                    <p className="text-xs text-[#3D5A73] mb-6">{pkg.desc}</p>
                    <div className="text-[28px] font-extrabold text-[#0B1829] font-sora mb-6 leading-tight">
                      {pkg.price}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-sm text-[#3D5A73] font-sans">
                          <span className="text-[#00C68A] font-bold">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-3 px-4 rounded-xl transition-colors duration-200 text-sm cursor-pointer"
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 9. FAQ SECTION ─── */}
        <section className="bg-[#05080F] text-white py-[96px] relative z-10" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
                FAQ
              </span>
              <h2 id="faq-heading" className="text-[32px] md:text-[38px] font-extrabold font-sora text-[#F0F4FF] mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-[#8FA8C8] text-[16px] font-sans max-w-2xl mx-auto leading-relaxed">
                Answers to common questions about our services, contracts, and execution timelines in the local market.
              </p>
            </div>

            <div className="max-w-3xl mx-auto" role="region" aria-labelledby="faq-heading">
              <div className="space-y-2">
                {config.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className={`border rounded-xl transition-all duration-200 ease-in-out ${
                        isOpen
                          ? 'border-[#00C68A]/25 bg-[#1F2B3E]'
                          : 'border-white/7 bg-[#1A2438]'
                      }`}
                    >
                      <dt>
                        <button
                          id={`faq-button-${index}`}
                          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none rounded-xl transition-all duration-200 cursor-pointer"
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${index}`}
                        >
                          <span className="font-semibold text-[#F0F4FF] text-[15px] font-sora leading-snug">
                            {faq.q}
                          </span>
                          <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                            <svg
                              className={`w-5 h-5 text-[#00C68A] flex-shrink-0 transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                      </dt>
                      <dd>
                        <div
                          id={`faq-answer-${index}`}
                          className={`px-6 transition-all duration-200 ease-in-out ${
                            isOpen
                              ? 'max-h-[500px] opacity-100 pb-5 pt-1'
                              : 'max-h-0 opacity-0 overflow-hidden pb-0 pt-0'
                          }`}
                          role="region"
                          aria-labelledby={`faq-button-${index}`}
                        >
                          <p className="text-[14px] text-[#8FA8C8] leading-[1.7] font-sans">
                            {faq.a}
                          </p>
                        </div>
                      </dd>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. FINAL CTA WITH FORM ─── */}
        <section id="contact-form" className="bg-[#080D18] py-[100px] relative overflow-hidden border-t border-white/5 z-10" aria-labelledby="cta-heading">
          {/* Green radial glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00C68A]/8 rounded-full blur-[100px] pointer-events-none z-0" />
          
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="text-center mb-12">
              <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-4 font-sans">
                Schedule a Consultation
              </span>
              <h2 id="cta-heading" className="text-3xl md:text-[44px] font-extrabold text-white mb-5 font-sora tracking-tight leading-tight max-w-2xl mx-auto">
                {config.finalCtaHeadline}
              </h2>
              <p className="text-[#8FA8C8] text-base md:text-lg mb-8 max-w-xl mx-auto font-sans leading-relaxed">
                {config.finalCtaSubhead}
              </p>
            </div>

            {/* Embedded global Form component, unmodified */}
            <div className="max-w-3xl mx-auto">
              <Form
                slug={config.market}
                variant="contact"
                compact={true}
                ctaHeadline="Book Your Strategy Call"
                ctaButtonText="Send Strategy Request"
              />
            </div>
            
            {/* Guarantees band */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left border-t border-white/5 pt-8 mt-12">
              {[
                '30-Minute Local Growth Session',
                'Competitor Analysis & SEO Audit',
                'Custom ROI & Lead Roadmap',
                'No-Obligation Consultation',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#00C68A] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[13px] text-[#8FA8C8] font-medium font-sans">{item}</span>
                </div>
              ))}
            </div>

            {/* Phone & Email direct contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-[#4A6080]">
              <button
                type="button"
                onClick={() => handleCall(ENC.US_PHONE, mountedAt.current)}
                className="hover:text-[#00C68A] transition-colors flex items-center gap-2 font-medium cursor-pointer bg-transparent border-0 p-0"
                aria-label="Call US Head Office"
              >
                <svg className="w-4 h-4 text-[#00C68A] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span><strong>US Head Office:</strong> +1 (667) 347-4729</span>
              </button>
              <a href="mailto:info@growlimo.com" className="hover:text-[#00C68A] transition-colors flex items-center gap-2 font-medium">
                <svg className="w-4 h-4 text-[#00C68A] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@growlimo.com</span>
              </a>
              {config.whatsapp && (
                <button
                  type="button"
                  onClick={() => handleWhatsApp(
                    config.whatsapp === '+971 50 482 6917' ? ENC.DXB_PHONE :
                    config.whatsapp === '+61 437 470 201'  ? ENC.AU_PHONE  : ENC.US_PHONE,
                    config.whatsappMessage || '',
                    mountedAt.current
                  )}
                  className="hover:text-[#00C68A] transition-colors flex items-center gap-2 font-medium cursor-pointer bg-transparent border-0 p-0"
                  aria-label="Chat on WhatsApp"
                >
                  <svg className="w-4 h-4 text-[#00C68A] flex-shrink-0" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  <span><strong>WhatsApp:</strong> {config.whatsapp}</span>
                </button>
              )}
            </div>

          </div>
        </section>

      </div>

      {/* Floating WhatsApp Action Button — JS-only navigation, no wa.me href in HTML */}
      {config.whatsapp && (
        <button
          type="button"
          onClick={() => handleWhatsApp(
            config.whatsapp === '+971 50 482 6917' ? ENC.DXB_PHONE :
            config.whatsapp === '+61 437 470 201'  ? ENC.AU_PHONE  : ENC.US_PHONE,
            config.whatsappMessage || '',
            mountedAt.current
          )}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          {/* Tooltip */}
          <span className="absolute right-16 bg-[#1A2438] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl border border-white/5 whitespace-nowrap">
            Chat with us
          </span>
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </button>
      )}
    </>
  );
}
