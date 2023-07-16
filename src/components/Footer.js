import "./FooterStyles.css";

import React from 'react';
import { FaHome, FaPhone,FaMailBulk, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
      <div className="footer">
          <div className="footer-container">
              <div className="left">
                  <div className="location">
                      <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                      <div>
                          <p>Vivekanand Colony, Gondia</p>
                          <p>Maharashtra, India</p>
                      </div>

                  </div>
                  <div className="phone">
                      
                          <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            <div>
                                <p>+91 9359765207</p>
                            </div>
                      
                      
                  </div>
                   <div className="email">
                      
                          <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            <div>
                                <p>sagarrahangdale1004@gmail.com</p>
                            </div>
                      
                      
                  </div>



              </div>
              <div className="right">
                  <h4>About Me</h4>
                  <p>I am currently a B.tech student at Walchand College of Engineering Sangli, where I am pursuing my studies in Computer
                      Science. I am deeply passionate about problem-solving, web development, and Docker containerization technology.
                      I am eagerly seeking hands-on experiences and collaborative opportunities that will allow me to further develop my skills.</p>
                  <div className="social">
                      <a href="https://www.instagram.com/sagarnrahangdale/" target="_blank" rel="noopener noreferrer"><FaInstagram  size={30} style={{ color: "white", marginRight: "2rem" }} /></a>
                      <a href="https://github.com/sagar-1004" target="_blank" rel="noopener noreferrer"><FaGithub size={30} style={{ color: "white", marginRight: "2rem" }} /></a>
                      <a href="https://twitter.com/SNRahangdale" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} style={{ color: "white", marginRight: "2rem" }} /></a>
                       <a href="https://www.linkedin.com/in/sagar-rahangdale-b8842620b/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} style={{ color: "white", marginRight: "2rem" }} /></a>
                      
                  </div>
              </div>
              
          </div>
      
      </div>
  )
}

export default Footer