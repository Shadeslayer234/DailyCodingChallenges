// Get the mean of an array

const getAverage = marks =>Math.floor(marks.reduce((sum,current)=> sum += current,0)/marks.length)
