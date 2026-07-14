# WDW Planner

Private, family-shared Walt Disney World trip planning. It advises on plans and links to official booking services; it never books inventory.

## Local development

1. Install Node 20+ and the [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started).
2. Copy `.env.example` to `.env.local` and fill the local Supabase URL and anon key shown by `npx supabase start`.
3. Run `npx supabase start`, then `npx supabase db reset` to apply migrations and seed the local fixture.
4. Run `npm run dev` and open `http://localhost:3000/sign-in`.

`npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, and `npm run test:e2e` are the local quality gates. Server-only secrets are validated only when server-only integrations are invoked and must never be prefixed with `NEXT_PUBLIC_`.
