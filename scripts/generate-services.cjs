const fs = require('fs');
const path = require('path');

const californiaGeneralPath = path.join(__dirname, '../src/data/services/states/california/general.js');
const texasGeneralPath = path.join(__dirname, '../src/data/services/states/texas/general.js');

let caliGen = fs.readFileSync(californiaGeneralPath, 'utf-8');

// Replace locations for Texas
let txGen = caliGen
  .replace(/california/g, 'texas')
  .replace(/California/g, 'Texas')
  .replace(/Los Angeles/g, 'Houston')
  .replace(/San Diego/g, 'Dallas')
  .replace(/San Francisco/g, 'Austin')
  .replace(/Sacramento/g, 'San Antonio')
  .replace(/San Jose/g, 'Fort Worth')
  .replace(/Fresno/g, 'El Paso')
  .replace(/ in texas/g, ' in Texas')
  .replace(/ In Texas/g, ' in Texas');

fs.writeFileSync(texasGeneralPath, txGen);
console.log('Successfully generated texas/general.js from california/general.js');

// Now let's completely rewrite Healthcare for California and Texas to perfectly match exactly the 6 services requested

const getHealthcareData = (state, State) => `const healthcareServices = {
  'healthcare-seo-services-${state}': {
    metaTitle: 'Healthcare SEO Services ${State} - Get Free Quote',
    metaDescription: 'Healthcare SEO Services ${State} - Grow patient inquiries, Google rankings & increase appointments with expert healthcare SEO services by a trusted agency.',
    h1: 'Healthcare SEO Services in ${State} - Dominate Local Patient Acquisition',
    subheadline: 'Stop relying on expensive third-party lead generators like ZocDoc. We engineer predictable, high-volume organic search visibility that turns your clinic into the definitive local authority in ${State}.',
    heroBullets: [
      '✅ HIPAA-Compliant SEO Strategies',
      '✅ High-Volume Treatment Optimization',
      '✅ Authoritative Medical Link Building',
    ],
    whyChooseUs: [
      {
        title: 'Specialized Healthcare Focus',
        description: 'We do not learn at your expense. We deeply understand YMYL (Your Money or Your Life) Google ranking algorithms specific to the medical field.',
      },
      {
        title: 'Procedure-Specific Targeting',
        description: 'We do not just rank you for "doctor near me". We secure page one positions for your highest-margin specific treatments and surgeries.',
      },
      {
        title: 'Reputation Integration',
        description: 'We synchronize your SEO strategy with aggressive review generation to dominate the Map Pack with 5-star authority.',
      },
    ],
    servicesBreakdown: [
      {
        title: 'E-A-T Content Engineering',
        description: 'Publishing medically accurate, highly authoritative service pages that signal extreme trust to Google’s algorithm.',
      },
      {
        title: 'Local Map Pack Dominance',
        description: 'Optimizing your Google Business Profile to capture the massive volume of hyper-local "near me" patient searches.',
      },
      {
        title: 'Technical Site Health',
        description: 'Ensuring lightning-fast load times and flawless mobile experiences—crucial ranking factors for medical queries.',
      },
      {
        title: 'High-Trust Backlink Acquisition',
        description: 'Securing citations and backlinks from established healthcare directories, local news outlets, and medical associations.',
      },
    ],
    process: [
      {
        title: 'High-Margin Keyword Discovery',
        description: 'Identifying the exact search terms patients use when they are ready to book specific procedures in your city.',
      },
      {
        title: 'Site Architecture Overhaul',
        description: 'Structuring your website so Google easily understands every condition you treat and service you provide.',
      },
      {
        title: 'Authoritative Content Deployment',
        description: 'Rolling out comprehensive condition and treatment pages designed to outrank legacy competitors.',
      },
      {
        title: 'Ongoing Authority Expansion',
        description: 'Continuous link building and local PR to establish an impenetrable competitive moat around your practice.',
      },
    ],
    benefits: [
      'Dramatically lower your Cost-Per-Patient Acquisition compared to Paid Ads.',
      'Build long-term equity in your digital footprint that outlasts any single marketing campaign.',
      'Capture highly educated patients conducting deep research before selecting a medical provider.',
    ],
    industries: 'Primary Care Clinics, Urgent Care Centers, Specialized Surgeons, and Multi-Location Medical Groups.',
    faqs: [
      {
        question: 'How long does SEO take for a medical practice?',
        answer: 'Because healthcare is a YMYL (Your Money or Your Life) category, Google’s trust threshold is high. Initial local traction takes 60-90 days, with major ROI scaling between months 6 and 9.',
      },
      {
        question: 'Are your strategies HIPAA compliant?',
        answer: 'Absolutely. We ensure all patient data, reviews, and tracking mechanisms stringently adhere to all HIPAA regulations.',
      },
      {
        question: 'Do you guarantee we will rank #1?',
        answer: 'No ethical SEO agency guarantees #1 rankings. However, we guarantee a proven, transparent process that historically dominates local medical markets.',
      },
      {
        question: 'Who writes the medical content?',
        answer: 'Our in-house writing team crafts the copy, which is always submitted to you or your clinical staff for final medical accuracy approval before publishing.',
      },
      {
        question: 'How do you track new patients from SEO?',
        answer: 'We utilize HIPAA-compliant dynamic call tracking and dedicated form analytics to prove exactly which website visitors convert into scheduled appointments.',
      },
    ],
    ctaHeadline: 'Fill your waiting room with high-value patients.',
    ctaButtonText: 'Request a Free Practice Audit',
    internalLinks: [
      {
        to: '/healthcare-digital-marketing-agency-${state}',
        anchor: 'Full-Service Healthcare Marketing',
      },
      {
        to: '/healthcare-ppc-services-${state}',
        anchor: 'Immediate Patient Leads via PPC',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Healthcare SEO',
      provider: {
        '@type': 'Organization',
        name: 'Growlimo',
        url: 'https://growlimo.com',
      },
      areaServed: {
        '@type': 'State',
        name: '${State}',
      },
      description: 'Grow patient inquiries, Google rankings & increase appointments with expert healthcare SEO services by a trusted agency.',
    },
  },
  'healthcare-digital-marketing-agency-${state}': {
    metaTitle: 'Healthcare Digital Marketing Agency ${State} - Start Today',
    metaDescription: 'Healthcare Digital Marketing Agency ${State} - Specialized healthcare digital marketing agency offering tailored strategies for medical practices to get patients.',
    h1: 'The Premier Healthcare Digital Marketing Agency in ${State}.',
    subheadline: 'We engineer patient-generating machines. Align your SEO, Paid Ads, and Website into a unified strategy that rapidly scales your practice revenue.',
    heroBullets: [
      '✅ Holistic Omnichannel Patient Acquisition',
      '✅ HIPAA-Compliant Data & Analytics',
      '✅ Predictable High-Value Patient Flow',
    ],
    whyChooseUs: [
      {
        title: 'Vertical Expertise',
        description: 'We do not run campaigns for plumbers and then guess how to market a medical practice. Our focus guarantees efficient budget utilization.',
      },
      {
        title: 'Surgical Attribution',
        description: 'We track the entire patient journey from the first Google search to the booked appointment, proving exact ROI down to the penny.',
      },
      {
        title: 'Brand Reputation Focus',
        description: 'We embed aggressive review generation into our marketing funnels, recognizing that trust is the ultimate currency in healthcare.',
      },
    ],
    servicesBreakdown: [
      {
        title: 'Medical Search Engine Optimization (SEO)',
        description: 'Securing top Google rankings for your most lucrative treatments and dominating the local Map Pack.',
      },
      {
        title: 'Healthcare Paid Advertising (PPC)',
        description: 'Deploying highly targeted Google Ads to capture patients in immediate need of medical care.',
      },
      {
        title: 'High-Converting Medical Web Design',
        description: 'Building HIPAA-compliant, lightning-fast digital storefronts engineered for patient conversion.',
      },
      {
        title: 'Patient Retention & Reactivation',
        description: 'Utilizing automated email and SMS sequences to reduce no-shows and increase lifetime value.',
      },
    ],
    process: [
      {
        title: 'Clinical Discovery & Goal Setting',
        description: 'Aligning our marketing targets with your practice’s specific capacity constraints and revenue goals.',
      },
      {
        title: 'Multi-Channel Strategy Formulation',
        description: 'Developing a synchronized approach utilizing Search, Social, and local PR.',
      },
      {
        title: 'Rapid Deployment',
        description: 'Launching high-intent PPC campaigns for immediate volume while simultaneously laying long-term SEO foundations.',
      },
      {
        title: 'Data-Driven Scaling',
        description: 'Aggressively shifting budget toward the campaigns producing the lowest cost-per-scheduled-appointment.',
      },
    ],
    benefits: [
      'Consolidate your marketing vendors under one highly specialized, accountable team.',
      'Achieve a fully predictable, scalable pipeline of new patient inquiries.',
      'Protect your margin by focusing entirely on high-LTV procedural workflows.',
    ],
    industries: 'Specialty Surgery Centers, Private Medical Practices, Rehab Facilities, and Multi-Specialty Clinics.',
    faqs: [
      {
        question: 'Do I really need a specialized healthcare agency?',
        answer: 'Yes. Generalist agencies frequently violate HIPAA compliance via improper pixel tracking and fail to understand the nuanced language restrictions required by medical advertising guidelines.',
      },
      {
        question: 'How do you measure success?',
        answer: 'We measure success in booked appointments and collected revenue—not just website traffic or social media impressions.',
      },
      {
        question: 'Can you help us recruit medical staff in ${State}?',
        answer: 'Yes. The same advanced targeting tactics we use for patient acquisition can be expertly pivoted to run highly effective recruitment campaigns for nurses or specialized practitioners.',
      },
      {
        question: 'How long are your contracts?',
        answer: 'We generally require a 6-month initial engagement to properly build, test, and optimize a full-funnel digital strategy, moving to month-to-month thereafter.',
      },
      {
        question: 'Do you manage our social media profiles?',
        answer: 'Yes, we provide organic social media management tailored specifically to humanize your providers and build local community trust.',
      },
    ],
    ctaHeadline: 'Ready to scale your medical practice aggressively?',
    ctaButtonText: 'Speak With a Healthcare Growth Expert',
    internalLinks: [
      {
        to: '/healthcare-seo-services-${state}',
        anchor: 'Dominate Organic Search',
      },
      {
        to: '/healthcare-google-ads-management-${state}',
        anchor: 'Capture Immediate Search Intent',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Digital Marketing',
      provider: {
        '@type': 'Organization',
        name: 'Growlimo',
        url: 'https://growlimo.com',
      },
      areaServed: {
        '@type': 'State',
        name: '${State}',
      },
      description: 'Specialized healthcare digital marketing agency offering tailored strategies for medical practices to get patients.',
    },
  },
  'healthcare-google-ads-management-${state}': {
    metaTitle: 'Healthcare Google Ads Management ${State} - Expert Medical Ads',
    metaDescription: 'Healthcare Google Ads Management ${State} - Maximize patient acquisition with targeted healthcare Google Ads management in ${State}. Get a free account audit.',
    h1: 'Precision Healthcare Google Ads Management in ${State}',
    subheadline: 'Capture high-intent patients exactly when they are searching for care. Our advanced, HIPAA-compliant Google Ads campaigns bypass competitors to fill your schedule.',
    heroBullets: [
      '✅ Hyper-Targeted Procedure Keywords',
      '✅ Ruthless Negative Keyword Filtering',
      '✅ HIPAA-Compliant Conversion Tracking',
    ],
    whyChooseUs: [
      {
        title: 'Zero Ad Waste',
        description: 'Broad match keywords bleed medical budgets. We execute exact and phrase-match strategies so you only pay for clicks from patients ready to book.',
      },
      {
        title: 'Emergency Call Routing',
        description: 'We structure specialized ad schedules for Urgent Care and emergency treatments, routing high-value calls directly to your front desk during hours of operation.',
      },
      {
        title: 'Conversion-Optimized Landers',
        description: 'We don’t send paid traffic to standard homepages. Every ad links to a dedicated, blazing-fast landing page specifically built for high patient conversion.',
      },
    ],
    servicesBreakdown: [
      {
        title: 'Search Network Campaigns',
        description: 'Securing the absolute top ranking spots when patients type specific conditions or required treatments into Google.',
      },
      {
        title: 'Local Services Ads (LSA)',
        description: 'We manage and optimize your Google Guaranteed profiles to capture trusted, pay-per-lead phone calls right above standard text ads.',
      },
      {
        title: 'Competitor Conquesting',
        description: 'Ethically and effectively bidding on the brand names of major competitor clinics to siphon their patients into your practice.',
      },
      {
        title: 'A/B Ad Testing',
        description: 'Continuously split-testing ad headlines and calls-to-action to incrementally lower your average Cost-Per-Acquisition every single month.',
      },
    ],
    process: [
      {
        title: 'Account Architecture Audit',
        description: 'We review historic ad data to eliminate wasteful spending immediately and restructure your campaigns into tightly themed ad groups.',
      },
      {
        title: 'Keyword Economics',
        description: 'Mathematically projecting the clicks required and bidding thresholds needed to profitably acquire patients in your specific zip codes.',
      },
      {
        title: 'Rigorous Launch Phase',
        description: 'Deploying controlled daily budgets to gather data on search term queries before scaling spend aggressively.',
      },
      {
        title: 'Aggressive Scaling',
        description: 'Once profitability is proven, we rapidly increase budget allocation to the highest-performing campaigns to maximize total patient intakes.',
      },
    ],
    benefits: [
      'Generate an immediate, measurable surge of new patient phone calls within 48 hours of launch.',
      'Control your clinic volume directly: increase the ad budget when schedules are light; decrease it when booked solid.',
      'Gain total visibility into exactly what search terms generate your highest-paying procedures.',
    ],
    industries: 'Urgent Care Facilities, Orthopedic Clinics, Cosmetic Surgeons, and Multi-Specialty Practices.',
    faqs: [
      {
        question: 'What is a typical medical Google Ads budget?',
        answer: 'To exit the learning phase and outbid competitors in major ${State} markets, we typically recommend an initial minimum ad spend of $2,500 - $4,000 per month.',
      },
      {
        question: 'Is remarketing allowed for medical practices?',
        answer: 'Usually no. Google has strict policies strictly forbidding personalized advertising (retargeting) based on users’ protected health information or medical conditions.',
      },
      {
        question: 'How do you handle phone call tracking and HIPAA?',
        answer: 'We deploy specialized, HIPAA-compliant call-tracking systems that feed conversion data back to Google without transmitting Protected Health Information (PHI).',
      },
      {
        question: 'Why are our current Google Ads not converting?',
        answer: 'Poor conversions usually stem from a lack of negative keywords (bidding on informational searches) or a confusing landing page experience that forces patients to bounce.',
      },
      {
        question: 'Can you fix our suspended Google Ads account?',
        answer: 'We assist with policy violation appeals, but cannot guarantee reinstatement for accounts banned due to severe infractions, like malicious software or circumventing systems.',
      },
    ],
    ctaHeadline: 'Stop letting competitors buy your future patients.',
    ctaButtonText: 'Request a Free Ads Account Audit',
    internalLinks: [
      {
        to: '/healthcare-seo-services-${state}',
        anchor: 'Build Long-Term Organic Authority',
      },
      {
        to: '/healthcare-ppc-services-${state}',
        anchor: 'Comprehensive Paid Media Strategies',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Google Ads Management',
      provider: {
        '@type': 'Organization',
        name: 'Growlimo',
        url: 'https://growlimo.com',
      },
      areaServed: {
        '@type': 'State',
        name: '${State}',
      },
      description: 'Maximize patient acquisition with targeted healthcare Google Ads management in ${State}. Get a free account audit.',
    },
  },
  'healthcare-ppc-services-${state}': {
    metaTitle: 'Healthcare PPC Services ${State} | High-Performing Medical Ads',
    metaDescription: 'Healthcare PPC Services ${State} - Expert Pay-Per-Click management for medical clinics and healthcare practices. Maximize ROI and increase bookings.',
    h1: 'Comprehensive Healthcare PPC Services in ${State}.',
    subheadline: 'Diversify your patient acquisition pipelines. We engineer highly profitable Pay-Per-Click campaigns across Google, Microsoft Ads, and advanced health networks.',
    heroBullets: [
      '✅ Multi-Network Paid Acquisition',
      '✅ Elite Landing Page Engineering',
      '✅ Granular Cost-Per-Patient Tracking',
    ],
    whyChooseUs: [
      {
        title: 'Beyond Google Alone',
        description: 'While Google is essential, we unlock highly profitable, lower-cost patient leads by utilizing Microsoft Ads (Bing) and specialized programmatic health networks.',
      },
      {
        title: 'Conversion Obsession',
        description: 'We do not just drive clicks. We relentlessly A/B test our proprietary medical funnels to ensure the highest possible percentage of traffic turns into scheduled appointments.',
      },
      {
        title: 'Click-Fraud Protection',
        description: 'We deploy advanced software to block rival practices, web scrapers, and malicious bots from clicking your ads and bleeding your budget dry.',
      },
    ],
    servicesBreakdown: [
      {
        title: 'Google Ads & LSA Management',
        description: 'Capturing the lion’s share of immediate, high-intent medical search queries in your primary operating radius.',
      },
      {
        title: 'Microsoft (Bing) Ads Targeting',
        description: 'Accessing an older, typically higher-income demographic that frequently converts for high-margin restorative and specialty procedures.',
      },
      {
        title: 'Programmatic Display Advertising',
        description: 'Deploying highly targeted, compliant banner placements across premium lifestyle and health publications geographically fenced to your clinic.',
      },
      {
        title: 'PPC Audits & Restructuring',
        description: 'Taking over underperforming, bleeding ad accounts and transforming them into hyper-efficient, revenue-generating automated machines.',
      },
    ],
    process: [
      {
        title: 'Traffic Viability Analysis',
        description: 'Determining precisely which ad networks currently contain the highest concentration of your ideal patient profiles.',
      },
      {
        title: 'Compliance & Offer Alignment',
        description: 'Crafting compelling hooks (e.g., specific procedural availability or specialized diagnostic equipment) that perfectly comply with medical ad policies.',
      },
      {
        title: 'Omnichannel Launch',
        description: 'Deploying campaigns concurrently across Search and Display networks to build immediate local dominance.',
      },
      {
        title: 'Ruthless Budget Shifting',
        description: 'Constantly pausing poor-performing keyword ad groups and reallocating spend entirely to the campaigns driving the cheapest cost-per-lead.',
      },
    ],
    benefits: [
      'Protect your clinic from Google’s unpredictable algorithm updates by controlling multiple paid traffic sources.',
      'Access highly lucrative patient demographics that your competitors completely neglect on secondary platforms.',
      'Establish a mathematically predictable model where $X in Ad Spend reliably equals Y number of new patients.',
    ],
    industries: 'Diagnostic Imaging Centers, Specialized Physical Therapy, Orthodontic Chains, and High-Acuity Medical Specialists.',
    faqs: [
      {
        question: 'Are Microsoft (Bing) ads really worth running for healthcare?',
        answer: 'Yes. Microsoft Ads powers a significant portion of US desktop search volume, and the demographic heavily skews older and wealthier—prime candidates for specialty procedures.',
      },
      {
        question: 'What makes a healthcare landing page convert?',
        answer: 'Speed, mobile responsiveness, clear pricing/insurance information, prominent click-to-call buttons, and undeniable trust signals (awards, doctor bios, reviews).',
      },
      {
        question: 'Should we run Facebook Ads or PPC?',
        answer: 'Both. PPC captures active demand (the patient is searching for a solution now), while Facebook generates passive demand (the patient didn’t know they needed a solution until seeing the ad).',
      },
      {
        question: 'Do you charge a flat fee or percentage of ad spend?',
        answer: 'We typically operate on flat-fee structures for initial budgets to ensure our goals align. Percentage models only apply when actively scaling massive, multi-location enterprise campaigns.',
      },
      {
        question: 'How do you handle no-shows from paid traffic?',
        answer: 'We combat no-shows by bidding on higher-intent keywords and implementing robust, automated SMS/email reminders the absolute second a lead submits an inquiry.',
      },
    ],
    ctaHeadline: 'Scale your practice across every profitable digital channel.',
    ctaButtonText: 'Request a Strategic PPC Audit',
    internalLinks: [
      {
        to: '/healthcare-facebook-ads-management-${state}',
        anchor: 'Maximize Leads with Facebook',
      },
      {
        to: '/healthcare-digital-marketing-agency-${state}',
        anchor: 'Omnichannel Marketing Excellence',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'PPC Services',
      provider: {
        '@type': 'Organization',
        name: 'Growlimo',
        url: 'https://growlimo.com',
      },
      areaServed: {
        '@type': 'State',
        name: '${State}',
      },
      description: 'Expert Pay-Per-Click management for medical clinics and healthcare practices. Maximize ROI and increase bookings.',
    },
  },
  'healthcare-facebook-ads-management-${state}': {
    metaTitle: 'Healthcare Facebook Ads Management ${State} - Generate Leads',
    metaDescription: 'Healthcare Facebook Ads Management ${State} - Drive explosive patient growth with specialized Facebook Ads for doctors and medical clinics in ${State}.',
    h1: 'High-Converting Healthcare Facebook Ads in ${State}.',
    subheadline: 'Turn passive social media scrolling into scheduled patient appointments. We execute hyper-local Facebook Ad campaigns that rapidly fill your clinical calendar.',
    heroBullets: [
      '✅ Engaging Medical Video Creative',
      '✅ Frictionless Native Lead Generation',
      '✅ Immediate CRM Integration',
    ],
    whyChooseUs: [
      {
        title: 'Visual Trust Building',
        description: 'We don’t use sterile stock photos. We produce authentic, compelling video creatives featuring your staff and clinic, instantly establishing parasocial trust with patients.',
      },
      {
        title: 'Native Form Conversion',
        description: 'By utilizing Facebook Lead Forms, patients can submit their contact info securely in two taps without leaving the app, driving down your cost-per-lead exponentially.',
      },
      {
        title: 'Speed-to-Lead Automation',
        description: 'Facebook leads go cold within 5 minutes. We instantly route new patient inquiries to your front desk via SMS and email to guarantee rapid follow-up protocols.',
      },
    ],
    servicesBreakdown: [
      {
        title: 'Targeted Demographics',
        description: 'Deploying ads strictly within a 5-to-15 mile radius of your clinic so you only pay to reach local patients who can actually drive to your office.',
      },
      {
        title: 'Elective Procedure Campaigns',
        description: 'Designing highly visual campaigns promoting valuable elective and cosmetic-adjacent treatments to healthy, affluent demographics.',
      },
      {
        title: 'Lookalike Audience Expansion',
        description: 'Uploading anonymous segments of your best patients so Facebook’s AI can algorithmically identify thousands of identical prospects locally.',
      },
      {
        title: 'Video View Retargeting',
        description: 'Automatically serving appointment-booking ads to people who watched over 50% of your initial educational or brand-awareness medical videos.',
      },
    ],
    process: [
      {
        title: 'Offer and Hook Ideation',
        description: 'Crafting compelling reasons for a patient to pause their scrolling—whether it is an educational seminar, an evaluation discount, or unique cutting-edge technology.',
      },
      {
        title: 'Creative Assembly',
        description: 'We script, coordinate, and edit engaging short-form video content designed specifically for Facebook and Instagram Feeds.',
      },
      {
        title: 'Rapid A/B Testing',
        description: 'Launching multiple ad variations concurrently so the algorithm can instantly tell us which images and headlines yield the lowest lead cost.',
      },
      {
        title: 'Front-Desk Synchronization',
        description: 'Training and coordinating with your reception staff to ensure they handle Facebook-generated leads quickly and correctly.',
      },
    ],
    benefits: [
      'Generate a tremendous volume of patient inquiries at a significantly lower Cost-Per-Click than Search advertising.',
      'Humanize your doctors, making the decision process far less intimidating for nervous new patients.',
      'Build localized massive brand awareness so your medical clinic becomes a highly recognized household name.',
    ],
    industries: 'Aesthetic Medical Spas, Advanced Chiropractic Clinics, Weight Loss Centers, and Boutique Orthopedics.',
    faqs: [
      {
        question: 'Are Facebook leads lower quality than Google leads?',
        answer: 'They simply require different handling. Facebook leads are "disruptive"—the patient wasn’t actively searching. Therefore, they demand immediate, skilled follow-up from your front desk to convert them successfully.',
      },
      {
        question: 'Does Facebook allow medical before-and-after photos?',
        answer: 'Meta has incredibly strict policies on health aesthetics and zooming in on body parts. We navigate these rules expertly to ensure your ads run without getting your account banned.',
      },
      {
        question: 'Do we need to offer massive discounts to succeed?',
        answer: 'No. While introductory "Loss Leaders" drive high volume, we successfully run campaigns purely selling the prestige, advanced technology, and authoritative experience of your clinic.',
      },
      {
        question: 'How do you target our specific local area?',
        answer: 'We utilize strict geofencing tools within Meta Ads Manager, ensuring ads only display to users actively living within driving distance of your facility.',
      },
      {
        question: 'Do you manage our daily Facebook posts too?',
        answer: 'Our Ads Management focuses specifically on paid lead generation campaigns. However, we do offer organic social media management as a complementary service.',
      },
    ],
    ctaHeadline: 'Dominate the newsfeeds of your ideal local patients.',
    ctaButtonText: 'Claim Your Free Social Ads Audit',
    internalLinks: [
      {
        to: '/healthcare-meta-ads-agency-${state}',
        anchor: 'Advanced Meta Ecosystem Advertising',
      },
      {
        to: '/healthcare-ppc-services-${state}',
        anchor: 'Diversified Patient Acquisition',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Facebook Ads Management',
      provider: {
        '@type': 'Organization',
        name: 'Growlimo',
        url: 'https://growlimo.com',
      },
      areaServed: {
        '@type': 'State',
        name: '${State}',
      },
      description: 'Drive explosive patient growth with specialized Facebook Ads for doctors and medical clinics in ${State}.',
    },
  },
  'healthcare-meta-ads-agency-${state}': {
    metaTitle: 'Healthcare Meta Ads Agency ${State} | Instagram Ads Growth',
    metaDescription: 'Healthcare Meta Ads Agency ${State} - Tailored Meta (Facebook & Instagram) ad strategies to scale medical practices and secure high-value patients.',
    h1: 'Direct-Response Healthcare Meta Ads Agency in ${State}.',
    subheadline: 'Harness the most powerful audience algorithm on earth. We execute aggressively profitable ad strategies across Facebook and Instagram to scale your medical practice.',
    heroBullets: [
      '✅ Integrated FB & IG Placements',
      '✅ Advanced Aesthetic Video Creative',
      '✅ Strict CAPI Integration Tracking',
    ],
    whyChooseUs: [
      {
        title: 'Holistic Platform Mastery',
        description: 'We do not view platforms in isolation. We architect dynamic funnels that push educational content on Facebook while serving highly visual results on Instagram.',
      },
      {
        title: 'Creative-First Scaling',
        description: 'Targeting alone is dead. We relentlessly produce and A/B test world-class ad creative, video hooks, and compelling copy to crush ad-fatigue and scale budgets sustainably.',
      },
      {
        title: 'Uncompromising Signal Tracking',
        description: 'Because of iOS privacy updates, pixel tracking is flawed. We implement Meta’s Server-Side Conversions API (CAPI) to feed flawless, compliant data back to the algorithm.',
      },
    ],
    servicesBreakdown: [
      {
        title: 'High-Ticket Aesthetic Instagram Campaigns',
        description: 'Deploying stunningly visual Reels and Stories to promote high-margin elective and cosmetic procedures to active spenders.',
      },
      {
        title: 'Multi-Step Conversion Funnels',
        description: 'Routing complex or expensive clinical offerings through webinar sign-ups or detailed quizzes before the patient ever books a consultation.',
      },
      {
        title: 'Advantage+ Machine Learning Bidding',
        description: 'Leveraging Meta’s bleeding-edge AI to dynamically identify and target the most profitable patient demographics within your zip code.',
      },
      {
        title: 'Automated Lead Qualification',
        description: 'Connecting native Meta lead forms into AI-driven chatbots or automated qualifying processes to protect your front desk from tire-kickers.',
      },
    ],
    process: [
      {
        title: 'Strategic Competitive Espionage',
        description: 'We deeply audit the Meta Ad Library of major local medical competitors to reverse-engineer their highest-performing creatives.',
      },
      {
        title: 'Massive Creative Assembly',
        description: 'Generating an exhaustive initial directory of ad hooks, images, and video variations necessary for rapid algorithmic testing.',
      },
      {
        title: 'Algorithmic Optimization',
        description: 'Allowing the Meta ad engine to spend micro-budgets horizontally across dozens of ads, definitively identifying the lowest cost-per-acquisition format.',
      },
      {
        title: 'Vertical Consolidation',
        description: 'Cutting the losers instantly and aggressively pouring budget capital into the winning ad structures to maximize patient volume.',
      },
    ],
    benefits: [
      'Scale your clinic’s procedural volume with surgical, mathematical precision using advanced social machine learning.',
      'Achieve absolute omnipresence; ensure every prospective patient in your city sees your clinic’s brand weekly.',
      'Siphon off highly lucrative, elective-procedure patients before they even realize they want the treatment.',
    ],
    industries: 'High-End Med Spas, Direct Primary Care (DPC), Specialized Weight Loss Clinics, and Fertility Centers.',
    faqs: [
      {
        question: 'What is the difference between Facebook Ads and Meta Ads?',
        answer: 'Meta is the parent company. A Meta agency executes a consolidated, holistic strategy deploying ad budget fluidly across Facebook, Instagram, Messenger, and the Audience Network simultaneously, based entirely on algorithmic performance.',
      },
      {
        question: 'Does Instagram advertising work for highly medical procedures?',
        answer: 'It works phenomenally for visual, elective, or restorative procedures (e.g., cosmetic dermatology, specific orthopedics). For critical, emergency care, Google Search Ads remain vastly superior.',
      },
      {
        question: 'How much should an established medical practice spend on Meta Ads?',
        answer: 'To guarantee rapid machine learning and statistically significant testing data, we require our partners to commit a minimum of $3,000 per month specifically for ad spend.',
      },
      {
        question: 'How do you prove a patient came from Instagram?',
        answer: 'We provide you with centralized, live reporting dashboards. Every lead generated on Instagram is tagged and routed to your CRM with its specific source campaign firmly attached.',
      },
      {
        question: 'Will our account get banned for medical claims?',
        answer: 'We employ rigorous compliance checks before launching any campaign. We never make guaranteed medical claims, and strictly avoid terminology that triggers Meta’s automated health policy rejections.',
      },
    ],
    ctaHeadline: 'Let Meta’s algorithm fill your clinic’s schedule.',
    ctaButtonText: 'Speak With a Meta Strategist',
    internalLinks: [
      {
        to: '/healthcare-digital-marketing-agency-${state}',
        anchor: 'Comprehensive Digital Marketing execution',
      },
      {
        to: '/healthcare-facebook-ads-management-${state}',
        anchor: 'Facebook Lead Generation Strategies',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Meta Ads Management',
      provider: {
        '@type': 'Organization',
        name: 'Growlimo',
        url: 'https://growlimo.com',
      },
      areaServed: {
        '@type': 'State',
        name: '${State}',
      },
      description: 'Tailored Meta (Facebook & Instagram) ad strategies to scale medical practices and secure high-value patients.',
    },
  },
};

export default healthcareServices;`;

const californiaHealthcarePath = path.join(__dirname, '../src/data/services/states/california/healthcare.js');
const texasHealthcarePath = path.join(__dirname, '../src/data/services/states/texas/healthcare.js');

fs.writeFileSync(californiaHealthcarePath, getHealthcareData('california', 'California'));
fs.writeFileSync(texasHealthcarePath, getHealthcareData('texas', 'Texas'));

console.log('Successfully generated complete Healthcare files according to the specified 6 routes');
