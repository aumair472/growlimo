import SEO from '../SEO';
import DMPageHero from './DigitalMarketing/DMPageHero';
import DMWhatIsAgency from './DigitalMarketing/DMWhatIsAgency';
import DMMarketRealityProse from './DigitalMarketing/DMMarketRealityProse';
import DMWhyGrowLimoGrid from './DigitalMarketing/DMWhyGrowLimoGrid';
import DMCoreSolutionsGrid from './DigitalMarketing/DMCoreSolutionsGrid';
import DMCaseStudies from './DigitalMarketing/DMCaseStudies';
import DMTestimonials from './DigitalMarketing/DMTestimonials';
import DMCertificationsBlock from './DigitalMarketing/DMCertificationsBlock';
import DMIndustriesGrid from './DigitalMarketing/DMIndustriesGrid';
import DMMethodologyList from './DigitalMarketing/DMMethodologyList';
import DMRegionalMarkets from './DigitalMarketing/DMRegionalMarkets';
import DMFAQAccordion from './DigitalMarketing/DMFAQAccordion';
import DMFinalCTA from './DigitalMarketing/DMFinalCTA';

export default function ServiceContentSectionDMCA({ service, slug }) {
  if (!service) return null;

  const {
    metaTitle = 'Digital Marketing Agency & Services California | GrowLimo',
    metaDescription = 'Digital Marketing Agency California - GrowLimo is a full-service digital marketing agency delivering SEO, PPC, content, email & social digital marketing services in California. Free audit.',
    h1 = 'Digital Marketing Agency in California',
    subheadline = "GrowLimo is a full-service digital marketing agency delivering digital marketing services to California businesses that are done paying for marketing that doesn't convert. As a California digital marketing agency, we combine SEO, Google Ads, content, email, and social media into one revenue-tracked system — not a bundle of disconnected tactics or vanity-metric reports.",
    schema
  } = service;

  return (
    <div className="bg-[#080D18] font-sans selection:bg-[#00C68A]/30 selection:text-white overflow-x-hidden text-[#8FA8C8]">
      <SEO
        title={metaTitle}
        description={metaDescription}
        url={`https://growlimo.com/${slug}/`}
        disableSuffix={true}
        schema={schema}
      />

      {/* Section 1: Hero */}
      <DMPageHero h1={h1} subheadline={subheadline} slug={slug} />

      {/* Section 2: What is a Digital Marketing Agency + 6 Hub Cards */}
      <DMWhatIsAgency />

      {/* Section 3: Market Reality Prose */}
      <DMMarketRealityProse />

      {/* Section 4: Why GrowLimo 6-Item Grid */}
      <DMWhyGrowLimoGrid />

      {/* Section 5: Core 6 Solutions Overview Cards */}
      <DMCoreSolutionsGrid />

      {/* Section 6: 3 Case Studies */}
      <DMCaseStudies />

      {/* Section 7: 3 Client Testimonials */}
      <DMTestimonials />

      {/* Section 8: Certifications & E-E-A-T Block */}
      <DMCertificationsBlock />

      {/* Section 9: 8 Industries Grid */}
      <DMIndustriesGrid />

      {/* Section 10: 5 Principle Methodology Grid */}
      <DMMethodologyList />

      {/* Section 11: 8 Regional California City Cards */}
      <DMRegionalMarkets />

      {/* Section 12: 10 FAQ Accordion */}
      <DMFAQAccordion />

      {/* Section 13: Final CTA Banner */}
      <DMFinalCTA />
    </div>
  );
}
