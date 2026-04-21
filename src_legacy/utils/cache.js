/**
 * Simple in-memory cache for API responses
 * Reduces redundant API calls and improves performance
 */

const cache = new Map()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

/**
 * Get cached data if available and not expired
 * @param {string} key - Cache key
 * @returns {any|null} - Cached data or null if expired/not found
 */
export const getCache = (key) => {
  const cached = cache.get(key)
  if (!cached) return null

  const now = Date.now()
  if (now - cached.timestamp > CACHE_DURATION) {
    cache.delete(key)
    return null
  }

  return cached.data
}

/**
 * Set data in cache
 * @param {string} key - Cache key
 * @param {any} data - Data to cache
 */
export const setCache = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  })
}

/**
 * Clear specific cache entry
 * @param {string} key - Cache key to clear
 */
export const clearCache = (key) => {
  cache.delete(key)
}

/**
 * Clear all cache
 */
export const clearAllCache = () => {
  cache.clear()
}

/**
 * Generate cache key from URL and params
 * @param {string} url - API URL
 * @param {object} params - Query parameters
 * @returns {string} - Cache key
 */
export const generateCacheKey = (url, params = {}) => {
  const paramString = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&')
  return `${url}${paramString ? `?${paramString}` : ''}`
}

