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
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
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
        router.push('/thank-you'); // Silently redirect bots
        return;
      }

      if (!validateForm()) return;

      setFormLoading(true);

      // 2. Prepare & Trim Data
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        service: formData.service,
        message: formData.message.trim(),
        pageSource: formData.pageSource,
        utm_source: formData.utmSource,
        reply_to: formData.email.trim(),
      };

      try {
        // 3. Send to Pageclip
        const PAGECLIP_KEY = process.env.NEXT_PUBLIC_PAGECLIP_KEY || 'YOUR_KEY';
        const response = await fetch(`https://send.pageclip.co/${PAGECLIP_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        if (!response.ok) {
          console.error('Pageclip error:', response.statusText);
        }

        // 4. Send via EmailJS
        const SERVICE_ID = 'service_qc4h9bv';
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          submissionData,
          PUBLIC_KEY
        );

        router.push('/thank-you');
      } catch (err) {
        console.error('Submission Error:', err);
        setSubmitError('Failed to send. Please try again or call us directly.');
      } finally {
        setFormLoading(false);
      }
    },
    [formData, validateForm, router]
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
