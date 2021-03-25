import React, { Component } from "react";
import "./Home.scss";
import { RiTwitterLine, RiMailLine, RiGithubLine } from "react-icons/ri";
import { AiOutlineFilePdf, AiOutlineLinkedin } from "react-icons/ai";
export class Home extends Component {
  render() {
    return (
      <div className="home" id="home">
        <div className="box">
          <span className="name">Yatheesh Konduru</span>
          <span className="tagline"> Web Developer</span>
          <hr className="line" />
          <span className="links">
            <a href="https://twitter.com/_yathee_/">
              <RiTwitterLine size="2em" />
            </a>
            <a href="mailto:yatheesh.konduru@gmail.com">
              <RiMailLine size="2em" />
            </a>
            &nbsp;
            <a href="https://in.linkedin.com/in/yatheeshkonduru">
              <AiOutlineLinkedin size="2em" />
            </a>
            &nbsp;
            <a href="https://github.com/yatheeshraju">
              <RiGithubLine size="2em" />
            </a>
            &nbsp;
            <a href="/Yatheesh_Resume_Web_Developer_2020.pdf" download>
              <AiOutlineFilePdf size="2em" />
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
