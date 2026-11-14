"use client";

import { useEffect, useRef, useState } from "react";

type DemoVideoProps = {
  webm: string;
  mp4: string;
  poster: string;
  label: string;
};

/** Muted looping walkthrough. Autoplays unless the visitor prefers reduced
 *  motion, and always has a visible pause/play control. */
export function DemoVideo({ webm, mp4, poster, label }: DemoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // play() rejects if the browser blocks autoplay; the button still works.
    video.play().catch(() => {});
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <>
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover object-top"
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        className="absolute bottom-2 right-2 z-20 border border-surface-variant bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant transition-colors duration-150 hover:border-accent hover:text-accent"
      >
        {isPlaying ? "Pause" : "Play"}
        <span className="sr-only"> Trippio walkthrough</span>
      </button>
    </>
  );
}
