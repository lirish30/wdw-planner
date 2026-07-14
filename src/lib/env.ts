import { z } from "zod";

const optionalUrl = z.string().url().optional().or(z.literal(""));

const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: optionalUrl,
  NEXT_PUBLIC_ANALYTICS_ENABLED: z.enum(["true", "false"]),
});

const serverSchema = clientSchema.extend({
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM_EMAIL: z.string().email(),
  SENTRY_DSN: z.string().url(),
  SENTRY_AUTH_TOKEN: z.string().min(1),
  RULE_REFRESH_SECRET: z.string().min(1),
});

function formatIssues(issues: z.core.$ZodIssue[]) {
  return issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join("; ");
}

export function getClientEnv() {
  return parseClientEnv({
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_ANALYTICS_ENABLED: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED,
  });
}

export function parseClientEnv(input: unknown) {
  const parsed = clientSchema.safeParse(input);
  if (!parsed.success)
    throw new Error(`Invalid public environment: ${formatIssues(parsed.error.issues)}`);
  return parsed.data;
}

export function getServerEnv() {
  const parsed = serverSchema.safeParse({ ...process.env });
  if (!parsed.success)
    throw new Error(`Invalid server environment: ${formatIssues(parsed.error.issues)}`);
  return parsed.data;
}
