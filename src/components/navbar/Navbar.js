import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <span>RyClone</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutUs">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-login">
        <a href="#login">Log In / Register</a>
        <div />
        <a href="/">Book Table</a>
      </div>
      
      <div className="navbar-mobilescreen">
        <GiHamburgerMenu fontSize={"var(--icon-font)"} fill={"var(--gold-color)"} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className="navbar-mobilescreen-overlay flex--center bounce-in-top">
            <MdOutlineRestaurantMenu fill={"var(--gold-color)"} fontSize={"var(--icon-font)"} className="spoon-icon" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-mobilescreen-links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#aboutUs" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;