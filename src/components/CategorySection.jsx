import React from "react";
import "./CategorySection.scss";

function CategorySection() {
  return (
    <div className="CategorySection">
      <div className="heading">
        <h1>Welcome to Jamshion E-Store</h1>
        <p>Keep up with latest trends & get exclusive items from Jamshion</p>
      </div>
      <div className="category-card">
        <div className="card-container">
          <img src="./assets/category1.png" alt="category-images" />
          <div className="overlay">
            <h2>Modest Collection</h2>
          </div>
          <div className="overlay2">
            <button>Shop Now</button>
          </div>
        </div>

        <div className="card-container">
          <img src="./assets/category2.png" alt="category-images" />
          <div className="overlay">
            <h2>Hijabs</h2>
          </div>
          <div className="overlay2">
            <button>Shop Now</button>
          </div>
        </div>

        <div className="card-container">
          <img src="./assets/category3.png" alt="category-images" />
          <div className="overlay">
            <h2>ACCESSORIES</h2>
          </div>
          <div className="overlay2">
            <button>Shop Now</button>
          </div>
        </div>

        <div className="card-container">
          <img src="./assets/category4.png" alt="category-images" />
          <div className="overlay">
            <h2>ISLAMIC GIFTS</h2>
          </div>
          <div className="overlay2">
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <img className="below-category-img" src="./assets/below-category-image2.png" alt="category-below" />
    </div>
  );
}

export default CategorySection;
