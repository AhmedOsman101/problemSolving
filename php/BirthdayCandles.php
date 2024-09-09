<?php

declare(strict_types=1);

/**
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
 *
 * You are in charge of the cake for a child's birthday.
 * You have decided the cake will have one candle for each year of their total age.
 * They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
 */
function birthdayCakeCandles(array $candles): int {
  return array_count_values($candles)[max($candles)];
}

var_export(birthdayCakeCandles([3, 2, 1, 3]));
