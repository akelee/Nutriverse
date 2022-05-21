import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ByNutrientsList from '../byNutrientsList/ByNutrientsList'
import './byNutrients.css'

const ByNutrients = () => {

      const [query, setQuery] = useState("")

  const APP_KEY = "740b00f217f748a49fc4253694287265"
  
  const url = `https://api.spoonacular.com/recipes/findByNutrients?query=${query}&minCarbs=10&minVitaminB12=0&apiKey=740b00f217f748a49fc4253694287265`

  const handleSubmit = e => {
    e.preventDefault();
  }

  const [nutrientsData, setNutrientsData] = useState(null)

  function getNutrientsData() {
    fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?query=${query}&minCarbs=10&minVitaminB12=0&apiKey=740b00f217f748a49fc4253694287265`
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
    <div className="nutriverse__byNutrients_container">
      <div className="nutriverse__byNutrients_info">
        <div className="searchbar">
          <form className="search-form" onSubmit={handleSubmit}>
          <input type = "text" placeholder="Search by nutrient" onChange={(e) => setQuery(e.target.value)}/>
          <button className="btn" onClick = {getNutrientsData}>Go</button>
          {nutrientsData && <ByNutrientsList nutrientsData ={nutrientsData} />}
          </form>
          </div>
          <div className="byNutrients-body">
              <h1 id="nutrients-about">
                  The importance of nutrients
              </h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi nemo eos molestiae provident pariatur nam adipisci in impedit? Nulla ea earum temporibus eligendi officia, molestias voluptas magni deleniti fuga repellendus nobis similique laboriosam, dignissimos, itaque nisi nesciunt ab provident sint quos ut id. Dolorum, voluptatem tenetur. Hic ducimus corrupti similique. Sint ad quod ut fugit magni praesentium quaerat aspernatur facere. Consectetur, dicta eligendi. Impedit assumenda maiores officia molestiae? Quas incidunt vitae, qui tenetur harum obcaecati explicabo distinctio eligendi. Id ad magni sed! Temporibus sequi et illum possimus sint omnis culpa dicta excepturi quia perferendis labore eaque, explicabo reprehenderit earum.</p>
          </div>
        </div>
      </div>  
  )
}

export default ByNutrients