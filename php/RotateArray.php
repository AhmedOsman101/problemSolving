<?php

declare(strict_types=1);

/**
 * https://leetcode.com/problems/rotate-array/
 *
 * Given an integer array `nums`, rotate the array to the right by `k` steps,
 * where `k` is non-negative.
 *
 * @param int[] $nums
 * @param int $k
 * @return void
 */
function rotate(array &$nums, int $k): void {
  $k %= sizeof($nums);  // Handle the case where k is greater than the size of the array

  array_unshift($nums, ...array_splice($nums, -$k));
}

$nums = [1, 2, 3];

rotate($nums, 4);

var_export($nums);
