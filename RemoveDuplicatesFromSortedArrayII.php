<?php

declare(strict_types=1);

/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
 *
 * Given an integer array `nums` sorted in non-decreasing order, remove some
 * duplicates in-place such that each unique element appears at most twice. The
 * relative order of the elements should be kept the same.

 * Since it is impossible to change the length of the array in some languages,
 * you must instead have the result be placed in the first part of the array
 * `nums`. More formally, if there are `k` elements after removing the duplicates,
 * then the first `k` elements of `nums` should hold the final result. It does not
 * matter what you leave beyond the first `k` elements.

 * Return `k` after placing the final result in the first `k` slots of `nums`.

 * Do not allocate extra space for another array. You must do this by modifying
 * the input array in-place with `O(1)` extra memory.

 * @param int[] $nums
 * @return int
 */
function removeDuplicates(array &$nums): int {
  $temp = array_count_values($nums);
  $nums = [];

  foreach ($temp as $key => $value) {
    if (1 < $value) array_push($nums, $key, $key);
    else $nums[] = $key;
  }

  return sizeOf($nums);
}

$nums = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4];

echo removeDuplicates($nums);
echo "\n";
var_export($nums);
