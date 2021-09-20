// What is between?

const between = (a, b) => [...Array(b - a + 1).keys()].map(i=> i + a)
