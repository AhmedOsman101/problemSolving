/**
 * https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/typescript
 *
 * Create a function that returns the sum of the two lowest positive numbers
 * given an array of minimum 4 positive integers. No floats or non-positive
 * integers will be passed.

 * For example, when an array is passed like `[19, 5, 42, 2, 77]`, the output
 * should be `7`.

 * @param numbers The numbers array
 * @returns the lowest sum
 */

function sumTwoSmallestNumbers(numbers: Array<number>): number {
  numbers.sort((a, b) => a - b);

  return numbers[0] + numbers[1];
}

console.info(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
