const ServiceLocalSection = ({ localSeoSection }) => {
  if (!localSeoSection) return null;
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {localSeoSection.heading}
          </h2>
          {localSeoSection.paragraphs && localSeoSection.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="text-slate-300 text-lg leading-relaxed mb-6">
              {para}
            </p>
          ))}
          {localSeoSection.bullets && (
            <ul className="space-y-3 mb-8">
              {localSeoSection.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-slate-200 text-lg">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {localSeoSection.closingText && (
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              {localSeoSection.closingText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
export default ServiceLocalSection;
