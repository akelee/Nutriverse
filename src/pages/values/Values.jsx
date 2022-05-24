import React from 'react'
import './values.css'
import values_video from '../../assets/values_video.mp4'
import { Route, Link } from 'react-router-dom';

const Values = () => {
  return (
    <div className="nutriverse__values-container">
        <div className="nutriverse__values-body">
        
          <div className="video">
            <h1 className="values-header">Our values
            </h1>
            <iframe src={values_video} autoPlay loop="true" frameborder="0" scrolling="" width="800px" height="423px">
            </iframe>
            <p>Here at nutriverse, we hold ourselves to the highest standards. We value the health and well-being of every single person. We believe that healthy living stems from eating well and staying active. We aim to provide you with the very best platform to cater to all your meal planning needs whatever they may be.
          </p>   
           
          </div>
             
        </div>
    </div>
  )
}

export default Values