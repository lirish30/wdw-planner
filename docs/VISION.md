# Vision — WDW Planner

> Captured by the Product Planner skill. This file is the source of truth for
> generating product-vision.md, prd.md, and product-roadmap.md. Edit it directly
> and re-run the Product Planner to regenerate downstream documents.

**Created:** 2026-07-13
**Updated:** 2026-07-13

## Founder

- **Name:** Logan
- **Expertise:** Hands-on Walt Disney World and Disney Vacation Club trip planning for a multigenerational family
- **Background:** The founder currently manages a detailed 2026 Orlando and Walt Disney World vacation in a spreadsheet. The plan must coordinate adults, a young child, grandparents staying at different resorts, dining-plan credits, attraction strategy, flights, hotel changes, and booking windows without losing the compact day-by-day overview.

## Purpose

- **Who you help:** Families planning complex Walt Disney World trips, especially groups with young children, split park days, Disney Resort stays, and relatives with overlapping itineraries
- **Problem you solve:** A spreadsheet can store many choices, but it cannot explain dependencies, validate changing Disney rules, surface booking deadlines, balance dining entitlements, or make the schedule comfortably editable and shareable on a phone.
- **Desired transformation:** A family moves from a dense, ambiguous spreadsheet to a shared, readable plan that immediately shows what is fixed, what still needs booking, what conflicts with current rules, and what the whole group should do next.
- **Why you:** The founder is solving a real trip already in progress, is a DVC owner, understands the practical constraints of traveling with a toddler, and has a concrete source plan against which the product can be tested.

## Product

- **Name:** WDW Planner
- **One-liner:** A rule-aware, collaborative itinerary for families coordinating every day, booking window, meal credit, nap, and attraction in a Walt Disney World vacation.
- **How it works:** Import or enter a trip, review the normalized day rail, open a day to edit its chronological timeline, drag events within valid windows, invite family members, and use planning alerts to resolve dining, Lightning Lane, ticket, travel, and resort conflicts before the vacation.
- **Key capabilities:**
  - Readable multi-day itinerary with chronological day timelines and split-park support
  - Rule-aware Lightning Lane planning with park-specific groups, Single Pass distinctions, and booking windows
  - Dining reservation and dining-plan credit tracking with booking status and confirmation times
  - Family sharing with viewer/editor roles, change history, and private booking details
  - Toddler-aware logistics including naps, height constraints, child swap, resort transit, flights, and checkout timing
- **Platform:** web
- **Market differentiation:** The planner combines a family's complete real-world itinerary with dated Disney rule validation. It is neither a generic calendar nor an unofficial booking bot; it keeps the family plan understandable while explaining why a choice is valid, risky, or incomplete.
- **Magic moment:** The imported spreadsheet becomes a calm day-by-day plan and immediately reveals actionable issues—such as an ineligible water-park perk, a Lightning Lane group conflict, or an unbalanced meal-credit plan—without erasing the family's original choices.

## Audience

- **Primary user:** A detail-oriented parent or trip lead coordinating a weeklong Walt Disney World vacation for two adults and a child, comfortable with apps but overwhelmed by keeping Disney rules, reservations, transportation, and family preferences synchronized.
- **Secondary users:**
  - Spouses and relatives who need a trustworthy mobile view and limited editing rights
  - Grandparents or other subgroups whose hotel and meetup plans overlap only part of the trip
- **Current alternatives:** Google Sheets, shared notes, calendar events, My Disney Experience, group texts, and third-party Disney blogs or crowd-planning tools
- **Frustrations:** Information is duplicated across tools; spreadsheet cells hide status and dependencies; Disney's official app focuses on transactions rather than whole-trip reasoning; and relatives cannot quickly tell which plans are confirmed.

## Business

- **Revenue model:** free
- **90-day goal:** Ship a private, reliable family MVP, import the September 2026 trip, share it with the travel party, and use it through the reservation and Lightning Lane booking windows.
- **6-month vision:** Refine the app from real trip feedback, support reusable trip templates, and decide whether other Disney-planning families justify a public product.
- **Constraints:** The trip is time-bound; Disney rules change; there is no approved public Disney booking API; the founder wants strong usability without spending time on decorative SVG animation; and the initial product should remain inexpensive to host.
- **Go-to-market:** Start as an invite-only family tool. After the trip, test a small private beta with DVC and family-planning communities only if the private MVP proves useful.

## Brand Voice

- **Personality:** The organized, warm family trip lead who knows the rules, keeps everyone calm, and never shames a changing plan.
- **Tone of voice:** Clear, reassuring, and specific. Example success: “Your dining plan balances: 7 quick-service and 7 table-service credits per person.” Example warning: “The complimentary water-park benefit ends before your September 19 check-in. Keep the activity, but plan separate admission or choose a resort afternoon.”

> Visual identity (mood, anti-patterns, design tokens) is deliberately not
> captured here — it lives in docs/design.md, generated by the Design System
> skill from image references.

## Tech Stack

- **App type:** web
- **Frontend:** Next.js with TypeScript — suggested for a responsive installable web app, server rendering, and strong coding-agent support
- **Backend:** Supabase — suggested for authenticated CRUD, realtime family collaboration, and a small operational footprint
- **Database:** Supabase Postgres — suggested for relational trip data, constraints, auditability, and Row Level Security
- **Auth:** Supabase Auth magic links — suggested to make family invitations low-friction without handling passwords
- **Payments:** None — the private MVP is free and should not add billing complexity
- **Analytics:** PostHog — suggested for a small opt-in funnel focused on import, conflict resolution, and sharing; disable for the private build if unnecessary
- **Email:** Resend — suggested for trip invitations and reminder emails
- **Error tracking:** Sentry — suggested to catch import and synchronization failures before the family relies on the plan in-park

## Tooling

- **Coding agent:** other: OpenAI Codex
