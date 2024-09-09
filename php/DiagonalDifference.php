<?php

declare(strict_types=1);

/**
 * https://www.hackerrank.com/challenges/diagonal-difference/problem
 *
 * Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
 *
 * @param array $arr
 * @return int
 */
function diagonalDifference(array $arr): int {
  $s = sizeOf($arr) - 1;
  $primary = $secondary = 0;

  for ($i = 0; $i <= $s; $i++) {
    $primary += $arr[$i][$i];
    $secondary += $arr[$i][$s - $i];
  }

  return abs($primary - $secondary);
}
