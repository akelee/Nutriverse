import React from 'react'
import './byIngredients.css'

const ByIngredients = () => {
  return (
    <div className="nutriverse__byIngredients_container">
      <div className="nutriverse__byIngredients_info">
        <div className="searchbar">
          {/* <form className="search-form" onSubmit={handleSubmit}>
          <input type = "text" placeholder="Search recipes" onChange={(e) => setQuery(e.target.value)}/>
          <button className="btn" onClick = {getRecipeData}>Go</button>
          {recipeData && <RecipeList recipeData ={recipeData} />}
          </form> */}
          </div>
        </div>
      </div>  
  )
}

export default ByIngredients