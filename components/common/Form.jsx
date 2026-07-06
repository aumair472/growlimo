import { useEffect, useRef } from 'react';
import { useContactForm, isStepValid } from '../../hooks/useContactForm';
import ProgressBar from './form-steps/ProgressBar';
import StepShell from './form-steps/StepShell';
import StepInput from './form-steps/StepInput';
import ServiceCards from './form-steps/ServiceCards';
import ReviewStep from './form-steps/ReviewStep';

const SERVICE_OPTIONS = [
  {
    group: 'SEO',
    options: [{ value: 'seo-services', label: 'SEO Services' }],
  },
  {
    group: 'Digital Marketing',
    options: [{ value: 'digital-marketing', label: 'Digital Marketing' }],
  },
  {
    group: 'Paid Advertising',
    options: [
      { value: 'google-ads', label: 'Google Ads' },
      { value: 'ppc-services', label: 'PPC Services' },
    ],
  },
  {
    group: 'Social Media',
    options: [{ value: 'social-media', label: 'Social Media' }],
  },
  {
    group: 'Web Services',
    options: [
      { value: 'web-developer', label: 'Web Developer' },
      { value: 'web-design', label: 'Web Design' },
    ],
  },
  {
    group: 'Other',
    options: [
      { value: 'free-audit-consultation', label: 'Free Audit Consultation' },
      { value: 'comprehensive', label: 'Complete Marketing Package' },
      { value: 'consultation', label: 'Lead Mapping Session' },
      { value: 'other', label: 'Other Services' },
    ],
  },
];

const serviceLabel = (value) =>
  SERVICE_OPTIONS.flatMap((g) => g.options).find((o) => o.value === value)?.label || '';

