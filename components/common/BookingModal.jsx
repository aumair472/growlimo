import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { readUtmParams } from '../../lib/utm';
import { CALENDLY_URL } from '../../lib/calendly';

// Same flat dataLayer shape the contact form uses, so GTM can trigger on
// booking_* events without a second data model.
const pushEvent = (event, extra = {}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, booking_source: 'calendly', ...extra });
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function BookingModal({ isOpen, onClose, source = 'homepage' }) {
  const [mounted, setMounted] = useState(false);
  const [utm, setUtm] = useState(null);
  const cardRef = useRef(null);
  const restoreFocusRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useCalendlyEventListener({
    onDateAndTimeSelected: () => pushEvent('booking_date_selected', { booking_cta: source }),
    onEventScheduled: (e) =>
      pushEvent('booking_scheduled', {
        booking_cta: source,
        booking_event_uri: e?.data?.payload?.event?.uri || '',
      }),
  });

  // Read UTM + remember the trigger element on open; restore focus and page
  // scroll on close. Widget is only mounted while open so the ~100KB Calendly
  // script never lands in the homepage load.
  useEffect(() => {
    if (!isOpen) return;

    restoreFocusRef.current = document.activeElement;
    setUtm(readUtmParams());
    pushEvent('booking_modal_opened', { booking_cta: source });

    // html is the scrolling element on this site, so locking body alone leaves
    // the page scrollable behind the modal. Pad for the vanished scrollbar so
    // the layout underneath doesn't jump.
    const root = document.documentElement;
    const prevBodyOverflow = document.body.style.overflow;
    const prevRootOverflow = root.style.overflow;
    const prevRootPad = root.style.paddingRight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;

    document.body.style.overflow = 'hidden';
    root.style.overflow = 'hidden';
    if (scrollbarWidth > 0) root.style.paddingRight = `${scrollbarWidth}px`;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !cardRef.current) return;

      const items = Array.from(cardRef.current.querySelectorAll(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const focusTimer = window.setTimeout(() => {
      cardRef.current?.querySelector('button')?.focus();
    }, 0);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevBodyOverflow;
      root.style.overflow = prevRootOverflow;
      root.style.paddingRight = prevRootPad;
      restoreFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose, source]);

  if (!mounted || !isOpen || !CALENDLY_URL) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a free strategy call"
    >
      {/* Dark backdrop overlay */}
      <div
        className="booking-backdrop-enter absolute inset-0 bg-[#080D18]/85 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        ref={cardRef}
        className="booking-card-enter bg-[#1A2438] border border-[rgba(255,255,255,0.08)] rounded-[16px] sm:rounded-[20px] max-w-[1080px] w-full shadow-2xl relative z-10 overflow-hidden flex flex-col lg:flex-row"
        style={{ height: 'min(780px, 94vh)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-[#080D18]/70 hover:bg-[#080D18] text-[#8FA8C8] hover:text-[#00C68A] text-[18px] transition-colors duration-200 cursor-pointer"
          aria-label="Close booking dialog"
        >
          ✕
        </button>

        {/*
         * Left rail replaces Calendly's own event-details panel (hidden below):
         * theirs costs ~160px of vertical space inside the iframe and forces an
         * internal scrollbar. Ours sits outside the iframe, so the widget gets
         * the full height and stays scroll-free.
         */}
        <aside className="hidden lg:flex lg:w-[300px] shrink-0 flex-col gap-6 border-r border-[rgba(255,255,255,0.08)] bg-[#141C2E] p-8">
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#00C68A] font-sans mb-3">
              GrowLimo
            </div>
            <h2 className="font-sora font-extrabold text-[26px] text-[#F0F4FF] leading-tight">
              Intro Call
            </h2>
          </div>

          <div className="flex flex-col gap-3 text-[14px] text-[#8FA8C8] font-sans">
            <span className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-[#00C68A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              30 minutes
            </span>
            <span className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-[#00C68A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Google Meet — link sent on confirmation
            </span>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-[rgba(255,255,255,0.08)] pt-6">
            {[
              'Competitor marketing analysis',
              'Custom ROI & lead roadmap',
              'No-obligation transparent pricing',
            ].map((item) => (
              <span key={item} className="flex items-start gap-2.5 text-[13px] text-[#8FA8C8] font-sans">
                <svg className="w-4 h-4 text-[#00C68A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </aside>

        {/* Compact stand-in for the rail on small screens */}
        <div className="lg:hidden shrink-0 border-b border-[rgba(255,255,255,0.08)] bg-[#141C2E] px-5 py-3.5 pr-14">
          <h2 className="font-sora font-extrabold text-[16px] text-[#F0F4FF] leading-tight">
            Intro Call
          </h2>
          <p className="text-[12px] text-[#8FA8C8] font-sans mt-0.5">
            30 minutes · Google Meet
          </p>
        </div>

        {/*
         * The iframe renders Calendly's own light-themed scrollbar once the
         * slot list overflows, and nothing inside the frame is styleable from
         * here. Overhanging the iframe by a scrollbar width and clipping the
         * wrapper hides it; wheel and keyboard scrolling still work.
         */}
        <div className="flex-1 min-h-0 min-w-0 overflow-hidden">
          <InlineWidget
            url={CALENDLY_URL}
            styles={{ height: '100%', minWidth: '300px', width: 'calc(100% + 18px)' }}
            pageSettings={{
              backgroundColor: '1A2438',
              primaryColor: '00C68A',
              textColor: 'F0F4FF',
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              hideGdprBanner: true,
            }}
            utm={
              utm
                ? {
                    utmSource: utm.utmSource || 'direct',
                    utmMedium: utm.utmMedium || 'none',
                    utmCampaign: utm.utmCampaign || 'organic',
                    utmContent: source,
                  }
                : undefined
            }
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
