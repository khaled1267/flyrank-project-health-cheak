"use client";

import { useEffect, useState } from "react";

type HealthData = {
  status: "healthy";
  application: string;
  timestamp: string;
};

type HealthState =
  | { kind: "loading" }
  | { kind: "success"; data: HealthData }
  | { kind: "error" };

function isHealthData(value: unknown): value is HealthData {
  if (typeof value !== "object" || value === null) return false;

  const data = value as Record<string, unknown>;
  return (
    data.status === "healthy" &&
    typeof data.application === "string" &&
    typeof data.timestamp === "string"
  );
}

export function HealthStatus() {
  const [state, setState] = useState<HealthState>({ kind: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    async function loadHealth() {
      try {
        const response = await fetch("/api/health", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Health request failed");

        const data: unknown = await response.json();
        if (!isHealthData(data)) throw new Error("Unexpected health response");

        setState({ kind: "success", data });
      } catch {
        if (!controller.signal.aborted) setState({ kind: "error" });
      }
    }

    void loadHealth();
    return () => controller.abort();
  }, []);

  return (
    <section
      aria-live="polite"
      aria-busy={state.kind === "loading"}
      className="overflow-hidden rounded-panel border border-border bg-surface shadow-sm shadow-slate-200/50"
    >
      <div className="border-b border-border bg-gradient-to-br from-surface via-surface to-primary-soft/40 p-card sm:p-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-strong">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
          System
        </p>
        <h1 className="mt-5 max-w-3xl text-page-title font-semibold text-text-primary sm:text-display">
          Health check
        </h1>
        <p className="mt-4 max-w-2xl text-body text-text-secondary">
          Current status for the FlyRank application service.
        </p>
      </div>

      <div className="p-card sm:p-10">
        {state.kind === "loading" && (
          <div className="rounded-card border border-border bg-surface-muted p-5 sm:p-6">
            <p className="text-sm font-medium text-text-primary">Checking application health…</p>
            <p className="mt-1 text-sm leading-6 text-text-muted">Requesting the latest status from the server.</p>
          </div>
        )}

        {state.kind === "error" && (
          <div className="rounded-card border border-rose-200 bg-rose-50 p-5 sm:p-6" role="alert">
            <p className="text-sm font-semibold text-rose-900">Health check unavailable</p>
            <p className="mt-1 text-sm leading-6 text-rose-800">
              The application status could not be loaded. Please try again later.
            </p>
          </div>
        )}

        {state.kind === "success" && (
          <div className="rounded-card border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-text-primary">Application status</p>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-200">
                <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
                {state.data.status}
              </span>
            </div>
            <dl className="mt-5 grid gap-4 border-t border-emerald-200 pt-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">Application</dt>
                <dd className="mt-1 text-sm font-medium text-text-primary">{state.data.application}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">Server timestamp</dt>
                <dd className="mt-1 break-words text-sm font-medium text-text-primary">
                  <time dateTime={state.data.timestamp}>{state.data.timestamp}</time>
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}
