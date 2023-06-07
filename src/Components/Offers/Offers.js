import React from "react";
import "./offer.css";
import {
  MdAirportShuttle,
  MdBathtub,
  MdKingBed,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

import img5 from "../../Assets/bgHome.png";
import img6 from "../../Assets/bgHome.png";
import img7 from "../../Assets/bgHome.png";

const Offer = [
  {
    id: "1",
    imgSrc: img5,
    stTdeitle: "Machu Picchu",
    location: "China",

    price: "$7,452",
  },

  {
    id: "2",
    imgSrc: img6,
    stTdeitle: "Guanajuato",
    location: "Mexico",

    price: "$2,452",
  },

  {
    id: "3",
    imgSrc: img7,
    stTdeitle: "Angkor Wat",
    location: "Combodia",

    price: "$4,400",
  },
];

function Offers() {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From historical cities to natural spectecular,come see the best
            world.
          </p>
        </div>

        <div className="mainContent grid">
          {Offer.map(({ id, imgSrc, stTdeitle, location, grade, price }) => {
            return (
              <div className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt={stTdeitle} />

                  <span className="discount">30%off</span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                </div>

                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className="icon" />
                    <small>2 Beds</small>
                  </div>

                  <div className="singleAmenity flex">
                    <MdBathtub className="icon" />
                    <small>1 Bath </small>
                  </div>

                  <div className="singleAmenity flex">
                    <FaWifi className="icon" />
                    <small>Wi-fi</small>
                  </div>

                  <div className="singleAmenity flex">
                    <MdAirportShuttle className="icon" />
                    <small>shuttle</small>
                  </div>

                  <div className="location flex"></div>
                  <MdLocationOn className="icon" />
                  <small> {location}</small>
                </div>

                <div className="flex OfferBtn">
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon bsarrowleft" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Offers;
