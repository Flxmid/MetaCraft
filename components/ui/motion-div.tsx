"use client";

import { HTMLAttributes, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface MotionDivProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

export function MotionDiv({ children, className, delay = 0, ...props }: MotionDivProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 translate-y-8 transition-all duration-700 ease-out',
        'animate-in:opacity-100 animate-in:translate-y-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}