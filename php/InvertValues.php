<?php

declare(strict_types=1);

/**
 * https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/php
 *
 * Given a set of numbers, return the additive inverse of each. Each positive
 * becomes negatives, and the negatives become positives.
 *
 * @param array $a
 * @return array
 */
function invert(array $a): array {
  return array_map(fn($n) => -$n, $a);
}
