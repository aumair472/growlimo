import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCountUp } from '../hooks/useCountUp';

function AnimatedStat({ value, suffix = '', prefix = '', label, showDivider = true }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const [count, ref] = useCountUp(numericValue);

  return (
    <div ref={ref} className={`flex flex-col items-start w-full md:w-auto pr-0 md:pr-16 ${showDivider ? 'border-b md:border-b-0 md:border-r border-white/7 pb-4 md:pb-0' : ''}`}>
      <span className="text-[36px] font-extrabold font-sora text-white leading-tight">
        {prefix}{count}{suffix}
      </span>
      <span className="text-[13px] text-[#4A6080] font-sans font-medium mt-1.5">
        {label}
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section
      className="bg-[#080D18] text-white pt-28 pb-16 md:pt-[130px] md:pb-[96px] min-h-screen flex items-center relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-16 lg:gap-8 items-start max-w-6xl mx-auto">

          {/* Left Column (Text & CTAs) */}
          <div className="flex flex-col items-start text-left w-full">

            {/* Eyebrow badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.30)] mb-6 animate-fade-in"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-badge-pulse absolute inline-flex h-full w-full rounded-full bg-[#00C68A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C68A]"></span>
              </span>
              <span className="text-[11px] font-semibold text-[#00C68A] font-sans tracking-[2px] uppercase">
                Google Partner · AI-Powered · 10+ Years Experience
              </span>
            </div>

            {/* H1 Heading */}
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-[68px] font-extrabold mb-6 leading-[1.0] text-white font-sora tracking-tight"
            >
              Digital Marketing<br />Agency That Grows<br />Businesses Across<br />The United States
            </h1>

            {/* Subtext */}
            <p
              className="font-sans text-[17px] leading-[1.7] font-normal text-[#8FA8C8] max-w-[500px] mt-5 mb-8"
            >
              Specialized digital marketing for local businesses, startups, and
              growing companies nationwide. Dominate local search, run high-ROI
              ad campaigns, and automate customer acquisition across the USA.
            </p>

            {/* Two CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-[16px] mb-10 w-full sm:w-auto items-stretch sm:items-center"
            >
              <Link
                href="/contact/"
                className="bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-4 px-8 rounded-full transition-all duration-200 text-center flex items-center justify-center text-base shadow-lg shadow-[#DD6613]/20 hover:shadow-xl transform"
              >
                Get My Free Strategy →
              </Link>
              <Link
                href="/case-studies/"
                className="bg-transparent text-white border border-white/20 hover:border-white font-bold py-4 px-8 rounded-full transition-all duration-200 text-center flex items-center justify-center text-base transform"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust Pills */}
            <div className="flex flex-wrap gap-3 w-full mt-7">
              {[
                "Google Partner Certified",
                "AI-Powered Marketing",
                "713% Avg. Growth"
              ].map((pillText, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2438] border border-white/8 cursor-default"
                >
                  <span className="w-[8px] h-[8px] rounded-full bg-[#00C68A] flex-shrink-0"></span>
                  <span className="text-[13px] font-medium text-[#8FA8C8] font-sans leading-none">
                    {pillText}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column (Hero Image with Overlays) */}
          <div className="relative w-full h-[450px] md:h-[550px] lg:h-full lg:min-h-[580px] mt-10 lg:mt-0">
            <div className="relative w-full h-full">

              {/* Image Container that stretches fully */}
              <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl relative bg-[#0C1220]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-dashboard.webp"
                  alt="GrowLimo command center displaying analytics dashboard"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Subtle dark-to-transparent overlay gradient on left edge */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#080D18]/90 via-[#080D18]/30 to-transparent pointer-events-none z-10" />
              </div>

              {/* Floating Stat Card 1 (Bottom Left) */}
              <div className="absolute -bottom-4 -left-4 z-20 p-[14px_18px] rounded-[16px] bg-[#0C1220] border border-white/10 shadow-2xl flex items-center gap-3 animate-fade-in">
                <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(0,198,138,0.12)] flex items-center justify-center flex-shrink-0 text-[#00C68A]">
                  <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-[22px] font-extrabold text-white font-sora leading-tight">+713%</div>
                  <div className="text-[11px] font-semibold text-[#8FA8C8] uppercase tracking-[1px] font-sans mt-0.5">Revenue Growth</div>
                </div>
              </div>

              {/* Floating Stat Card 2 (Top Right) */}
              <div className="absolute -top-4 -right-4 z-20 p-[14px_18px] rounded-[16px] bg-[#0C1220] border border-white/10 shadow-2xl flex items-center gap-3 animate-fade-in">
                <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(0,198,138,0.12)] flex items-center justify-center flex-shrink-0 text-[#00C68A]">
                  <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[22px] font-extrabold text-white font-sora leading-tight">10+</div>
                  <div className="text-[11px] font-semibold text-[#8FA8C8] uppercase tracking-[1px] font-sans mt-0.5">Years Experience</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM OF HERO — STAT STRIP */}
        <div className="max-w-6xl mx-auto mt-14">
          <div className="border-t border-white/8 w-full pt-8">
            <div className="flex flex-col md:flex-row items-stretch justify-start gap-8 md:gap-16 w-full">
              <AnimatedStat prefix="" value="713" suffix="%" label="Avg. Revenue Growth" showDivider={true} />
              <AnimatedStat prefix="$" value="25" suffix="M+" label="Client Revenue Won" showDivider={true} />
              <AnimatedStat prefix="" value="10" suffix="+" label="Years Experience" showDivider={false} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
