import { useEffect } from 'react';

function Toast({ message, type = 'success', onClose, duration = 3500 }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  if (!message) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const borderColor = type === 'success' ? 'border-green-500' : 'border-red-500';
  const textColor = type === 'success' ? 'text-green-50' : 'text-red-50';

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${bgColor} ${borderColor} border-2 text-white px-6 py-4 rounded-lg shadow-lg min-w-[300px] max-w-[90vw] text-center transition-all duration-300 ease-in-out`}
      role="alert"
      aria-live="polite"
    >
      <p className={`font-semibold ${textColor}`}>{message}</p>
    </div>
  );
}

export default Toast;

