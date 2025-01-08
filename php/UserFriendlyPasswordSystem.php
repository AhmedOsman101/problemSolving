<?php

declare(strict_types=1);


/**
 * Complete the 'authEvents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY events as parameter.
 */


function myHash($password): int {
  $hash = 0;

  define("P", 131);
  define("M", pow(10, 9) + 7);

  $s = str_split($password);

  $s = array_map(fn($char) => ord($char), $s);
  $n = sizeof($s);

  for ($i = 0; $i < $n; $i++) {
    $hash += $s[$i] * pow(P, $n - ($i + 1));
  }

  return $hash % M;
}

function authEvents(array $events): array {
  $results = [];
  $password = "";

  foreach ($events as $event) {
    if ($event[0] === "setPassword") {
      $password = $event[1];
    } else if ($event[0] === "authorize") {

    }
  }

  return $results;
}

$events = [
  [
    'setPassword',
    '000A',
  ],
  [
    'authorize',
    '108738450',
  ],
  [
    'authorize',
    '108738449',
  ],
  [
    'authorize',
    '244736787',
  ],
];

// var_export(authEvents($events));

var_export(myHash("cAr1"));
