export default function ServiceIndustriesSection({ industriesSection }) {
  if (!industriesSection) return null;
  
  // Handle both custom layout (industriesSection.list) and old template (industries string comma separated)
  const isString = typeof industriesSection === 'string';
  const list = isString ? industriesSection.split(', ').map(i => i.replace(/^and /, '')) : industriesSection.list;
  const heading = isString ? 'Industries We Serve' : industriesSection.heading;
  const intro = isString ? '' : industriesSection.intro;
  const closingText = isString ? '' : industriesSection.closingText;

  return (
    <section className="bg-slate-900/50 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {heading}
          </h2>
          {intro && (
            <p className="text-slate-400 text-lg mb-8">
              {intro}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {list.map((industry, index) => (
              <span
                key={index}
                className="bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {industry}
              </span>
            ))}
          </div>
          {closingText && (
            <p className="text-slate-300 text-lg leading-relaxed">
              {closingText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
