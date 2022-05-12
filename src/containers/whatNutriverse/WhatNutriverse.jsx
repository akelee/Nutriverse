import React from 'react'
import { Feature } from '../../components'
// import { Link } from 'reaact-router-dom';
import './whatNutriverse.css'

const WhatNutriverse = () => {
  return (
    <div className="nutriverse__whatNutriverse section__margin" id="what-nutri">
        {/* <div className="nutriverse__whatNutriverse-feature">
            <Feature />
        </div> */}
        <div className="nutriverse__whatNutriverse-heading">
            <h1 className='main-heading'>WHAT WE DO</h1>
            <p>Our Products</p>
        </div>
        <div className="nutriverse__whatNutriverse-container">
            <div id="quality-recipes">
                <a href="#recipe"><Feature text="Quality Recipes"/></a>
            </div>
            <div id="personalised-plans">
                <a href="#plans"><Feature text="Personalised Plans"/></a>
            </div>
            <div id="meal-planning">
                <a href="#meals"><Feature text="Meal Planning"/></a>
            </div>
        </div>
    </div>
  )
}

export default WhatNutriverse