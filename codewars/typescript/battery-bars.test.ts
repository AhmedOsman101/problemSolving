// Problem: Battery Bars
// Link: https://www.codewars.com/kata/6ad649de715eb5f5359a7e62/train/typescript
/** biome-ignore-all lint/correctness/noUnresolvedImports: Bun runtime */

import { describe, expect, test } from "bun:test";

/**
Your phone shows its battery as a row of 5 bars.
Each full bar represents 20% of charge.
A bar only lights up when its whole 20% is reached.

Write a function `battery_bars(percent)` that returns the battery as a string:
  - `#` for a lit bar
  - `.` for an empty one
All wrapped in square brackets.

Note: percent is an integer from 0 to 100

Examples:
```js
batteryBars(100)  // => "[#####]"
batteryBars(70)   // => "[###..]"
batteryBars(20)   // => "[#....]"
batteryBars(19)   // => "[.....]"
batteryBars(0)    // => "[.....]"
```
*/
export function batteryBars(percent: number): string {
  return `[${"#".repeat(Math.trunc(percent / 20)).padEnd(5, ".")}]`;
}

describe("Battery Bars", () => {
  function doTest(percent: number, expected: string) {
    test(`percent = ${percent}`, () => {
      const result = batteryBars(percent);
      console.log(
        `Expect batteryBars(${percent}) => ${result} to be ${expected}`
      );
      expect(result).toBe(expected);
    });
  }

  describe("Examples from description", () => {
    doTest(100, "[#####]");
    doTest(70, "[###..]");
    doTest(20, "[#....]");
    doTest(19, "[.....]");
    doTest(0, "[.....]");
  });
});
