import { memo, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { normalizeImageUrl } from '../../utils/imageUrl'
import OptimizedImage from '../common/OptimizedImage'

function BlogItem({ post }) {
  // CWV INP: Memoize formatDate to avoid recreating on every render
  const formatDate = useMemo(() => {
    return (dateString) => {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
  }, [])

  // Memoize imageUrl to avoid recalculation
  const imageUrl = useMemo(() => normalizeImageUrl(post.featuredImageUrl), [post.featuredImageUrl])

  // CWV INP: Memoize prefetch handler to reduce event handler cost
  const handleMouseEnter = useCallback(() => {
    // Prefetch the blog post page on hover for faster navigation
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = `/blog/${post.slug}`
        document.head.appendChild(link)
      })
    }
  }, [post.slug])

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block glass-card overflow-hidden hover:scale-[1.01] transition-transform duration-300"
      onMouseEnter={handleMouseEnter}
    >
      <div className="flex flex-col md:flex-row">
        {/* CWV CLS: Featured image with fixed aspect ratio container - image fills completely */}
        {imageUrl && (
          <div className="md:w-1/3 h-48 md:h-auto flex-shrink-0 blog-image-container">
            <OptimizedImage
              src={imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className={`p-6 flex-1 ${imageUrl ? 'md:w-2/3' : 'w-full'}`}>
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-slate-300 mb-4 line-clamp-3">{post.excerpt}</p>

          {/* Meta */}
          <div className="text-sm text-slate-400 flex items-center justify-between">
            <span>{formatDate(post.publishedAt || post.createdAt)}</span>
            {post.author && (
              <span>By {typeof post.author === 'string' ? post.author : post.author.name || 'GrowLimo Team'}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

// Memoize component to prevent unnecessary re-renders
export default memo(BlogItem)

