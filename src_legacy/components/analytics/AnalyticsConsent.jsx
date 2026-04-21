import { useState, useEffect } from 'react'

function AnalyticsConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('analytics_consent')
    const analyticsEnabled = import.meta.env.VITE_ANALYTICS_ENABLED === 'true'

    if (!consent && analyticsEnabled) {
      // Show consent modal after a short delay
      const timer = setTimeout(() => {
        setShow(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('analytics_consent', 'accepted')
    setShow(false)
    window.dispatchEvent(new CustomEvent('analytics-consent-given'))
  }

  const handleDecline = () => {
    localStorage.setItem('analytics_consent', 'declined')
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
      aria-describedby="consent-description"
    >
      <div className="glass-card p-6 max-w-md w-full animate-slide-up">
        <h2 id="consent-title" className="text-xl font-bold text-white mb-3">
          Cookie & Analytics Consent
        </h2>
        <p id="consent-description" className="text-slate-300 mb-6">
          We use cookies and analytics to improve your experience and understand
          how you use our website. You can accept or decline analytics cookies.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-primary hover:bg-accent text-white font-semibold py-2 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark"
            aria-label="Accept analytics cookies"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark"
            aria-label="Decline analytics cookies"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsConsent
