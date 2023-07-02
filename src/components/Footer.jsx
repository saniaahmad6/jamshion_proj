import React from "react";
// import {
//   AiOutlineInstagram,
//   AiOutlineFacebook,
//   AiOutlineTwitter,
//   AiOutlineMail,
// } from "react-icons/ai";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="Footer">
      <div className="stripline">
        <div className="container stripline-container">

          <div className="stripline-left">
            <img src="./assets/jamshion-white-logo.png" alt="logo" />
          </div>

          <div className="stripline-right">
            <div className="stripline-right-content">
              <img src="./assets/truck.png" alt="truck" />
              <p>FREE and FAST shipping PAN India on orders above 299.</p>
              
            </div>

            <div className="stripline-right-content">
              <img src="./assets/headphone.png" alt="headphone" />
              <p>We are available 24/7 to help you unlock elegance.</p>
            </div>

            <div className="stripline-right-content">
              <img src="./assets/suport.png" alt="support" />
              <p>
                Rest Assured. We handle all your transactions with utmost care.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-subcontent">
            <h4 className="title">INFO</h4>
            <ul className="sub-links">
              <li className="hover-link">Our Company</li>
              <li className="hover-link">Blog</li>
              <li className="hover-link">Contact</li>
              <li className="hover-link">Jamshion Social</li>
            </ul>
          </div>

          <div className="footer-subcontent">
            <h4 className="title">HELP</h4>
            <ul className="sub-links">
              <li className="hover-link">Terms and Conditions</li>
              <li className="hover-link">Shipping & Returns</li>
              <li className="hover-link">Privacy Policy</li>
              <li className="hover-link">Copyright</li>
            </ul>
          </div>

          <div className="footer-subcontent">
            <h4 className="title">SHOP</h4>
            <ul className="sub-links">
              <li className="hover-link">My Account</li>
              <li className="hover-link">Orders</li>
              <li className="hover-link">FAQ's</li>
              <li className="hover-link">My Wishlist</li>
            </ul>
          </div>

          <div className="follow-info">
            <div className="follow-info-content">
              <div className="follow-us">
                <h4>FOLLOW US</h4>
                <ul className="follow">
                  <img src="./assets/instagram.png" alt="logo" />
                  <img src="./assets/facebook.png" alt="logo" />
                  <img src="./assets/twitter.png" alt="logo" />
                  <img src="./assets/linkedin.png" alt="logo" />
                  {/* <li classname="hover-link">
                    <AiOutlineInstagram />
                  </li>
                  <li classname="hover-link">
                    <AiOutlineFacebook />
                  </li>
                  <li classname="hover-link">
                    <AiOutlineTwitter />
                  </li>
                  <li classname="hover-link">
                    <AiOutlineMail />
                  </li> */}
                </ul>
              </div>
              <div className="email">
                <img src="./assets/gmail.png" alt="logo" />
                <p>jamshion.india@gmail.com</p>
              </div>
              <div className="city" style={{ marginTop: "10px" }}>
                <img src="./assets/placeholder.png" alt="logo" />
                <p>Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="subfooter-container">
          <img src="./assets/sales.png" alt="announcement" />
          <div className="subfooter">
            <p>
              Crafted with <img src="./assets/heart.png" alt="heart-image" /> in
              New Delhi
            </p>
            <p style={{ fontStyle: "normal", marginTop: "10px" }}>
              ©️ 2023 | Jamshion India. All Rights Reserved.
            </p>
          </div>
          <img src="./assets/messenger.png" alt="messenger" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
