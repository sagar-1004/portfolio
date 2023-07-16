import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import ProjectCardData from "./ProjWorkCardData";

import React from 'react'


const ProjWork = () => {
  return (
      <div className="wk-container">
          <h1 className="project-heading">Projects</h1>
          <div className="project-container">
              {ProjectCardData.map((val, ind) => {
                  return (
                      <WorkCard
                          key={ind}
                          imgsrc={val.imgsrc}
                          title={val.title}
                      text={val.text}
                      tech={val.tech}
                          view={val.view}
                    />
                )
            })}  
              
          </div>
    </div>
  )
}

export default ProjWork