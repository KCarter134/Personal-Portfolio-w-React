import React, {useState} from "react";
import { projects } from "../data";

export default function Projects() {
  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
  }
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-section-wrapper">
        <div className="intro-desc-wrapper">
          <p className="intro-port"><i>MY PORTFOLIO</i></p>
          <p className="intro-desc"><i>
            Many of my projects have been created using JavaScript, Markup Languages, 
            database technologies, as well as Node.js and its frameworks.</i>
          </p>
        </div>
        <div className="project-section-wrapper">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="project-links">


              <div className="images-desc">
                <img
                  alt="gallery"
                  className="image-gallery"
                  src={require(`../assets${project.image}`)} />
                <div className="WORK" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              </div>
              </div>
            
          <div className="project-info-wrapper">
            <div className="project-title">{project.title}</div>
            <div className="project-subtitle">{project.subtitle}</div>
            <div className="project-desc">{project.description}</div>
          </div>
        </a> ))}
        </div>  
      </div>
    </section>
  );
}