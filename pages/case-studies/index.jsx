import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function CaseStudiesIndex({ caseStudies }) {
  return (
    <>
      <SEO
        title="Marketing Case Studies | Proven Results & ROI | GrowLimo"
        description="Real digital marketing success stories showing proven ROI and lead generation results for businesses across the United States."
        url="https://growlimo.com/case-studies/"
      />

      <section className="bg-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Proven Results for Real Businesses
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              See how we've helped clinics and businesses across the US achieve predictable revenue growth through data-driven digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300 flex flex-col"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                     <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                       {cs.industry}
                     </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-slate-400 mb-8 line-clamp-3 flex-grow">
                    {cs.summary}
                  </p>
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-6">
                    {cs.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold text-primary">{stat.value}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const csDir = path.join(process.cwd(), 'content/case-studies');
  const files = fs.readdirSync(csDir);

  const caseStudies = files.map((file) => {
    const filePath = path.join(csDir, file);
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  });

  return {
    props: {
      caseStudies,
    },
  };
}
