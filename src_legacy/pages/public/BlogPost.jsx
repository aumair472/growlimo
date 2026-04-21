import { useParams, Link } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import SEO from '../../components/seo/SEO';
import StructuredData from '../../components/seo/StructuredData';
import { getBlogPostSEO } from '../../config/seoConfig';
import api from '../../config/axios';
import BlogItem from '../../components/blog/BlogItem';
import { normalizeImageUrl } from '../../utils/imageUrl';
import { getCache, setCache, generateCacheKey } from '../../utils/cache';
import {
  getBlogCacheIndex,
  getBlogPostFromCache,
  getRelatedPostsFromCache,
} from '../../utils/blogCache';
import OptimizedImage from '../../components/common/OptimizedImage';
import Toast from '../../components/common/Toast';
import RelatedLinks from '../../components/shared/RelatedLinks';
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from '../../utils/schema';

const MarkdownRenderer = lazy(() => import('../../components/blog/MarkdownRenderer'));

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const fetchRelatedPosts = useCallback(
    async (tags) => {
      const fallbackRelatedPosts = await getRelatedPostsFromCache(tags, slug, 3);

      try {
        const cacheKey = generateCacheKey('/api/blog', {
          tags: tags.join(','),
          limit: 3,
        });

        // Check cache first
        const cachedData = getCache(cacheKey);
        if (cachedData) {
          setRelatedPosts(
            cachedData.filter((p) => p.slug !== slug).slice(0, 3)
          );
          return;
        }

        const response = await api.get(
          `/api/blog?tags=${tags.join(',')}&limit=3`
        );
        if (response.data.success) {
          const filtered = response.data.data
            .filter((p) => p.slug !== slug)
            .slice(0, 3);
          setRelatedPosts(filtered);
          setCache(cacheKey, response.data.data); // Cache the response
        } else if (fallbackRelatedPosts.length) {
          setRelatedPosts(fallbackRelatedPosts);
        }
      } catch (err) {
        if (fallbackRelatedPosts.length) {
          setRelatedPosts(fallbackRelatedPosts);
          return;
        }
        console.error('Error fetching related posts:', err);
      }
    },
    [slug]
  );

  const fetchPost = useCallback(async () => {
    try {
      setLoading(true);
      const cacheKey = generateCacheKey(`/api/blog/${slug}`);

      // Check cache first
      const cachedData = getCache(cacheKey);
      if (cachedData) {
        setPost(cachedData);
        setLoading(false);
        // Fetch related posts in parallel if tags exist
        if (cachedData.tags && cachedData.tags.length > 0) {
          fetchRelatedPosts(cachedData.tags);
        }
        return;
      }

      // Fetch post and related posts in parallel for better performance
      const postPromise = api.get(`/api/blog/${slug}`);

      const response = await postPromise;
      if (response.data.success) {
        const postData = response.data.data;
        setPost(postData);
        setCache(cacheKey, postData); // Cache the response

        // Fetch related posts in parallel (don't wait for it)
        if (postData.tags && postData.tags.length > 0) {
          fetchRelatedPosts(postData.tags);
        }
      }
    } catch (err) {
      const fallbackPost =
        (await getBlogPostFromCache(slug)) ||
        (await getBlogCacheIndex()).find((post) => post.slug === slug);

      if (fallbackPost) {
        setPost(fallbackPost);
        if (fallbackPost.tags && fallbackPost.tags.length > 0) {
          fetchRelatedPosts(fallbackPost.tags);
        }
      } else {
        setError('Post not found');
      }
      console.error('Error fetching post:', err);
    } finally {
      setLoading(false);
    }
  }, [slug, fetchRelatedPosts]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  // Memoize formatDate to avoid recreating on every render
  const formatDate = useMemo(() => {
    return (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };
  }, []);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post?.title || '';
  const pageH1 = post?.title;

  // Memoize markdown components to prevent recreation
  const markdownComponents = useMemo(
    () => ({
      // Render markdown # as h2 to prevent duplicate H1 (page already has one H1)
      h1: ({ children }) => (
        <h2 className="text-4xl font-bold text-white mt-8 mb-4">{children}</h2>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-bold text-white mt-6 mb-3">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-semibold text-white mt-4 mb-2">
          {children}
        </h3>
      ),
      p: ({ children }) => <p className="mb-4 text-slate-300">{children}</p>,
      ul: ({ children }) => (
        <ul className="list-disc list-inside mb-4 text-slate-300 space-y-2">
          {children}
        </ul>
      ),
      ol: ({ children }) => (
        <ol className="list-decimal list-inside mb-4 text-slate-300 space-y-2">
          {children}
        </ol>
      ),
      li: ({ children }) => <li className="text-slate-300">{children}</li>,
      a: ({ href, children }) => (
        <a
          href={href}
          className="text-primary hover:text-accent underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      img: ({ src, alt, ...props }) => (
        <img
          src={src ? normalizeImageUrl(src) : ''}
          alt={alt || ''}
          className="blog-img"
          loading="lazy"
          decoding="async"
          {...props}
        />
      ),
      code: ({ children }) => (
        <code className="bg-slate-800 px-2 py-1 rounded text-primary">
          {children}
        </code>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary pl-4 italic text-slate-400 my-4">
          {children}
        </blockquote>
      ),
      // Tables (GFM)
      table: ({ children }) => (
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse border border-slate-700">
            {children}
          </table>
        </div>
      ),
      thead: ({ children }) => (
        <thead className="bg-slate-800">{children}</thead>
      ),
      tbody: ({ children }) => (
        <tbody className="bg-slate-900">{children}</tbody>
      ),
      tr: ({ children }) => (
        <tr className="border-b border-slate-700">{children}</tr>
      ),
      th: ({ children }) => (
        <th className="border border-slate-700 px-4 py-2 text-left font-semibold text-white bg-slate-800">
          {children}
        </th>
      ),
      td: ({ children }) => (
        <td className="border border-slate-700 px-4 py-2 text-slate-300 align-top">
          {children}
        </td>
      ),
    }),
    []
  );

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-slate-700 rounded w-3/4"></div>
          <div className="blog-hero-image-container bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-700 rounded w-full"></div>
            <div className="h-4 bg-slate-700 rounded w-5/6"></div>
            <div className="h-4 bg-slate-700 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary hover:text-accent">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // Get SEO configuration for this blog post
  const seoData = getBlogPostSEO(post);
  const articleUrl = `/blog/${post.slug}`;
  const articleImage = post.featuredImageUrl
    ? post.featuredImageUrl.startsWith('http')
      ? post.featuredImageUrl
      : normalizeImageUrl(post.featuredImageUrl)
    : '/og-image.jpg';

  const schemaGraph = [
    createArticleSchema({
      title: post.title,
      description: post.excerpt || seoData.description,
      url: articleUrl,
      image: articleImage,
      publishedAt: post.publishedAt || post.createdAt,
      updatedAt: post.updatedAt || post.createdAt,
      author:
        typeof post.author === 'string'
          ? post.author
          : post.author?.name || 'GrowLimo Team',
    }),
    createBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: post.title, url: articleUrl },
    ]),
  ];

  return (
    <>
      <SEO {...seoData} robots="index, follow" />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@graph': schemaGraph,
        }}
      />
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />

      <article className="bg-dark text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-slate-400 hover:text-primary mb-6 transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            {/* Tags */}
            {/* {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )} */}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              <span>{formatDate(post.publishedAt || post.createdAt)}</span>
              {post.author && (
                <>
                  <span>•</span>
                  <span>
                    By{' '}
                    {typeof post.author === 'string'
                      ? post.author
                      : post.author.name || 'GrowLimo Team'}
                  </span>
                </>
              )}
            </div>
          </header>

          {/* Featured Image - Hero image with optimized aspect ratio for LCP */}
          {post.featuredImageUrl && (
            <div className="mb-8 rounded-lg overflow-hidden blog-hero-image-container">
              <OptimizedImage
                src={normalizeImageUrl(post.featuredImageUrl)}
                alt={post.title}
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <Suspense
              fallback={
                <div className="space-y-4">
                  <div className="h-5 w-5/6 rounded bg-slate-800" />
                  <div className="h-5 w-full rounded bg-slate-800" />
                  <div className="h-5 w-4/5 rounded bg-slate-800" />
                </div>
              }
            >
              <MarkdownRenderer
                className="text-slate-300 leading-relaxed"
                components={markdownComponents}
              >
                {post.content}
              </MarkdownRenderer>
            </Suspense>
          </div>

          {/* Author Bio Section — E-E-A-T Signal */}
          <div className="border-t border-slate-700 pt-8 mb-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold flex-shrink-0">
                {(typeof post.author === 'string'
                  ? post.author
                  : post.author?.name || 'G'
                )
                  .charAt(0)
                  .toUpperCase()}
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-1">
                  Written by{' '}
                  {typeof post.author === 'string'
                    ? post.author
                    : post.author?.name || 'GrowLimo Team'}
                </h2>
                <p className="text-primary text-sm font-medium mb-2">
                  {typeof post.author === 'object' && post.author?.role
                    ? post.author.role
                    : 'Healthcare Marketing Specialist at GrowLimo'}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {typeof post.author === 'object' && post.author?.bio
                    ? post.author.bio
                    : 'Our team of healthcare marketing specialists combines deep industry expertise with data-driven strategies to help medical practices grow. With experience serving 500+ healthcare providers, we specialize in HIPAA-compliant SEO, patient acquisition, and medical practice growth.'}
                </p>
              </div>
            </div>
          </div>

          {/* Medical Content Disclaimer — E-E-A-T Trust Signal */}
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-lg p-4 mb-8">
            <p className="text-slate-500 text-xs leading-relaxed">
              <strong className="text-slate-400">Disclaimer:</strong> This
              article is for informational and marketing education purposes
              only. It does not constitute medical advice. Always consult
              qualified healthcare professionals for medical decisions. GrowLimo
              is a healthcare marketing agency — we help practices grow through
              compliant, ethical digital marketing strategies.
            </p>
          </div>

          {/* Share Buttons */}
          <div className="border-t border-slate-700 pt-8 mb-12">
            <h2 className="text-xl font-semibold text-white mb-4">
              Share this post
            </h2>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition"
                aria-label="Share on Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition"
                aria-label="Share on LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(shareUrl);
                    setToast({
                      message: 'Link copied to clipboard!',
                      type: 'success',
                    });
                  } catch {
                    setToast({
                      message: 'Failed to copy link. Please copy it manually.',
                      type: 'error',
                    });
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition"
                aria-label="Copy link"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy Link
              </button>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="border-t border-slate-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogItem key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Internal Links to Money Pages — passes link juice from blog to services */}
      {post && (
        <RelatedLinks
          content={`${post.title} ${post.excerpt || ''} ${(post.tags || []).join(' ')}`}
          type="blog"
        />
      )}
    </>
  );
}

export default BlogPost;
