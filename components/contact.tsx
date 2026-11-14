import { CopyEmail } from "./copy-email";
import { Reveal } from "./reveal";
import { Scramble } from "./scramble";

const EMAIL = "paplefkos@gmail.com";

const secondaryLinkClass =
  "flex items-center gap-2 border border-surface-variant px-6 py-3 font-display text-label-caps uppercase tracking-widest text-on-surface transition-colors duration-150 hover:border-accent hover:text-accent";

export function Contact() {
  return (
    <section
      id="contact"
      className="mt-section-gap w-full px-6 lg:px-margin-edge"
    >
      <Reveal className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="group relative col-span-4 flex flex-col items-center overflow-hidden border border-surface-variant p-6 py-12 text-center transition-colors duration-300 hover:border-accent sm:p-12 lg:col-span-10 lg:col-start-2 lg:p-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-high opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <div className="relative z-10 mb-8 font-mono text-technical-mono text-outline">
            CONTACT
          </div>

          <h2 className="relative z-10 mb-10 font-display text-headline-xl leading-tight text-foreground">
            <Scramble text="INITIATE" />
            <br />
            <span className="text-outline">
              <Scramble text="CONNECTION" />
            </span>
          </h2>

          {/* The address as selectable text: mailto fails silently for anyone
              on webmail without a configured mail client. */}
          <div className="relative z-10 mb-8 flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href={`mailto:${EMAIL}`}
              className="select-all break-all border border-accent px-6 py-3 font-mono text-body-lg text-accent transition-colors duration-150 hover:bg-accent hover:text-on-primary-fixed"
            >
              {EMAIL}
            </a>
            <CopyEmail email={EMAIL} />
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/lefkosp/"
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryLinkClass}
            >
              LINKEDIN
              <span aria-hidden="true">↗</span>
            </a>
            <a href="/cv.pdf" download className={secondaryLinkClass}>
              DOWNLOAD CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
