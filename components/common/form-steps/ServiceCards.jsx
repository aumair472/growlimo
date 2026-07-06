// Service picker as tappable cards instead of a native <select>:
// bigger touch targets on mobile, all options visible at once (no dropdown
// interaction cost), and visual scanning is faster than reading a select list.
export default function ServiceCards({ options, value, onSelect, error }) {
  const flat = options.flatMap((g) =>
    g.options.map((o) => ({ ...o, group: g.group }))
  );

  return (
    <div>
      <div role="radiogroup" aria-label="Service interested in" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {flat.map((opt) => {
          const selected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onSelect(opt.value)}
              className={`text-left px-4 py-3 rounded-[12px] border transition-colors duration-150 cursor-pointer ${
                selected
                  ? 'bg-[rgba(0,198,138,0.12)] border-[#00C68A]'
                  : 'bg-[#0C1220] border-[rgba(255,255,255,0.10)] hover:border-[rgba(0,198,138,0.45)]'
              }`}
            >
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#4A6080] mb-[2px]">
                {opt.group}
              </span>
              <span className={`block text-[13px] font-semibold ${selected ? 'text-[#00C68A]' : 'text-[#F0F4FF]'}`}>
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
      {error && (
        <p className="text-red-400 text-[12px] mt-2" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
