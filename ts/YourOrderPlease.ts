/**
 * Your task is to sort a given string.
 * Each word in the string will contain a single number.
 * This number is the position the word should have in the result.

 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

 * If the input string is empty, return an empty string.
 * The words in the input String will only contain valid consecutive numbers.
 */
function order(text: string): string {
  if (text === "") return text;

  const numberRegex: RegExp = /[\d]/;
  const words: string[] = text.split(" ");
  const order: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const match = word.match(numberRegex);
    if (match) order[+match[0] - 1] = word;
  }
  return order.join(" ");
}

console.dir(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
