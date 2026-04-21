import axios from 'axios'

// Get API base URL from environment variable
// Priority: VITE_API_URL env var > window.location.origin (fallback)
// In development, Vite proxy handles /api routes (no baseURL needed)
// In production, use VITE_API_URL environment variable or fallback to same origin
const getApiBaseURL = () => {
  // Use environment variable if set
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL
  }
  
  // Fallback to same origin (for same-domain API)
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  
  // Server-side fallback (shouldn't happen in browser, but just in case)
  return ''
}

// Create axios instance with base URL
const api = axios.create({
  baseURL: getApiBaseURL(),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout (reduced for faster failure detection)
})

// Request interceptor to add auth token and handle FormData
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('growlimo_admin_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // If the data is FormData, remove Content-Type header to let browser set it with boundary
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type']
    }
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('growlimo_admin_token')
      if (window.location.pathname.startsWith('/admin')) {
        window.location.href = '/admin/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api

