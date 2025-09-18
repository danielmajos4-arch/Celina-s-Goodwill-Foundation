import { useEffect, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: number;
  className?: string;
}

export function AnimatedSection({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  className = '' 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!elementRef) return;

    // If user prefers reduced motion, show immediately
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(elementRef);

    return () => {
      if (elementRef) observer.unobserve(elementRef);
    };
  }, [elementRef, delay, prefersReducedMotion]);

  const getAnimationClass = () => {
    // If reduced motion is preferred, skip animations
    if (prefersReducedMotion) {
      return 'opacity-100';
    }
    
    const baseClass = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} opacity-0 translate-y-8`;
        case 'fade-in':
          return `${baseClass} opacity-0`;
        case 'slide-left':
          return `${baseClass} opacity-0 -translate-x-8`;
        case 'slide-right':
          return `${baseClass} opacity-0 translate-x-8`;
        case 'scale-up':
          return `${baseClass} opacity-0 scale-95`;
        default:
          return `${baseClass} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={setElementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}

interface ProgressBarProps {
  className?: string;
}

export function ScrollProgressBar({ className = '' }: ProgressBarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-green-600 to-pink-600 z-40 motion-safe:transition-all motion-safe:duration-150 ease-out ${className}`} 
         style={{ width: `${scrollProgress}%` }}>
    </div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxElement({ children, speed = 0.5, className = '' }: ParallaxProps) {
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Skip parallax if reduced motion is preferred
    if (prefersReducedMotion) return;
    
    const handleScroll = () => {
      if (!elementRef) return;
      
      const rect = elementRef.getBoundingClientRect();
      const scrolled = window.scrollY;
      const parallaxSpeed = speed;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffsetY(scrolled * parallaxSpeed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef, speed, prefersReducedMotion]);

  return (
    <div
      ref={setElementRef}
      className={className}
      style={{
        transform: prefersReducedMotion ? 'none' : `translateY(${offsetY}px)`,
      }}
    >
      {children}
    </div>
  );
}