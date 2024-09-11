<?php

function benchmark($callback) {
  $startTime = microtime(true); // Get the current time in seconds with microseconds
  $callback(); // Execute the callback function
  $endTime = microtime(true); // Get the end time

  $executionTime = $endTime - $startTime; // Calculate the time difference
  echo "\nExecution time: " . number_format($executionTime * 1_000_000, 3) . " ms\n";
}
