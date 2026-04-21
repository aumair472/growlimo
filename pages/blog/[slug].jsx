import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SEO from '../../components/SEO';
import Link from 'next/link';
import Image from 'next/image';

const components = {
  h2: (props) => <h2 className="text-3xl font-bold text-white mt-10 mb-4" {...props} />,
  h3: (props) => <h3 className="text-2xl font-bold text-white mt-8 mb-3" {...props} />,
  p: (props) => <p className="text-slate-300 text-lg leading-relaxed mb-6" {...props} />,
  ul: (props) => <ul className="list-disc list-inside mb-6 text-slate-300 space-y-2" {...props} />,
  li: (props) => <li className="text-slate-300" {...props} />,
  strong: (props) => <strong className="text-white font-bold" {...props} />,
  a: (props) => (
    <a 
      className="text-primary hover:text-accent font-semibold underline decoration-primary/30 hover:decoration-accent transition-all duration-300" 
      {...props} 
    />
  ),
};

export default function BlogPost({ source, frontMatter, slug }) {
  return (
    <>
      <SEO
        title={frontMatter.metaTitle || frontMatter.title}
        description={frontMatter.excerpt}
        url={`https://growlimo.com/blog/${slug}/`}
        type="article"
        disableSuffix={true}
      />

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": frontMatter.h1 || frontMatter.title,
            "image": frontMatter.featuredImage,
            "datePublished": frontMatter.date,
            "dateModified": frontMatter.date,
            "author": {
              "@type": "Person",
              "name": frontMatter.author || "GrowLimo Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GrowLimo",
              "logo": {
                "@type": "ImageObject",
                "url": "https://growlimo.com/logo.png"
              }
            },
            "description": frontMatter.excerpt
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://growlimo.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://growlimo.com/blog/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": frontMatter.title,
                "item": `https://growlimo.com/blog/${slug}/`
              }
            ]
          })
        }}
      />

      <article className="bg-dark text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <Link href="/blog" className="text-primary hover:text-accent mb-8 inline-block font-semibold">
               ← Back to Blog
             </Link>
             
             <header className="mb-12">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                 {frontMatter.h1 || frontMatter.title}
               </h1>
               <div className="flex items-center gap-4 text-slate-400 text-sm">
                 <span>{new Date(frontMatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                 <span>•</span>
                 <span>By {frontMatter.author}</span>
               </div>
             </header>

             {frontMatter.featuredImage && (
               <div className="mb-12 rounded-2xl overflow-hidden aspect-video relative">
                 <Image
                   src={frontMatter.featuredImage}
                   alt={frontMatter.title}
                   fill
                   priority
                   sizes="(max-width: 1200px) 100vw, 1200px"
                   className="object-cover"
                 />
               </div>
             )}

             <div className="prose prose-invert max-w-none">
               <MDXRemote {...source} components={components} />
             </div>

             <div className="mt-16 pt-10 border-t border-slate-800">
               <div className="glass-card p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-3xl font-bold">
                    {frontMatter.author.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">About the Author</h2>
                    <p className="text-slate-400 leading-relaxed">
                      Our team of healthcare marketing specialists combines deep industry expertise with data-driven strategies to help medical practices grow.
                    </p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </article>

      <section className="bg-slate-900/50 py-16">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-white mb-6">Want More Patients?</h2>
           <p className="text-slate-300 mb-8 text-lg">Let's build your custom growth roadmap today.</p>
           <Link href="/contact" className="btn-primary inline-block px-10 py-4 rounded-xl font-bold text-lg">
             Book Free Consultation →
           </Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir);

  const paths = files.map((file) => ({
    params: { slug: file.replace('.mdx', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug,
    },
  };
}
