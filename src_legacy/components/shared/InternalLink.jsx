import { Link } from 'react-router-dom'

/**
 * Internal Link Component
 * Styled internal link for blog posts, service pages, and case studies
 * 
 * @param {string} to - Internal route path
 * @param {string} children - Link text
 * @param {string} type - Link type: 'service', 'blog', 'case-study'
 */
function InternalLink({ to, children, type = 'default' }) {
    const typeStyles = {
        service: 'text-primary hover:text-accent font-semibold',
        blog: 'text-blue-400 hover:text-blue-300',
        'case-study': 'text-green-400 hover:text-green-300',
        default: 'text-primary hover:text-accent',
    }

    const style = typeStyles[type] || typeStyles.default

    return (
        <Link
            to={to}
            className={`${style} underline transition-colors duration-200 inline-flex items-center gap-1`}
        >
            {children}
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
            </svg>
        </Link>
    )
}

export default InternalLink
