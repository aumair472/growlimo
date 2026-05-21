import { useState, useRef, useEffect } from 'react';
import { useContactForm } from '../../hooks/useContactForm';

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
  } = useContactForm(slug, variant);

  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceDropdownRef = useRef(null);

  useEffect(() => {
    if (initialService || initialMessage) {
      setFormData((prev) => ({
        ...prev,
        service: initialService || prev.service,
        message: initialMessage || prev.message,
      }));
    }
  }, [initialService, initialMessage, setFormData]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(e.target)
      ) {
        setServiceOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedServiceLabel =
    SERVICE_OPTIONS.flatMap((g) => g.options).find(
      (o) => o.value === formData.service
    )?.label || '';

  const fieldClass = (err) =>
    `w-full px-4 py-[11px] bg-[#0C1220] border ${err
      ? 'border-red-500'
      : 'border-[rgba(255,255,255,0.10)]'
    } rounded-[10px] text-[#F0F4FF] text-[12px]
    placeholder-[#4A6080] 
    focus:outline-none 
    focus:border-[#00C68A] 
    transition-colors duration-200`;

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
            <div className="bg-[#1A2438] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[#8FA8C8] mb-[6px]">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={fieldClass(formErrors.name)}
                      placeholder="Dr. Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#8FA8C8] mb-[6px]">Practice / Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={fieldClass(false)}
                      placeholder="Elite Medical Practice"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[#8FA8C8] mb-[6px]">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={fieldClass(formErrors.email)}
                      placeholder="sarah@elitemedical.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#8FA8C8] mb-[6px]">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={fieldClass(formErrors.phone)}
                      placeholder="+1 555-123-4567"
                    />
                  </div>
                </div>

                <div ref={serviceDropdownRef} className="relative">
                  <label className="block text-[11px] font-medium text-[#8FA8C8] mb-[6px]">Service Interested In *</label>
                  <button
                    type="button"
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className={fieldClass(formErrors.service)}
                  >
                    <span className={selectedServiceLabel ? 'text-white' : 'text-slate-500'}>
                      {selectedServiceLabel || 'Select a service'}
                    </span>
                  </button>
                  {serviceOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#0C1220] border border-[rgba(255,255,255,0.10)] rounded-[12px] shadow-2xl z-50 overflow-hidden max-h-60 overflow-y-auto">
                      {SERVICE_OPTIONS.map((group) => (
                        <div key={group.group}>
                          <div className="px-4 py-2 text-[10px] font-bold text-[#4A6080] bg-[#080D18] uppercase tracking-widest">
                            {group.group}
                          </div>
                          {group.options.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => {
                                handleChange({ target: { name: 'service', value: opt.value } });
                                setServiceOpen(false);
                              }}
                              className="w-full text-left px-4 py-3 text-[13px] text-[#8FA8C8] hover:bg-[rgba(0,198,138,0.08)] hover:text-[#00C68A] transition-colors duration-150"
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Honeypot field - anti-spam */}
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

                <div>
                  <label className="block text-[11px] font-medium text-[#8FA8C8] mb-[6px]">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={fieldClass(formErrors.message)}
                    placeholder="Tell us about your practice and goals..."
                  />
                </div>

                {submitError && <p className="text-red-400 text-[13px] mt-1">{submitError}</p>}

                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full py-[11px] bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold text-[13px] rounded-[10px] border-none cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {formLoading ? 'Sending...' : ctaButtonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
