// Wrapper for each step: large question-style heading keeps the
// one-question-at-a-time framing (conversational tone converts better than
// form-label tone in step flows).
export default function StepShell({ question, hint, children }) {
  return (
    <div>
      <h3 className="font-sora font-bold text-[20px] text-[#F0F4FF] leading-snug mb-1">
        {question}
      </h3>
      {hint && <p className="text-[12px] text-[#4A6080] mb-4">{hint}</p>}
      {!hint && <div className="mb-4" />}
      {children}
    </div>
  );
}
