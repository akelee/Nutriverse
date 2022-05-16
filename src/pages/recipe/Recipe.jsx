import React, { useState } from 'react'
import Axios from 'axios'
import './recipe.css'
import { Feature } from '../../components'
import { Link } from 'react-router-dom';
import nutrient from '../../assets/nutrients.png'
import ingredients from '../../assets/ingredients.png'
import scale from '../../assets/scale.png'
import RecipeList from "../RecipeList"


const Recipe = () => {
  const [query, setQuery] = useState("")

  const APP_KEY = "740b00f217f748a49fc4253694287265"
  
  const url = `https://api.spoonacular.com/food/products/search?q=${query}&apiKey=740b00f217f748a49fc4253694287265`

  const handleSubmit = e => {
    e.preventDefault();
  }

  const [recipeData, setRecipeData] = useState(null)

  function getRecipeData() {
    fetch(
      `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=740b00f217f748a49fc4253694287265`
    )
    .then((response) => response.json())
    .then((data) => {
      setRecipeData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    })
  }

  return (
    <div className="nutriverse__recipe_container">
      <div className="nutriverse__recipe_info">
        <div className="searchbar">
          <form className="search-form" onSubmit={handleSubmit}>
          <input type = "text" placeholder="Search recipes" onChange={(e) => setQuery(e.target.value)}/>
          <button className="btn" onClick = {getRecipeData}>Go</button>
          {recipeData && <RecipeList recipeData ={recipeData} />}
          </form>
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
