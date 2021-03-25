import React, { useEffect } from "react";
import "./MainNav.scss";

function MainNav() {
  const color_change = () => {
    var number_one = Math.floor(Math.random() * 255);
    var number_two = Math.floor(Math.random() * 255);
    var number_three = Math.floor(Math.random() * 255);

    document.getElementById(
      "navbar"
    ).style.boxShadow = `0 0 55px 0 rgba(${number_one}, ${number_two}, ${number_three},0.5)`;
    document.getElementById(
      "brand"
    ).style.boxShadow = `0 0 55px 0 rgba(${number_one}, ${number_two}, ${number_three},0.5)`;
    document.getElementById(
      "brand"
    ).style.border = `2px solid rgba(${number_one}, ${number_two}, ${number_three},0.5)`;
  };

  window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (this.window.pageYOffset >= this.window.innerHeight - 80) {
      navbar.classList.add("fixed");
      // navbar.classList.remove("relative");
    } else {
      navbar.classList.remove("fixed");
      //navbar.classList.add("relative");
    }
  };
  useEffect(() => {
    setInterval(color_change, 600);
  }, []);
  return (
    <nav id="navbar">
      <li>
        <a href="\#home" id="brand">
          Y
        </a>
      </li>
      <li>
        <a href="\#skills">SKILLS</a>
      </li>
      <li>
        <a href="\#experience">XP</a>
      </li>
      <li>
        <a href="\#projects">PROJECTS</a>
      </li>
      <li>
        <a href="\#blog">BLOG</a>
      </li>
    </nav>
  );
}

export default MainNav;
