import React, { Component } from 'react';
import './Projects.scss';   
import projects from './projects.js';
import Project from './../Project/Project';

export class Projects extends Component {
  
    render() {
        return (
            <div className='projects' id='projects'>
                <h1> <a href='\#projects'># PROJECTS</a></h1>
                <div>
                {projects.map((project)=><Project key={project.id} project={project}/>)}
                </div>
            </div>
        )
    }
}

export default Projects
