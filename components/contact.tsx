import { FadeIn } from "./fade-in";

export function Contact() {
  return (
    <section
      id="contact"
      className="mt-section-gap w-full px-6 lg:px-margin-edge"
    >
      <FadeIn className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="group relative col-span-4 flex flex-col items-center overflow-hidden border border-surface-variant p-12 text-center transition-colors duration-300 hover:border-accent lg:col-span-10 lg:col-start-2 lg:p-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-high opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <div className="relative z-10 mb-8 font-mono text-technical-mono text-surface-variant">
            END_OF_DOCUMENT // SIGNAL_AWAIT
          </div>

          <h2 className="relative z-10 mb-12 font-display text-headline-xl leading-tight text-foreground">
            INITIATE <br />
            <span className="text-surface-variant">CONNECTION</span>
          </h2>

          <a
            href="mailto:hello@lefkos.dev"
            className="relative z-10 flex items-center gap-3 border border-accent px-8 py-4 font-display text-label-caps uppercase tracking-widest text-accent transition-colors duration-150 hover:bg-accent hover:text-on-primary-fixed"
          >
            <span aria-hidden="true" className="font-mono">
              &gt;
            </span>
            PING_SERVER
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
