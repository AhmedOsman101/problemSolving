// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
function doubleChar(str) {
    // Your code here
    let uni = []
    str.split("").map(item=>{
       uni.push(item)
       uni.push(item)
    })
    
    return uni.join("")
  }
  