import React from "react";
import { projects } from "../data";

export default function Projects(props) {
  return (
    <section id="projects" className="portolio-section">
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
                  <h2 className="project-subtitle">
                    {project.subtitle}
                  </h2>
                  <h1 className="project-title">
                    {project.title}
                  </h1>
                  <p className="project-desc">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}