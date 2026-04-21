/**
 * Normalize image URL for display
 * Handles both relative and absolute URLs
 * In development, ensures relative URLs work with proxy
 * In production, ensures absolute URLs work correctly
 */
export const normalizeImageUrl = (url) => {
  if (!url) return null

  // If it's already a full URL (http/https), return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }

  // If it starts with /uploads, it's already a relative path - return as is
  // The Vite proxy will handle it in development
  if (url.startsWith('/uploads/')) {
    return url
  }

  // If it's a relative path without leading slash, add it
  if (url.startsWith('uploads/')) {
    return `/${url}`
  }

  // Otherwise, assume it's a relative path and add leading slash
  return `/${url}`
}

