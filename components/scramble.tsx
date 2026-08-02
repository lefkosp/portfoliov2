"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>[]{}#*+=-_%$";
const FRAME_MS = 40;
const FRAMES_PER_CHAR = 2;

function scrambleFrame(text: string, revealed: number) {
  let out = "";
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (i < revealed || char === " ") {
      out += char;
    } else {
      out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
  }
  return out;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type ScrambleProps = {
  text: string;
  className?: string;
  /** Re-run the decode when the user hovers the nearest `group` ancestor. */
  replayOnHover?: boolean;
  /** Hold scrambled for this long after coming into view before decoding. */
  startDelay?: number;
};

/**
 * Decodes text one character at a time from a field of random glyphs.
 * The real string is always in the DOM for assistive tech; only the
 * aria-hidden copy animates.
 */
export function Scramble({
  text,
  className = "",
  replayOnHover = false,
  startDelay = 0,
}: ScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [display, setDisplay] = useState(text);

  const play = useCallback(() => {
    if (prefersReducedMotion()) {
      setDisplay(text);
      return;
    }
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    let revealed = 0;
    let ticks = 0;
    let accumulated = 0;
    let previous = performance.now();

    const step = (now: number) => {
      accumulated += now - previous;
      previous = now;

      while (accumulated >= FRAME_MS) {
        accumulated -= FRAME_MS;
        ticks += 1;
        if (ticks % FRAMES_PER_CHAR === 0) revealed += 1;
      }

      if (revealed >= text.length) {
        setDisplay(text);
        frameRef.current = null;
        return;
      }

      setDisplay(scrambleFrame(text, revealed));
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
  }, [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) return;

    // Start fully scrambled so the decode has somewhere to travel from.
    // Deferred a frame: seeding it in the effect body would cascade a render,
    // and it keeps the server-rendered markup (real text) hydratable.
    const seedFrame = requestAnimationFrame(() => {
      setDisplay(scrambleFrame(text, 0));
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutRef.current = setTimeout(play, startDelay);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);

    return () => {
      cancelAnimationFrame(seedFrame);
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, [play, startDelay, text]);

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={replayOnHover ? play : undefined}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
