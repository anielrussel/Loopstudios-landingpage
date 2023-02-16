import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import close from "../../assets/images/icon-close.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [ color, setColor ] = useState(false)
  const changeColor = () => {
      if (window.scrollY >= 600) {
          setColor(true)
      } else {
          setColor(false)
      }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <nav className={color ? 'active' : ''}>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
          <ul>
            <li className="hvr-underline-from-center">About</li>
            <li className="hvr-underline-from-center">Careers</li>
            <li className="hvr-underline-from-center">Events</li>
            <li className="hvr-underline-from-center">Products</li>
            <li className="hvr-underline-from-center">Support</li>
          </ul>
        </div>
      </div>
      {/* tablet and mobile view */}
      <div className="navbar-menu">
        <div className="navbar-menu-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-menu-links">
          {toggleMenu ? (
            <img src={close} alt="close" onClick={() => setToggleMenu(false)} />
          ) : (
            <img
              src={hamburger}
              alt="menu"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu-links-container">
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
