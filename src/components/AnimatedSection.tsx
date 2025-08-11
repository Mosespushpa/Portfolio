'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay using setTimeout
          const timer = setTimeout(() => setIsVisible(true), delay);
          // Clean up observer once visible and animation triggered
          observer.unobserve(entry.target);
          return () => clearTimeout(timer); // Clear timeout if component unmounts
        }
      },
      {
        rootMargin: '0px', // No margin
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]); // Rerun effect if delay changes

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transform translate-y-10 transition-all duration-700 ease-out',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
    >
      {children}
    </div>
  );
}
