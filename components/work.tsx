import Image from "next/image";
import Link from "next/link";
import { getDecisionsForProject } from "@/lib/decisions";
import { OutputFrame } from "./output-frame";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";

/** Bridges a project to the reasoning behind it. Green here is the same
 *  green as the decision log, so the connection reads without a caption. */
async function DecisionLinks({ project }: { project: string }) {
  const decisions = await getDecisionsForProject(project);

  if (decisions.length === 0) return null;

  return (
    <div className="mb-8 flex flex-col gap-2 border-l border-signal-dim pl-4">
      <span className="font-mono text-[10px] uppercase tracking-widest text-signal-dim">
        Why it was built this way
      </span>
      {decisions.map((decision) => (
        <Link
          key={decision.slug}
          href={`/decisions/${decision.slug}`}
          className="group/adr flex items-baseline gap-2 font-mono text-technical-mono text-on-surface-variant transition-colors duration-200 hover:text-signal"
        >
          <span className="shrink-0 text-signal">{decision.id}</span>
          <span className="underline decoration-signal-dim underline-offset-4 group-hover/adr:decoration-signal">
            {decision.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

const tagClass =
  "border border-surface-variant px-2 py-1 font-mono text-[10px] text-on-surface-variant";

export function Work() {
  return (
    <section id="work" className="mt-section-gap w-full px-6 lg:px-margin-edge">
      <Reveal variant="clip" className="mb-16">
        <div className="flex items-end justify-between border-b border-surface-variant pb-4">
          <h3 className="font-display text-headline-lg uppercase text-foreground">
            <Scramble text="SELECTED_WORKS" />
          </h3>
          <span className="hidden font-mono text-technical-mono text-outline md:block">
            PROJECTS: 04
          </span>
        </div>
      </Reveal>

      {/* 01, Highlight: shipped group-trip planner, live for a real trip */}
      <Reveal
        variant="rise"
        className="group mb-32 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12"
      >
        {/* aspect-[480/1039] is the gif's real shape, not a guess — cover only ever
            needs to crop when the box and the media disagree. self-start stops grid's
            default row-stretch from silently overriding the ratio here: this column
            sits next to a long paragraph, stretch would pull it to that height, and
            cover would crop whatever stretch added. */}
        <div className="relative col-span-4 aspect-[480/1039] self-start overflow-hidden rounded-sm border border-surface-variant transition-colors duration-200 group-hover:border-accent lg:col-span-4">
          <div className="absolute inset-0 z-10 bg-surface-variant/20 transition-colors duration-200 group-hover:bg-transparent" />
          <Image
            src="/work/trippio-demo.gif"
            alt="Trippio walkthrough: an idea is typed into the capture bar, voted on, approved, and a Claude-suggested time slot lands it on the day's itinerary"
            fill
            unoptimized
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="col-span-4 flex flex-col justify-center lg:col-span-7 lg:col-start-6">
          <div className="mb-4 flex items-center gap-3 font-mono text-technical-mono text-accent">
            &gt; ./TRIPPIO.exe
            <span className="animate-pulse text-technical-mono">●</span>
            <span className="text-outline">LIVE</span>
          </div>
          <h4 className="mb-6 font-display text-headline-md text-foreground transition-colors duration-200 group-hover:text-accent">
            TRIPPIO
          </h4>
          <p className="mb-6 font-sans text-body-md text-on-surface-variant">
            A trip planned by the four people going on it, not by whoever
            volunteers to own a spreadsheet. Reels and links get captured and
            voted on before they&apos;re lost, then promoted straight into an
            itinerary — the messy group phase most planning apps skip past.
            Built for a real China trip: offline-first with an
            IndexedDB-persisted cache for a spotty network, WGS-84→GCJ-02
            coordinate conversion so pins land correctly on Chinese map
            providers, and Claude-suggested day/time slots for a promoted
            idea.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {["REACT", "EXPRESS", "MONGODB", "CLAUDE_API"].map((tag) => (
              <span key={tag} className={tagClass}>
                {tag}
              </span>
            ))}
          </div>

          <DecisionLinks project="TRIPPIO" />

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://trippio.xyz/demo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open a live Trippio demo trip"
              className="group/btn flex w-fit items-center gap-3 border border-surface-variant px-6 py-3 font-display text-label-caps uppercase text-on-surface transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              TRY_DEMO
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="https://github.com/lefkosp/trippio-client"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Trippio client source code"
              className="font-mono text-technical-mono text-outline transition-colors duration-200 hover:text-accent"
            >
              SOURCE (CLIENT) ↗
            </a>
            <a
              href="https://github.com/lefkosp/trippio-server"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Trippio server source code"
              className="font-mono text-technical-mono text-outline transition-colors duration-200 hover:text-accent"
            >
              SOURCE (SERVER) ↗
            </a>
          </div>
        </div>
      </Reveal>

      {/* 02, Flagship: shipped full-stack AI product */}
      <Reveal
        variant="rise"
        className="group mb-32 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12"
      >
        <div className="relative col-span-4 h-[400px] overflow-hidden border border-surface-variant transition-colors duration-200 group-hover:border-accent lg:col-span-7 lg:h-auto lg:min-h-[520px]">
          <div className="absolute inset-0 z-10 bg-surface-variant/20 transition-colors duration-200 group-hover:bg-transparent" />
          <Image
            src="/work/tweetprenuer.png"
            alt="Tweetprenuer business card generated from an X profile"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="col-span-4 flex flex-col justify-center lg:col-span-4 lg:col-start-9">
          <div className="mb-4 flex items-center gap-3 font-mono text-technical-mono text-accent">
            &gt; ./TWEETPRENUER.exe
            <span className="animate-pulse text-technical-mono">●</span>
            <span className="text-outline">LIVE</span>
          </div>
          <h4 className="mb-6 font-display text-headline-md text-foreground transition-colors duration-200 group-hover:text-accent">
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
              <span key={tag} className={tagClass}>
                {tag}
              </span>
            ))}
          </div>

          <DecisionLinks project="TWEETPRENUER" />

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://tweetprenuer.net"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the live Tweetprenuer app"
              className="group/btn flex w-fit items-center gap-3 border border-surface-variant px-6 py-3 font-display text-label-caps uppercase text-on-surface transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              LAUNCH_APP
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="https://github.com/lefkosp/tweetprenuer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Tweetprenuer source code"
              className="font-mono text-technical-mono text-outline transition-colors duration-200 hover:text-accent"
            >
              SOURCE ↗
            </a>
          </div>
        </div>
      </Reveal>

      {/* 03, Hackathon product */}
      <Reveal
        variant="rise"
        className="group relative mb-32 grid w-full grid-cols-4 gap-gutter border border-surface-variant p-6 transition-colors duration-200 hover:border-accent lg:grid-cols-12 lg:p-10"
      >
        <div className="absolute right-0 top-0 h-8 w-8 border-b border-l border-surface-variant transition-colors duration-200 group-hover:border-accent" />

        <div className="col-span-4 flex flex-col lg:col-span-6">
          <div className="mb-2 font-mono text-technical-mono text-outline">
            MODULE_02 // FINTECH_HACKATHON
          </div>
          <h4 className="mb-6 font-display text-headline-md text-foreground transition-colors duration-200 group-hover:text-accent">
            PARKIT
          </h4>
          <p className="mb-6 font-sans text-body-md text-on-surface-variant">
            Parking marketplace PWA built for the Bank of Cyprus Fintech
            Hackathon: live map with geolocation, booking flow, QR check-in,
            realtime payment events over WebSockets, push notifications, and a
            vendor dashboard, end to end against a deployed backend.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {["ANGULAR", "LEAFLET", "SOCKET.IO", "PWA"].map((tag) => (
              <span key={tag} className={tagClass}>
                {tag}
              </span>
            ))}
          </div>

          <DecisionLinks project="PARKIT" />

          <a
            href="https://github.com/lefkosp/parkit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Parkit source code"
            className="mt-auto w-fit font-mono text-technical-mono text-outline transition-colors duration-200 hover:text-accent"
          >
            SOURCE ↗
          </a>
        </div>

        <div className="col-span-4 lg:col-span-5 lg:col-start-8">
          <OutputFrame title="booking.socket — live">
            <div className="flex flex-col gap-1 text-on-surface-variant">
              <span>
                <span className="text-outline">12:04:11</span>{" "}
                <span className="text-accent">connect</span> vendor:LARNACA_04
              </span>
              <span>
                <span className="text-outline">12:04:12</span> slot.reserve →{" "}
                <span className="text-foreground">B-2291</span>
              </span>
              <span>
                <span className="text-outline">12:04:19</span> qr.scan{" "}
                <span className="text-accent">CHECK_IN</span> ok
              </span>
              <span>
                <span className="text-outline">12:41:03</span> qr.scan{" "}
                <span className="text-accent">CHECK_OUT</span> 37m
              </span>
              <span>
                <span className="text-outline">12:41:04</span> payment.settled{" "}
                <span className="text-foreground">€2.47</span>
              </span>
              <span className="text-outline">
                ── vendor dashboard updated ──
              </span>
            </div>
          </OutputFrame>
        </div>
      </Reveal>


      {/* 04, OSS-style component library */}
      <Reveal
        variant="rise"
        className="group relative grid w-full grid-cols-4 gap-gutter border border-surface-variant p-6 transition-colors duration-200 hover:border-accent lg:grid-cols-12 lg:p-10"
      >
        <div className="absolute bottom-0 right-0 h-8 w-8 border-l border-t border-surface-variant transition-colors duration-200 group-hover:border-accent" />

        <div className="col-span-4 flex flex-col lg:col-span-6">
          <div className="mb-2 font-mono text-technical-mono text-accent">
            &gt; FORMFORGE_LIB
          </div>
          <h4 className="mb-6 font-display text-headline-lg text-foreground transition-colors duration-200 group-hover:text-accent">
            FORMFORGE
          </h4>
          <p className="mb-6 font-sans text-body-md text-on-surface-variant">
            React form component library: 15+ composable, typed field
            components behind a single declarative API, shipped with a docs
            site featuring live previews, copyable examples, and a visual form
            builder.
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {["REACT", "TYPESCRIPT", "DESIGN_SYSTEMS"].map((tag) => (
              <span key={tag} className={tagClass}>
                {tag}
              </span>
            ))}
          </div>

          <DecisionLinks project="FORMFORGE" />

          <div className="mt-auto flex flex-wrap items-center gap-6">
            <a
              href="https://lefkosp.github.io/formforge/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the FormForge docs site"
              className="group/btn flex w-fit items-center gap-3 border border-surface-variant px-6 py-3 font-display text-label-caps uppercase text-on-surface transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              VIEW_DOCS
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="https://github.com/lefkosp/formforge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View FormForge source code"
              className="font-mono text-technical-mono text-outline transition-colors duration-200 hover:text-accent"
            >
              SOURCE ↗
            </a>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-5 lg:col-start-8">
          <OutputFrame title="schema in — form out">
            <div className="flex flex-col gap-1 text-on-surface-variant">
              <span>
                <span className="text-accent">const</span> schema = {"{"}
              </span>
              <span className="pl-4">
                email: {"{"} type: <span className="text-signal">
                  &quot;email&quot;
                </span>
                , required: <span className="text-signal">true</span> {"}"},
              </span>
              <span className="pl-4">
                password: {"{"} type:{" "}
                <span className="text-signal">&quot;password&quot;</span>, min:{" "}
                <span className="text-signal">8</span> {"}"},
              </span>
              <span className="pl-4">
                plan: {"{"} type:{" "}
                <span className="text-signal">&quot;select&quot;</span>,
                options: [...] {"}"},
              </span>
              <span>{"}"}</span>
              <span className="mt-2 text-outline">
                &lt;Form schema={"{"}schema{"}"} /&gt;
              </span>
              <span className="text-outline">
                ── labels, a11y wiring, errors, layout ──
              </span>
            </div>
          </OutputFrame>
        </div>
      </Reveal>
    </section>
  );
}
