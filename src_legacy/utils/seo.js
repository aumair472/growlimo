/**
 * SEO Utility Functions
 * Helper functions for processing SEO-related data
 */

const SITE_URL = 'https://growlimo.com'

/**
 * URL parameters to strip from canonical URLs
 * These are tracking, session, or non-content parameters
 */
const STRIP_PARAMS = [
  // Google Ads & Analytics
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id',
  'gclid', 'gclsrc', 'dclid', 'gbraid', 'wbraid',
  // Facebook
  'fbclid', 'fb_action_ids', 'fb_action_types', 'fb_source', 'fb_ref',
  '_fbc',         // Facebook click ID (MEDIUM FIX 2)
  '_fbp',         // Facebook browser ID (MEDIUM FIX 2)
  // Microsoft/Bing
  'msclkid',
  // TikTok & LinkedIn & Twitter/X (MEDIUM FIX 2)
  'ttclid',       // TikTok Ads
  'li_fat_id',    // LinkedIn Ads
  'twclid',       // Twitter/X Ads
  'irclickid',    // Impact Radius
  // Other tracking
  'mc_cid', 'mc_eid', // Mailchimp
  'oly_anon_id', 'oly_enc_id', // Omeda
  '_hsenc', '_hsmi', 'hsCtaTracking', // HubSpot
  'vero_id', 'vero_conv',
  '__s', // Drip
  'ref', 'referrer',
  // Session & misc
  'sessionid', 'session_id', 'sid',
  '_ga', '_gl', '_gid',
  'source', 'affiliate', 'partner',
]

/**
 * Normalize a URL for canonical usage
 * - Forces HTTPS protocol
 * - Removes www subdomain (site uses non-www)
 * - Removes URL fragments (#...)
 * - Removes tracking parameters
 * - Adds trailing slash (except homepage) (CRITICAL FIX 2)
 * 
 * @param {string} url - URL to normalize
 * @returns {string} Normalized canonical URL
 */
export function normalizeCanonicalUrl(url) {
  if (!url) return SITE_URL

  try {
    // Handle relative URLs
    let absoluteUrl = url
    if (url.startsWith('/')) {
      absoluteUrl = `${SITE_URL}${url}`
    } else if (!url.startsWith('http')) {
      absoluteUrl = `${SITE_URL}/${url}`
    }

    const urlObj = new URL(absoluteUrl)

    // Force HTTPS
    urlObj.protocol = 'https:'

    // Remove www subdomain (site uses growlimo.com without www)
    if (urlObj.hostname.startsWith('www.')) {
      urlObj.hostname = urlObj.hostname.replace(/^www\./, '')
    }

    // Ensure correct domain
    if (!urlObj.hostname.includes('growlimo.com')) {
      urlObj.hostname = 'growlimo.com'
    }

    // Preserve original casing for pathname, but normalize hostname (MEDIUM FIX 1)
    urlObj.hostname = urlObj.hostname.toLowerCase()
    let pathname = urlObj.pathname

    // Remove URL fragments
    urlObj.hash = ''

    // Remove tracking parameters
    STRIP_PARAMS.forEach(param => {
      urlObj.searchParams.delete(param)
    })

    // If no remaining search params, remove the ? entirely
    const hasParams = urlObj.searchParams.toString().length > 0

    // Add trailing slash (except homepage already has /) (CRITICAL FIX 2)
    if (pathname !== '/' && !pathname.endsWith('/')) {
      pathname = pathname + '/'
    }

    // Build final URL
    let finalUrl = `${urlObj.protocol}//${urlObj.hostname}${pathname}`

    // Add remaining params if any (non-tracking params)
    if (hasParams) {
      finalUrl += `?${urlObj.searchParams.toString()}`
    }

    return finalUrl
  } catch (e) {
    // If URL parsing fails, return clean site URL
    return SITE_URL
  }
}

/**
 * Build canonical URL from pathname
 * Adds trailing slash for server canonical consistency (CRITICAL FIX 1)
 * 
 * @param {string} pathname - Route pathname (e.g., '/services')
 * @returns {string} Full canonical URL
 */
export function buildCanonicalUrl(pathname) {
  if (!pathname || pathname === '/') {
    return SITE_URL
  }

  // Normalize the pathname without lowercasing (MEDIUM FIX 1)
  let cleanPath = pathname

  // Remove leading slash for joining
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1)
  }

  // Remove fragments
  cleanPath = cleanPath.split('#')[0]

  // Remove query params
  cleanPath = cleanPath.split('?')[0]

  // Ensure trailing slash (server canonical form) (CRITICAL FIX 1)
  if (!cleanPath.endsWith('/')) {
    cleanPath = cleanPath + '/'
  }

  return `${SITE_URL}/${cleanPath}`
}

