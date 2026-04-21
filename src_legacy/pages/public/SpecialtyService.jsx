import { useLocation, Navigate, Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import StructuredData from '../../components/seo/StructuredData';
import specialtyServices from '../../data/specialtyServices.json';
import RelatedLinks from '../../components/shared/RelatedLinks';

const SpecialtyService = () => {
  const location = useLocation();
  // Extract slug from path (e.g. "/dental-marketing" -> "dental-marketing")
  const slug = location.pathname.replace(/^\/+|\/+$/g, '');
  const service = specialtyServices[slug];

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const {
    title,
    metaTitle,
    metaDescription,
    h1,
    intro,
    sectionTitle,
    cards,
    ctaText,
  } = service;
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://growlimo.com';
  const canonicalUrl = `${siteUrl}/${slug}`;

  // Schema Structure
  const schemaData = service.schema
    ? service.schema
    : {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        description: metaDescription,
        provider: {
          '@type': 'ProfessionalService',
          name: 'GrowLimo',
          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
          telephone: '+1-724-750-6935',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '7917 Mountain Rd NE',
            addressLocality: 'Albuquerque',
            addressRegion: 'NM',
            postalCode: '87110',
            addressCountry: 'US',
          },
        },
        serviceType: title,
        areaServed: { '@type': 'Country', name: 'United States' },
        url: canonicalUrl,
      };

  // Check if user came from homepage
  const backLink = location.state?.from === 'home' ? '/' : '/services';
  const backText =
    location.state?.from === 'home' ? 'Back to Home' : 'Back to All Services';

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        keywords={
          service.keywords ||
          `${title.toLowerCase()}, healthcare marketing, HIPAA-compliant marketing, patient acquisition, medical practice growth, GrowLimo`
        }
        type="service"
      />
      <StructuredData data={schemaData} />

      {/* Hero Section */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to={backLink}
              className="inline-flex items-center text-primary hover:text-white mb-6 transition-colors font-medium"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {backText}
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {h1}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {intro}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-slate-900/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            {sectionTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-slate-300 leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Grow Your Practice?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-accent text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 text-xl shadow-lg shadow-primary/30"
            >
              {ctaText}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links to related services, case studies, and blog posts */}
      <RelatedLinks
        content={`${title} ${metaDescription} ${intro}`}
        type="service"
      />
    </>
  );
};

export default SpecialtyService;
