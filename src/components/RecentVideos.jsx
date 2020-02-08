import React, { Component } from 'react';

import Videos from './../data/youtube';
import VideoBox from './VideoBox';

export default class RecentVideos extends Component {
    constructor(props){
        super(props);
        this.state={
            video:[]
        };
    }

    componentDidMount(){
        const lastvid= Videos.length-1;
        const video =Videos[lastvid];
        this.setState({
            'video':video
        });
    }

    render() {
        return (
            <div className='recent'>
                
                <div className='title'> <h3 >latest video </h3></div>
                <span className='space'></span>
                <div className='cards'>
                <VideoBox data={this.state.video}/>
                </div>
            </div>
        )
    }
}
