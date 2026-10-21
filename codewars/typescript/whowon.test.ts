// Problem: Too many reversals
// Link: https://www.codewars.com/kata/687de0b45ab74765f516ce3f/train/javascript
/** biome-ignore-all lint/correctness/noUnresolvedImports: Bun runtime */

import { describe, expect, test } from "bun:test";

/*
  You are an up and coming commentator in the brutal world of pro wrestling.
  However, you suck at telling who reversed the reversal.
  You will be provided with a string in the format of : "X hit a reversal to Y hit a reversal to X...... hit a reversal to (X/Y)"
  Rules:
    - The string starts and ends with the respective names of the wrestlers (Not necessary that the starting and ending names be the same).
    - Input will always be validated.
    - X and Y will either be letters or single words.
  Determine and return the victor of the match. Be careful. Your job is on the line!
 */
function whowon(s: string): string {
  // const reversals = s.split(" hit a reversal to ");
  // return reversals.at(-2);
  return s.split(" hit a reversal to ").at(-2) as string;
}

describe("Tests", () => {
  test("Basic cases", () => {
    expect(whowon("Devant hit a reversal to Kripa")).toBe("Devant");
    expect(
      whowon("Alpha hit a reversal to Bravo hit a reversal to Alpha")
    ).toBe("Bravo");
    expect(
      whowon(
        "Alpha hit a reversal to Bravo hit a reversal to Alpha hit a reversal to Bravo"
      )
    ).toBe("Alpha");
    expect(
      whowon(
        "Xenon hit a reversal to Yara hit a reversal to Xenon hit a reversal to Yara hit a reversal to Xenon"
      )
    ).toBe("Yara");
  });
});
