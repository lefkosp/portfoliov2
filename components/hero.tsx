export function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-280px)] w-full items-center px-6 py-8 lg:min-h-screen lg:px-margin-edge lg:py-0">
      <div className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="hidden lg:col-span-2 lg:block" />

        <div className="relative z-10 col-span-4 flex flex-col gap-8 lg:col-span-8">
          <div
            className="animate-fade-in-up border-l border-surface-variant pl-4 font-mono text-technical-mono text-accent"
            style={{ animationDelay: "100ms" }}
          >
            <span className="mb-2 block text-outline">{"/*"}</span>
            INIT_SEQUENCE: <span className="text-foreground">ONLINE</span>
            <br />
            ROLE:{" "}
            <span className="text-foreground">LEAD_FRONTEND_DEVELOPER</span>
            <br />
            FOCUS:{" "}
            <span className="text-foreground">
              LEGACY_PLATFORMS → REACT
            </span>
            <span className="mt-2 block text-outline">{"*/"}</span>
          </div>

          <h1
            className="animate-fade-in-up font-display text-headline-xl leading-tight text-foreground"
            style={{ animationDelay: "300ms" }}
          >
            LEFKOS <br />
            <span className="text-outline">PAPAPETROU</span>
          </h1>

          <div
            className="animate-fade-in-up relative flex w-fit items-center gap-4 border-t border-surface-variant pr-12 pt-6"
            style={{ animationDelay: "500ms" }}
          >
            <div className="absolute -right-[3px] -top-[3px] h-[5px] w-[5px] bg-accent" />
            <h2 className="font-display text-headline-md text-on-surface">
              LEAD FRONTEND DEVELOPER
            </h2>
          </div>
        </div>

        <div
          className="animate-fade-in relative hidden min-h-[400px] border-l border-surface-variant lg:col-span-2 lg:block"
          style={{ animationDelay: "700ms" }}
        >
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-surface-variant" />
          <div className="absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-mono text-technical-mono text-outline opacity-50">
            SYS.ARCH_GRID_V1
          </div>
        </div>
      </div>
    </section>
  );
}
