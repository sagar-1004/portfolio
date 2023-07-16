import "./HeroimgStyles.css";

import React from 'react';
import IntroImg from "../assets/intro-bg.jpg"
import { Link} from "react-router-dom";

const Heroimg = () => {
  return (
      <div className="hero">
          <div className="mask">
              <img className="intro-img" src={IntroImg} alt="IntoImg"></img>
          </div>
          <div className="content">
              <p>HI, I'M SAGAR RAHANGDALE</p>
              <h1>Coding Enthusiast</h1>

              <div>
              <Link to="/project" className="btn">Projects</Link>
              <Link to="/contact" className="btn-light">Contact</Link>
          </div>
          </div>

          

      
      
      
      </div>
  )
}

export default Heroimg