/**
 * Strip markdown formatting from text
 * Removes markdown symbols, links, images, and formatting
 * @param {string} markdown - Markdown text to strip
 * @returns {string} Plain text without markdown
 */
export function stripMarkdownToText(markdown) {
  if (!markdown) return ''

  let text = markdown

  // MINOR FIX 1: Strip HTML tags and entities
  text = text.replace(/<[^>]+>/g, ' ')
  text = text.replace(/&nbsp;/g, ' ')
  text = text.replace(/&amp;/g, '&')
  text = text.replace(/&lt;/g, '<')
  text = text.replace(/&gt;/g, '>')

  // Remove images: ![alt](url)
  text = text.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')

  // Remove links: [text](url) -> text
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')

  // Remove headers: # ## ### etc
  text = text.replace(/^#{1,6}\s+/gm, '')

  // Remove bold/italic: **text** or *text* or __text__ or _text_
  text = text.replace(/(\*\*|__)(.*?)\1/g, '$2')
  text = text.replace(/(\*|_)(.*?)\1/g, '$2')

  // Remove code blocks: ```code```
  text = text.replace(/```[\s\S]*?```/g, '')

  // Remove inline code: `code`
  text = text.replace(/`([^`]*)`/g, '$1')

  // Remove blockquotes: > text
  text = text.replace(/^>\s+/gm, '')

  // Remove horizontal rules: --- or ***
  text = text.replace(/^[-*]{3,}\s*$/gm, '')

  // Remove list markers: - or * or 1.
  text = text.replace(/^[\s]*[-*+]\s+/gm, '')
  text = text.replace(/^[\s]*\d+\.\s+/gm, '')

  // Remove extra whitespace and newlines
  text = text.replace(/\n{2,}/g, ' ')
  text = text.replace(/\s{2,}/g, ' ')

  return text.trim()
}

/**
 * Truncate text to a maximum length
 * Adds ellipsis if text is truncated
 * @param {string} text - Text to truncate
 * @param {number} max - Maximum length (default: 155)
 * @returns {string} Truncated text
 */
export function truncate(text, max = 155) {
  if (!text) return ''
  if (text.length <= max) return text

  // Truncate at word boundary
  const truncated = text.substring(0, max)
  const lastSpace = truncated.lastIndexOf(' ')

  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...'
  }

  return truncated + '...'
}

/**
 * Build full image URL from relative or absolute path
 * @param {string} image - Image path (relative or absolute)
 * @returns {string} Full image URL
 */
export function buildImageUrl(image) {
  if (!image) return ''

  // If already absolute URL, return as-is
  if (image.startsWith('http://') || image.startsWith('https://')) {
    return image
  }

  // Get API base URL from environment (MEDIUM FIX 3)
  const apiBaseUrl =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) ||
    (typeof process !== 'undefined' && process.env?.VITE_API_BASE_URL) ||
    'https://growlimo.com'

  // Ensure image path starts with /
  const imagePath = image.startsWith('/') ? image : `/${image}`

  // Remove trailing slash from API base URL if present
  const baseUrl = apiBaseUrl.endsWith('/') ? apiBaseUrl.slice(0, -1) : apiBaseUrl

  return `${baseUrl}${imagePath}`
}

/**
 * Generate meta description from blog post
 * Uses excerpt if available, otherwise strips and truncates content
 * @param {object} post - Blog post object
 * @returns {string} Meta description
 */
export function generateMetaDescription(post) {
  if (!post) return ''

  // Use excerpt if available
  if (post.excerpt) {
    return truncate(post.excerpt, 155) // MINOR FIX 2
  }

  // Fall back to content (try different field names)
  const content = post.contentMarkdown || post.content || ''

  if (content) {
    const plainText = stripMarkdownToText(content)
    return truncate(plainText, 155)
  }

  return ''
}

/**
 * Get featured image URL from post
 * Handles different field names and builds full URL
 * @param {object} post - Blog post object
 * @returns {string} Full featured image URL
 */
export function getFeaturedImageUrl(post) {
  if (!post) return ''

  // Try different field names
  const image = post.featuredImageUrl || post.featuredImage || post.image || ''

  return buildImageUrl(image)
}

export default {
  normalizeCanonicalUrl,
  buildCanonicalUrl,
  stripMarkdownToText,
  truncate,
  buildImageUrl,
  generateMetaDescription,
  getFeaturedImageUrl,
}
