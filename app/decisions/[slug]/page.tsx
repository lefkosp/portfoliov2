import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDecision, getDecisionSlugs } from "@/lib/decisions";

type DecisionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getDecisionSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DecisionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const decision = await getDecision(slug);

  if (!decision) {
    return {};
  }

  return {
    title: `${decision.id} — ${decision.title}`,
    description: decision.decision,
  };
}

export default async function DecisionPage({ params }: DecisionPageProps) {
  const { slug } = await params;
  const decision = await getDecision(slug);

  if (!decision) {
    notFound();
  }

  const { Content } = decision;

  const record: Array<[string, string]> = [
    ["CONTEXT", decision.context],
    ["OPTIONS", decision.options],
    ["DECISION", decision.decision],
    ["TRADEOFF", decision.tradeoff],
    ["OUTCOME", decision.outcome],
    ["REVISIT", decision.revisit],
  ];

  return (
    <section className="w-full px-6 pt-16 lg:px-margin-edge lg:pt-24">
      <div className="mb-16 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-2">
          <Link
            href="/#decisions"
            className="group flex items-center gap-3 font-mono text-technical-mono uppercase text-on-surface-variant transition-colors duration-150 hover:text-accent"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-150 group-hover:-translate-x-1"
            >
              ←
            </span>
            BACK / DECISION_LOG
          </Link>
        </div>
      </div>

      <article className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-2">
          <h2 className="flex items-center gap-2 font-display text-label-caps uppercase text-accent">
            <span className="h-[1px] w-4 bg-accent" /> {decision.id}
          </h2>
        </div>

        <div className="col-span-4 lg:col-span-8">
          <header className="mb-12 flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4 font-mono text-technical-mono uppercase text-outline">
              <span>{decision.date}</span>
              <span>{"//"}</span>
              <span className="text-accent">{decision.status}</span>
            </div>
            <h1 className="font-display text-headline-xl leading-tight text-foreground">
              {decision.title}
            </h1>
          </header>

          <dl className="mb-20 border border-surface-variant">
            {record.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-1 gap-2 border-b border-surface-variant p-5 last:border-b-0 lg:grid-cols-[140px_1fr] lg:gap-6"
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

          <div>
            <Content />
          </div>
        </div>
      </article>
    </section>
  );
}
