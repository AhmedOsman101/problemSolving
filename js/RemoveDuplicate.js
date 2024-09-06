// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
function distinct(a) {
    let res = []
    a.map(item=>{
      if(!res.includes(item)) res.push(item)
    })
    
    return res
  }