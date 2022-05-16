import React from 'react'

function RecipeList({recipeData}) {
  console.log(recipeData.products);
  return (
    <div>{recipeData.products.map(product => 
      <p>{product.title} <img src={product.image} alt="" /></p>)}</div>
  )
}

export default RecipeList;