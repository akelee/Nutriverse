import React from 'react'
import './plan.css'
import { Link } from 'react-router-dom';


const Plan = () => {
  return (
    <div>Plan
      <div>

      </div>
      <div className="button-join">
      <Link to="/userInput"><button type="button" className="nutriverse__join">Try Now</button></Link>  
      </div>
    </div>
  )
}

export default Plan