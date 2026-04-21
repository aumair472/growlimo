import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function CaseStudyDetail({ caseStudy, slug }) {
  if (!caseStudy) return null;

  return (
    <>
      <SEO
        title={caseStudy.seo.title}
        description={caseStudy.seo.description}
        url={`https://growlimo.com/case-studies/${slug}/`}
      />

      <article className="bg-dark text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <Link href="/case-studies" className="text-primary hover:text-accent mb-8 inline-block font-semibold">
               ← Back to Case Studies
             </Link>
             
             <header className="mb-12">
               <div className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Case Study: {caseStudy.industry}</div>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                 {caseStudy.title}
               </h1>
             </header>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               <div className="md:col-span-2 rounded-2xl overflow-hidden aspect-video">
                 <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
               </div>
               <div className="glass-card p-8">
                 <h3 className="text-xl font-bold text-white mb-6">{caseStudy.metricsBox.title}</h3>
                 <div className="space-y-4">
                   {caseStudy.metricsBox.items.map((item, i) => (
                     <div key={i} className="flex justify-between items-center border-b border-slate-800 pb-2">
                       <span className="text-slate-400 text-sm">{item.label}</span>
                       <span className="text-primary font-bold">{item.value}</span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>

             <div className="space-y-16">
               {caseStudy.sections.map((section, i) => (
                 <div key={i}>
                   <h2 className="text-3xl font-bold text-white mb-6">{section.heading}</h2>
                   <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                     {section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                   </div>
                   {section.bullets && (
                     <ul className="mt-8 space-y-4">
                       {section.bullets.map((bullet, j) => (
                         <li key={j} className="flex items-start gap-3">
                           <span className="text-primary mt-1.5">&#10003;</span>
                           <span className="text-slate-300">{bullet}</span>
                         </li>
                       ))}
                     </ul>
                   )}
                   {section.closing && (
                     <p className="mt-10 p-6 bg-slate-900 rounded-xl border-l-4 border-primary italic text-white">
                       {section.closing}
                     </p>
                   )}
                 </div>
               ))}
             </div>

             <div className="mt-20 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Ready to achieve similar results?</h2>
                <Link href={caseStudy.cta.link} className="btn-primary inline-block px-12 py-5 rounded-xl font-bold text-xl">
                  {caseStudy.cta.text} →
                </Link>
             </div>
          </div>
        </div>
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

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/case-studies', `${slug}.json`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const caseStudy = JSON.parse(fileContent);

  return {
    props: {
      caseStudy,
      slug,
    },
  };
}
