import { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage Component — CWV-Optimized
 *
 * Addresses:
 * - LCP: fetchpriority="high" + eager loading for priority images
 * - CLS: Explicit width/height + aspect-ratio CSS containment
 * - INP: Minimal re-renders, GPU-composited transitions
 *
 * @param {string} src - Image source URL (JPEG/PNG fallback)
 * @param {string} alt - Alt text for accessibility
 * @param {number} width - Image width (REQUIRED for CLS prevention)
 * @param {number} height - Image height (REQUIRED for CLS prevention)
 * @param {string} className - Additional CSS classes
 * @param {boolean} priority - If true, loads immediately with fetchpriority="high" (for LCP images)
 * @param {string} sizes - Responsive image sizes attribute
 * @param {string} srcSet - Responsive image srcset attribute
 * @param {string} srcWebP - WebP format source URL (optional, auto-detected from src if not provided)
 * @param {string} srcAvif - AVIF format source URL (optional)
 * @param {string} placeholder - Placeholder image URL (optional)
 * @param {number} aspectRatio - Aspect ratio for placeholder (default: 16/9)
 */
function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  srcSet,
  srcWebP,
  srcAvif,
  placeholder,
  aspectRatio = 16 / 9,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (observerRef.current && imgRef.current) {
              observerRef.current.unobserve(imgRef.current);
            }
          }
        });
      },
      {
        // CWV LCP: Load priority images immediately; lazy images 200px before viewport
        rootMargin: priority ? '0px' : '200px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // CWV CLS: Auto-detect WebP URL from src (replace extension)
  const webpSrc =
    srcWebP || (src ? src.replace(/\.(jpe?g|png)$/i, '.webp') : null);
  const avifSrc = srcAvif || null;

  // CWV CLS: Use aspect-ratio CSS for stable layout reservation
  const useAspectRatioPadding = !width && !height && aspectRatio;
  const paddingBottom = useAspectRatioPadding
    ? `${(1 / aspectRatio) * 100}%`
    : undefined;

  const wrapperStyle = useAspectRatioPadding
    ? {
        position: 'relative',
        width: '100%',
        paddingBottom: paddingBottom,
        overflow: 'hidden',
      }
    : {
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '100%',
      };

  // CWV CLS: Common image props for consistent rendering
  const imgProps = {
    alt,
    sizes,
    className: `${useAspectRatioPadding ? 'absolute inset-0 ' : ''}${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
    style:
      !useAspectRatioPadding && width && height
        ? { width: `${width}px`, height: `${height}px` }
        : undefined,
    loading: priority ? 'eager' : 'lazy',
    decoding: priority ? 'sync' : 'async',
    fetchpriority: priority ? 'high' : undefined,
    onLoad: handleLoad,
    onError: handleError,
    // CWV CLS: Always set width & height attributes for browser aspect-ratio calculation
    width: width,
    height: height,
  };

  return (
    <div ref={imgRef} style={wrapperStyle} className="optimized-image-wrapper">
      {/* CWV CLS: Skeleton placeholder — matches exact reserved space */}
      {!isLoaded && (
        <div
          className="skeleton-placeholder absolute inset-0"
          style={{
            backgroundColor: '#1e293b',
            backgroundImage:
              'linear-gradient(90deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      )}

      {/* CWV LCP: Use <picture> element for format negotiation (AVIF > WebP > fallback) */}
      {isInView && !hasError && (
        <picture>
          {/* AVIF source — ~50% smaller than JPEG */}
          {avifSrc && (
            <source srcSet={avifSrc} type="image/avif" sizes={sizes} />
          )}
          {/* WebP source — ~30% smaller than JPEG */}
          {webpSrc && webpSrc !== src && (
            <source
              srcSet={srcSet || webpSrc}
              type="image/webp"
              sizes={sizes}
            />
          )}
          {/* Fallback img — JPEG/PNG */}
          <img src={src} srcSet={srcSet} {...imgProps} />
        </picture>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-400">
          <div className="text-center p-4">
            <svg
              className="w-12 h-12 mx-auto mb-2 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-xs">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Optional placeholder image (LQIP — Low Quality Image Placeholder) */}
      {placeholder && !isInView && (
        <img
          src={placeholder}
          alt=""
          className={`${useAspectRatioPadding ? 'absolute inset-0 ' : ''}w-full h-full object-cover blur-sm`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default OptimizedImage;
