import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/settings", label: "Settings" },
  { href: "/profile", label: "Profile" },
  { href: "/health", label: "Health check" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-page py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link href="/" className="flex w-fit items-center gap-2 text-lg font-bold tracking-tight text-text-primary">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-control bg-primary text-sm text-white shadow-sm">F</span>
          <span>FlyRank</span>
          <span className="ml-1 hidden rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-strong sm:inline">Workspace</span>
        </Link>
        <nav aria-label="Main navigation" className="flex w-full flex-wrap gap-1 md:w-auto md:flex-nowrap">
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="shrink-0 rounded-control px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
