// Alphabet symmetry

const solve = arr => {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let counts = []
  let count
  arr.forEach(word => {
    let sase = word.toLowerCase().split('')
    count = 0
    sase.forEach((letter,index) =>{
      if(index == alphabet.indexOf(letter) ){
        count++
      }
    })
    counts.push(count)
  })
  return counts
};
