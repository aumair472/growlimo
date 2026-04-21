import React from 'react';
import { Link } from 'react-router-dom';
import { getSEOConfig } from '../../config/seoConfig';
import SEO from '../../components/seo/SEO';
import StructuredData from '../../components/seo/StructuredData';
import { createBreadcrumbSchema } from '../../utils/schema';

const PrivacyPolicy = () => {
  const seo = getSEOConfig('/privacy-policy');

  return (
    <div className="bg-dark min-h-screen pt-24 pb-16 text-white leading-relaxed">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        keywords={seo.keywords}
      />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy' },
        ])}
      />

      <div className="container mx-auto max-w-4xl px-4 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{seo.h1}</h1>
        <p className="text-slate-500 mb-12">Last Updated: March 15, 2026</p>

        <div className="glass-card p-8 md:p-12 border border-slate-700/50 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Commitment to Privacy</h2>
            <p className="text-slate-300">
              At <Link to="/" className="text-primary hover:underline font-semibold">GrowLimo</Link>, we are committed to protecting your privacy and ensuring the security of any personal information you share with us. This Privacy Policy outlines our practices regarding information collection, usage, and protection across our digital marketing services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Information Collection</h2>
            <p className="text-slate-300 mb-4">
              We collect information to provide better services to all our users. The types of personal information we collect include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Name and contact details (email, phone number).</li>
              <li>Business and website information for audit purposes.</li>
              <li>Technical data via cookies and tracking technologies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Data Usage</h2>
            <p className="text-slate-300">
              Your data is used to personalize your experience, improve our website, and provide effective marketing strategies. We do not sell your data to third parties. We use industry-standard encryption to protect your sensitive information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. GDPR & CCPA Compliance</h2>
            <p className="text-slate-300">
              We comply with international and local data protection regulations, including GDPR for European users and CCPA for California residents, providing you with transparency and control over your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Contact Information</h2>
            <p className="text-slate-300">
              For any privacy-related inquiries, please contact our compliance team at privacy@growlimo.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
