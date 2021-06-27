//Opposites Attract

const lovefunc = (flower1, flower2) => ((flower1 % 2 == 1) && (flower2 % 2 == 0))  ||((flower1 % 2 == 0) && (flower2 % 2 == 1)) ? true : false

// more concise
const lovefunc = (flower1,flower2) => flower1 % 2 != flower2 % 2 ? true : false
