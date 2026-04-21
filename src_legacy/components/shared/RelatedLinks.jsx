import InternalLink from './InternalLink';
import { getInternalLinks, getRouteTitle } from '../../config/internalLinks';

/**
 * Related Links Section Component
 * Automatically displays related services, case studies, and blog posts
 *
 * @param {string} content - Page content for analysis
 * @param {string} type - Page type: 'blog', 'service', 'case-study'
 */
function RelatedLinks({ content, type }) {
  const links = getInternalLinks({ content, type });

  const hasLinks =
    links.services.length > 0 ||
    links.caseStudies.length > 0 ||
    links.blogs.length > 0;

  if (!hasLinks) return null;

  return (
    <section className="bg-dark border-t border-slate-800 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Related Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related Services */}
            {links.services.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {links.services.map((service) => (
                    <li key={service} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                      <InternalLink to={service} type="service">
                        {getRouteTitle(service)}
                      </InternalLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Case Studies */}
            {links.caseStudies.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Success Stories
                </h3>
                <ul className="space-y-3">
                  {links.caseStudies.map((caseStudy) => (
                    <li key={caseStudy} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <InternalLink to={caseStudy} type="case-study">
                        {getRouteTitle(caseStudy)}
                      </InternalLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Blog Posts */}
            {links.blogs.length > 0 && (
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Related Articles
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {links.blogs.map((blog) => (
                    <li key={blog} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <InternalLink to={blog} type="blog">
                        {blog.split('/').pop().replace(/-/g, ' ')}
                      </InternalLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-300 mb-4">
              Ready to grow your healthcare practice?
            </p>
            <InternalLink to="/contact" type="default">
              Get Your 30-Minute Lead Mapping Session →
            </InternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedLinks;
