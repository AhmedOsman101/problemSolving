// Problem: {{TITLE}}
// Link: {{URL}}
/** biome-ignore-all lint/correctness/noUnresolvedImports: Bun runtime */

import { describe, expect, test } from "bun:test";

export function {{FUNC}}(input: unknown): unknown {
  throw new Error("TODO: implement {{FUNC}}()");
}

describe("{{TITLE}}", () => {
  // Replace this with real cases from the problem statement.
  test.skip("example 1", () => {
    expect({{FUNC}}(null)).toBe(null);
  });
});
