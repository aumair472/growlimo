const fieldClass = (err) =>
  `w-full px-4 py-[11px] bg-[#0C1220] border ${
    err ? 'border-red-500' : 'border-[rgba(255,255,255,0.10)]'
  } rounded-[10px] text-[#F0F4FF] text-[13px]
  placeholder-[#4A6080]
  focus:outline-none
  focus:border-[#00C68A]
  transition-colors duration-200`;

// Labeled input with inline error text — explicit error messages convert
// better than red borders alone (users know *what* to fix, not just *where*).
export default function StepInput({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
  autoFocus = false,
  textarea = false,
  rows = 4,
  autoComplete,
}) {
  const id = `form-field-${name}`;
  const shared = {
    id,
    name,
    value,
    onChange,
    placeholder,
    autoComplete,
    'data-autofocus': autoFocus ? 'true' : undefined,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${id}-error` : undefined,
    className: fieldClass(error),
  };

  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-medium text-[#8FA8C8] mb-[6px]">
        {label}
      </label>
      {textarea ? (
        <textarea {...shared} rows={rows} />
      ) : (
        <input {...shared} type={type} />
      )}
      {error && (
        <p id={`${id}-error`} className="text-red-400 text-[12px] mt-[6px]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
