import React from "react";
import "./GridSection.scss";

function GridSection() {
  return (
    <div className="GridSection">
      <div className="container grid-container-section">
        <div className="grid-heading">
          <h1>PrepCanvas at a Glance</h1>
        </div>

        <div className="grid">
          <div className="child">
            <h1>50+</h1>
            <p>50+ expert authors</p>
          </div>
          <div className="child">
            <h1>99%</h1>
            <p>Trusted by 90% students</p>
          </div>
          <div className="child">
            <h1>1K+</h1>
            <p>serving 1000+ students</p>
          </div>
          <div className="child">
            <h1>29</h1>
            <p>Available for all states</p>
          </div>
          <div className="child">
            <h1>100+</h1>
            <p>100+ employees</p>
          </div>
          <div className="child">
            <h1>50+</h1>
            <p>HeadQuarter in Delhi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridSection;
