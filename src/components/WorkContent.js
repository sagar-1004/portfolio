
import "./WorkContentStyles.css";
import { NavLink } from "react-router-dom";
import React from 'react';

import r3 from "../assets/fe_logo1.png";

const WorkContent = () => {
  return (
      <div className="work-container">
          <h1 className="work-heading">Internship</h1>
          <div className="work-container">
             <div className="work-card">
                  <img src={r3} alt="" />
                  <h2 className="work-title">Fresh Express</h2>
                  <div className="work-details">
                      <p>Designed web-based platform enabling direct communication and collaboration between companies and farmers
and serves as a platform to exchange information and enhance agricultural practices for the farmers.
</p>
                      
                      <p><b>TechStack :</b> HTML, CSS, Bootstrap, Django, SQLite</p>
                      <div className="work-btns">
                          <NavLink to="https://drive.google.com/file/d/1z08jsAWSk9pD2V97Y9OQUzfJu7lAVd87/view" target="_blank" className="btn">View</NavLink> 
                      </div>
                  </div>
              </div> 
              
          </div>
          </div>
  )
}

export default WorkContent