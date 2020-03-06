import React, { Component } from 'react';
import './MainFooter.scss';

export class MainFooter extends Component {
    render() {
        var year = new Date();
        return (
            <div className='mainfooter'>
                <h3> {year.getFullYear()} &copy; yathee.sh </h3>
                <a href='/#home'>back to top </a>
               
            </div>
        )
    }
}

export default MainFooter;
