# Figma Phase 0 — Discovery and Scope Lock

**Run ID:** `wdw-planner-2026-07-13`
**Figma file:** [WDW](https://www.figma.com/design/h95aJOtQgeY87APRdhRVlu/WDW?node-id=0-1)
**Status:** Approved and completed on 2026-07-13

## P0.a — Source analysis

- Repository: empty at discovery time.
- Source itinerary: 11 calendar days, September 16–26, 2026.
- Travel shape: PDX → MCO, three nights with family, one Epic Universe day, seven-night Disney Resort stay, six Disney park days, MCO → PDX.
- Party: two adults and one child in the dining-plan age band shown by the CSV; grandparents overlap for four days and stay at Riviera then Beach Club.
- Primary constraints: resort naps, split park days, dining credits, dining reservations, Lightning Lane categories, hotel transitions, and flight-day timing.
- Artwork: a starry Walt Disney World skyline hero and a four-park banner sheet. Use as image assets; do not redraw as SVG animation.

## P0.b — Existing Figma inspection

- One page: `Page 1` (`0:1`).
- No frames, components, variables, text styles, or effect styles.
- Available suitable type families include Nunito, Poppins, Quicksand, Lato, Merriweather, and Inter.
- Recommended product font for v1: Nunito Sans for friendly readability, with a restrained display use of Quicksand only if screenshot validation remains legible.

## P0.c — Library search

- Material 3 Design Kit is linked.
- Searches for navigation, cards, buttons, background variables, spacing variables, heading styles, and shadow styles returned no directly reusable assets in the target context.
- Decision: create a small local foundation and only the repeated components required by the two approved screens. Do not attempt a broad standalone design-system project.

## P0.d — Proposed v1 design scope

### Foundations

- One light application theme with a dark starfield shell.
- Semantic colors for shell, surface, text, muted text, border, success, warning, danger, and each park.
- Spacing and radius primitives sufficient for the two screens.
- Text styles for display, page title, section title, body, label, and caption.
- One soft elevation style for floating itinerary surfaces.

### Repeated components

1. Day tab: date, location/park, status dot, selected state.
2. Timeline event: time window, type, title, booking state, drag handle, optional party scope.
3. Planning alert: severity, reason, affected plan, recommended action.
4. Credit meter: planned, available, and remaining meal credits.
5. Lightning Lane selection row: pass type, group, attraction, priority, and validity.

### Screen 1 — Desktop trip overview

- 1440px responsive desktop frame.
- Starfield hero using the supplied Walt Disney World artwork.
- Trip identity, dates, party, resort, share controls, and booking countdowns.
- Horizontal 11-day rail that preserves the spreadsheet's columned mental model.
- Selected-day chronological timeline with AM/PM park context, meals, nap, and transit.
- Right-side planning rail for urgent alerts, dining balance, and Lightning Lane readiness.
- Seed selection: Sunday, September 20 (Magic Kingdom AM / Hollywood Studios PM) so the mockup demonstrates split parks, nap, meals, dining package, and two pass types.

### Screen 2 — Mobile day plan

- 390px phone frame.
- Compact park artwork header.
- Sticky date switcher, readable vertical timeline, drag/reorder affordance, offline-last-synced state, and family share status.
- Seed selection: Thursday, September 24 (EPCOT) so the mockup demonstrates the Guardians Single Pass, Frozen-versus-Remy group decision, Space 220 dining-plan warning, and resort nap.

### Explicitly outside this Figma pass

- Full component-library documentation pages.
- Dark mode, tablet-specific frames, onboarding, account settings, or marketing pages.
- Production prototype logic, microanimations, custom illustration, or SVG animation.
- Disney booking or checkout screens.

## P0.e — Product-to-Figma map and conflicts

| Requirement           | Figma representation                                      | Resolution                                                                               |
| --------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Columned days         | Horizontal day rail + selected-day canvas                 | Preserves overview without reproducing a spreadsheet table.                              |
| Editable itinerary    | Timeline event components with visible handles and status | Drag is shown as an affordance; implementation must include keyboard/touch alternatives. |
| Family sharing        | Share button, member avatars, viewer/editor status        | Private confirmation data stays out of decorative previews.                              |
| Changing Disney rules | Dated alert components with source/action                 | Alerts explain; they do not overwrite the plan.                                          |
| Supplied hero art     | Image fill with dark overlay and text-safe crop           | No redraw or animation.                                                                  |
| Park-specific art     | Crop the supplied four-park sheet into contextual banners | Each park also gets a text label and semantic color for accessibility.                   |
| Empty Figma file      | Create a focused local foundation                         | No existing design conflict.                                                             |

## P0.f — Gap analysis

### Exists in the trip source but not Figma

- All 11 days, event types, dining choices, Lightning Lane wishes, flights, tickets, party and hotel information.
- Booking status, confirmation times, share permissions, change history, travel buffers, and official-rule provenance.
- Conflict states for invalid or incomplete plans.

### Exists in Figma but not the product source

- Nothing beyond the blank page and linked Material 3 library.

### Conflicts and decisions

1. The CSV schedules the free check-in-day water park benefit for September 19, but Disney's published 2026 benefit applies only to check-ins May 26–September 8. The design will show a blocking eligibility warning while preserving the planned water-park activity.
2. Space 220 is listed among dining-plan choices, but Disney currently marks it as not accepting dining-plan meals. The design will mark the lunch as out-of-pocket rather than consume credits.
3. EPCOT includes Frozen and Remy's as desired advance choices, but both are in the one-per-group set for initial Multi Pass selection. The design will require a choice and suggest booking the other after the first redemption if available.
4. Hollywood Studios includes four desired Multi Pass attractions. The design will distinguish the valid initial set from later rolling selections rather than imply all four can be preselected.
5. “Polynesian Towers” is normalized to Island Tower at Disney's Polynesian Villas & Bungalows; the source wording remains available in import metadata.

## Approval record

The founder approved this scope on 2026-07-13. Foundations, file structure, the five component families, the desktop split-park overview, the mobile EPCOT day, utilities documentation, supplied image assets, and visual/structural QA are complete. Stable IDs and final counts are recorded in `docs/figma-build-summary.md`.
