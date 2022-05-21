import React from 'react';
import './brand.css';
import Feature from '../../components/feature/Feature';
import aboutUs from '../../assets/aboutUs.png';
import ourGoals from '../../assets/ourGoals.png';
import ourValues from '../../assets/ourValues.png';
import { Link } from 'react-router-dom';



const Brand = () => {
  return (
    <div className="nutriverse__brand section__margin">
    {/* <div className="nutriverse__brand-feature">
        <Feature />
    </div> */}
    <div className="nutriverse__brand-heading">
        <h1 className='main-heading2'>WHO WE ARE</h1>
        <p>Find out more about us!</p>
    </div>
    <div className="nutriverse__brand-container">
        <div id="about-us">
          {/* <img src={recipe} alt="recipe" width="250px" /> */}
            <Link to="/about"><img src={aboutUs} alt="aboutUs" width="280px" /><Feature text="About Us"/></Link>
        </div>
        <div id="our-values">
            <Link to="/values"><img src={ourValues} alt="ourValues" width="280px" /><Feature text="Our Values"/></Link>
        </div>
        <div id="how-we-do-it">
            <Link to="/goals"><img src={ourGoals} alt="goals" width="280px" /><Feature text="Our Goals"/></Link>
        </div>
    </div>
    <div className="join-now">
      <h1 className="ready-script">Ready to revolutionise your meal plans?</h1>
      <div className="button-join">
      <Link to="/signup"><button type="button" className="nutriverse__join">Join Now</button></Link>  
      </div>
    </div>
</div>
  )
}

export default Brand