import { useState, useEffect, useRef } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SEO from '../../components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';

const WWW = 'https://growlimo.com';

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
const getPostReadTime = (post, fallbackSlug = '') => {
  if (!post) return '5 min read';
  const slugVal = post.slug || fallbackSlug;
  return `${Math.max(4, (slugVal.length % 5) + 4)} min read`;
};

// Custom premium markdown tags styling components
const components = {
  h2: (props) => (
    <h2
      className="text-[28px] font-extrabold font-sora text-[#F0F4FF] pl-[18px] border-l-3 border-[#00C68A] mt-12 mb-5 tracking-tight leading-snug"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-[20px] font-bold font-sora text-[#F0F4FF] mt-8 mb-3 tracking-tight leading-snug"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-[16px] text-[#8FA8C8] leading-[1.85] font-sans font-normal mb-5"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="space-y-2.5 my-4"
      {...props}
    />
  ),
  li: (props) => (
    <li className="flex gap-3 items-start text-[15px] text-[#8FA8C8] leading-[1.65] font-sans mb-2">
      <div className="w-[24px] h-[24px] rounded-full bg-[rgba(0,198,138,0.10)] flex items-center justify-center shrink-0">
        <span className="text-[#00C68A] text-[11px] font-extrabold">&#10003;</span>
      </div>
      <span className="flex-1">{props.children}</span>
    </li>
  ),
  ol: (props) => (
    <ol
      className="space-y-2.5 my-4 list-decimal list-inside"
      {...props}
    />
  ),
  strong: (props) => (
    <strong
      className="text-[#F0F4FF] font-semibold"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="bg-[rgba(0,198,138,0.06)] border-l-4 border-[#00C68A] rounded-r-[12px] p-5 my-6 text-[16px] italic text-[#F0F4FF] leading-[1.75] font-sans"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-[#00C68A] underline opacity-70 hover:opacity-100 transition-all duration-200 font-sans"
      {...props}
    />
  ),
  hr: (props) => (
    <hr
      className="border-[rgba(255,255,255,0.06)] my-12"
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto mb-8 my-6">
      <table className="w-full text-left border-collapse border border-[rgba(255,255,255,0.08)]" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-[#1A2438]" {...props} />,
  th: (props) => <th className="p-4 border border-[rgba(255,255,255,0.08)] font-bold text-white text-sm" {...props} />,
  td: (props) => <td className="p-4 border border-[rgba(255,255,255,0.08)] text-[#8FA8C8] text-sm" {...props} />,
};

// FAQ Accordion Item Component
function FAQItem({ question, answerHTML }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-[#1A2438] border rounded-[10px] p-4.5 md:p-5 transition-all duration-200 cursor-pointer mb-2 ${
        isOpen ? 'border-[rgba(0,198,138,0.25)]' : 'border-[rgba(255,255,255,0.07)]'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-4">
        <span className="text-[14px] font-semibold text-[#F0F4FF] font-sans">
          {question}
        </span>
        <span
          className={`text-[#00C68A] text-[12px] font-extrabold transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <div
          className="mt-3.5 text-[14px] text-[#8FA8C8] leading-[1.7] font-sans space-y-3 prose prose-invert max-w-none prose-sm"
          dangerouslySetInnerHTML={{ __html: answerHTML }}
        />
      )}
    </div>
  );
}

export default function BlogPost({ source, frontMatter, slug, relatedPosts }) {
  const pageUrl = `${WWW}/blog/${slug}/`;
  const [faqs, setFaqs] = useState([]);

  // Client-side parser for dynamic FAQ accordions
  useEffect(() => {
    const faqHeading = Array.from(document.querySelectorAll('.prose-content h2')).find(
      (el) => el.textContent.toLowerCase().includes('frequently asked')
    );
    if (faqHeading) {
      faqHeading.style.display = 'none';
      const items = [];
      let current = faqHeading.nextElementSibling;
      while (current && current.tagName !== 'H2' && current.tagName !== 'HR') {
        const isQuestion =
          current.tagName === 'H3' ||
          current.tagName === 'H4' ||
          (current.tagName === 'P' &&
            current.querySelector('strong') &&
            (current.textContent.includes('?') || current.textContent.match(/^\d+\./)));

        if (isQuestion) {
          const questionText = current.textContent.trim();
          current.style.display = 'none';

          let answerHTML = '';
          let sibling = current.nextElementSibling;

          while (
            sibling &&
            sibling.tagName !== 'H2' &&
            sibling.tagName !== 'H3' &&
            sibling.tagName !== 'H4' &&
            !(
              sibling.tagName === 'P' &&
              sibling.querySelector('strong') &&
              (sibling.textContent.includes('?') || sibling.textContent.match(/^\d+\./))
            ) &&
            sibling.tagName !== 'HR'
          ) {
            answerHTML += sibling.outerHTML;
            sibling.style.display = 'none';
            sibling = sibling.nextElementSibling;
          }

          items.push({ question: questionText, answerHTML });
          current = sibling;
        } else {
          current.style.display = 'none';
          current = current.nextElementSibling;
        }
      }
      setFaqs(items);
    }
  }, [source]);

  // Schema configuration
  const blogPostingSchema = {
    '@type': 'BlogPosting',
    '@id': pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    headline: frontMatter.metaTitle || frontMatter.title,
    description: frontMatter.excerpt,
    image: frontMatter.featuredImage ? `${WWW}${frontMatter.featuredImage}` : `${WWW}/og-image.png`,
    datePublished: frontMatter.date,
    dateModified: frontMatter.date,
    author: {
      '@type': 'Organization',
      name: 'GrowLimo',
      url: WWW,
    },
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
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${WWW}/blog/` },
      { '@type': 'ListItem', position: 3, name: frontMatter.title, item: pageUrl },
    ],
  };

  return (
    <>
      <SEO
        title={frontMatter.metaTitle || frontMatter.title}
        description={frontMatter.excerpt}
        url={pageUrl}
        type="article"
        disableSuffix={true}
        schema={[blogPostingSchema, breadcrumbSchema]}
        image={frontMatter.featuredImage ? `${WWW}${frontMatter.featuredImage}` : undefined}
      />

      <article className="bg-[#0C1220] text-white">
        
        {/* ── HERO SECTION ── */}
        <section className="bg-[#080D18] pt-[140px] pb-12 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00C68A]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-[860px] mx-auto">
              
              {/* Back Link */}
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 text-[13px] text-[#8FA8C8] hover:text-[#00C68A] mb-6 font-semibold font-sans transition-colors group"
              >
                <span className="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Blog
              </Link>

              {/* Category Badge */}
              <div className="mb-5">
                <span className="inline-flex items-center bg-[rgba(0,198,138,0.10)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[10px] font-extrabold uppercase tracking-[1.5px] rounded-full px-3.5 py-1.5 font-sans leading-none">
                  {getPostCategory(frontMatter)}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-[48px] font-extrabold text-[#F0F4FF] mb-6 font-sora tracking-tight leading-[1.08] max-w-[760px]">
                {frontMatter.h1 || frontMatter.title}
              </h1>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-2.5 text-[13px] text-[#8FA8C8] font-sans">
                <div className="w-[28px] h-[28px] rounded-full bg-[#0C1220] flex items-center justify-center border border-white/10 shrink-0">
                  <span className="text-[#00C68A] font-bold font-sora text-[10px] leading-none">
                    {frontMatter.author ? frontMatter.author.charAt(0) : 'G'}
                  </span>
                </div>
                <span>By {frontMatter.author || 'GrowLimo Team'}</span>
                <span className="text-[#4A6080] font-bold">&middot;</span>
                <span>
                  {new Date(frontMatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="text-[#4A6080] font-bold">&middot;</span>
                <span>{getPostReadTime(frontMatter, slug)}</span>
              </div>

              {/* Hero Image */}
              {frontMatter.featuredImage && (
                <div className="mt-9 rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)] shadow-2xl relative w-full h-[240px] md:h-[460px]">
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

            </div>
          </div>
        </section>

        {/* ── ARTICLE CONTENT ── */}
        <section className="bg-[#0C1220] relative z-10">
          <div style={{ width: '100%', maxWidth: '860px', margin: '0 auto', padding: '64px 40px' }}>
            <div className="prose-content prose prose-invert max-w-none">
              <MDXRemote {...source} components={components} />
            </div>

            {/* Dynamically Parsed FAQ Accordion Block */}
            {faqs.length > 0 && (
              <div className="bg-[#0C1220] rounded-[16px] p-6 md:p-8 my-12 border border-[rgba(255,255,255,0.06)] shadow-xl">
                <h2 className="text-[22px] font-bold font-sora text-[#F0F4FF] mb-5 tracking-tight">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-2">
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answerHTML={faq.answerHTML} />
                  ))}
                </div>
              </div>
            )}

            {/* About the Author card (Bottom) */}
            <div className="bg-[#1A2438] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-6 shadow-md max-w-[680px] mx-auto mt-12 mb-0">
              <div className="flex gap-3 items-center mb-4">
                <div className="w-[56px] h-[56px] rounded-full bg-[#0C1220] border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-[#00C68A] font-extrabold font-sora text-[16px] leading-none">
                    {frontMatter.author ? frontMatter.author.charAt(0) : 'G'}
                  </span>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold font-sora text-[#F0F4FF] leading-none mb-1">
                    {frontMatter.author || 'GrowLimo Team'}
                  </h4>
                  <span className="text-[11px] text-[#4A6080] font-sans block leading-none">
                    Author & Strategist
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-[#8FA8C8] leading-[1.6] font-sans font-normal">
                Our team of digital marketing specialists combines deep industry expertise with
                data-driven strategies to help businesses grow.
              </p>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA STRIP ── */}
        <section className="bg-[#080D18] border-t border-[rgba(255,255,255,0.06)] py-[80px] px-10 text-center relative overflow-hidden z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#00C68A]/8 rounded-full blur-[90px] pointer-events-none z-0"></div>

          <div className="container mx-auto max-w-3xl relative z-10">
            <span className="uppercase text-[11px] font-bold tracking-[2px] text-[#00C68A] block mb-4 font-sans leading-none">
              {getPostCategory(frontMatter)}
            </span>
            <h2 className="text-3xl md:text-[38px] font-extrabold font-sora text-[#F0F4FF] mb-8 tracking-tight leading-tight">
              Ready to Grow Your Business?
            </h2>
            <Link
              href="/contact/"
              className="inline-block bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-4 px-9 rounded-[10px] text-[15px] transition-all duration-200 shadow-md shadow-[#DD6613]/10 transform hover:scale-[1.02] border-none"
            >
              Book Free Consultation &rarr;
            </Link>
          </div>
        </section>

        {/* ── RELATED BLOGS SECTION ── */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="py-[80px] bg-[#0C1220] relative z-10">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-[32px] font-extrabold font-sora text-[#F0F4FF] mb-8 tracking-tight text-center lg:text-left">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-[#1A2438] border border-[rgba(255,255,255,0.07)] rounded-[14px] overflow-hidden hover:border-[rgba(0,198,138,0.30)] transition-all duration-200 flex flex-col h-full shadow-lg group"
                  >
                    <Link href={`/blog/${post.slug}/`} className="flex flex-col h-full">
                      {post.featuredImage && (
                        <div className="h-[180px] w-full relative overflow-hidden shrink-0">
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <span className="inline-block bg-[rgba(0,198,138,0.10)] border border-[rgba(0,198,138,0.20)] text-[#00C68A] text-[10px] font-bold uppercase tracking-[1.5px] rounded-full px-2.5 py-[3px] font-sans leading-none">
                              {getPostCategory(post)}
                            </span>
                          </div>
                          <h3 className="text-[15px] font-bold font-sora text-[#F0F4FF] mt-2.5 mb-2 group-hover:text-[#00C68A] transition-colors leading-[1.4] tracking-tight line-clamp-2">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-[11px] text-[#4A6080] font-sans">
                            <span>
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                            <span>&middot;</span>
                            <span>{getPostReadTime(post)}</span>
                          </div>
                        </div>
                        <span className="text-[#00C68A] text-[12px] font-semibold font-sans mt-3.5 block">
                          Read Article &rarr;
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

      </article>
    </>
  );
}

export async function getStaticPaths() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir);
  const paths = files.map((file) => ({
    params: { slug: file.replace('.mdx', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir);

  // Read current post
  const filePath = path.join(blogDir, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkGfm] },
  });

  // Read other posts for related posts
  const allPosts = files
    .map((file) => {
      const postSlug = file.replace('.mdx', '');
      const postPath = path.join(blogDir, file);
      const postContent = fs.readFileSync(postPath, 'utf8');
      const { data: postData } = matter(postContent);
      return {
        slug: postSlug,
        ...postData,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const currentCategory = getPostCategory({ slug, ...data });
  const currentTags = data.tags || [];

  const otherPosts = allPosts.filter((p) => p.slug !== slug);

  // Calculate dynamic relevance score:
  // - same category match: +10 points
  // - each tag overlap match: +1 point
  const scored = otherPosts.map((p) => {
    const pCategory = getPostCategory(p);
    const pTags = p.tags || [];

    let score = 0;
    if (pCategory === currentCategory) {
      score += 10;
    }
    const overlapCount = pTags.filter((tag) => currentTags.includes(tag)).length;
    score += overlapCount;

    return { post: p, score };
  });

  // Sort by score descending, then by date latest first
  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(b.post.date) - new Date(a.post.date);
  });

  const relatedPosts = scored.map((s) => s.post).slice(0, 3);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug,
      relatedPosts,
    },
  };
}
