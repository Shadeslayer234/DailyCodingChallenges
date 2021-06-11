function whatIsInAName(collection, source) {
  let arr = [];
  let secondArr = []
  let sum
  const key = Object.keys(source)
  collection.forEach(obj => {
    sum = 0
    key.forEach(key => {
      if(obj.hasOwnProperty(key) && obj[key] === source[key]){
        sum++
      }
    })
    if(key.length == sum) arr.push(obj)
  })

  console.log(arr)
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
