# Product Vision — WDW Planner

## 1. Vision & Mission

### Vision Statement

Every family can arrive at Walt Disney World with one shared plan that feels calm, current, and realistic—even when the trip itself is complicated.

### Mission Statement

WDW Planner turns a family's fragmented itinerary into a readable, collaborative timeline and explains the dated rules, booking gaps, and logistical conflicts that could derail it.

### Founder's Why

Logan is not starting with a hypothetical market brief. He is already coordinating an eleven-day Orlando trip that combines flights, a family-home stay, Epic Universe, a DVC villa, six Disney park days, grandparents at separate resorts, dining-plan entitlements, a toddler's nap rhythm, and multiple booking windows. The existing spreadsheet contains the choices, but understanding whether those choices work requires switching among Disney pages, My Disney Experience, calendars, blogs, and group messages.

That lived constraint is the founder advantage. Logan knows that “optimal” is not the same as usable: a technically efficient touring plan can still fail if it ignores a resort nap, a flight buffer, a grandparent meetup, or the emotional cost of rushing a young child. WDW Planner is the tool he needs for his own family first, with the normalized September 2026 trip serving as a real acceptance test rather than sample data designed to flatter the product.

### Core Values

1. **Explain before changing.** A rule conflict never silently overwrites a family's plan. The product preserves the original choice, states why it may not work, gives the applicability date and source, and offers a next action.
2. **Protect the family's energy.** Naps, travel buffers, meal pace, and subgroup needs are first-class planning objects. A plan that fits the rules but exhausts the family is not valid.
3. **Certainty must be earned.** “Confirmed,” “eligible,” and “balanced” appear only when the underlying data supports them. Unknown times and changing rules remain visibly provisional.
4. **One glance should answer the next question.** The selected day, unresolved blockers, booking deadlines, and confirmed commitments must be easy to find on desktop and in the park.
5. **Build from real trips, not feature fantasies.** New scope should solve an observed planning failure in the September trip or a validated beta trip before it enters the roadmap.

### Strategic Pillars

- **The complete itinerary is the product.** Dining, passes, naps, resorts, family visits, and flights belong in one chronology rather than separate mini-tools.
- **Rules are dated evidence, not timeless truth.** Every automated warning carries a source, verification timestamp, and applicability range.
- **Mobile is for execution; desktop is for planning.** Desktop favors comparison and editing. Mobile favors the selected day, large targets, fast status checks, and graceful behavior on weak networks.
- **Private usefulness precedes public scale.** The first release succeeds by helping one family complete one trip. Public positioning and monetization wait for evidence.

### Success Looks Like

In twelve months, the September 2026 trip has been planned and executed from WDW Planner without a missed booking deadline or a surprise credit conflict. At least 25 invited DVC or family-trip leads have imported a real itinerary, 15 have shared it with another traveler, and 10 have used the planner through a booking window or vacation. The product remains inexpensive to operate, its rule alerts show transparent sources, and feedback clearly indicates whether to continue as a focused family tool or invest in a public beta.

## 2. User Research

### Primary Persona

Alex is a parent and volunteer trip lead in their 30s or early 40s planning a five-to-ten-night Walt Disney World vacation for a partner and child. Alex is comfortable with Sheets, calendars, and travel apps, but does not want to become an expert in every Disney policy. Planning happens in short evening sessions, then intensifies around dining and Lightning Lane windows. Alex feels responsible for everyone's experience and currently copes by color-coding a spreadsheet, saving browser tabs, and sending screenshots to relatives. Alex will switch when a new tool can import that work, preserve the compact multi-day overview, and identify one real issue without demanding a full rebuild.

### Secondary Personas

**The partner or co-parent** needs a trustworthy view of the current plan and may edit meals or priorities, but does not want to learn the planner's internal model. Their main need is confidence that the version on their phone is current.

**Grandparents and subgroup travelers** overlap only part of the trip and may stay elsewhere. They need shared-day details, meetup locations, and their own lodging notes without being included in the primary room's dining or ticket totals.

**The future private-beta trip lead** resembles Alex but brings different resort, party, ticket, and accessibility constraints. This persona tests whether the product model generalizes beyond Logan's family.

### Jobs To Be Done

**Functional jobs:** consolidate every day and commitment; see what remains unbooked; validate Lightning Lane initial sets; reconcile dining credits; preserve toddler rest and travel buffers; coordinate travelers with different stays; and carry the selected day on a phone.

**Emotional jobs:** feel prepared without feeling trapped by the plan; replace low-grade uncertainty with specific next actions; and trust that a “confirmed” label means something.

**Social jobs:** be the organized trip lead without becoming the group's full-time help desk, and give relatives enough context to act independently.

### Pain Points

