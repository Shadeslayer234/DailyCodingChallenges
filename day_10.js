var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return `${firstAndLast}`;
  };
  this.getFirstName = function() {
    return `${firstAndLast.split(' ')[0]}`;
  };
  this.getLastName = function() {
    return `${firstAndLast.split(' ')[1]}`;
  };
  this.setFirstName = function(name){
    let newFirstName = name
    let lastname = firstAndLast.split(' ')[1]
    return `${firstAndLast = `${newFirstName} ${lastname}`}`
  }
  this.setLastName = function(name){
    let lastName = name
    let firstName = firstAndLast.split(' ')[0]
    return `${firstAndLast = `${firstName} ${lastName}`}`
  }
  this.setFullName = function(name){
    console.log(`set full name to${firstAndLast = name}`)
    return `${firstAndLast = name}`
  }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
