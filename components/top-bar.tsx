import Link from "next/link";

export function TopBar() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-background/70 px-6 py-8 backdrop-blur-md lg:hidden">
      <Link
        href="/"
        className="font-display text-xl font-bold uppercase tracking-tighter text-foreground"
      >
        L.PAPAPETROU
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          href="/#work"
          className="font-display text-sm uppercase tracking-tighter text-on-surface-variant transition-colors duration-150 hover:text-accent"
        >
          WORK
        </Link>
        <Link
          href="/#blog"
          className="font-display text-sm uppercase tracking-tighter text-on-surface-variant transition-colors duration-150 hover:text-accent"
        >
          BLOG
        </Link>
        <Link
          href="/#contact"
          className="border-b border-accent font-display text-sm uppercase tracking-tighter text-accent transition-colors duration-150"
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
