<?php

function measureRuntime($callback) {
  $startTime = microtime(true); // Get the current time in seconds with microseconds
  $callback(); // Execute the callback function
  $endTime = microtime(true); // Get the end time

  $executionTime = $endTime - $startTime; // Calculate the time difference
  echo "Execution time: " . number_format($executionTime * 1_000_000, 3) . " ms\n";
}
