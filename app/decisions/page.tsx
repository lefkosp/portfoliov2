import Link from "next/link";
import { getDecisions } from "@/lib/decisions";

export const metadata = {
  title: "DECISION_LOG",
  description:
    "Architecture decision records from real projects: the constraint, the options rejected, the trade-off paid, and what I'd do differently.",
};

export default async function DecisionsPage() {
  const decisions = await getDecisions();

  return (
    <section className="w-full px-6 pt-16 lg:px-margin-edge lg:pt-24">
      <div className="mb-12 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-2">
          <Link
            href="/"
            className="group flex items-center gap-3 font-mono text-technical-mono uppercase text-on-surface-variant transition-colors duration-200 hover:text-signal"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>
            BACK / INDEX
          </Link>
        </div>
      </div>

      <div className="mb-16 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 flex flex-wrap items-end justify-between gap-4 border-b border-signal-dim pb-5 lg:col-span-12">
          <h1 className="phosphor font-display text-headline-xl uppercase text-signal">
            DECISION_LOG
          </h1>
          <span className="font-mono text-technical-mono text-signal-dim">
            RECORDS: {decisions.length.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-3">
          <div className="lg:sticky lg:top-16 flex flex-col gap-6">
            <p className="font-sans text-body-lg text-on-surface-variant">
              Every non-obvious call I&apos;ve made on a real project, written
              up the way I&apos;d write it for a team.
            </p>
            <dl className="flex flex-col gap-4 border-t border-surface-variant pt-6 font-mono text-technical-mono">
              {[
                ["CONTEXT", "the constraint I was under"],
                ["OPTIONS", "what I considered and rejected"],
                ["DECISION", "what I actually did"],
                ["TRADEOFF", "what it cost"],
                ["OUTCOME", "what happened next"],
                ["REVISIT", "what I'd change"],
              ].map(([label, meaning]) => (
                <div key={label} className="flex flex-col gap-1">
                  <dt className="text-signal">{label} {"//"}</dt>
                  <dd className="font-sans text-body-md text-outline">
                    {meaning}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <ol className="col-span-4 flex flex-col border-t border-surface-variant lg:col-span-8 lg:col-start-5">
          {decisions.map((decision) => (
            <li
              key={decision.slug}
              className="border-b border-surface-variant"
            >
              <Link
                href={`/decisions/${decision.slug}`}
                className="group flex flex-col gap-4 py-8 transition-colors duration-200"
              >
                <div className="flex flex-wrap items-center gap-4 font-mono text-technical-mono">
                  <span className="text-signal">{decision.id}</span>
                  <span className="text-outline">{decision.date}</span>
                  {decision.project ? (
                    <span className="border border-surface-variant px-2 py-1 text-[10px] text-on-surface-variant">
                      {decision.project}
                    </span>
                  ) : null}
                </div>

                <h2 className="font-display text-headline-md leading-tight text-foreground transition-colors duration-200 group-hover:text-signal">
                  {decision.title}
                </h2>

                <p className="font-sans text-body-md text-on-surface-variant">
                  {decision.decision}
                </p>

                <span className="inline-flex items-center gap-2 font-mono text-technical-mono uppercase text-outline transition-colors duration-200 group-hover:text-signal">
                  FULL_RECORD
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
