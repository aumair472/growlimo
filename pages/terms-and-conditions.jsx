import SEO from '../components/SEO';
import { getSEOConfig } from '../lib/config';
import Link from 'next/link';

export default function TermsAndConditions() {
  const seo = getSEOConfig('/terms-and-conditions');

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url={seo.canonical}
      />

      <div className="bg-dark text-white py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{seo.h1}</h1>
          <p className="text-slate-500 mb-12">Effective Date: March 15, 2026</p>

          <div className="glass-card p-8 md:p-12 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-300">
                By accessing and using growlimo.com, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Services Provided</h2>
              <p className="text-slate-300">
                GrowLimo provides digital marketing services, including but not limited to SEO, PPC, social media management, and web design. All services are subject to a separate service agreement where applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Intellectual Property</h2>
              <p className="text-slate-300">
                The content, graphics, design, and other materials on this website are protected by intellectual property laws. You may not use, reproduce, or distribute any part of this site without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Limitation of Liability</h2>
              <p className="text-slate-300">
                GrowLimo will not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services or website. Marketing results may vary based on market conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Governing Law</h2>
              <p className="text-slate-300">
                These terms are governed by the laws of the State of Delaware, United States, without regard to its conflict of law principles.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
