import React, { Component } from 'react'

export default class MainFooter extends Component {
    render() {
        return (
            <div className='mainfooter'>
                <div className='leftfoot'>
                2020 @ yathee.sh
                </div>
                
                <div className='rightfoot'>
                    <li><a href="\about">about</a></li>
                    <li><a href="\blog">blog</a></li>
                    <li><a href="\contact">contact</a></li>
                    <li><a href="\privacy">privacy</a></li>
                </div>
                
            </div>
        )
    }
}
