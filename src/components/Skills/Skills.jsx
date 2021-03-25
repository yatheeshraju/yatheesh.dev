import React, { Component } from "react";
import "./Skills.scss";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills" id="skills">
        <h1>
          {" "}
          <a href="\#skills"># SKILLS</a>
        </h1>

        <div className="skillwrap">
          <div className="skillbox">
            <i className="devicon-html5-plain colored"></i>HTML
          </div>
          <div className="skillbox">
            <i className="devicon-css3-plain colored"></i>CSS
          </div>
          <div className="skillbox">
            <i className="devicon-javascript-plain colored"></i>JavaScript
          </div>
          <div className="skillbox">
            <i className="devicon-react-plain colored"></i>React
          </div>
          <div className="skillbox">
            <i className="devicon-redux-plain colored"></i>Redux
          </div>
          <div className="skillbox">
            <i className="devicon-nodejs-plain colored"></i>Node
          </div>
          <div className="skillbox">
            <i className="devicon-express-original"></i>Express
          </div>
          <div className="skillbox">
            <i className="devicon-mongodb-plain colored"></i>Mongo
          </div>
          <div className="skillbox">
            <i className="devicon-firebase-plain colored"></i>Firebase
          </div>
          <div className="skillbox">
            <i className="devicon-amazonwebservices-plain colored"></i>AWS
          </div>
          <div className="skillbox">
            <i className="devicon-materialui-plain colored"></i>Material UI
          </div>
          <div className="skillbox">
            <i className="devicon-bootstrap-plain colored"></i>Bootstrap
          </div>
        </div>
      </div>
    );
  }
}
