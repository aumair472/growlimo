import { useState, useEffect, useRef } from 'react';

/**
 * Enterprise-grade CountUp hook with SSR parity and stable hydration.
 * Initializes with the target value for SSR, resets to 0 on mount for animation.
 */
export function useCountUp(target, duration = 2000) {
  // 1. Initialize with target for SSR parity
  const [count, setCount] = useState(target);
  const ref = useRef(null);
  const rafId = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // 2. Validate target to prevent infinite re-render loops (NaN !== NaN)
    const validTarget = typeof target === 'number' && !isNaN(target) ? target : 0;
    
    // 3. Reset to 0 only after mount for client-side animation
    setCount(0);
    
    // 4. Reset animation tracking if target changes
    hasAnimated.current = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const animate = (currentTime) => {
            if (!startTime) return;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Cubic ease-out for premium feel
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const nextCount = Math.floor(easedProgress * validTarget);

            setCount(nextCount);

            if (progress < 1) {
              rafId.current = requestAnimationFrame(animate);
            }
          };

          rafId.current = requestAnimationFrame(animate);
        }
      },
      { 
        threshold: 0.1, // Lower threshold for better mobile reliability
        rootMargin: '0px 0px -50px 0px' // Start slightly before entering viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [target, duration]);

  return [count, ref];
}
