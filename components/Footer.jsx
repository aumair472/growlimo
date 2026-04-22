import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-10">
          {/* Company Info & Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Grow</span>
              <span className="text-white">Limo</span>
            </h3>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              GrowLimo is a results-driven digital marketing agency serving
              businesses nationwide across the entire United States. SEO, Google
              Ads, PPC, social media & web design to grow your leads and
              revenue.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+17247506935" className="text-slate-300 hover:text-primary transition-colors">
                  US: +1 (724) 750-6935
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@growlimo.com" className="text-slate-300 hover:text-primary transition-colors">
                  info@growlimo.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-slate-300">
                  <p className="leading-snug">7917 Mountain Rd NE, Albuquerque, NM 87110</p>
                  <p className="mt-1 text-xs text-slate-400 flex items-center gap-1">
                    <span className="text-yellow-400">★★★★★</span> 5.0 on Google
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Texas General Column */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Texas General</h4>
            <ul className="space-y-2.5">
              <li><Link href="/seo-services-texas/" className="text-slate-400 hover:text-primary transition text-sm">SEO Services Texas</Link></li>
              <li><Link href="/digital-marketing-agency-texas/" className="text-slate-400 hover:text-primary transition text-sm">Digital Marketing Texas</Link></li>
              <li><Link href="/google-ads-management-texas/" className="text-slate-400 hover:text-primary transition text-sm">Google Ads Texas</Link></li>
              <li><Link href="/ppc-services-texas/" className="text-slate-400 hover:text-primary transition text-sm">PPC Services Texas</Link></li>
              <li><Link href="/social-media-marketing-services-texas/" className="text-slate-400 hover:text-primary transition text-sm">Social Media Texas</Link></li>
              <li><Link href="/facebook-ads-management-texas/" className="text-slate-400 hover:text-primary transition text-sm">Facebook Ads Texas</Link></li>
              <li><Link href="/meta-ads-agency-texas/" className="text-slate-400 hover:text-primary transition text-sm">Meta Ads Texas</Link></li>
              <li><Link href="/web-developer-texas/" className="text-slate-400 hover:text-primary transition text-sm">Web Developer Texas</Link></li>
              <li><Link href="/web-design-services-texas/" className="text-slate-400 hover:text-primary transition text-sm">Web Design Texas</Link></li>
              <li><Link href="/email-marketing-services-texas/" className="text-slate-400 hover:text-primary transition text-sm">Email Marketing Texas</Link></li>
            </ul>
          </div>

          {/* California General Column */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">California General</h4>
            <ul className="space-y-2.5">
              <li><Link href="/seo-services-california/" className="text-slate-400 hover:text-primary transition text-sm">SEO Services California</Link></li>
              <li><Link href="/digital-marketing-agency-california/" className="text-slate-400 hover:text-primary transition text-sm">Digital Marketing California</Link></li>
              <li><Link href="/google-ads-management-california/" className="text-slate-400 hover:text-primary transition text-sm">Google Ads California</Link></li>
              <li><Link href="/ppc-services-california/" className="text-slate-400 hover:text-primary transition text-sm">PPC Services California</Link></li>
              <li><Link href="/social-media-marketing-services-california/" className="text-slate-400 hover:text-primary transition text-sm">Social Media California</Link></li>
              <li><Link href="/facebook-ads-management-california/" className="text-slate-400 hover:text-primary transition text-sm">Facebook Ads California</Link></li>
              <li><Link href="/meta-ads-agency-california/" className="text-slate-400 hover:text-primary transition text-sm">Meta Ads California</Link></li>
              <li><Link href="/web-developer-california/" className="text-slate-400 hover:text-primary transition text-sm">Web Developer California</Link></li>
              <li><Link href="/web-design-services-california/" className="text-slate-400 hover:text-primary transition text-sm">Web Design California</Link></li>
              <li><Link href="/email-marketing-services-california/" className="text-slate-400 hover:text-primary transition text-sm">Email Marketing California</Link></li>
            </ul>
          </div>

          {/* Healthcare Column */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Healthcare</h4>
            <ul className="space-y-2.5">
              <li className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-1">Texas</li>
              <li><Link href="/healthcare-seo-services-texas/" className="text-slate-400 hover:text-primary transition text-sm">Healthcare SEO Texas</Link></li>
              <li><Link href="/healthcare-digital-marketing-agency-texas/" className="text-slate-400 hover:text-primary transition text-sm">Healthcare Agency Texas</Link></li>
              <li><Link href="/healthcare-google-ads-management-texas/" className="text-slate-400 hover:text-primary transition text-sm">Google Ads Texas</Link></li>
              <li><Link href="/healthcare-ppc-services-texas/" className="text-slate-400 hover:text-primary transition text-sm">PPC Services Texas</Link></li>
              <li><Link href="/healthcare-facebook-ads-management-texas/" className="text-slate-400 hover:text-primary transition text-sm">Facebook Ads Texas</Link></li>

              <li className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-2">California</li>
              <li><Link href="/healthcare-seo-services-california/" className="text-slate-400 hover:text-primary transition text-sm">Healthcare SEO California</Link></li>
              <li><Link href="/healthcare-digital-marketing-agency-california/" className="text-slate-400 hover:text-primary transition text-sm">Healthcare Agency California</Link></li>
              <li><Link href="/healthcare-google-ads-management-california/" className="text-slate-400 hover:text-primary transition text-sm">Google Ads California</Link></li>
              <li><Link href="/healthcare-ppc-services-california/" className="text-slate-400 hover:text-primary transition text-sm">PPC Services California</Link></li>
              <li><Link href="/healthcare-facebook-ads-management-california/" className="text-slate-400 hover:text-primary transition text-sm">Facebook Ads California</Link></li>
            </ul>
          </div>

          {/* Dentist Column */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Dentist</h4>
            <ul className="space-y-2.5">
              <li className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-1">Texas</li>
              <li><Link href="/dentist-seo-services-texas/" className="text-slate-400 hover:text-primary transition text-sm">Dentist SEO Texas</Link></li>
              <li><Link href="/dentist-digital-marketing-agency-texas/" className="text-slate-400 hover:text-primary transition text-sm">Dentist Agency Texas</Link></li>
              <li><Link href="/dentist-google-ads-management-texas/" className="text-slate-400 hover:text-primary transition text-sm">Google Ads Texas</Link></li>
              <li><Link href="/dentist-ppc-services-texas/" className="text-slate-400 hover:text-primary transition text-sm">PPC Services Texas</Link></li>
              <li><Link href="/dentist-facebook-ads-management-texas/" className="text-slate-400 hover:text-primary transition text-sm">Facebook Ads Texas</Link></li>

              <li className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-2">California</li>
              <li><Link href="/dentist-seo-services-california/" className="text-slate-400 hover:text-primary transition text-sm">Dentist SEO California</Link></li>
              <li><Link href="/dentist-digital-marketing-agency-california/" className="text-slate-400 hover:text-primary transition text-sm">Dentist Agency California</Link></li>
              <li><Link href="/dentist-google-ads-management-california/" className="text-slate-400 hover:text-primary transition text-sm">Google Ads California</Link></li>
              <li><Link href="/dentist-ppc-services-california/" className="text-slate-400 hover:text-primary transition text-sm">PPC Services California</Link></li>
              <li><Link href="/dentist-facebook-ads-management-california/" className="text-slate-400 hover:text-primary transition text-sm">Facebook Ads California</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons + Copyright */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-slate-400 text-sm">
                &copy; {currentYear} GrowLimo. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <Link href="/privacy-policy/" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <span>|</span>
                <Link href="/terms-and-conditions/" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/growlimo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/people/GrowLimo/61581846653070/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/growlimo/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@growlimo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
