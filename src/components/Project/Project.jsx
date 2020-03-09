import React from 'react';
import './Project.scss';

function Project(props) {
    return (
        <div className='project'>
                <a href={props.project.projectLink} target='_window'>
                <div className='textonimg'>
                    {props.project.projectName}
                 </div>
                </a>
        </div>
    )
}

export default Project
