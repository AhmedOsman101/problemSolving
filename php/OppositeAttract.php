<?php

declare(strict_types=1);

/**
 * https://www.codewars.com/kata/555086d53eac039a2a000083/train/php
 *
 * Timmy & Sarah think they are in love, but around where they live, they will
 * only know once they pick a flower each. If one of the flowers has an even
 * number of petals and the other has an odd number of petals it means they are
 * in love.

 * Write a function that will take the number of petals of each flower and
 * return true if they are in love and false if they aren't.

 * @param int $flower1
 * @param int $flower2
 * @return bool
 */
function lovefunc(int $flower1, int $flower2): bool {
  /*
    xor => true, true   -> false
    xor => false, true  -> true
    xor => true, false  -> true
    xor => false, false -> false
   */
  return $flower1 % 2 === 0 xor $flower2 % 2 === 0;
}

var_export(lovefunc(2, 2));
