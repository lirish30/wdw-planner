import * as Sentry from "@sentry/nextjs";

const blockedKeys = /email|note|raw|import|invite|token|confirmation|authorization/i;

export function scrubEvent(event: Sentry.ErrorEvent): Sentry.ErrorEvent | null {
  const scrub = (value: unknown): unknown => {
    if (Array.isArray(value)) return value.map(scrub);
    if (value && typeof value === "object")
      return Object.fromEntries(
        Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
          blockedKeys.test(key) ? [] : [[key, scrub(child)]],
        ),
      );
    return value;
  };
  return {
    ...event,
    user: undefined,
    request: event.request
      ? { ...event.request, cookies: undefined, data: undefined, headers: undefined }
      : undefined,
    extra: scrub(event.extra) as Sentry.ErrorEvent["extra"],
    contexts: scrub(event.contexts) as Sentry.ErrorEvent["contexts"],
  };
}

export function initSentry() {
  if (!process.env.SENTRY_DSN) return;
  Sentry.init({ dsn: process.env.SENTRY_DSN, sendDefaultPii: false, beforeSend: scrubEvent });
}
