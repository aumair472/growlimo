import Form from '../common/Form';

const ServiceHero = ({ h1, subheadline, heroContent, isCustomLayout, slug }) => {
  return (
    <section className="bg-dark text-white py-16 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-primary/3 rounded-full blur-3xl"></div>
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
};
export default ServiceHero;
