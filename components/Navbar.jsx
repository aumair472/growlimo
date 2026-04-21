import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen) {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuButton = e.target.closest('[aria-controls="mobile-menu"]');
        if (mobileMenu && !mobileMenu.contains(e.target) && !menuButton) {
          setIsOpen(false);
        }
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark/95 backdrop-blur-md shadow-lg border-b border-slate-800'
            : 'bg-dark border-b border-slate-800'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link
              href="/"
              className="text-2xl font-bold hover:opacity-80 transition"
              onClick={handleLinkClick}
              aria-label="GrowLimo Home"
            >
              <span className="text-primary">Grow</span>
              <span className="text-white">Limo</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-slate-300 hover:text-primary transition font-medium ${isActive('/') ? 'text-primary' : ''}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href="/case-studies"
                className={`text-slate-300 hover:text-primary transition font-medium ${isActive('/case-studies') ? 'text-primary' : ''}`}
                onClick={handleLinkClick}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className={`text-slate-300 hover:text-primary transition font-medium ${isActive('/blog') ? 'text-primary' : ''}`}
                onClick={handleLinkClick}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className={`text-slate-300 hover:text-primary transition font-medium ${isActive('/about') ? 'text-primary' : ''}`}
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-slate-300 hover:text-primary transition font-medium ${isActive('/contact') ? 'text-primary' : ''}`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-primary hover:bg-accent text-slate-950 font-semibold py-2 px-6 rounded-lg transition transform hover:scale-105"
                onClick={handleLinkClick}
              >
                Get Growth Plan
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-slate-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark rounded-lg transition"
              onClick={handleMenuToggle}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={handleMenuClose}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-dark border-l border-slate-800 shadow-2xl z-50 transition-all duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="sticky top-0 bg-dark border-b border-slate-800 px-4 py-4 flex justify-between items-center z-10">
          <div className="text-2xl font-bold">
            <span className="text-primary">Grow</span>
            <span className="text-white">Limo</span>
          </div>
          <button
            onClick={handleMenuClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-6">
          <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
            <Link
              href="/"
              className={`block px-4 py-3 text-lg text-slate-300 hover:text-primary hover:bg-slate-800/50 rounded-lg transition font-medium ${isActive('/') ? 'text-primary bg-slate-800/50' : ''}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-3 text-lg text-slate-300 hover:text-primary hover:bg-slate-800/50 rounded-lg transition font-medium ${isActive('/about') ? 'text-primary bg-slate-800/50' : ''}`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/case-studies"
              className={`block px-4 py-3 text-lg text-slate-300 hover:text-primary hover:bg-slate-800/50 rounded-lg transition font-medium ${isActive('/case-studies') ? 'text-primary bg-slate-800/50' : ''}`}
              onClick={handleLinkClick}
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className={`block px-4 py-3 text-lg text-slate-300 hover:text-primary hover:bg-slate-800/50 rounded-lg transition font-medium ${isActive('/blog') ? 'text-primary bg-slate-800/50' : ''}`}
              onClick={handleLinkClick}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-3 text-lg text-slate-300 hover:text-primary hover:bg-slate-800/50 rounded-lg transition font-medium ${isActive('/contact') ? 'text-primary bg-slate-800/50' : ''}`}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mt-4 bg-primary hover:bg-accent text-slate-950 font-semibold py-3 px-6 rounded-lg transition text-center"
              onClick={handleLinkClick}
            >
              Get Growth Plan
            </Link>
          </nav>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/447846493435"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 block"
          aria-label="Chat with us on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:+17247506935"
          className="bg-primary hover:bg-accent text-slate-950 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 block"
          aria-label="Call us"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </>
  );
}
