<?php

declare(strict_types=1);

/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * Given an integer array `nums` sorted in non-decreasing order, remove the
 * duplicates in-place such that each unique element appears only once. The
 * relative order of the elements should be kept the same. Then return the
 * number of unique elements in `nums`.

 * Consider the number of unique elements of `nums` to be `k`, to get accepted,
 * you need to do the following things:

 * Change the array `nums` such that the first `k` elements of `nums` contain
 * the unique elements in the order they were present in `nums` initially. The
 * remaining elements of `nums` are not important as well as the size of `nums`.
 * Return `k`.

 * @param int[] $nums
 * @return int
 */
function removeDuplicates(array &$nums): int {
  $nums = array_unique($nums);

  return sizeOf($nums);
}

/* another solution
function removeDuplicates(&$nums): int {
  $result = [];
  foreach ($nums as $num) {
    if (in_array($num, $result)) continue;
    $result[] = $num;
  }

  $nums = $result;

  return sizeOf($nums);
}
*/

// $nums = [3, 2, 2, 3,];

// echo removeDuplicates($nums);
// echo "\n";
// var_export($nums);
