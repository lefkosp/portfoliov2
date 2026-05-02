const links = [
  { label: "GITHUB", href: "https://github.com/lefkos", external: true },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/lefkos",
    external: true,
  },
  {
    label: "SOURCE_CODE",
    href: "https://github.com/lefkos/portfoliov2",
    external: true,
  },
  { label: "CONTACT_SECURE", href: "mailto:hello@lefkos.dev", external: false },
];

export function Footer() {
  return (
    <footer className="relative z-10 mt-section-gap border-t border-surface-variant bg-surface-container-lowest lg:ml-72">
      <div className="grid w-full grid-cols-4 gap-gutter px-6 py-12 lg:grid-cols-12 lg:px-margin-edge">
        <div className="col-span-4 flex items-center lg:col-span-4">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            &copy;2026_TERMINAL_LEFKOS_PAPAPETROU
          </span>
        </div>
        <div className="col-span-4 mt-6 flex flex-wrap gap-6 lg:col-span-8 lg:mt-0 lg:justify-end lg:gap-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant transition-colors duration-150 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
