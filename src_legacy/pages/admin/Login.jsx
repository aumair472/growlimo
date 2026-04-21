import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SEO from '../../components/seo/SEO'
import api from '../../config/axios'
import { setToken } from '../../utils/auth'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await api.post('/api/auth/login', {
        email,
        password,
      })

      if (response.data.success && response.data.token) {
        setToken(response.data.token)
        navigate('/admin/blog')
      } else {
        setError(response.data.error || 'Login failed')
      }
    } catch (err) {
      const errorData = err.response?.data?.error
      if (errorData?.details) {
        // Handle validation errors
        const errorMessages = Object.values(errorData.details).join(', ')
        setError(errorMessages || errorData.message || 'Login failed')
      } else {
        setError(errorData?.message || 'Login failed. Please check your credentials.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Admin Login - GrowLimo"
        description="GrowLimo admin login"
        robots="noindex, nofollow"
      />
      <div className="min-h-screen bg-dark flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="glass-card p-8">
            <h1 className="text-3xl font-bold text-white mb-2 text-center">
              Admin Login
            </h1>
            <p className="text-slate-400 text-center mb-8">
              Sign in to manage blog posts
            </p>

            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="admin@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Logging in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
