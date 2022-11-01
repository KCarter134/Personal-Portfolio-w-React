import React from "react";
import Personal from "../assets/images/personal.jpg"


export default function About() {
  return (
    <section id="about">
        <div class='light x1'></div>
        <div class='light x2'></div>
        <div class='light x3'></div>
        <div class='light x4'></div>
        <div class='light x5'></div>
        <div class='light x6'></div>
        <div class='light x7'></div>
        <div class='light x8'></div>
        <div class='light x9'></div>

      <div className="container-wrapper">
        <div className="main-container">

          <div className="name-title">
            Hi, I'm <i> Kyle Carter.</i>
          </div>

            <div className="image-container">
              <img
                className="personal-picture"
                alt="personal"
                src={Personal}
              />
            </div>

            <div className="text-container">
              <p className="about-desc">
                After starting to learn the front-end, I decided to begin a
                journey of fullstack development
              </p>
              <p className="about-desc-extra">
                With a passion for web development and a history in front end, I intend
                on utilizing the skills obtained in both traditional schooling and skills 
                learned in my free time!
              </p>
              
            </div>
            {/* languages learned* */}

        </div>
      </div>
    </section>
  );
}
