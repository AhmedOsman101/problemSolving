/**
 * https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript
 *
 * In a small town the population is `p0 = 1000` at the beginning of a year. The
 * population regularly increases by `2` percent per year and moreover `50` new
 * inhabitants per year come to live in the town. How many years does the town
 * need to see its population greater than or equal to `p = 1200` inhabitants?
 *
 * Note: Don't forget to convert the percent parameter as a percentage in the
 * body of your function: if the parameter percent is `2`
 * you have to convert it to `0.02`.

 * There are no fractions of people. At the end of each year, the population is
 * an integer: `252.8` people round down to `252` persons.

 */
const nbYear = (
  initialPopulation: number,
  percentage: number,
  newInhabitants: number,
  target: number
): number => {
  let population: number = initialPopulation;
  let years = 0;

  while (population < target) {
    population += Math.floor(population * (percentage / 100) + newInhabitants); // no decimals allowed
    years++;
  }

  return years;
};

console.info(nbYear(1500000, 2.5, 10000, 2000000)); // 10
