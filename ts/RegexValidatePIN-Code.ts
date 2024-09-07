/**
 * https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/typescript
 *
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
 * anything but exactly 4 digits or exactly 6 digits.

 * If the function is passed a valid PIN string, return true, else return false.
 * @param pin
 * @returns
 */
const validatePin = (pin: string): boolean => {
  return /^(\d{4}|\d{6})$/.test(pin);
};

console.info(validatePin("123456"));
