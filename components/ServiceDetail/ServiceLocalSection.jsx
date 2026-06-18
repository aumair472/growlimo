export default function ServiceLocalSection({ localSeoSection }) {
  if (!localSeoSection) return null;

  return (
    <section className="bg-[#FFFFFF] py-[96px] relative z-10 text-left border-t border-[#E3EEF7]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
        <div className="max-w-[860px] mx-auto text-center mb-12">
          
          {/* Eyebrow */}
          <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2px] mb-4 block font-sans">
            LOCAL TARGETING
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#0B1829] tracking-tight leading-tight">
            {localSeoSection.heading}
          </h2>

          {/* Paragraphs */}
          {localSeoSection.paragraphs && localSeoSection.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="font-sans text-[15px] text-[#3D5A73] mt-4 max-w-2xl mx-auto leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Local data cards */}
        <div className="max-w-[860px] mx-auto">
          {localSeoSection.bullets && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {localSeoSection.bullets.map((bullet, bIdx) => {
                const hasColon = bullet.includes(':');
                const titleText = hasColon ? bullet.split(':')[0].trim() : 'Local Optimization';
                const descText = hasColon ? bullet.split(':').slice(1).join(':').trim() : bullet;

                return (
                  <div
                    key={bIdx}
                    className="bg-[#F8FAFC] border border-[#E3EEF7] rounded-[14px] p-6 hover:border-[#00C68A] transition-all duration-200 shadow-sm group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.15)] flex items-center justify-center text-[#00C68A] mb-4 group-hover:scale-[1.03] transition-transform duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-sora font-bold text-[#0B1829] text-[16px] mb-2 leading-snug">
                      {titleText}
                    </h3>
                    <p className="font-sans text-[14px] text-[#3D5A73] leading-relaxed">
                      {descText}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Closing Text */}
          {localSeoSection.closingText && (
            <p className="font-sans text-[15px] text-[#3D5A73] leading-[1.8] text-center mt-10 max-w-2xl mx-auto font-semibold">
              {localSeoSection.closingText}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
