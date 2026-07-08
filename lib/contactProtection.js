/**
 * contactProtection.js
 *
 * Bot-hardened contact helpers. Phone/WhatsApp numbers are stored as
 * base64 strings and never appear as plain text in static HTML.
 * All navigation is JS-only — no href="tel:..." in the DOM.
 *
 * Encoding:  btoa('+16673474729') === 'KzE2NjczNDc0NzI5'
 * Decoding:  atob('KzE2NjczNDc0NzI5') === '+16673474729'
 */

// ─── Encoded contact values ────────────────────────────────────────────────
export const ENC = {
  // US primary line (+16673474729)
  US_PHONE:  'KzE2NjczNDc0NzI5',
  // Dubai WhatsApp (+971504826917)
  DXB_PHONE: 'Kzk3MTUwNDgyNjkxNw==',
  // Australia WhatsApp (+61437470201)
  AU_PHONE:  'KzYxNDM3NDcwMjAx',
};

// Pre-fill messages for WhatsApp deeplinks
export const WA_MSG = {
  US:  "Hi GrowLimo, I'd like to learn more about your digital marketing services.",
  DXB: "Hi GrowLimo, I'm interested in digital marketing services for my Dubai business.",
  AU:  "Hi GrowLimo, I'm interested in digital marketing services for my Australian business.",
};

// ─── Decode helper (browser only — never called during SSR) ───────────────
export function decode(encoded) {
  if (typeof window === 'undefined') return '';
  try {
    return atob(encoded);
  } catch {
    return '';
  }
}

// ─── Action handlers ──────────────────────────────────────────────────────

/**
 * Trigger a phone call via JS — no tel: href in HTML.
 * @param {string} encodedNum  - base64-encoded phone number
 * @param {number} mountedAt   - Date.now() recorded in useEffect (ms since epoch)
 */
export function handleCall(encodedNum, mountedAt) {
  // Bot gate: drop if triggered faster than a human can (< 800ms after mount)
  if (!mountedAt || Date.now() - mountedAt < 800) return;
  const num = decode(encodedNum);
  if (!num) return;
  window.location.href = `tel:${num}`;
}

/**
 * Open WhatsApp chat via JS — no wa.me href in HTML.
 * @param {string} encodedNum  - base64-encoded phone number (digits only extracted internally)
 * @param {string} message     - optional pre-fill text
 * @param {number} mountedAt   - Date.now() recorded in useEffect
 */
export function handleWhatsApp(encodedNum, message, mountedAt) {
  if (!mountedAt || Date.now() - mountedAt < 800) return;
  const num = decode(encodedNum).replace(/[^0-9]/g, '');
  if (!num) return;
  const url = `https://wa.me/${num}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
