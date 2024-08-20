import React from "react";
import ColorSwitch from "../../share/colorSwitch/ColorSwitch";
import ModeSwitch from "../../share/modeSwitch/ModeSwitch";
import Navbar from "../../share/Navbar/Navbar";
import "./About.css";
import { AboutData, Skills } from "./AboutData";
import * as moment from "moment";
import { Link } from "react-router-dom";
import cv from '../../Components/CV/MyCV.pdf'

const About = () => {
  return (
    <div className="About">
      <Navbar />
      <ColorSwitch />
      <ModeSwitch />
      <div className="About-data">
        <div className="About-data-title">
          <h1>About Me</h1>
        </div>
        <div className="About-data-text">
          <h1>
            I'm Mendrit Miftari and <span>Web Developer</span>
          </h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos
            porro consequuntur iure quia deserunt, sequi repudiandae sunt, non,
            aspernatur tempore cumque libero facere eaque? Officia vero saepe
            aliquam facere.
          </h4>
        </div>
        {AboutData.map((props) => {
          return (
            <div className="About-Data-info" key={props.id}>
              <div className="About-Data-info-left">
                <div>
                  <h4>
                    Birthday: <span>{props.Birthday}</span>
                  </h4>
                </div>
                <div>
                  <h4>
                    Website: <span>{props.WebSite}</span>
                  </h4>
                </div>
                <div>
                  <h4>
                    Degree: <span>{props.Degree}</span>
                  </h4>
                </div>
                <div>
                  <h4>
                    City: <span>{props.City}</span>
                  </h4>
                </div>
              </div>
              <div className="About-Data-info-right">
                <div>
                  <h4>
                    Age: <span>{moment().diff(props.Birthday, "years")}</span>
                  </h4>
                </div>
                <div>
                  <h4>
                    E-mail: <span>{props.email}</span>
                  </h4>
                </div>
                <div>
                  <h4>
                    Phone: <span>{props.phone}</span>
                  </h4>
                </div>
                <div>
                  <h4>
                    Work: <span>{props.Work}</span>
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
        <div className="about-data-btn">
          <div className="about-data-cv">
            <a href={cv} download>Download CV</a>
          </div>
          <div className="about-data-hire">
            <Link to="/Contact">Hire Me</Link>
          </div>
        </div>
        <div className="about-data-Skills">
          <h1>Skills</h1>
          <div className="about-data-skills-container">
            {Skills.map((props) => {
              return (
                <div className="about-data-skill" key={props.id}>
                  <div className="skill-icon">{props.icon}</div>
                  <div className="skill-info">
                    <h2 className="skill-name">{props.name}</h2>
                    <h4 className="skill-description">{props.description}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