1. **Hidden dependencies — severe and frequent.** Spreadsheet cells list choices but cannot express that Frozen and Remy compete for the same initial group slot or that a benefit expires before check-in. Alex manually researches each dependency; mistakes can cost money or force last-minute changes.
2. **Booking uncertainty — severe near windows.** Restaurant names exist without times or confirmation status. The consequence is a missed reservation window or a false sense that a meal is secured.
3. **Fragmented source of truth — moderate to severe.** Official transactions live in My Disney Experience while context lives in Sheets, notes, email, and texts. Relatives often see stale information.
4. **Family logistics are treated as secondary — severe for this audience.** Nap timing, hotel transitions, luggage, stroller needs, and flight buffers do not fit attraction-first planners, yet these constraints determine whether the day works.
5. **Rules change — persistent.** Even a well-researched plan decays. The current workaround is repeated browsing with no record of what was checked when.
6. **Spreadsheet readability — moderate.** A columned overview is useful, but abbreviations, split cells, and row semantics are hard to decode on a phone.

### Current Alternatives & Competitive Landscape

**Google Sheets** is flexible, collaborative, and already familiar. It fails at relational validation, booking status, mobile chronology, and rule provenance. Switching requires an importer that respects the source rather than forcing re-entry.

**My Disney Experience** is authoritative for transactions and day-of availability. It is not a whole-trip reasoning workspace, does not incorporate the family-home portion of the vacation, and does not explain the family's own tradeoffs.

**Shared calendars, notes, and group texts** are easy to access but duplicate data and lose status. They remain useful delivery channels; WDW Planner should link or notify rather than pretend they disappear.

**Touring and crowd-planning products** can optimize attraction order, but generally start from park efficiency rather than a multigenerational family's complete itinerary. WDW Planner should not compete on predictive wait-time algorithms in the MVP.

**Doing nothing beyond the spreadsheet** costs no money and has no learning curve. The product must therefore demonstrate value immediately during import, not after hours of setup.

### Key Assumptions to Validate

1. We assume a CSV importer can handle enough real family spreadsheets to create value. Validate by importing five structurally different plans and measuring manual cleanup.
2. We assume rule-aware alerts are more helpful than anxiety-producing. Validate with task-based interviews: can users explain the issue and next action without external help?
3. We assume families will trust dated, linked rule snapshots. Validate whether users open sources and whether “last verified” changes their confidence.
4. We assume a horizontal day rail preserves the spreadsheet's useful mental model. Validate desktop and mobile comprehension with five trip leads.
5. We assume viewers and editors are sufficient roles for the private MVP. Validate against grandparents, partners, and subgroup travelers before adding complex permissions.
6. We assume dining-credit reconciliation is worth maintaining when Disney offerings change. Validate whether beta families use credits and whether manual overrides are acceptable.
7. We assume users will not mistake the planner for a booking or availability tool. Validate copy and onboarding; track support questions that imply otherwise.

### User Journey Map

**Awareness:** Alex hears about the private planner through a DVC or family-planning contact and is interested but skeptical of another setup task. **Consideration:** screenshots show a familiar multi-day view plus concrete conflict explanations, reducing perceived switching cost. **First use:** Alex uploads a CSV, reviews mapped days and unresolved fields, and confirms the import without losing the original file. **Magic moment:** the normalized timeline appears and immediately identifies a real, sourced issue, such as an invalid benefit date or an impossible Lightning Lane initial set. **Habit formation:** Alex returns around booking windows, marks dining and passes confirmed, and shares the selected days with family. **In-trip use:** the phone opens directly to today's chronology, survives a weak connection with last-synced data, and makes the next transition obvious. **Advocacy:** after the trip, Alex shares a template or invites another trip lead because the planner reduced coordination work rather than adding to it.

## 3. Product Strategy

### Product Principles

1. Import first; polish later. A rough but faithful imported plan is more valuable than a beautiful empty account.
2. Preserve intent and expose uncertainty. Unknown times, tentative parks, and unverified rules stay visible as such.
3. Make invalid states understandable. Every blocked selection names the violated rule and the valid paths forward.
4. Optimize for family rhythm before attraction count. Rest and travel constraints participate in validation.
5. Use official sources for rule claims, while clearly separating official facts from product inference.
6. Keep transaction boundaries honest. The planner links to Disney or Universal for booking and never implies guaranteed availability.

### Market Differentiation

The defensible product is not another Disney tips database. It is the intersection of a family's complete, editable itinerary and a dated rule model that can reason about that itinerary. Generic calendars lack domain constraints; Disney's official app lacks the pre-trip family narrative; spreadsheets lack validation. The product earns differentiation by preserving the user's source plan, connecting every warning to the affected choice, and treating toddler and multigenerational logistics as equal to rides.

### Magic Moment Design

