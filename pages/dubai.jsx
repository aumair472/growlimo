import MarketLandingPage from '../components/MarketLandingPage';

const DUBAI_CONFIG = {
  market: 'dubai',
  metaTitle: 'Digital Marketing Agency Dubai | SEO, PPC & Ads | GrowLimo',
  metaDescription: 'GrowLimo is a results-driven digital marketing agency in Dubai. SEO, Google Ads, Meta Ads & web design that turn traffic into leads. Book a free call.',
  canonicalUrl: 'https://growlimo.com/dubai/',
  
  heroTitle: {
    leading: 'Digital Marketing Agency Dubai',
    highlight: 'Businesses Trust to Grow'
  },
  heroSubhead: "SEO, Google Ads, Meta Ads, and web design built for Dubai's competitive market — with clear reporting and no wasted ad spend.",
  heroCtaPrimary: 'Book a Free Strategy Call',
  heroCtaSecondary: 'See Our Results',
  trustBarText: 'Trusted by businesses across Dubai, Abu Dhabi & the UAE',
  whatsapp: '+971 50 482 6917',
  whatsappMessage: "Hi GrowLimo, I'm interested in your digital marketing services for Dubai/UAE.",
  
  metrics: [
    { value: '670+', prefix: '', suffix: '', label: 'Leads Generated (US)' },
    { value: '17x', prefix: '', suffix: '', label: 'ROAS (US Case Study)' },
    { value: '$2.3M+', prefix: '', suffix: '', label: 'Tracked Revenue (US)' }
  ],
  metricsDisclaimer: 'Proven US client results — now bringing the same performance standards to Dubai.',
  
  problemSectionTitle: 'Why Businesses Across Dubai Choose GrowLimo',
  problems: [
    { title: 'Stagnant Local Visibility', desc: "Your business isn't visible when Dubai customers search on Google or Google Maps." },
    { title: 'Saturated Digital Markets', desc: "You're competing against agencies and brands with bigger ad budgets in one of the world's most saturated digital markets." },
    { title: 'Wasted Ad Budgets', desc: "Your Google Ads spend is going to clicks that don't convert to real leads." },
    { title: 'Lack of Credibility', desc: "Your website doesn't reflect the high-end credibility needed to win high-value UAE clients." },
    { title: 'Lost Leads', desc: "Leads slip through the cracks with no automated, bilingual-ready follow-up." }
  ],
  solutions: [
    { title: 'Local Maps & GBP Dominance', desc: "Rank at the top of Google Maps pack for Dubai searches and dominate organic search lists." },
    { title: 'Budget-Efficient PPC Strategy', desc: "We structure campaigns with negative-keyword silos and geo-filters to maximize ROI." },
    { title: 'Conversion-First CRO Landing Pages', desc: "Modern, high-performance landing pages designed to convert high-intent traffic." },
    { title: 'High-End Premium Web Design', desc: "Fast, custom websites engineered to match the expectations of the UAE market." },
    { title: 'Bilingual Lead Automation', desc: "Nurture incoming leads with automated, multi-channel (email/SMS) sequences instantly." }
  ],
  
  servicesSectionTitle: 'Digital Marketing Services Dubai',
  services: [
    {
      title: 'SEO Services Dubai Businesses Use to Rank #1',
      desc: 'Local and national SEO built around how Dubai and UAE customers actually search — technical SEO, on-page optimization, content, and local Google Business Profile management to dominate the map pack and organic results.',
      bullets: [
        'Technical SEO audits & fixes',
        'Local SEO & Google Business Profile optimization',
        'Content strategy & keyword-mapped pages',
        'Link building & authority growth'
      ],
      ctaText: 'Get Your Free SEO Audit'
    },
    {
      title: 'Google Ads Management Dubai',
      desc: 'Laser-targeted campaigns that cut wasted spend and maximize cost-per-acquisition across Dubai\'s high-intent searches.',
      bullets: [
        'Campaign structure & keyword strategy',
        'Landing page alignment',
        'Conversion tracking & optimization',
        'Monthly performance reporting'
      ],
      ctaText: 'Get a Free Ads Account Review'
    },
    {
      title: 'Meta Ads Agency Dubai',
      desc: 'Facebook and Instagram campaigns built to reach Dubai\'s mobile-first, highly social audience with creative that converts.',
      bullets: [
        'Audience research & targeting',
        'Creative strategy & ad production',
        'Retargeting funnels',
        'ROAS-focused optimization'
      ],
      ctaText: 'Talk to a Meta Ads Specialist'
    },
    {
      title: 'Web Design Services Dubai',
      desc: 'Fast, mobile-first websites designed to convert Dubai traffic into leads and built on a technical foundation that supports SEO from day one.',
      bullets: [
        'Custom design & development',
        'Mobile-first, fast-loading builds',
        'SEO-ready technical foundation',
        'CRO-optimized contact/booking flows'
      ],
      ctaText: 'Request a Free Website Review'
    }
  ],
  
  differentiators: [
    { title: 'Transparent ROI-Focused Reporting', desc: 'Get a custom dashboard tracking revenue and leads, not just clicks. No vanity metrics or hidden fees.' },
    { title: 'Direct Access to Strategists', desc: 'Communicate directly with the senior digital specialists doing the work, not account managers.' },
    { title: 'Unified Omnichannel Growth', desc: 'Your SEO, Google Ads, Meta Ads, and web design operate as one interconnected conversion engine.' },
    { title: 'UAE Local Search Expertise', desc: 'Deep understanding of localized Middle East search behaviors, geo-modifiers, and bilingual intents.' },
    { title: 'Proven US Standards', desc: 'We bring the identical high-performance, conversion-optimized marketing standards that scale US brands.' }
  ],
  
  process: [
    { step: '1', title: 'Discovery Call', desc: 'We discuss your business objectives, current bottlenecks, and target markets.' },
    { step: '2', title: 'Deep-Dive Audit', desc: 'Our team analyzes your organic SEO, ad historical data, and competitor gaps.' },
    { step: '3', title: 'Campaign Launch', desc: 'We build your funnels, optimize local profiles, and set up ad silos.' },
    { step: '4', title: 'Optimize & Scale', desc: 'Weekly checks and A/B split testing to continually reduce CPL and maximize revenue.' }
  ],
  
  caseStudiesTitle: 'Proven US Client Success Stories',
  caseStudiesIntro: 'We are extending our proven track record of scaling businesses in competitive US markets directly to Dubai. See how our data-driven approach works:',
  
  pricing: {
    title: 'GrowLimo Service Packages',
    intro: 'Predictable growth investments scaled to your business stage. Ad spend (Google/Meta budget) is separate from our management fee. [CONFIRM PRICING WITH UMAIR]',
    packages: [
      {
        name: 'Starter Package',
        desc: 'Single-channel focus (SEO or Google Ads), local SEO/GBP profile, and monthly reporting. Best for small businesses.',
        price: 'AED 5,000–8,000/mo',
        bullets: [
          'Estimated ~US$1,360–2,180/mo equivalent',
          'Single-channel focus (SEO OR Google Ads)',
          'Local citation building & Google Maps optimization',
          'Standard monthly performance reporting',
          'No lock-in contract'
        ]
      },
      {
        name: 'Growth Package',
        desc: 'Multi-channel strategy (SEO + Paid Ads), content production, and conversion tracking. Sized for growing businesses.',
        popular: true,
        price: 'AED 8,000–15,000/mo',
        bullets: [
          'Estimated ~US$2,180–4,090/mo equivalent',
          'Multi-channel focus (SEO + Google/Meta Ads)',
          'Advanced conversion tracking & keyword strategy',
          'Ongoing content creation & landing page CRO',
          'No lock-in contract'
        ]
      },
      {
        name: 'Full-Funnel Package',
        desc: 'Integrated SEO, Google Ads, Meta Ads, and custom Web Design working as one lead-acquisition system.',
        price: 'AED 20,000+/mo',
        bullets: [
          'Estimated ~US$5,450+/mo equivalent',
          'SEO + Google Ads + Meta Ads + Custom Web Design',
          'Full-funnel lead attribution & CRM integration',
          'Priority senior strategist support',
          'No lock-in contract'
        ]
      }
    ]
  },
  
  faqs: [
    {
      q: 'Do you work with businesses outside Dubai, across the UAE?',
      a: 'Yes, we provide digital marketing and SEO services for businesses across all of the UAE, including Abu Dhabi, Sharjah, Ajman, and the wider GCC region.'
    },
    {
      q: 'How much does digital marketing cost in Dubai?',
      a: 'The cost of digital marketing in Dubai varies depending on your business goals and channels. Our typical packages range from AED 5,000 to AED 20,000+ per month (roughly equivalent to US$1,360–$5,450+). [CONFIRM PRICING WITH UMAIR]'
    },
    {
      q: 'Is ad spend included in your management fee?',
      a: 'No, ad spend is paid directly to the advertising platforms (Google, Meta) and is entirely separate from our monthly management fee. This ensures complete transparency with no hidden markup on your actual budget.'
    },
    {
      q: 'How long does SEO take to show results in the UAE market?',
      a: 'Standard technical SEO fixes and Google Maps local map pack improvements can show movement within 30-60 days. Major keyword rankings for highly competitive UAE terms typically take 3-6 months to mature.'
    },
    {
      q: 'Can you run Google Ads and Meta Ads campaigns in both English and Arabic?',
      a: 'Yes, our copywriters and ad managers structure bilingual campaigns tailored to reach both English-speaking expatriates and Arabic-speaking local audiences in the UAE.'
    },
    {
      q: 'Do you offer multi-location marketing for businesses with branches across the UAE?',
      a: 'Yes, we optimize multi-location SEO, local map packs, and geo-targeted paid ads to drive customers to specific branches across Dubai, Abu Dhabi, and other emirates.'
    },
    {
      q: 'What industries do you specialize in for the Dubai market?',
      a: 'We specialize in healthcare practices, dental clinics, professional services, local service businesses, real estate, and high-ticket B2C brands looking for predictable lead acquisition.'
    }
  ],
  
  finalCtaHeadline: 'Ready to Grow Your Dubai Business Predictably?',
  finalCtaSubhead: 'Book a free 30-minute strategy session. Let\'s build a data-driven marketing plan that turns clicks into revenue.',
  
  schema: [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://growlimo.com/dubai/#localbusiness',
      'name': 'GrowLimo',
      'url': 'https://growlimo.com/dubai/',
      'areaServed': [
        { '@type': 'City', 'name': 'Dubai' },
        { '@type': 'Country', 'name': 'United Arab Emirates' }
      ],
      'description': 'Digital marketing agency offering SEO, Google Ads, Meta Ads, and web design services in Dubai and the UAE.',
      'priceRange': '$$',
      'telephone': '+1-667-347-4729',
      'email': 'info@growlimo.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '7917 Mountain Rd NE',
        'addressLocality': 'Albuquerque',
        'addressRegion': 'NM',
        'postalCode': '87110',
        'addressCountry': 'US'
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://growlimo.com/dubai/#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://growlimo.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Dubai Services',
          'item': 'https://growlimo.com/dubai/'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://growlimo.com/dubai/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Do you work with businesses outside Dubai, across the UAE?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, we provide digital marketing and SEO services for businesses across all of the UAE, including Abu Dhabi, Sharjah, Ajman, and the wider GCC region.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How much does digital marketing cost in Dubai?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The cost of digital marketing in Dubai varies depending on your business goals and channels. Our typical packages range from AED 5,000 to AED 20,000+ per month (roughly equivalent to US$1,360–$5,450+). [CONFIRM PRICING WITH UMAIR]'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is ad spend included in your management fee?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No, ad spend is paid directly to the advertising platforms (Google, Meta) and is entirely separate from our monthly management fee. This ensures complete transparency with no hidden markup on your actual budget.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How long does SEO take to show results in the UAE market?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Standard technical SEO fixes and Google Maps local map pack improvements can show movement within 30-60 days. Major keyword rankings for highly competitive UAE terms typically take 3-6 months to mature.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can you run Google Ads and Meta Ads campaigns in both English and Arabic?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, our copywriters and ad managers structure bilingual campaigns tailored to reach both English-speaking expatriates and Arabic-speaking local audiences in the UAE.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you offer multi-location marketing for businesses with branches across the UAE?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, we optimize multi-location SEO, local map packs, and geo-targeted paid ads to drive customers to specific branches across Dubai, Abu Dhabi, and other emirates.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What industries do you specialize in for the Dubai market?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We specialize in healthcare practices, dental clinics, professional services, local service businesses, real estate, and high-ticket B2C brands looking for predictable lead acquisition.'
          }
        }
      ]
    },
    {
      '@type': 'Service',
      'name': 'Dubai Search Engine Optimization (SEO)',
      'serviceType': 'SEO Services',
      'provider': { '@id': 'https://growlimo.com/dubai/#localbusiness' },
      'areaServed': [
        { '@type': 'City', 'name': 'Dubai' },
        { '@type': 'Country', 'name': 'United Arab Emirates' }
      ],
      'description': 'Bespoke search engine optimization campaigns built to drive high-intent organic leads for UAE local brands.'
    },
    {
      '@type': 'Service',
      'name': 'Dubai Google Ads Management',
      'serviceType': 'Pay Per Click (PPC) Management',
      'provider': { '@id': 'https://growlimo.com/dubai/#localbusiness' },
      'areaServed': [
        { '@type': 'City', 'name': 'Dubai' },
        { '@type': 'Country', 'name': 'United Arab Emirates' }
      ],
      'description': 'ROI-focused Google Ads and search engine PPC marketing designed to reduce CPL.'
    }
  ]
};

export default function DubaiPage() {
  return <MarketLandingPage config={DUBAI_CONFIG} />;
}
