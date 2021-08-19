// Swap Values

function swapValues() {
  let temp = arguments[0][1]
  arguments[0][1] = arguments[0][0]
  arguments[0][0] = temp
  return arguments
}
