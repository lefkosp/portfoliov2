import Link from "next/link";
import { getDecisions } from "@/lib/decisions";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";

export async function Decisions() {
  const decisions = await getDecisions();

  return (
    <section
      id="decisions"
      className="mt-section-gap w-full px-6 lg:px-margin-edge"
    >
      {/* The one section that switches phosphor colour; it is the argument
          the whole site is making, so it should not look like the lists
          above and below it. */}
      <div className="relative border border-signal-dim bg-signal-surface px-6 py-12 lg:px-12 lg:py-16">
        <div className="absolute -left-px -top-px h-10 w-10 border-l-2 border-t-2 border-signal" />
        <div className="absolute -bottom-px -right-px h-10 w-10 border-b-2 border-r-2 border-signal" />

        <Reveal variant="clip" className="mb-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-signal-dim pb-5">
            <h3 className="phosphor font-display text-headline-lg uppercase text-signal">
              <Scramble text="DECISION_LOG" />
            </h3>
            <span className="font-mono text-technical-mono text-signal-dim">
              RECORDS: {decisions.length.toString().padStart(2, "0")}
            </span>
          </div>
        </Reveal>

        <Reveal className="mb-12 max-w-[52rem]" delay={80}>
          <p className="font-sans text-body-lg text-on-surface-variant">
            Not a blog. Every non-obvious call I&apos;ve made on a real
            project, written up the way I&apos;d write it for a team: the
            constraint, the options I rejected, what the choice cost me, and
            what I&apos;d do differently. The mistakes are in here too;
            they&apos;re the useful part.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-signal-dim/40 lg:grid-cols-2">
          {decisions.map((decision, index) => (
            <Reveal key={decision.slug} variant="rise" delay={index * 80}>
              <article className="group relative flex h-full flex-col gap-5 bg-background p-6 transition-colors duration-200 hover:bg-signal-surface lg:p-8">
                <div className="flex items-center justify-between font-mono text-technical-mono">
                  <span className="phosphor text-signal">{decision.id}</span>
                  <span className="text-outline">{decision.date}</span>
                </div>

                <h4 className="font-display text-headline-md leading-tight text-foreground transition-colors duration-200 group-hover:text-signal">
                  <Link
                    href={`/decisions/${decision.slug}`}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {decision.title}
                  </Link>
                </h4>

                <dl className="flex flex-col gap-4 border-t border-surface-variant pt-5">
                  <div className="flex flex-col gap-1">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-signal-dim">
                      Decision
                    </dt>
                    <dd className="font-sans text-body-md text-on-surface-variant">
                      {decision.decision}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-signal-dim">
                      What it cost
                    </dt>
                    <dd className="font-sans text-body-md text-on-surface-variant">
                      {decision.tradeoff}
                    </dd>
                  </div>
                </dl>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2 font-mono text-technical-mono">
                  {decision.project ? (
                    <span className="border border-surface-variant px-2 py-1 text-[10px] text-on-surface-variant">
                      {decision.project}
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className="inline-flex items-center gap-2 uppercase text-on-surface-variant transition-colors duration-200 group-hover:text-signal">
                    FULL_RECORD
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10" delay={120}>
          <Link
            href="/decisions"
            className="group/btn inline-flex w-fit items-center gap-3 border border-signal-dim px-6 py-3 font-display text-label-caps uppercase tracking-widest text-signal transition-colors duration-200 hover:border-signal hover:bg-signal/10"
          >
            READ_THE_FULL_LOG
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
