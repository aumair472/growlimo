export default function ServiceProcessSection({ processSection }) {
  if (!processSection) return null;
  const steps = processSection.steps || processSection;
  const heading = processSection.title || processSection.heading || 'Our Proven Process';
  const intro = processSection.intro || processSection.description || 'A clear, repeatable framework for delivering results.';

  return (
    <section className="bg-[#080D18] py-[96px] relative z-10 text-left border-t border-[rgba(255,255,255,0.04)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px]">
        
        {/* Eyebrow */}
        <span className="text-[#00C68A] text-[11px] font-bold uppercase tracking-[2px] mb-4 block text-center font-sans">
          OUR WORKFLOW
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#F0F4FF] text-center mb-4 tracking-tight leading-tight">
          {heading}
        </h2>

        {/* Intro Description */}
        <p className="font-sans text-[16px] text-[#8FA8C8] text-center mb-14 max-w-xl mx-auto leading-relaxed">
          {intro}
        </p>

        {/* Steps — Vertical Timeline */}
        <div className="max-w-[760px] mx-auto relative">
          
          {/* Vertical Connector Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-[rgba(0,198,138,0.15)] z-0"></div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 items-start z-10">
                
                {/* Step Circle */}
                <div className="w-[56px] h-[56px] rounded-full bg-[#00C68A] border-[3px] border-[#080D18] flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-[#080D18] font-extrabold font-sora text-[18px] leading-none">
                    {index + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div className="bg-[#1A2438] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-6 md:p-7 flex-1 shadow-md hover:border-[rgba(0,198,138,0.25)] transition-all duration-200">
                  <h3 className="font-sora font-bold text-[17px] text-[#F0F4FF] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[15px] text-[#8FA8C8] leading-[1.7] font-normal">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
