import SEO from '../SEO';
import DSPageHero from './DentistSEO/DSPageHero';
import DS3ProblemsCards from './DentistSEO/DS3ProblemsCards';
import DS9ServicesTabs from './DentistSEO/DS9ServicesTabs';
import DSCaseStudies from './DentistSEO/DSCaseStudies';
import DSCompanyEvaluationChecklist from './DentistSEO/DSCompanyEvaluationChecklist';
import DSSpecialtyPlaybooksGrid from './DentistSEO/DSSpecialtyPlaybooksGrid';
import DSPricingCards from './DentistSEO/DSPricingCards';
import DSProcessTimeline from './DentistSEO/DSProcessTimeline';
import DSTeamCredibility from './DentistSEO/DSTeamCredibility';
import DSTestimonials from './DentistSEO/DSTestimonials';
import DSFAQAccordion from './DentistSEO/DSFAQAccordion';
import DSFinalCTA from './DentistSEO/DSFinalCTA';

export default function ServiceContentSectionDSCA({ service, slug }) {
  if (!service) return null;

  const {
    metaTitle = 'Dentist SEO Services California | Dental SEO Company',
    metaDescription = 'Dentist SEO Services California - GrowLimo is a dental SEO company offering dentist SEO services in California. Trusted dentist SEO expert team, 312% avg patient growth. Free audit today.',
    h1 = 'Dentist SEO Services in California',
    subheadline = "There are over 30,000 licensed dentists in California, and when a patient searches \"dentist near me,\" \"dental implants cost San Diego,\" or \"emergency dentist open Saturday,\" only three practices appear in Google's Local Map Pack. The practice holding those three spots gets the overwhelming majority of calls, clicks, and bookings from that search. Every other practice on the page gets what's left. GrowLimo provides dentist SEO services in California built around that math — a dental SEO company and dentist SEO expert team that combines technical website optimization, YMYL-compliant treatment content, Map Pack dominance strategy, and systematic review generation. Our dental SEO clients average a 312% increase in new patient inquiries from organic search within six months.",
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
      <DSPageHero h1={h1} subheadline={subheadline} slug={slug} />

      {/* Section 2: Why Dental SEO Requires an Expert (3 Problem Cards) */}
      <DS3ProblemsCards />

      {/* Section 3: 9 Dental Services Tabs */}
      <DS9ServicesTabs />

      {/* Section 4: 3 Case Studies */}
      <DSCaseStudies />

      {/* Section 5: Buyer Evaluation Checklist Callout */}
      <DSCompanyEvaluationChecklist />

      {/* Section 6: 5 Dental Specialty Playbooks Grid */}
      <DSSpecialtyPlaybooksGrid />

      {/* Section 7: 3 Pricing Cards */}
      <DSPricingCards />

      {/* Section 8: 6-Phase Process Timeline */}
      <DSProcessTimeline />

      {/* Section 9: Team Credibility & E-E-A-T Block */}
      <DSTeamCredibility />

      {/* Section 10: 3 Named Testimonial Cards */}
      <DSTestimonials />

      {/* Section 11: 6 FAQ Accordion */}
      <DSFAQAccordion />

      {/* Section 12: Final CTA Banner */}
      <DSFinalCTA />
    </div>
  );
}
