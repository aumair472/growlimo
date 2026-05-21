import { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import { getSEOConfig } from '../lib/config';
import Form from '../components/common/Form';

const whyChooseUs = [
  {
    title: 'Nationwide Industry Expertise',
    desc: 'We serve local businesses, startups, and enterprises across the entire United States. Our specialized teams provide expert digital solutions that dominate competitive markets.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m0 0l-3-3m3 3l3-3M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      </svg>
    )
  },
  {
    title: 'Proven Growth Results',
    desc: 'Over 500 businesses trust us to manage their digital presence. Our clients see an average of 713% revenue increase and 31% reduction in lead costs.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Data-First Strategy',
    desc: 'Every campaign is backed by real-time data and profit tracking. We don’t just report on clicks; we report on the revenue generated for your business.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    title: 'Transparent ROI Tracking',
    desc: 'Your custom dashboard shows exactly where every dollar goes. No hidden fees or confusing jargon—just clear results you can bank on.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: 'Dedicated Account Strategists',
    desc: 'You work with a dedicated specialist who understands your unique goals and proactively optimizes your campaigns for maximum performance.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
];

const faqData = [
  {
    q: 'How quickly can we start seeing results?',
    a: "Campaign setup typically takes 7-10 days. Most businesses see meaningful improvements in lead quality and ad performance within month 1, with long-term SEO growth compounding over 3-6 months.",
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'No. While marketing works best over 6-12 months, we offer month-to-month agreements. We earn your business every month through performance, not fine print.',
  },
  {
    q: 'Do you work with businesses across the entire United States?',
    a: "Yes! We serve clients in all 50 states. Our digital strategies are built to scale and work in any competitive landscape across the USA.",
  },
  {
    q: "What's the typical ROI for your campaigns?",
    a: 'Most clients see a 4-8x ROI on their ad spend and significant revenue growth through organic search. We focus on total revenue, not just traffic volume.',
  },
  {
    q: 'Do you only work with large enterprises?',
    a: 'No. We work with local service providers and small businesses up to multi-location franchises. Our services are tailored to fit your specific growth stage and budget.',
  },
];

const steps = [
  {
    step: '1',
    title: 'Growth Strategy Session (30 min)',
    desc: "We’ll discuss your business goals, current challenges, and market opportunities. This is an honest consultation to map out your growth potential.",
  },
  {
    step: '2',
    title: 'Deep-Dive Audit (3-5 days)',
    desc: 'Our specialists conduct a comprehensive audit of your SEO, paid ads, and technical infrastructure to find every growth opportunity.',
  },
  {
    step: '3',
    title: 'Roadmap Presentation (45 min)',
    desc: 'We present our findings, actionable recommendations, projected ROI, and transparent pricing tailored to your business.',
  },
  {
    step: '4',
    title: 'Campaign Kickoff',
    desc: "Review the proposal and finalize the target goals. We move only when you’re confident in the roadmap and the projected results.",
  },
  {
    step: '5',
    title: 'Implementation & Launch',
    desc: "We handle the heavy lifting—from technical setup to ad launch. You’ll have a dedicated team monitoring your growth 24/7 with monthly detailed reports.",
  },
];

const testimonials = [
  {
    quote:
      "Growlimo took our law firm from page 8 to position #1 for our top keywords. Their PPC campaigns are generating $50K in new client revenue every single month.",
    name: 'James Harrington',
    role: 'Managing Partner, Harrington Law Group, Dallas, TX',
  },
  {
    quote:
      "Best marketing investment we have ever made. Our website traffic grew 240% and we cut our cost per lead in half within just 6 months.",
    name: 'Sarah Chen',
    role: 'Owner, Chen Medical Group, Los Angeles, CA',
  },
  {
    quote:
      'Finally a marketing agency that actually understands ROI. We went from 2 to 17 on Google Ads quality score. Qualified leads flow in daily.',
    name: 'Robert Martinez',
    role: 'Director, Martinez Home Services, Houston, TX',
  },
];

const trustSignals = [
  '500+ Businesses Served Nationwide',
  '$25M+ Revenue Generated for Clients',
  '713% Avg. Client Revenue Increase',
  'Google Partner Certified Agency',
  'Transparent ROI Tracking Systems',
];

export default function Contact() {
  const seo = getSEOConfig('/contact');
  const [openFaq, setOpenFaq] = useState(null);

  const getInitials = (name) => {
    return name
      .split(' ')
      .filter(n => n)
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url="https://growlimo.com/contact/"
      />

      <div className="bg-[#080D18] text-white">
        
        {/* ── HERO SECTION ── */}
        <section className="bg-[#080D18] pt-[80px] pb-[40px] text-center relative z-10">
          <div className="container mx-auto px-4">
            
            {/* Eyebrow badge */}
            <div className="bg-[rgba(0,198,138,0.10)] border border-[rgba(0,198,138,0.25)] text-[#00C68A] text-[11px] font-bold uppercase tracking-[2px] rounded-full py-[5px] px-[14px] mb-5 inline-flex font-sans leading-none">
              GET IN TOUCH
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-[48px] font-extrabold font-sora text-[#F0F4FF] leading-[1.08] mb-[18px] text-center tracking-tight">
              {seo.h1}
            </h1>

            {/* Paragraph + links */}
            <p className="text-[17px] text-[#8FA8C8] font-sans leading-relaxed max-w-[600px] mx-auto">
              Whether you need a complete digital audit, high-ROI paid media
              strategy, or custom lead acquisition plan, our digital
              marketing specialists are ready to help.{' '}
              <Link href="/about/" className="text-[#00C68A] hover:underline transition-all duration-200">
                Learn more about Growlimo
              </Link>{' '}
              or see{' '}
              <Link href="/case-studies/" className="text-[#00C68A] hover:underline transition-all duration-200">
                real results from real clients
              </Link>{' '}
              to understand our impact.
            </p>
          </div>
        </section>

        {/* ── FORM SECTION ── */}
        <section className="bg-[#080D18] relative z-10">
          <div className="max-w-[1000px] mx-auto px-10 pb-20">
            <Form
              variant="contact"
              ctaHeadline="Schedule Your 30-Minute Lead Mapping Session"
              ctaButtonText="Send Message"
            />
          </div>
        </section>

        {/* ── WHY BUSINESSES CHOOSE GROWLIMO ── */}
        <section className="bg-[#FFFFFF] py-[96px] relative z-10 text-center">
          <div className="container mx-auto px-4 max-w-6xl">
            
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block mb-2.5 font-sans leading-none">
              WHY GROWLIMO
            </span>

            <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#0B1829] mb-[48px] text-center tracking-tight">
              Why Businesses Choose Growlimo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
              {whyChooseUs.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-[#FFFFFF] border border-[#E3EEF7] rounded-[14px] p-7 transition-all duration-200 hover:border-[#00C68A] hover:shadow-[0_4px_24px_rgba(0,198,138,0.08)] group"
                >
                  <div className="w-[44px] h-[44px] rounded-full bg-[rgba(0,198,138,0.10)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center text-[#00C68A] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-sora font-bold text-[16px] text-[#0B1829] mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[14px] text-[#3D5A73] leading-[1.65]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── WHAT HAPPENS AFTER YOU CONTACT US ── */}
        <section className="bg-[#080D18] py-[96px] relative z-10 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block mb-2.5 font-sans leading-none">
              THE PROCESS
            </span>

            <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#F0F4FF] mb-[56px] text-center tracking-tight max-w-[760px] mx-auto">
              What Happens After You Contact Us
            </h2>

            {/* Vertical timeline */}
            <div className="relative max-w-[700px] mx-auto text-left">
              
              {/* Vertical line */}
              <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-[rgba(0,198,138,0.15)]" />

              <div className="space-y-5">
                {steps.map((s, idx) => (
                  <div key={idx} className="flex gap-6 items-start relative">
                    
                    {/* Circle Left */}
                    <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-[#00C68A] border-[3px] border-[#080D18] flex items-center justify-center z-10">
                      <span className="font-sora font-extrabold text-[18px] text-[#080D18] leading-none">
                        {s.step}
                      </span>
                    </div>

                    {/* Card Right */}
                    <div className="bg-[#1A2438] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-5 md:py-5 md:px-6 flex-1">
                      <h3 className="font-sora font-bold text-[15px] text-[#F0F4FF] mb-1.5 leading-tight">
                        {s.title}
                      </h3>
                      <p className="font-sans text-[14px] text-[#8FA8C8] leading-[1.65]">
                        {s.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ── SUCCESS STORIES (TESTIMONIALS) ── */}
        <section className="bg-[#FFFFFF] py-[96px] relative z-10 text-center">
          <div className="container mx-auto px-4 max-w-6xl">
            
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block mb-2.5 font-sans leading-none">
              SUCCESS STORIES
            </span>

            <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#0B1829] mb-[48px] text-center tracking-tight">
              Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="bg-[#FFFFFF] border border-[#E3EEF7] rounded-[14px] p-7 transition-all duration-200 hover:border-[#00C68A] hover:shadow-[0_4px_24px_rgba(0,198,138,0.08)] flex flex-col justify-between"
                >
                  <div>
                    {/* Stars */}
                    <div className="text-[#DD6613] text-[15px] mb-3 select-none tracking-wider">
                      ★★★★★
                    </div>
                    
                    {/* Quote */}
                    <p className="font-sans text-[15px] italic text-[#3D5A73] leading-[1.75] mb-5">
                      "{t.quote}"
                    </p>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="border-t border-[#E3EEF7] w-full my-4" />

                    {/* Author row */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0B1829] flex items-center justify-center shrink-0">
                        <span className="font-sora font-bold text-[13px] text-[#00C68A] leading-none">
                          {getInitials(t.name)}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans font-bold text-[14px] text-[#0B1829] leading-tight">
                          {t.name}
                        </span>
                        <span className="font-sans text-[12px] text-[#6B8499] mt-0.5 leading-none">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="bg-[#0C1220] py-[96px] relative z-10 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            
            <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2.5px] block mb-2.5 font-sans leading-none">
              FAQ
            </span>

            <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#F0F4FF] mb-[40px] text-center tracking-tight max-w-[760px] mx-auto">
              Frequently Asked Questions
            </h2>

            <div className="space-y-2.5 max-w-[760px] mx-auto text-left">
              {faqData.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div 
                    key={i} 
                    className={`border rounded-[12px] p-5 md:py-5 md:px-6 transition-all duration-200 ${
                      isOpen 
                        ? 'bg-[#1F2B3E] border-[rgba(0,198,138,0.25)]' 
                        : 'bg-[#1A2438] border-[rgba(255,255,255,0.07)]'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-sora font-semibold text-[15px] text-[#F0F4FF] pr-4 leading-snug">
                        {faq.q}
                      </span>
                      <svg
                        className={`w-5 h-5 shrink-0 text-[#00C68A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <p className="font-sans text-[14px] text-[#8FA8C8] leading-[1.7]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── TRUST SIGNALS BAR ── */}
        <section className="bg-[#1A2438] border-t border-b border-[rgba(255,255,255,0.06)] py-7 px-10 relative z-10 text-center select-none">
          <div className="container mx-auto max-w-5xl flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {trustSignals.map((item, i) => (
              <div key={i} className="inline-flex items-center gap-2">
                <span className="text-[#00C68A] font-bold text-[16px] leading-none select-none">
                  ✓
                </span>
                <span className="font-sans text-[13px] text-[#8FA8C8] leading-none">
                  {item}
                </span>
                {i < trustSignals.length - 1 && (
                  <span className="text-[#4A6080] ml-6 hidden md:inline select-none font-bold">
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICE DIRECTORY ── */}
        <section className="bg-[#0C1220] py-[72px] relative z-10">
          <div className="container mx-auto px-4 max-w-4xl">
            
            <h2 className="font-sora font-extrabold text-[32px] text-[#F0F4FF] mb-[40px] text-center tracking-tight">
              Explore Our Specialized Services
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              
              <div>
                <h3 className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[1.5px] mb-4 pb-2 border-b border-[rgba(0,198,138,0.20)] leading-none">
                  Dental Marketing
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link href="/dentist-digital-marketing-agency-california/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      Dentist Agency CA
                    </Link>
                  </li>
                  <li>
                    <Link href="/dentist-digital-marketing-agency-texas/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      Dentist Agency TX
                    </Link>
                  </li>
                  <li>
                    <Link href="/dentist-seo-services-california/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      Dentist SEO CA
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[1.5px] mb-4 pb-2 border-b border-[rgba(0,198,138,0.20)] leading-none">
                  Healthcare SEO
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link href="/healthcare-digital-marketing-agency-california/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      Healthcare Agency CA
                    </Link>
                  </li>
                  <li>
                    <Link href="/healthcare-digital-marketing-agency-texas/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      Healthcare Agency TX
                    </Link>
                  </li>
                  <li>
                    <Link href="/healthcare-seo-services-california/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      Healthcare SEO CA
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[1.5px] mb-4 pb-2 border-b border-[rgba(0,198,138,0.20)] leading-none">
                  Ads Management
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link href="/google-ads-management-california/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      Google Ads CA
                    </Link>
                  </li>
                  <li>
                    <Link href="/google-ads-management-texas/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      Google Ads TX
                    </Link>
                  </li>
                  <li>
                    <Link href="/healthcare-google-ads-management-california/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      Medical Ads CA
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[1.5px] mb-4 pb-2 border-b border-[rgba(0,198,138,0.20)] leading-none">
                  General SEO
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link href="/seo-services-california/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      SEO Services CA
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-services-texas/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      SEO Services TX
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies/" className="font-sans text-[13px] text-[#4A6080] hover:text-[#F0F4FF] transition-all duration-200 block">
                      Success Stories
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="bg-[#080D18] py-[96px] relative overflow-hidden text-center z-10">
          
          {/* Radial Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[rgba(0,198,138,0.07)] blur-[80px] pointer-events-none" 
            style={{ transform: 'translate(-50%, -50%)' }}
          />

          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            
            <h2 className="font-sora font-extrabold text-[42px] text-[#F0F4FF] mb-4 tracking-tight leading-tight">
              Ready to Grow Your Business?
            </h2>

            <p className="font-sans text-[16px] text-[#8FA8C8] mb-8 leading-relaxed max-w-[560px] mx-auto">
              Stop losing customers to competitors. Start capturing
              high-intent searches, building a powerful online reputation, and
              scaling your revenue predictably.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('contact-form')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-4 px-8 rounded-[10px] transition-all duration-200 shadow-lg shadow-[#DD6613]/25 hover:shadow-xl hover:scale-[1.02] transform leading-none block text-center"
              >
                Schedule Your Free 30-Minute Strategy Session
              </a>
              <a
                href="tel:+17247506935"
                className="border border-[rgba(255,255,255,0.20)] hover:border-[#00C68A] text-white font-semibold py-4 px-8 rounded-[10px] transition-all duration-200 hover:scale-[1.02] transform leading-none block text-center"
              >
                Call +1 (724) 750-6935
              </a>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
