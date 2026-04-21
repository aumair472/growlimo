const ServiceInvestSection = ({ investSection }) => {
  if (!investSection) return null;
  
  // Handle both custom layout and old template (benefits array)
  const isArray = Array.isArray(investSection);
  const bullets = isArray ? investSection : investSection.bullets;
  const heading = isArray ? 'Key Benefits' : investSection.heading;
  const intro = isArray ? '' : investSection.intro;
  const closingText = isArray ? '' : investSection.closingText;

  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-white ${intro ? 'mb-6' : 'text-center mb-12'}`}>
            {heading}
          </h2>
          {intro && (
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {intro}
            </p>
          )}
          <div className="space-y-4 mb-8">
            {bullets.map((benefit, index) => (
              <div key={index} className="glass-card p-6 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-200 text-lg leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          {closingText && (
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              {closingText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
export default ServiceInvestSection;
