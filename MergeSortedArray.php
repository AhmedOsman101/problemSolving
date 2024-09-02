<?php

declare(strict_types=1);

/**
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing
 * order, and two integers m and n, representing the number of elements in nums1
 * and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be
 * stored inside the array nums1. To accommodate this, nums1 has a length of m +
 * n, where the first m elements denote the elements that should be merged, and
 * the last n elements are set to 0 and should be ignored. nums2 has a length of
 * n.
 *
 * @param int[] $nums1
 * @param int $m
 * @param int[] $nums2
 * @param int $n
 * @return void
 */
function merge(array &$nums1, int $m, array $nums2, int $n): void {
  $nums1 = array_slice($nums1, 0, length: $m);
  $nums2 = array_slice($nums2, 0, length: $n);

  $nums1 = array_merge($nums1, $nums2);
  sort($nums1);
}
