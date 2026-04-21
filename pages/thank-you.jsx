import SEO from '../components/SEO';

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You | GrowLimo"
        description="Your message has been received. We'll be in touch shortly."
        url="https://growlimo.com/thank-you/"
        noindex={true}
      />

      <section className="bg-dark text-white min-h-[70vh] flex items-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary text-4xl mx-auto mb-8">
              ✓
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success! Your Roadmap is Coming.</h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Thank you for reaching out. One of our growth specialists will review your practice data and contact you within 24 hours to schedule your strategy session.
            </p>
            <Link href="/" className="btn-primary inline-block px-10 py-4 rounded-xl font-bold text-lg">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
