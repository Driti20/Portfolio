import React from "react";
import ColorSwitch from "../../share/colorSwitch/ColorSwitch";
import ModeSwitch from "../../share/modeSwitch/ModeSwitch";
import Navbar from "../../share/Navbar/Navbar";
import "./Portfolio.css";
import { PortfolioData } from "./PortfolioData";
import { HiDesktopComputer } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <Navbar />
      <ColorSwitch />
      <ModeSwitch />
      <div className="Portfolio-data">
        <div className="Portfolio-data-title">
          <h1>Portfolio</h1>
        </div>
        <div className="Portfolio-data-text">
          <h2>My Last Projects:</h2>
        </div>
        <div className="Portfolio-data-projects">
          {PortfolioData.map((props) => {
            return (
              <div className="project" key={props.id}>
                <img src={props.img} alt={props.name} />
                <div className="project-data">
                  <h2>{props.name}</h2>
                  <div className="links">
                    <div className="source">
                      <a href={props.source}>
                        <HiDesktopComputer />
                      </a>
                    </div>
                    <div className="git">
                      <a href={props.git}>
                        <AiFillGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
