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
              <div id="about-title"><i>MY KNOWLEDGE</i></div>
                                 {/* Beginning of Language & Technology Area */}
              <section id="about-main-wrapper">
              <div id="lang-tech-frame-master">
                <article id="languages" className="knowledge-master-container">  {/* Languages */}
                  <div className="title-container">
                    <div className="knowledge-container-title">Languages</div>
                  </div>
                  <div className="knowledge-info-conatiner">
                    <div className="inner-knowledge-info">
                      <ul>
                        <li className="knowledge-item">HTML</li>
                        <li className="knowledge-item">CSS</li>
                        <li className="knowledge-item">JavaScript</li>
                        <li className="knowledge-item">MongoDB</li>
                        <li className="knowledge-item">MySQL</li>
                      </ul>
                    </div>
                  </div>
                  {/*<div className="image-carousel-container">*/}
                  {/*  <div className=""></div>*/}
                  {/*</div>*/}
                </article>
                <article id="frameworks" className="knowledge-master-container"> {/* Frameworks */}
                  <div className="title-container">
                    <div className="knowledge-container-title">Frameworks</div>
                  </div>
                  <div className="knowledge-info-conatiner">
                    <div className="inner-knowledge-info">
                      <ul>
                        <li className="knowledge-item">React.js</li>
                        <li className="knowledge-item">Handlebars.js</li>
                        <li className="knowledge-item">Node.js</li>
                        <li className="knowledge-item">Express.js</li>
                        <li className="knowledge-item">Jest.js</li>
                        <li className="knowledge-item">Bootstrap</li>
                        <li className="knowledge-item">Materialize</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article id="technologies" className="knowledge-master-container"> {/* Technologies */}
                  <div className="title-container">
                    <div className="knowledge-container-title">Dev Tools</div>
                  </div>
                  <div className="knowledge-info-conatiner">
                    <div className="inner-knowledge-info">
                      <ul>
                        <li className="knowledge-item">CLI Tools</li>
                        <li className="knowledge-item">Webkit</li>
                        <li className="knowledge-item">Alec's Dumbass</li>
                        <li className="knowledge-item">GitHub</li>
                        <li className="knowledge-item">Lighthouse</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
              </section>
            </article>
          </section>

          {/*<div class="container-s">*/}
          {/*  <div class="wrapper-s">*/}
          {/*    <img src="https://filmswot.files.wordpress.com/2018/01/coco_dominates_chinese_box_office_.jpg" alt="asdf"></img>*/}
          {/*      <img src="https://www.foundry.com/sites/default/files/inline-images/Images_003_0.jpg" alt="lkj"></img>*/}
          {/*        <img src="https://www.foylefilmfestival.org/sites/default/files/COCO%20main%20image%203.jpg" alt="gfdsdfg"></img>*/}
          {/*          <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F11%2Fcoco_c330_56b_pub-pub16n-186_rgb-2000.jpg" alt="jklasdf"></img>*/}
          {/*  </div>*/}

          {/*</div>*/}

        </div>
      </div>
    </section>
  );
}
