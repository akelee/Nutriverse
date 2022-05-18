import React from 'react'
import './header.css'
import avo from '../../assets/Avo.png'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="nutriverse__header section__padding" id="home">
       <div className="nutriverse__header-content">
          <h1 className="main-text1">Meal planning
          </h1>
          <h1 className="main-text2">on the go.</h1>
          <p>Taking the first step is never easy - we get it! Planning a full day of nutritional meals may seem impossible, and that's where we come in. Here at nutriverse, we prioritise your health and well-being. We offer highly customised meal planning and nutrient recommendations based on your needs. Say hello to a life-changing platform that lets you plan your meals on the go.
          </p>
          <p>Still unsure? Try it for yourself!</p>
          <Link to="/userInput">
          <button type="button" className="nutriverse__getstarted">Get Started</button>
          </Link>
    </div>
    <div className="nutriverse__header-image">
      <img src={avo} alt="avo" />
    </div>
    </div>
  )
}

export default Header;