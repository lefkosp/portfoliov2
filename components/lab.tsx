import { getLabEntries, type LabStatus } from "@/lib/lab";
import { FadeIn } from "./fade-in";

function statusClassName(status: LabStatus) {
  if (status === "ACTIVE") return "text-accent";
  return "text-outline";
}

export function Lab() {
  const entries = getLabEntries();

  return (
    <section id="lab" className="mt-section-gap w-full px-6 lg:px-margin-edge">
      <FadeIn className="mb-12 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 flex items-end justify-between border-b border-surface-variant pb-4 lg:col-span-12">
          <h3 className="font-display text-headline-lg uppercase text-foreground">
            IN_THE_LAB
          </h3>
          <span className="hidden font-mono text-technical-mono text-outline md:block">
            ENTRIES: {entries.length.toString().padStart(2, "0")}
          </span>
        </div>
      </FadeIn>

      <div className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <FadeIn className="col-span-4 lg:col-span-2">
          <h4 className="flex items-center gap-2 font-display text-label-caps uppercase text-accent">
            <span className="h-[1px] w-4 bg-accent" /> LAB
          </h4>
          <p className="mt-4 hidden font-sans text-body-md text-on-surface-variant lg:block">
            Experiments and products in progress. Source on GitHub only until
            there is a demo worth shipping.
          </p>
        </FadeIn>

        <ul className="col-span-4 flex flex-col lg:col-span-9">
          {entries.map((entry, index) => {
            const record: Array<[string, string]> = [
              ["PROBLEM", entry.problem],
              ["BUILT", entry.built],
              ["NEXT", entry.next],
            ];

            return (
              <li
                key={entry.slug}
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
                        {entry.id}
                      </span>

                      <div className="col-span-4 flex flex-col gap-3 lg:col-span-4">
                        <h4 className="font-display text-headline-md leading-tight text-foreground transition-colors duration-150 group-hover:text-accent">
                          {entry.name}
                        </h4>
                        <p className="font-sans text-body-md text-on-surface-variant group-open:hidden">
                          <span className="font-mono text-technical-mono text-outline">
                            NEXT {"//"}
                          </span>{" "}
                          {entry.next}
                        </p>
                      </div>

                      <div className="col-span-4 flex flex-col gap-2 font-mono text-technical-mono uppercase lg:col-span-3 lg:items-end lg:text-right">
                        <span className="text-outline">{entry.date}</span>
                        <span className={statusClassName(entry.status)}>
                          {entry.status}
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

                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-surface-variant px-2 py-1 font-mono text-[10px] text-on-surface-variant"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={entry.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${entry.name} source code on GitHub`}
                          className="group/link ml-auto inline-flex items-center gap-3 font-mono text-technical-mono uppercase text-on-surface-variant transition-colors duration-150 hover:text-accent"
                        >
                          SOURCE
                          <span
                            aria-hidden="true"
                            className="inline-block transition-transform duration-150 group-hover/link:translate-x-1"
                          >
                            ↗
                          </span>
                        </a>
                      </div>
                    </div>
                  </details>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </div>

      <FadeIn className="mt-8 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <p className="col-span-4 font-mono text-technical-mono text-outline lg:col-span-9 lg:col-start-4">
          + more experiments on{" "}
          <a
            href="https://github.com/lefkosp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant transition-colors duration-150 hover:text-accent"
          >
            github.com/lefkosp ↗
          </a>
        </p>
      </FadeIn>
    </section>
  );
}
