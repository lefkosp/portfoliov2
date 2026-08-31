"use client";

import { useEffect, useState } from "react";

const SEQUENCE = [
  "$ ./init --profile lefkos",
  "MOUNT  :: experience.log ....... OK",
  "ROLE   :: LEAD_FRONTEND_DEVELOPER",
  "FOCUS  :: ARCHITECTURE + SHARED_UI",
  "STATUS :: ONLINE",
];

const CHARS_PER_TICK = 3;
const TICK_MS = 16;
const TOTAL_CHARS = SEQUENCE.reduce((sum, line) => sum + line.length + 1, 0);

function visibleLines(cursor: number) {
  const lines: string[] = [];
  let remaining = cursor;

  for (const line of SEQUENCE) {
    if (remaining <= 0) break;
    lines.push(line.slice(0, remaining));
    remaining -= line.length + 1;
  }

  return lines;
}

/** Types the profile header out on load. The one place the terminal
 *  conceit earns real motion rather than another scroll fade. */
export function BootSequence() {
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    // Reduced motion jumps to the finished state on the first tick rather
    // than setting it synchronously here, which would cascade a render.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    const step = reduced ? TOTAL_CHARS : CHARS_PER_TICK;

    const id = setInterval(
      () => {
        setCursor((current) => {
          const next = current + step;
          if (next >= TOTAL_CHARS) {
            clearInterval(id);
            return TOTAL_CHARS;
          }
          return next;
        });
      },
      reduced ? 0 : TICK_MS,
    );

    return () => clearInterval(id);
  }, []);

  const lines = visibleLines(cursor);
  const isTyping = cursor < TOTAL_CHARS;

  return (
    <div className="border-l border-surface-variant pl-4 font-mono text-technical-mono text-accent">
      <span className="sr-only">
        Lead frontend developer. Focus: React architecture and the shared
        component library four of the company&apos;s products are built on.
        Status: online.
      </span>

      <div aria-hidden="true" className="min-h-[7.5em]">
        {lines.map((line, index) => {
          const isLast = index === lines.length - 1;
          const caret = isTyping && isLast ? "caret" : undefined;
          const separator = line.indexOf(" :: ");

          if (line.startsWith("$")) {
            return (
              <div key={index} className={`text-outline ${caret ?? ""}`}>
                {line}
              </div>
            );
          }

          // The separator only appears once enough of the line is typed;
          // until then the whole partial label renders in the label colour.
          if (separator === -1) {
            return (
              <div key={index} className={caret}>
                {line}
              </div>
            );
          }

          return (
            <div key={index} className={caret}>
              {line.slice(0, separator)}
              <span className="text-outline"> :: </span>
              <span className="text-foreground">
                {line.slice(separator + 4)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
