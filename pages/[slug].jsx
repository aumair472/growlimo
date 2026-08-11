import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import SEO from '../components/SEO';
import ServiceHero from '../components/ServiceDetail/ServiceHero';
import ServiceWhyChooseUs from '../components/ServiceDetail/ServiceWhyChooseUs';
import ServiceBreakdown from '../components/ServiceDetail/ServiceBreakdown';
import ServiceContentSection from '../components/ServiceDetail/ServiceContentSection';
import ServiceProcessSection from '../components/ServiceDetail/ServiceProcessSection';
import ServiceLocalSection from '../components/ServiceDetail/ServiceLocalSection';
import ServiceIndustriesSection from '../components/ServiceDetail/ServiceIndustriesSection';
import ServiceInvestSection from '../components/ServiceDetail/ServiceInvestSection';
import ServiceCTASection from '../components/ServiceDetail/ServiceCTASection';
import ServiceFAQSection from '../components/ServiceDetail/ServiceFAQSection';
import ServiceInternalLinks from '../components/ServiceDetail/ServiceInternalLinks';
import ServiceContentSectionEnhanced from '../components/ServiceDetail/ServiceContentSectionEnhanced';
import ServiceContentSectionTX from '../components/ServiceDetail/ServiceContentSectionTX';
import ServiceContentSectionFBCA from '../components/ServiceDetail/ServiceContentSectionFBCA';
import ServiceContentSectionDDMC from '../components/ServiceDetail/ServiceContentSectionDDMC';
import ServiceContentSectionDDMATX from '../components/ServiceDetail/ServiceContentSectionDDMATX';
import ServiceContentSectionDSCA from '../components/ServiceDetail/ServiceContentSectionDSCA';
import ServiceContentSectionDMAC from '../components/ServiceDetail/ServiceContentSectionDMAC';
import ServiceContentSectionGAMC from '../components/ServiceDetail/ServiceContentSectionGAMC';
import ServiceContentSectionPPCCA from '../components/ServiceDetail/ServiceContentSectionPPCCA';
import ServiceContentSectionHDMCA from '../components/ServiceDetail/ServiceContentSectionHDMCA';
import ServiceContentSectionHSCA from '../components/ServiceDetail/ServiceContentSectionHSCA';
import ServiceContentSectionMACA from '../components/ServiceDetail/ServiceContentSectionMACA';
import ServiceContentSectionDMTX from '../components/ServiceDetail/ServiceContentSectionDMTX';
import ServiceContentSectionGAMT from '../components/ServiceDetail/ServiceContentSectionGAMT';
import ServiceContentSectionPPCTX from '../components/ServiceDetail/ServiceContentSectionPPCTX';
import ServiceContentSectionHSEOTX from '../components/ServiceDetail/ServiceContentSectionHSEOTX';
import ServiceContentSectionHDMATX from '../components/ServiceDetail/ServiceContentSectionHDMATX';
import ServiceContentSectionDSTX from '../components/ServiceDetail/ServiceContentSectionDSTX';
import ServiceContentSectionWDCA from '../components/ServiceDetail/ServiceContentSectionWDCA';
import ServiceContentSectionSSCA from '../components/ServiceDetail/ServiceContentSectionSSCA';
import ServiceContentSectionDMCA from '../components/ServiceDetail/ServiceContentSectionDMCA';
import FormModal from '../components/common/FormModal';



