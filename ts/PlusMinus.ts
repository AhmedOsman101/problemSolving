// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr: number[]): void {
  let negative: number, zero: number, positive: number;

  negative = zero = positive = 0;

  arr.forEach((n) => {
    if (n < 0) negative++;
    if (n === 0) zero++;
    if (0 < n) positive++;
  });

  console.log((positive / arr.length).toPrecision(6));
  console.log((negative / arr.length).toPrecision(6));
  console.log((zero / arr.length).toPrecision(6));
}

plusMinus([1, 1, 0, -1, -1]);
