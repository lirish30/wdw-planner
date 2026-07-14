import Link from "next/link";
import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <div className="app-shell__header-inner">
          <Link className="app-shell__brand" href="/">
            <span aria-hidden="true" className="app-shell__mark">
              ✦
            </span>
            WDW Planner
          </Link>
          <nav aria-label="Primary navigation" className="app-shell__nav">
            <Link className="app-shell__nav-link" href="/">
              Home
            </Link>
            <Link className="app-shell__nav-link" href="/specimen">
              Design system
            </Link>
          </nav>
        </div>
      </header>
      <main className="app-shell__main">{children}</main>
    </div>
  );
}
