import React from "react";
import { projects } from "../data";

export default function Projects(props) {
  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-section-wrapper">
        <div className="intro-desc-wrapper">
          <p className="intro-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
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
                  src={project.image}
                />
                <div className="project-info-wrapper">
                  <div className="project-title">
                    {project.title}
                  </div>
                  <div className="project-subtitle">
                    {project.subtitle}
                  </div>
                  <div className="project-desc">{project.description}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}