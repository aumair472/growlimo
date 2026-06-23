import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
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

  const handleLinkClick = useCallback(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, []);

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#080D18]/85 backdrop-blur-[16px]'
          : 'bg-[#080D18]'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link
              href="/"
              className="text-2xl font-bold hover:opacity-90 transition font-sora tracking-tight"
              onClick={handleLinkClick}
              aria-label="GrowLimo Home"
            >
              <span className="text-white">Grow</span>
              <span className="text-[#DD6613]">Limo</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-white/70 hover:text-white transition font-medium text-sm ${isActive('/') ? 'text-white font-semibold' : ''}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href="/case-studies/"
                className={`text-white/70 hover:text-white transition font-medium text-sm ${isActive('/case-studies') ? 'text-white font-semibold' : ''}`}
                onClick={handleLinkClick}
              >
                Case Studies
              </Link>
              <Link
                href="/blog/"
                className={`text-white/70 hover:text-white transition font-medium text-sm ${isActive('/blog') ? 'text-white font-semibold' : ''}`}
                onClick={handleLinkClick}
              >
                Blog
              </Link>
              <Link
                href="/about/"
                className={`text-white/70 hover:text-white transition font-medium text-sm ${isActive('/about') ? 'text-white font-semibold' : ''}`}
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                href="/contact/"
                className={`text-white/70 hover:text-white transition font-medium text-sm ${isActive('/contact') ? 'text-white font-semibold' : ''}`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
              <Link
                href="/contact/"
                className="bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-[10px] px-[22px] rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm hover:scale-[1.02] transform"
                onClick={handleLinkClick}
              >
                Get Growth Plan
              </Link>
            </div>

            {/* Mobile / Tablet CTA (Replaces Hamburger Menu) */}
            <div className="lg:hidden flex items-center">
              <Link
                href="/contact/"
                className="bg-[#DD6613] hover:bg-[#FB923C] text-white font-bold py-[8px] px-[16px] rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm hover:scale-[1.02] transform"
                onClick={handleLinkClick}
              >
                Get A Call Back
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
