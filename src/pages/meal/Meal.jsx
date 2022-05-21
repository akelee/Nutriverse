import React, { useState } from 'react'
import './meal.css'

const Meal = () => {

  const [query, setQuery] = useState("");

  const APP_KEY = "740b00f217f748a49fc4253694287265";

  const url = `https://api.spoonacular.com/mealplanner/generate?query=${query}&timeFrame=day&apiKey=740b00f217f748a49fc4253694287265`;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [mealData, setMealData] = useState(null);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&addRecipeNutrition=true&number=3&apiKey=740b00f217f748a49fc4253694287265`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  return ( 
    <div className="nutriverse__meal_container">
      <div className="nutriverse__meal_info">
        <div className="searchbar">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search meals"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn" onClick={getMealData}>
              Go
            </button>
            {mealData && <Meal mealData={mealData} />}
          </form>
        </div> 
        <div className="meal-body">
            <div id="nutrients">
              <h1>Meal planning</h1>
              <p>An essential part of staying healthy is having appropriate meals for you. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ipsam hic enim labore dignissimos est, atque saepe, fuga vitae temporibus minus magnam magni beatae provident corrupti voluptates aliquid suscipit ratione.
              </p>
              {/* <Link to="/byNutrients"><img src={nutrient} alt="nutrient" width="280px" /><Feature text ="Search meals by nutrients"/></Link>
              </div>
            <div id="ingredients">
              <Link to="/byIngredients"><img src={ingredients} alt="nutrient" width="280px" />
              <Feature text ="Search by ingredients"/></Link>
              </div>
            <div id="analysemeal">
              <Link to="/analysemeals"><img src={scale} alt="nutrient" width="280px" />
              <Feature text ="Analyse meal"/></Link> */}
            </div>
          </div>
        </div>
      </div>
  )
};


export default Meal

// POST https://api.spoonacular.com/users/connect
