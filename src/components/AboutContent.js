import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
// import { Link } from "react-router-dom";
import React from 'react';
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";

const AboutContent = () => {
  return (
      <div className="about">
        
          <div className="left">
              <h1>Who Am I ?</h1>
              <p>I am a student with expertise in C/C++, Python, HTML, CSS, and JavaScript. I specialize in frontend development with ReactJS and have experience with backend frameworks like Django, NodeJS, and Express. I am skilled in working with databases such as MySQL and MongoDB. Additionally, I am proficient in using tools like Docker, GitHub, and VSCode.</p>
              <Link to="/contact">
                  <button className="btn">Contact</button>
              </Link>
          </div> 
          <div className="right">
              <div className="img-container">
                  <div className="img-stack top"> 
                      <img src={r1} className="img" alt="true" />
                  </div>
                  <div className="img-stack bottom"> 
                      <img src={r2} className="img" alt="true" />
                  </div>
              </div>
              
          </div>

    </div>
  )
}

export default AboutContent