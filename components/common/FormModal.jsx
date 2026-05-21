import Form from './Form';

export default function FormModal({ isOpen, onClose, planName, slug }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Dark backdrop overlay */}
      <div
        className="absolute inset-0 bg-[#080D18]/85 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="bg-[#1A2438] border border-[rgba(255,255,255,0.08)] rounded-[20px] max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto z-10 text-left">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8FA8C8] hover:text-[#00C68A] text-[20px] transition-colors duration-200 cursor-pointer focus:outline-none"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="mb-4 pr-6">
          <h3 className="font-sora font-extrabold text-[18px] text-[#F0F4FF] leading-snug">
            Get Started with {planName}
          </h3>
          <p className="text-[12px] text-[#8FA8C8] mt-1 font-sans">
            Submit your details below to request a tailored proposal for this package.
          </p>
        </div>

        {/* Prefilled Compact Form */}
        <Form
          slug={slug}
          compact={true}
          variant="pricing"
          ctaButtonText="Request Proposal"
          initialService="seo-services"
          initialMessage={`Hi GrowLimo, I want to get started with the "${planName}" pricing plan for our business. Please review and send us a proposal.`}
        />

      </div>
    </div>
  );
}
