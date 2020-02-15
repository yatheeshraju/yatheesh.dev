import React, { Component } from 'react';
import yathimg from './../images/yathimg.jpg';

export default class About extends Component {
    render() {
        return (
            <div className='content'>
                <div className='content-text'>
                <p>     Hey ! My name is Yatheesh Konduru and friends call me yatheesh or yathi .</p>
                <br/>
                <p> I have started my journey into IT industry as a game developer .
                    Have developed a few games using unity3d .</p>
                <br/>
                <p>I worked at a startup for 2 years and then joined my full time job as Senior Systems Engineer.
                    I have worked on quality analysis of various mobile and web applications.I have used java, python, selenium, jenkins, testng for automation.</p>
                <br/>
                <p>Soon i progressed to become Technology Analyst .My interest in web applications have led me to reskill my self as a web developer.
                    I have developed applications using pure HTML, CSS, JavaScript. I have also gained experience in using JQuery,twitter bootstrap during this time .</p>
                <br/>
                <p>To take this to next level i have skilled myself in ReactJS and ExpressJS.I have worked with mongodb for database.
                    you can find the applications i have developed on my github .
                </p>

                <br/>
                <p>Every thing and anything technology intrests me . I challenge myself to learn new technologies, create new applications, make devices and many more.</p>
                <br/>
                 <p>fav quote "the day you stopped learning is the day you died" .</p>
                 <br/>
                <p>Thanks for reading ! have a nice day !</p>
                </div>
                <span className='space'></span>
                <div className='content-image'>
                    <img src={yathimg} alt="yatheesh"/>
                </div>
                </div>
        )
    }
}
