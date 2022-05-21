import { Link } from 'react-router-dom';
import ByIngredientsList from '../ByIngredientsList'
import React,{ useState } from 'react'
import './byIngredients.css'

const ByIngredients = () => {

  const [query, setQuery] = useState("")

  const APP_KEY = "740b00f217f748a49fc4253694287265"
  
  const url = `https://api.spoonacular.com/recipes/findByIngredients?query=${query}&ingredients=${query}&number=3&apiKey=740b00f217f748a49fc4253694287265`

  const handleSubmit = e => {
    e.preventDefault();
  }

  const [ingredientsData, setIngredientsData] = useState(null)

  function getIngredientsData() {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?query=${query}&ingredients=${query}&number=3&apiKey=740b00f217f748a49fc4253694287265`
    )
    .then((response) => response.json())
    .then((data) => {
      setIngredientsData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    })
  }
  return (
    <div className="nutriverse__byIngredients_container">
      <div className="nutriverse__byIngredients_info">
        <div className="searchbar">
          <form className="search-form" onSubmit={handleSubmit}>
          <input type = "text" placeholder="Search by Ingredient" onChange={(e) => setQuery(e.target.value)}/>
          <button className="btn" onClick = {getIngredientsData}>Go</button>
          {ingredientsData && <ByIngredientsList ingredientsData ={ingredientsData} />}
          </form>
          </div>
          <div className="byIngredients-body">
              <h1 id="byIngredients-about">
                  What ingredients will you choose?
              </h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi nemo eos molestiae provident pariatur nam adipisci in impedit? Nulla ea earum temporibus eligendi officia, molestias voluptas magni deleniti fuga repellendus nobis similique laboriosam, dignissimos, itaque nisi nesciunt ab provident sint quos ut id. Dolorum, voluptatem tenetur. Hic ducimus corrupti similique. Sint ad quod ut fugit magni praesentium quaerat aspernatur facere. Consectetur, dicta eligendi. Impedit assumenda maiores officia molestiae? Quas incidunt vitae, qui tenetur harum.</p>
          </div>
        </div>
      </div>  
  )
}

export default ByIngredients