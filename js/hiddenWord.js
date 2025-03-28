// https://www.codewars.com/kata/5906a218dfeb0dbb52000005/train/javascript

/**
 * returns the hidden word from the given number
 *
 * @param {number} num - The magic number
 * @returns {string} The hidden word
 */
function hiddenWord(num) {
  const chars = "oblietadnm";

  return num
    .toString()
    .split("")
    .map(n => chars[n])
    .join("");
}

function hiddenWord2(num) {
  const chars = "oblietadnm";

  const nums = num.toString().split("");

  let str = "";

  for (const item of nums) {
    str += chars[item];
  }

  return str;
}
console.log(hiddenWord(113678973)); // bbiadnmdi
console.log(hiddenWord2(113678973)); // bbiadnmdi
