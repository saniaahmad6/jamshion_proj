import React from "react";
import "./Navbar.scss";
import NavbarMarquee from "./NavbarMarquee";

function Navbar() {
  return (
    <div className="Navbar">
      <NavbarMarquee />
      <div className="top-nav">
        <div className="container top-nav-container">
          <ul className="nav-link-group">
            <li>About Us</li>
            <li>Blog</li>
            <li>Reviews</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li> Jamshion Social</li>
          </ul>

          <ul className="follow">
            <li>
              <img src="./assets/instagram2.png" alt="logo" />
            </li>
            <li>
              <img src="./assets/facebook2.png" alt="logo" />
            </li>
            <li>
              {" "}
              <img src="./assets/twitter2.png" alt="logo" />
            </li>
            <li>
              <img src="./assets/linkedin2.png" alt="logo" />
            </li>
          </ul>
        </div>
      </div>

      <div className="middle-nav">
        <div className="container middle-nav-container">
          <div className="search-bar">
            <form>
              <div className="inner-search-content">
                <input
                  type="search"
                  id="search"
                  name="search"
                  placeholder="What are you loking for?"
                />
                <button type="submit" className="search-button">
                  <img src="./assets/search3.png" alt="search" />
                </button>
              </div>
            </form>
          </div>

          <div className="jamshion-logo">
            <img src="./assets/jamshion-logo.png" alt="logo" />
            <div className="jamshion-logo-text">
              <h1>JAMSHION</h1>
              <p>unlock the elegance within</p>
            </div>
          </div>

          <div className="middle-nav-right">
            <img src="./assets/before-login.png" alt="account" />
            <img src="./assets/cart.png" alt="cart" />
            <img src="./assets/wishlist.png" alt="wishlist" />
          </div>
        </div>
      </div>

      <div className="bottom-nav">
        <div className="container bottom-nav-container">
          <ul className="bottom-nav-link">
            <li>Bestsellers</li>
            <li>Modest Collection</li>
            <li>Hijabs</li>
            <li>Accessories</li>
            <li>Islamic Gifts</li>
            <li>Explore</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
