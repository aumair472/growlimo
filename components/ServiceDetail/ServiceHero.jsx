import Form from '../common/Form';

export default function ServiceHero({
  h1,
  subheadline,
  heroContent,
  isCustomLayout,
  slug,
  areaServedName
}) {
  const locationLabel = areaServedName 
    ? `${areaServedName.toUpperCase()} SEO SPECIALISTS`
    : 'DIGITAL MARKETING SPECIALISTS';

  return (
    <section className="bg-[#080D18] text-white pt-[80px] relative overflow-hidden">

      {/* Top part — badge + headline + subtext only */}
      <div className="container mx-auto px-4 md:px-10 max-w-[1100px] mb-12 text-left">

        <div className="bg-[rgba(0,198,138,0.10)] border border-[rgba(0,198,138,0.25)] text-[#00C68A] text-[11px] font-bold uppercase tracking-[2px] rounded-full py-[5px] px-[14px] mb-5 inline-flex font-sans leading-none">
          {locationLabel}
        </div>

        <h1 className="text-4xl md:text-[52px] font-extrabold font-sora text-[#F0F4FF] leading-[1.08] mb-6 tracking-tight max-w-[700px]">
          {h1}
        </h1>

        {isCustomLayout && heroContent &&
          heroContent.map((para, index) => (
            <p key={index} className="font-sans text-[17px] text-[#8FA8C8] leading-[1.75] mb-4 max-w-[600px]">
              {para}
            </p>
          ))}

        {!isCustomLayout && subheadline && (
          <p className="font-sans text-[17px] text-[#8FA8C8] leading-[1.75] mb-4 max-w-[600px]">
            {subheadline}
          </p>
        )}
      </div>

      {/* Form — full width, uses its own internal layout */}
      <Form
        slug={slug}
        variant="contact"
        ctaHeadline="Schedule Your 30-Minute Lead Mapping Session"
        ctaButtonText="Request Free Consultation"
      />

    </section>
  );
}
