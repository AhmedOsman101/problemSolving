<?php

declare(strict_types=1);

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * (surrendered and saw the solution 😞😞)
 *
 * You are given an array `prices` where `prices[i]` is the price of a given stock
 * on day `i`.

 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.

 * Return the maximum profit you can achieve from this transaction. If you
 * cannot achieve any profit, return 0.
 *
 * @param int[] $prices
 * @return int
 */
function maxProfit(array $prices): int {
  $minPrice = PHP_INT_MAX;
  $maxProfit = 0;

  foreach ($prices as $price) {
    // Update the minimum price encountered so far
    if ($price < $minPrice) $minPrice = $price;

    // Calculate the current profit if sold at this price
    $profit = $price - $minPrice;

    // Update the maximum profit if this profit is greater than the previous maximum
    if ($profit > $maxProfit) $maxProfit = $profit;
  }

  return $maxProfit;
}

// $prices = [2, 1, 2, 1, 0, 1, 2]; // 2 - 0 = 2
$prices = [2, 4, 1]; // 4 - 2 = 2

var_export(maxProfit($prices));
