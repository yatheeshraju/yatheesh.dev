import React, { Component } from "react";
import "./Experience.scss";

export class Experience extends Component {
  render() {
    return (
      <div className="experience" id="experience">
        <h1>
          <a href="\#experience"># EXPERIENCE</a>
        </h1>
        <div>
          <li>
            <span>Application Development Senior Analyst - Accenture</span>
            <br />
            <span>Jan 2021 -Today </span>
          </li>
          <li>
            <span>Technology Analyst - Infosys</span>
            <br />
            <span>Apr. 2018 -Dec 2020 </span>
          </li>
          <li>
            <span>Senior Systems Engineer - Infosys</span>
            <br />
            <span> Jan. 2015 - Mar. 2018 </span>
          </li>
          <li>
            <span>Engineer - Startup</span>
            <br />
            <span> Jun. 2012- Dec. 2014 </span>
          </li>
          <li>
            <span>B.Tech - NECG (JNTUA)</span>
            <br />
            <span>2008 - 2012</span>
          </li>
        </div>
      </div>
    );
  }
}

export default Experience;
