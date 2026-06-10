"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { openTerminal } from "./terminal";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { id: "about", label: "01_ABOUT", href: "/#about" },
  { id: "experience", label: "02_EXPERIENCE", href: "/#experience" },
  { id: "work", label: "03_WORK", href: "/#work" },
  { id: "decisions", label: "04_DECISIONS", href: "/#decisions" },
  { id: "blog", label: "05_BLOG", href: "/#blog" },
  { id: "contact", label: "06_CONTACT", href: "/#contact" },
];

export function SideNav() {
  const pathname = usePathname();
  const isBlogRoute = pathname?.startsWith("/blog") ?? false;
  const isDecisionsRoute = pathname?.startsWith("/decisions") ?? false;
  const [scrollSection, setScrollSection] = useState<string | null>(null);
  const activeSection = isBlogRoute
    ? "blog"
    : isDecisionsRoute
      ? "decisions"
      : scrollSection;

  useEffect(() => {
    if (isBlogRoute || isDecisionsRoute) return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isBlogRoute, isDecisionsRoute]);

  return (
    <nav
      aria-label="Primary"
      className="fixed left-0 top-0 z-50 hidden h-screen w-72 flex-col justify-between border-r border-surface-variant bg-surface-container-lowest/80 px-10 py-12 backdrop-blur-md lg:flex"
    >
      <div className="flex flex-col gap-2">
        <Link
          href="/"
          className="font-display text-[11px] font-bold uppercase leading-tight tracking-widest text-foreground transition-colors duration-150 hover:text-accent"
        >
          L.PAPAPETROU
        </Link>
        <div className="font-display text-[11px] uppercase leading-tight tracking-widest text-accent">
          FRONTEND_ENGINEER
        </div>
      </div>

      <ul className="flex w-full flex-col gap-5">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`group flex items-center gap-4 font-display text-[11px] uppercase leading-tight tracking-widest transition-colors duration-150 ${
                  isActive
                    ? "text-accent"
                    : "text-on-surface-variant hover:text-accent"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-150 ${
                    isActive
                      ? "w-6 bg-accent"
                      : "w-3 bg-surface-variant group-hover:w-6 group-hover:bg-on-surface-variant"
                  }`}
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col gap-6 border-t border-surface-variant pt-8">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
          <span>STATUS // ONLINE</span>
          <span aria-hidden="true" className="inline-block h-2 w-2 bg-accent" />
        </div>

        <button
          type="button"
          onClick={openTerminal}
          className="group flex items-center justify-between border border-surface-variant px-4 py-3 font-display text-[11px] uppercase leading-tight tracking-widest text-on-surface-variant transition-colors duration-150 hover:border-accent hover:text-accent"
        >
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="font-mono">
              &gt;_
            </span>
            TERMINAL
          </span>
          <kbd className="font-mono text-[10px] text-outline transition-colors duration-150 group-hover:text-accent">
            ⌘K
          </kbd>
        </button>

        <a
          href="/cv.pdf"
          download
          className="border border-surface-variant px-4 py-3 text-center font-display text-[11px] uppercase leading-tight tracking-widest text-accent transition-colors duration-150 hover:border-accent hover:bg-accent/10"
        >
          DOWNLOAD_CV
        </a>
      </div>
    </nav>
  );
}
