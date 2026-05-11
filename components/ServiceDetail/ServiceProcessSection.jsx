export default function ServiceProcessSection({ processSection }) {
  if (!processSection) return null;
  const steps = processSection.steps || processSection; // Handle both custom layout (.steps) and old (array directly)
  const heading = processSection.title || processSection.heading || 'Our Proven Process';
  const intro = processSection.intro || processSection.description || 'A clear, repeatable framework for delivering results.';

  return (
    <section className="bg-slate-900/50 py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            {heading}
          </h2>
          <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
            {intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center max-w-xs mx-auto w-full">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-0.5 bg-gradient-to-r from-primary/40 to-primary/10"></div>
                )}
                <div className="w-16 h-16 rounded-full bg-primary text-white font-bold text-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/30 relative z-10">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
