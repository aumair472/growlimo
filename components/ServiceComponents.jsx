import Link from 'next/link';

/* ─── ServiceHero ─── */
export function ServiceHero({ h1, subheadline, heroContent, isCustomLayout, slug }) {
  return (
    <section className="bg-dark text-white py-16 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-5 text-white leading-tight">
              {h1}
            </h1>
            {isCustomLayout && heroContent && heroContent.map((para, index) => (
              <p key={index} className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
                {para}
              </p>
            ))}
            {!isCustomLayout && subheadline && (
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                {subheadline}
              </p>
            )}
          </div>

          <div className="w-full">
            <div className="glass-card p-6 md:p-8">
               <h2 className="text-2xl font-bold text-white mb-6">Request Free Consultation</h2>
               <p className="text-slate-300 mb-6">Book your 30-minute lead mapping session with our specialists.</p>
               <Link href="/contact/" className="btn-primary w-full text-center py-4 rounded-xl font-bold text-lg block">
                 Schedule My Session →
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ServiceContentSection ─── */
export function ServiceContentSection({ section, sectionIndex }) {
  const isEven = sectionIndex % 2 === 0;
  return (
    <section className={`py-16 md:py-24 ${isEven ? 'bg-slate-900/50' : 'bg-dark'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{section.heading}</h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            {section.paragraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {section.bullets && (
            <ul className="mt-8 space-y-4">
              {section.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">&#10003;</span>
                  <span className="text-slate-300">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          {section.closingText && (
            <p className="mt-8 text-white font-semibold">{section.closingText}</p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── ServiceProcessSection ─── */
export function ServiceProcessSection({ processSection }) {
  if (!processSection) return null;
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Proven Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processSection.map((step, i) => (
            <div key={i} className="glass-card p-6 border-t-4 border-primary/50">
              <div className="text-primary font-bold text-sm mb-2 uppercase tracking-widest">Step 0{i + 1}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
