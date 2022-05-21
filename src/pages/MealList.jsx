import React from 'react'

function MealList({mealData}) {
    console.log(mealData.results);
    return (
      <div className="meal-results">{mealData.results.map(result => 
        <p className="result">{result.title} 
        <div><img src={result.image} alt="" />
        </div>
        <div className="info">
          <a href={result.sourceUrl} target="_blank">View meal Here</a></div></p>)
            
          }
          
        
        </div>
    )
  }
  
  export default MealList;
  