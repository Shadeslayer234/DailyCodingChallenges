//Pete, the baker
const cakes = (recipe, available) => {
  let recipeItems= [];
  for(let prop in recipe){
    if(!recipe.hasOwnProperty( prop) === available.hasOwnProperty(prop)){
      return 0
    }
    else{
      recipeItems.push(Math.floor(available[prop] / recipe[prop]))
    }
  }
  return Math.min(...recipeItems)
}
