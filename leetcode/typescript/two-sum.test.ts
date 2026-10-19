// Problem: Two Sum
// Link: https://leetcode.com/problems/two-sum

import { describe, expect, test } from "bun:test";

export function twoSum(nums: number[], target: number): [number, number] {
  const memo: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (memo.has(res)) return [memo.get(res) as number, i];
    memo.set(nums[i], i);
  }
  return [-1, -1];
}

describe("Two Sum", () => {
  test("example 1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("example 2", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  test("example 3", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
