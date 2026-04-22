import fs from 'fs';
import path from 'path';
import SEO from '../components/SEO';
import ServiceHero from '../components/ServiceDetail/ServiceHero';
import ServiceContentSection from '../components/ServiceDetail/ServiceContentSection';
import ServiceProcessSection from '../components/ServiceDetail/ServiceProcessSection';
import ServiceLocalSection from '../components/ServiceDetail/ServiceLocalSection';
import ServiceIndustriesSection from '../components/ServiceDetail/ServiceIndustriesSection';
import ServiceInvestSection from '../components/ServiceDetail/ServiceInvestSection';
import ServiceCTASection from '../components/ServiceDetail/ServiceCTASection';
import ServiceFAQSection from '../components/ServiceDetail/ServiceFAQSection';
import ServiceInternalLinks from '../components/ServiceDetail/ServiceInternalLinks';

export default function ServiceDetail({ service, slug }) {
  if (!service) return null;

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
    heroContent,
    processSection,
    localSeoSection,
    industriesSection,
    investSection,
    ctaSection,
    ctaButtonText
  } = service;

  const isCustomLayout = !!contentSections;

  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-primary/30 selection:text-white flex flex-col">
      <SEO
        title={metaTitle}
        description={metaDescription}
        url={`https://growlimo.com/${slug}/`}
        schema={service.schema}
      />
      
      <div className="flex-grow">
        <ServiceHero
          h1={h1}
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
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
}

export async function getStaticPaths() {
  const servicesDir = path.join(process.cwd(), 'content/services');
  const filenames = fs.readdirSync(servicesDir);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace('.json', '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content/services', `${params.slug}.json`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const service = JSON.parse(fileContent);

  return {
    props: {
      service,
      slug: params.slug,
    },
  };
}
