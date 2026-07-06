import { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';

/*
 * Multi-step flow definition. Order is CRO-driven:
 * - Name + company grouped as one "who are you" step: lowest-friction opener,
 *   single mental context; company stays optional (visible Skip affordance).
 * - Email + phone grouped as one "how do we reach you" step: same mental context,
 *   splitting them adds a step without reducing perceived effort.
 * - Final step merges message + read-only summary with Edit links: keeps the
 *   trust/typo-catching benefit of a review screen without a 6th step.
 */
export const FORM_STEPS = [
  { id: 'about', label: 'About You', fields: ['name', 'company'] },
  { id: 'contact', label: 'Contact', fields: ['email', 'phone'] },
  { id: 'service', label: 'Service', fields: ['service'] },
  { id: 'message', label: 'Message', fields: ['message'] },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Per-field validators; validateStep and full-form validation compose these
// so step-level and submit-level rules can never drift apart.
const FIELD_VALIDATORS = {
  name: (v) => (!v.trim() ? 'Name is required' : ''),
  company: () => '', // optional
  email: (v) => {
    if (!v.trim()) return 'Email is required';
    if (!EMAIL_REGEX.test(v.trim())) return 'Please enter a valid email address';
    return '';
  },
  phone: (v) => (!v.trim() ? 'Phone is required' : ''),
  service: (v) => (!v ? 'Please select a service' : ''),
  message: (v) => (!v.trim() ? 'Message is required' : ''),
};

// Pure check (no state writes) — lets the UI disable "Next" reactively
// while validateStep() remains the error-surfacing path.
export const isStepValid = (stepIndex, data) => {
  const step = FORM_STEPS[stepIndex];
  if (!step) return true;
  return step.fields.every((field) => !FIELD_VALIDATORS[field]?.(data[field] ?? ''));
};

const storageKey = (slug) => `growlimo-form:${slug || 'general'}`;

// GTM custom events (container GTM-NQRJFFZJ). Structured as flat dataLayer
// pushes so GTM can map them to custom-event triggers without a data model.
const pushEvent = (event, slug, variant, extra = {}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    form_slug: slug || 'general',
    form_variant: variant,
    ...extra,
  });
};

