import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import StructuredData from '../../components/seo/StructuredData';
import caseStudiesData from '../../data/caseStudies.json';

function CaseStudyDetail() {
  const { slug } = useParams();
  const caseStudy = caseStudiesData.caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Case Study Not Found
        </h1>
        <Link to="/case-studies" className="text-primary hover:text-accent">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* SEO */}
      <SEO
        title={caseStudy.seo.title}
        description={caseStudy.seo.description}
        canonical={`https://growlimo.com/case-studies/${caseStudy.slug}`}
        robots="index, follow"
      />

      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: caseStudy.title,
          description: caseStudy.seo.description,
          image: `https://growlimo.com${caseStudy.image}`,
          author: { '@type': 'Organization', name: 'GrowLimo' },
          publisher: {
            '@type': 'Organization',
            name: 'GrowLimo',
            url: 'https://growlimo.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://growlimo.com/logo.png',
            },
          },
          datePublished: caseStudy.publishedAt,
          mainEntityOfPage: `https://growlimo.com/case-studies/${caseStudy.slug}`,
        }}
      />

      {/* Hero */}
      <section className="bg-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-slate-400 hover:text-primary mb-6 transition group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Case Studies
            </Link>

            {/* Meta Tags */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400 mb-4">
              <span>
                <strong className="text-slate-300">Industry:</strong>{' '}
                {caseStudy.industry}
              </span>
              <span>
                <strong className="text-slate-300">Location:</strong>{' '}
                {caseStudy.location}
              </span>
              <span>
                <strong className="text-slate-300">Services:</strong>{' '}
                {caseStudy.services}
              </span>
              <span>
                <strong className="text-slate-300">Timeline:</strong>{' '}
                {caseStudy.timeline}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              {caseStudy.title}
            </h1>

            {/* Hero Image */}
            {caseStudy.image && (
              <div className="rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-primary/10 mb-8">
                <img
                  src={caseStudy.image}
                  alt={`${caseStudy.title} — Google Ads performance results`}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Metrics Highlight Box */}
      {caseStudy.metricsBox && (
        <section className="bg-dark text-white py-8 border-y border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-6 md:p-8 border-l-4 border-primary/60">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                  {caseStudy.metricsBox.title}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {caseStudy.metricsBox.items.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        {item.value}
                      </div>
                      <div className="text-xs text-slate-400 leading-tight">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="bg-dark text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {caseStudy.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {section.heading}
                </h2>

                {/* Paragraphs */}
                {section.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="text-slate-300 text-base leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}

                {/* Bullets */}
                {section.bullets && (
                  <ul className="space-y-3 mb-4">
                    {section.bullets.map((bullet, k) => {
                      const colonIndex = bullet.indexOf(':');
                      const hasLabel = colonIndex > 0 && colonIndex < 50;
                      return (
                        <li
                          key={k}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <svg
                            className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>
                            {hasLabel ? (
                              <>
                                <strong className="text-white">
                                  {bullet.substring(0, colonIndex + 1)}
                                </strong>
                                {bullet.substring(colonIndex + 1)}
                              </>
                            ) : (
                              bullet
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Closing paragraph */}
                {section.closing && (
                  <div className="glass-card p-5 border-l-4 border-primary/50 mt-4">
                    <p className="text-slate-200 text-base font-medium leading-relaxed">
                      {section.closing}
                    </p>
                  </div>
                )}
              </div>
            ))}
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
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Book a 30-minute lead mapping session and get a custom strategy
              tailored to your practice.
            </p>

            <Link
              to={caseStudy.cta.link}
              className="group relative inline-flex items-center justify-center bg-primary hover:bg-accent text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 text-lg shadow-lg shadow-primary/30 mb-8"
              aria-label={caseStudy.cta.text}
            >
              <span className="relative z-10">{caseStudy.cta.text}</span>
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
    </>
  );
}

export default CaseStudyDetail;
