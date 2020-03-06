import React, { Component } from 'react';
import './Experience.scss';

export class Experience extends Component {
    render() {
        return (
            <div className='experience' id='experience'>
                <h1> <a href='\#experience'># EXPERIENCE</a></h1>
                <div>
                <span>Technology Analyst@ Infosys</span>Today - Apr. 2018 <br/>
                <span>Senior Systems Engineer @ Infosys</span>Mar. 2018 - Jan. 2015<br/>
                <span>Engineer @ Startup</span> Dec. 2014 - Jun. 2012<br/>
                <span>B.Tech @ NECG (JNTUA)</span>2012 - 2008<br/>
                </div>
            </div>
        )
    }
}

export default Experience
