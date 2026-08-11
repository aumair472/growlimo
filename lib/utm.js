// Campaign attribution read straight off the current querystring. Kept separate
// from useContactForm so the booking modal and the contact form report the same
// utm_* keys without either owning the other's storage shape.
export const readUtmParams = () => {
  if (typeof window === 'undefined') {
    return { utmSource: '', utmMedium: '', utmCampaign: '' };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
  };
};
