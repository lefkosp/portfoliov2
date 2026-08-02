type OutputFrameProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * A framed monospace panel used to show what a project actually emits
 * (a Slack digest, a schema) for the projects that have no screenshot.
 * Decorative-but-informative: the content is real output, not filler.
 */
export function OutputFrame({
  title,
  children,
  className = "",
}: OutputFrameProps) {
  return (
    <div
      className={`border border-surface-variant bg-surface-container-lowest ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-surface-variant px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-outline">
        <span aria-hidden="true" className="flex gap-1">
          <span className="h-[6px] w-[6px] border border-outline" />
          <span className="h-[6px] w-[6px] border border-outline" />
          <span className="h-[6px] w-[6px] border border-outline" />
        </span>
        {title}
      </div>
      <div className="overflow-x-auto p-4 font-mono text-technical-mono leading-relaxed">
        {children}
      </div>
    </div>
  );
}
