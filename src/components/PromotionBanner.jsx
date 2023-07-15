import React from "react";
import "./PromotionBanner.scss";

function PromotionBanner() {
  return (
    <div className="PromotionBanner">
      <div className="container promotion-banner-container">
        <div className="promotion-banner-left">
          <div className="headings">
            <h1>LET THE WORLD HEAR YOU LOUD</h1>
            <p>Take the challenge to grow the library of modest</p>
            <p style={{ textAlign: "end" }}>fashion on internet</p>
          </div>

          <div className="hashtag-img">
            <img src="./assets/hashtag3.png" alt="hashtag" />
          </div>
          <p className="icon-heading">
            Tag us for a chance to be featured on our official pages
          </p>
          <div className="icons-img">
            <img src="./assets/facebook-banner.png" alt="facebook" />
            <img src="./assets/insta-banner.png" alt="instagram" />
            <img src="./assets/twitter-banner.png" alt="twitter" />
          </div>
        </div>

        <div className="promotion-banner-right">
          <img src="./assets/women2.png" alt="women" />
        </div>
      </div>
    </div>
  );
}

export default PromotionBanner;
