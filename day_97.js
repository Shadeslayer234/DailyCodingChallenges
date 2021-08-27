// Alan Partridge I - Partridge Watch

const part = x =>{
  const terms = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
  let related = 0
  x.forEach(term => {
    terms.indexOf(term) != -1 ? related++ : related += 0
  })
  return related > 0 ? "Mine's a Pint" + "!".repeat(related) : "Lynn, I've pierced my foot on a spike!!"
  }
