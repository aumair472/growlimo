import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // In production, you could log to an error reporting service here
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo } })

    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // Optionally reload the page
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark text-white flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="glass-card p-8 rounded-lg">
              <div className="mb-6">
                <svg
                  className="w-24 h-24 mx-auto text-red-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <h1 className="text-3xl font-bold text-white mb-4">
                  Something went wrong
                </h1>
                <p className="text-slate-300 mb-6">
                  We're sorry, but something unexpected happened. Please try
                  refreshing the page or return to the homepage.
                </p>
              </div>

              {import.meta.env.DEV && this.state.error && (
                <details className="mb-6 text-left">
                  <summary className="cursor-pointer text-slate-400 hover:text-white mb-2">
                    Error Details (Development Only)
                  </summary>
                  <pre className="bg-slate-900 p-4 rounded text-xs overflow-auto max-h-64 text-red-400">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}

              <div className="flex gap-4 justify-center">
                <button
                  onClick={this.handleReset}
                  className="bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  Go to Homepage
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-slate-800 border border-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-700 transition"
                >
                  Refresh Page
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-sm text-slate-400 mb-4">
                  Need help? Contact us:
                </p>
                <a
                  href="/contact"
                  className="text-primary hover:text-accent underline"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
