import { useState } from 'react';

export default function HS8ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const servicesTabs = [
    {
      id: 'audit',
      label: 'Technical Audit',
      heading: '1. Healthcare Technical SEO Audit & Website Optimization',
      paragraphs: [
        'Before content or link building gets layered on top, your site needs a technically sound foundation Google\'s crawlers can access and render efficiently. Most practice websites we audit have critical technical problems quietly suppressing rankings, often built by designers who understand aesthetics but not technical SEO.',
        'Our audit covers full crawl analysis for indexation errors, redirect chains, and orphan pages; Core Web Vitals assessment; mobile-first rendering verification, since 70%+ of California patient healthcare searches happen on mobile; structured data implementation (MedicalBusiness, Physician, MedicalClinic, FAQPage) that enables rich results; HTTPS verification; internal link architecture; and duplicate content identification across location, service, and blog pages.'
      ]
    },
    {
      id: 'intent',
      label: 'Patient Intent Mapping',
      heading: '2. Healthcare Keyword Research & Patient Intent Mapping',
      paragraphs: [
        'Patient search behavior follows patterns generic keyword research misses entirely — symptom searches, condition-to-specialist queries, location-specific provider searches, and insurance-related searches.',
        'We map California patient intent across four categories: symptom-to-specialist queries ("back pain that won\'t go away Los Angeles") that build top-of-funnel authority; condition treatment searches ("knee replacement surgery Sacramento," "Invisalign cost Orange County") that convert to bookings at strong rates; direct provider searches ("best cardiologist Los Angeles," "urgent care open Sunday Sacramento") requiring strong local SEO; and insurance/logistics searches ("dentist that accepts Medi-Cal Los Angeles") that most California practices completely ignore.'
      ]
    },
    {
      id: 'content',
      label: 'YMYL Content Strategy',
      heading: '3. YMYL-Compliant Healthcare Content Strategy & Production',
      paragraphs: [
        'Content is the core of healthcare SEO, and the quality bar is higher than almost any other industry. Thin, generic, unattributed medical content doesn\'t rank in Google\'s YMYL category in 2026 — it actively signals the low-quality patterns Google trains its raters to catch.',
        'We produce service and procedure pages with clinical accuracy and clear booking CTAs under practitioner credentials; condition and symptom pages that answer what patients are actually searching before they book; location-specific service pages built with real local relevance instead of thin doorway templates; a medical blog and resource hub with credentialed author bios; and physician bio pages with full credential display — the single most powerful E-E-A-T signal a California practice can build.'
      ]
    },
    {
      id: 'local',
      label: 'Local Medical SEO',
      heading: '4. Local SEO for California Healthcare Practices',
      paragraphs: [
        'Most California healthcare searches carry local intent, and winning Google\'s Local Map Pack for terms like "dentist near me" or "urgent care Los Angeles" can generate more inquiries in a month than all your blog content combined.',
        'That means full Google Business Profile optimization — NAP accuracy, category selection, individual service listings, photos, booking links, insurance info, and weekly posting; consistent citations across Healthgrades, Zocdoc, WebMD, Vitals, RateMDs, US News Health, Yelp, and California-specific medical directories; a HIPAA-aware patient review generation workflow, the single most impactful local ranking factor after GBP itself; and local link building from California medical associations, health news coverage, and community health organizations.'
      ]
    },
    {
      id: 'schema',
      label: 'Medical Schema Markup',
      heading: '5. Healthcare Schema Markup & Structured Data',
      paragraphs: [
        'Schema markup tells Google exactly what your practice is, what you offer, and who your practitioners are, enabling rich results that lift click-through rates.',
        'We implement MedicalClinic markup for practice type and services; Physician markup linking practitioners to credentials, specialties, and hospital affiliations; MedicalProcedure markup for treatment pages; FAQPage for patient question content; LocalBusiness with areaServed at the city and neighborhood level; AggregateRating where review data is verified; and BreadcrumbList for site structure signals.'
      ]
    },
    {
      id: 'links',
      label: 'Medical Link Building',
      heading: '6. Healthcare Link Building & Off-Page Authority',
      paragraphs: [
        'In Google\'s YMYL category, backlinks from authoritative medical sources aren\'t just useful — they\'re necessary. A California practice without a strong off-page profile can\'t overcome the authority advantage of competitors who\'ve been accumulating healthcare-relevant links for years.',
        'We build links through medical and dental association directories, California state health organization mentions, healthcare publication guest articles under practitioner bylines, local news coverage of practice achievements, hospital network partner pages, insurance company provider directories, and university medical school alumni and faculty pages.'
      ]
    },
    {
      id: 'reputation',
      label: 'Reputation Management',
      heading: '7. Reputation Management for California Healthcare Practices',
      paragraphs: [
        'Reviews are simultaneously a Google local ranking factor and the primary trust signal California patients use to choose a provider — a 4.8-star practice with 200+ reviews will outperform a 3.9-star practice with 12, in both rankings and conversion.',
        'We build sustainable review generation across Google Business Profile, Healthgrades, Zocdoc, Yelp, RateMDs, and Vitals — all HIPAA-aware, never referencing specific patient health information in outreach, and running exclusively through opt-in communication channels.'
      ]
    },
    {
      id: 'multi-location',
      label: 'Multi-Location SEO',
      heading: '8. Multi-Location Healthcare SEO for California Practice Groups',
      paragraphs: [
        'California\'s largest healthcare groups operate across dozens of locations spanning multiple counties, and multi-location SEO needs a fundamentally different architecture than single-practice optimization — every location requires its own genuinely differentiated landing page, Google Business Profile, citation profile, and review presence, while the corporate domain has to pass authority down to location pages without cannibalizing them.',
        'We build location page templates that are actually differentiated, individual GBP management per location, consolidated cross-location reporting, and centralized content strategy with real city-level customization.'
      ]
    }
  ];

  return (
    <section className="bg-[#0C1220] py-[80px] md:py-[100px] relative z-10 border-b border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-4 md:px-10 max-w-[1200px]">

        <div className="text-left max-w-[860px] mb-12">
          <span className="text-[#00C68A] text-[11px] md:text-[12px] font-bold uppercase tracking-[2.5px] mb-3 block font-sans">
            CLINICAL CAPABILITIES
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold font-sora leading-tight text-[#F0F4FF] tracking-tight mb-4">
            Our Healthcare SEO Services for California Medical Practices
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8FA8C8]">
            A complete, integrated healthcare SEO system, engineered for California's YMYL search environment and the actual patient acquisition goals of your practice.
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
