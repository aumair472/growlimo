import { lazy, Suspense, useState, useMemo } from 'react'
import api from '../../config/axios'
import { getAuthHeadersMultipart } from '../../utils/auth'
import { normalizeImageUrl } from '../../utils/imageUrl'
import OptimizedImage from '../common/OptimizedImage'

const MarkdownRenderer = lazy(() => import('./MarkdownRenderer'))

function BlogEditor({ post = null, onSave, onCancel }) {
  const [title, setTitle] = useState(post?.title || '')
  const [slug, setSlug] = useState(post?.slug || '')
  const [excerpt, setExcerpt] = useState(post?.excerpt || '')
  const [content, setContent] = useState(post?.content || '')
  const [tags, setTags] = useState(post?.tags?.join(', ') || '')
  const [featuredImageUrl, setFeaturedImageUrl] = useState(post?.featuredImageUrl || '')
  const [publishedAt, setPublishedAt] = useState(
    post?.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : ''
  )
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(
    post?.featuredImageUrl ? normalizeImageUrl(post.featuredImageUrl) : featuredImageUrl ? normalizeImageUrl(featuredImageUrl) : ''
  )
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  // Memoize markdown components for preview
  const markdownComponents = useMemo(() => ({
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold text-white mt-6 mb-3">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold text-white mt-5 mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-white mt-4 mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-semibold text-white mt-3 mb-2">{children}</h4>
    ),
    p: ({ children }) => <p className="mb-3 text-slate-300 leading-relaxed">{children}</p>,
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-3 text-slate-300 space-y-1 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-3 text-slate-300 space-y-1 ml-4">
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
        className="max-w-full h-auto rounded-lg my-3"
        loading="lazy"
        {...props}
      />
    ),
    code: ({ inline, children }) => {
      if (inline) {
        return (
          <code className="bg-slate-800 px-2 py-1 rounded text-primary text-sm">
            {children}
          </code>
        )
      }
      return (
        <pre className="bg-slate-900 p-3 rounded-lg overflow-x-auto mb-3">
          <code className="text-slate-300 text-sm">{children}</code>
        </pre>
      )
    },
    pre: ({ children }) => (
      <pre className="bg-slate-900 p-3 rounded-lg overflow-x-auto mb-3">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-slate-400 my-3">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-4 border-slate-700" />,
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-slate-300">{children}</em>
    ),
    // Table components for GFM support
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
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
      <td className="border border-slate-700 px-4 py-2 text-slate-300">
        {children}
      </td>
    ),
  }), [])

  // Handle file selection and preview
  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      setError('Please select a JPEG, PNG, or WebP image file')
      return
    }

    // Validate file size (3MB)
    if (file.size > 3 * 1024 * 1024) {
      setError('File size must be less than 3MB')
      return
    }

    setImageFile(file)
    setError('')

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  // Handle image upload
  const handleImageUpload = async () => {
    if (!imageFile) {
      setError('Please select an image file first')
      return
    }

    setUploading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('image', imageFile)

      const response = await api.post('/api/upload', formData, {
        headers: getAuthHeadersMultipart(),
      })

      if (response.data.success && response.data.url) {
        // Normalize the URL before setting it
        const normalizedUrl = normalizeImageUrl(response.data.url)
        setFeaturedImageUrl(normalizedUrl)
        setImagePreview(normalizedUrl) // Update preview with normalized URL
        setImageFile(null)
        setError('')
        // Show success message
        alert('✅ Image uploaded successfully!\nURL: ' + normalizedUrl)
      } else {
        const errorMsg = response.data.error?.message || 'Upload failed - no URL returned'
        setError(errorMsg)
        alert('❌ Upload failed: ' + errorMsg)
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.error?.message ||
        err.message ||
        'Upload failed. Please try again.'
      setError(errorMsg)
      alert('❌ Upload error: ' + errorMsg)
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      const postData = {
        title,
        slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        excerpt,
        content,
        tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
        featuredImageUrl: featuredImageUrl || null, // Ensure it's null if empty string
        publishedAt: publishedAt || null,
      }

      let response
      if (post) {
        response = await api.put(`/api/blog/${post.id}`, postData)
      } else {
        response = await api.post('/api/blog', postData)
      }

      if (response.data.success) {
        onSave(response.data.data)
      } else {
        const errorMsg = typeof response.data.error === 'string'
          ? response.data.error
          : response.data.error?.message || 'Save failed'
        setError(errorMsg)
      }
    } catch (err) {
      const errorMsg = typeof err.response?.data?.error === 'string'
        ? err.response.data.error
        : err.response?.data?.error?.message || err.message || 'Save failed'
      setError(errorMsg)
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Title *
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Slug
        </label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="auto-generated from title"
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Excerpt *
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          rows={3}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="marketing, seo, ppc"
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Featured Image
        </label>
        <div className="space-y-3">
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            onChange={handleFileSelect}
            disabled={uploading}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-accent file:cursor-pointer"
          />

          {/* Preview */}
          {imagePreview && (
            <div className="mt-4">
              <p className="text-sm text-slate-400 mb-2">
                {imageFile ? 'Preview (click Upload to save):' : 'Current image:'}
              </p>
              <div className="relative inline-block">
                <OptimizedImage
                  src={imagePreview.startsWith('data:') ? imagePreview : normalizeImageUrl(imagePreview)}
                  alt="Preview"
                  className="max-w-xs rounded-lg border border-slate-700"
                  priority={true}
                />
                {imageFile && (
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    disabled={uploading}
                    className="mt-2 w-full bg-primary hover:bg-accent text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {uploading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Uploading...
                      </>
                    ) : (
                      '📤 Upload Image to Server'
                    )}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Image URL input (editable) */}
          {featuredImageUrl && (
            <div className="mt-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Image URL:
              </label>
              <input
                type="text"
                value={featuredImageUrl}
                onChange={(e) => {
                  const newUrl = e.target.value
                  setFeaturedImageUrl(newUrl)
                  if (!imageFile) {
                    setImagePreview(normalizeImageUrl(newUrl))
                  }
                }}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="/uploads/image.jpg"
              />
            </div>
          )}

          {uploading && (
            <div className="flex items-center gap-2 text-slate-400">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Uploading image...</span>
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Published Date
        </label>
        <input
          type="date"
          value={publishedAt}
          onChange={(e) => setPublishedAt(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Content (Markdown) *
        </label>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={20}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="# Title&#10;&#10;Your markdown content here..."
            />
          </div>
          <div className="glass-card p-4 overflow-auto max-h-[600px]">
            <h4 className="text-white font-semibold mb-4">Preview</h4>
            <div className="text-slate-300">
                <Suspense fallback={<p className="text-slate-400">Loading preview…</p>}>
                  <MarkdownRenderer components={markdownComponents}>
                    {content || '*Start typing to see preview...*'}
                  </MarkdownRenderer>
                </Suspense>
              </div>
            </div>
          </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={saving}
          className="bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50"
        >
          {saving ? 'Saving...' : post ? 'Update Post' : 'Create Post'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-slate-800 border border-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-700 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default BlogEditor
