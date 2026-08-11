import SEO from '../SEO';
import MetaPageHero from './MetaAds/MetaPageHero';
import MetaStateProse from './MetaAds/MetaStateProse';
import MetaVersusTable from './MetaAds/MetaVersusTable';
import Meta8ServicesTabs from './MetaAds/Meta8ServicesTabs';
import MetaCaseStudies from './MetaAds/MetaCaseStudies';
import MetaIndustriesGrid from './MetaAds/MetaIndustriesGrid';
import MetaRegionalMarkets from './MetaAds/MetaRegionalMarkets';
import MetaTeamCredibility from './MetaAds/MetaTeamCredibility';
import MetaTestimonials from './MetaAds/MetaTestimonials';
import MetaProcessTimeline from './MetaAds/MetaProcessTimeline';
import MetaFAQAccordion from './MetaAds/MetaFAQAccordion';
import MetaFinalCTA from './MetaAds/MetaFinalCTA';

export default function ServiceContentSectionDMAC({ service, slug }) {
  if (!service) return null;

  const {
    metaTitle = 'Meta Ads Agency California | Top Rated | GrowLimo',
    metaDescription = 'Meta Ads Agency California - Meta Blueprint certified Meta advertising agency delivering 5.4x avg ROAS. GrowLimo is a top rated Meta ads agency in California. Free audit today.',
    h1 = 'Meta Ads Agency in California',
    subheadline = "Most California businesses running Meta Ads are running campaigns. A top rated Meta ads agency builds systems, and the distinction is everything. A campaign gets switched on, delivers a few weeks of results, fatigues, and collapses. A system has cold prospecting audiences feeding warm retargeting pools, creative that gets refreshed before it ever has the chance to fatigue, Conversions API tracking every purchase and lead with server-side precision, and a landing page architecture built for the specific audience each ad targets. GrowLimo is a Meta Blueprint-certified Meta ads agency in California managing campaigns for e-commerce, healthcare, real estate, home services, fitness, automotive, education, and B2B businesses, averaging a 5.4x ROAS across every account we run.",
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
      <MetaPageHero h1={h1} subheadline={subheadline} slug={slug} />

      {/* Section 2: State of Meta Advertising in 2026 Prose */}
      <MetaStateProse />

      {/* Section 3: 2-Column Comparison Table (Most CA Agencies vs GrowLimo) */}
      <MetaVersusTable />

      {/* Section 4: 8 Meta Services Tabs */}
      <Meta8ServicesTabs />

      {/* Section 5: 3 Case Studies */}
      <MetaCaseStudies />

      {/* Section 6: 8 Industries Grid */}
      <MetaIndustriesGrid />

      {/* Section 7: 6 Regional California Markets */}
      <MetaRegionalMarkets />

      {/* Section 8: Team Credibility & E-E-A-T */}
      <MetaTeamCredibility />

      {/* Section 9: 3 Client Testimonials */}
      <MetaTestimonials />

      {/* Section 10: 6-Phase Process Timeline */}
      <MetaProcessTimeline />

      {/* Section 11: 7 FAQ Accordion */}
      <MetaFAQAccordion />

      {/* Section 12: Final CTA Banner */}
      <MetaFinalCTA />
    </div>
  );
}
