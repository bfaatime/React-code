import React from "react";
import { FaCamera, FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>Fatimə Bəxşəliyeva</h1>
        <p>Front-End Developer | Marketing</p>
        <i>
          <FaCamera />
        </i>
        <div className="header-buttons">
          <Link to="about-me" smooth={true} duration={500}>
            <button>Aboutme</button>
          </Link>
          <Link to="contact-me" smooth={true} duration={500}>
            <button>Contact</button>
          </Link>
        </div>
      </div>
      <Link to="about-me" smooth={true} duration={500}>
        <FaArrowDown size={30} />
      </Link>
    </header>
  );
}

export default Header;
