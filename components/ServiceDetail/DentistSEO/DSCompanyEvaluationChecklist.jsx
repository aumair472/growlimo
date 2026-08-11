export default function DSCompanyEvaluationChecklist() {
  const evaluationCriteria = [
    {
      title: '1. Dentist Credential Attribution',
      desc: 'Can they show specifically how they attribute treatment page content to a licensed dentist under E-E-A-T guidelines?'
    },
    {
      title: '2. Cannibalization Architecture',
      desc: 'How do they resolve keyword cannibalization across multi-page dental sites competing for terms like "dentist Los Angeles"?'
    },
    {
      title: '3. Verified Dental Case Studies',
      desc: 'Can they show verified before-and-after ranking data from other dental practices — not general local business case studies with a tooth icon swapped in?'
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px] text-left">

        <div className="bg-[#162035] border border-[rgba(66,133,244,0.25)] rounded-[24px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4285F4]/10 rounded-bl-full pointer-events-none" />

          <span className="text-[#4285F4] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] mb-3 inline-block font-sans">
            BUYER EVALUATION CRITERIA
          </span>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight">
            What Separates a Real Dental SEO Company From a Generalist Agency
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] mb-8">
            Most agencies calling themselves a dental SEO company are general marketing shops that added "dental" to a service list without changing anything underneath it. That gap matters more here than almost anywhere else, because dental content sits under Google's strictest YMYL classification — an agency that doesn't understand credentialed authorship, Map Pack mechanics distinct from organic ranking, and HIPAA-aware review workflows will produce content and campaigns that structurally cannot compete, no matter the volume.
          </p>

          <h3 className="font-sora font-extrabold text-[18px] text-[#F0F4FF] mb-6">
            A real dental SEO company should be able to answer three critical questions:
          </h3>

          <div className="space-y-4 mb-8">
            {evaluationCriteria.map((item, idx) => (
              <div key={idx} className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] p-5 rounded-[16px] text-left">
                <h4 className="font-sora font-bold text-[16px] text-[#00C68A] mb-1">
                  {item.title}
                </h4>
                <p className="font-sans text-[14px] text-[#8FA8C8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#0C1220] border-l-4 border-[#00C68A] text-[#F0F4FF] font-sans text-[14.5px]">
            <strong className="text-[#00C68A]">Specialist Standard:</strong> We welcome these questions because our entire system was built specifically to solve them.
          </div>
        </div>

      </div>
    </section>
  );
}
