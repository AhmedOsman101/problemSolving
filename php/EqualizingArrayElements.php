<?php

declare(strict_types=1);

/**
 * Complete the 'minOperations' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER threshold
 *  3. INTEGER d
 */

function minOperations($arr, $threshold, $d) {
  $ops = 0;
  $i = 0;


  do {
    if (sizeof($arr) - 1 === $i) $i = 0;
    $counts = array_count_values($arr);
    $el = &$arr[$i];
    if ($d < $el) {
      var_export($el);
      echo "\n";

      $el = intval($el / 2);

      var_export($counts);
      echo "\n";
      $ops++;
    }
    $i++;
  } while (array_search($threshold, $counts) === false);

  return $ops;

}
echo "\n";
var_dump(minOperations([64, 30, 25, 33], 2, 2));
echo "\n";
