# Application Code Guidance

No application scaffold exists yet. Figma and product documents are complete; begin with the first unchecked task in Phase 0 of `docs/product-roadmap.md`.

## Architecture boundaries

- `app/`: routes, layouts, and server actions.
- `components/ui/`: design-system primitives that mirror approved Figma components.
- `components/trip/`: trip-specific composed UI.
- `domain/`: pure rules for schedules, dining credits, Lightning Lane validation, and booking windows.
- `lib/`: external clients and generic infrastructure.
- `schemas/`: Zod schemas shared by import, API, and forms.

Keep Disney rules in pure, versioned domain modules. UI components may display results but must not own validation logic.

## Interaction rules

- Optimistic drag/drop writes need rollback and an undo action.
- Preserve sort keys separately from wall-clock times so unscheduled items can still be reordered.
- All destructive changes require confirmation or undo.
- Collaboration updates must resolve conflicts deterministically and show the latest editor.
- Use semantic HTML before ARIA. Test mouse, keyboard, and touch behavior.

## Testing

At minimum, cover:

- CSV import normalization and malformed rows
- booking-window calculations in America/Los_Angeles and America/New_York
- dining-plan totals for party age bands and night count
- Lightning Lane initial-selection limits and park-hopper follow-up selections
- split-park days, resort naps, travel buffers, and checkout-day warnings
- share roles and Row Level Security policies
