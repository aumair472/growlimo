import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import StructuredData from '../../components/seo/StructuredData';
import { getSEOConfig } from '../../config/seoConfig';
import CaseStudyCard from '../../components/cases/CaseStudyCard';
import caseStudiesData from '../../data/caseStudies.json';

const { caseStudies } = caseStudiesData;

function CaseStudies() {
  const seo = getSEOConfig('/case-studies');
  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
        robots="index, follow" 
      />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Digital Marketing Case Studies',
          url: 'https://growlimo.com/case-studies',
          description:
            'Real digital marketing success stories showing proven ROI and lead generation results for businesses across the United States.',
          isPartOf: { '@id': 'https://growlimo.com/#website' },
          publisher: { '@id': 'https://growlimo.com/#organization' },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: caseStudies.map((cs, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Article',
                name: cs.title,
                url: `https://growlimo.com/case-studies/${cs.slug}`,
                description: cs.summary || cs.title,
              },
            })),
          },
        }}
      />

      {/* Hero Section */}
      <section className="bg-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-48 h-48 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">{seo.h1}</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              See how Growlimo has helped businesses across the United States
              dramatically increase lead volume and achieve predictable revenue
              growth through data-driven digital marketing campaigns. Our{' '}
              <Link to="/healthcare-digital-marketing-agency-california" className="text-primary hover:underline">
                Healthcare Marketing Result
              </Link>{' '}
              demonstrates the impact of our specialized strategies.
            </p>

            {/* Results Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: '1,000+', label: 'Qualified Leads Generated' },
                { value: '12.9%', label: 'Avg. Conversion Rate' },
                { value: '17x', label: 'Highest ROAS Achieved' },
                { value: '$215K+', label: 'Revenue Generated' },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-dark text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* HUB SERVICES section - Same as Homepage */}
      <section className="bg-dark text-white py-12 border-t border-slate-800" aria-labelledby="hub-heading">
        <div className="container mx-auto px-4">
          <h2 id="hub-heading" className="text-2xl md:text-3xl font-bold text-center mb-10">Accelerate Your Growth in Key Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <Link to="/healthcare-digital-marketing-agency-california/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Healthcare Marketing CA</Link>
            <Link to="/healthcare-digital-marketing-agency-texas/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Healthcare Marketing TX</Link>
            <Link to="/dentist-digital-marketing-agency-california/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Dentist Marketing CA</Link>
            <Link to="/dentist-digital-marketing-agency-texas/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Dentist Marketing TX</Link>
            <Link to="/healthcare-seo-services-california/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Healthcare SEO CA</Link>
            <Link to="/healthcare-seo-services-texas/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Healthcare SEO TX</Link>
            <Link to="/dentist-seo-services-california/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Dentist SEO CA</Link>
            <Link to="/dentist-seo-services-texas/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Dentist SEO TX</Link>
            <Link to="/seo-services-california/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">California SEO</Link>
            <Link to="/seo-services-texas/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Texas SEO</Link>
            <Link to="/google-ads-management-california/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Google Ads CA</Link>
            <Link to="/google-ads-management-texas/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">Google Ads TX</Link>
            <Link to="/case-studies/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold border-primary/50 text-primary">Marketing Case Studies</Link>
            <Link to="/about/" className="glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold">About Us</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Book your{' '}
              <Link to="/contact" className="text-primary hover:underline">
                free digital marketing audit
              </Link>{' '}
              and get a custom growth roadmap.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center bg-primary hover:bg-accent text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 text-lg shadow-lg shadow-primary/30 mb-8"
            >
              <span className="relative z-10">
                Schedule 30-Minute Lead Mapping Session
              </span>
              <div className="absolute inset-0 rounded-xl bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300">
              <a
                href="tel:+17247506935"
                className="hover:text-primary transition-colors"
              >
                <strong>US:</strong> +1 (724) 750-6935
              </a>
              <a
                href="mailto:info@growlimo.com"
                className="hover:text-primary transition-colors"
              >
                info@growlimo.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CaseStudies;
