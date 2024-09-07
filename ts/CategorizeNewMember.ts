/**
 * https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/typescript
 *
 * To be a senior, a member must be at least 55 years old and have a handicap
 * greater than 7. In this croquet club, handicaps range from -2 to +26; the
 * better the player the lower the handicap.

 * Input will consist of a list of pairs. Each pair contains information for a
 * single potential member. Information consists of an integer for the person's
 * age and an integer for the person's handicap.

 * Output will consist of a list of string values (in Haskell and C: `Open` or `Senior`)
 * stating whether the respective member is to be placed in the senior or open category.
 */
function openOrSenior(data: number[][]): string[] {
  const result: string[] = [];

  data.forEach((member) => {
    if (55 <= member[0] && 7 < member[1]) result.push("Senior");
    else result.push("Open");
  });

  return result;
}

const input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

console.info(openOrSenior(input)); // ["Open", "Open", "Senior", "Open", "Open", "Senior"];
