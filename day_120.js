// Find Multiples of a Number

const findMultiples = (integer, limit) => Array.from({length: limit},(_, index  ) => index + 1).filter(i => i % integer === 0)
