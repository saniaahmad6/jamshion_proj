import React from "react";
import "./EmailSection2.scss";
import { AiTwotoneHeart } from "react-icons/ai";

function EmailSection2() {
  return (
    <div className="EmailSection2">
      <div className="container email-section-container">
        <div className="email-section-image">
          <img
            src="./assets/email-section-img2.png"
            alt="email-section-image"
          />
        </div>

        <div className="email-overlay"></div>

        <div className="email-section-content">
          <div className="top">
            <h2>WANT EXCLUSIVE DISCOUNTS?</h2>
            <p>
              Get early access to special offers and new products. Don't worry;
              we won't spam.{" "}
              <p>
                <i>Dil se promise</i>{" "}
                <AiTwotoneHeart
                  style={{ fontSize: "35px", color: "#6b9c73" }}
                />
              </p>
            </p>
          </div>

          <div className="subscribe-email">
            <div className="subscribe-email-input">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <button type="submit subscribe-email-btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSection2;
