<?php

declare(strict_types=1);

/**
 * https://leetcode.com/problems/majority-element/
 *
 * Given an array nums of size n, return the majority element.

 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.

 * @param int[] $nums
 * @return int
 */


function majorityElement($nums): int {
  $nums = array_count_values($nums);
  return array_search(max($nums), $nums);
}


/* another solution
function majorityElement($nums): int {
  $temp = [];

  foreach ($nums as $num) {
    isset($temp[$num]) ? $temp[$num]++ : $temp[$num] = 1;
  }

  $target = max($temp);

  foreach ($temp as $key => $val) {
    if ($val === $target) return $key;
  }
}
*/

$nums = [3, 3, 4];

echo majorityElement($nums);
