# WDW Planner — Repository Guide

This repository is for a private, family-shared Walt Disney World trip planner. The seed trip runs from September 16–26, 2026 and includes family time in Orlando, one Universal Epic Universe day, a Disney Vacation Club stay at the Island Tower at Disney's Polynesian Villas & Bungalows, six Disney park days, dining-plan accounting, Lightning Lane planning, naps, flights, and the grandparents' hotel locations.

## Read first

Before changing product behavior, read these files in order:

1. `docs/VISION.md`
2. `docs/product-vision.md`
3. `docs/prd.md`
4. `docs/product-roadmap.md`
5. `docs/design.md`
6. `docs/trip-research.md`
7. `data/trip-2026.json`

The CSV in the user's Downloads folder is the historical source, but `data/trip-2026.json` is the normalized seed. Do not parse layout meaning from CSV row numbers at runtime.

## Product rules

- Treat every plan item as structured data with an explicit type, status, time window, location, party scope, and source.
- Preserve the full trip, not just Disney days. Flights, family stays, Universal, hotel changes, naps, grandparents, and checkout logistics all belong in the timeline.
- Distinguish `idea`, `planned`, `needs-booking`, `booked`, `completed`, and `cancelled`. Never present a restaurant or Lightning Lane selection as confirmed without a confirmation number or explicit user action.
- Disney rules are date-sensitive. Store `verifiedAt`, `effectiveFrom`, `effectiveTo`, and source URL for rule snapshots. Never hard-code a rule without provenance.
- The app advises and validates; it does not claim to book Disney or Universal inventory. Link users to official services for transactions.
- Show conflicts with a reason and a recommended next action. Do not silently “fix” a family plan.
- Keep sensitive booking references server-side and visible only to invited trip members.

## UX principles

- Preserve the user's preferred columned sense of days through a horizontal date rail, while showing one readable day timeline at a time.
- Use time as the primary organizing axis. Meals, transport, attractions, naps, and hotel moments should read as one day—not separate spreadsheet rows.
- Drag-and-drop must have keyboard and touch alternatives, and every move must be reversible.
- A toddler nap is a schedule constraint, not decoration. Travel time to and from the resort must be visible around it.
- Park artwork sets context; it must not reduce text contrast or become the only carrier of park identity.
- Avoid dense tables and generic grids of boxed cards. Use editorial hierarchy, timeline rhythm, and progressive disclosure.
- No custom SVG animation work is in scope for v1.

## Engineering stack

The stack below is the chosen MVP stack recorded in `docs/VISION.md` and `docs/prd.md`:

- Next.js App Router with TypeScript
- Tailwind CSS using tokens sourced from the approved Figma design / future `docs/design.md`
- Supabase Postgres, Auth magic links, Row Level Security, and Realtime
- `dnd-kit` for accessible drag-and-drop
- Zod for import and mutation validation
- `date-fns` plus explicit IANA time zones for trip calculations
- Vitest and Testing Library for unit/component tests; Playwright for critical flows

Figma scope and product documents are approved and complete. Implement tasks sequentially from the first unchecked item in `docs/product-roadmap.md`.

## Quality gates

- Validate every imported day and event against a schema.
- Unit-test booking-window date math, dining-credit accounting, Lightning Lane grouping, time-zone conversion, and overnight-stay boundaries.
- Test toddler and split-park days with realistic transit buffers.
- Meet WCAG 2.1 AA for contrast, focus, keyboard operation, labels, and touch targets.
- Never scrape or automate My Disney Experience credentials.
- When rules conflict with the seed plan, keep both the source plan and the detected issue.

## Repository ownership

- `data/` owns normalized trip data, import fixtures, and rule snapshots.
- `docs/` owns product decisions, research, design handoff, and the roadmap.
- `src/` owns application code only after design approval.

Nested `AGENTS.md` files override this file for their directories.
