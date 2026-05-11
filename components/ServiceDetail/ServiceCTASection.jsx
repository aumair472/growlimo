import Link from 'next/link';

export default function ServiceCTASection({ ctaSection, ctaButtonText }) {
  if (!ctaSection) return null;

  return (
    <section className="bg-dark py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {ctaSection.heading}
          </h2>
          {ctaSection.paragraphs && ctaSection.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="text-slate-300 text-lg leading-relaxed mb-4">
              {para}
            </p>
          ))}
          {ctaSection.ctaText && (
            <p className="text-xl text-primary font-bold mb-8">
              {ctaSection.ctaText}
            </p>
          )}
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center bg-primary hover:bg-accent text-slate-950 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 text-xl shadow-lg shadow-primary/30"
          >
            {ctaButtonText || 'Get Started'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
