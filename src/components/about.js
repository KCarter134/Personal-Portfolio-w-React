import React from "react";
import Personal from "../assets/images/personal.jpg"
import htmlPic from "../assets/svg/html5-1.svg"
import cssPic from "../assets/svg/css1.svg"
import JavaScriptPic from "../assets/svg/javascript1.svg"
import JQueryPic from "../assets/svg/jquery1.svg"
import BootstrapPic from "../assets/svg/bootstrap1.svg"
import reactPic from "../assets/svg/react1.svg"


export default function About() {
  return (
    <section id="about">
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
            {/* languages learned */}
          <section id="main-info">
            <article id="about-info">
              <div id="about-title"><i>ABOUT ME</i></div>
                                 {/* Beginning of Language & Technology Area */}
              <div className="master-language-container">
                <div className="language-grid-flex">
                  <div className="language-container-flex">
                    <div className="language-icon">
                      <img src={htmlPic} alt="language"/>
                    </div>
                    <div className="language-name-container">
                      <div className="language-name">HTML5</div>
                    </div>
                  </div>
                  <div className="language-container-flex">
                    <div className="language-icon">
                      <img src={cssPic} alt="language"/>
                    </div>
                    <div className="language-name-container">
                      <div className="language-name">CSS</div>
                    </div>
                  </div>
                  <div className="language-container-flex">
                    <div className="language-icon">
                      <img src={JavaScriptPic} alt="language"/>
                    </div>
                    <div className="language-name-container">
                      <div className="language-name">JavaScript</div>
                    </div>
                  </div>
                  <div className="language-container-flex">
                    <div className="language-icon">
                      <img src={JQueryPic} alt="language"/>
                    </div>
                    <div className="language-name-container">
                      <div className="language-name">JQuery</div>
                    </div>
                  </div>
                  <div className="language-container-flex">
                    <div className="language-icon">
                      <img src={reactPic} alt="language"/>
                    </div>
                    <div className="language-name-container">
                      <div className="language-name">React.js</div>
                    </div>
                  </div>
                  <div className="language-container-flex">
                    <div className="language-icon">
                      <img src={BootstrapPic} alt="language"/>
                    </div>
                    <div className="language-name-container">
                      <div className="language-name">Bootstrap</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>

        </div>
      </div>
    </section>
  );
}
