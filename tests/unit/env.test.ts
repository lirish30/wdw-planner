import { describe, expect, it } from "vitest";
import { parseClientEnv } from "@/lib/env";

describe("environment validation", () => {
  it("explains missing public configuration", () => {
    expect(() => parseClientEnv({})).toThrow("Invalid public environment");
  });
});
