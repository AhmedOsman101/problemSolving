/**
 * https://www.codewars.com/kata/53af2b8861023f1d88000832/train/typescript
 *
 * Create a function which answers the question "Are you playing banjo?".

 * If your name starts with the letter "R" or lower case "r", you are playing
 * banjo!

 * The function takes a name as its only argument, and returns one of the
 * following strings:

 * @param name
 * @returns
 */
export function areYouPlayingBanjo(name: string): string {
  return name.toUpperCase().startsWith("R")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
