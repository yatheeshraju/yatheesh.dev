import React, { Component } from 'react';
import './Home.scss';
import yath from './../../image/yath.jpg';
export class Home extends Component {
    render() {
        return (
            <div className='home' id='home'>
                <div>
                <div>
                     
                     <img src={yath} alt='yatheesh'/>
                     
                 </div> 
                   <br/> <span>Yatheesh Konduru</span> 
                   <br/>Web Developer 
                   <br/>
                   <hr/>
                   <span className="links">
                        <a href="mailto:yatheesh.konduru@gmail.com">email</a> &nbsp;
                        <a href="https://in.linkedin.com/in/yatheeshkonduru">linkedin</a> &nbsp;
                        <a href="https://github.com/yatheeshraju">github</a> &nbsp;
                        <a href="/Yatheesh_Resume_Web_Developer_2020.pdf" download>resume</a>
                 </span>
                </div>
                
              
            </div>
        )
    }
}

export default Home;
