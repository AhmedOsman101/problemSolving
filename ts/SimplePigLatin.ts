/**
 * https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript/
 *
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word.
 * Leave punctuation marks untouched.
 */
const pigIt = (a: string): string => {
  const SpecialCharsRegex = /[^a-zA-Z0-9]/; // anything that's not a number nor a character of the alphabet.

  return a
    .split(" ")
    .map((word) => {
      const isSpecial = SpecialCharsRegex.test(word);
      if (isSpecial || word === "") return word;
      return word.slice(1).concat(word[0], "ay");
    })
    .join(" ");
};

console.info(pigIt("Pig latin is cool ! ! ! !")); // igPay atinlay siay oolcay ! ! ! !
