import React from "react";
import "./home.css";

function Home() {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Plan Your Trip With Travel Dot</h1>

          <p className="subtitle">
            Travel to your favourite city with respectful of the envireonment!
          </p>

          <button className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>

          <div className="distDiv">
            <label htmlFor="distance">Area</label>
            <input type="text" placeholder="11/Meters" />
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="Dream $140-$500" />
          </div>

          <button className="btn ">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
