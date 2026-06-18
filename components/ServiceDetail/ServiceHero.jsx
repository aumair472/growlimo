import Form from '../common/Form';

export default function ServiceHero({
  h1,
  subheadline,
  heroContent,
  isCustomLayout,
  slug,
  areaServedName,
  benefits,
  ctaButtonText
}) {
  // Determine dynamic badge text based on slug and state served
  let badgeText = 'DIGITAL MARKETING SPECIALISTS';
  if (areaServedName) {
    const stateUpper = areaServedName.toUpperCase();
    if (slug.includes('dentist')) {
      badgeText = `${stateUpper} DENTIST MARKETING`;
    } else if (slug.includes('healthcare')) {
      badgeText = `${stateUpper} HEALTHCARE MARKETING`;
    } else if (slug.includes('email')) {
      badgeText = `${stateUpper} EMAIL MARKETING`;
    } else if (slug.includes('social')) {
      badgeText = `${stateUpper} SOCIAL MEDIA MARKETING`;
    } else if (slug.includes('web-design') || slug.includes('web-developer')) {
      badgeText = `${stateUpper} WEB SERVICES`;
    } else if (slug.includes('seo')) {
      badgeText = `${stateUpper} SEO SERVICES`;
    } else if (slug.includes('ppc') || slug.includes('google-ads') || slug.includes('facebook-ads') || slug.includes('meta-ads')) {
      badgeText = `${stateUpper} PAID ADS SERVICES`;
    } else {
      badgeText = `${stateUpper} DIGITAL MARKETING`;
    }
  } else {
    if (slug.includes('dentist')) {
      badgeText = 'DENTAL MARKETING SPECIALISTS';
    } else if (slug.includes('healthcare')) {
      badgeText = 'HEALTHCARE MARKETING SPECIALISTS';
    } else if (slug.includes('email')) {
      badgeText = 'EMAIL MARKETING SPECIALISTS';
    } else if (slug.includes('social')) {
      badgeText = 'SOCIAL MEDIA MARKETING SPECIALISTS';
    } else if (slug.includes('web-design') || slug.includes('web-developer')) {
      badgeText = 'WEB SERVICES SPECIALISTS';
    } else if (slug.includes('seo')) {
      badgeText = 'SEO SERVICES SPECIALISTS';
    } else if (slug.includes('ppc') || slug.includes('google-ads') || slug.includes('facebook-ads') || slug.includes('meta-ads')) {
      badgeText = 'PAID ADVERTISING SPECIALISTS';
    }
  }

  // Determine dynamic form card header based on slug and state served
  let formTitle = 'Request Free Consultation';
  if (slug.includes('dentist')) {
    formTitle = `Get Your Free ${areaServedName || 'Dental'} Marketing Audit`;
  } else if (slug.includes('healthcare')) {
    formTitle = `Get Your Free ${areaServedName || 'Healthcare'} Marketing Audit`;
  } else if (slug.includes('email')) {
    formTitle = `Get Your Free ${areaServedName || ''} Email Marketing Audit`;
  } else if (slug.includes('social')) {
    formTitle = `Get Your Free ${areaServedName || ''} Social Media Audit`;
  } else if (slug.includes('web-design') || slug.includes('web-developer')) {
    formTitle = `Get Your Free ${areaServedName || ''} Web Audit`;
  } else if (slug.includes('seo')) {
    formTitle = `Get Your Free ${areaServedName || ''} SEO Audit`;
  } else if (slug.includes('ppc') || slug.includes('google-ads') || slug.includes('facebook-ads') || slug.includes('meta-ads')) {
    formTitle = `Get Your Free ${areaServedName || ''} Paid Ads Audit`;
  } else {
    formTitle = `Get Your Free ${areaServedName || ''} Marketing Audit`;
  }
  formTitle = formTitle.replace(/\s+/g, ' ');

  // Determine trust pills values
  const isCA = slug.endsWith('california');
  const trustPills = [
    { value: '100+', label: isCA ? 'CA Clients' : 'TX Clients' },
    { value: '4.9★', label: 'Google Rating' },
    { value: 'No Lock-In', label: 'Contracts' }
  ];

  return (
    <section className="bg-[#080D18] text-white pt-[100px] pb-[80px] relative overflow-hidden">
      {/* Background radial glow highlights */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-[rgba(0,198,138,0.04)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[rgba(221,102,19,0.03)] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-10 max-w-[1100px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline & Trust Info */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="bg-[rgba(0,198,138,0.08)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[11px] font-extrabold uppercase tracking-[2.5px] rounded-full py-[6px] px-[16px] mb-6 inline-flex font-sans leading-none">
              {badgeText}
            </span>

            <h1 className="text-[30px] md:text-[36px] lg:text-[40px] font-extrabold font-sora text-[#F0F4FF] leading-[1.12] mb-6 tracking-tight">
              {h1}
            </h1>

            {/* Subheadline or first paragraph of heroContent */}
            {heroContent && heroContent.length > 0 ? (
              heroContent.map((para, index) => (
                <p key={index} className="font-sans text-[15px] text-[#8FA8C8] leading-[1.7] mb-4 max-w-[620px]">
                  {para}
                </p>
              ))
            ) : (
              subheadline && (
                <p className="font-sans text-[15px] text-[#8FA8C8] leading-[1.7] mb-8 max-w-[620px]">
                  {subheadline}
                </p>
              )
            )}

            {/* 3 Trust Pills */}
            <div className="flex flex-wrap gap-3 mt-4 w-full">
              {trustPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-[rgba(26,36,56,0.5)] border border-[rgba(255,255,255,0.05)] rounded-[12px] px-5 py-3 shadow-md hover:border-[#00C68A]/35 transition-all duration-200"
                >
                  <span className="text-[#00C68A] font-sora font-extrabold text-[16px]">{pill.value}</span>
                  <span className="text-[#8FA8C8] font-sans text-[13px] font-medium border-l border-[rgba(255,255,255,0.1)] pl-3">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#1A2438]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-[20px] p-5 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#00C68A]/5 rounded-bl-full pointer-events-none" />
              <h3 className="font-sora font-bold text-[15px] text-[#F0F4FF] mb-3 text-left border-b border-[rgba(255,255,255,0.06)] pb-2">
                {formTitle}
              </h3>
              <Form
                slug={slug}
                compact={true}
                variant="contact"
                ctaButtonText={ctaButtonText || 'Request Free Consultation'}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
