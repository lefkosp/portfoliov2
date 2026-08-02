"use client";

import { useEffect, useRef, useState } from "react";

/**
 * `up` is the default settle; `clip` wipes in horizontally (section rules and
 * headers), `left` slides from the margin (timeline entries), `rise` scales up
 * slightly (cards). Mixing them keeps a long scroll from feeling like one
 * repeated effect.
 */
type RevealVariant = "up" | "clip" | "left" | "rise";

const VARIANT_CLASS: Record<RevealVariant, string> = {
  up: "animate-fade-in-up",
  clip: "animate-reveal-clip",
  left: "animate-slide-in-left",
  rise: "animate-rise-in",
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? VARIANT_CLASS[variant] : "opacity-0"}`}
      style={isVisible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
