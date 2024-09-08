
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
    //insert brilliant code here
    if(walk.length != 10 ) return false
    const count = {
      e:0,
      w:0,
      n:0,
      s:0
    }
    
    walk.map(item=>{
      return count[item]++
    })
    
    return count.s === count.n && count.w === count.e
  }