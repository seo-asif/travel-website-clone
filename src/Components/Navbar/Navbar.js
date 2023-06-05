/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  //code to toggle/show navBar

  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //code to hide navBar
  const hideNav = () => {
    setActive("navBar");
  };

  //code to add background color to header...

  const [transparent, setTransparent] = useState("header");
  const addBG = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };

  window.addEventListener("scroll", addBG);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h2 className="flex">
              <SiYourtraveldottv className="icon" />
              Dot
            </h2>
          </a>
        </div>

        <div className={active}>
          <ul className="navlists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contacts
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn" id="login">
                <a href="#">Login</a>
              </button>
              <button className="btn">
                <a href="#">SignUp</a>
              </button>
            </div>
          </ul>

          <div onClick={hideNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
