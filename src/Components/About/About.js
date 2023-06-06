import React from "react";
import "./about.css";

//import images
import climbing from "../../Assets/hikings.png";
import mountain from "../../Assets/climbing.png";
import customer from "../../Assets/customer.png";
import img from "../../Assets/bgHome.png"
import video from "../../Assets/videoplayback.webm";

function About() {
  return (
    <section className="section about ">
      <div className="secContainer">
        <div className="title">
          <h2>Why Hikings?</h2>
        </div>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={mountain} alt="mountain" />
            <h3>100+ Mountains</h3>
            <p>
              Embark on an extraordinary journey, test your limits, and discover
              breathtaking vistas. Conquer mountains, embrace the challenge, and
              let nature's majesty ignite your spirit.
            </p>
          </div>

          <div className="singleItem">
            <img src={climbing} alt="climbing" />
            <h3>100+ Hikings</h3>
            <p>
              Escape into nature's embrace, breathe in fresh air, and find
              solace on the trails. Immerse yourself in the beauty of hiking,
              explore treasures and let the mountains whisper their secrets.
            </p>
          </div>
          <div className="singleItem">
            <img src={customer} alt="customer" />
            <h3>100+ Customer</h3>
            <p>
              Our customers are more than clients; they become fellow
              adventurers. We strive to create experiences, tailored to your
              desires. Trust us to unlock the world's wonders.
            </p>
          </div>

          <div className="videoCard container">
            <div className="cardContent grid">
              <div className="cardText">
                <h2>Wonderful House experience in there!</h2>
                <p>
                  the adventure subranking is based on an equally weighted
                  average of scores from five country.
                </p>
              </div>
              <div className="cardVideo">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  type="video/webm"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
