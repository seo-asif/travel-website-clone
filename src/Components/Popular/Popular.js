import React from "react";
import "./popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

//import the images

import img1 from "../../Assets/bgHome.png";
import img2 from "../../Assets/bgHome.png";
import img3 from "../../Assets/bgHome.png";
import img4 from "../../Assets/bgHome.png";

const Data = [
  {
    id: "01",
    imgSrc: img1,
    desTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
  },
  {
    id: "02",
    imgSrc: img2,
    desTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
  },
  {
    id: "03",
    imgSrc: img3,
    desTitle: "Angkor Wat",
    location: "Combodia",
    grade: "CULTURAL RELAX",
  },
  {
    id: "04",
    imgSrc: img4,
    desTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
  },
];

const hello = () => {
  console.log(Data["imgSrc"]);
};
hello();

function Popular() {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specteculars, come to see the
              best of the world!
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, desTitle, location, grade }) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt=" Title" />

                  <div className="overlayinfo ">
                    <h3>{desTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">{id}</div>

                  <div className="destText flex">
                    <h3>{location}</h3>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Popular;
