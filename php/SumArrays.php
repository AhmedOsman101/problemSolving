<?php

declare(strict_types=1);

/**
 * https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/php
 *
 * Write a function that takes an array of numbers and returns the sum of the
 * numbers. The numbers can be negative or non-integer. If the array does not
 * contain any numbers then you should return 0.
 *
 * @param array $a
 * @return float
 */
function sum(array $a): float {
  if (sizeOf($a) === 0) return 0;
  if (sizeOf($a) === 1) return $a[0];

  return array_sum($a);
}
