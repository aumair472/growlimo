import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { getSEOConfig } from '../lib/config';
import { useCountUp } from '../hooks/useCountUp';


/* ─── Trust Indicator Stat Card ─── */
function StatCard({ value, suffix, prefix, label }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const [count, ref] = useCountUp(numericValue);
  return (
    <div
      ref={ref}
      className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm text-slate-300 font-medium">{label}</div>
    </div>
  );
}

/* ─── SpecialtyCard ─── */
function SpecialtyCard({ icon, title, description, link, ctaText }) {
  return (
    <Link
      href={link}
      className="glass-card p-5 md:p-6 group hover:scale-105 transition-all duration-300 cursor-pointer block h-full"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-slate-300 text-sm mb-3">{description}</p>
      <span className="text-primary text-sm font-semibold group-hover:translate-x-1 inline-block transition-transform">
        {ctaText || 'Learn More'} →
      </span>
    </Link>
  );
}

/* ─── Process Step ─── */
function ProcessStep({ number, title, description, isLast }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg shadow-primary/30">
          {number}
        </div>
        {!isLast && <div className="w-0.5 h-full bg-primary/30 mt-2"></div>}
      </div>
      <div className="pb-10">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const seo = getSEOConfig('/');

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url="https://growlimo.com/"
        isHomepage={true}
        disableSuffix={true}
      />

      {/* Hero Section */}
      <Hero h1Text={seo.h1} />

      {/* ── 2. TRUST INDICATORS ── */}
      <section className="bg-dark text-white py-10 md:py-14" aria-labelledby="trust-heading">
        <div className="container mx-auto px-4">
          <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Industry Expertise That Drives Results
          </h2>
          <p className="text-slate-300 text-lg text-center mb-10 max-w-2xl mx-auto">
            Proven results across local services, healthcare, legal, eCommerce, and more — nationwide
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            <StatCard prefix="" value="713" suffix="%" label="Avg. Client Revenue Increase" />
            <StatCard prefix="$" value="25" suffix="M+" label="Revenue Generated for Clients" />
            <StatCard prefix="" value="500" suffix="+" label="Satisfied Clients Nationwide" />
            <StatCard prefix="" value="31" suffix="%" label="Avg. Lead Cost Reduction" />
          </div>
        </div>
      </section>

      {/* ── 3. PROBLEM VS SOLUTION ── */}
      <section className="bg-slate-900/50 text-white py-10 md:py-14" aria-labelledby="problem-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                Why Businesses Across the USA Choose Growlimo
              </h2>
              <p className="text-slate-300 text-lg text-center mb-10 max-w-2xl mx-auto">
                Data-Driven Marketing for Any Industry
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm">✕</span>
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
                      <div key={i} className="glass-card p-4 border-l-4 border-red-500/50">
                        <h4 className="font-semibold text-white mb-1 text-sm">{item.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</span>
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
                      <div key={i} className="glass-card p-4 border-l-4 border-primary/50">
                        <h4 className="font-semibold text-white mb-1 text-sm">{item.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SPECIALTY MARKETING ── */}
      <section className="bg-slate-900/50 text-white py-10 md:py-14" aria-labelledby="specialty-heading">
        <div className="container mx-auto px-4">
          <h2 id="specialty-heading" className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Digital Marketing Services
          </h2>
          <p className="text-slate-300 text-lg text-center mb-8 max-w-2xl mx-auto">
            Comprehensive Growth Solutions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            <SpecialtyCard
              icon={<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
              title="SEO Services"
              description="Nationwide SEO to dominate Google search and beat your local and national competitors."
              link="/contact/"
              ctaText="See How We Help"
            />
            <SpecialtyCard
              icon={<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>}
              title="Google Ads Management"
              description="High-ROI PPC campaigns that target your most profitable keywords with surgical precision."
              link="/contact/"
              ctaText="See How We Help"
            />
            <SpecialtyCard
              icon={<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>}
              title="Social Media Marketing"
              description="Engaging content and growth strategies for Instagram, Facebook, and LinkedIn."
              link="/contact/"
              ctaText="See How We Help"
            />
            <SpecialtyCard
              icon={<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Meta Ads Agency"
              description="Scale fast with high-converting Facebook and Instagram ads targeted to your ideal customers."
              link="/contact/"
              ctaText="See How We Help"
            />
            <SpecialtyCard
              icon={<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="Web Design & Dev"
              description="Beautiful, high-speed websites designed to convert visitors into loyal, paying customers."
              link="/contact/"
              ctaText="See How We Help"
            />
            <SpecialtyCard
              icon={<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="Email Marketing"
              description="Nurture your leads and increase customer lifetime value with automated email sequences."
              link="/contact/"
              ctaText="See How We Help"
            />
          </div>
        </div>
      </section>

      {/* ── 7. SOCIAL PROOF / TESTIMONIALS ── */}
      <Testimonials limit={4} />

      {/* ── 7b. HUB SERVICES (Internal Linking) ── */}
      <section className="bg-dark text-white py-12 border-t border-slate-800" aria-labelledby="hub-heading">
        <div className="container mx-auto px-4">
          <h2 id="hub-heading" className="text-2xl md:text-3xl font-bold text-center mb-10">Accelerate Your Growth in Key Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
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
              { name: 'Marketing Case Studies', link: '/case-studies/' },
              { name: 'About Us', link: '/about/' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. PROCESS ── */}
      <section className="bg-slate-900/50 text-white py-10 md:py-14" aria-labelledby="process-heading">
        <div className="container mx-auto px-4">
          <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Our Growth Marketing Process
          </h2>
          <p className="text-slate-300 text-lg text-center mb-8 max-w-2xl mx-auto">
            How We Grow Your Business
          </p>
          <div className="max-w-2xl mx-auto">
            <ProcessStep number={1} title="Marketing Audit (Week 1)" description="Complete analysis of your current digital presence, competitor landscape, and revenue gaps." />
            <ProcessStep number={2} title="Custom Strategy Development (Week 2)" description="Build your personalized growth roadmap with clear KPIs, timelines, and expected ROI." />
            <ProcessStep number={3} title="Campaign Launch (Week 3-4)" description="Execute SEO optimization, launch high-ROI ad campaigns, and implement lead automation." />
            <ProcessStep number={4} title="Continuous Optimization (Ongoing)" description="Weekly performance reviews, A/B testing, and strategy refinement to maximize your leads and ROI." />
            <ProcessStep number={5} title="Transparent Reporting (Monthly)" description="Detailed analytics dashboards showing cost-per-acquisition, total revenue, and your marketing ROI." isLast />
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <FAQ limit={6} />

      {/* ── 10. FINAL CTA ── */}
      <section className="bg-dark text-white py-10 md:py-14 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Business Predictably?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Book a free 30-minute strategy session and get:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-10 text-left">
              {[
                '30-Minute Growth Strategy Session',
                'Competitor Marketing Analysis',
                'Custom ROI & Lead Roadmap',
                'No-Obligation Transparent Pricing',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact/" className="group relative inline-flex items-center justify-center bg-primary hover:bg-accent text-slate-950 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 text-lg shadow-lg shadow-primary/30 mb-10">
              Schedule Your Free 30-Minute Strategy Session
            </Link>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300">
              <a href="tel:+17247506935" className="hover:text-primary transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span><strong>US:</strong> +1 (724) 750-6935</span>
              </a>
              <a href="mailto:info@growlimo.com" className="hover:text-primary transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@growlimo.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
