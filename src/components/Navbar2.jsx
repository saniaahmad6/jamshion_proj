import React from "react";
import "./Navbar.scss";
import NavbarMarquee from "./NavbarMarquee";
import { StyledEngineProvider } from "@mui/material";
import SideBar from "../pages/SideBar"
import { NavLink } from "react-router-dom";
function Navbar2() {  
  return (
  
    <div className="Navbar">
      <NavbarMarquee />
      <div className="top-nav">
        <div className="container top-nav-container">
          <ul className="nav-link-group">
            <li><NavLink to="/about">About</NavLink></li>
            <li>Blog</li>
            <li>Reviews</li>
            <li>FAQs</li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
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
            
            <div className="jamshion-logo-text">
            <NavLink to="/" style={{textDecoration :"none"}}><h1 className="h1 center">JAMSHION</h1></NavLink>
              {/* <p>unlock the elegance within</p> */}
              <p className="p1 center">"Islam is beautified by two qualities: modesty and tolerance for the <br/> sake of Allah and not for anyone else" <br/><p className="small"> Source: al-Tahmid li-Ibn 'Abd al-Barr 13/218</p></p>
            </div>
          </div>

          <div className="middle-nav-right">
          <StyledEngineProvider injectFirst>
              <SideBar/>
            </StyledEngineProvider>
            <img src="./assets/cart.png" alt="cart" />
            <img src="./assets/wishlist.png" alt="wishlist" />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Navbar2;
