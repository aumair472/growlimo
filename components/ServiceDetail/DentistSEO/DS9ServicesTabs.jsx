import { useState } from 'react';

export default function DS9ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const servicesTabs = [
    {
      id: 'audit',
      label: 'Technical Audit',
      heading: '1. Dental Technical SEO Audit & Website Optimization',
      paragraphs: [
        'Before content or link building can work, your website needs to be fully crawlable, properly indexed, fast-loading on mobile, and structured to concentrate ranking authority on the pages that matter most.',
        'Our audit covers Google Search Console analysis for crawl errors and coverage issues; Core Web Vitals assessment against Google\'s thresholds, since 70%+ of California dental search traffic is mobile; site architecture review to catch content cannibalization, orphan pages, and PageRank flow inefficiencies; duplicate content identification across location and treatment pages, a pervasive issue in California DSO sites; a dental schema markup audit (Dentist, MedicalClinic, MedicalProcedure, AggregateRating); and HTTPS verification, a critical trust signal for YMYL healthcare sites.'
      ]
    },
    {
      id: 'keywords',
      label: 'Keyword Mapping',
      heading: '2. Dental Keyword Research & Patient Search Intent Mapping',
      paragraphs: [
        'Effective dental SEO starts with understanding exactly how California patients search across their journey.',
        'We map intent across five categories: high-intent local provider searches ("dentist near me," "emergency dentist Los Angeles") requiring local SEO and GBP dominance; treatment research searches ("dental implants cost California," "Invisalign cost San Diego") requiring clinically deep treatment pages with pricing transparency; symptom and concern searches ("tooth pain won\'t go away") that build authority and nurture early-journey patients; insurance and logistics searches ("dentist that accepts Medi-Cal Los Angeles") that almost every California practice ignores despite exceptional conversion rates; and cosmetic dentistry consideration searches ("best cosmetic dentist Beverly Hills") requiring aspirational content with strong visual proof.'
      ]
    },
    {
      id: 'ymyl',
      label: 'YMYL Treatment Content',
      heading: '3. YMYL-Compliant Dental Treatment Page Content',
      paragraphs: [
        'Treatment pages are the highest-value SEO asset on any dental website, and the pages agencies without genuine dental expertise most consistently get wrong. A 400-word generic treatment page won\'t rank against a competitor\'s 1,800-word, clinically accurate, dentist-attributed page that answers every question a patient actually has — Google\'s quality raters can tell the difference, and so can patients.',
        'We produce content across restorative dentistry (implants, All-on-4, bridges, crowns, dentures), cosmetic dentistry (veneers, whitening, smile makeovers) with before/after gallery integration, orthodontics (Invisalign, braces) with cost transparency, general and preventive care optimized for "dentist near me" searches, pediatric dentistry with family-oriented local SEO, emergency dentistry for high-urgency symptom searches, and periodontal and specialty services — every page under an appropriate practitioner byline.',
        'Every treatment page carries explicit E-E-A-T signals: the treating dentist\'s name, credentials, years of experience, and dental school attribution appear on the procedure page itself, not just an About page tucked away elsewhere. It\'s the single most powerful YMYL trust signal a California dental practice can implement.'
      ]
    },
    {
      id: 'local',
      label: 'Local Map Pack',
      heading: '4. Dental Local SEO & Google Local Map Pack Domination',
      paragraphs: [
        'For California dentists, the Local Map Pack generates more new patient bookings than all organic blue-link results combined — winning it is the single highest-leverage SEO action available to most practices.',
        'That means complete Google Business Profile optimization (verified NAP, correct primary category, full service listing, photo library, weekly posts), consistent citations across Healthgrades, Zocdoc, Yelp, 1-800-Dentist, WebMD Dentist Finder, Vitals, RateMDs, and California state directories, systematic HIPAA-aware review generation since volume and recency directly drive Map Pack ranking, and individually optimized location pages for multi-location practices with genuinely unique neighborhood content.'
      ]
    },
    {
      id: 'schema',
      label: 'Dental Schema',
      heading: '5. Dental Schema Markup & Structured Data',
      paragraphs: [
        'Schema markup lets your practice communicate explicitly with Google — practice type, treatments offered, location, dentist credentials, and patient sentiment.',
        'We implement Dentist schema identifying your practice and specialty; Physician schema linking dentists to their DMD/DDS credentials and dental school; MedicalProcedure schema for high-value treatment pages; FAQPage schema for patient question content; AggregateRating where review data is verified; LocalBusiness with areaServed for multi-location practices; and BreadcrumbList for navigation and SERP snippet quality.'
      ]
    },
    {
      id: 'content',
      label: 'Patient Education Hub',
      heading: '6. Dental Content Marketing & Patient Education Hub',
      paragraphs: [
        'Beyond treatment pages, a content program builds the topical authority Google uses as a proxy for genuine expertise — a practice answering 50 patient questions in depth will consistently outrank one with 10 thin service pages.',
        'We build a content calendar covering seasonal topics, treatment comparison guides ("dental implants vs. dentures"), procedure preparation and recovery content, dental insurance and affordability guides, pediatric dental education, and emergency guidance — every piece under a licensed dentist\'s byline, reviewed for clinical accuracy, and published with explicit E-E-A-T credentials.'
      ]
    },
    {
      id: 'links',
      label: 'Dental Link Building',
      heading: '7. Dental Link Building & Off-Page Authority',
      paragraphs: [
        'Backlinks from authoritative dental and healthcare sources are critical in California\'s competitive markets, where established practices have been accumulating dental authority links for years.',
        'We build through California Dental Association and American Dental Association directory listings, local news coverage of practice achievements and community dental initiatives, dental school alumni and faculty pages, community health organization resource pages, healthcare publication guest articles under dentist bylines, and insurance company provider directories with proper NAP consistency.'
      ]
    },
    {
      id: 'reputation',
      label: 'Reputation & Reviews',
      heading: '8. Dental Reputation Management & Review Generation',
      paragraphs: [
        'Over 85% of California patients read online reviews before choosing a dentist, and practices with 4.7-star ratings and 100+ reviews convert website visitors to bookings at nearly double the rate of lower-rated practices with fewer reviews — reviews also directly affect Map Pack ranking.',
        'We build systematic, HIPAA-aware review generation across Google Business Profile, Healthgrades, Yelp, Zocdoc, and 1-800-Dentist/WebMD Dentist Finder, using only opt-in communication channels and never referencing specific treatment information.'
      ]
    },
    {
      id: 'dso',
      label: 'Multi-Location / DSO',
      heading: '9. Multi-Location Dental SEO & DSO Architecture',
      paragraphs: [
        'California\'s DSO market is one of the fastest-growing in the country, and the most damaging mistake DSOs make is near-identical content across location pages with only the city name changed — a pattern Google recognizes and devalues.',
        'We build genuinely distinct location pages with local landmarks and community context, individual GBP management per location, individual citation profiles with perfect NAP consistency, location-specific review generation, and a consolidated reporting dashboard tracking rankings and inquiries across every California location.'
      ]
    }
  ];

  return (
    <section className="bg-[#080D18] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-12">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            CLINICAL DENTAL CAPABILITIES
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Our Dentist SEO Services for California Practices
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            A comprehensive suite of dentist SEO services addressing technical site health, local visibility, YMYL-compliant content, and review generation across California's competitive dental market.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[rgba(255,255,255,0.08)] pb-4">
          {servicesTabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer px-4 py-2.5 rounded-xl font-sora font-semibold text-[13px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C68A] ${
                  isActive
                    ? 'bg-[#00C68A] text-[#080D18] shadow-[0_4px_16px_rgba(0,198,138,0.3)] font-bold'
                    : 'bg-[#162035] text-[#8FA8C8] hover:text-[#F0F4FF] border border-[rgba(255,255,255,0.06)]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="bg-[#162035] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-8 md:p-10 text-left transition-all duration-300">
          <h3 className="text-[22px] md:text-[28px] font-extrabold font-sora text-[#F0F4FF] leading-snug mb-4">
            {servicesTabs[activeTab].heading}
          </h3>

          <div className="space-y-4 font-sans text-[15px] leading-[1.8] text-[#8FA8C8]">
            {servicesTabs[activeTab].paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
