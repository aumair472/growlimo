// Progress indicator: filled bar + dots. Showing visible progress reduces
// abandonment — users commit more when they can see how close the end is.
export default function ProgressBar({ steps, currentStep }) {
  const pct = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="mb-6" aria-label={`Step ${currentStep + 1} of ${steps.length}`} role="progressbar" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={currentStep + 1}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-semibold text-[#8FA8C8] uppercase tracking-widest">
          {steps[currentStep].label}
        </span>
        <span className="text-[11px] font-medium text-[#4A6080]">
          {currentStep + 1} / {steps.length}
        </span>
      </div>
      <div className="h-[6px] bg-[#0C1220] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#00C68A] rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
