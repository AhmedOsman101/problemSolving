<?php

declare(strict_types=1);

/**
 * https://leetcode.com/problems/remove-element/description/
 *
 * Given an integer array `nums` and an integer `val`, remove all occurrences of
 * `val` in `nums` in-place. The order of the elements may be changed. Then
 * return the number of elements in `nums` which are not equal to `val`.
 *
 * Consider the number of elements in `nums` which are not equal to `val` be
 * `k`, to get accepted, you need to do the following things:
 *
 * Change the array `nums` such that the first `k` elements of `nums` contain
 * the elements which are not equal to `val`. The remaining elements of `nums`
 * are not important as well as the size of `nums`.
 * Return `k`.
 *
 * @param int[] $nums
 * @param int $val
 * @return int
 */
function removeElement(&$nums, $val) {

  $nums = array_diff($nums, [$val]);

  return sizeOf($nums);
}

// $nums = [3, 2, 2, 3];
// $val = 3;

// echo removeElement($nums, $val) . "\n";
// var_export($nums);
