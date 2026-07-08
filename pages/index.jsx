import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { getSEOConfig } from '../lib/config';
import { useCountUp } from '../hooks/useCountUp';
import { ENC, WA_MSG, handleCall } from '../lib/contactProtection';

/* ─── Stats Band Card ─── */
function StatCard({ value, suffix, prefix, label }) {
  const isDecimal = value.includes('.');
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const [count, ref] = useCountUp(numericValue);

  return (
    <div
      ref={ref}
      className="flex-1 text-center py-6 px-4 md:px-8 border-b sm:border-b-0 sm:border-r border-white/5 last:border-0"
    >
      <div className="text-[40px] font-extrabold text-[#00C68A] font-sora mb-2 tracking-tight">
        {prefix}
        {isDecimal ? (count / 10).toFixed(1) : count}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-[#4A6080] font-semibold font-sans">{label}</div>
    </div>
  );
}

/* ─── Specialty Card (Services) ─── */
function SpecialtyCard({ icon, title, description, link, ctaText }) {
  return (
    <Link
      href={link}
      className="bg-[#1A2438] border border-white/8 p-[28px] rounded-2xl group hover:bg-[#1F2B3E] hover:border-[#00C68A] transition-all duration-200 hover:scale-[1.02] transform block h-full shadow-lg relative overflow-hidden"
    >
      {/* Top 3px green border line that animates in */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00C68A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left z-20" />

      <div className="w-[52px] h-[52px] rounded-xl bg-[#00C68A]/12 border border-[#00C68A]/20 flex items-center justify-center mb-5 text-[#00C68A] transition-transform duration-200 group-hover:scale-110 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-[17px] font-bold text-white mb-3 font-sora tracking-tight">
        {title}
      </h3>
      <p className="text-[#8FA8C8] text-[16px] leading-relaxed mb-5 font-sans">{description}</p>
      <span className="text-[#00C68A] text-sm font-semibold inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform duration-200">
        {ctaText || 'Learn More'} <span className="text-xs">→</span>
      </span>
    </Link>
  );
}

/* ─── Process Step ─── */
function ProcessStep({ number, title, description, isLast }) {
  return (
    <div className="flex-1 flex flex-col items-center text-center relative px-4">
      {/* Circle Step Number */}
      <div className="w-[60px] h-[60px] rounded-full bg-[#00C68A] flex items-center justify-center text-[#05080F] font-extrabold text-[20px] font-sora relative z-10 shadow-lg shadow-[#00C68A]/15">
        {number}
      </div>

      {/* Process Content */}
      <h3 className="text-[15px] font-bold text-white mt-5 mb-2 font-sora tracking-tight">{title}</h3>
      <p className="text-[13px] text-[#8FA8C8] leading-relaxed font-sans max-w-[200px]">{description}</p>
    </div>
  );
}

export default function Home() {
  const seo = getSEOConfig('/');
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const mountedAt = useRef(null);
  useEffect(() => { mountedAt.current = Date.now(); }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
      window.location.href = `/contact/?email=${encodeURIComponent(emailInput)}`;
    }
  };

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url="https://growlimo.com/"
        isHomepage={true}
        disableSuffix={true}
      />

      {/* 1. Navbar (Sticky Nav - Handled Globally in Layout) */}

      {/* 2. Hero Section */}
      <Hero h1Text={seo.h1} />

      {/* 4. Problem / Solution [White #FFFFFF Section] */}
      <section className="bg-[#FFFFFF] text-[#0B1829] py-[96px] relative z-10" aria-labelledby="problem-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
                Growth Barriers vs Solutions
              </span>
              <h2 id="problem-heading" className="text-[38px] font-extrabold text-[#0B1829] mb-4 font-sora tracking-tight">
                Why Businesses Across the USA Choose Growlimo
              </h2>
              <p className="text-[#3D5A73] text-[16px] max-w-2xl mx-auto font-sans">
                Data-Driven Marketing for Any Industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Problem Column */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1829] mb-8 flex items-center gap-3 font-sora tracking-tight">
                  <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-sm font-bold shadow-sm">✕</span>
                  The Digital Marketing Challenges
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Stagnant Organic Growth', desc: "Your business doesn't appear when customers search for your services online. You’re losing ground to competitors." },
                    { title: 'High Ad Spend, Low ROI', desc: 'Your Google Ads cost too much and convert too little. You’re wasting budget on non-converting clicks.' },
                    { title: 'Inconsistent Brand Presence', desc: 'Your website and social media profiles feel outdated and don’t build the trust needed to close high-value deals.' },
                    { title: 'Leads Falling Through the Cracks', desc: 'New inquiries slip through the cracks due to slow response times and a lack of automated follow-up systems.' },
                    { title: 'No Data-Driven Strategy', desc: 'You’re guessing what works instead of using a clear roadmap backed by real-time ROI and performance data.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#E24B4A]/[0.04] border-y border-r border-[#E3EEF7] border-l-[3px] border-l-[#E24B4A] p-5 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <span className="text-[#E24B4A] flex-shrink-0 mt-0.5" aria-hidden="true">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                        <div>
                          <h4 className="font-bold text-[#0B1829] text-[15px] font-sora leading-tight mt-0.5">{item.title}</h4>
                          <p className="text-[#3D5A73] text-[16px] font-sans leading-relaxed mt-2">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Column */}
              <div>
                <h3 className="text-xl font-bold text-[#0B1829] mb-8 flex items-center gap-3 font-sora tracking-tight">
                  <span className="w-8 h-8 rounded-full bg-[#00C68A]/10 flex items-center justify-center text-[#00C68A] text-sm font-bold shadow-sm">✓</span>
                  How Growlimo Solves These Problems
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Data-Driven SEO Dominance', desc: 'Rank #1 for high-intent buyer searches and dominate the local map pack in your target markets nationwide.' },
                    { title: 'ROI-Focused PPC Management', desc: 'Laser-targeted Google Ads campaigns that cut wasted spend and maximize your cost-per-acquisition.' },
                    { title: 'Conversion-Optimized Web Design', desc: 'High-speed, modern websites built to turn visitors into paying customers the moment they land.' },
                    { title: 'AI-Powered Lead Automation', desc: 'Automate lead follow-ups with instant SMS and email nurture sequences to close more deals, faster.' },
                    { title: 'Transparent ROI Reporting', desc: 'Get a custom dashboard that ties every dollar spent directly to new leads and revenue generated.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#00C68A]/[0.04] border-y border-r border-[#E3EEF7] border-l-[3px] border-l-[#00C68A] p-5 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <span className="text-[#00C68A] flex-shrink-0 mt-0.5" aria-hidden="true">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <div>
                          <h4 className="font-bold text-[#0B1829] text-[15px] font-sora leading-tight mt-0.5">{item.title}</h4>
                          <p className="text-[#3D5A73] text-[16px] font-sans leading-relaxed mt-2">{item.desc}</p>
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

      {/* 5. Services Grid [Dark Navy #05080F Section] */}
      <section className="bg-[#05080F] text-white py-[96px] border-t border-white/5 relative z-10" aria-labelledby="specialty-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
              Expert Growth Services
            </span>
            <h2 id="specialty-heading" className="text-[38px] font-extrabold text-[#F0F4FF] mb-4 font-sora tracking-tight">
              Digital Marketing Services
            </h2>
            <p className="text-[#8FA8C8] text-[16px] max-w-2xl mx-auto font-sans">
              Comprehensive Growth Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <SpecialtyCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
              title="SEO Services"
              description="Nationwide SEO to dominate Google search and beat your local and national competitors."
              link="/contact/"
              ctaText="See How We Help"
            />
            <SpecialtyCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>}
              title="Google Ads Management"
              description="High-ROI PPC campaigns that target your most profitable keywords with surgical precision."
              link="/contact/"
              ctaText="See How We Help"
            />
            <SpecialtyCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>}
              title="Social Media Marketing"
              description="Engaging content and growth strategies for Instagram, Facebook, and LinkedIn."
              link="/contact/"
              ctaText="See How We Help"
            />
            <SpecialtyCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Meta Ads Agency"
              description="Scale fast with high-converting Facebook and Instagram ads targeted to your ideal customers."
              link="/contact/"
              ctaText="See How We Help"
            />
            <SpecialtyCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="Web Design & Dev"
              description="Beautiful, high-speed websites designed to convert visitors into loyal, paying customers."
              link="/contact/"
              ctaText="See How We Help"
            />
            <SpecialtyCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="Email Marketing"
              description="Nurture your leads and increase customer lifetime value with automated email sequences."
              link="/contact/"
              ctaText="See How We Help"
            />
          </div>
        </div>
      </section>

      {/* 6. Industry Feature [White #FFFFFF Section] */}
      <section className="bg-[#FFFFFF] text-[#0B1829] py-[96px] border-t border-[#E3EEF7] relative z-10" aria-labelledby="feature-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">

            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start pl-6 lg:pl-8 border-l-[3px] border-l-[#00C68A]">
              <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
                HEALTHCARE MARKETING
              </span>
              <h2 id="feature-heading" className="text-[38px] font-extrabold font-sora text-[#0B1829] mb-6 tracking-tight leading-tight">
                Dominate Healthcare & Local Lead Generation
              </h2>
              <p className="text-[#3D5A73] text-[16px] leading-relaxed mb-8 max-w-lg font-sans">
                We partner with medical groups, clinics, and local services to build sustainable, high-converting pipelines. Our system positions you as the trusted local leader, scaling patient bookings and phone inquiries predictably.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-5 mb-8 w-full">
                {[
                  "HIPAA-compliant marketing and lead capture setups",
                  "Search engine dominance for high-value patient search queries",
                  "Advanced campaign strategies cutting client acquisition costs by up to 50%",
                  "Comprehensive ROI reporting linking patient calls to marketing dollars"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="w-[36px] h-[36px] rounded-full bg-[#00C68A] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#00C68A]/20">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[#0B1829] font-bold font-sora text-base leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Book a Free Call CTA */}
              <Link
                href="/contact/"
                className="bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold h-[52px] min-w-[180px] flex items-center justify-center rounded-xl transition-all duration-200 shadow-lg shadow-[#DD6613]/25 hover:shadow-xl hover:scale-[1.02] transform"
              >
                Book a Free Call
              </Link>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 flex justify-center h-full min-h-[400px]">
              <div className="relative w-full h-full max-w-[500px] lg:max-w-none">
                <div className="w-full h-full min-h-[400px] rounded-[16px] overflow-hidden border border-[#E3EEF7] shadow-xl relative bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/industry-healthcare.webp"
                    alt="Diverse healthcare professionals analyzing business performance graphs"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Process Steps [Dark Navy #080D18 Section] */}
      <section
        className="bg-[#080D18] text-white py-[96px] border-t border-white/5 relative overflow-hidden z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0,198,138,0.05) 0%, #080D18 70%)'
        }}
        aria-labelledby="process-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
              Our Methodology
            </span>
            <h2 id="process-heading" className="text-[38px] font-extrabold text-[#F0F4FF] mb-4 font-sora tracking-tight">
              Our Growth Marketing Process
            </h2>
            <p className="text-[#8FA8C8] text-[16px] max-w-2xl mx-auto font-sans">
              How We Grow Your Business
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connector dashed line (desktop) */}
            <div className="absolute top-[30px] left-8 right-8 h-0.5 border-t border-dashed border-[#00C68A]/30 z-0 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-6 relative z-10">
              <ProcessStep number={1} title="Marketing Audit" description="Complete analysis of your current digital presence, competitor landscape, and revenue gaps (Week 1)." />
              <ProcessStep number={2} title="Strategy Dev" description="Build your personalized growth roadmap with clear KPIs, timelines, and expected ROI (Week 2)." />
              <ProcessStep number={3} title="Campaign Launch" description="Execute SEO optimization, launch high-ROI ad campaigns, and implement lead automation (Week 3-4)." />
              <ProcessStep number={4} title="Optimization" description="Weekly performance reviews, A/B testing, and strategy refinement to maximize your leads and ROI (Ongoing)." />
              <ProcessStep number={5} title="Transparent Reporting" description="Detailed analytics dashboards showing cost-per-acquisition, total revenue, and your marketing ROI (Monthly)." />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials [White #FFFFFF Section] */}
      <Testimonials limit={4} lightTheme={true} />

      {/* 9. Industries Chip Cloud [Dark Navy #0C1220 Section] */}
      <section className="bg-[#0C1220] text-white py-[96px] border-t border-white/5 relative z-10" aria-labelledby="hub-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
              National Market Coverage
            </span>
            <h2 id="hub-heading" className="text-[38px] font-extrabold text-[#F0F4FF] mb-4 font-sora tracking-tight">
              Accelerate Your Growth in Key Markets
            </h2>
            <p className="text-[#8FA8C8] text-[16px] max-w-xl mx-auto font-sans">
              Surgical marketing dominance tailored across target local and healthcare demographics
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              { name: 'Healthcare Marketing CA', link: '/healthcare-digital-marketing-agency-california/' },
              { name: 'Healthcare Marketing TX', link: '/healthcare-digital-marketing-agency-texas/' },
              { name: 'Dentist Marketing CA', link: '/dentist-digital-marketing-agency-california/' },
              { name: 'Dentist Marketing TX', link: '/dentist-digital-marketing-agency-texas/' },
              { name: 'Healthcare SEO CA', link: '/healthcare-seo-services-california/' },
              { name: 'Healthcare SEO TX', link: '/healthcare-seo-services-texas/' },
              { name: 'Dentist SEO CA', link: '/dentist-seo-services-california/' },
              { name: 'Dentist SEO TX', link: '/dentist-seo-services-texas/' },
              { name: 'California SEO', link: '/seo-services-california/' },
              { name: 'Texas SEO', link: '/seo-services-texas/' },
              { name: 'Google Ads CA', link: '/google-ads-management-california/' },
              { name: 'Google Ads TX', link: '/google-ads-management-texas/' },
              { name: 'Dubai Marketing Agency', link: '/dubai/' },
              { name: 'Australia Marketing Agency', link: '/australia/' },
              { name: 'Marketing Case Studies', link: '/case-studies/' },
              { name: 'About Us', link: '/about/' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="bg-[#1A2438] border border-white/8 py-2.5 px-5 rounded-full hover:bg-[#00C68A]/12 hover:border-[#00C68A]/35 hover:text-[#00C68A] text-[#8FA8C8] transition-all duration-200 text-[14px] font-medium shadow-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9.5. FAQ Section [Dark Navy #05080F Section] */}
      <FAQ limit={6} />

      {/* 10. CTA Section [Dark Navy #080D18 Section] */}
      <section className="bg-[#080D18] text-white py-[100px] relative overflow-hidden border-t border-white/5 z-10" aria-labelledby="cta-heading">
        {/* Real radial green glow behind the content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00C68A]/8 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-4 font-sans">
              Schedule a Consultation
            </span>
            <h2 id="cta-heading" className="text-3xl md:text-[44px] font-extrabold text-white mb-5 font-sora tracking-tight leading-tight max-w-2xl mx-auto">
              Ready to Grow Your Business <span className="text-[#00C68A]">Predictably</span>?
            </h2>
            <p className="text-[#8FA8C8] text-base md:text-lg mb-10 max-w-xl mx-auto font-sans leading-relaxed">
              Book a free 30-minute strategy session. Enter your work email below to reserve your roadmap and competitive audit call instantly.
            </p>

            {/* Centered CTA button with subtle radial green glow behind it */}
            <div className="flex justify-center mb-10">
              <div className="relative inline-flex items-center justify-center">
                {/* Subtle radial green glow behind the button only */}
                <div
                  className="absolute w-[400px] h-[200px] pointer-events-none z-0"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(0,198,138,0.07) 0%, transparent 70%)',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                <Link
                  href="/contact/"
                  className="relative z-10 bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold text-[15px] py-4 px-[36px] rounded-[10px] transition-all duration-200 shadow-md hover:shadow-lg text-center"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>

            {/* Below form guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left border-t border-white/5 pt-8">
              {[
                '30-Minute Growth Strategy Session',
                'Competitor Marketing Analysis',
                'Custom ROI & Lead Roadmap',
                'No-Obligation Transparent Pricing',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#00C68A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[13px] text-[#8FA8C8] font-medium font-sans">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-[#4A6080]">
              <button
                type="button"
                onClick={() => handleCall(ENC.US_PHONE, mountedAt.current)}
                className="hover:text-[#00C68A] transition-colors flex items-center gap-2 font-medium cursor-pointer bg-transparent border-0 p-0 text-[#4A6080]"
                aria-label="Call US Office"
              >
                <svg className="w-4 h-4 text-[#00C68A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span><strong>US:</strong> +1 (667) 347-4729</span>
              </button>
              <a href="mailto:info@growlimo.com" className="hover:text-[#00C68A] transition-colors flex items-center gap-2 font-medium">
                <svg className="w-4 h-4 text-[#00C68A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@growlimo.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
