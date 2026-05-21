import Link from 'next/link';

export default function ServiceCTASection({ ctaSection, ctaButtonText }) {
  if (!ctaSection) return null;

  // Make one word in the heading green dynamically
  const heading = ctaSection.heading || 'Ready to Grow Your Business?';
  const words = heading.split(' ');
  const lastWord = words.length > 1 ? words.pop() : '';
  const leadingWords = words.join(' ');

  const ctaLabel = ctaButtonText || ctaSection.ctaText || 'Book Free Consultation →';

  return (
    <section className="bg-[#080D18] py-[96px] relative overflow-hidden z-10 text-center border-t border-[rgba(255,255,255,0.06)]">
      {/* Radial Green Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,198,138,0.07) 0%, transparent 70%)'
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-10 max-w-[1100px] relative z-10">
        <div className="max-w-[760px] mx-auto flex flex-col items-center">
          
          {/* Eyebrow */}
          <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2px] mb-4 block font-sans">
            NEXT STEPS
          </span>

          {/* H2 Title with last word colored green */}
          <h2 className="text-3xl md:text-[42px] font-extrabold font-sora text-[#F0F4FF] mb-3.5 tracking-tight leading-tight">
            {leadingWords} {lastWord && <span className="text-[#00C68A]">{lastWord}</span>}
          </h2>

          {/* Paragraphs */}
          {ctaSection.paragraphs && ctaSection.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="font-sans text-[16px] text-[#8FA8C8] leading-[1.7] mb-6 max-w-[520px] mx-auto">
              {para}
            </p>
          ))}

          {/* Subtext highlight or callout */}
          {!ctaSection.paragraphs && ctaSection.ctaText && (
            <p className="font-sans text-[16px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[520px] mx-auto">
              {ctaSection.ctaText}
            </p>
          )}

          {/* CTA Button */}
          <div className="mt-4">
            <Link
              href="/contact/"
              className="inline-block bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-4 px-10 rounded-[10px] text-[16px] transition-all duration-200 shadow-md shadow-[#DD6613]/10 transform hover:scale-[1.02] border-none"
            >
              {ctaLabel}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