export const useContactForm = (slug, variant = 'service') => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    _hp: '', // Honeypot anti-spam field
    pageSource: slug || 'general',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [formLoading, setFormLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const restoredRef = useRef(false);

  // Restore in-progress answers (refresh shouldn't wipe progress), then let
  // fresh querystring UTM values win over anything persisted.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let saved = null;
    try {
      saved = JSON.parse(sessionStorage.getItem(storageKey(slug)) || 'null');
    } catch {
      saved = null;
    }

    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      ...(saved?.formData || {}),
      _hp: '', // never restore honeypot
      pageSource: slug || 'general',
      utmSource: params.get('utm_source') || saved?.formData?.utmSource || prev.utmSource,
      utmMedium: params.get('utm_medium') || saved?.formData?.utmMedium || prev.utmMedium,
      utmCampaign: params.get('utm_campaign') || saved?.formData?.utmCampaign || prev.utmCampaign,
    }));
    if (Number.isInteger(saved?.currentStep) && saved.currentStep > 0 && saved.currentStep < FORM_STEPS.length) {
      setCurrentStep(saved.currentStep);
    }
    restoredRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // Persist progress (skip until restore ran so we don't clobber saved state).
  useEffect(() => {
    if (typeof window === 'undefined' || !restoredRef.current) return;
    const { _hp, ...persistable } = formData;
    try {
      sessionStorage.setItem(
        storageKey(slug),
        JSON.stringify({ formData: persistable, currentStep })
      );
    } catch {
      // storage full/unavailable — persistence is best-effort
    }
  }, [formData, currentStep, slug]);

  // Funnel analytics: step_viewed on every step change (incl. initial mount).
  useEffect(() => {
    pushEvent('form_step_viewed', slug, variant, {
      form_step: FORM_STEPS[currentStep].id,
      form_step_index: currentStep,
    });
  }, [currentStep, slug, variant]);

  const validateStep = useCallback(
    (stepIndex, data = formData) => {
      const step = FORM_STEPS[stepIndex];
      if (!step) return true;
      const e = {};
      step.fields.forEach((field) => {
        const err = FIELD_VALIDATORS[field]?.(data[field] ?? '');
        if (err) e[field] = err;
      });
      setFormErrors(e);
      return Object.keys(e).length === 0;
    },
    [formData]
  );

  const validateForm = useCallback(() => {
    const e = {};
    Object.entries(FIELD_VALIDATORS).forEach(([field, validate]) => {
      const err = validate(formData[field] ?? '');
      if (err) e[field] = err;
    });
    setFormErrors(e);
    return Object.keys(e).length === 0;
  }, [formData]);

  const goNext = useCallback(() => {
    if (currentStep >= FORM_STEPS.length - 1) return;
    if (!validateStep(currentStep)) return;
    pushEvent('form_step_completed', slug, variant, {
      form_step: FORM_STEPS[currentStep].id,
      form_step_index: currentStep,
    });
    setCurrentStep((s) => Math.min(s + 1, FORM_STEPS.length - 1));
  }, [currentStep, validateStep, slug, variant]);

  const goBack = useCallback(() => {
    setFormErrors({});
    setCurrentStep((s) => Math.max(s - 1, 0));
  }, []);

  const goToStep = useCallback((index) => {
    if (index < 0 || index >= FORM_STEPS.length) return;
    setFormErrors({});
    setCurrentStep(index);
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => {
      const n = { ...prev };
      delete n[name];
      return n;
    });
    setSubmitError('');
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSubmitError('');

      // 1. Honeypot check (Bot protection) — before any submission attempt
      if (formData._hp) {
        console.warn('Spam detected');
        router.push('/thank-you');
        return;
      }

      if (!validateForm()) return;

      setFormLoading(true);

      // 2. Prepare Submission Data
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim() || 'N/A',
        service: formData.service,
        message: formData.message.trim(),
        page: formData.pageSource,
        variant: variant,
        utm_source: formData.utmSource || 'direct',
        utm_medium: formData.utmMedium || 'none',
        utm_campaign: formData.utmCampaign || 'organic',
        reply_to: formData.email.trim(),
      };

      let adminSuccess = false;

      try {
        // 3. EmailJS Integration
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        const ADMIN_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const USER_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID;

        if (!SERVICE_ID || !PUBLIC_KEY) {
          throw new Error('EmailJS configuration missing (Service ID or Public Key)');
        }

        // 4a. Trigger Admin Notification (Critical — blocking)
        try {
          if (ADMIN_TEMPLATE_ID) {
            await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, submissionData, PUBLIC_KEY);
            adminSuccess = true;
          } else {
            console.warn('Admin Template ID is missing');
          }
        } catch (adminErr) {
          console.error('Admin lead notification failed:', adminErr?.text || adminErr || 'Unknown error');
        }

        // 4b. Trigger User Auto-reply (Non-critical — best-effort)
        try {
          if (USER_TEMPLATE_ID) {
            await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, submissionData, PUBLIC_KEY);
          }
        } catch (userErr) {
          console.error('User auto-reply failed:', userErr?.text || userErr || 'Unknown error');
        }

        if (adminSuccess) {
          pushEvent('form_submitted', slug, variant, { form_service: formData.service });
          try {
            sessionStorage.removeItem(storageKey(slug));
          } catch {
            // ignore
          }
          router.push('/thank-you');
        } else {
          throw new Error('Failed to send lead notification');
        }
      } catch (err) {
        console.error('Submission Error:', err);
        pushEvent('form_submit_failed', slug, variant, {
          form_error: err?.message || 'unknown',
        });
        setSubmitError('Failed to send. Please try again or call us directly at info@growlimo.com');
      } finally {
        setFormLoading(false);
      }
    },
    [formData, validateForm, router, variant, slug]
  );

  return {
    formData,
    formErrors,
    formLoading,
    submitError,
    handleChange,
    handleSubmit,
    setFormData,
    // multi-step API
    steps: FORM_STEPS,
    currentStep,
    goNext,
    goBack,
    goToStep,
    validateStep,
  };
};
