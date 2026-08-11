import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ENC, WA_MSG, handleCall, handleWhatsApp } from '../lib/contactProtection';
import { CALENDLY_URL } from '../lib/calendly';
import BookingModal from './common/BookingModal';

export default function FloatingContact() {
  const router = useRouter();
  const mountedAt = useRef(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    // Record exact time this component became interactive — used to gate bot clicks
    mountedAt.current = Date.now();
  }, []);

  // Exclude Dubai and Australia landing pages (which have their own local WhatsApp)
  const excludePaths = ['/dubai', '/australia'];
  const currentPath = router.pathname.replace(/\/$/, '');
  if (excludePaths.includes(currentPath)) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Phone Call Button — no tel: in HTML, JS-only navigation */}
        <button
          type="button"
          onClick={() => handleCall(ENC.US_PHONE, mountedAt.current)}
          className="flex items-center justify-center w-14 h-14 bg-[#DD6613] hover:bg-[#FB923C] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#DD6613]/30 cursor-pointer"
          aria-label="Call US Office"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>

        {/* WhatsApp Chat Button — no wa.me href in HTML, JS-only navigation */}
        <button
          type="button"
          onClick={() => handleWhatsApp(ENC.US_PHONE, WA_MSG.US, mountedAt.current)}
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </button>

        {/* Book a Call Button — opens the Calendly modal. Hidden when the
            booking URL is unset so the stack never shows a dead button. */}
        {CALENDLY_URL && (
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="flex items-center gap-2.5 h-14 pl-5 pr-6 bg-[#00C68A] hover:bg-[#0FB786] text-[#080D18] font-sora font-extrabold text-[15px] rounded-full shadow-2xl shadow-[#00C68A]/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#00C68A]/30 cursor-pointer whitespace-nowrap"
            aria-label="Book a free strategy call"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Call
          </button>
        )}
      </div>

      {/* ── Honeypot trap ───────────────────────────────────────────────────
          Hidden from real users (display:none + aria-hidden + tabIndex=-1).
          Dumb scrapers that read all href attributes will harvest this fake
          +1-555 number instead of the real one — any robocall to it confirms
          bot activity. Real humans never see or click it.
      ─────────────────────────────────────────────────────────────────────── */}
      <a
        href="tel:+15550000000"
        aria-hidden="true"
        tabIndex="-1"
        rel="nofollow"
        style={{ display: 'none', visibility: 'hidden', position: 'absolute', left: '-9999px' }}
      >
        {/* honeypot */}
      </a>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        source="floating-cta"
      />
    </>
  );
}