export default function Form({
  slug,
  ctaHeadline = 'Request Free Consultation',
  ctaButtonText = 'Request Free Consultation',
  compact = false,
  variant = 'service',
  initialService = '',
  initialMessage = '',
}) {
  const {
    formData,
    formErrors,
    formLoading,
    submitError,
    handleChange,
    handleSubmit,
    setFormData,
    steps,
    currentStep,
    goNext,
    goBack,
    goToStep,
  } = useContactForm(slug, variant);

  const stepContainerRef = useRef(null);
  // Final step (message + review summary) hosts the real submit button.
  const isFinalStep = currentStep === steps.length - 1;

  useEffect(() => {
    if (initialService || initialMessage) {
      setFormData((prev) => ({
        ...prev,
        service: initialService || prev.service,
        message: initialMessage || prev.message,
      }));
    }
  }, [initialService, initialMessage, setFormData]);

  // Autofocus first field of each step — keeps keyboard users (and Enter-key
  // advancers) in flow. Only after the user has interacted with the form, so
  // embedded hero/sidebar forms (and sessionStorage restores) never steal
  // focus or scroll the page on load.
  const interactedRef = useRef(false);
  useEffect(() => {
    if (!interactedRef.current) return;
    const el = stepContainerRef.current?.querySelector('[data-autofocus="true"]');
    if (el) el.focus();
  }, [currentStep]);

  // Enter advances to the next step when valid (explicit handler — implicit
  // form submission is unreliable without a rendered submit button). Textarea
  // keeps Enter for newlines; review step keeps Enter for real submit.
  const onFormKeyDown = (e) => {
    if (e.key !== 'Enter' || isFinalStep) return;
    if (e.target.tagName === 'TEXTAREA') return;
    e.preventDefault();
    goNext();
  };

  // Guard against premature real submission on non-final steps.
  const onFormSubmit = (e) => {
    if (!isFinalStep) {
      e.preventDefault();
      goNext();
      return;
    }
    handleSubmit(e);
  };

  const stepId = steps[currentStep].id;
  const stepValid = isStepValid(currentStep, formData);

  const reviewRows = [
    { label: 'Name', value: formData.name, stepIndex: 0 },
    { label: 'Company', value: formData.company, stepIndex: 0 },
    { label: 'Email', value: formData.email, stepIndex: 1 },
    { label: 'Phone', value: formData.phone, stepIndex: 1 },
    { label: 'Service', value: serviceLabel(formData.service), stepIndex: 2 },
  ];

  return (
    <section id="contact-form" className={compact ? '' : 'bg-[#080D18] py-16'}>
      <div className="container mx-auto px-4">
        <div className={compact ? 'max-w-2xl' : 'max-w-5xl mx-auto grid lg:grid-cols-5 gap-12'}>
          {!compact && (
            <div className="lg:col-span-2">
              <h2 className="font-sora font-extrabold text-[32px] text-[#F0F4FF] leading-tight mb-8">{ctaHeadline}</h2>
              <ul className="space-y-4 mt-4">
                {[
                  'SEO Performance Analysis',
                  'PPC Account Review',
                  'Website Conversion Audit',
                  'Competitor Analysis',
                  'Custom Growth Roadmap',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#8FA8C8] text-[15px] font-medium">
                    <span className="w-[26px] h-[26px] rounded-full bg-[rgba(0,198,138,0.12)] border border-[rgba(0,198,138,0.20)] flex items-center justify-center text-[#00C68A] text-[12px] font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={compact ? 'w-full' : 'lg:col-span-3'}>
            <div className={`bg-[#1A2438] border border-[rgba(255,255,255,0.08)] rounded-[16px] ${compact ? 'p-6' : 'p-8'}`}>
              <form
                onSubmit={onFormSubmit}
                onKeyDown={onFormKeyDown}
                onPointerDownCapture={() => { interactedRef.current = true; }}
                onKeyDownCapture={() => { interactedRef.current = true; }}
                noValidate
              >
                <ProgressBar steps={steps} currentStep={currentStep} />

                {/* Honeypot field - anti-spam. Rendered on every step so bots
                    that ignore the step flow still fill it. */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="_hp"
                    value={formData._hp}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                {/* key={currentStep} re-mounts the wrapper per step so the CSS
                    enter animation replays (respects prefers-reduced-motion). */}
                <div key={currentStep} ref={stepContainerRef} className="form-step-enter">
                  {stepId === 'about' && (
                    <StepShell question="Tell us who you are" hint="Company is optional — skip it if it doesn't apply.">
                      <div className="flex flex-col gap-4">
                        <StepInput
                          label="Name *"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          error={formErrors.name}
                          placeholder="Dr. Sarah Johnson"
                          autoComplete="name"
                          autoFocus
                        />
                        <StepInput
                          label="Practice / Company (optional)"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Elite Medical Practice"
                          autoComplete="organization"
                        />
                      </div>
                    </StepShell>
                  )}

                  {stepId === 'contact' && (
                    <StepShell question="How do we reach you?" hint="We'll send your audit here — no spam, ever.">
                      <div className="flex flex-col gap-4">
                        <StepInput
                          label="Email *"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={formErrors.email}
                          placeholder="sarah@elitemedical.com"
                          autoComplete="email"
                          autoFocus
                        />
                        <StepInput
                          label="Phone *"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          error={formErrors.phone}
                          placeholder="+1 555-123-4567"
                          autoComplete="tel"
                        />
                      </div>
                    </StepShell>
                  )}

                  {stepId === 'service' && (
                    <StepShell question="What service are you interested in?">
                      <ServiceCards
                        options={SERVICE_OPTIONS}
                        value={formData.service}
                        error={formErrors.service}
                        onSelect={(value) =>
                          handleChange({ target: { name: 'service', value } })
                        }
                      />
                    </StepShell>
                  )}

                  {stepId === 'message' && (
                    <StepShell question="Tell us about your goals" hint="Check your details, then send.">
                      {/* Summary of steps 1–3 with Edit links — review merged into
                          the final step so users confirm without an extra screen. */}
                      <ReviewStep rows={reviewRows} onEdit={goToStep} />
                      <StepInput
                        label="Message *"
                        name="message"
                        textarea
                        value={formData.message}
                        onChange={handleChange}
                        error={formErrors.message}
                        placeholder="Tell us about your practice and goals..."
                        autoFocus
                      />
                      {submitError && (
                        <p className="text-red-400 text-[13px] mt-3" role="alert">
                          {submitError}
                        </p>
                      )}
                    </StepShell>
                  )}
                </div>

                {/* Step navigation; final step swaps Next for the real submit */}
                <div className="flex items-center gap-3 mt-5">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="px-5 py-[11px] bg-transparent border border-[rgba(255,255,255,0.15)] text-[#8FA8C8] hover:text-[#F0F4FF] hover:border-[rgba(255,255,255,0.30)] font-semibold text-[13px] rounded-[10px] cursor-pointer transition-colors duration-200"
                    >
                      ← Back
                    </button>
                  )}
                  {isFinalStep ? (
                    <button
                      type="submit"
                      disabled={formLoading || !stepValid}
                      className="flex-1 py-[11px] bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold text-[13px] rounded-[10px] border-none cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formLoading ? 'Sending...' : ctaButtonText}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!stepValid}
                      className="flex-1 py-[11px] bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold text-[13px] rounded-[10px] border-none cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {/* Visible "Skip" affordance: company optional, so label reads
                          Skip when name is done but company left blank */}
                      {stepId === 'about' && formData.name.trim() && !formData.company.trim()
                        ? 'Skip company →'
                        : 'Next →'}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
