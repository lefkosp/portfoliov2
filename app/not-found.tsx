import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen w-full items-center px-6 lg:px-margin-edge">
      <div className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="hidden lg:col-span-2 lg:block" />

        <div className="col-span-4 flex flex-col gap-8 lg:col-span-8">
          <div className="animate-fade-in-up border-l border-surface-variant pl-4 font-mono text-technical-mono text-accent">
            <span className="mb-2 block text-outline">{"/*"}</span>
            ERROR_CODE: <span className="text-error">404</span>
            <br />
            STATUS: <span className="text-foreground">RESOURCE_NOT_FOUND</span>
            <span className="mt-2 block text-outline">{"*/"}</span>
          </div>

          <h1
            className="animate-fade-in-up font-display text-headline-xl leading-tight text-foreground"
            style={{ animationDelay: "150ms" }}
          >
            SIGNAL <br />
            <span className="text-outline">LOST</span>
          </h1>

          <p
            className="animate-fade-in-up max-w-[42rem] font-sans text-body-lg text-on-surface-variant"
            style={{ animationDelay: "300ms" }}
          >
            The path you requested does not resolve to any known node. It may
            have been moved, archived, or never existed.
          </p>

          <Link
            href="/"
            className="group/btn animate-fade-in-up flex w-fit items-center gap-3 border border-surface-variant px-6 py-3 font-display text-label-caps uppercase text-on-surface transition-colors duration-150 hover:border-accent hover:text-accent"
            style={{ animationDelay: "450ms" }}
          >
            <span aria-hidden="true" className="font-mono">
              &gt;
            </span>
            RETURN_HOME
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-150 group-hover/btn:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
