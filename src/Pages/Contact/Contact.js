import React from "react";
import ColorSwitch from "../../share/colorSwitch/ColorSwitch";
import ModeSwitch from "../../share/modeSwitch/ModeSwitch";
import Navbar from "../../share/Navbar/Navbar";
import "./Contact.css";
import { ContactData } from "./ContactData";


const Contact = () => {
  return (
    <div className="Contact">
      <Navbar />
      <ModeSwitch />
      <ColorSwitch />
      <div className="Contact-data">
        <div className="Contact-data-title">
          <h1>Contact Me</h1>
        </div>
        <div className="Contact-data-text">
          <h2>
            Have You Any Question?
          </h2>
          <h4>
            I'M AT YOUR SERVICE
          </h4>
        </div>
        <div className="Contact-data-info">
          {ContactData.map((props) => {
            return(
              <div className="Contact-info" key={props.id}>
                <div className="Contact-info-icon">
                  {props.icon}
                </div>
                <h2 className="Contact-info-name">{props.name}</h2>
                <p>{props.info}</p>
              </div>
            )
          })}
        </div>
        <div className="Contact-form-title">
        <h2>
            SEND ME AN EMAIL
          </h2>
          <h4>
            I'M VERY RESPONSIVE TO MESSAGES
          </h4>
        </div>
        <div className="Contact-form">
          <div className="name-email">
            <input type="text"  className="form-name" placeholder="Name"/>
            <input type="email"  className="form-email" placeholder="Email"/>
          </div>
          <div className="subject-message">
            <input type="text"  placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"/>
          </div>
          <div className="submit-btn">Sent Message</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
