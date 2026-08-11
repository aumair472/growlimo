import SEO from '../SEO';
import PPCPageHero from './PPC/PPCPageHero';
import PPCWhyDemandsAgency from './PPC/PPCWhyDemandsAgency';
import PPC8MistakesAccordion from './PPC/PPC8MistakesAccordion';
import PPC8ServicesTabs from './PPC/PPC8ServicesTabs';
import PPCCaseStudies from './PPC/PPCCaseStudies';
import PPCIndustriesGrid from './PPC/PPCIndustriesGrid';
import PPCRegionalMarkets from './PPC/PPCRegionalMarkets';
import PPCTeamCredibility from './PPC/PPCTeamCredibility';
import PPCProcessTimeline from './PPC/PPCProcessTimeline';
import PPCTestimonials from './PPC/PPCTestimonials';
import PPCFAQAccordion from './PPC/PPCFAQAccordion';
import PPCFinalCTA from './PPC/PPCFinalCTA';

export default function ServiceContentSectionPPCCA({ service, slug }) {
  if (!service) return null;

  const {
    metaTitle = 'PPC Services California | Top PPC Company | GrowLimo',
    metaDescription = 'PPC Services California - Looking for the best PPC service agency in California? GrowLimo is a trusted PPC company and PPC agency delivering 5.8x avg ROAS. Free audit today.',
    h1 = 'PPC Services in California',
    subheadline = "Pay-per-click advertising in California cuts both ways. Done right, it's the fastest lever a business has for scalable, immediate lead generation. Done wrong, it's the fastest way to burn through a marketing budget with nothing to show for it. GrowLimo is the PPC company California businesses turn to when they'd rather have the first outcome — a Google Partner-certified PPC agency in California that has managed over $1.2 million in state ad spend and delivered an average 5.8x ROAS across home services, healthcare, legal, e-commerce, and B2B. If you're comparing PPC services in California and trying to find the best PPC service agency for your budget and market, start with what's actually happening inside your account, not what an agency's pitch deck promises.",
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
      <PPCPageHero h1={h1} subheadline={subheadline} slug={slug} />

      {/* Section 2: Why PPC Demands an Expert Agency */}
      <PPCWhyDemandsAgency />

      {/* Section 3: 8 PPC Mistakes Accordion */}
      <PPC8MistakesAccordion />

      {/* Section 4: 8 Services Tabbed Interface */}
      <PPC8ServicesTabs />

      {/* Section 5: 3 Case Studies */}
      <PPCCaseStudies />

      {/* Section 6: Industries Grid */}
      <PPCIndustriesGrid />

      {/* Section 7: 7 Regional California Markets */}
      <PPCRegionalMarkets />

      {/* Section 8: Team Credibility & E-E-A-T */}
      <PPCTeamCredibility />

      {/* Section 9: 5-Phase Process Timeline */}
      <PPCProcessTimeline />

      {/* Section 10: 3 Client Testimonials */}
      <PPCTestimonials />

      {/* Section 11: 7 FAQ Accordion */}
      <PPCFAQAccordion />

      {/* Section 12: Final CTA Banner */}
      <PPCFinalCTA />
    </div>
  );
}