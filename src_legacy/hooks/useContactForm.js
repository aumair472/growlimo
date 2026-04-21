import { useState, useCallback, useEffect } from 'react';
import api from '../config/axios';
import { validateEmail, validatePhone, validateRequired } from '../utils/validation';

export const useContactForm = (slug, variant = 'service', navigate) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    pageSource: slug || 'general',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
  });

  // Capture UTM parameters from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utmSource: params.get('utm_source') || prev.utmSource,
      utmMedium: params.get('utm_medium') || prev.utmMedium,
      utmCampaign: params.get('utm_campaign') || prev.utmCampaign,
    }));
  }, []);

  const [formErrors, setFormErrors] = useState({});
  const [formLoading, setFormLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const inputCls = (err) =>
    `w-full px-4 py-3 bg-slate-800 border ${
      err ? 'border-red-500' : 'border-slate-700'
    } rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary`;

  const validateForm = useCallback(() => {
    const e = {};
    if (!validateRequired(formData.name)) e.name = 'Name is required';
    
    if (!validateRequired(formData.email)) e.email = 'Email is required';
    else if (!validateEmail(formData.email)) e.email = 'Invalid email';
    
    if (!validateRequired(formData.phone)) e.phone = 'Phone is required';
    else if (!validatePhone(formData.phone)) e.phone = 'Enter a valid phone number';
    
    if (!validateRequired(formData.service)) e.service = 'Please select a service';
    
    if (!validateRequired(formData.message)) e.message = 'Message is required';
    else if (formData.message.trim().length < 10) e.message = 'At least 10 characters';
    
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
      if (!validateForm()) return;

      setFormLoading(true);
      try {
        const res = await api.post('/api/leads', formData);
        if (res.data.success) {
          // Reset form
          setFormData({
            name: '',
            company: '',
            phone: '',
            email: '',
            service: '',
            message: '',
            pageSource: slug || 'general',
            utmSource: '',
            utmMedium: '',
            utmCampaign: '',
          });
          // Redirect to thank-you page
          if (navigate) {
            navigate('/thank-you', { state: { source: variant } });
          }
        }
      } catch (err) {
        const msg =
          err.response?.data?.error ||
          err.response?.data?.message ||
          'Failed to send. Please try again.';
        setSubmitError(msg);
      } finally {
        setFormLoading(false);
      }
    },
    [formData, validateForm, slug, variant, navigate]
  );

  return {
    formData,
    formErrors,
    formLoading,
    submitError,
    handleChange,
    handleSubmit,
    inputCls,
  };
};

export default useContactForm;
