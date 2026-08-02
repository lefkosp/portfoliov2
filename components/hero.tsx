import { BootSequence } from "./boot-sequence";
import { Scramble } from "./scramble";

/** Answers the recruiter's first three questions (level, where, how long)
 *  without a scroll. */
const readout = [
  { label: "EXP", value: "4+ YRS" },
  { label: "NOW", value: "ODYSSEY // CLEARSKIES" },
  { label: "LOC", value: "NICOSIA, CY" },
  { label: "STACK", value: "REACT / TS" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-280px)] w-full items-center px-6 py-8 lg:min-h-screen lg:px-margin-edge lg:py-0">
      <div className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="hidden lg:col-span-1 lg:block" />

        <div className="relative z-10 col-span-4 flex flex-col gap-8 lg:col-span-9">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <BootSequence />
          </div>

          <h1 className="animate-fade-in font-display text-headline-xl leading-tight text-foreground">
            <Scramble text="LEFKOS" startDelay={900} />
            <br />
            <span className="text-outline">
              <Scramble text="PAPAPETROU" startDelay={1050} />
            </span>
          </h1>

          <div
            className="animate-fade-in-up relative flex w-fit items-center gap-4 border-t border-surface-variant pr-12 pt-6"
            style={{ animationDelay: "1400ms" }}
          >
            <div className="absolute -right-[3px] -top-[3px] h-[5px] w-[5px] bg-accent" />
            <h2 className="phosphor font-display text-headline-md text-on-surface">
              LEAD FRONTEND DEVELOPER
            </h2>
          </div>

          <dl
            className="animate-fade-in-up mt-4 grid grid-cols-2 gap-px border border-surface-variant bg-surface-variant lg:grid-cols-4"
            style={{ animationDelay: "1600ms" }}
          >
            {readout.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 bg-background px-4 py-4"
              >
                <dt className="font-mono text-[10px] uppercase tracking-widest text-outline">
                  {item.label}
                </dt>
                <dd className="font-display text-label-caps uppercase tracking-wider text-on-surface">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="animate-fade-in relative hidden min-h-[400px] border-l border-surface-variant lg:col-span-2 lg:block"
          style={{ animationDelay: "1800ms" }}
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
