import { getSEOConfig } from '../lib/config';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function About() {
  const seo = getSEOConfig('/about');

  return (
    <div className="bg-dark min-h-screen pt-8 pb-16 text-white overflow-hidden">
      <SEO
        title={seo.title}
        description={seo.description}
        url="https://www.growlimo.com/about/"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-48 h-48 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-10 leading-[1.15] tracking-tight">
            {seo.h1}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            GrowLimo is a premier digital marketing agency dedicated to scaling
            businesses nationwide through data-driven SEO, ROI-focused PPC, and
            modern web solutions.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { label: 'Revenue Growth', value: '210%', color: 'text-primary' },
            { label: 'Successful Clients', value: '500+', color: 'text-white' },
            { label: 'Leads Generated', value: '180k+', color: 'text-primary' },
            { label: 'USA Experts', value: '100%', color: 'text-white' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card p-8 text-center border border-slate-700/50"
            >
              <div
                className={`text-3xl md:text-5xl font-extrabold mb-2 ${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto max-w-5xl px-4 py-20">
        <div className="glass-card p-10 md:p-16 border border-slate-700/50">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
            <p>
              In a digital landscape where attention is the new currency,
              GrowLimo stands at the forefront of business expansion. We don't
              just provide services; we build high-performance marketing
              ecosystems that turn clicks into revenue.
            </p>
            <p>
              Founded on the principles of transparency, security, and velocity,
              we eliminate the guesswork from digital growth. Our team utilizes
              proprietary intent-mapping and data analytics to ensure your brand
              dominates search results and attracts your ideal customers.{' '}
              <Link href="/contact" className="text-primary hover:underline">
                Talk to our experts
              </Link>{' '}
              today to start your journey.
            </p>
            <p>
              Based in the USA and serving clients across all 50 states, we
              pride ourselves on being a partner in your long-term success,
              adapting our strategies to the ever-evolving digital world.{' '}
              <Link href="/case-studies" className="text-primary hover:underline">
                View our performance results
              </Link>{' '}
              to see how we scale businesses like yours.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto max-w-7xl px-4 py-20 border-t border-slate-800/50">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'SEO Services',
              desc: 'Nationwide SEO to dominate Google search and beat your local and national competitors.',
              link: '/seo-services-california/',
              label: 'Explore SEO Solutions',
            },
            {
              title: 'Google Ads',
              desc: 'High-ROI PPC campaigns targeted to your most profitable keywords.',
              link: '/google-ads-management-california/',
              label: 'View PPC Strategy',
            },
            {
              title: 'Web Design',
              desc: 'Beautiful, high-speed websites designed to convert visitors into customers.',
              link: '/web-design-services-california/',
              label: 'Modern Web Presence',
            },
            {
              title: 'Social Media',
              desc: 'Strategic social ads and engagement to grow your brand nationwide.',
              link: '/facebook-ads-management-california/',
              label: 'Social Growth',
            },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{item.desc}</p>
              <Link
                href={item.link}
                className="text-primary hover:text-accent font-semibold text-sm transition-colors flex items-center gap-1 group"
              >
                {item.label}
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* HUB SERVICES section */}
      <section className="bg-dark text-white py-12 border-t border-slate-800" aria-labelledby="hub-heading">
        <div className="container mx-auto px-4">
          <h2 id="hub-heading" className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">Accelerate Your Growth in Key Markets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { name: 'Healthcare Marketing CA', link: '/healthcare-digital-marketing-agency-california/' },
              { name: 'Healthcare Marketing TX', link: '/healthcare-digital-marketing-agency-texas/' },
              { name: 'Dentist Marketing CA', link: '/dentist-digital-marketing-agency-california/' },
              { name: 'Dentist Marketing TX', link: '/dentist-digital-marketing-agency-texas/' },
              { name: 'Healthcare SEO CA', link: '/healthcare-seo-services-california/' },
              { name: 'Healthcare SEO TX', link: '/healthcare-seo-services-texas/' },
              { name: 'Dentist SEO CA', link: '/dentist-seo-services-california/' },
              { name: 'Dentist SEO TX', link: '/dentist-seo-services-texas/' },
              { name: 'California SEO', link: '/seo-services-california/' },
              { name: 'Texas SEO', link: '/seo-services-texas/' },
              { name: 'Google Ads CA', link: '/google-ads-management-california/' },
              { name: 'Google Ads TX', link: '/google-ads-management-texas/' },
              { name: 'Marketing Case Studies', link: '/case-studies/' },
              { name: 'About Us', link: '/about/' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className={`glass-card p-4 text-center hover:text-primary transition-colors text-sm font-semibold ${item.name === 'About Us' ? 'border-primary/50 text-primary' : ''}`}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="glass-card p-12 md:p-20 text-center border-primary/20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Ready to Dominate Your Market?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-accent text-slate-950 font-bold py-4 px-10 rounded-xl transition transform hover:scale-105 shadow-lg shadow-primary/30 inline-block"
            >
              Get Your Free Audit
            </Link>
            <Link
              href="/case-studies"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-10 rounded-xl transition border border-slate-600 inline-block"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
