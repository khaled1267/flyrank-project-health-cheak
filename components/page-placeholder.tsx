type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PagePlaceholder({ eyebrow, title, description }: PagePlaceholderProps) {
  return (
    <section className="overflow-hidden rounded-panel border border-border bg-surface shadow-sm shadow-slate-200/50">
      <div className="border-b border-border bg-gradient-to-br from-surface via-surface to-primary-soft/40 p-card sm:p-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-strong">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-page-title font-semibold text-text-primary sm:text-display">{title}</h1>
        <p className="mt-4 max-w-2xl text-body text-text-secondary">{description}</p>
      </div>
      <div className="p-card sm:p-10">
        <div className="rounded-card border border-dashed border-border-strong bg-surface-muted p-5 sm:p-6">
          <p className="text-sm font-medium text-text-primary">Your workspace is ready</p>
          <p className="mt-1 text-sm leading-6 text-text-muted">This page is prepared for future FlyRank features.</p>
        </div>
      </div>
    </section>
  );
}
