/**
 * https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/typescript
 *
 * Given a random non-negative number, you have to return the digits of this
 * number within an array in reverse order.
 *
 * @param n
 * @returns
 */
export const digitize = (n: number): number[] => {
  return n
    .toString()
    .split("")
    .reverse()
    .map((item) => +item);
};

console.dir(digitize(35231));
