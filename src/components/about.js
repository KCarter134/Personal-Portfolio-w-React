import React, { useState } from "react";
import Personal from "../assets/images/personal.jpg"
import htmlPic from "../assets/svg/html5-1.svg"
import cssPic from "../assets/svg/css1.svg"
import JavaScriptPic from "../assets/svg/javascript1.svg"
import BootstrapPic from "../assets/svg/bootstrap1.svg"
import angularPic from "../assets/svg/angular.svg"
import mySql from "../assets/svg/mysql1.svg"
import reactPic from "../assets/svg/react1.svg"
import mongo from "../assets/svg/mongodb-logo.svg"
import JQueryPic from "../assets/svg/jquery1.svg"
import handlebars from "../assets/svg/handlebarsjs-icon.svg"
import node from "../assets/svg/nodejs.svg"
import express from "../assets/svg/expressjs-icon.svg"
import jest from "../assets/svg/jest-icon.svg"
import bootstrap from "../assets/svg/bootstrap1.svg"
import materialize from "../assets/svg/materialize.svg"
import gitHubPic from "../assets/svg/github-tile.svg"
import gitPic from "../assets/svg/git.svg"
import lighthouse from "../assets/svg/Lighthouse-01.svg"
import heroku from "../assets/svg/heroku-icon.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import LangCard from "./card"
import cardData from "./Data"





export default function About() {

  const [active, setActive] = useState("1");
  const [currentActive, isActive] = useState(false);


  return (
    <section id="about">
        <div className="main-container">
          <div className="nameplate-container-wrapper">
          <div className="green-filler"></div>
          <div className="nameplate-container">
            <div className="start-name-title"> My Name Is</div>
            <div className="my-name"><i> Kyle Carter.</i></div>

              <div className="image-container">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2"></div>
                  </div>
                </div>
              </div>

              <article className="text-container">
                <p className="dev-title">Front-End Developer / Partial Back-end</p>
                <p className="info about-desc">
                  After starting to learn the front-end, I decided to begin a
                  journey of fullstack development
                </p>
                <p className="info about-desc-extra">
                  With a passion for web development and a history in front end, <br /> I intend
                  on utilizing the skills obtained in both traditional schooling and skills
                  learned in my free time!
                </p>

                <div className="contact-flex-cont">
                  <div className="contact-icon-text">Join Me</div>
                  <div className="contact-icon-container">
                    <FontAwesomeIcon className="icon github" icon={faGithub}></FontAwesomeIcon>
                    <FontAwesomeIcon className="icon linkedin" icon={faLinkedin}></FontAwesomeIcon>
                    <FontAwesomeIcon className="icon stack" icon={faStackOverflow}></FontAwesomeIcon>
                    <FontAwesomeIcon className="icon twitter" icon={faTwitter}></FontAwesomeIcon>
                  </div>
                </div>

              </article>
            </div>
          </div>
        </div>


                                                      {/* KNOWLEDGE SECTION */}

      <section id="main-info">
        <div className="green-filler-right"></div>
        <article id="about-info">
          <div id="about-title"><i>MY KNOWLEDGE</i></div>
          {/* Beginning of Language & Technology Area */}
          <section id="about-main-wrapper">
            <div id="lang-tech-frame-master">
              <article className="skill-area-wrapper" id="skills">
                  <ul className="skills-btns">
                    <li className={isActive ? 'inactive' : 'active'} onClick={() => {
                      setActive("1");
                    }}>Languages</li>
                    <li className={isActive ? 'inactive' : 'active'} onClick={() => {
                      setActive("2");
                    }}>Frameworks</li>
                    <li className={isActive ? 'inactive' : 'active'} onClick={() => {
                      setActive("3");
                    }}>Dev-Tools</li>
                  </ul>
                  <div className="skill-card-container">
                    {active === "1" && <LangCard data={cardData} cardIndex={0} />}
                    {active === "2" && <LangCard data={cardData} cardIndex={1} />}
                    {active === "3" && <LangCard data={cardData} cardIndex={2} />}
                  </div>
              </article>
            </div>
                <div className="carousel-main-container">
                  <div className="carousel-wrapper">
                    <div className="carousel-items">
                      <img src={htmlPic} alt="" className="carousel-img"></img>
                      <img src={cssPic} alt="" className="carousel-img"></img>
                      <img src={JavaScriptPic} alt="" className="carousel-img"></img>
                      <img src={JQueryPic} alt="" className="carousel-img"></img>
                      <img src={BootstrapPic} alt="" className="carousel-img"></img>
                      <img src={reactPic} alt="" className="carousel-img"></img>
                      <img src={handlebars} alt="" className="carousel-img"></img>
                      <img src={node} alt="" className="carousel-img"></img>
                      <img src={mongo} alt="" className="carousel-img"></img>
                      <img src={mySql} alt="" className="carousel-img"></img>
                      <img src={express} alt="" className="carousel-img"></img>
                      <img src={bootstrap} alt="" className="carousel-img"></img>
                      <img src={jest} alt="" className="carousel-img"></img>
                      <img src={lighthouse} alt="" className="carousel-img"></img>
                      <img src={gitPic} alt="" className="carousel-img"></img>
                      <img src={gitHubPic} alt="" className="carousel-img"></img>
                      {/*reset*/}
                      <img src={htmlPic} alt="" className="carousel-img"></img>
                      <img src={cssPic} alt="" className="carousel-img"></img>
                      <img src={JavaScriptPic} alt="" className="carousel-img"></img>
                      <img src={JQueryPic} alt="" className="carousel-img"></img>
                      <img src={BootstrapPic} alt="" className="carousel-img"></img>
                      <img src={reactPic} alt="" className="carousel-img"></img>
                      <img src={handlebars} alt="" className="carousel-img"></img>
                      <img src={node} alt="" className="carousel-img"></img>
                      <img src={mongo} alt="" className="carousel-img"></img>
                      <img src={mySql} alt="" className="carousel-img"></img>
                      <img src={express} alt="" className="carousel-img"></img>
                      <img src={bootstrap} alt="" className="carousel-img"></img>
                      <img src={jest} alt="" className="carousel-img"></img>
                      <img src={lighthouse} alt="" className="carousel-img"></img>
                      <img src={gitPic} alt="" className="carousel-img"></img>
                      <img src={gitHubPic} alt="" className="carousel-img"></img>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </section>

      <section id="projects-info">
        <div className="title-border-feature"></div>
        <div id="feature-title" className="border-b"><i>FEATURED PROJECTS</i></div>
        <div className="project-cont-wrapper">
          <div className="project-container">
            <div id="pro-1" className="project"></div>
            <div id="pro-2" className="project"></div>
            <div id="pro-3" className="project"></div>
            <div id="pro-4" className="project"></div>
            <div id="pro-5" className="project"></div>
            <div id="pro-6" className="project"></div>
          </div>
        </div>
      </section>

    </section>
  );
}
