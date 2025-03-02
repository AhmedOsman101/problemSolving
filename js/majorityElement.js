/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = (nums) => {
	const result = {};
	// check if number in object
	for (let i = 0; i < nums.length; i++) {
		const cur = nums[i];
		result[cur] = (result[cur] || 0) + 1;
	}
	console.log(result);
	// get the max key of object
	let maxkey = 0;
	let maxVal = Number.NEGATIVE_INFINITY;
	for (const [key, value] of Object.entries(result)) {
		if (value > maxVal) {
			maxVal = value;
			maxkey = +key;
		}
	}

	return maxkey;
};

console.log(majorityElement([3, 3, 2]));
