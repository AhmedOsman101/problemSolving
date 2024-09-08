<?php

declare(strict_types=1);


/**
 * This is a staircase of size `n = 4`:
 *    #
 *   ##
 *  ###
 * ####
 * @param int $n
 * @return void
 */
function staircase(int $n): void {
  $output = "";
  for ($i = 1; $i <= $n; $i++) {
    $output .= str_pad(
      string: str_repeat("#", $i),
      length: $n,
      pad_type: STR_PAD_LEFT
    );
    if ($i !== $n) $output .= "\n";
  }
  echo $output;
}

staircase(100);
