import React from 'react'
import './popular.css'
import { Link } from 'react-router-dom'
import italian from '../../assets/italian.png'
import sushi from '../../assets/sushi.png'
import indian from '../../assets/indian.png'
import Feature from '../../components/feature/Feature';

const Popular = () => {
  return (
    <div className="nutriverse__whatNutriverse section__margin " id="what-nutri">
        <div className="nutriverse__whatNutriverse-heading">
            <p>Popular cuisines</p>
        </div>
        <div className="nutriverse__whatNutriverse-container background">
            <div id="italian">
                {/* <Link to="/"> */}
                  <img src={italian} alt="recipe" width="280px" />
                  {/* <Feature text="Italian"/></Link> */}
            </div>
            <div id="indian">
                {/* <Link to="/"> */}
                  <img src={indian} alt="recipe" width="280px" />
                  {/* <Feature text="Indian"/></Link> */}
            </div>
            <div id="japanese">
                {/* <Link to="/"> */}
                  <img src={sushi} alt="Japanese" width="280px" />
                  {/* <Feature text="Japanese"/></Link> */}
            </div>
        </div>
    </div>
  )
}

export default Popular