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
}) {
  const {
    formData,
    formErrors,
    formLoading,
    submitError,
    handleChange,
    handleSubmit,
  } = useContactForm(slug, variant);
  
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceDropdownRef = useRef(null);

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
    `w-full px-4 py-3 bg-slate-800 border ${
      err ? 'border-red-500' : 'border-slate-700'
    } rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`;

  return (
    <section id="contact-form" className={compact ? '' : 'bg-slate-900/50 py-10 md:py-14'}>
      <div className="container mx-auto px-4">
        <div className={compact ? 'max-w-2xl' : 'max-w-5xl mx-auto grid lg:grid-cols-5 gap-12'}>
          {!compact && (
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">{ctaHeadline}</h2>
              <ul className="space-y-4">
                {[
                  'SEO Performance Analysis',
                  'PPC Account Review',
                  'Website Conversion Audit',
                  'Competitor Analysis',
                  'Custom Growth Roadmap',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="text-primary font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={compact ? 'w-full' : 'lg:col-span-3'}>
            <div className="glass-card p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Name *</label>
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
                    <label className="block text-sm font-medium text-slate-400 mb-2">Practice / Company</label>
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email *</label>
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
                    <label className="block text-sm font-medium text-slate-400 mb-2">Phone *</label>
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
                  <label className="block text-sm font-medium text-slate-400 mb-2">Service Interested In *</label>
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
                    <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden max-h-60 overflow-y-auto">
                      {SERVICE_OPTIONS.map((group) => (
                        <div key={group.group}>
                          <div className="px-4 py-2 text-xs font-bold text-slate-500 bg-slate-900/50 uppercase tracking-widest">
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
                              className="w-full text-left px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-colors text-slate-300"
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
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={fieldClass(formErrors.message)}
                    placeholder="Tell us about your practice and goals..."
                  />
                </div>

                {submitError && <p className="text-red-500 text-sm">{submitError}</p>}

                <button
                  type="submit"
                  disabled={formLoading}
                  className="btn-primary w-full py-4 rounded-xl font-bold text-lg disabled:opacity-50"
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
