function diagonalDifference(arr) {
    // Write your code here
    let left = []
    let right = []
    let cur =0
    for(let i=0;i<arr.length;i++){
        left.push(arr[i][i])
    }
    
    for(let i = arr.length - 1;i>=0;i--){
        right.push( arr[cur][i])
        cur++
    }

    let rsum = right.reduce((partialSum, a) => partialSum + a,0)
    let lsum =left.reduce((partialSum, a) => partialSum + a, 0)

    return Math.abs(lsum-rsum)
}

