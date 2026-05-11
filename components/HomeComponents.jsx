import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useCountUp } from '../hooks/useCountUp';


/* ─── Trust Indicator Stat Card ─── */
export function StatCard({ value, suffix, prefix, label }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const [count, ref] = useCountUp(numericValue);
  return (
    <div
      ref={ref}
      className="glass-card p-6 text-center group transition-all duration-300"
    >
      <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2 transition-all duration-300">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm text-slate-300 font-medium">{label}</div>
    </div>
  );
}

/* ─── SpecialtyCard ─── */
export function SpecialtyCard({ icon, title, description, link, ctaText }) {
  return (
    <Link
      href={link}
      className="glass-card p-5 md:p-6 group transition-all duration-300 cursor-pointer block h-full"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-slate-300 text-sm mb-3">{description}</p>
      <span className="text-primary text-sm font-semibold inline-block transition-transform">
        {ctaText || 'Learn More'} →
      </span>
    </Link>
  );
}

/* ─── Process Step ─── */
export function ProcessStep({ number, title, description, isLast }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
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
