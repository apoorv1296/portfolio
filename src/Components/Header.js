import React from "react";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMinNav, setShowMinNav] = useState(false);

  console.log(showMinNav);
  return (
    <>
      <div className="Main_Header">
        <div className="left_portion">
          <div className="left_circle"></div>
          <span className="left_name"> Apoorv Patel </span>
          <span className="left_discrip">/ Web Developer</span>
        </div>

        <div className="right_portion">
          <span>
            <Link className="nav_option" to="/">
              Home
            </Link>
          </span>

          <span className="nav_seperator">|</span>

          <span>
            <Link className="nav_option" to="/resume">
              Resume
            </Link>
          </span>

          <span className="nav_seperator">|</span>
          <span>
            <Link className="nav_option" to="/project">
              Projects
            </Link>
          </span>
          <span className="nav_seperator">|</span>
          <span>
            <Link className="nav_option nav_last_option" to="/contact">
              Contact
            </Link>
          </span>
        </div>
        <div className="nav-hamberger-icon">
          <button
            id="nav-hamberger-btn"
            onClick={() => setShowMinNav(!showMinNav)}
          >
            Nav
          </button>
        </div>

        {showMinNav == true && <Min_Nav_options />}
      </div>
    </>
  );
};

const Min_Nav_options = () => {
  return (
    <>
      <div className="Hambergerp-nav">
        <span>
          <Link className="min-nav_option" to="/">
            Home
          </Link>
        </span>
        <span>
          <Link className="min-nav_option" to="/resume">
            Resume
          </Link>
        </span>

        <span>
          <Link className="min-nav_option" to="/project">
            Projects
          </Link>
        </span>
        <span>
          <Link className="min-nav_option" to="/contact">
            Contact
          </Link>
        </span>
      </div>
    </>
  );
};

// export default Header;
export { Header, Min_Nav_options };
