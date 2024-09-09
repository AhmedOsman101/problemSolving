// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
    //Code here
    const arr = str.split(" ")
    const res = []
    for(let i = 0;i<arr.length;i++){
     if(arr[i].match(/[a-z]/i)){
        let first = arr[i][0]
      let cur = arr[i].slice(1)
    res.push( cur + first + "ay")
     }else{
       res.push(arr[i])
     }
    }
    
    return res.join(" ")
  }