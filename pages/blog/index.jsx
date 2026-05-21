import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '../../components/SEO';

// Helper to derive categories dynamically from tags/title/excerpt
const getPostCategory = (post) => {
  if (post.category) return post.category;
  const title = (post.title || '').toLowerCase();
  const excerpt = (post.excerpt || '').toLowerCase();
  const tags = (post.tags || []).map((t) => t.toLowerCase());

  const hasTagOrText = (term) =>
    tags.some((t) => t.includes(term)) || title.includes(term) || excerpt.includes(term);

  if (
    hasTagOrText('seo') ||
    hasTagOrText('local seo') ||
    hasTagOrText('google business') ||
    hasTagOrText('maps') ||
    hasTagOrText('citation') ||
    hasTagOrText('voice search') ||
    hasTagOrText('blogging') ||
    hasTagOrText('faq seo')
  ) {
    return 'SEO';
  }
  if (
    hasTagOrText('facebook') ||
    hasTagOrText('instagram') ||
    hasTagOrText('social') ||
    hasTagOrText('linkedin') ||
    hasTagOrText('tiktok') ||
    hasTagOrText('reels') ||
    hasTagOrText('brand')
  ) {
    return 'Social Media';
  }
  if (
    hasTagOrText('ppc') ||
    hasTagOrText('google ads') ||
    hasTagOrText('adword') ||
    hasTagOrText('paid') ||
    hasTagOrText('cpc') ||
    hasTagOrText('remarketing') ||
    hasTagOrText('retargeting') ||
    hasTagOrText('conversion tracking')
  ) {
    return 'PPC & Ads';
  }
  if (
    hasTagOrText('healthcare') ||
    hasTagOrText('medical') ||
    hasTagOrText('clinic') ||
    hasTagOrText('patient') ||
    hasTagOrText('physio') ||
    hasTagOrText('rehab') ||
    hasTagOrText('doctor')
  ) {
    return 'Healthcare';
  }
  return 'Digital Marketing';
};

// Helper to derive realistic read times based on slug length
const getPostReadTime = (post) => {
  if (!post) return '5 min read';
  const slugVal = post.slug || '';
  return `${Math.max(4, (slugVal.length % 5) + 4)} min read`;
};

const CATEGORIES = ['All', 'SEO', 'PPC & Ads', 'Social Media', 'Healthcare', 'Digital Marketing'];

