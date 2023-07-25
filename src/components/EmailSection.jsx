import React from "react";

import {AiTwotoneHeart} from "react-icons/ai";

function EmailSection() {
  return (
    <div className="EmailSection">
      <div className="container email-section-container">
        <div className="email-section-content left">
          <h1>WANT EXCLUSIVE DISCOUNTS?</h1>
        </div>

        <div className="email-section-content middle">
          <p>
            Get early access to special offers and new products. Don't worry; we
            won't spam. <p><i>Dil se promise</i> <AiTwotoneHeart style={{fontSize:"35px", color:"#6b9c73"}}/></p> 
          </p>
        </div>

        <div className="email-section-content subscribe-email">
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
  );
}

export default EmailSection;
