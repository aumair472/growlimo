import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setFormData((prev) => ({
        ...prev,
        utmSource: params.get('utm_source') || prev.utmSource,
        utmMedium: params.get('utm_medium') || prev.utmMedium,
        utmCampaign: params.get('utm_campaign') || prev.utmCampaign,
      }));
    }
  }, []);

  const [formErrors, setFormErrors] = useState({});
  const [formLoading, setFormLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = useCallback(() => {
    const e = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) {
      e.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      e.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) e.phone = 'Phone is required';
    if (!formData.service) e.service = 'Please select a service';
    if (!formData.message.trim()) e.message = 'Message is required';
    
    setFormErrors(e);
    return Object.keys(e).length === 0;
  }, [formData]);

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

      // 1. Honeypot check (Bot protection)
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
        company: formData.company.trim() || "N/A",
        service: formData.service,
        message: formData.message.trim(),
        page: formData.pageSource,
        variant: variant,
        utm_source: formData.utmSource || "direct",
        utm_medium: formData.utmMedium || "none",
        utm_campaign: formData.utmCampaign || "organic",
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

        // 4a. Trigger Admin Notification (Critical)
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

        // 4b. Trigger User Auto-reply (Non-critical)
        try {
          if (USER_TEMPLATE_ID) {
            await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, submissionData, PUBLIC_KEY);
          }
        } catch (userErr) {
          console.error('User auto-reply failed:', userErr?.text || userErr || 'Unknown error');
        }

        if (adminSuccess) {
          router.push('/thank-you');
        } else {
          throw new Error('Failed to send lead notification');
        }

      } catch (err) {
        console.error('Submission Error:', err);
        setSubmitError('Failed to send. Please try again or call us directly at info@growlimo.com');
      } finally {
        setFormLoading(false);
      }
    },
    [formData, validateForm, router, variant]
  );

  return {
    formData,
    formErrors,
    formLoading,
    submitError,
    handleChange,
    handleSubmit,
  };
};
