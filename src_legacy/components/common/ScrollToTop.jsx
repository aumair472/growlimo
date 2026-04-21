import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop component - Controls scroll behavior on route changes
 * Set scrollToTop={false} to prevent automatic scrolling on navigation
 */
function ScrollToTop({ scrollToTop = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top on every route change when enabled
    if (scrollToTop) {
      // Use a small timeout to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth', // Smooth scroll animation
        })
      }, 0)
    }
  }, [pathname, scrollToTop])

  return null
}

export default ScrollToTop

