import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/nutriverselogo.png';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
  <p><Link to="/home">Home</Link></p>
  <span>|</span>
  <p><Link to="/recipe">Recipe</Link></p>
  <span>|</span>
  <p><Link to="/popular">Popular</Link></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
  <div className="general">
    <div className="nutriverse__navbar">
      <div className="nutriverse__navbar-links">
        <div className="nutriverse__navbar-links_logo">
          <Link to="/home"><img src={logo} alt="logo"/></Link>
          </div>
          <div className="nutriverse__navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="nutriverse__navbar-sign">
          {/* <p>Sign in</p> */}
          <Link to="/signup"><button type="button">Sign up</button></Link>
        </div>
      <div className="nutriverse__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color ="#fff" size = {27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color ="#fff" size = {27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="nutriverse__navbar-menu_container scale-up-center"> 
              <div className="nutriverse__navbar-menu_container-links">
              <Menu />
              <div className="nutriverse__navbar-menu_container-links-sign">
                <button type="button">Sign up</button>
      </div>
              </div>
            </div>
        )}
    </div>  
  </div>
  </div>
  )
}

export default Navbar