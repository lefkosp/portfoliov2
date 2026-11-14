"use client";

import { useEffect, useRef, useState } from "react";

type CopyState = "idle" | "copied" | "failed";

/** The address is already visible text next to this button; the button only
 *  saves the select-and-copy. If the clipboard is refused, it says so and the
 *  visitor can still select the text by hand. */
export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");
  const resetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetRef.current !== null) clearTimeout(resetRef.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    if (resetRef.current !== null) clearTimeout(resetRef.current);
    resetRef.current = setTimeout(() => setState("idle"), 2500);
  };

  const label =
    state === "copied" ? "COPIED" : state === "failed" ? "SELECT TO COPY" : "COPY";

  return (
    <button
      type="button"
      onClick={copy}
      className="min-w-[9rem] border border-surface-variant px-4 py-3 font-mono text-technical-mono uppercase text-on-surface-variant transition-colors duration-150 hover:border-accent hover:text-accent"
    >
      <span aria-live="polite">{label}</span>
    </button>
  );
}
