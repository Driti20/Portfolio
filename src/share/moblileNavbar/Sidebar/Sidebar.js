import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosChatbubbles, IoMdClose } from "react-icons/io";

const Sidebar = (props) => {
  return (
    <div className="mobile-sidebar">
      <div className="logo">MM</div>
      <div className="navLinks homeLink">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeLink" : "inActiveLink"
          }
        >
          <HiHome />
          <p>Home</p>
        </NavLink>
      </div>
      <div className="navLinks aboutLink">
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? "activeLink" : "inActiveLink"
          }
        >
          <FaUser /> <p>About</p>
        </NavLink>
      </div>
      <div className="navLinks projectsLink">
        <NavLink
          to="/Portfolio"
          className={({ isActive }) =>
            isActive ? "activeLink" : "inActiveLink"
          }
        >
          <MdWork /> <p>Portfolio</p>
        </NavLink>
      </div>
      <div className="navLinks contactLink">
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "activeLink" : "inActiveLink"
          }
        >
          <IoIosChatbubbles /> <p>Contact</p>
        </NavLink>
      </div>
      <div className="mobile-sidebar-close-btn" onClick={props.click}>
        <IoMdClose/>
      </div>
    </div>
  );
};

export default Sidebar;
