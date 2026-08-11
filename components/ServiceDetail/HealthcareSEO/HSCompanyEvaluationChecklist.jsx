export default function HSCompanyEvaluationChecklist() {
  const questions = [
    {
      q: '1. Can they explain, specifically, how they build E-E-A-T signals into physician bio pages and clinical content?',
      note: 'Not in the abstract, but in the actual structure of the page, author attribution, and medical review notations.'
    },
    {
      q: '2. Do they have a documented process for HIPAA-aware review generation and tracking?',
      note: 'Or are they treating a medical practice like any generic local plumbing business without regulatory awareness?'
    },
    {
      q: '3. Can they show verified before-and-after ranking data from other healthcare clients?',
      note: 'Not just general SEO case studies with a medical logo swapped into the deck.'
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px] text-left">

        <div className="bg-[#162035] border border-[rgba(66,133,244,0.25)] rounded-[24px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4285F4]/10 rounded-bl-full pointer-events-none" />

          <span className="text-[#4285F4] text-[11px] md:text-[12px] font-extrabold uppercase tracking-[2.5px] mb-3 inline-block font-sans">
            BUYER EVALUATION CHECKLIST
          </span>

          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold font-sora text-[#F0F4FF] leading-tight mb-6 tracking-tight">
            What to Look for in Healthcare SEO Companies
          </h2>

          <p className="font-sans text-[15px] sm:text-[16px] leading-[1.8] text-[#8FA8C8] mb-8">
            Most healthcare SEO companies are generalist marketing agencies that added "medical" to their service list without changing their approach underneath it. That distinction matters more here than in almost any other industry, because Google's own quality standards treat healthcare content differently — and an agency that doesn't understand YMYL, credential attribution, or HIPAA-aware review generation will produce content that structurally cannot compete, no matter how much of it they publish.
          </p>

          <h3 className="font-sora font-extrabold text-[18px] text-[#F0F4FF] mb-6">
            When evaluating healthcare SEO companies, ask three critical questions:
          </h3>

          <div className="space-y-4 mb-8">
            {questions.map((item, idx) => (
              <div key={idx} className="bg-[#0C1220] border border-[rgba(255,255,255,0.08)] p-5 rounded-[16px] text-left">
                <h4 className="font-sora font-bold text-[16px] text-[#00C68A] mb-1">
                  {item.q}
                </h4>
                <p className="font-sans text-[14px] text-[#8FA8C8] leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#0C1220] border-l-4 border-[#00C68A] text-[#F0F4FF] font-sans text-[14.5px]">
            <strong className="text-[#00C68A]">Specialist Standard:</strong> A true specialist healthcare SEO company should be able to answer all three without hesitation.
          </div>
        </div>

      </div>
    </section>
  );
}
