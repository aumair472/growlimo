import Link from 'next/link';
import { useEffect, useState } from 'react';

function Hero({ h1Text }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const triggerAnimations = () => setIsLoaded(true);
      if ('requestIdleCallback' in window) {
        requestIdleCallback(triggerAnimations, { timeout: 200 });
      } else {
        setTimeout(triggerAnimations, 50);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="bg-dark text-white pt-8 md:pt-8 lg:pt-10 pb-8  md:pb-8 lg:pb-10 relative overflow-hidden min-h-[100vh] md:min-h-[90vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-slate-900 to-dark">
          <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl will-change-[opacity] animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-48 h-48 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl will-change-[opacity] animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[600px] md:h-[600px] bg-primary/[0.03] rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div
              className={`inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-slate-900/90 md:bg-slate-900/80 backdrop-blur-md border border-primary/40 md:border-primary/30 mb-6 md:mb-8 mx-auto block text-center shadow-lg transition-opacity duration-700 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="text-xs md:text-sm font-semibold text-primary">
                Digital Marketing Specialists
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 leading-[1.1] md:leading-tight text-center"
              style={{
                opacity: 1,
                transform: 'none',
                contentVisibility: 'auto',
              }}
            >
              {h1Text ? (
                <span className="text-white drop-shadow-2xl block">
                  {h1Text}
                </span>
              ) : (
                <>
                  <span className="text-white drop-shadow-2xl block">
                    Digital Marketing Agency That
                  </span>
                  <span className="text-white drop-shadow-2xl block">
                    Grows Businesses Across
                  </span>
                  <span className="text-primary drop-shadow-2xl block">
                    The United States
                  </span>
                </>
              )}
            </h1>

            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white md:text-slate-100 mb-8 md:mb-10 leading-relaxed text-center max-w-3xl mx-auto drop-shadow-lg px-2 transition-opacity duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              Specialized digital marketing for local businesses, startups, and
              growing companies nationwide. Dominate local search, run high-ROI
              ad campaigns, and automate customer acquisition across the USA.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 md:gap-5 mb-10 md:mb-12 justify-center items-stretch sm:items-center px-2 transition-opacity duration-1000 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <Link
                href="/contact/"
                className="group relative bg-primary hover:bg-accent text-slate-950 font-bold py-4 md:py-4 px-8 md:px-10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 md:hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 text-center w-full sm:min-w-[280px] sm:w-auto flex items-center justify-center text-base md:text-lg shadow-lg shadow-primary/30"
              >
                <span className="relative z-10">
                  See How We Grow Your Business
                </span>
                <div className="absolute inset-0 rounded-xl bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            <p
              className={`text-sm sm:text-base text-slate-300 text-center max-w-2xl mx-auto mb-10 transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              Trusted by 500+ businesses across the United States
            </p>

            <div
              className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-white md:text-slate-200 justify-center px-2 transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="group flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg hover:bg-slate-800/60 transition-all duration-300 cursor-default">
                <div className="p-1.5 rounded-full bg-primary/30 md:bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-semibold md:font-medium group-hover:text-white transition-colors duration-300">
                  Google Partner Certified
                </span>
              </div>
              <div className="group flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg hover:bg-slate-800/60 transition-all duration-300 cursor-default">
                <div className="p-1.5 rounded-full bg-primary/30 md:bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="font-semibold md:font-medium group-hover:text-white transition-colors duration-300">
                  AI-Powered Marketing
                </span>
              </div>
              <div className="group flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg hover:bg-slate-800/60 transition-all duration-300 cursor-default">
                <div className="p-1.5 rounded-full bg-primary/30 md:bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <span className="font-semibold md:font-medium group-hover:text-white transition-colors duration-300">
                  713% Avg. Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
