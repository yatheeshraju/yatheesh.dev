import React, { Component } from 'react';
import Projectbox from './Projectbox';
import easymergepdf from './../images/easymergepdf.png';

export default class RecentProject extends Component {
    
    render() {
        const project={name:'easy merge pdf - a simple pdf merger ',img:easymergepdf};
        return (
            <div className='recent'>
                <div className='cards'>
                <Projectbox data={project}/>
                </div>
                <span className='space'></span>
                <div className='title'> <h3 >latest project </h3></div>
            </div>
        )
    }
}
