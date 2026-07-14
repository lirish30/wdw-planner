import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { importCanonicalJson } from "@/lib/import/json-importer";
import { evaluateTrip } from "@/lib/rules/evaluate-trip";
import { normalizedTripSchema } from "@/lib/validation/trip";
const raw = JSON.parse(readFileSync("data/trip-2026.json", "utf8"));
describe("canonical import core", () => {
  it("accepts the 11-day source with stable counts", () => expect(importCanonicalJson(raw).counts).toEqual({ days: 11, stays: 2, flights: 2, meals: 14, lightningLaneWishes: 20 }));
  it("fails malformed dates with a field path", () => { const x = structuredClone(raw); x.days[0].date = "nope"; const result = normalizedTripSchema.safeParse(x); expect(result.success).toBe(false); if (!result.success) expect(result.error.issues[0]?.path).toEqual(["days", 0, "date"]); });
  it("returns the five sourced magic-moment conflicts", () => { expect(evaluateTrip(normalizedTripSchema.parse(raw)).map((conflict) => conflict.key)).toEqual(expect.arrayContaining(["water-park-benefit", "space-220-dining", "epcot-multipass", "hollywood-studios-multipass", "flight-buffer"])); });
});
