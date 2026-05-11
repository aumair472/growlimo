import Link from 'next/link';

function Hero({ h1Text }) {

  return (
    <section
      className="bg-dark text-white pt-20 pb-16 md:pt-24 md:pb-20 relative flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-dark via-slate-900/80 to-dark" aria-hidden="true"></div>

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div
              className="inline-flex items-center px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-slate-900 border border-primary/40 md:border-primary/30 mb-6 md:mb-8 mx-auto block text-center"
            >
              <span className="text-xs md:text-sm font-semibold text-primary">
                Digital Marketing Specialists
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8 leading-[1.1] md:leading-tight text-center"
            >
              {h1Text ? (
                <span className="text-white block">
                  {h1Text}
                </span>
              ) : (
                <>
                  <span className="text-white block">
                    Digital Marketing Agency That
                  </span>
                  <span className="text-white block">
                    Grows Businesses Across
                  </span>
                  <span className="text-primary block">
                    The United States
                  </span>
                </>
              )}
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white md:text-slate-100 mb-8 md:mb-10 leading-relaxed text-center max-w-3xl mx-auto px-2"
            >
              Specialized digital marketing for local businesses, startups, and
              growing companies nationwide. Dominate local search, run high-ROI
              ad campaigns, and automate customer acquisition across the USA.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-10 md:mb-12 justify-center items-stretch sm:items-center px-2"
            >
              <Link
                href="/contact/"
                className="bg-primary hover:bg-accent text-slate-950 font-bold py-4 px-8 md:px-10 rounded-xl transition-colors duration-300 text-center w-full sm:w-auto flex items-center justify-center text-base md:text-lg"
              >
                  See How We Grow Your Business
                </Link>
            </div>

            <p
              className="text-sm sm:text-base text-slate-300 text-center max-w-2xl mx-auto mb-10"
            >
              Trusted by 500+ businesses across the United States
            </p>

            <div
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-white justify-center px-2"
            >
              <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg cursor-default">
                <div className="p-1.5 rounded-full bg-primary/20 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
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
                <span className="font-semibold">
                  Google Partner Certified
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg cursor-default">
                <div className="p-1.5 rounded-full bg-primary/20 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
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
                <span className="font-semibold">
                  AI-Powered Marketing
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg cursor-default">
                <div className="p-1.5 rounded-full bg-primary/20 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
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
                <span className="font-semibold">
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
