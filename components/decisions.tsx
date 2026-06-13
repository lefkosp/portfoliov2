import Link from "next/link";
import { getDecisions } from "@/lib/decisions";
import { FadeIn } from "./fade-in";

export async function Decisions() {
  const decisions = await getDecisions();

  return (
    <section
      id="decisions"
      className="mt-section-gap w-full px-6 lg:px-margin-edge"
    >
      <FadeIn className="mb-12 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 flex items-end justify-between border-b border-surface-variant pb-4 lg:col-span-12">
          <h3 className="font-display text-headline-lg uppercase text-foreground">
            DECISION_LOG
          </h3>
          <span className="hidden font-mono text-technical-mono text-outline md:block">
            RECORDS: {decisions.length.toString().padStart(2, "0")}
          </span>
        </div>
      </FadeIn>

      <div className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <FadeIn className="col-span-4 lg:col-span-2">
          <h4 className="flex items-center gap-2 font-display text-label-caps uppercase text-accent">
            <span className="h-[1px] w-4 bg-accent" /> ADR
          </h4>
          <p className="mt-4 hidden font-sans text-body-md text-on-surface-variant lg:block">
            Real architecture decisions from real projects: context,
            trade-offs, and what I&apos;d do differently. Expand a record or
            open its permalink.
          </p>
        </FadeIn>

        <ul className="col-span-4 flex flex-col lg:col-span-9">
          {decisions.map((decision, index) => {
            const record: Array<[string, string]> = [
              ["CONTEXT", decision.context],
              ["OPTIONS", decision.options],
              ["DECISION", decision.decision],
              ["TRADEOFF", decision.tradeoff],
              ["OUTCOME", decision.outcome],
              ["REVISIT", decision.revisit],
            ];

            return (
              <li
                key={decision.slug}
                className="border-t border-surface-variant first:border-t-0 lg:first:border-t"
              >
                <FadeIn delay={index * 100}>
                  <details className="group">
                    <summary className="grid cursor-pointer list-none grid-cols-4 gap-gutter py-8 transition-colors duration-150 [&::-webkit-details-marker]:hidden lg:grid-cols-9">
                      <span className="col-span-4 whitespace-nowrap font-mono text-technical-mono text-accent lg:col-span-2">
                        <span aria-hidden="true" className="text-outline">
                          <span className="group-open:hidden">[+]</span>
                          <span className="hidden group-open:inline">[-]</span>
                        </span>{" "}
                        {decision.id}
                      </span>

                      <div className="col-span-4 flex flex-col gap-3 lg:col-span-4">
                        <h4 className="font-display text-headline-md leading-tight text-foreground transition-colors duration-150 group-hover:text-accent">
                          {decision.title}
                        </h4>
                        <p className="font-sans text-body-md text-on-surface-variant group-open:hidden">
                          <span className="font-mono text-technical-mono text-outline">
                            TRADEOFF {"//"}
                          </span>{" "}
                          {decision.tradeoff}
                        </p>
                      </div>

                      <div className="col-span-4 flex flex-col gap-2 font-mono text-technical-mono uppercase text-outline lg:col-span-3 lg:items-end lg:text-right">
                        <span>{decision.date}</span>
                        <span className="text-on-surface-variant">
                          {decision.status}
                        </span>
                      </div>
                    </summary>

                    <div className="pb-10 lg:pl-[calc((100%+24px)*2/9)]">
                      <dl className="border border-surface-variant">
                        {record.map(([label, value]) => (
                          <div
                            key={label}
                            className="grid grid-cols-1 gap-2 border-b border-surface-variant p-5 last:border-b-0 lg:grid-cols-[120px_1fr] lg:gap-6"
                          >
                            <dt className="font-mono text-technical-mono text-accent">
                              {label} {"//"}
                            </dt>
                            <dd className="font-sans text-body-md text-on-surface-variant">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <Link
                        href={`/decisions/${decision.slug}`}
                        className="group/link mt-6 inline-flex items-center gap-3 font-mono text-technical-mono uppercase text-on-surface-variant transition-colors duration-150 hover:text-accent"
                      >
                        FULL_RECORD
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform duration-150 group-hover/link:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </details>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
