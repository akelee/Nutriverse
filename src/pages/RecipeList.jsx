import React from 'react'

function RecipeList({recipeData}) {
  console.log(recipeData.results);
  return (
    <div>{recipeData.results.map(result => 
      <p>{result.title} <img src={result.image} alt="" /></p>)}</div>
  )
}

export default RecipeList;
