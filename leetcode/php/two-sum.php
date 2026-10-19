<?php

// Problem: Two Sum
// Link: https://leetcode.com/problems/two-sum

declare(strict_types=1);

require_once __DIR__ . '/../../lib/php/test.php';

/**
 * Two Sum
 *
 * You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param int[] $nums
 * @param int $target
 * @return int[]
 */
function two_sum(array $nums, int $target): array {
  $memo = [];
  for ($i = 0; $i < count($nums); $i++) {
    $res = $target - $nums[$i];
    if (isset($memo[$res])) return [$memo[$res], $i];
    $memo[$nums[$i]] = $i;
  }
  return [-1, -1];
}

check(two_sum([2, 7, 11, 15], 9), [0, 1], 'example 1');
check(two_sum([3, 2, 4], 6), [1, 2], 'example 2');
check(two_sum([3, 3], 6), [0, 1], 'example 3');
