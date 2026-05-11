import Form from '../common/Form';

export default function ServiceHero({ h1, subheadline, heroContent, isCustomLayout, slug }) {
  return (
    <section className="bg-dark text-white py-16 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-primary/5 rounded-full blur-lg opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 md:w-56 md:h-56 bg-primary/3 rounded-full blur-lg opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-5 text-white leading-tight">
              {h1}
            </h1>
            {isCustomLayout && heroContent && heroContent.map((para, index) => (
              <p key={index} className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
                {para}
              </p>
            ))}
            {!isCustomLayout && subheadline && (
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                {subheadline}
              </p>
            )}
          </div>

          <div className="w-full">
            <Form
              slug={slug}
              ctaHeadline="Get Your Free Consultation"
              ctaButtonText="Request Free Consultation"
              compact={true}
              variant="service"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
