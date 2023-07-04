import React from "react";
import "./Navbar.scss";
import NavbarMarquee from "./NavbarMarquee";
import { StyledEngineProvider } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import Sidebar from "../pages/SideBar";
function Navbar() {
  return (
    <div className="Navbar">
      <NavbarMarquee />
      <div className="top-nav">
        <div className="container top-nav-container">
          <ul className="nav-link-group">
            <li><NavLink to="/about" style={{textDecoration:"none", color:"black"}}>About</NavLink></li>
            <li>Blog</li>
            <li>Reviews</li>
            <li>FAQs</li>
            <li><NavLink to="/contact" style={{textDecoration:"none", color:"black"}}>Contact Us</NavLink></li>
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
            <NavLink to="/"><img src="./assets/jamshion-logo.png" alt="logo" /></NavLink>
            <div className="jamshion-logo-text">
              <h1>JAMSHION</h1>
              <p>unlock the elegance within</p>
            </div>
          </div>

          <div className="middle-nav-right">
            <StyledEngineProvider injectFirst>
              <Sidebar/>
            </StyledEngineProvider>
              
            
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
