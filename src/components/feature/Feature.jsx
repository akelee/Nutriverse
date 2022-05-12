import React from 'react'
import './feature.css'

const Feature = ({text}) => {
  return (
    <div className="nutriverse__features-container__feature">
      <div className="nutriverse__features-container__feature-title">
      <div>
        {/* <h1>{title}</h1> */}
      </div>
      </div>
      <div className="nutriverse__features-container__feature-text">
      <h3>{text}</h3>
      </div>
    </div>
  )
}



export default Feature