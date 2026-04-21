import SEO from '../../components/seo/SEO';
import StructuredData from '../../components/seo/StructuredData';
import { getSEOConfig } from '../../config/seoConfig';
import BlogList from '../../components/blog/BlogList';
import {
  createBreadcrumbSchema,
  createWebsiteSchema,
} from '../../utils/schema';

function Blog() {
  const seo = getSEOConfig('/blog');
  const schemaGraph = [
    createWebsiteSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Digital Marketing Blog | Expert SEO & Lead Acquisition Tips',
      description:
        'Expert digital marketing insights, SEO strategies, and lead acquisition tips from Growlimo. Learn from proven case studies and industry best practices.',
      url: `${import.meta.env.VITE_SITE_URL || 'https://growlimo.com'}/blog`,
      isPartOf: { '@id': 'https://growlimo.com/#website' },
      mainEntity: {
        '@type': 'Blog',
        name: 'Growlimo Digital Marketing Blog',
        description:
          'Digital marketing insights, tips, and strategies for businesses and professionals.',
        publisher: { '@id': 'https://growlimo.com/#organization' },
      },
    },
    createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
    ]),
  ];

  return (
    <>
      <SEO robots="index, follow" />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': schemaGraph,
        }}
      />
      <section className="bg-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center max-w-4xl mx-auto leading-tight">
            {seo.h1}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Stay ahead in the digital landscape with expert insights, proven
            strategies, and actionable tips to grow your business. Our blog
            covers SEO, compliant Google Ads, lead acquisition, brand
            management, and the latest trends in digital marketing.
          </p>

          <BlogList />
        </div>
      </section>
    </>
  );
}

export default Blog;
