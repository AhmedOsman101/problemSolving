function diagonalDifference(arr) {
	// Write your code here
	const left = [];
	const right = [];
	let cur = 0;
	for (let i = 0; i < arr.length; i++) {
		left.push(arr[i][i]);
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		right.push(arr[cur][i]);
		cur++;
	}

	const rsum = right.reduce((partialSum, a) => partialSum + a, 0);
	const lsum = left.reduce((partialSum, a) => partialSum + a, 0);

	return Math.abs(lsum - rsum);
}
