import React from 'react'
import './recipe.css'
import { Feature } from '../../components'
import { Link } from 'react-router-dom';
import nutrient from '../../assets/nutrients.png'
import ingredients from '../../assets/ingredients.png'
import scale from '../../assets/scale.png'


const Recipe = () => {
  return (
    <div className="nutriverse__recipe_container">
      <div className="nutriverse__recipe_info">
        <div className="searchbar">
          <input placeholder="Search recipes"/>
          <div><button className="btn">Go</button>
          </div>
          </div>
          <div className="recipe-body">
            <div id="nutrients">
              <Link to="/"><img src={nutrient} alt="nutrient" width="280px" /><Feature text ="Search recipes by nutrients"/></Link>
              </div>
            <div id="ingredients">
              <Link to="/"><img src={ingredients} alt="nutrient" width="280px" />
              <Feature text ="Search by ingredients"/></Link>
              </div>
            <div id="analyserecipe">
              <Link to="/"><img src={scale} alt="nutrient" width="280px" />
              <Feature text ="Analyse recipe"/></Link>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Recipe

// GET https://api.spoonacular.com/recipes/extract
