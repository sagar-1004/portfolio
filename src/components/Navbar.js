import { useState } from "react";
import "./NavbarStyles.css";

import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import logo from "../assets";
import sr from "../assets/sr.png";

 
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const [color, setColor] = useState(false);
    
    const changeColor = () => {
        if (window.scrollY >= 100)
        {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);



  return (
      <div className={color ? "header header-bg" : "header"}>
          <Link to="/">
                            <nav className="navbar">
                <div className="logo-container">
                    <img src={sr} alt="logo" className="logo" />
                </div>
                <h1 className="navbar-title">Sagar Rahangdale</h1>
                </nav>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"} >
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
              <li>
                  <Link to="/project">Project</Link>
              </li>
              <li>
                  <Link to="/work">Work</Link>
              </li>           
          </ul>
          <div className="hamburger" onClick={handleClick}>
              {
                  click ? (<FaTimes size={20} style={{color: "white"}}
              />) : (<FaBars size={20} style={{color: "white"}}
              />)
              }
              
              
              
          </div>
    </div>
  )
}

export default Navbar