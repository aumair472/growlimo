import { useState, useEffect } from 'react'
import api from '../../config/axios'
import BlogItem from './BlogItem'
import { getCache, setCache, generateCacheKey } from '../../utils/cache'
import { getPaginatedBlogPostsFromCache } from '../../utils/blogCache'

function BlogList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPosts(currentPage)
  }, [currentPage])

  const fetchPosts = async (page) => {
    try {
      setLoading(true)
      const cacheKey = generateCacheKey('/api/blog', { page })

      // Check cache first
      const cachedData = getCache(cacheKey)
      if (cachedData) {
        setPosts(cachedData.posts)
        setTotalPages(cachedData.totalPages)
        setLoading(false)
        return
      }

      const response = await api.get(`/api/blog?page=${page}`)
      if (response.data.success) {
        const postsData = response.data.data
        const totalPagesData = response.data.meta.totalPages
        setPosts(postsData)
        setTotalPages(totalPagesData)

        // Cache the response
        setCache(cacheKey, {
          posts: postsData,
          totalPages: totalPagesData,
        })
      }
    } catch (err) {
      const fallbackData = await getPaginatedBlogPostsFromCache(page)
      if (fallbackData.posts.length > 0) {
        setPosts(fallbackData.posts)
        setTotalPages(fallbackData.totalPages)
        return
      }

      setError('Failed to load blog posts')
      console.error('Error fetching posts:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 h-48 md:h-auto bg-slate-700 flex-shrink-0 blog-image-container"></div>
              <div className="p-6 flex-1 md:w-2/3 space-y-3">
                <div className="h-4 bg-slate-700 rounded w-1/4"></div>
                <div className="h-6 bg-slate-700 rounded w-3/4"></div>
                <div className="h-4 bg-slate-700 rounded w-full"></div>
                <div className="h-4 bg-slate-700 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400">{error}</p>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-300">No blog posts found.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="space-y-6 mb-8">
        {posts.map((post) => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>
          <span className="text-slate-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default BlogList
