"use client";

import Link from "next/link";
import { useState } from "react";
import { openTerminal } from "./terminal";

const menuItems = [
  { label: "01_ABOUT", href: "/#about" },
  { label: "02_EXPERIENCE", href: "/#experience" },
  { label: "03_WORK", href: "/#work" },
  { label: "04_DECISIONS", href: "/#decisions" },
  { label: "05_LAB", href: "/#lab" },
  { label: "06_CONTACT", href: "/#contact" },
];

export function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/70 backdrop-blur-md lg:hidden">
      <div className="flex w-full items-center justify-between px-6 py-8">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="font-display text-xl font-bold uppercase tracking-tighter text-foreground"
        >
          L.PAPAPETROU
        </Link>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={openTerminal}
            aria-label="Open terminal"
            className="font-mono text-sm text-on-surface-variant transition-colors duration-150 hover:text-accent"
          >
            &gt;_
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="font-display text-sm uppercase tracking-tighter text-accent"
          >
            {isMenuOpen ? "[CLOSE]" : "[MENU]"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="flex h-[calc(100vh-96px)] flex-col justify-between border-t border-surface-variant bg-background px-6 pb-12 pt-10"
        >
          <ul className="flex flex-col gap-7">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center gap-4 font-display text-headline-md uppercase text-foreground transition-colors duration-150 hover:text-accent"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-4 bg-surface-variant transition-all duration-150 group-hover:w-8 group-hover:bg-accent"
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="/cv.pdf"
            download
            className="border border-surface-variant px-4 py-4 text-center font-display text-label-caps uppercase tracking-widest text-accent transition-colors duration-150 hover:border-accent hover:bg-accent/10"
          >
            DOWNLOAD_CV
          </a>
        </nav>
      )}
    </header>
  );
}
