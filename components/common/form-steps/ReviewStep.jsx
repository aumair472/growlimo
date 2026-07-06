// Compact read-only summary of earlier answers with Edit links. Rendered
// above the message textarea on the final step: keeps the trust/typo-catching
// benefit of a review screen without adding a separate step.
export default function ReviewStep({ rows, onEdit }) {
  return (
    <ul className="flex flex-col gap-2 mb-4">
      {rows.map((row) => (
        <li
          key={row.label}
          className="flex items-start justify-between gap-3 bg-[#0C1220] border border-[rgba(255,255,255,0.10)] rounded-[10px] px-4 py-2"
        >
          <div className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#4A6080]">
              {row.label}
            </span>
            <span className="block text-[13px] text-[#F0F4FF] break-words">
              {row.value || <span className="text-[#4A6080]">—</span>}
            </span>
          </div>
          <button
            type="button"
            onClick={() => onEdit(row.stepIndex)}
            aria-label={`Edit ${row.label}`}
            className="text-[12px] font-semibold text-[#00C68A] hover:underline flex-shrink-0 bg-transparent border-none cursor-pointer p-0"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}
