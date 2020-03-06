import React, { Component } from 'react';
import './Home.scss';
import yath from './../../image/yath.jpg';
export class Home extends Component {
    render() {
        return (
            <div className='home' id='home'>
                <div>
                   Hey ! I am
                   <br/> <span>Yatheesh Konduru</span> 
                   <br/>Technology Analyst 
                </div>
                <div>
                     
                    <img src={yath} alt='yatheesh'/>
                    
                </div>
            </div>
        )
    }
}

export default Home;
