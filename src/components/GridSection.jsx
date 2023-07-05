import React from "react";
import "./GridSection.scss";

function GridSection() {
  return (
    <div className="GridSection">
      <div className="container grid-container-section">
        <div className="grid-heading">
          <h1>Jamshion at a Glance</h1>
        </div>

        <div className="grid">
          <div className="child">
            <div className="grid-img">
              <img src="./assets/1.png" alt="grid-image" />
            </div>

            <h3>1500+</h3>
            <p>Followers (across platforms)</p>
          </div>
          <div className="child">
          <div className="grid-img">
              <img src="./assets/2.png" alt="grid-image" />
            </div>
            <h3>2200+</h3>
            <p>Orders Fulfilled</p>
          </div>
          <div className="child">
          <div className="grid-img">
              <img src="./assets/3.png" alt="grid-image" />
            </div>
            <h3>78%</h3>
            <p>Repeat Sales</p>
          </div>
          <div className="child">
          <div className="grid-img">
              <img src="./assets/4.png" alt="grid-image" />
            </div>
            <h3>4.9/5</h3>
            <p>Overall Rating</p>
          </div>
          <div className="child">
          <div className="grid-img">
              <img src="./assets/5.png" alt="grid-image" />
            </div>
            <h3>114</h3>
            <p>Districts Reached (India)</p>
          </div>
          <div className="child">
          <div className="grid-img">
              <img style={{transform:"scale(0.95)"}}  src="./assets/6.png" alt="grid-image" />
            </div>
            <h3>12+</h3>
            <p>Countries Catered</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridSection;
