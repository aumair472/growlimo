export default function ServiceIndustriesSection({ industriesSection }) {
  if (!industriesSection) return null;
  
  // Handle both custom layout (industriesSection.list) and old template (industries string comma separated)
  const isString = typeof industriesSection === 'string';
  const list = isString ? industriesSection.split(', ').map(i => i.replace(/^and /, '')) : industriesSection.list;
  const heading = isString ? 'Industries We Serve' : industriesSection.heading;
  const intro = isString ? '' : industriesSection.intro;
  const closingText = isString ? '' : industriesSection.closingText;

  return (
    <section className="bg-[#0C1220] py-[96px] relative z-10 text-center border-t border-[rgba(255,255,255,0.04)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
        <div className="max-w-[860px] mx-auto">
          
          {/* Eyebrow */}
          <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2px] mb-4 block font-sans">
            OUR SPECIALIZATIONS
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#F0F4FF] mb-4 tracking-tight leading-tight">
            {heading}
          </h2>

          {/* Intro Description */}
          {intro && (
            <p className="font-sans text-[15px] text-[#8FA8C8] mb-8 max-w-xl mx-auto leading-relaxed">
              {intro}
            </p>
          )}

          {/* Chips container */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {list.map((industry, index) => (
              <span
                key={index}
                className="bg-[#1A2438] border border-[rgba(255,255,255,0.07)] text-[#8FA8C8] px-[20px] py-[10px] rounded-full text-[14px] font-medium hover:bg-[rgba(0,198,138,0.12)] hover:border-[rgba(0,198,138,0.35)] hover:text-[#00C68A] transition-all duration-200 ease-in-out flex items-center font-sans cursor-default shrink-0 leading-none"
              >
                <svg className="w-3.5 h-3.5 mr-2 text-[#00C68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {industry}
              </span>
            ))}
          </div>

          {/* Closing Text */}
          {closingText && (
            <p className="font-sans text-[15px] text-[#8FA8C8] leading-relaxed max-w-2xl mx-auto mt-8 font-normal">
              {closingText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