export default function ServiceDetail({ service, slug }) {
  if (!service) return null;

  if (slug === 'web-developer-california') {
    return <ServiceContentSectionWDCA service={service} slug={slug} />;
  }

  if (slug === 'seo-services-california') {
    return <ServiceContentSectionSSCA service={service} slug={slug} />;
  }

  if (slug === 'facebook-ads-management-california') {
    return <ServiceContentSectionFBCA service={service} slug={slug} />;
  }

  if (slug === 'google-ads-management-california') {
    return <ServiceContentSectionGAMC service={service} slug={slug} />;
  }

  if (slug === 'ppc-services-california') {
    return <ServiceContentSectionPPCCA service={service} slug={slug} />;
  }

  if (slug === 'healthcare-seo-services-california') {
    return <ServiceContentSectionHSCA service={service} slug={slug} />;
  }

  if (slug === 'meta-ads-agency-california') {
    return <ServiceContentSectionDMAC service={service} slug={slug} />;
  }

  if (slug === 'digital-marketing-agency-california') {
    return <ServiceContentSectionDMCA service={service} slug={slug} />;
  }

  if (slug === 'dentist-seo-services-california') {
    return <ServiceContentSectionDSCA service={service} slug={slug} />;
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  const hasPricing = !!service.pricing ||
    service.contentSections?.some(s =>
      s.heading?.includes('Pricing'));

  if (slug === 'seo-services-texas') {
    return (
      <>
        <ServiceContentSectionTX
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'facebook-ads-management-california') {
    return (
      <>
        <ServiceContentSectionFBCA
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'dentist-digital-marketing-agency-california') {
    return (
      <>
        <ServiceContentSectionDDMC
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'dentist-digital-marketing-agency-texas') {
    return (
      <>
        <ServiceContentSectionDDMATX
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'dentist-seo-services-california') {
    return (
      <>
        <ServiceContentSectionDSCA
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'dentist-seo-services-texas') {
    return (
      <>
        <ServiceContentSectionDSTX
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'digital-marketing-agency-california') {
    return (
      <>
        <ServiceContentSectionDMAC
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'google-ads-management-california') {
    return (
      <>
        <ServiceContentSectionGAMC
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'healthcare-digital-marketing-agency-california') {
    return (
      <>
        <ServiceContentSectionHDMCA
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'healthcare-digital-marketing-agency-texas') {
    return (
      <>
        <ServiceContentSectionHDMATX
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'healthcare-seo-services-california') {
    return (
      <>
        <ServiceContentSectionHSCA
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'healthcare-seo-services-texas') {
    return (
      <>
        <ServiceContentSectionHSEOTX
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'meta-ads-agency-california') {
    return (
      <>
        <ServiceContentSectionMACA
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'ppc-services-california') {
    return (
      <>
        <ServiceContentSectionPPCCA
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'ppc-services-texas') {
    return (
      <>
        <ServiceContentSectionPPCTX
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'digital-marketing-agency-texas') {
    return (
      <>
        <ServiceContentSectionDMTX
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
  }

  if (slug === 'google-ads-management-texas') {
    return (
      <>
        <ServiceContentSectionGAMT
          service={service}
          slug={slug}
          onSelectPlan={handleSelectPlan}
        />
        {hasPricing && (
          <FormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            planName={selectedPlan}
            slug={slug}
          />
        )}
      </>
    );
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
    benefits = [],
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
    ctaButtonText,
    ctaHeadline
  } = service;

  const isCustomLayout = !!contentSections;
  const areaServedName = service.areaServed?.name || '';

  return (
    <div className="bg-[#080D18] font-sans selection:bg-[#00C68A]/30 selection:text-white overflow-x-hidden">
      <SEO
        title={metaTitle}
        description={metaDescription}
        url={`https://growlimo.com/${slug}/`}
        disableSuffix={true}
        schema={service.schema}
      />

      <div>
        <ServiceHero
          h1={h1}
          subheadline={subheadline}
          heroContent={heroContent}
          isCustomLayout={isCustomLayout}
          slug={slug}
          benefits={benefits}
          areaServedName={areaServedName}
          ctaButtonText={ctaButtonText}
        />

        {isCustomLayout ? (
          <>
            {/* Custom Layout Sequence */}
            {contentSections &&
              contentSections.map((section, index) => (
                <ServiceContentSection
                  key={index}
                  section={section}
                  sectionIndex={index}
                  images={service.images}
                  contentSections={service.contentSections}
                  slug={slug}
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
            {/* Standard Fallback Layout Sequence */}
            <ServiceWhyChooseUs whyChooseUs={whyChooseUs} />
            <ServiceBreakdown servicesBreakdown={servicesBreakdown} />
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

            {/* Standard CTA Section addition */}
            {(ctaHeadline || ctaButtonText) && (
              <ServiceCTASection
                ctaSection={{ heading: ctaHeadline }}
                ctaButtonText={ctaButtonText}
              />
            )}

            <ServiceFAQSection faqs={faqs} />
            <ServiceInternalLinks internalLinks={internalLinks} />
          </>
        )}
      </div>
      {hasPricing && (
        <FormModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          planName={selectedPlan}
          slug={slug}
        />
      )}
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
