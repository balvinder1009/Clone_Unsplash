import { useState } from "react";
import "../App.css";
const Header = ({ handleMenuClick }) => {
  return (
    <div className="header">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unsplash-512.png"
        alt="logog"
        width="200"
        height="200"
      />
      <div className="searchBox">
        <div>
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search High-resolution images" />
        </div>
        <i className="fa-sharp fa-solid fa-camera"></i>
      </div>

      <ul>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Advertise</a>
        </li>
        <li>
          <a href="#">Unsplash</a>+
        </li>
        <li className="verticalBar">|</li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>/</li>
        <li>
          <a href="#">Sign up</a>
        </li>
      </ul>
      <button>Submit a photo</button>
      <i className="fas fa-bars" onClick={handleMenuClick}></i>
    </div>
  );
};

export default Header;
