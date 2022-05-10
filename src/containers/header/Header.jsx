import React from 'react'
import './header.css'
import avo from '../../assets/Avo.png'

const Header = () => {
  return (
    <div className="nutriverse__header section__padding" id="home">
       <div className="nutriverse__header-content">
          <h1 className="main-text1">Meal planning
          </h1>
          <h1 className="main-text2">on the go.</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, fugit! Aspernatur veniam adipisci soluta esse possimus culpa dolor accusamus ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facilis, tempora officiis in ea quae suscipit. Tempora aliquid nihil , eos ad eligendi quod ipsam.</p>
          <button type="button" className="nutriverse__getstarted">Get Started</button>
    </div>
    <div className="nutriverse__header-image">
      <img src={avo} width="550px" alt="avo" />
    </div>
    </div>
  )
}

export default Header;