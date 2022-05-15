import React from 'react'
import './recipe.css'
import nutrient from '../../assets/nutrients.png'
import ingredients from '../../assets/ingredients.png'
import scale from '../../assets/scale.png'


const Recipe = () => {
  return (
    <div className="nutriverse__recipe_container">
      <div className="nutriverse__recipe_info">
        <div className="nutrients">
          <img src={nutrient} alt="nutrient" width="280px" /><h2>Search recipes by nutrients</h2>
        </div>
        <div className="ingredients">
        <img src={ingredients} alt="nutrient" width="280px" />
          <h2>Search by ingredients</h2>
        </div>
        <div className="analyserecipe">
        <img src={scale} alt="nutrient" width="280px" />
          <h2>Analyse recipe</h2></div>
          </div>
    </div>
  )
}

export default Recipe

// GET https://api.spoonacular.com/recipes/extract
