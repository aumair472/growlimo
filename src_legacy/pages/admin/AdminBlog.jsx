import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../config/axios'
import { removeToken } from '../../utils/auth'
import BlogEditor from '../../components/blog/BlogEditor'
import Toast from '../../components/common/Toast'
import SEO from '../../components/seo/SEO'

function AdminBlog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingPost, setEditingPost] = useState(null)
  const [showEditor, setShowEditor] = useState(false)
  const [error, setError] = useState('')
  const [toast, setToast] = useState({ message: '', type: 'success' })
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, postId: null, postTitle: '' })
  const navigate = useNavigate()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await api.get('/api/blog?limit=100')
      if (response.data.success) {
        setPosts(response.data.data)
      }
    } catch (err) {
      if (err.response?.status === 401) {
        removeToken()
        navigate('/admin/login')
      }
      setError('Failed to load posts')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteClick = (id, title) => {
    setDeleteConfirm({ show: true, postId: id, postTitle: title })
  }

  const handleDeleteConfirm = async () => {
    if (!deleteConfirm.postId) return

    try {
      const response = await api.delete(`/api/blog/${deleteConfirm.postId}`)
      if (response.data.success) {
        setPosts(posts.filter((p) => p.id !== deleteConfirm.postId))
        setToast({ message: 'Post deleted successfully', type: 'success' })
        setDeleteConfirm({ show: false, postId: null, postTitle: '' })
      }
    } catch (err) {
      const errorMsg = err.response?.data?.error?.message || err.message || 'Failed to delete post'
      setToast({ message: errorMsg, type: 'error' })
      setDeleteConfirm({ show: false, postId: null, postTitle: '' })
    }
  }

  const handleDeleteCancel = () => {
    setDeleteConfirm({ show: false, postId: null, postTitle: '' })
  }

  const handleSave = (savedPost) => {
    if (editingPost) {
      setPosts(posts.map((p) => (p.id === savedPost.id ? savedPost : p)))
    } else {
      setPosts([savedPost, ...posts])
    }
    setShowEditor(false)
    setEditingPost(null)
  }

  const handleCancel = () => {
    setShowEditor(false)
    setEditingPost(null)
  }

  const handleEdit = (post) => {
    setEditingPost(post)
    setShowEditor(true)
  }

  const handleNew = () => {
    setEditingPost(null)
    setShowEditor(true)
  }

  const handleLogout = () => {
    removeToken()
    navigate('/admin/login')
  }

  if (showEditor) {
    return (
      <>
        <SEO
          title={`${editingPost ? 'Edit Post' : 'New Post'} - Admin - GrowLimo`}
          description="GrowLimo admin blog editor"
          robots="noindex, nofollow"
        />
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <button
              onClick={handleCancel}
              className="text-slate-400 hover:text-primary mb-4"
            >
              ← Back to Posts
            </button>
            <h1 className="text-3xl font-bold text-white">
              {editingPost ? 'Edit Post' : 'New Post'}
            </h1>
          </div>
          <div className="glass-card p-6">
            <BlogEditor
              post={editingPost}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SEO
        title="Blog Management - Admin - GrowLimo"
        description="GrowLimo admin blog management"
        robots="noindex, nofollow"
      />
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />
      
      {/* Delete Confirmation Modal */}
      {deleteConfirm.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-card p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-white mb-4">Confirm Delete</h2>
            <p className="text-slate-300 mb-6">
              Are you sure you want to delete <strong className="text-white">"{deleteConfirm.postTitle}"</strong>? This action cannot be undone.
            </p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={handleDeleteCancel}
                className="bg-slate-800 border border-slate-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-slate-700 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Blog Management</h1>
          <div className="flex gap-4">
            <button
              onClick={handleNew}
              className="bg-primary hover:bg-accent text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Add New Post
            </button>
            <button
              onClick={handleLogout}
              className="bg-slate-800 border border-slate-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-slate-700 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-slate-300">Loading posts...</p>
        ) : (
          <div className="glass-card p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-white font-semibold">Title</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Date</th>
                  <th className="text-right py-3 px-4 text-white font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-8 text-slate-400">
                      No posts found. Create your first post!
                    </td>
                  </tr>
                ) : (
                  posts.map((post) => (
                    <tr key={post.id} className="border-b border-slate-700">
                      <td className="py-3 px-4 text-white">{post.title}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            post.publishedAt
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          {post.publishedAt ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-400">
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString()
                          : 'Draft'}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEdit(post)}
                            className="text-primary hover:text-accent"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(post.id, post.title)}
                            className="text-red-400 hover:text-red-300"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default AdminBlog
