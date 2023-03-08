import React from "react";
import "../App.css";
import Footer from "./Footer";

const MenuContent = () => {
  return (
    <div>
      <section className="menuContent">
        <div className="company">
          <div className="headingAndIcon">
            <i className="fa-solid fa-house-signal"></i>
            <h2>Company</h2>
          </div>
          <ul>
            <li>About</li>
            <li>History</li>
            <li>Join the team</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
          <div className="social-media">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="product">
          <div className="headingAndIcon">
            <i className="fa-sharp fa-solid fa-square"></i>
            <h2>Product</h2>
          </div>
          <ul>
            <li>Developers API</li>
            <li>Unsplash Dataset</li>
            <li>Unsplash for ios</li>
            <li>Apps & Plugins</li>
          </ul>
        </div>
        <div className="community">
          <div className="headingAndIcon">
            <i className="fa-solid fa-people-group"></i>
            <h2>Community</h2>
          </div>
          <ul>
            <li>Become a Contributor</li>
            <li>Topics</li>
            <li>Collections</li>
            <li>Trends</li>
            <li>Unsplash Awards</li>
            <li>Stats</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default MenuContent;
