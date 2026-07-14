import { describe, expect, it } from "vitest";
import { getClientEnv } from "@/lib/env";

describe("environment validation", () => {
  it("explains missing public configuration", () => {
    expect(() => getClientEnv()).toThrow("Invalid public environment");
  });
});
