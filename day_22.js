function uniteUnique(...arr) {
  let flat = [].concat(...arr)
  return [...new Set(flat)]
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
