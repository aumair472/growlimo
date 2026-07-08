import { getSEOConfig } from '../lib/config';
import Link from 'next/link';
import SEO from '../components/SEO';
import { useCountUp } from '../hooks/useCountUp';

function AnimatedStat({ value, suffix = '', prefix = '', label, showDivider = true }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const [count, ref] = useCountUp(numericValue);

  return (
    <div ref={ref} className={`flex flex-col items-center w-full text-center px-6 ${showDivider ? 'border-b lg:border-b-0 lg:border-r border-white/7 pb-6 lg:pb-0' : ''}`}>
      <span className="text-[44px] md:text-[56px] font-extrabold font-sora text-[#00C68A] leading-none">
        {prefix}{count}{suffix}
      </span>
      <span className="text-[13px] text-[#8FA8C8] font-sans font-semibold mt-3 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const seo = getSEOConfig('/about');

  return (
    <>
      <SEO
        title={seo.title || 'About Us | GrowLimo'}
        description={seo.description || 'Learn about GrowLimo, a premier digital marketing agency.'}
        url="https://growlimo.com/about/"
      />

      <div className="bg-[#080D18] text-white">

        {/* 1. HERO SECTION (dark #080D18) */}
        <section className="bg-[#080D18] pt-[140px] pb-16 relative overflow-hidden" aria-labelledby="about-heading">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00C68A]/5 rounded-full blur-3xl pointer-events-none z-0"></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-4 font-sans">
              ABOUT US
            </span>
            <h1
              id="about-heading"
              className="text-4xl md:text-5xl lg:text-[56px] font-extrabold mb-5 leading-tight text-white font-sora tracking-tight max-w-4xl mx-auto"
            >
              {seo.h1 || 'GrowLimo Core Marketing Team'}
            </h1>
            <p className="text-[#8FA8C8] text-base md:text-[18px] max-w-2xl mx-auto font-sans leading-relaxed">
              GrowLimo is a premier digital marketing agency dedicated to scaling
              businesses nationwide through data-driven SEO, ROI-focused PPC, and
              modern web solutions.
            </p>
          </div>
        </section>

        {/* 2. STATS ROW (dark #0C1220) */}
        <section className="bg-[#0C1220] py-14 border-t border-b border-white/5 relative z-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0 items-center justify-center">
              <AnimatedStat prefix="" value="713" suffix="%" label="Avg. Revenue Growth" showDivider={true} />
              <AnimatedStat prefix="$" value="25" suffix="M+" label="Client Revenue Won" showDivider={true} />
              <AnimatedStat prefix="" value="10" suffix="+" label="Years Experience" showDivider={false} />
            </div>
          </div>
        </section>

        {/* 3. MISSION SECTION (dark #080D18) */}
        <section className="bg-[#080D18] py-[96px] relative z-10" aria-labelledby="mission-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-[#1A2438] border border-white/8 rounded-[16px] p-8 md:p-12 shadow-2xl">
              <h2 id="mission-heading" className="text-3xl md:text-[40px] font-bold font-sora mb-8 text-white text-center">
                Our Mission
              </h2>
              <div className="space-y-6 text-base md:text-[17px] text-[#8FA8C8] leading-relaxed font-sans font-normal">
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
                  <Link href="/contact/" className="text-[#00C68A] hover:underline font-semibold font-sans">
                    Talk to our experts
                  </Link>{' '}
                  today to start your journey.
                </p>
                <p>
                  Based in the USA and serving clients across all 50 states, we
                  pride ourselves on being a partner in your long-term success,
                  adapting our strategies to the ever-evolving digital world.{' '}
                  <Link href="/case-studies/" className="text-[#00C68A] hover:underline font-semibold font-sans">
                    View our performance results
                  </Link>{' '}
                  to see how we scale businesses like yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EXPERTISE SECTION (dark #0C1220) */}
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-b border-white/5" aria-labelledby="expertise-heading">
          <div className="container mx-auto px-4 max-w-6xl">

            <div className="text-center mb-16">
              <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-3 font-sans">
                EXPERTISE
              </span>
              <h2 id="expertise-heading" className="text-[38px] font-extrabold font-sora text-[#F0F4FF] mb-4 tracking-tight">
                Our Expertise
              </h2>
              <p className="text-[#8FA8C8] text-[16px] font-sans max-w-xl mx-auto">
                Specialized digital capabilities engineered for predictable scaling
              </p>
            </div>

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
                <div key={i} className="bg-[#1A2438] border border-white/8 rounded-[16px] p-7 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:border-[#00C68A] group">
                  <div className="w-[52px] h-[52px] rounded-xl bg-[#00C68A]/12 border border-[#00C68A]/20 flex items-center justify-center flex-shrink-0 text-[#00C68A] mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-[17px] font-bold font-sora text-white mb-3">{item.title}</h3>
                  <p className="text-[#8FA8C8] font-sans text-sm mb-6 flex-grow leading-relaxed">{item.desc}</p>
                  <Link
                    href={item.link}
                    className="text-[#00C68A] hover:text-[#5BC5A7] font-semibold text-sm transition-colors flex items-center gap-1 group/link"
                  >
                    {item.label}
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. HUB MARKET SERVICES CHIPS */}
        <section className="bg-[#080D18] py-[96px] relative z-10" aria-labelledby="hub-heading">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 id="hub-heading" className="text-2xl md:text-3xl font-bold font-sora text-center mb-10 text-white tracking-tight">
              Accelerate Your Growth in Key Markets
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
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
                { name: 'Dubai Marketing Agency', link: '/dubai/' },
                { name: 'Australia Marketing Agency', link: '/australia/' },
                { name: 'Marketing Case Studies', link: '/case-studies/' },
                { name: 'About Us', link: '/about/' },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className={`bg-[#1A2438] border border-white/8 text-[#8FA8C8] py-2.5 px-5 rounded-full text-[14px] font-medium shadow-sm transition-all duration-300 hover:bg-[#00C68A]/12 hover:border-[#00C68A]/35 hover:text-[#00C68A] ${item.name === 'About Us' ? 'border-[#00C68A]/50 text-[#00C68A]' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA SECTION */}
        <section className="bg-[#0C1220] py-[96px] relative z-10 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-[44px] font-extrabold font-sora mb-5 text-white tracking-tight leading-tight">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-[#8FA8C8] text-base md:text-lg max-w-xl mx-auto mb-10 font-sans leading-relaxed">
              Stop losing customers to competitors. Start capturing high-intent searches and scaling your revenue predictably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <Link
                href="/contact/"
                className="bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-4 px-10 rounded-full transition-all duration-200 text-center shadow-lg shadow-[#DD6613]/20 transform hover:scale-[1.02]"
              >
                Get Your Free Audit
              </Link>
              <Link
                href="/case-studies/"
                className="bg-transparent text-white border border-white/20 hover:border-white font-bold py-4 px-10 rounded-full transition-all duration-200 text-center transform hover:scale-[1.02]"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
