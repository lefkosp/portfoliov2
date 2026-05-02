import { FadeIn } from "./fade-in";

export function Work() {
  return (
    <section id="work" className="mt-section-gap w-full px-6 lg:px-margin-edge">
      <FadeIn className="mb-12 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 flex items-end justify-between border-b border-surface-variant pb-4 lg:col-span-12">
          <h3 className="font-display text-headline-lg uppercase text-foreground">
            SELECTED_WORKS
          </h3>
          <span className="hidden font-mono text-technical-mono text-surface-variant md:block">
            QUERY_LIMIT: 4
          </span>
        </div>
      </FadeIn>

      <FadeIn className="group mb-32 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="relative col-span-4 h-[400px] overflow-hidden border border-surface-variant transition-colors duration-150 group-hover:border-accent lg:col-span-7 lg:h-auto">
          <div className="absolute inset-0 z-10 bg-surface-variant/20 transition-colors duration-150 group-hover:bg-transparent" />
          <div
            aria-hidden="true"
            className="h-full w-full bg-gradient-to-br from-surface-container-high to-surface-container-lowest"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-surface-variant) 1px, transparent 1px), linear-gradient(to bottom, var(--color-surface-variant) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="col-span-4 flex flex-col justify-center lg:col-span-4 lg:col-start-9">
          <div className="mb-4 font-mono text-technical-mono text-accent">
            &gt; ./TWEETPRENUER.exe
          </div>
          <h4 className="mb-6 font-display text-headline-md text-foreground transition-colors duration-150 group-hover:text-accent">
            TWEETPRENUER
          </h4>
          <p className="mb-6 font-sans text-body-md text-on-surface-variant">
            An AI-powered app that, based on your recent tweets, generates a
            business idea along with a business card based on it.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {["ANGULAR", "NODE.JS", "TS"].map((tag) => (
              <span
                key={tag}
                className="border border-surface-variant px-2 py-1 font-mono text-[10px] text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#work"
            aria-label="Inspect TWEETPRENUER project"
            className="group/btn flex w-fit items-center gap-3 border border-surface-variant px-6 py-3 font-display text-label-caps uppercase text-on-surface transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            INIT_INSPECT
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-150 group-hover/btn:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </FadeIn>

      <div className="mb-32 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <FadeIn className="group relative col-span-4 flex flex-col gap-8 border border-surface-variant p-8 transition-colors duration-150 hover:border-accent lg:col-span-5">
          <div className="absolute right-0 top-0 h-8 w-8 border-b border-l border-surface-variant transition-colors duration-150 group-hover:border-accent" />
          <div>
            <div className="mb-2 font-mono text-technical-mono text-surface-variant">
              MODULE_02
            </div>
            <h4 className="font-display text-headline-md text-foreground transition-colors duration-150 group-hover:text-accent">
              OMNIFOOD
            </h4>
          </div>
          <p className="flex-grow font-sans text-body-md text-on-surface-variant">
            A landing page for a food delivery service with a subscription.
            Explains how it works and showcases meal examples, testimonials and
            more.
          </p>
          <div className="flex items-end justify-between">
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS"].map((tag) => (
                <span
                  key={tag}
                  className="border border-surface-variant px-2 py-1 font-mono text-[10px] text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#work"
              aria-label="Inspect OMNIFOOD project"
              className="font-mono text-technical-mono text-surface-variant transition-colors duration-150 hover:text-accent"
            >
              ↗
            </a>
          </div>
        </FadeIn>

        <div className="hidden lg:col-span-2 lg:block" />

        <FadeIn
          className="group relative col-span-4 flex flex-col gap-8 border border-surface-variant p-8 transition-colors duration-150 hover:border-accent lg:col-span-5"
          delay={150}
        >
          <div className="absolute right-0 top-0 h-8 w-8 border-b border-l border-surface-variant transition-colors duration-150 group-hover:border-accent" />
          <div>
            <div className="mb-2 font-mono text-technical-mono text-surface-variant">
              MODULE_03
            </div>
            <h4 className="font-display text-headline-md text-foreground transition-colors duration-150 group-hover:text-accent">
              MAPTY
            </h4>
          </div>
          <p className="flex-grow font-sans text-body-md text-on-surface-variant">
            A workout tracker app on the web. Choose between running and
            cycling, then set the distance, duration and other properties.
          </p>
          <div className="flex items-end justify-between">
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JS"].map((tag) => (
                <span
                  key={tag}
                  className="border border-surface-variant px-2 py-1 font-mono text-[10px] text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#work"
              aria-label="Inspect MAPTY project"
              className="font-mono text-technical-mono text-surface-variant transition-colors duration-150 hover:text-accent"
            >
              ↗
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="hidden lg:col-span-4 lg:block" />

        <div className="group relative col-span-4 border-r border-t border-surface-variant p-8 transition-colors duration-150 hover:border-accent lg:col-span-8 lg:p-16">
          <div className="absolute left-0 top-0 h-16 w-px bg-surface-variant transition-colors duration-150 group-hover:bg-accent" />
          <div className="absolute bottom-0 right-0 h-px w-16 bg-surface-variant transition-colors duration-150 group-hover:bg-accent" />

          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="mb-2 font-mono text-technical-mono text-accent">
                &gt; FORKIFY_MVC
              </div>
              <h4 className="mb-6 font-display text-headline-lg text-foreground transition-colors duration-150 group-hover:text-accent">
                FORKIFY
              </h4>
              <p className="mb-6 font-sans text-body-md text-on-surface-variant">
                A recipe app that lets you search what you are looking for,
                upload your own, bookmark your favorites and change the
                servings to your liking.
              </p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JS"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-surface-variant px-2 py-1 font-mono text-[10px] text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#work"
              aria-label="Inspect FORKIFY project"
              className="flex h-16 w-16 shrink-0 items-center justify-center border border-surface-variant text-2xl transition-colors duration-150 group-hover:border-accent hover:bg-accent hover:text-on-primary-fixed"
            >
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
