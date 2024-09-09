/**
 * https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
 *
 * Given five positive integers, find the minimum and maximum values that can be
 * calculated by summing exactly four of the five integers. Then print the
 * respective minimum and maximum values as a single line of the result integers.
 *
 * Output: `min max` e.g: `16 24`.
 *
 */

function miniMaxSum(arr: number[]): void {
  arr.sort((a, b) => a - b);

  const min = arr.slice(0, 4).reduce((prev, curr) => prev + curr);
  const max = arr.slice(1, 5).reduce((prev, curr) => prev + curr);

  console.log(`${min} ${max}`);
}

miniMaxSum([1, 3, 5, 7, 9]);
