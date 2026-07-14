import { describe, expect, it } from "vitest";
import { scrubEvent } from "@/lib/observability/sentry";

describe("Sentry scrubbing", () => {
  it("removes private request and payload fields", () => {
    const event = scrubEvent({
      type: undefined,
      request: { data: { email: "family@example.test" }, headers: { authorization: "secret" } },
      extra: { confirmationCode: "HHMSGP", safe: "ok" },
    });
    expect(event?.user).toBeUndefined();
    expect(event?.request?.data).toBeUndefined();
    expect(event?.extra).toEqual({ safe: "ok" });
  });
});
