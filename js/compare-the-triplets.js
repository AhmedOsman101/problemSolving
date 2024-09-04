function compareTriplets(a, b) {
    let res1 = 0
    let res2= 0
    for(let i=0;i<a.length;i++){
        if(a[i] !== b[i]){
        a[i] > b[i] ? res1++:res2++
        }
    }
    
    return [res1, res2]
}