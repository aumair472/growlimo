import { useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import { getSEOConfig } from '../lib/config';
import Form from '../components/common/Form';

const whyChooseUs = [
  {
    title: 'Nationwide Industry Expertise',
    desc: 'We serve local businesses, startups, and enterprises across the entire United States. Our specialized teams provide expert digital solutions that dominate competitive markets.',
  },
  {
    title: 'Proven Growth Results',
    desc: 'Over 500 businesses trust us to manage their digital presence. Our clients see an average of 713% revenue increase and 31% reduction in lead costs.',
  },
  {
    title: 'Data-First Strategy',
    desc: 'Every campaign is backed by real-time data and profit tracking. We don’t just report on clicks; we report on the revenue generated for your business.',
  },
  {
    title: 'Transparent ROI Tracking',
    desc: 'Your custom dashboard shows exactly where every dollar goes. No hidden fees or confusing jargon—just clear results you can bank on.',
  },
  {
    title: 'Dedicated Account Strategists',
    desc: 'You work with a dedicated specialist who understands your unique goals and proactively optimizes your campaigns for maximum performance.',
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

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url="https://www.growlimo.com/contact/"
      />

      <div className="bg-dark text-white">
        {/* ── Hero ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {seo.h1}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Whether you need a complete digital audit, high-ROI paid media
                strategy, or custom lead acquisition plan, our digital
                marketing specialists are ready to help.{' '}
                <Link href="/about" className="text-primary hover:underline">
                  Learn more about Growlimo
                </Link>{' '}
                or see{' '}
                <Link href="/case-studies" className="text-primary hover:underline">
                  real results from real clients
                </Link>{' '}
                to understand our impact.
              </p>
            </div>
          </div>
        </section>

        <Form
          variant="contact"
          ctaHeadline="Schedule Your 30-Minute Lead Mapping Session"
          ctaButtonText="Send Message"
        />

        {/* ── Why Businesses Choose Growlimo ── */}
        <section className="py-16 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                Why Businesses Choose Growlimo
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="glass-card p-5">
                    <h3 className="text-base font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What Happens After You Contact Us ── */}
        <section className="py-16 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                What Happens After You Contact Us
              </h2>
              <div className="space-y-6">
                {steps.map((s) => (
                  <div key={s.step} className="flex gap-5 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">
                        {s.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-16 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                Success Stories
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                  <blockquote key={i} className="glass-card p-5 flex flex-col">
                    <p className="text-sm text-slate-300 leading-relaxed italic flex-1">
                      "{t.quote}"
                    </p>
                    <footer className="mt-4 pt-4 border-t border-slate-700">
                      <p className="text-white text-sm font-semibold">
                        {t.name}
                      </p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqData.map((faq, i) => (
                  <div key={i} className="glass-card overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="text-sm font-semibold text-white pr-4">
                        {faq.q}
                      </span>
                      <svg
                        className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5">
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Signals ── */}
        <section className="py-12 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {trustSignals.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span className="text-primary font-bold">&#10003;</span>{' '}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Directory ── */}
        <section className="py-16 border-t border-slate-800 bg-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                Explore Our Specialized Services
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">Dental Marketing</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/dentist-digital-marketing-agency-california/" className="text-slate-400 hover:text-white transition-colors">Dentist Agency CA</Link></li>
                    <li><Link href="/dentist-digital-marketing-agency-texas/" className="text-slate-400 hover:text-white transition-colors">Dentist Agency TX</Link></li>
                    <li><Link href="/dentist-seo-services-california/" className="text-slate-400 hover:text-white transition-colors">Dentist SEO CA</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">Healthcare SEO</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/healthcare-digital-marketing-agency-california/" className="text-slate-400 hover:text-white transition-colors">Healthcare Agency CA</Link></li>
                    <li><Link href="/healthcare-digital-marketing-agency-texas/" className="text-slate-400 hover:text-white transition-colors">Healthcare Agency TX</Link></li>
                    <li><Link href="/healthcare-seo-services-california/" className="text-slate-400 hover:text-white transition-colors">Healthcare SEO CA</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">Ads Management</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/google-ads-management-california/" className="text-slate-400 hover:text-white transition-colors">Google Ads CA</Link></li>
                    <li><Link href="/google-ads-management-texas/" className="text-slate-400 hover:text-white transition-colors">Google Ads TX</Link></li>
                    <li><Link href="/healthcare-google-ads-management-california/" className="text-slate-400 hover:text-white transition-colors">Medical Ads CA</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">General SEO</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/seo-services-california/" className="text-slate-400 hover:text-white transition-colors">SEO Services CA</Link></li>
                    <li><Link href="/seo-services-texas/" className="text-slate-400 hover:text-white transition-colors">SEO Services TX</Link></li>
                    <li><Link href="/case-studies/" className="text-slate-400 hover:text-white transition-colors">Success Stories</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-16 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Stop losing customers to competitors. Start capturing
                high-intent searches, building a powerful online reputation, and
                scaling your revenue predictably.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('contact-form')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="bg-primary hover:bg-accent text-slate-950 font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105"
                >
                  Schedule Your Free 30-Minute Strategy Session
                </a>
                <a
                  href="tel:+17247506935"
                  className="border border-slate-600 hover:border-primary text-white font-semibold py-3 px-8 rounded-lg transition"
                >
                  Call +1 (724) 750-6935
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
