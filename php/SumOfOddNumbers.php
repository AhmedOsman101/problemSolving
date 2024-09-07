<?php

declare(strict_types=1);

// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/php

function sumOfMultiples(int $n, int $m): int {
  return $m * (($n * ($n + 1)) / 2);
}

function rowSumOddNumbers(int $n): int {
  if ($n === 1) return 1;

  $start = sumOfMultiples($n - 1, 2) + 1;
  $end = sumOfMultiples($n, 2) - 1;
  $result = 0;

  for ($i = $start; $i <= $end; $i += 2) {
    $result += $i;
  }

  return $result;
}

echo rowSumOddNumbers(4);
// 13 + 15 + 17 + 19 = 64

/*

Given the triangle of consecutive odd numbers:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

// 1 -> 3 -> 7 -> 13 -> 21
// 1 + 2 + 4 + 6 + 8
