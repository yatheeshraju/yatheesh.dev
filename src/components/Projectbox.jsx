import React, { Component } from 'react'

export default class Projectbox extends Component {
    render() {
        return (
            <div className='card'>
            <a href='https://easymergepdf.herokuapp.com/'>
            <img src={this.props.data.img} alt='projectsnap'></img>
             <div className='card-content'>
             <h3>{this.props.data.name}</h3>
             </div>
             </a>
            </div>
        )
    }
}
