import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../../components/SEO';

export default function BlogIndex({ posts }) {
  return (
    <>
      <SEO
        title="Digital Marketing Blog | Expert SEO & Lead Acquisition Tips | GrowLimo"
        description="Expert digital marketing insights, SEO strategies, and lead acquisition tips from Growlimo. Learn from proven case studies and industry best practices."
        url="https://www.growlimo.com/blog/"
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
                "item": "https://www.growlimo.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.growlimo.com/blog/"
              }
            ]
          })
        }}
      />

      <section className="bg-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Insights for Scalable Growth
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Stay ahead in the digital landscape with expert insights, proven strategies, and actionable tips to grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="glass-card flex flex-col group hover:scale-[1.02] transition-all duration-300"
              >
                {post.featuredImage && (
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      priority={posts.indexOf(post) < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  {/* ✅ FIX: h3 not h2 — post titles are card items, not page sections */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="text-primary font-bold text-sm">
                    Read Article →
                  </span>
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
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir);

  const posts = files.map((file) => {
    const slug = file.replace('.mdx', '');
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug,
      ...data,
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts,
    },
  };
}
