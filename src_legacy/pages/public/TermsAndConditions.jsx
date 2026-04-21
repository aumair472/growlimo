import React from 'react';
import { Link } from 'react-router-dom';
import { getSEOConfig } from '../../config/seoConfig';
import SEO from '../../components/seo/SEO';
import StructuredData from '../../components/seo/StructuredData';
import { createBreadcrumbSchema } from '../../utils/schema';

const TermsAndConditions = () => {
  const seo = getSEOConfig('/terms-and-conditions');

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
          { name: 'Terms and Conditions', url: '/terms-and-conditions' },
        ])}
      />

      <div className="container mx-auto max-w-4xl px-4 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          {seo.h1}
        </h1>
        <p className="text-slate-500 mb-12">Effective Date: March 15, 2026</p>

        <div className="glass-card p-8 md:p-12 border border-slate-700/50 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-300">
              By accessing and using <Link to="/" className="text-primary hover:underline font-semibold">growlimo.com</Link>, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              2. Services Provided
            </h2>
            <p className="text-slate-300">
              GrowLimo provides digital marketing services, including but not
              limited to SEO, PPC, social media management, and web design. All
              services are subject to a separate service agreement where
              applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-slate-300">
              The content, graphics, design, and other materials on this website
              are protected by intellectual property laws. You may not use,
              reproduce, or distribute any part of this site without our express
              written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-slate-300">
              GrowLimo will not be liable for any indirect, incidental, or
              consequential damages resulting from the use or inability to use
              our services or website. Marketing results may vary based on
              market conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              5. Governing Law
            </h2>
            <p className="text-slate-300">
              These terms are governed by the laws of the State of California,
              United States, without regard to its conflict of law principles.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
