// Abbreviate a Two Word Name

const abbrevName = name => {
  let initials = []
  let arr = name.split(' ').forEach(name => initials.push(name[0]))
  return initials.join('.').toUpperCase()
}
