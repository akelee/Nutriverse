import React from 'react'
import './recipeList.css'


function RecipeList({recipeData}) {
  console.log(recipeData.results);
  return (
    <div className="recipe-results">{recipeData.results.map(result => 
      <p className="result">{result.title} 
      <div><img src={result.image} alt="" />
      </div>
      <div className="info">
        <a href={result.sourceUrl} target="_blank">View Recipe Here</a></div></p>)
          
        }
        
      
      </div>
  )
}

export default RecipeList;
