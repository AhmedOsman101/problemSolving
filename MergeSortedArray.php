<?php
/**
 * @param int[] $nums1
 * @param int $m
 * @param int[] $nums2
 * @param int $n
 * @return null
 */
function merge(&$nums1, $m, $nums2, $n) {
  $nums1 = array_slice($nums1, 0, length: $m);
  $nums2 = array_slice($nums2, 0, length: $n);

  $nums1 = array_merge($nums1, $nums2);
  sort($nums1);
}
