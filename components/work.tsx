import { FadeIn } from "./fade-in";

export function Work() {
  return (
    <section id="work" className="mt-section-gap w-full px-6 lg:px-margin-edge">
      <FadeIn className="mb-12 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 flex items-end justify-between border-b border-surface-variant pb-4 lg:col-span-12">
          <h3 className="font-display text-headline-lg uppercase text-foreground">
            SELECTED_WORKS
          </h3>
          <span className="hidden font-mono text-technical-mono text-outline md:block">
            PROJECTS: 04
          </span>
        </div>
      </FadeIn>

      {/* 01, Flagship: shipped full-stack AI product */}
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
          <div className="mb-4 flex items-center gap-3 font-mono text-technical-mono text-accent">
            &gt; ./TWEETPRENUER.exe
            <span className="animate-pulse text-technical-mono">●</span>
            <span className="text-outline">LIVE</span>
          </div>
          <h4 className="mb-6 font-display text-headline-md text-foreground transition-colors duration-150 group-hover:text-accent">
            TWEETPRENUER
          </h4>
          <p className="mb-6 font-sans text-body-md text-on-surface-variant">
            Shipped full-stack AI product: drop an X handle and get a
            generated, shareable business card. Angular 19 frontend, Express +
            MongoDB backend with response caching to control API spend, an
            OpenAI prompt pipeline, and a screenshot share-to-X flow. 120+
            cards generated in the wild.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {["ANGULAR", "EXPRESS", "MONGODB", "OPENAI"].map((tag) => (
              <span
                key={tag}
                className="border border-surface-variant px-2 py-1 font-mono text-[10px] text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://tweetprenuer.net"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the live Tweetprenuer app"
              className="group/btn flex w-fit items-center gap-3 border border-surface-variant px-6 py-3 font-display text-label-caps uppercase text-on-surface transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              LAUNCH_APP
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-150 group-hover/btn:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="https://github.com/lefkosp/tweetprenuer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Tweetprenuer source code"
              className="font-mono text-technical-mono text-outline transition-colors duration-150 hover:text-accent"
            >
              SOURCE ↗
            </a>
          </div>
        </div>
      </FadeIn>

      {/* 02 + 03, Hackathon product and systems tooling */}
      <div className="mb-32 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <FadeIn className="group relative col-span-4 flex flex-col gap-8 border border-surface-variant p-8 transition-colors duration-150 hover:border-accent lg:col-span-5">
          <div className="absolute right-0 top-0 h-8 w-8 border-b border-l border-surface-variant transition-colors duration-150 group-hover:border-accent" />
          <div>
            <div className="mb-2 font-mono text-technical-mono text-outline">
              MODULE_02 // FINTECH_HACKATHON
            </div>
            <h4 className="font-display text-headline-md text-foreground transition-colors duration-150 group-hover:text-accent">
              PARKIT
            </h4>
          </div>
          <p className="flex-grow font-sans text-body-md text-on-surface-variant">
            Parking marketplace PWA built for the Bank of Cyprus Fintech
            Hackathon: live map with geolocation, booking flow, QR check-in,
            realtime payment events over WebSockets, push notifications, and a
            vendor dashboard, end to end against a deployed backend.
          </p>
          <div className="flex items-end justify-between">
            <div className="flex flex-wrap gap-2">
              {["ANGULAR", "LEAFLET", "SOCKET.IO", "PWA"].map((tag) => (
                <span
                  key={tag}
                  className="border border-surface-variant px-2 py-1 font-mono text-[10px] text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/lefkosp/parkit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Parkit source code"
              className="font-mono text-technical-mono text-outline transition-colors duration-150 hover:text-accent"
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
            <div className="mb-2 font-mono text-technical-mono text-outline">
              MODULE_03 // SYSTEMS_TOOLING
            </div>
            <h4 className="font-display text-headline-md text-foreground transition-colors duration-150 group-hover:text-accent">
              CHANGE_RADAR
            </h4>
          </div>
          <p className="flex-grow font-sans text-body-md text-on-surface-variant">
            On-prem CLI daemon that watches git repositories for risky changes:
            SQL migrations, OpenAPI contract diffs, sensitive paths, and
            posts prioritized Slack digests. SQLite-backed state, Dockerized,
            covered by vitest suites. No code ever leaves the network.
          </p>
          <div className="flex items-end justify-between">
            <div className="flex flex-wrap gap-2">
              {["TYPESCRIPT", "NODE_CLI", "SQLITE", "DOCKER"].map((tag) => (
                <span
                  key={tag}
                  className="border border-surface-variant px-2 py-1 font-mono text-[10px] text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono text-technical-mono text-outline">
              PRE_RELEASE
            </span>
          </div>
        </FadeIn>
      </div>

      {/* 04, OSS-style component library */}
      <FadeIn className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="hidden lg:col-span-4 lg:block" />

        <div className="group relative col-span-4 border-r border-t border-surface-variant p-8 transition-colors duration-150 hover:border-accent lg:col-span-8 lg:p-16">
          <div className="absolute left-0 top-0 h-16 w-px bg-surface-variant transition-colors duration-150 group-hover:bg-accent" />
          <div className="absolute bottom-0 right-0 h-px w-16 bg-surface-variant transition-colors duration-150 group-hover:bg-accent" />

          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="mb-2 font-mono text-technical-mono text-accent">
                &gt; FORMFORGE_LIB
              </div>
              <h4 className="mb-6 font-display text-headline-lg text-foreground transition-colors duration-150 group-hover:text-accent">
                FORMFORGE
              </h4>
              <p className="mb-6 font-sans text-body-md text-on-surface-variant">
                React form component library: 15+ composable, typed field
                components behind a single declarative API, shipped with a
                docs site featuring live previews, copyable examples, and a
                visual form builder.
              </p>
              <div className="flex flex-wrap gap-2">
                {["REACT", "TYPESCRIPT", "DESIGN_SYSTEMS"].map((tag) => (
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
              href="https://github.com/lefkosp/formforge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View FormForge source code"
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