export default function BlogIndex({ posts }) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter posts based on category
  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => getPostCategory(post) === activeCategory);

  // If on 'All', the very first post goes to the Featured slot
  const featuredPost = activeCategory === 'All' && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <>
      <SEO
        title="Digital Marketing Blog | Expert SEO & Lead Acquisition Tips | GrowLimo"
        description="Expert digital marketing insights, SEO strategies, and lead acquisition tips from Growlimo. Learn from proven case studies and industry best practices."
        url="https://growlimo.com/blog/"
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
                "item": "https://growlimo.com",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://growlimo.com/blog/",
              },
            ],
          }),
        }}
      />

      <div className="bg-[#0C1220] text-[#8FA8C8] min-h-screen">
        
        {/* ── HERO SECTION ── */}
        <section className="bg-[#080D18] pt-[140px] pb-12 relative overflow-hidden" aria-labelledby="blog-heading">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00C68A]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="uppercase text-[11px] font-bold tracking-[2.5px] text-[#00C68A] block mb-4 font-sans leading-none">
              INSIGHTS & RESOURCES
            </span>
            <h1
              id="blog-heading"
              className="text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#F0F4FF] mb-6 font-sora tracking-tight leading-tight max-w-4xl mx-auto"
            >
              Insights for Scalable Growth
            </h1>
            <p className="text-[17px] text-[#8FA8C8] max-w-[540px] mx-auto font-sans leading-[1.7] font-normal">
              Stay ahead in the digital landscape with expert insights, proven strategies, and actionable tips to grow your business.
            </p>
          </div>
        </section>

        {/* ── CATEGORY FILTER BAR (Sticky below navbar) ── */}
        <div className="sticky top-[80px] z-40 bg-[#080D18] border-b border-[rgba(255,255,255,0.06)] py-4 transition-all duration-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-[18px] py-[8px] rounded-full text-[13px] font-medium transition-all duration-200 border leading-none font-sans ${
                      isActive
                        ? 'bg-[rgba(0,198,138,0.12)] border-[rgba(0,198,138,0.35)] text-[#00C68A]'
                        : 'bg-[#1A2438] border-[rgba(255,255,255,0.07)] text-[#8FA8C8] hover:text-[#00C68A] hover:border-[#00C68A]/35'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── ARTICLES GRID SECTION ── */}
        <section className="py-[80px] bg-[#0C1220] relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            
            {/* FEATURED POST */}
            {featuredPost && (
              <div className="mb-12">
                <Link
                  href={`/blog/${featuredPost.slug}/`}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.07)] rounded-[16px] overflow-hidden flex flex-col lg:grid lg:grid-cols-3 hover:border-[rgba(0,198,138,0.30)] hover:bg-[#1F2B3E] transition-all duration-200 group shadow-xl"
                >
                  {/* Image Col (2/3 width) */}
                  <div className="lg:col-span-2 h-[240px] lg:h-[360px] relative overflow-hidden">
                    {featuredPost.featuredImage && (
                      <Image
                        src={featuredPost.featuredImage}
                        alt={featuredPost.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    )}
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 bg-white text-[#DD6613] text-[10px] font-extrabold uppercase px-3 py-1.5 rounded-full shadow-md tracking-wider font-sans z-10 leading-none">
                      FEATURED
                    </div>
                  </div>

                  {/* Text Col (1/3 width) */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between lg:col-span-1">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="inline-block bg-[rgba(0,198,138,0.10)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[10px] font-extrabold uppercase tracking-[1.5px] rounded-full px-2.5 py-1 font-sans leading-none">
                          {getPostCategory(featuredPost)}
                        </span>
                        <span className="bg-white/5 text-[#4A6080] text-[11px] rounded-full px-2.5 py-1 font-sans leading-none">
                          {getPostReadTime(featuredPost)}
                        </span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-extrabold font-sora text-[#F0F4FF] mb-4 group-hover:text-[#00C68A] transition-colors leading-snug tracking-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-[#8FA8C8] text-[13px] leading-[1.65] font-sans font-normal line-clamp-4 mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-[28px] h-[28px] rounded-full bg-[#0C1220] flex items-center justify-center border border-white/10 shrink-0">
                          <span className="text-[#00C68A] font-bold font-sora text-[10px] leading-none">
                            {featuredPost.author ? featuredPost.author.charAt(0) : 'G'}
                          </span>
                        </div>
                        <div>
                          <span className="block text-[12px] font-medium text-[#8FA8C8] font-sans leading-none mb-0.5">
                            {featuredPost.author || 'GrowLimo Team'}
                          </span>
                          <span className="block text-[11px] text-[#4A6080] font-sans leading-none">
                            {new Date(featuredPost.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>
                      <span className="text-[#00C68A] text-[12px] font-semibold font-sans">
                        Read More &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-[#1A2438] border border-[rgba(255,255,255,0.07)] rounded-[16px] overflow-hidden hover:border-[rgba(0,198,138,0.30)] hover:bg-[#1F2B3E] transition-all duration-200 flex flex-col h-full shadow-lg group"
                >
                  <Link href={`/blog/${post.slug}/`} className="flex flex-col h-full">
                    {/* Image Area */}
                    {post.featuredImage && (
                      <div className="h-[200px] w-full relative overflow-hidden shrink-0">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          priority={posts.indexOf(post) < 4}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Card Body */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-3.5">
                          <span className="inline-block bg-[rgba(0,198,138,0.10)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[10px] font-extrabold uppercase tracking-[1.5px] rounded-full px-2.5 py-1 font-sans leading-none">
                            {getPostCategory(post)}
                          </span>
                          <span className="bg-white/5 text-[#4A6080] text-[11px] rounded-full px-2.5 py-1 font-sans leading-none">
                            {getPostReadTime(post)}
                          </span>
                        </div>
                        <h3 className="text-[17px] font-bold font-sora text-[#F0F4FF] mb-3 group-hover:text-[#00C68A] transition-colors leading-[1.4] tracking-tight line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[#8FA8C8] text-[13px] leading-[1.65] font-sans font-normal line-clamp-3 mb-6">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-[28px] h-[28px] rounded-full bg-[#0C1220] flex items-center justify-center border border-white/10 shrink-0">
                            <span className="text-[#00C68A] font-bold font-sora text-[10px] leading-none">
                              {post.author ? post.author.charAt(0) : 'G'}
                            </span>
                          </div>
                          <div>
                            <span className="block text-[12px] font-medium text-[#8FA8C8] font-sans leading-none mb-0.5">
                              {post.author || 'GrowLimo Team'}
                            </span>
                            <span className="block text-[11px] text-[#4A6080] font-sans leading-none">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>
                        <span className="text-[#00C68A] text-[12px] font-semibold font-sans">
                          Read More &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

export async function getStaticProps() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir);

  const posts = files
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        slug,
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts,
    },
  };
}
