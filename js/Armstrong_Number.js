// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
    let str = `${value}`
    let res = 0
    str.split("").map(number=>{
      res += Math.pow(+number,str.length)
    })
    
    return res == value ? true:false
  }