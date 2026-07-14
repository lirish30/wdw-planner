# Data Guidance

This directory contains auditable source-derived data, not presentation markup.

## Canonical shape

- `trip-2026.json` is the current normalized seed.
- IDs must be stable, readable, and independent of array order.
- Dates use `YYYY-MM-DD`; instants use ISO 8601 with an offset; time zones use IANA names.
- Preserve source text in `sourceText` when normalization changes spelling or structure.
- A missing time is `null`, not midnight.
- Keep `status` and `bookingStatus` distinct. A meal can be planned while its reservation still needs booking.

## Rule snapshots

Rule-derived fields must include a `verifiedAt` date and an official source URL. Re-verify date-sensitive data before production releases and before reminder dates are generated.

Do not overwrite a user's plan because a validation rule changes. Emit a conflict record that references both the affected entity and the rule snapshot.

## Privacy

Booking references, names, emails, and share invitations are private trip data. Never commit new real credentials or access tokens. Seed data may retain user-provided itinerary details, but production storage must use authenticated access and Row Level Security.
