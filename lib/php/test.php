<?php

declare(strict_types=1);

/**
 * Minimal assertion helpers for PHP solutions.
 *
 * Usage:
 *   require_once __DIR__ . '/../../lib/php/test.php';
 *   check(two_sum([2, 7, 11, 15], 9), [0, 1], 'example 1');
 */

/**
 * Compare a value against an expected value and exit non-zero on the first mismatch.
 */
function check(mixed $actual, mixed $expected, string $label = 'case'): void {
  if ($actual !== $expected) {
    fwrite(
      STDERR,
      sprintf(
        "FAIL %s\n  expected: %s\n  actual:   %s\n",
        $label,
        var_export($expected, true),
        var_export($actual, true),
      ),
    );
    exit(1);
  }

  printf("ok   %s\n", $label);
}
