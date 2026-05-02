import { FadeIn } from "./fade-in";

export function ReferenceBlock() {
  return (
    <section className="mt-24 w-full px-6 lg:px-margin-edge">
      <FadeIn>
        <div className="relative h-[400px] w-full overflow-hidden border border-surface-variant bg-surface-container-lowest">
          <div className="absolute left-4 top-4 z-10 bg-background px-2 py-1 font-mono text-technical-mono text-surface-variant">
            REF_SOURCE // ARCHIVE_01
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest opacity-80"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 mix-blend-luminosity"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-surface-variant) 1px, transparent 1px), linear-gradient(to bottom, var(--color-surface-variant) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(135deg, transparent 49%, var(--color-accent) 49%, var(--color-accent) 51%, transparent 51%)",
              backgroundSize: "240px 240px",
              opacity: 0.06,
            }}
          />

          <div className="absolute bottom-4 right-4 font-mono text-technical-mono text-surface-variant opacity-60">
            GRID_ARCHIVE.01 / 1440 x 400
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
