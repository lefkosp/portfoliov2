import { readdir } from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";

const DECISIONS_DIRECTORY = path.join(process.cwd(), "content/decisions");

export type DecisionMetadata = {
  id: string;
  title: string;
  date: string;
  status: string;
  context: string;
  options: string;
  decision: string;
  tradeoff: string;
  outcome: string;
  revisit: string;
};

export type Decision = DecisionMetadata & {
  slug: string;
  Content: ComponentType;
};

type DecisionModule = {
  default: ComponentType;
  metadata: DecisionMetadata;
};

export async function getDecisionSlugs() {
  const files = await readdir(DECISIONS_DIRECTORY);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getDecision(slug: string): Promise<Decision | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return null;
  }

  try {
    const entry = (await import(
      `@/content/decisions/${slug}.mdx`
    )) as DecisionModule;

    return {
      slug,
      ...entry.metadata,
      Content: entry.default,
    };
  } catch {
    return null;
  }
}

export async function getDecisions() {
  const slugs = await getDecisionSlugs();
  const decisions = await Promise.all(slugs.map((slug) => getDecision(slug)));

  return decisions
    .filter((decision): decision is Decision => decision !== null)
    .sort((a, b) => a.id.localeCompare(b.id));
}
