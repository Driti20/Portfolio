import React from "react";
import Navbar from "../../share/Navbar/Navbar";
import "./home.css";
import Typical from "react-typical";
import ColorSwitch from "../../share/colorSwitch/ColorSwitch";
import ModeSwitch from "../../share/modeSwitch/ModeSwitch";
import { Link } from "react-router-dom";
import Me from '../../Components/Porject-images/me.jpg';

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <ModeSwitch />
      <ColorSwitch />
      <div className="home-data">
        <div className="home-data-left">
          <h1 className="home-title">
            Hello, my name is <span className="name">Mendrit Miftari</span>{" "}
          </h1>
          <h1 className="home-h1">
            <p>I'm a &nbsp;</p>
            <Typical
              className="home-typical"
              steps={["web developer", 1000, "computer science student", 1000]}
              wrapper="p"
              loop={Infinity}
            />
          </h1>
          <h4 className="home-description">
            I'm a student of computer science and engineering. I have experience
            with most popular web development technology.
          </h4>
          <div className="home-hireMe-btn">
            <Link to="/Contact">Hire Me</Link>
          </div>
        </div>
        <div className="home-data-right">
          <div className="home-image">
            <img src={Me} alt="img1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
