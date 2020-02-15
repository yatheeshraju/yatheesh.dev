import React, { Component } from 'react'

export default class MainNav extends Component {
    render() {
         return (
            <div>
            <nav>
            <div className='title'>
                <li>
                    <a href="\">yathee.sh</a>
                </li>
            </div>
                <div className='menu'>
                <li>
                    <a href="\about">about</a>
                </li>
                <li>
                    <a href="https:\\yatheesh5.wordpress.com" >blog</a>
                </li>
                <li>
                    <a href="\contact">contact</a>
                </li>
                </div>
            </nav>
            </div>
        )
    }
}
