import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useContactForm from '../../hooks/useContactForm';

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
    group: 'Facebook & Meta Ads',
    options: [
      { value: 'facebook-ads', label: 'Facebook Ads' },
      { value: 'meta-ads', label: 'Meta Ads' },
    ],
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

const Form = ({
  slug,
  ctaHeadline = 'Request Free Consultation',
  ctaButtonText = 'Request Free Consultation',
  compact = false,
  variant = 'service',
}) => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const {
    formData,
    formErrors,
    formLoading,
    submitError,
    handleChange,
    handleSubmit,
    inputCls,
  } = useContactForm(slug, variant, navigate);
  
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
    compact
      ? `w-full px-3.5 py-2.5 bg-slate-800 border ${
          err ? 'border-red-500' : 'border-slate-700'
        } rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary`
      : inputCls(err);

  const labelClass = compact
    ? 'block text-xs font-medium text-slate-300 mb-1.5'
    : 'block text-sm font-medium text-slate-300 mb-2';

  const gridClass = compact
    ? 'grid grid-cols-1 md:grid-cols-2 gap-4'
    : 'grid grid-cols-1 md:grid-cols-2 gap-5';

  return (
    <section
      id="contact-form"
      ref={formRef}
      className={
        compact
          ? 'relative'
          : 'bg-slate-900/50 py-16 md:py-24 relative overflow-hidden'
      }
    >
      {!compact && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl" />
        </div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <div className={compact ? 'max-w-2xl ml-auto' : 'max-w-5xl mx-auto'}>
          <div className={compact ? 'block' : 'grid lg:grid-cols-5 gap-8'}>
            <div className={compact ? 'hidden' : 'lg:col-span-2'}>
              <h2 className="text-2xl font-bold text-white mb-2">
                {ctaHeadline}
              </h2>
              <p className="text-slate-400 text-sm mb-5 font-medium">
                What&apos;s included in your free session:
              </p>
              <ul className="space-y-4">
                {[
                  {
                    t: 'SEO Performance Analysis',
                    d: 'Keyword rankings, technical issues, content gaps',
                  },
                  {
                    t: 'PPC Account Review',
                    d: 'Wasted spend, compliance issues, optimization recommendations',
                  },
                  {
                    t: 'Website Conversion Audit',
                    d: 'UX analysis, form optimization, mobile performance',
                  },
                  {
                    t: 'Competitor Analysis',
                    d: 'What competitors are doing and how to outrank them',
                  },
                  {
                    t: 'Custom Growth Roadmap',
                    d: 'Specific recommendations with projected ROI',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 font-bold text-lg leading-none">
                      &#10003;
                    </span>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {item.t}
                      </p>
                      <p className="text-slate-400 text-xs">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 glass-card p-4 border-l-4 border-primary/50">
                <p className="text-sm text-white font-semibold mb-1">
                  No Obligation. No High-Pressure Sales.
                </p>
                <p className="text-xs text-slate-400">
                  We&apos;ll have an honest conversation about your practice,
                  your goals, and whether we&apos;re the right fit.
                </p>
              </div>
            </div>

            <div className={compact ? 'w-full' : 'lg:col-span-3'}>
              {/* Submission error banner */}
              {submitError && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`${compact ? 'mb-4 px-4 py-3' : 'mb-6 px-6 py-4'} bg-red-500/20 border border-red-500 text-red-400 rounded-lg flex items-center gap-3`}
                >
                  <svg
                    className="w-6 h-6 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">Something went wrong.</p>
                    <p className="text-sm">{submitError}</p>
                  </div>
                </div>
              )}

              <div className={`glass-card ${compact ? 'p-3' : 'p-6 md:p-8'}`}>
                <form
                  onSubmit={handleSubmit}
                  className={compact ? 'space-y-4' : 'space-y-5'}
                  noValidate
                >
                  <div className={gridClass}>
                    <div>
                      <label htmlFor="cf-name" className={labelClass}>
                        Name *
                      </label>
                      <input
                        id="cf-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={fieldClass(formErrors.name)}
                        placeholder="Dr. Sarah Johnson"
                        required
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-400" role="alert">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cf-company" className={labelClass}>
                        Practice / Company
                      </label>
                      <input
                        id="cf-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={
                          compact
                            ? 'w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary'
                            : 'w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary'
                        }
                        placeholder="Elite Medical Practice"
                      />
                    </div>
                  </div>
                  <div className={gridClass}>
                    <div>
                      <label htmlFor="cf-email" className={labelClass}>
                        Email *
                      </label>
                      <input
                        id="cf-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={fieldClass(formErrors.email)}
                        placeholder="sarah@elitemedical.com"
                        required
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-400" role="alert">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cf-phone" className={labelClass}>
                        Phone *
                      </label>
                      <input
                        id="cf-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={fieldClass(formErrors.phone)}
                        placeholder="+1 555-123-4567"
                        required
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-400" role="alert">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div ref={serviceDropdownRef} className="relative">
                    <label className={labelClass}>
                      Service Interested In *
                    </label>
                    <button
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={serviceOpen}
                      onClick={() => setServiceOpen((prev) => !prev)}
                      className={`w-full ${compact ? 'px-3.5 py-2.5 text-sm' : 'px-4 py-3'} bg-slate-800 border rounded-xl text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 ${formErrors.service ? 'border-red-500' : serviceOpen ? 'border-primary' : 'border-slate-700 hover:border-slate-500'}`}
                    >
                      <span
                        className={
                          selectedServiceLabel ? 'text-white' : 'text-slate-300'
                        }
                      >
                        {selectedServiceLabel || 'Select a service'}
                      </span>
                      <svg
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${serviceOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {serviceOpen && (
                      <div
                        role="listbox"
                        className="absolute top-full left-0 right-0 mt-1 rounded-xl border border-slate-600 shadow-2xl z-40 overflow-hidden"
                        style={{
                          background: '#1e293b',
                          maxHeight: '260px',
                          overflowY: 'auto',
                          scrollbarWidth: 'thin',
                          scrollbarColor: '#334155 transparent',
                        }}
                      >
                        {SERVICE_OPTIONS.map((group, groupIndex) => (
                          <div key={group.group} role="group" aria-label={group.group}>
                            {/* Group header */}
                            <div
                              className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
                              style={{
                                color: '#64748b',
                                background: '#0f172a',
                                borderTop:
                                  groupIndex === 0
                                    ? 'none'
                                    : '1px solid #1e293b',
                                letterSpacing: '0.1em',
                              }}
                            >
                              {group.group}
                            </div>
                            {/* Options */}
                            {group.options.map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                role="option"
                                aria-selected={formData.service === option.value}
                                onClick={() => {
                                  handleChange({
                                    target: {
                                      name: 'service',
                                      value: option.value,
                                    },
                                  });
                                  setServiceOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 text-sm transition-all duration-150"
                                style={{
                                  color:
                                    formData.service === option.value
                                      ? '#00C68A'
                                      : '#cbd5e1',
                                  background:
                                    formData.service === option.value
                                      ? 'rgba(0, 198, 138, 0.08)'
                                      : 'transparent',
                                  borderLeft:
                                    formData.service === option.value
                                      ? '3px solid #00C68A'
                                      : '3px solid transparent',
                                  fontWeight:
                                    formData.service === option.value
                                      ? '600'
                                      : '400',
                                }}
                                onMouseEnter={(e) => {
                                  if (formData.service !== option.value) {
                                    e.currentTarget.style.background =
                                      'rgba(255,255,255,0.04)';
                                    e.currentTarget.style.color = '#f1f5f9';
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  if (formData.service !== option.value) {
                                    e.currentTarget.style.background =
                                      'transparent';
                                    e.currentTarget.style.color = '#cbd5e1';
                                  }
                                }}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                    {formErrors.service && (
                      <p className="mt-1 text-sm text-red-400" role="alert">
                        {formErrors.service}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="cf-message" className={labelClass}>
                      Message *
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={compact ? 3 : 4}
                      className={fieldClass(formErrors.message)}
                      placeholder="Tell us about your practice and marketing goals..."
                      required
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-400" role="alert">
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className={`w-full bg-primary hover:bg-accent text-slate-950 font-bold ${compact ? 'py-2.5 px-6 text-base' : 'py-3 px-8'} rounded-lg transition transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2`}
                  >
                    {formLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      ctaButtonText
                    )}
                  </button>
                  <p
                    className={`text-slate-300 text-center ${compact ? 'text-[11px] leading-relaxed' : 'text-xs'}`}
                  >
                    By submitting this form, you consent to being contacted by
                    Growlimo regarding digital marketing services.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Form;
