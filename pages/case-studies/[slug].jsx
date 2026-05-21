import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../../components/SEO';

const WWW = 'https://growlimo.com';

// Helper to resolve generated high-quality images for each case study based on slug
const getCaseStudyImages = (slug) => {
  if (slug === 'physiotherapy-google-ads-san-francisco') {
    return {
      secondImage: '/physio-sf-clinic.png',
      thirdImage: '/google-ads-dashboard-sf.png',
    };
  }
  if (slug === 'sports-rehab-google-ads-fremont') {
    return {
      secondImage: '/sports-rehab-fremont.png',
      thirdImage: '/google-ads-dashboard-fremont.png',
    };
  }
  return {
    secondImage: null,
    thirdImage: null,
  };
};

export default function CaseStudyDetail({ caseStudy, slug }) {
  if (!caseStudy) return null;

  const pageUrl = `${WWW}/case-studies/${slug}/`;
  const { secondImage, thirdImage } = getCaseStudyImages(slug);

  // Article + BreadcrumbList schemas
  const articleSchema = {
    '@type': 'Article',
    '@id': pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    headline: caseStudy.title,
    description: caseStudy.seo.description,
    image: caseStudy.image,
    author: { '@type': 'Organization', name: 'GrowLimo', url: WWW },
    publisher: {
      '@type': 'Organization',
      name: 'GrowLimo',
      logo: { '@type': 'ImageObject', url: `${WWW}/logo.png` },
    },
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: WWW },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${WWW}/case-studies/` },
      { '@type': 'ListItem', position: 3, name: caseStudy.title, item: pageUrl },
    ],
  };

  return (
    <>
      <SEO
        title={caseStudy.seo.title}
        description={caseStudy.seo.description}
        url={pageUrl}
        disableSuffix={true}
        schema={[articleSchema, breadcrumbSchema]}
        image={caseStudy.image}
      />

      <article className="bg-[#0C1220] text-white">
        {/* ── HERO SECTION ── */}
        <section className="bg-[#080D18] pt-[140px] pb-12 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00C68A]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              
              {/* Back Link */}
              <Link
                href="/case-studies/"
                className="inline-flex items-center gap-2 text-[13px] text-[#8FA8C8] hover:text-[#00C68A] mb-6 font-semibold font-sans transition-colors group"
              >
                <span className="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Case Studies
              </Link>

              {/* Category Breadcrumb */}
              <div className="mb-5">
                <span className="inline-flex items-center bg-[rgba(0,198,138,0.10)] border border-[rgba(0,198,138,0.25)] text-[#00C68A] text-[11px] font-bold uppercase tracking-[2px] rounded-full px-3.5 py-1.5 font-sans leading-none">
                  {caseStudy.industry}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-[52px] font-extrabold text-[#F0F4FF] mb-8 font-sora tracking-tight leading-[1.08] max-w-[760px]">
                {caseStudy.title}
              </h1>

              {/* Quick-Stat Pills */}
              <div className="flex flex-wrap gap-3 mb-4">
                {caseStudy.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#1A2438] border border-[rgba(255,255,255,0.08)] rounded-full px-5 py-2.5 flex items-center gap-2 shadow-sm"
                  >
                    <span className="text-[18px] font-extrabold font-sora text-[#00C68A] leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[12px] font-semibold text-[#8FA8C8] font-sans leading-none">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── HERO IMAGE + METRICS ROW ── */}
        <section className="bg-[#0C1220] py-12 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
              
              {/* LEFT — Dashboard Screenshot + Supporting Image */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="relative w-full rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.10)] shadow-2xl aspect-[16/10]">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                {secondImage && (
                  <div className="relative w-full h-[200px] rounded-[16px] overflow-hidden mt-4 shadow-xl border border-[rgba(255,255,255,0.08)]">
                    <Image
                      src={secondImage}
                      alt="Clinic consultation or workspace"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* RIGHT — "AT A GLANCE" metrics card */}
              <div className="lg:col-span-5">
                <div className="bg-[#1A2438] border border-[rgba(0,198,138,0.20)] rounded-[16px] p-7 shadow-2xl flex flex-col h-full">
                  <div className="border-b border-[rgba(255,255,255,0.07)] pb-3.5 mb-5">
                    <h3 className="text-[#00C68A] font-bold text-[11px] uppercase tracking-[2px] font-sans leading-none">
                      AT A GLANCE: THE ROI METRICS
                    </h3>
                  </div>
                  
                  <div className="space-y-1 flex-1">
                    {caseStudy.metricsBox.items.slice(0, -1).map((item, i) => {
                      const valColor =
                        item.value.includes('$') &&
                        !item.value.includes('CPL') &&
                        !item.value.includes('/')
                          ? 'text-[#F0F4FF]'
                          : 'text-[#00C68A]';
                      return (
                        <div
                          key={i}
                          className="flex justify-between items-center py-2.5 border-b border-[rgba(255,255,255,0.05)]"
                        >
                          <span className="text-[13px] text-[#8FA8C8] font-sans">
                            {item.label}
                          </span>
                          <span className={`text-[15px] font-bold font-sora ${valColor}`}>
                            {item.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom total revenue row */}
                  {caseStudy.metricsBox.items.length > 0 && (
                    <div className="bg-[rgba(0,198,138,0.06)] rounded-[8px] p-3 mt-4 flex justify-between items-center border border-[rgba(0,198,138,0.10)]">
                      <span className="text-[13px] font-semibold text-[#F0F4FF] font-sans">
                        {caseStudy.metricsBox.items[caseStudy.metricsBox.items.length - 1].label}
                      </span>
                      <span className="text-[20px] font-extrabold font-sora text-[#00C68A] leading-none">
                        {caseStudy.metricsBox.items[caseStudy.metricsBox.items.length - 1].value}
                      </span>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* ── CONTENT SECTIONS ── */}
            <div className="space-y-0">
              {caseStudy.sections.map((section, idx) => {
                const isResultsSection = section.heading.toLowerCase().includes('results');
                return (
                  <div
                    key={idx}
                    className="max-w-[760px] mx-auto py-14 border-b border-[rgba(255,255,255,0.06)] last:border-b-0"
                  >
                    <h2 className="text-[32px] font-extrabold font-sora text-[#F0F4FF] pl-5 border-l-3 border-[#00C68A] mb-6 tracking-tight leading-none">
                      {section.heading}
                    </h2>
                    
                    {isResultsSection && thirdImage && (
                      <div className="relative w-full h-[280px] rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)] mb-7 shadow-lg">
                        <Image
                          src={thirdImage}
                          alt="Results visual dashboard"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="space-y-5 text-[16px] text-[#8FA8C8] leading-[1.8] font-sans font-normal">
                      {section.paragraphs.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>

                    {section.bullets && (
                      <ul className="mt-6 space-y-3">
                        {section.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3 items-start">
                            <div className="w-[24px] h-[24px] rounded-full bg-[rgba(0,198,138,0.12)] flex items-center justify-center shrink-0">
                              <span className="text-[#00C68A] text-[12px] font-extrabold">&#10003;</span>
                            </div>
                            <span className="text-[15px] text-[#8FA8C8] leading-[1.65] font-sans">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.closing && (
                      <blockquote className="mt-8 bg-[rgba(0,198,138,0.06)] border-l-4 border-[#00C68A] rounded-r-[12px] p-6 max-w-[760px]">
                        <p className="text-[16px] italic text-[#F0F4FF] leading-[1.75] font-sans">
                          {section.closing}
                        </p>
                      </blockquote>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── BOTTOM CTA SECTION ── */}
        <section className="bg-[#080D18] py-[96px] relative overflow-hidden text-center">
          {/* Subtle radial green glow behind button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#00C68A]/8 rounded-full blur-[90px] pointer-events-none z-0"></div>

          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <span className="uppercase text-[11px] font-bold tracking-[2px] text-[#00C68A] block mb-4 font-sans leading-none">
              {caseStudy.industry}
            </span>
            <h2 className="text-3xl md:text-[42px] font-extrabold font-sora text-[#F0F4FF] mb-8 tracking-tight leading-tight">
              Ready to achieve similar results?
            </h2>
            <Link
              href={caseStudy.cta.link}
              className="inline-block bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-4 px-10 rounded-[10px] text-[16px] transition-all duration-200 shadow-md shadow-[#DD6613]/10 transform hover:scale-[1.02] border-none"
            >
              {caseStudy.cta.text} &rarr;
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}

export async function getStaticPaths() {
  const csDir = path.join(process.cwd(), 'content/case-studies');
  const files = fs.readdirSync(csDir);
  const paths = files.map((file) => ({
    params: { slug: file.replace('.json', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/case-studies', `${slug}.json`);
  const caseStudy = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { caseStudy, slug } };
}
