/**
 * https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/typescript
 *
 * Your classmates asked you to copy some paperwork for them. You know that
 * there are `n` classmates and the paperwork has `m` pages.

 * Your task is to calculate how many blank pages do you need. If `n < 0` or `m < 0` return `0`.
 */
function paperwork(n: number, m: number): number {
  if (n < 0 || m < 0) return 0;
  return n * m;
}

console.info(paperwork(5, 5)); // 5 * 5 = 25
console.info(paperwork(5, -5)); // m < 0 -> 0
