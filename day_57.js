// Prefill an Array
function prefill(n, v ) {
  let times = Number(n)
 if (!isFinite(n) || isNaN(n) || typeof n === 'boolean' || !Number.isInteger(+n) || !(+n >= 0)) {
  throw new TypeError(`${n} is invalid`)
  }
  else if(n === 0){
    return []
  }
  else{
    let arr = []
    for(let i = 0; i < times; i++){
      arr.push(v)
    }
  return arr
  }

}