The shortest path is: create a trip, upload the CSV, review the mapping, and open the imported overview. Within that first session the system should show the eleven days and at least one actionable, sourced alert. The September fixture proves three distinct alert classes: benefit-date ineligibility, dining-plan incompatibility, and Lightning Lane group conflict. Import should complete in under two minutes for the known fixture, and the user must be able to dismiss, override, or resolve an alert without losing the original value.

### MVP Definition

The 4–8 week private MVP includes:

- **Trip import and normalized review:** ingest the known CSV format, preserve raw source values, show mapping warnings, and seed the canonical September fixture.
- **Day rail and chronological editor:** display all trip days, support split parks, add/edit/reorder events, and model meals, naps, attractions, lodging, family, and travel.
- **Rule snapshot and conflict engine:** evaluate dated rules for the known water-park, dining-plan, Lightning Lane, and flight-buffer cases with official links and manual overrides.
- **Dining and booking status:** track credits per participant, reservation-needed/confirmed states, times, and confirmation references with private-field handling.
- **Family access:** magic-link authentication, owner/editor/viewer permissions, invitations, and an audit trail for meaningful edits.
- **Responsive execution view:** desktop overview and 390px day view based on the approved Figma screens, with last-synced data available when the network degrades.

“Done” means Logan can import `data/trip-2026.json` or the source CSV, resolve the known conflicts, invite the travel party, and rely on the app through the first booking window.

### Explicitly Out of Scope

- **Automated Disney or Universal booking:** tempting because it removes app switching, but there is no approved public booking API and automation would create trust and compliance risk. Reconsider only with an official integration.
- **Live availability and wait-time optimization:** useful in-park but not required for the import-to-insight magic moment. Revisit after the private trip.
- **Native iOS/Android apps:** a responsive installable web app is enough to validate behavior. Reconsider if offline limitations materially hurt the trip.
- **Public marketplace, templates, or paid plans:** premature before private usefulness is proven. Revisit after at least ten external families complete a planning milestone.
- **Broad destination support:** Universal events may appear in the chronology, but Disney-specific rules must never apply to them. A generic destination rules engine is post-MVP.
- **Decorative animation and custom illustration:** not connected to planning outcomes and explicitly contrary to the build constraint.

### Feature Priority (MoSCoW)

**Must Have:** known CSV/JSON import, trip/day/event model, chronological editor, day rail, dated conflict alerts, dining-credit reconciliation, booking status and times, family invitations and roles, responsive selected-day view, auditability, and source links.

**Should Have:** optimistic drag/reorder with keyboard alternative, offline last-synced view, reminder emails for booking windows, private confirmation fields, Universal event types, and grandparents' overlapping-stay notes.

**Could Have:** reusable trip templates, richer height/child-swap validation, calendar export, print view, park artwork variants, and user-authored rule notes.

**Won't Have This Time:** booking bots, live inventory, wait-time prediction, native apps, public social discovery, payments, and decorative motion.

### Core User Flows

**Import to insight:** User creates a trip → uploads CSV → reviews mapped dates, people, stays, and events → confirms import → sees the day rail and conflict summary → opens a conflict and reviews source/action. Success means the known fixture imports without data loss and produces expected conflicts.

**Plan and resolve a day:** User opens Sep 24 → reorders or edits an event → selects one EPCOT Group 1 attraction → marks the alternative as “after first redemption” → adds a dining time → sees validation and credit totals update. Success means the day becomes valid without erasing the deferred wish.

**Share and execute:** Owner invites a relative as viewer/editor → relative opens the mobile day → sees current stays, schedule, nap, and confirmed items → owner later changes an event → relative receives the current version and audit context. Success means roles prevent unauthorized edits and both users converge on one plan.

### Success Metrics

The primary metric is **validated trips that reach a shared, actionable state**: import completed, at least one alert reviewed or resolved, and at least one collaborator invited. In the first 90 days, “good” is the Logan trip completing this loop and surviving a real booking window; “great” is five external trips completing it.

Secondary metrics include import completion rate (good 80%, great 95% for supported templates), median time to first actionable alert (good under five minutes, great under two), known-fixture validation accuracy (100%), invitation acceptance (good 60%, great 80%), and weekly return around booking windows. Guardrails include zero unauthorized cross-trip reads and zero claims of confirmed availability without user-entered evidence.

### Risks

