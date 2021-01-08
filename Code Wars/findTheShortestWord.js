let findShort = s => {(return s.split(' ').reduce((firstWord,currentWord) => firstWord.length > currentWord.length ? currentWord : firstWord).length }




// codewars accepted code
let findShort = s => { return s.split(' ').reduce((firstWord,currentWord) => firstWord.length > currentWord.length ? firstWord = currentWord : firstWord).length }
