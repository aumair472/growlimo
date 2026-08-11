import SEO from '../SEO';
import HSPageHero from './HealthcareSEO/HSPageHero';
import HSWhySpecialistProse from './HealthcareSEO/HSWhySpecialistProse';
import HSYMYLEEATGrid from './HealthcareSEO/HSYMYLEEATGrid';
import HS8ServicesTabs from './HealthcareSEO/HS8ServicesTabs';
import HSCaseStudies from './HealthcareSEO/HSCaseStudies';
import HSCompanyEvaluationChecklist from './HealthcareSEO/HSCompanyEvaluationChecklist';
import HSSpecialtyPlaybooksGrid from './HealthcareSEO/HSSpecialtyPlaybooksGrid';
import HSRegionalMarkets from './HealthcareSEO/HSRegionalMarkets';
import HSTeamCredibility from './HealthcareSEO/HSTeamCredibility';
import HSTestimonials from './HealthcareSEO/HSTestimonials';
import HSProcessTimeline from './HealthcareSEO/HSProcessTimeline';
import HSFAQAccordion from './HealthcareSEO/HSFAQAccordion';
import HSFinalCTA from './HealthcareSEO/HSFinalCTA';

export default function ServiceContentSectionHSCA({ service, slug }) {
  if (!service) return null;

  const {
    metaTitle = 'Healthcare SEO Services & Companies California | GrowLimo',
    metaDescription = 'Healthcare SEO Services California - Looking for healthcare SEO services in California? GrowLimo is a specialist healthcare SEO company delivering 287% avg patient inquiry growth. Free audit.',
    h1 = 'Healthcare SEO Services in California',
    subheadline = "Healthcare practices in California face a search environment most SEO companies aren't built to handle. Google classifies medical content under its strictest quality standard — YMYL, Your Money Your Life — applying heightened scrutiny to every healthcare website chasing top rankings. A patient searching for a dentist in San Diego, a chiropractor in Los Angeles, or an urgent care center in Sacramento is making a decision that affects their health, and Google treats that responsibility seriously. GrowLimo provides healthcare SEO services in California built around that reality — not a generic SEO template with \"medical\" swapped into the copy. Our healthcare SEO clients average a 287% increase in organic patient inquiries within six months.",
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
      <HSPageHero h1={h1} subheadline={subheadline} slug={slug} />

      {/* Section 2: Why Healthcare SEO Requires a Specialist Prose */}
      <HSWhySpecialistProse />

      {/* Section 3: YMYL & E-E-A-T 4-Pillar Grid */}
      <HSYMYLEEATGrid />

      {/* Section 4: 8 Healthcare SEO Services Tabs */}
      <HS8ServicesTabs />

      {/* Section 5: 3 Clinical Case Studies */}
      <HSCaseStudies />

      {/* Section 6: Buyer Evaluation Checklist */}
      <HSCompanyEvaluationChecklist />

      {/* Section 7: 10 Specialty Playbooks Grid */}
      <HSSpecialtyPlaybooksGrid />

      {/* Section 8: 6 California Regional Markets */}
      <HSRegionalMarkets />

      {/* Section 9: Specialist Team Credibility */}
      <HSTeamCredibility />

      {/* Section 10: 3 Practice Testimonials */}
      <HSTestimonials />

      {/* Section 11: 6-Phase Process Timeline */}
      <HSProcessTimeline />

      {/* Section 12: 7 FAQ Accordion */}
      <HSFAQAccordion />

      {/* Section 13: Final CTA Banner */}
      <HSFinalCTA />
    </div>
  );
}
