/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let result = {};
  // check if number in object
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    result[cur] = (result[cur] || 0) + 1;
  }
  console.log(result);
  // get the max key of object
  let maxkey = 0;
  let maxVal = -Infinity;
  for (let [key, value] of Object.entries(result)) {
    if (value > maxVal) {
      maxVal = value;
      maxkey = +key;
    }
  }

  return maxkey;
};

console.log(majorityElement([3, 3, 2]));
