import React from 'react'
import './byNutrientsList.css'


function ByNutrientsList({nutrientsData}) {
  console.log(nutrientsData.results);
  // return (
  //   <div className="nutrients-results">{nutrientsData.results.map(result => 
  //     <p className="result">{result.title} 
  //     <div><img src={result.image} alt="" />
  //     </div>
  //     <div className="info">
  //       <a href={result.sourceUrl} target="_blank">View Recipe Here</a></div></p>)
          
  //       }
        
      
  //     </div>
  // )
}

export default ByNutrientsList