import MarketLandingPage from '../components/MarketLandingPage';

const AUSTRALIA_CONFIG = {
  market: 'australia',
  metaTitle: 'Digital Marketing Agency Australia | SEO & Google Ads | GrowLimo',
  metaDescription: 'GrowLimo helps Australian businesses grow with SEO, Google Ads, Meta Ads & web design. Transparent reporting, no lock-in contracts. Book a free call.',
  canonicalUrl: 'https://growlimo.com/australia/',
  
  heroTitle: {
    leading: 'Digital Marketing Agency Australia',
    highlight: 'Businesses Rely On'
  },
  heroSubhead: "SEO, Google Ads, Meta Ads, and web design that turn traffic into leads — transparent reporting, no lock-in contracts.",
  heroCtaPrimary: 'Book a Free Strategy Call',
  heroCtaSecondary: 'See Our Results',
  trustBarText: 'Trusted by businesses across Sydney, Melbourne, Brisbane & nationwide',
  whatsapp: '+61 437 470 201',
  whatsappMessage: "Hi GrowLimo, I'm interested in your digital marketing services for Australia.",
  
  metrics: [
    { value: '670+', prefix: '', suffix: '', label: 'Leads Generated (US)' },
    { value: '17x', prefix: '', suffix: '', label: 'ROAS (US Case Study)' },
    { value: '$2.3M+', prefix: '', suffix: '', label: 'Tracked Revenue (US)' }
  ],
  metricsDisclaimer: 'Proven US client results — now bringing the same performance standards to Australia.',
  
  problemSectionTitle: 'Why Businesses Across Australia Choose GrowLimo',
  problems: [
    { title: 'Poor Rank Search Intent', desc: "Your business isn't ranking for the searches your customers are actually making." },
    { title: 'Lock-in Contracts', desc: "You're locked into long contracts with agencies that don't deliver measurable results." },
    { title: 'Vague Agency Reporting', desc: "You're paying agency retainers with vague reporting and no clear ROI or profit tracking." },
    { title: 'Wasted Click Costs', desc: "Your Google/Meta Ads spend is being wasted on clicks that don't convert to real leads." },
    { title: 'Dated Website Design', desc: "Your website looks dated next to competitors investing in modern, conversion-focused design." }
  ],
  solutions: [
    { title: 'Intent-Mapped Suburb SEO', desc: "Rank where customers search — targeting bottom-funnel keyword intent in local suburbs." },
    { title: 'No Lock-in Contracts', desc: "Flexible month-to-month contracts. We earn your business every month through performance." },
    { title: 'Transparent Profit Tracking', desc: "A dashboard linking every dollar spent directly to patient calls, leads, and client revenue." },
    { title: 'High-ROI Campaign Silos', desc: "We structure keyword match types and ad copies to filter out junk and capture active buyers." },
    { title: 'CRO-Optimized Web Design', desc: "Custom web development built to load fast, satisfy SEO crawlers, and drive lead capture." }
  ],
  
  servicesSectionTitle: 'Digital Marketing Services Australia',
  services: [
    {
      title: 'SEO Services Australia Businesses Use to Rank Higher',
      desc: 'Data-driven SEO for Sydney, Melbourne, Brisbane, and nationwide — technical fixes, content that targets buyer-intent keywords, and local SEO that gets you found in the suburbs your customers search from.',
      bullets: [
        'Technical SEO audits & fixes',
        'Local SEO across every major city',
        'Content strategy built on real search intent',
        'White-hat link building & authority growth'
      ],
      ctaText: 'Get Your Free SEO Audit'
    },
    {
      title: 'Google Ads Management Australia',
      desc: 'Google Ads campaigns engineered to lower cost-per-lead and scale what\'s already working — no vanity metrics, just leads and revenue.',
      bullets: [
        'Campaign structure & keyword strategy',
        'Landing page alignment',
        'Conversion tracking (GA4 + Search Console)',
        'Transparent monthly reporting'
      ],
      ctaText: 'Get a Free Ads Account Review'
    },
    {
      title: 'Meta Ads Agency Australia',
      desc: 'Facebook and Instagram advertising that turns scroll-stopping creative into booked calls and completed checkouts.',
      bullets: [
        'Audience research & targeting',
        'Creative strategy & ad production',
        'Retargeting funnels',
        'ROAS-focused optimization'
      ],
      ctaText: 'Talk to a Meta Ads Specialist'
    },
    {
      title: 'Web Design Services Australia',
      desc: 'Websites built to load fast, rank well, and convert visitors — no templated agency filler, just a site engineered around your customer journey.',
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
    { title: 'No Lock-in Contracts', desc: 'We earn your business month-to-month through clear growth performance, not restrictive agreements.' },
    { title: 'Transparent ROI-Focused Reporting', desc: 'Get a custom dashboard tracking revenue and leads, not just clicks. No vanity metrics or hidden fees.' },
    { title: 'Direct Access to Specialists', desc: 'Communicate directly with the senior digital specialists doing the work, not account managers.' },
    { title: 'Generative Engine Optimization', desc: 'We optimize your brand entities to appear in AI search engines (Gemini, ChatGPT, Perplexity).' },
    { title: 'Unified Omnichannel Growth', desc: 'Your SEO, Google Ads, Meta Ads, and web design operate as one interconnected conversion engine.' }
  ],
  
  process: [
    { step: '1', title: 'Discovery Call', desc: 'We discuss your business objectives, current bottlenecks, and target markets.' },
    { step: '2', title: 'Deep-Dive Audit', desc: 'Our team analyzes your organic SEO, ad historical data, and competitor gaps.' },
    { step: '3', title: 'Campaign Launch', desc: 'We build your funnels, optimize local profiles, and set up ad silos.' },
    { step: '4', title: 'Optimize & Scale', desc: 'Weekly checks and A/B split testing to continually reduce CPL and maximize revenue.' }
  ],
  
  caseStudiesTitle: 'Proven US Client Success Stories',
  caseStudiesIntro: 'We are extending our proven track record of scaling businesses in competitive US markets directly to Australia. See how our data-driven approach works:',
  
  pricing: {
    title: 'GrowLimo Service Packages',
    intro: 'Predictable growth investments scaled to your business stage. Ad spend (Google/Meta budget) is separate from our management fee. [CONFIRM PRICING WITH UMAIR]',
    packages: [
      {
        name: 'Starter Package',
        desc: 'Single-channel focus (SEO or Google Ads), local SEO, and monthly reporting. Best for single-location small businesses.',
        price: 'AUD 1,500–3,000/mo',
        bullets: [
          'Estimated ~US$975–1,950/mo equivalent',
          'Single-channel focus (SEO OR Google Ads)',
          'Local citation building & Google Maps optimization',
          'Standard monthly performance reporting',
          'No lock-in contract'
        ]
      },
      {
        name: 'Growth Package',
        desc: 'Multi-channel strategy (SEO + Google Ads + Meta Ads), content strategy, and conversion tracking. Sized for growing businesses.',
        popular: true,
        price: 'AUD 3,000–8,000/mo',
        bullets: [
          'Estimated ~US$1,950–5,200/mo equivalent',
          'Multi-channel focus (SEO + Google/Meta Ads)',
          'Advanced conversion tracking & keyword strategy',
          'Ongoing content creation & landing page CRO',
          'No lock-in contract'
        ]
      },
      {
        name: 'Full-Funnel Package',
        desc: 'Full-channel integration, CRM/lead-scoring automation. Suited to multi-location or competitive industries.',
        price: 'AUD 8,000–15,000+/mo',
        bullets: [
          'Estimated ~US$5,200–9,750+/mo equivalent',
          'SEO + Google Ads + Meta Ads + Custom Web Design',
          'CRM lead-scoring & advanced automation',
          'Priority senior strategist support',
          'No lock-in contract'
        ]
      }
    ]
  },
  
  faqs: [
    {
      q: 'Do you work with businesses across all of Australia, or just Sydney/Melbourne?',
      a: 'We work with businesses across all states and major cities, including Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Hobart, and regional hubs.'
    },
    {
      q: 'How much does a digital marketing agency in Australia typically cost?',
      a: 'Pricing varies based on service depth. We offer transparent packages in AUD (with USD equivalents in parentheses) starting at AUD 1,500 to AUD 15,000+/month (roughly equivalent to US$975–$9,750+/mo). [CONFIRM PRICING WITH UMAIR]'
    },
    {
      q: 'Is ad spend included in your management fee?',
      a: 'No, ad spend is paid directly to the advertising platforms (Google, Meta) and is entirely separate from our monthly management fee. This ensures complete transparency with no hidden markup on your actual ad spend budget.'
    },
    {
      q: 'How long does SEO take to show results in Australia?',
      a: 'Initial technical fixes and Google Business Profile optimizations typically produce movement in 30-60 days. Major keyword rankings compound over 3-6 months.'
    },
    {
      q: 'Do you require long-term contracts?',
      a: 'No, we operate on flexible, month-to-month contracts. We believe in earning your business through performance, not locking you in.'
    },
    {
      q: 'Can you manage Google Ads and Meta Ads together as one strategy?',
      a: 'Yes, we specialize in cross-channel paid acquisition. Combining Google Search Ads and Meta Social Ads maximizes your reach and lowers overall CPL.'
    },
    {
      q: 'What industries do you specialize in for the Australian market?',
      a: 'We specialize in healthcare practices, dental clinics, trade companies, professional services, local service businesses, and high-growth eCommerce brands.'
    }
  ],
  
  finalCtaHeadline: 'Ready to Grow Your Australian Business Predictably?',
  finalCtaSubhead: 'Book a free 30-minute strategy session. Let\'s build a data-driven marketing plan that turns clicks into revenue.',
  
  schema: [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://growlimo.com/australia/#localbusiness',
      'name': 'GrowLimo',
      'url': 'https://growlimo.com/australia/',
      'areaServed': [
        { '@type': 'Country', 'name': 'Australia' },
        { '@type': 'City', 'name': 'Sydney' },
        { '@type': 'City', 'name': 'Melbourne' },
        { '@type': 'City', 'name': 'Brisbane' }
      ],
      'description': 'Digital marketing agency offering SEO, Google Ads, Meta Ads, and web design services in Australia.',
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
      '@id': 'https://growlimo.com/australia/#breadcrumb',
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
          'name': 'Australia Services',
          'item': 'https://growlimo.com/australia/'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://growlimo.com/australia/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Do you work with businesses across all of Australia, or just Sydney/Melbourne?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We work with businesses across all states and major cities, including Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, Hobart, and regional hubs.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How much does a digital marketing agency in Australia typically cost?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pricing varies based on service depth. We offer transparent packages in AUD (with USD equivalents in parentheses) starting at AUD 1,500 to AUD 15,000+/month (roughly equivalent to US$975–$9,750+/mo). [CONFIRM PRICING WITH UMAIR]'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is ad spend included in your management fee?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No, ad spend is paid directly to the advertising platforms (Google, Meta) and is entirely separate from our monthly management fee. This ensures complete transparency with no hidden markup on your actual ad spend budget.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How long does SEO take to show results in Australia?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Initial technical fixes and Google Business Profile optimizations typically produce movement in 30-60 days. Major keyword rankings compound over 3-6 months.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do you require long-term contracts?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No, we operate on flexible, month-to-month contracts. We believe in earning your business through performance, not locking you in.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can you manage Google Ads and Meta Ads together as one strategy?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, we specialize in cross-channel paid acquisition. Combining Google Search Ads and Meta Social Ads maximizes your reach and lowers overall CPL.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What industries do you specialize in for the Australian market?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We specialize in healthcare practices, dental clinics, trade companies, professional services, local service businesses, and high-growth eCommerce brands.'
          }
        }
      ]
    },
    {
      '@type': 'Service',
      'name': 'Australia Search Engine Optimization (SEO)',
      'serviceType': 'SEO Services',
      'provider': { '@id': 'https://growlimo.com/australia/#localbusiness' },
      'areaServed': { '@id': 'https://growlimo.com/australia/#localbusiness' },
      'description': 'Search engine optimization campaigns targeted to local suburb markets across Sydney, Melbourne, Brisbane, and Australia-wide.'
    },
    {
      '@type': 'Service',
      'name': 'Australia Google Ads Management',
      'serviceType': 'Pay Per Click (PPC) Management',
      'provider': { '@id': 'https://growlimo.com/australia/#localbusiness' },
      'areaServed': { '@id': 'https://growlimo.com/australia/#localbusiness' },
      'description': 'ROI-focused Google Ads management designed to scale qualified leads while reducing overall CPL.'
    }
  ]
};

export default function AustraliaPage() {
  return <MarketLandingPage config={AUSTRALIA_CONFIG} />;
}
