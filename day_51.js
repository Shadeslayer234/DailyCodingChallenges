// Dashatize it
function dashatize(num) {
  //get 'em
  return num.toString()
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}
