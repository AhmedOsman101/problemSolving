/**
 * https://www.codewars.com/kata/55f2b110f61eb01779000053/train/typescript
 *
 * Given two integers `a` and `b`, which can be positive or negative, find the sum
 * of all the integers between and including them and return it. If the two
 * numbers are equal return `a` or `b`.

 * Note: `a` and `b` are not ordered!

 * @param a
 * @param b
 * @returns
 */
export function getSum(a: number, b: number): number {
  if (a === b) return a;

  let min: number, max: number;

  if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  let sum: number = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.info(getSum(1, 0));
console.info(getSum(1, 2));
console.info(getSum(0, 1));
console.info(getSum(1, 1));
console.info(getSum(-1, 0));
console.info(getSum(-1, 2));
