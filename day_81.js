// Filter out the geese

const gooseFilter = birds => {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let arr = []
  birds.forEach(bird => {
    if(bird != geese[0] && bird != geese[1] && bird != geese[2] && bird != geese[3] && bird != geese[4]) arr.push(bird)})
  return arr
}
