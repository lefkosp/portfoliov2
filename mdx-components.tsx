import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

const components = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-16 font-display text-headline-md text-foreground"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-12 font-display text-2xl font-medium leading-tight text-foreground"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-6 text-body-lg text-on-surface-variant" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-foreground underline decoration-accent underline-offset-4"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mt-6 flex list-none flex-col gap-3" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="text-body-md text-on-surface-variant" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code className="font-mono text-accent" {...props} />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mt-8 overflow-x-auto border border-surface-variant p-6 font-mono text-technical-mono text-on-surface-variant"
      {...props}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
