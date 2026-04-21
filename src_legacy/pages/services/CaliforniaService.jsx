import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import StructuredData from '../../components/seo/StructuredData';
import {
  createBreadcrumbSchema,
  createFAQSchema,
  createServiceSchema,
} from '../../utils/schema';

// Import extracted components
import ServiceHero from '../../components/service/ServiceHero';
import ServiceContentSection from '../../components/service/ServiceContentSection';
import ServiceProcessSection from '../../components/service/ServiceProcessSection';
import ServiceLocalSection from '../../components/service/ServiceLocalSection';
import ServiceIndustriesSection from '../../components/service/ServiceIndustriesSection';
import ServiceInvestSection from '../../components/service/ServiceInvestSection';
import ServiceCTASection from '../../components/service/ServiceCTASection';
import ServiceFAQSection from '../../components/service/ServiceFAQSection';
import ServiceInternalLinks from '../../components/service/ServiceInternalLinks';

function getCaliforniaServiceLoader(slug) {
  if (slug.startsWith('dentist-')) {
    return () => import('../../data/services/states/california/dentist.js');
  }

  if (slug.startsWith('healthcare-')) {
    return () => import('../../data/services/states/california/healthcare.js');
  }

  return () => import('../../data/services/states/california/general.js');
}

const CaliforniaService = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  const [service, setService] = useState();

  useEffect(() => {
    let isMounted = true;

    getCaliforniaServiceLoader(slug)()
      .then((module) => {
        if (isMounted) {
          setService(module.default?.[slug] || null);
        }
      })
      .catch((error) => {
        console.error(`Failed to load California service data for ${slug}:`, error);
        if (isMounted) {
          setService(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (service === undefined) {
    return <div className="min-h-screen bg-dark" />;
  }

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const {
    metaTitle,
    metaDescription,
    h1,
    subheadline,
    contentSections,
    whyChooseUs,
    servicesBreakdown,
    process,
    benefits,
    industries,
    faqs,
    internalLinks,
    additionalContent,

    // Custom layout properties
    heroContent,
    processSection,
    localSeoSection,
    industriesSection,
    investSection,
    ctaSection,
  } = service;

  const isCustomLayout = !!contentSections;
  const canonicalUrl = `https://growlimo.com/${slug}/`;
  const stateName = 'California';
  const schemaGraph = [
    createServiceSchema({
      name: h1,
      description: metaDescription,
      url: canonicalUrl,
      areaServed: stateName,
      serviceType: metaTitle,
    }),
    createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: stateName, url: canonicalUrl },
    ]),
  ];

  if (Array.isArray(faqs) && faqs.length) {
    schemaGraph.push(createFAQSchema(faqs));
  }

  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-primary/30 selection:text-white flex flex-col">
      <SEO
        title={metaTitle}
        description={metaDescription}
        url={canonicalUrl}
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': schemaGraph,
        }}
      />
      <div className="flex-grow">
        <ServiceHero
          h1={service.h1}
          subheadline={subheadline}
          heroContent={heroContent}
          isCustomLayout={isCustomLayout}
          slug={slug}
        />

        {isCustomLayout ? (
          <>
            {contentSections &&
              contentSections.map((section, index) => (
                <ServiceContentSection
                  key={index}
                  section={section}
                  sectionIndex={index}
                />
              ))}
            <ServiceProcessSection processSection={processSection} />
            <ServiceLocalSection localSeoSection={localSeoSection} />
            <ServiceIndustriesSection industriesSection={industriesSection} />
            <ServiceInvestSection investSection={investSection} />
            <ServiceCTASection
              ctaSection={ctaSection}
              ctaButtonText={ctaButtonText}
            />
            <ServiceFAQSection faqs={faqs} />
            <ServiceInternalLinks internalLinks={internalLinks} />
          </>
        ) : (
          <>
            <section className="bg-slate-900/50 py-16 md:py-24">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                  Why Choose Us
                </h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                  Here&apos;s what sets Growlimo apart from other agencies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {whyChooseUs?.map((item, index) => (
                    <div
                      key={index}
                      className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 mx-auto">
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
                        {item.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed flex-grow">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="bg-dark py-16 md:py-24">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                  Our Services
                </h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                  A comprehensive breakdown of what we deliver.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {servicesBreakdown?.map((item, index) => (
                    <div
                      key={index}
                      className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-5">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-sm flex-grow">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <ServiceProcessSection processSection={process} />
            <ServiceInvestSection investSection={benefits} />
            <ServiceIndustriesSection industriesSection={industries} />
            {additionalContent &&
              additionalContent.map((section, index) => (
                <ServiceContentSection
                  key={index}
                  section={section}
                  sectionIndex={index}
                />
              ))}
            <ServiceFAQSection faqs={faqs} />
            <ServiceInternalLinks internalLinks={internalLinks} />
          </>
        )}
      </div>
    </div>
  );
};

export default CaliforniaService;