- **Rule drift:** high likelihood, high impact. Mitigate with applicability dates, official links, verification timestamps, and manual disable/override.
- **Importer brittleness:** high likelihood, high impact. Mitigate with preserved raw data, a mapping review, fixture tests, and a JSON escape hatch.
- **False confidence:** medium likelihood, high impact. Mitigate with explicit provisional states and transaction-boundary copy.
- **Scope expansion into a booking platform:** medium likelihood, high impact. Enforce the out-of-scope boundary and link out for transactions.
- **In-park connectivity failure:** medium likelihood, medium impact. Cache the selected trip/day and show last-synced state.
- **Collaboration conflicts:** medium likelihood, medium impact. Use row versions, optimistic rollback, and audit events.
- **Copyright and brand misuse:** low-to-medium likelihood, high impact for public launch. Use user-supplied/licensed artwork only and avoid implying Disney affiliation.
- **One-family overfitting:** high likelihood, medium impact. Test five diverse private trips before generalizing the schema or messaging.

## 4. Brand Strategy

### Positioning Statement

For parents and trip leads who need to coordinate a complex Walt Disney World vacation, WDW Planner is the family itinerary workspace that turns every day, booking, entitlement, and constraint into one understandable plan. Unlike spreadsheets, group texts, or transaction-focused park apps, it explains dated rule conflicts in the context of the family's actual choices.

### Brand Personality

The brand is the organized family member who carries the folder, knows which confirmation matters, and calmly says what changed. They wear practical shoes, use plain labels, and leave room in the day. They do not show off trivia, pressure the family to optimize every minute, or scold someone for changing their mind.

### Voice & Tone Guide

The voice is warm, direct, and evidence-aware. Tone becomes concise in-park, explanatory during planning, and reassuring when something fails.

| Context     | Do                                                                                           | Don't                                         |
| ----------- | -------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Onboarding  | “Import your plan. You'll review every mapped day before anything is saved.”                 | “Let our magic optimize your dream vacation!” |
| Error       | “We couldn't save that change. Your previous order is still intact; try again.”              | “Something went wrong.”                       |
| Empty state | “No reservation time yet. Add one after booking, or keep this meal marked as planned.”       | “Nothing here!”                               |
| Success     | “Dining balances: 7 quick-service and 7 table-service credits per person.”                   | “Perfect plan achieved.”                      |
| Warning     | “Frozen and Remy are both Group 1. Choose one for the initial set.”                          | “Invalid selection.”                          |
| Marketing   | “One shared plan for the days, bookings, and family logistics Disney's app doesn't connect.” | “The ultimate Disney hack.”                   |

### Messaging Framework

**Tagline:** The magic is in the plan.

**Homepage headline:** One calm plan for every park day, booking window, meal credit, nap, and family meetup.

**Value propositions:** (1) Import the plan you already made. (2) Understand conflicts before booking day. (3) Give every traveler the current version without exposing private details.

**Feature language:** “Rule-aware alerts,” “chronological family itinerary,” “dining-credit balance,” and “shared day view” are preferred. Avoid “AI optimization,” “guaranteed,” and “booking automation.”

**Objection handling:** If a user says Sheets is enough, answer that Sheets remains the source import and WDW Planner adds status, rules, and mobile execution. If they fear a rigid plan, explain that tentative choices and manual overrides remain visible. If they question rule accuracy, show the source, applicability dates, and last verification.

### Elevator Pitches

**5 seconds:** WDW Planner turns a family's Disney spreadsheet into one shared, rule-aware itinerary.

**30 seconds:** Families plan Walt Disney World across spreadsheets, calendars, My Disney Experience, and group texts. WDW Planner imports that work into a readable day-by-day timeline, tracks bookings and dining credits, and explains rule conflicts with dated official sources—without pretending to book anything.

**2 minutes:** A Disney vacation is not just a list of rides. It is flights, resort transitions, dining windows, ticket products, naps, grandparents at another hotel, and rules that can change after the spreadsheet is finished. Today the family trip lead holds that system together manually. WDW Planner starts with the plan they already made, preserves every choice, and turns it into a shared chronology. It then highlights the issues that matter: an expired benefit, a restaurant that does not accept the dining plan, an invalid initial Lightning Lane combination, or an unsafe flight-day buffer. The first release is deliberately private and transaction-neutral. The goal is to help one real family plan and execute its September 2026 trip, then learn whether the same approach creates enough value for other DVC and multigenerational families.

### Competitive Differentiation Narrative

Most Disney tools specialize in one layer: official apps transact, spreadsheets organize, blogs explain, and touring products optimize. Families still have to integrate those layers themselves. WDW Planner's advantage is contextual reasoning: it knows the family's dates, stays, party, reservations, passes, and rest constraints, then attaches each rule or warning to the exact plan it affects. That combination creates a product category closer to a family trip operating system than another checklist or tips site.

## 5. Visual Design

Visual design tokens, rationale, and component definitions live in `docs/design.md`; the human-readable mirror is `docs/design.html`. The approved editable source screens and component library are in the [WDW Figma file](https://www.figma.com/design/h95aJOtQgeY87APRdhRVlu/WDW?node-id=0-1).
