import React from 'react'
import './whatNutriverse.css'
import { Feature } from '../../components'
import { Link } from 'react-router-dom';
import recipe from '../../assets/recipe.png'
import plan from '../../assets/plan.png'
import meal from '../../assets/meal.png'

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
                <Link to="/recipe"><img src={recipe} alt="recipe" width="280px" /><Feature text="Quality Recipes"/></Link>
            </div>
            <div id="personalised-plans">
                <Link to="/plan"><img src={plan} alt="recipe" width="280px" /><Feature text="Personalised Plans"/></Link>
            </div>
            <div id="meal-planning">
                <Link to="/meal"><img src={meal} alt="meal" width="280px" /><Feature text="Meal Planning"/></Link>
            </div>
        </div>
    </div>
  )
}

export default WhatNutriverse