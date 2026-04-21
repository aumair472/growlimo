/**
 * Reusable Google Business Profile Map Section
 * Displays an embedded Google Map alongside a compact GBP card with rating + CTAs.
 */
function GoogleMapSection() {
  return (
    <section className="bg-dark text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            Find Us on Google
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="lg:col-span-2 rounded-xl overflow-hidden border border-slate-700 min-h-[380px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.6222444942064!2d-106.55835230000001!3d35.0911702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220bdb2b4a3d25%3A0x5450dc22c0b53089!2sGrowlimo%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2s!4v1772475954319!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Growlimo Digital Marketing Agency - Google Maps Location"
              />
            </div>

            {/* GBP Card */}
            <div className="glass-card p-6 flex flex-col justify-between">
              {/* Name + Google badge */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">
                      Growlimo Digital Marketing Agency
                    </p>
                    <p className="text-slate-400 text-xs">
                      Marketing Agency · Albuquerque, NM
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-white">5.0</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+17247506935"
                  className="w-full text-center bg-primary hover:bg-accent text-white font-semibold py-3 px-4 rounded-lg transition text-sm flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call +1 (724) 750-6935
                </a>
                <a
                  href="https://www.google.com/search?q=Growlimo+Digital+Marketing+Agency+Albuquerque+NM#lrd=0x87220bdb2b4a3d25:0x5450dc22c0b53089,3,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-primary hover:bg-accent text-white font-semibold py-3 px-4 rounded-lg transition text-sm"
                >
                  Leave a Review
                </a>
                <a
                  href="https://maps.google.com/?cid=6075597939142897801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-lg transition text-sm border border-slate-600"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleMapSection;
