import React, { useState } from 'react'
import './byNutrients.css'
import ByNutrientsList from "../byNutrientsList/ByNutrientsList"

const ByNutrients = () => {
    const [query, setQuery] = useState("")
    // const [includeNutrition, setIncludeNutrition] = useState("")
    // const [diet, setDiet] = useState("")
  
    const APP_KEY = "740b00f217f748a49fc4253694287265"
    
    const url = `https://api.spoonacular.com/recipes/findByNutrients?query=${query}&random=true&maxVitaminB12=100&number=3&apiKey=${APP_KEY}`
  
    const handleSubmit = e => {
      e.preventDefault();
    }
  
    const [nutrientsData, setNutrientsData] = useState(null)
  
    function getNutrientsData() {
      fetch(
        `https://api.spoonacular.com/recipes/findByNutrients?query=${query}&random=true&maxVitaminB12=100&number=3&apiKey=${APP_KEY}`
              )
      .then((response) => response.json())
      .then((data) => {
        setNutrientsData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      })
    }
  return (
    <div className = "nutriverse__nutrients_info">
        <div className="nutriverse__nutrients_info">
        <div className="searchbar">
          <form className="search-form" onSubmit={handleSubmit}>
          <input type = "text" placeholder="Search by nutrient" onChange={(e) => setQuery(e.target.value)}/>
          <button className="btn" onClick = {getNutrientsData}>Go</button>
          {nutrientsData && <ByNutrientsList nutrientsData ={nutrientsData} />}
          </form>
          </div>
        </div>
    </div>
  )
}

export default ByNutrients