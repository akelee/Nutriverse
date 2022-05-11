import React from 'react'
import './brand.css'
import { Feature } from '../../components'


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
            <a href="#about-us"><Feature text="About Us"/></a>
        </div>
        <div id="our-values">
            <a href="#our-values"><Feature text="Our Values"/></a>
        </div>
        <div id="how-we-do-it">
            <a href="#goals"><Feature text="Our Goals"/></a>
        </div>
    </div>
    <div className="join-now">
      <h1 className="ready-script">Ready to revolutionise your meal plans?</h1>
      <div className="button-join">
      <a href="#user-input"><button type="button" className="nutriverse__join">Join Now</button></a>  
      </div>
    </div>
</div>
  )
}

export default Brand