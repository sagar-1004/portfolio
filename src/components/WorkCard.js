import "./WorkCardStyles.css";

import React from 'react'

import {NavLink} from "react-router-dom"

const WorkCard = (props) => {
  return (
      <div className="project-card">
                  <img src={props.imgsrc} alt="" />
                  <h2 className="project-title">{props.title}</h2>
                  <div className="pro-details">
              <p>{props.text}</p>
              <p><b>TechStack : </b>{props.tech }</p>
                      <div className="pro-btns">
                          <NavLink to={props.view} target="_blank"  className="btn">View</NavLink>
                          
                      </div>
                  </div>
              </div>
  )
}

export default WorkCard