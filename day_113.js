// Count by X

function countBy(x, n) {
  var z = [];
  let num = 0
  for(let i = 1; i <= n; i++) {
    num += x
    if(num % x === 0) z.push(num)
  }
  return z
}
