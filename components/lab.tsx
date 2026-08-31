import { getLabEntries, type LabStatus } from "@/lib/lab";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";

function statusColor(status: LabStatus) {
  if (status === "ACTIVE") return "text-accent";
  if (status === "PAUSED") return "text-error";
  return "text-on-surface-variant";
}

function LedIndicator({ status }: { status: LabStatus }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2 w-2 shrink-0 ${
        status === "ACTIVE"
          ? "animate-pulse bg-accent"
          : status === "PAUSED"
            ? "bg-error/60"
            : "bg-outline"
      }`}
    />
  );
}

/** A monitor readout rather than another expandable list. Work is editorial,
 *  Decisions are records, this is a board of things currently running. */
export function Lab() {
  const entries = getLabEntries();

  return (
    <section id="lab" className="mt-section-gap w-full px-6 lg:px-margin-edge">
      <Reveal variant="clip" className="mb-10">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-surface-variant pb-4">
          <h3 className="font-display text-headline-lg uppercase text-foreground">
            <Scramble text="IN_THE_LAB" />
          </h3>
          <span className="font-mono text-technical-mono text-outline">
            RUNNING: {entries.length.toString().padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      <Reveal className="mb-10 max-w-[46rem]" delay={60}>
        <p className="font-sans text-body-md text-on-surface-variant">
          Work in progress, listed honestly. Source is public from day one;
          nothing here claims to be finished.
        </p>
      </Reveal>

      <div className="border border-surface-variant">
        <div className="hidden grid-cols-[auto_1.6fr_1.4fr_auto] gap-6 border-b border-surface-variant bg-surface-container-lowest px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-outline lg:grid">
          <span className="w-20">ID</span>
          <span>Module</span>
          <span>Next milestone</span>
          <span className="w-28 text-right">State</span>
        </div>

        {entries.map((entry, index) => (
          <Reveal
            key={entry.slug}
            variant="left"
            delay={index * 90}
            className="border-b border-surface-variant last:border-b-0"
          >
            <div className="group grid grid-cols-1 gap-4 px-5 py-6 transition-colors duration-200 hover:bg-surface-container-low lg:grid-cols-[auto_1.6fr_1.4fr_auto] lg:items-start lg:gap-6">
              <div className="flex w-20 items-center gap-2 font-mono text-technical-mono text-outline">
                <LedIndicator status={entry.status} />
                {entry.id}
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-display text-headline-md leading-tight text-foreground transition-colors duration-200 group-hover:text-accent">
                  {entry.name}
                </h4>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {entry.problem}
                </p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-surface-variant px-2 py-1 font-mono text-[10px] text-outline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="font-sans text-body-md text-on-surface-variant">
                <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-outline lg:hidden">
                  Next //
                </span>
                {entry.next}
              </p>

              <div className="flex w-full flex-row items-center justify-between gap-2 font-mono text-technical-mono lg:w-28 lg:flex-col lg:items-end lg:justify-start">
                <span className={statusColor(entry.status)}>
                  {entry.status}
                </span>
                <span className="text-outline">{entry.date}</span>
                <a
                  href={entry.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${entry.name} source code on GitHub`}
                  className="uppercase text-on-surface-variant transition-colors duration-200 hover:text-accent"
                >
                  SOURCE ↗
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6" delay={100}>
        <p className="font-mono text-technical-mono text-outline">
          + more experiments on{" "}
          <a
            href="https://github.com/lefkosp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant transition-colors duration-200 hover:text-accent"
          >
            github.com/lefkosp ↗
          </a>
        </p>
      </Reveal>
    </section>
  );
}
