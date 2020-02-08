import React, { Component } from 'react';

export default class VideoBox extends Component {
    render() {
        return (
            <div className='card'>
             <iframe  width='100%' height='100%' src={'https://www.youtube.com/embed/'+this.props.data.url+'?controls=0'} title={this.props.data.title} 
                allowFullScreen  allowtransparency='true'>    
            </iframe>
             <div className='card-content'>
             <h3>{this.props.data.title}</h3>
             </div>
            </div>
        )
    }
}
