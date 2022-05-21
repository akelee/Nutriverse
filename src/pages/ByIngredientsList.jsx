import React from 'react'
// import './byIngredientsList.css'


function byIngredientsList({ingredientsData}) {
  console.log(ingredientsData);
  return (
    <div className="Ingredients-results">{ingredientsData.map(result => 
      <p className="result">{result.title} 
      <div><img src={result.image} alt="" />
      </div>
      <div>{result.usedIngredients.id}</div>
      <div className="info">
        <a href={result.sourceUrl} target="_blank">View ingredients Here</a></div></p>)
          
        }
        
      
      </div>
  )
}

export default byIngredientsList;
